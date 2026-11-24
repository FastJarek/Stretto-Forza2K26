package com.tacticalstrike.mobile;

import android.app.Activity;
import android.os.Build;
import android.os.Bundle;
import android.view.InputDevice;
import android.view.MotionEvent;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.window.OnBackInvokedCallback;
import android.window.OnBackInvokedDispatcher;

/**
 * Tactical Strike — natywna powłoka WebView ładująca grę 3D z assets.
 * WebView zapewnia WebGL (hardware acceleration), dotyk, klawiaturę i localStorage.
 * Myszy OTG/Bluetooth są mostkowane do JS, bo WebView często nie ma pointer lock.
 */
public class MainActivity extends Activity {
    private WebView web;

    // Ostatnia pozycja kursora — stąd liczymy delta ruchu myszy.
    private float lastMouseX = Float.NaN;
    private float lastMouseY = Float.NaN;
    // Dedupe: ACTION_DOWN i ACTION_BUTTON_PRESS potrafią przyjść dla tego samego przycisku.
    private final boolean[] mouseButtonDown = new boolean[3];

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        requestWindowFeature(Window.FEATURE_NO_TITLE);
        getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN
                | WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON,
                WindowManager.LayoutParams.FLAG_FULLSCREEN
                | WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);

        web = new WebView(this);
        WebSettings s = web.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setDatabaseEnabled(true);
        s.setAllowFileAccess(true);
        s.setAllowContentAccess(true);
        // Pliki index.html / styles.css / game.js są ładowane z file:///android_asset/.
        s.setAllowFileAccessFromFileURLs(true);
        s.setAllowUniversalAccessFromFileURLs(true);
        s.setLoadWithOverviewMode(true);
        s.setUseWideViewPort(true);
        s.setMediaPlaybackRequiresUserGesture(false);
        s.setCacheMode(WebSettings.LOAD_NO_CACHE);
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            s.setMixedContentMode(WebSettings.MIXED_CONTENT_ALWAYS_ALLOW);
        }

        web.setWebViewClient(new WebViewClient());
        web.setWebChromeClient(new WebChromeClient());
        web.setFocusable(true);
        web.setFocusableInTouchMode(true);
        web.loadUrl("file:///android_asset/index.html");
        setContentView(web);
        // Focus must be requested after the view is attached, otherwise the
        // physical keyboard can be delivered to the Activity instead of WebView.
        web.requestFocus();
        web.requestFocusFromTouch();

        // BACK: nie zamykamy aktywności — grę obsługuje window.tsBack().
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
            getOnBackInvokedDispatcher().registerOnBackInvokedCallback(
                    OnBackInvokedDispatcher.PRIORITY_DEFAULT,
                    new OnBackInvokedCallback() {
                        @Override
                        public void onBackInvoked() {
                            notifyBackToGame();
                        }
                    });
        }

        getWindow().getDecorView().setOnSystemUiVisibilityChangeListener(
                new View.OnSystemUiVisibilityChangeListener() {
                    @Override
                    public void onSystemUiVisibilityChange(int visibility) {
                        hideSystemUI();
                    }
                });
        hideSystemUI();
    }

    private void hideSystemUI() {
        View decor = getWindow().getDecorView();
        decor.setSystemUiVisibility(
                View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                        | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                        | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                        | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
                        | View.SYSTEM_UI_FLAG_FULLSCREEN
                        | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);
    }

    @Override
    public void onWindowFocusChanged(boolean hasFocus) {
        super.onWindowFocusChanged(hasFocus);
        if (hasFocus) hideSystemUI();
    }

    @Override
    public void onBackPressed() {
        notifyBackToGame();
    }

    private void notifyBackToGame() {
        eval("if (window.tsBack) window.tsBack();");
    }

    private void eval(String script) {
        if (web != null) {
            web.evaluateJavascript(script, null);
        }
    }

    /** 0=lewy, 1=prawy, 2=środkowy. */
    private static int buttonOf(MotionEvent ev) {
        int actionButton = ev.getActionButton();
        if (actionButton == MotionEvent.BUTTON_PRIMARY) return 0;
        if (actionButton == MotionEvent.BUTTON_SECONDARY) return 1;
        if (actionButton == MotionEvent.BUTTON_TERTIARY) return 2;

        // ACTION_UP/ACTION_SCROLL nie zawsze niosą actionButton — używamy stanu przycisków.
        int state = ev.getButtonState();
        if ((state & MotionEvent.BUTTON_TERTIARY) != 0) return 2;
        if ((state & MotionEvent.BUTTON_SECONDARY) != 0) return 1;
        return 0;
    }

    private void emitButton(int button, boolean down) {
        if (button < 0 || button > 2 || mouseButtonDown[button] == down) return;
        mouseButtonDown[button] = down;
        eval("window.__nativeMouse && window.__nativeMouse(" + button + ", " + down + ");");
    }

    private static boolean isMouse(MotionEvent ev) {
        int source = ev.getSource();
        return (source & InputDevice.SOURCE_MOUSE) != 0
                || (source & InputDevice.SOURCE_MOUSE_RELATIVE) != 0;
    }

    private void handleMouse(MotionEvent ev) {
        switch (ev.getActionMasked()) {
            case MotionEvent.ACTION_MOVE:
            case MotionEvent.ACTION_HOVER_MOVE: {
                float x = ev.getX();
                float y = ev.getY();
                if (!Float.isNaN(lastMouseX) && !Float.isNaN(lastMouseY)) {
                    float dx = x - lastMouseX;
                    float dy = y - lastMouseY;
                    if (dx != 0f || dy != 0f) {
                        eval("window.__nativeLook && window.__nativeLook("
                                + Float.toString(dx) + ", " + Float.toString(dy) + ");");
                    }
                }
                lastMouseX = x;
                lastMouseY = y;
                break;
            }
            case MotionEvent.ACTION_DOWN:
            case MotionEvent.ACTION_BUTTON_PRESS:
                lastMouseX = ev.getX();
                lastMouseY = ev.getY();
                emitButton(buttonOf(ev), true);
                break;
            case MotionEvent.ACTION_UP:
            case MotionEvent.ACTION_BUTTON_RELEASE:
                emitButton(buttonOf(ev), false);
                break;
            case MotionEvent.ACTION_SCROLL:
                eval("window.__nativeWheel && window.__nativeWheel("
                        + Float.toString(ev.getAxisValue(MotionEvent.AXIS_VSCROLL)) + ");");
                break;
            case MotionEvent.ACTION_HOVER_ENTER:
            case MotionEvent.ACTION_HOVER_EXIT:
                lastMouseX = ev.getX();
                lastMouseY = ev.getY();
                break;
            default:
                break;
        }
    }

    /** Dotyk i klawiatura idą normalnie do WebView; zdarzenia myszy konsumujemy. */
    @Override
    public boolean dispatchTouchEvent(MotionEvent ev) {
        if (isMouse(ev)) {
            handleMouse(ev);
            return true;
        }
        return super.dispatchTouchEvent(ev);
    }

    /** Hover, scroll i dodatkowe przyciski myszy przychodzą przez generic motion. */
    @Override
    public boolean dispatchGenericMotionEvent(MotionEvent ev) {
        if (isMouse(ev)) {
            handleMouse(ev);
            return true;
        }
        return super.dispatchGenericMotionEvent(ev);
    }
}
