import { build } from 'esbuild';
import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
mkdirSync(resolve(root, 'dist'), { recursive: true });

await build({
  entryPoints: [resolve(root, 'src/main.js')],
  bundle: true,
  format: 'iife',
  target: ['es2019'],
  minify: true,
  legalComments: 'none',
  outfile: resolve(root, 'dist/game.js'),
  logLevel: 'info',
});

copyFileSync(resolve(root, 'src/index.template.html'), resolve(root, 'dist/index.html'));
copyFileSync(resolve(root, 'src/styles.css'), resolve(root, 'dist/styles.css'));

for (const f of ['index.html', 'styles.css', 'game.js']) {
  const p = resolve(root, 'dist', f);
  console.log(`${f}: ${(statSync(p).size / 1024).toFixed(0)} KB`);
}
