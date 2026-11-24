(()=>{function ve(n,e,t,i,s,r="wall",o={}){return{x:n,z:e,w:t,d:i,h:s,mat:r,...o}}function Nh(){let n=[];return n.push(ve(0,-33,68,2,7,"wall")),n.push(ve(0,33,68,2,7,"wall")),n.push(ve(-33,0,2,68,7,"wall")),n.push(ve(33,0,2,68,7,"wall")),n.push(ve(-25.5,20,15,1.6,7,"wall")),n.push(ve(-5,20,4,1.6,7,"wall")),n.push(ve(5,20,4,1.6,7,"wall")),n.push(ve(25.5,20,15,1.6,7,"wall")),n.push(ve(-18,12,1.2,16,7,"wall")),n.push(ve(-7,12,1.2,16,7,"wall")),n.push(ve(-4,12,1.2,16,7,"wall")),n.push(ve(4,12,1.2,16,7,"wall")),n.push(ve(7,12,1.2,16,7,"wall")),n.push(ve(18,12,1.2,16,7,"wall")),n.push(ve(-8,-20,1.2,12,7,"wall")),n.push(ve(-8,-8,1.2,4,7,"wall")),n.push(ve(8,-20,1.2,12,7,"wall")),n.push(ve(8,-8,1.2,4,7,"wall")),n.push(ve(-5,-17,1.2,6,7,"wall")),n.push(ve(-5,-5,1.2,10,7,"wall")),n.push(ve(5,-17,1.2,6,7,"wall")),n.push(ve(5,-5,1.2,10,7,"wall")),n.push(ve(-27.5,-24,11,1.2,7,"wall")),n.push(ve(-8.5,-24,11,1.2,7,"wall")),n.push(ve(8.5,-24,11,1.2,7,"wall")),n.push(ve(27.5,-24,11,1.2,7,"wall")),n.push(ve(-28,-12,6,1,2.2,"low")),n.push(ve(28,-12,6,1,2.2,"low")),n.push(ve(-28,6,6,1,2.2,"low")),n.push(ve(28,6,6,1,2.2,"low")),n.push(ve(-23,-17,3,2.4,1.25,"crate")),n.push(ve(-14,-13,2.2,3,1.25,"crate")),n.push(ve(-19,-21,4,1.6,1.25,"crate")),n.push(ve(-24,-10,2,2,1.1,"barrel")),n.push(ve(-13,-20,1.6,1.6,1.35,"barrel")),n.push(ve(23,-17,3,2.4,1.25,"crate")),n.push(ve(14,-13,2.2,3,1.25,"crate")),n.push(ve(19,-21,4,1.6,1.25,"crate")),n.push(ve(24,-10,2,2,1.1,"barrel")),n.push(ve(13,-20,1.6,1.6,1.35,"barrel")),n.push(ve(-12,13,2.4,2,1.2,"crate")),n.push(ve(12,13,2.4,2,1.2,"crate")),n.push(ve(-12,6,1.8,1.8,1.2,"barrel")),n.push(ve(12,6,1.8,1.8,1.2,"barrel")),n.push(ve(0,14,2.6,2,1.2,"crate")),n.push(ve(0,8,2,2,1.2,"crate")),n.push(ve(0,-1,2.4,1.8,1.2,"crate")),n.push(ve(0,-10,2.4,2,1.2,"crate")),n.push(ve(-12,-1,2,2,1.2,"crate")),n.push(ve(12,-1,2,2,1.2,"crate")),n}var rs=Nh(),Ve={size:66,half:33,walls:rs,sites:{A:{x:-18,z:-16,w:11,d:10},B:{x:18,z:-16,w:11,d:10}},spawns:{T:[[-12,26],[-4,27],[4,27],[12,26],[0,30]],CT:[[-6,-29],[0,-29],[6,-29],[-11,-27],[11,-27]]},nav:{cell:1,origin:-33,count:66}},Pe={PLAYER_RADIUS:.36,BOT_RADIUS:.38,EYE_STAND:1.62,EYE_CROUCH:1.08,HEIGHT_STAND:1.8,HEIGHT_CROUCH:1.25,GRAVITY:22,JUMP_SPEED:7.2,WALK_SPEED:3.1,RUN_SPEED:5,CROUCH_SPEED:2.1,AIR_CONTROL:.42,FRICTION:9,FREEZE_TIME:7,ROUND_TIME:115,PLANT_TIME:3.2,DEFUSE_TIME:10,BOMB_TIME:40,ROUND_END_TIME:5,WIN_SCORE:13,START_MONEY:800,MAX_MONEY:16e3,KILL_REWARD:300,PLANT_REWARD:800,DEFUSE_REWARD:800},Mt={knife:{id:"knife",name:"N\xF3\u017C",dmg:55,rpm:130,mag:0,reserve:0,reload:0,spread:0,armorPen:1,headMult:1.6,range:2.2,auto:!1,melee:!0,price:0,move:1.12},pistol:{id:"pistol",name:"P-250",dmg:32,rpm:380,mag:13,reserve:52,reload:1.9,spread:.007,armorPen:.5,headMult:4,range:90,auto:!1,price:300,move:1.05},rifle:{id:"rifle",name:"AK-R",dmg:36,rpm:600,mag:30,reserve:90,reload:2.4,spread:.011,armorPen:.775,headMult:4,range:110,auto:!0,price:2700,move:1,recoil:1},m4:{id:"m4",name:"M4-A",dmg:33,rpm:666,mag:30,reserve:90,reload:2.9,spread:.009,armorPen:.8,headMult:4,range:110,auto:!0,price:3e3,move:1.02,recoil:.72},sniper:{id:"sniper",name:"AWM",dmg:115,rpm:42,mag:5,reserve:20,reload:3.6,spread:9e-4,armorPen:.97,headMult:1,range:180,auto:!1,price:4750,move:.88,recoil:2.6,scoped:!0},c4:{id:"c4",name:"C4",dmg:0,rpm:0,mag:0,reserve:0,reload:0,spread:0,armorPen:1,headMult:1,range:0,auto:!1,price:0,move:1}},Fs=[{id:"rifle",label:"AK-R",price:2700,desc:"Karabin szturmowy"},{id:"m4",label:"M4-A",price:3e3,desc:"Karabin CT"},{id:"sniper",label:"AWM",price:4750,desc:"Karabin snajperski"},{id:"pistol",label:"P-250",price:300,desc:"Pistolet"},{id:"armor",label:"Kamizelka",price:650,desc:"Pancerz 100"},{id:"helmet",label:"He\u0142m",price:1e3,desc:"Ochrona g\u0142owy"},{id:"kit",label:"Zestaw rozbr.",price:400,desc:"Szybsza rozbrajanie (CT)"},{id:"ammo",label:"Amunicja",price:300,desc:"Zapasowe magazynki"}];var el={T:14263361,CT:5083094};var tn=(n,e,t)=>n<e?e:n>t?t:n,Si=(n,e,t)=>n+(e-n)*t,Oh=(n,e,t,i)=>(n-t)**2+(e-i)**2,Vt=(n,e,t,i)=>Math.sqrt(Oh(n,e,t,i));function zs(n){for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;return n}function as(n,e,t){let i=zs(e-n);return n+tn(i,-t,t)}function ra(n){return n.x-n.w/2}function aa(n){return n.x+n.w/2}function oa(n){return n.z-n.d/2}function la(n){return n.z+n.d/2}function tl(n,e,t,i){let s=ra(i)-t,r=aa(i)+t,o=oa(i)-t,a=la(i)+t;if(n<=s||n>=r||e<=o||e>=a)return[n,e];let l=n-s,c=r-n,h=e-o,u=a-e,f=Math.min(l,c,h,u);return f===l?[s,e]:f===c?[r,e]:f===h?[n,o]:[n,a]}function il(n,e,t,i,s,r,o=2){let a=n+t,l=e;for(let u=0;u<o;u++)for(let f of r)[a,l]=tl(a,l,s,f);a=tn(a,-Ve.half+s+.2,Ve.half-s-.2);let c=a,h=e+i;for(let u=0;u<o;u++)for(let f of r)[c,h]=tl(c,h,s,f);return h=tn(h,-Ve.half+s+.2,Ve.half-s-.2),[c,h]}function sl(n,e,t,i,s,r,o){let a=0,l=1/0,c=[ra(o),0,oa(o)],h=[aa(o),o.h,la(o)],u=[n,e,t],f=[i,s,r];for(let m=0;m<3;m++)if(Math.abs(f[m])<1e-8){if(u[m]<c[m]||u[m]>h[m])return 1/0}else{let g=1/f[m],_=(c[m]-u[m])*g,p=(h[m]-u[m])*g;if(_>p&&([_,p]=[p,_]),a=Math.max(a,_),l=Math.min(l,p),a>l)return 1/0}return a}function Fh(n,e,t){let i=t.radius||.36,s=n.x-t.x,r=n.z-t.z,o=e.x*e.x+e.z*e.z;if(o<1e-9)return null;let a=2*(s*e.x+r*e.z),l=s*s+r*r-i*i,c=a*a-4*o*l;if(c<0)return null;let h=Math.sqrt(c),u=(-a-h)/(2*o);if(u<0&&(u=(-a+h)/(2*o)),u<0)return null;let f=n.y+e.y*u,m=t.y+(t.crouch?1.25:1.8);if(f<t.y-.05||f>m)return null;let g=f-t.y,_=g>m-.34?"head":g<.38?"legs":"body";return{t:u,part:_}}function Bs(n,e,t,i=1/0){let s=e.x-n.x,r=e.y-n.y,o=e.z-n.z,a=Math.hypot(s,r,o);if(a<.001)return!0;if(a>i)return!1;let l=s/a,c=r/a,h=o/a;for(let u of t){let f=sl(n.x,n.y,n.z,l,c,h,u);if(f>.05&&f<a-.35)return!1}return!0}function ca(n,e,t,i,s,r){let o={t:r};for(let a of t){let l=sl(n.x,n.y,n.z,e.x,e.y,e.z,a);l<o.t&&(o={t:l,wall:a})}for(let a of i){if(a===s||!a.alive)continue;let l=Fh(n,e,a);l&&l.t<o.t&&(o={t:l.t,actor:a,part:l.part})}return o}function ha(n,e,t=0,i=0){let s=n+t,r=tn(e+i,-1.5,1.5),o=Math.cos(r);return{x:-Math.sin(s)*o,y:Math.sin(r),z:-Math.cos(s)*o}}var sa=null;function zh(n=Ve.walls){if(sa)return sa;let{cell:e,origin:t,count:i}=Ve.nav,s=new Uint8Array(i*i),r=.48;for(let o=0;o<i;o++)for(let a=0;a<i;a++){let l=t+a*e+e/2,c=t+o*e+e/2,h=!1;for(let u of n)if(l>ra(u)-r&&l<aa(u)+r&&c>oa(u)-r&&c<la(u)+r){h=!0;break}s[o*i+a]=h?0:1}return sa=s,s}function rl(n,e){let{cell:t,origin:i,count:s}=Ve.nav;return[tn(Math.floor((n-i)/t),0,s-1),tn(Math.floor((e-i)/t),0,s-1)]}function Bh(n,e){let{cell:t,origin:i}=Ve.nav;return{x:i+n*t+t/2,z:i+e*t+t/2}}function nl(n,e,t){let[i,s]=rl(n,e),{count:r}=Ve.nav;if(t[s*r+i])return[i,s];for(let o=1;o<=8;o++)for(let a=-o;a<=o;a++)for(let l=-o;l<=o;l++){if(Math.max(Math.abs(l),Math.abs(a))!==o)continue;let c=i+l,h=s+a;if(!(c<0||h<0||c>=r||h>=r)&&t[h*r+c])return[c,h]}return[i,s]}function al(n,e,t=3500){let i=zh(),{count:s}=Ve.nav,[r,o]=nl(n.x,n.z,i),[a,l]=nl(e.x,e.z,i),c=o*s+r,h=l*s+a;if(c===h)return[{x:e.x,z:e.z}];let u=new Float32Array(s*s).fill(1/0),f=new Int32Array(s*s).fill(-1),m=new Uint8Array(s*s),g=[c];u[c]=0;let _=d=>{let b=Math.abs(d%s-a),x=Math.abs(Math.floor(d/s)-l);return Math.max(b,x)+.414*Math.min(b,x)},p=0;for(;g.length&&p++<t;){let d=0;for(let R=1;R<g.length;R++)u[g[R]]+_(g[R])<u[g[d]]+_(g[d])&&(d=R);let b=g.splice(d,1)[0];if(b===h){let R=[],T=h;for(;T!==c&&T>=0;){let A=T%s,k=Math.floor(T/s),y=Bh(A,k);R.push(y),T=f[T]}return R.reverse(),R.length&&(R[R.length-1]={x:e.x,z:e.z}),kh(R,i)}m[b]=1;let x=b%s,E=Math.floor(b/s);for(let R=-1;R<=1;R++)for(let T=-1;T<=1;T++){if(!T&&!R)continue;let A=x+T,k=E+R;if(A<0||k<0||A>=s||k>=s)continue;let y=k*s+A;if(!i[y]||m[y]||T&&R&&(!i[E*s+A]||!i[k*s+x]))continue;let w=u[b]+(T&&R?1.414:1);w<u[y]&&(u[y]=w,f[y]=b,g.includes(y)||g.push(y))}}return[]}function kh(n,e){if(n.length<=2)return n;let t=[],i=0;for(;i<n.length-1;){let s=n.length-1;for(;s>i+1&&!Hh(n[i],n[s],e);)s--;t.push(n[s]),i=s}return!t.length&&n.length&&t.push(n[n.length-1]),t}function Hh(n,e,t){let i=Math.ceil(Vt(n.x,n.z,e.x,e.z)/.4);for(let s=1;s<=i;s++){let r=s/i,[o,a]=rl(Si(n.x,e.x,r),Si(n.z,e.z,r));if(!t[a*Ve.nav.count+o])return!1}return!0}function os(n,e,t){return Math.abs(n-t.x)<=t.w/2&&Math.abs(e-t.z)<=t.d/2}var Vh=1;function ua(n={}){var i,s,r,o,a;let e=n.weapon||"pistol",t={id:(i=n.id)!=null?i:Vh++,name:n.name||"\u017Bo\u0142nierz",team:n.team==="CT"?"CT":"T",bot:!!n.bot,x:(s=n.x)!=null?s:0,y:0,z:(r=n.z)!=null?r:0,vx:0,vy:0,vz:0,yaw:(o=n.yaw)!=null?o:0,pitch:0,radius:Pe.BOT_RADIUS,eye:Pe.EYE_STAND,height:Pe.HEIGHT_STAND,crouch:!1,walking:!1,grounded:!0,hp:100,armor:0,helmet:!1,kit:!1,alive:!0,weapon:e,arsenal:{},ammo:Mt[e].mag,reserve:Mt[e].reserve,nextShot:0,reloading:0,recoilShots:0,viewKick:0,viewKickYaw:0,kills:0,deaths:0,money:Pe.START_MONEY,hasBomb:!1,plantProgress:0,defuseProgress:0,flashT:0,hurtT:0,lastHitBy:null,ads:!1,firing:!1,botState:"roam",path:[],pathTimer:0,targetId:null,reactionT:0,burst:0,strafeDir:Math.random()<.5?-1:1,strafeTimer:0,aimYaw:0,aimPitch:0,difficulty:(a=n.difficulty)!=null?a:1};return t.arsenal[e]={mag:t.ammo,reserve:t.reserve},t}function yn(n,e){let t=Mt[e];if(!t||e==="c4")return!1;n.arsenal[n.weapon]&&(n.arsenal[n.weapon].mag=n.ammo,n.arsenal[n.weapon].reserve=n.reserve),n.weapon=e;let i=n.arsenal[e]||{mag:t.mag,reserve:t.reserve};return n.ammo=i.mag,n.reserve=i.reserve,n.reloading=0,!0}function da(n){let e=Mt[n.weapon];!e||e.melee||(n.reserve=Math.min(n.reserve+e.reserve,e.reserve*2),n.arsenal[n.weapon]={mag:n.ammo,reserve:n.reserve})}function ls(n,e){let t=Mt[n.weapon];return!t||t.melee||n.reloading>0||n.ammo>=t.mag||n.reserve<=0?!1:(n.reloading=t.reload,n.nextShot=Math.max(n.nextShot,e+t.reload*.9),!0)}function Gh(n){let t=Mt[n.weapon].mag-n.ammo,i=Math.min(t,n.reserve);n.ammo+=i,n.reserve-=i,n.arsenal[n.weapon]={mag:n.ammo,reserve:n.reserve}}function ks(n,e,t,i=Ve.walls){if(!n.alive)return;n.flashT=Math.max(0,n.flashT-t),n.hurtT=Math.max(0,n.hurtT-t),n.reloading>0&&(n.reloading-=t,n.reloading<=0&&(n.reloading=0,Gh(n))),n.viewKick=Math.max(0,n.viewKick-t*1.8),n.viewKickYaw*=Math.max(0,1-t*5);let s=!!e.crouch;n.crouch=s;let r=s?Pe.EYE_CROUCH:Pe.EYE_STAND;n.eye=Si(n.eye,r,1-Math.exp(-12*t)),n.height=s?Pe.HEIGHT_CROUCH:Pe.HEIGHT_STAND,n.walking=!!e.walk;let o=Mt[n.weapon]||Mt.pistol,a=(s?Pe.CROUCH_SPEED:e.walk?Pe.WALK_SPEED:Pe.RUN_SPEED)*o.move*(n.ads?.62:1),l=e.strafe||0,c=e.forward||0,h=Math.hypot(l,c);h>1&&(l/=h,c/=h);let u=Math.sin(n.yaw),f=Math.cos(n.yaw),m=(-u*c+f*l)*a,g=(-f*c-u*l)*a;if(n.grounded){let d=1-Math.exp(-(h>0?16:Pe.FRICTION)*t);n.vx=Si(n.vx,m,d),n.vz=Si(n.vz,g,d),e.jump&&(n.vy=Pe.JUMP_SPEED,n.grounded=!1)}else{let d=1-Math.exp(-Pe.AIR_CONTROL*4*t);n.vx+=(m-n.vx)*d*.55,n.vz+=(g-n.vz)*d*.55}n.vy-=Pe.GRAVITY*t,n.y+=n.vy*t,n.y<=0&&(n.y=0,n.vy=0,n.grounded=!0);let[_,p]=il(n.x,n.z,n.vx*t,n.vz*t,n.radius,i);Math.abs(_-(n.x+n.vx*t))>.001&&(n.vx*=.2),Math.abs(p-(n.z+n.vz*t))>.001&&(n.vz*=.2),n.x=_,n.z=p}function Wh(n,e){let t=Mt[n.weapon],i=t.spread;return n.crouch&&(i*=.65),e>.6?i*=2.1:e>.1&&(i*=1.4),n.grounded||(i*=2.6),n.ads&&t.scoped&&(i*=.25),i+=n.recoilShots*t.spread*.12,i}function Hs(n,e,t,i={}){var _;let s=Mt[n.weapon];if(!n.alive||!s||s.melee||s.id==="c4"||e<n.nextShot||n.reloading>0)return null;if(n.ammo<=0)return ls(n,e),null;n.ammo--,n.nextShot=e+60/s.rpm,n.recoilShots++,n.firing=!0;let r=Math.hypot(n.vx,n.vz),o=Wh(n,r),a=i.error||0,l=(Math.random()-.5)*2*(o+a),c=(Math.random()-.5)*2*(o+a),h={x:n.x,y:n.y+n.eye,z:n.z},u=ha(n.yaw+n.viewKickYaw,n.pitch+n.viewKick,l,c),f=ca(h,u,t.walls||Ve.walls,t.actors||[],n,s.range),m=s.recoil||.15;n.viewKick+=(.004+Math.random()*.003)*m,n.viewKickYaw+=(Math.random()-.5)*.0035*m,n.viewKick=tn(n.viewKick,0,.14);let g={shooter:n,origin:h,dir:u,hit:f,weapon:s,damage:0};if(f.actor){let p=s.dmg*Math.pow(1-f.t/s.range,.18);if(f.part==="head"?p*=s.headMult:f.part==="legs"&&(p*=.78),f.actor.armor>0){let d=f.actor.helmet&&f.part==="head"?.5:1,b=s.armorPen*d;p*=1-.5*b,f.actor.armor=Math.max(0,f.actor.armor-p*.45)}p=Math.round(p),cs(f.actor,p,f.part,n),g.damage=p}return(_=t.onShot)==null||_.call(t,g),g}function ol(n,e,t){var l;let i=Mt[n.weapon];if(!n.alive||!i.melee||e<n.nextShot)return null;n.nextShot=e+60/i.rpm;let s={x:n.x,y:n.y+n.eye,z:n.z},r=ha(n.yaw,n.pitch),o=ca(s,r,t.walls||Ve.walls,t.actors||[],n,i.range),a={shooter:n,origin:s,dir:r,hit:o,weapon:i,damage:0};if(o.actor){let c=o.part==="head"?Math.round(i.dmg*i.headMult):i.dmg;cs(o.actor,c,o.part,n),a.damage=c}return(l=t.onShot)==null||l.call(t,a),a}function cs(n,e,t,i){var s;n.alive&&(n.hp-=e,n.hurtT=.35,n.lastHitBy=(s=i==null?void 0:i.id)!=null?s:null,n.hp<=0&&(n.hp=0,n.alive=!1,n.deaths++,i&&i!==n&&(i.kills++,i.money=Math.min(Pe.MAX_MONEY,i.money+Pe.KILL_REWARD))))}function ll(n,e,t){var i;n.x=e[0],n.z=e[1],n.y=0,n.vx=n.vy=n.vz=0,n.yaw=(i=e[2])!=null?i:n.team==="T"?Math.PI:0,n.pitch=0,n.eye=Pe.EYE_STAND,n.height=Pe.HEIGHT_STAND,n.crouch=!1,n.walking=!1,n.grounded=!0,n.hp=100,n.alive=!0,n.armor=n.armor||0,n.ammo=0,n.reloading=0,n.nextShot=0,n.recoilShots=0,n.viewKick=0,n.viewKickYaw=0,n.hasBomb=!1,n.plantProgress=0,n.defuseProgress=0,n.flashT=0,n.hurtT=0,n.ads=!1,n.firing=!1,n.path=[],n.targetId=null,n.botState="roam",n.pathTimer=0,n.arsenal={},yn(n,t||(n.team==="T"?"rifle":"m4"))}var Xh=1.6;function cl(n){return{x:n.x,y:n.y+(n.crouch?1.05:Xh),z:n.z}}function hl(n,e,t){if(!e.alive)return!1;let i=Vt(n.x,n.z,e.x,e.z);if(i>75)return!1;let s=Math.atan2(-(e.x-n.x),-(e.z-n.z));return Math.abs(zs(s-n.yaw))>1.25&&n.targetId!==e.id?!1:Bs(cl(n),cl(e),t,i+1)}function Yh(n,e){let t=e.match;if(!t)return{x:0,z:0};if(n.team==="CT"&&t.bombPlanted&&t.bomb)return{x:t.bomb.x,z:t.bomb.z};if(n.team==="T"&&t.bombPlanted)return{x:t.bomb.x,z:t.bomb.z};let i=Ve.sites[n.site||"A"];if(n.team==="T"&&n.hasBomb)return os(n.x,n.z,i)?{x:n.x,z:n.z,plant:!0}:{x:i.x,z:i.z};if(n.team==="T"&&t.bombCarrier&&t.bombCarrier!==n){let r=t.bombCarrier;return{x:r.x,z:r.z}}let s=n.defendOffset||[0,0];return{x:i.x+s[0],z:i.z+s[1]}}function qh(n,e,t,i){n.pathTimer-=t;let s=!n.lastGoal||Vt(n.lastGoal.x,n.lastGoal.z,e.x,e.z)>2.5;(n.pathTimer<=0||s||!n.path.length)&&(n.path=al(n,e),n.pathTimer=.6+Math.random()*.35,n.lastGoal={x:e.x,z:e.z});let r=n.path[0];for(;r&&Vt(n.x,n.z,r.x,r.z)<1.1;)n.path.shift(),r=n.path[0];r||(r=e);let o=r.x-n.x,a=r.z-n.z,l=Math.hypot(o,a)||1,c=Math.atan2(-o,-a);return n.yaw=as(n.yaw,c,t*7),n.pitch=as(n.pitch,0,t*2),{forward:1,strafe:0,jump:!1,crouch:!1,walk:!1}}function Zh(n,e,t,i){let s=e.x-n.x,r=e.z-n.z,o=Math.hypot(s,r)||1,a=Math.atan2(-s,-r),l=Math.atan2(e.y+(e.crouch?1.1:1.45)-(n.y+n.eye),o),c=n.difficulty,h=(3.2+c*3.6)*t;n.yaw=as(n.yaw,a,h),n.pitch=as(n.pitch,l,h*.8),n.reactionT+=t,n.strafeTimer-=t,n.strafeTimer<=0&&(n.strafeDir=Math.random()<.5?-1:1,n.strafeTimer=.5+Math.random()*1.1);let u=i.weapons[n.weapon],f=o>22,m={forward:f?.25:0,strafe:n.strafeDir*(f?.35:.8),jump:!1,crouch:f&&Math.random()<.02,walk:f};n.ammo<=0&&n.reloading<=0?ls(n,i.now):o<2.1&&n.weapon!=="knife"&&(n.weapon="knife",n.ammo=0);let g=.42/c;if(n.reactionT>g&&n.ammo>0&&Math.abs(zs(n.yaw-a))<.22+(1-c)*.15){let p=(.012+.012*(o/45))/c;Hs(n,i.now,{...i,actors:i.actors.filter(d=>d.team!==n.team),walls:i.walls,onShot:i.onBotShot},{error:p})}return m}function ul(n,e,t){if(!n.alive||!e.match||e.match.phase==="freeze")return;let i=e.actors.filter(o=>o.alive&&o.team!==n.team),s=null;if(n.targetId&&(s=i.find(o=>o.id===n.targetId)),s&&!hl(n,s,e.walls)?(n.lostT=(n.lostT||0)+t,n.lostT>1.2&&(s=null,n.targetId=null,n.lostT=0)):n.lostT=0,!s){let o=1/0;for(let a of i){if(!hl(n,a,e.walls))continue;let l=Vt(n.x,n.z,a.x,a.z);l<o&&(o=l,s=a)}s&&(n.targetId=s.id,n.reactionT=0)}s&&n.hasBomb&&!e.match.bombPlanted&&Vt(n.x,n.z,s.x,s.z)>16&&(s=null,n.targetId=null);let r;if(s)n.botState="engage",r=Zh(n,s,t,e);else{n.botState="navigate";let o=Yh(n,e);r=qh(n,o,t,e),o.plant&&n.team==="T"&&n.hasBomb&&e.match.tryPlant(n,t),n.team==="CT"&&e.match.bombPlanted&&Vt(n.x,n.z,e.match.bomb.x,e.match.bomb.z)<1.8&&(n.crouch=!0,e.match.tryDefuse(n,t))}n.hurtT>0&&!s&&(n.walking=!1),ks(n,r,t,e.walls),n.firing=!1}var Vs=class{constructor(e,t=()=>{}){this.actors=e,this.onEvent=t,this.score={T:0,CT:0},this.losses={T:0,CT:0},this.round=0,this.phase="menu",this.phaseTime=0,this.bombPlanted=!1,this.bomb=null,this.bombTime=0,this.bombCarrier=null,this.winner=null,this.reason="",this.nextBeep=0,this.playerSite="A"}startMatch(){this.score={T:0,CT:0},this.losses={T:0,CT:0},this.round=0,this.startRound()}startRound(){this.round++,this.phase="freeze",this.phaseTime=Pe.FREEZE_TIME,this.bombPlanted=!1,this.bomb=null,this.bombTime=0,this.winner=null,this.reason="",this.nextBeep=0;let e={T:Ve.spawns.T.slice(),CT:Ve.spawns.CT.slice()};for(let o of this.actors){let a=o.arsenal||{},l=o.armor,c=o.helmet,h=o.kit,u=o.money,f=e[o.team],m=f.splice(Math.floor(Math.random()*f.length),1)[0]||[0,o.team==="T"?26:-26];if(ll(o,m,"pistol"),o.arsenal=a,o.armor=l,o.helmet=c,o.kit=h,o.money=u,a.m4)yn(o,"m4");else if(a.rifle)yn(o,"rifle");else if(a.sniper)yn(o,"sniper");else if(o.bot){let g=Math.random(),_=o.team==="CT"?g<.78?"m4":g<.88?"sniper":"pistol":g<.74?"rifle":g<.84?"sniper":"pistol";yn(o,_),o.armor=Math.max(o.armor,100),o.team==="CT"&&Math.random()<.4&&(o.kit=!0)}o.hp=100,o.alive=!0,o.site=this.pickSite(o),o.defendOffset=o.site==="A"?[-2+Math.random()*4,-2+Math.random()*4]:[-2+Math.random()*4,-2+Math.random()*4]}let t=this.actors.filter(o=>o.team==="T"),i=this.round%3===1,s=t.find(o=>!o.bot),r=i&&s||t[Math.floor(Math.random()*t.length)];r&&(r.hasBomb=!0,r.weapon="c4",r.ammo=0,this.bombCarrier=r),this.onEvent("roundstart",{round:this.round})}pickSite(e){return e.bot?this.actors.filter(i=>i.bot).indexOf(e)%2===0?"A":"B":this.playerSite}buy(e,t){if(this.phase!=="freeze"&&!(this.phase==="live"&&this.phaseTime>Pe.ROUND_TIME-12))return{ok:!1,msg:"Kupno tylko na pocz\u0105tku rundy"};let i=Fs.find(s=>s.id===t);if(!i)return{ok:!1,msg:"Brak przedmiotu"};if(e.money<i.price)return{ok:!1,msg:"Za ma\u0142o pieni\u0119dzy"};if(t==="armor"){if(e.armor>=100)return{ok:!1,msg:"Masz ju\u017C pancerz"};e.armor=100}else if(t==="helmet"){if(e.helmet)return{ok:!1,msg:"Masz ju\u017C he\u0142m"};e.helmet=!0,e.armor<=0&&(e.armor=100)}else if(t==="kit"){if(e.kit||e.team!=="CT")return{ok:!1,msg:"Niedost\u0119pne"};e.kit=!0}else t==="ammo"?da(e):e.weapon===t?da(e):(yn(e,t),e.hasBomb&&(e.hasBomb=!1,this.giveBombToSomeone(e.team)));return e.money-=i.price,this.onEvent("buy",{actor:e,item:t}),{ok:!0,msg:`Kupiono: ${i.label}`}}giveBombToSomeone(e){let t=this.actors.filter(s=>s.alive&&s.team===e&&!s.hasBomb);if(!t.length)return;let i=t[0];i.hasBomb=!0,i.weapon="c4",i.ammo=0,this.bombCarrier=i}tryPlant(e,t){if(this.bombPlanted||!e.hasBomb||e.team!=="T"||!e.alive)return;let i=os(e.x,e.z,Ve.sites.A)?"A":os(e.x,e.z,Ve.sites.B)?"B":null;if(!i){e.plantProgress=0;return}e.plantProgress+=t,e.plantProgress>=Pe.PLANT_TIME&&(e.plantProgress=0,e.hasBomb=!1,this.bombPlanted=!0,this.bomb={x:e.x,z:e.z,site:i},this.bombTime=Pe.BOMB_TIME,e.money=Math.min(Pe.MAX_MONEY,e.money+Pe.PLANT_REWARD),this.onEvent("plant",{site:i,by:e}))}cancelInteract(e){e.plantProgress=0,e.defuseProgress=0}tryDefuse(e,t){if(!(!this.bombPlanted||!e.alive||e.team!=="CT")){if(Vt(e.x,e.z,this.bomb.x,this.bomb.z)>2){e.defuseProgress=0;return}e.defuseProgress+=t*(e.kit?2:1),e.defuseProgress>=Pe.DEFUSE_TIME&&(e.defuseProgress=0,e.money=Math.min(Pe.MAX_MONEY,e.money+Pe.DEFUSE_REWARD),this.onEvent("defuse",{by:e}),this.endRound("CT","Bomba rozbrojona"))}}update(e,t){if(this.phase==="freeze")this.phaseTime-=e,this.phaseTime<=0&&(this.phase="live",this.phaseTime=Pe.ROUND_TIME,this.onEvent("roundlive",{round:this.round}));else if(this.phase==="live"){if(this.phaseTime-=e,!this.bombPlanted){let i=this.bombCarrier;if(!i||!i.alive||!i.hasBomb){for(let s of this.actors)s.hasBomb&&(s.hasBomb=!1);this.giveBombToSomeone("T")}}if(this.bombPlanted){this.bombTime-=e;let i=this.bombTime<10?.35:this.bombTime<20?.7:1.2;if(t>=this.nextBeep&&(this.nextBeep=t+i,this.onEvent("beep",{time:this.bombTime})),this.bombTime<=0){this.onEvent("explode",{bomb:this.bomb}),this.endRound("T","Bomba wybuch\u0142a");return}}if(this.checkElimination(),this.phase!=="live")return;!this.bombPlanted&&this.phaseTime<=0&&this.endRound("CT","Czas min\u0105\u0142")}else this.phase==="roundend"&&(this.phaseTime-=e,this.phaseTime<=0&&(this.score.T>=Pe.WIN_SCORE||this.score.CT>=Pe.WIN_SCORE?(this.phase="matchover",this.onEvent("matchover",{winner:this.score.T>this.score.CT?"T":"CT"})):this.startRound()))}checkElimination(){let e=this.actors.some(i=>i.team==="T"&&i.alive),t=this.actors.some(i=>i.team==="CT"&&i.alive);!e&&this.bombPlanted||(e?t||this.endRound("T","Antyterrory\u015Bci zlikwidowani"):this.endRound("CT","Terrory\u015Bci zlikwidowani"))}endRound(e,t){if(this.phase!=="live")return;this.phase="roundend",this.phaseTime=Pe.ROUND_END_TIME,this.winner=e,this.reason=t,this.score[e]++,this.losses[e]=0;let i=e==="T"?"CT":"T";this.losses[i]++;let s=Math.min(3400,1400+Math.max(0,this.losses[i]-1)*500);for(let r of this.actors)r.money=Math.min(Pe.MAX_MONEY,r.money+(r.team===e?3250:s));this.onEvent("roundend",{winner:e,reason:t,score:{...this.score}})}get timeText(){let e=this.bombPlanted?this.bombTime:this.phaseTime,t=Math.max(0,Math.ceil(e));return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`}};var dl={KeyR:"reload",KeyG:"grenade",KeyB:"buy",KeyV:"view",Digit1:"weapon1",Digit2:"weapon2",Digit3:"weapon3",Digit4:"weapon4",KeyF:"interact",KeyQ:"cycle",KeyM:"mute",KeyH:"help"},Gs=class{constructor(e,t){this.canvas=e,this.settings=t,this.keys=new Set,this.mouse={left:!1,right:!1,middle:!1},this.actions=new Set,this.lookX=0,this.lookY=0,this.touchMove={x:0,y:0},this.touchLook={x:0,y:0},this.touchActive=!1,this.pausePressed=!1,this.nativeMouseSeen=!1,this.pointerLocked=!1,this.virtualKeys=new Set,this.lastPointer={x:0,y:0},this.install()}install(){window.addEventListener("keydown",e=>{["Tab","Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.code)&&e.preventDefault(),this.keys.has(e.code)||(e.code==="Escape"&&(this.pausePressed=!0),dl[e.code]&&this.actions.add(dl[e.code])),this.keys.add(e.code)}),window.addEventListener("keyup",e=>this.keys.delete(e.code)),window.addEventListener("blur",()=>{this.keys.clear(),this.mouse.left=this.mouse.right=this.mouse.middle=!1,this.touchMove.x=this.touchMove.y=0}),this.canvas.addEventListener("mousedown",e=>{var t,i;this.nativeMouseSeen||(this.setMouseButton(e.button,!0),this.settings.controlMode!=="touch"&&!this.pointerLocked&&((i=(t=this.canvas).requestPointerLock)==null||i.call(t)))}),window.addEventListener("mouseup",e=>{this.nativeMouseSeen||this.setMouseButton(e.button,!1)}),this.canvas.addEventListener("contextmenu",e=>e.preventDefault()),document.addEventListener("pointerlockchange",()=>{this.pointerLocked=document.pointerLockElement===this.canvas}),window.addEventListener("mousemove",e=>{if(this.nativeMouseSeen)return;let t=this.pointerLocked,i=this.mouse.left||this.mouse.right||this.mouse.middle;(t||i)&&(this.lookX+=e.movementX||0,this.lookY+=e.movementY||0),this.lastPointer.x=e.clientX,this.lastPointer.y=e.clientY}),this.canvas.addEventListener("wheel",e=>{e.preventDefault(),this.addWheel(e.deltaY)},{passive:!1}),window.__nativeLook=(e,t)=>{this.nativeMouseSeen=!0,this.lookX+=e,this.lookY+=t},window.__nativeMouse=(e,t)=>{this.nativeMouseSeen=!0,this.setMouseButton(e,t)},window.__nativeWheel=e=>this.addWheel(e*120),window.tsBack=()=>{this.pausePressed=!0},this.installTouch()}addWheel(e){e<0?this.actions.add("weaponNext"):e>0&&this.actions.add("weaponPrev")}setMouseButton(e,t){e===0?(!this.mouse.left&&t&&this.actions.add("fire"),this.mouse.left=t):e===1?this.mouse.right=t:e===2&&(!this.mouse.middle&&t&&this.actions.add("weaponNext"),this.mouse.middle=t)}installTouch(){let e=(i,s)=>{let r=document.getElementById(i),o=document.getElementById(i+"-knob");if(!r||!o)return;let a=null,l=null,c=()=>r.clientWidth*.36,h=f=>{if(f.pointerId!==a)return;let m=r.getBoundingClientRect(),g=f.clientX-(m.left+m.width/2),_=f.clientY-(m.top+m.height/2),p=Math.hypot(g,_)||1,d=c();p>d&&(g=g/p*d,_=_/p*d),o.style.transform=`translate(${g}px, ${_}px)`,s===this.touchMove?(s.x=g/d,s.y=-_/d):(l&&(s.x+=(g-l.x)*2.4,s.y+=(_-l.y)*2.4),l={x:g,y:_}),this.touchActive=!0};r.addEventListener("pointerdown",f=>{f.preventDefault(),a=f.pointerId,l=null,r.setPointerCapture(f.pointerId),h(f)}),r.addEventListener("pointermove",h);let u=f=>{f.pointerId===a&&(a=null,l=null,o.style.transform="translate(0px, 0px)",s.x=s.y=0)};r.addEventListener("pointerup",u),r.addEventListener("pointercancel",u)};e("stick-left",this.touchMove),e("stick-right",this.touchLook);let t=(i,s)=>{let r=document.getElementById(i);if(!r)return;r.addEventListener("pointerdown",a=>{a.preventDefault(),r.setPointerCapture(a.pointerId),this.touchActive=!0,r.classList.add("pressed"),s==="fire"?this.mouse.left=!0:s==="ads"?this.mouse.right=!0:s==="jump"?this.virtualKeys.add("Space"):s==="crouch"?this.virtualKeys.add("ControlLeft"):s==="walk"?this.virtualKeys.add("ShiftLeft"):s==="use"?this.virtualKeys.add("KeyF"):this.actions.add(s)});let o=()=>{r.classList.remove("pressed"),s==="fire"?this.mouse.left=!1:s==="ads"?this.mouse.right=!1:s==="jump"?this.virtualKeys.delete("Space"):s==="crouch"?this.virtualKeys.delete("ControlLeft"):s==="walk"?this.virtualKeys.delete("ShiftLeft"):s==="use"&&this.virtualKeys.delete("KeyF")};r.addEventListener("pointerup",o),r.addEventListener("pointercancel",o)};t("btn-fire","fire"),t("btn-ads","ads"),t("btn-jump","jump"),t("btn-crouch","crouch"),t("btn-walk","walk"),t("btn-reload","reload"),t("btn-weapon","cycle"),t("btn-use","use"),t("btn-buy","buy"),t("btn-nade","grenade"),t("btn-pause","pause"),t("btn-knife","weapon4")}down(e){return this.keys.has(e)||this.virtualKeys.has(e)}moveInput(){let e=(this.down("KeyW")?1:0)-(this.down("KeyS")?1:0),t=(this.down("KeyD")?1:0)-(this.down("KeyA")?1:0);return(Math.abs(this.touchMove.x)>.08||Math.abs(this.touchMove.y)>.08)&&(e=this.touchMove.y,t=this.touchMove.x),this.down("ArrowUp")&&(e=1),this.down("ArrowDown")&&(e=-1),this.down("ArrowLeft")&&(t=-1),this.down("ArrowRight")&&(t=1),{forward:e,strafe:t,jump:this.down("Space"),crouch:this.down("ControlLeft")||this.down("ControlRight")||this.down("KeyC"),walk:this.down("ShiftLeft")||this.down("ShiftRight")}}consumeLook(){let e=this.settings.sensitivity||1,t=this.settings.invertY?-1:1,i=(this.lookX+this.touchLook.x)*.0022*e,s=(this.lookY+this.touchLook.y)*.0022*e*t;this.lookX=this.lookY=0,this.touchLook.x=this.touchLook.y=0;let r=1.7*(this.settings.sensitivity||1);return this.down("ArrowLeft")&&(i-=.9*r/60),this.down("ArrowRight")&&(i+=.9*r/60),this.down("ArrowUp")&&(s+=.7*r/60),this.down("ArrowDown")&&(s-=.7*r/60),{dx:i,dy:s}}consumeAction(e){return this.actions.has(e)?(this.actions.delete(e),!0):!1}consumePause(){return this.pausePressed?(this.pausePressed=!1,!0):!1}releasePointerLock(){var e;document.pointerLockElement&&((e=document.exitPointerLock)==null||e.call(document))}};var Ws=class{constructor(e=.7){this.volume=e,this.ctx=null,this.noise=null,this.muted=!1,this.lastStep=0}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let e=window.AudioContext||window.webkitAudioContext;if(!e)return;this.ctx=new e;let t=this.ctx.sampleRate*1,i=this.ctx.createBuffer(1,t,this.ctx.sampleRate),s=i.getChannelData(0);for(let r=0;r<t;r++)s[r]=Math.random()*2-1;this.noise=i}setVolume(e){this.volume=e,this.master&&(this.master.gain.value=e)}bus(e=1){if(!this.ctx||this.muted)return null;let t=this.ctx.createGain();return t.gain.value=e*this.volume,t.connect(this.ctx.destination),t}noiseBurst(e,t,i,s,r="lowpass"){if(!this.ctx||!this.noise)return;let o=this.bus(s);if(!o)return;let a=this.ctx.createBufferSource();a.buffer=this.noise;let l=this.ctx.createBiquadFilter();l.type=r,l.frequency.value=t,l.Q.value=i;let c=this.ctx.createGain(),h=this.ctx.currentTime;c.gain.setValueAtTime(1,h),c.gain.exponentialRampToValueAtTime(.001,h+e),a.connect(l),l.connect(c),c.connect(o),a.start(h),a.stop(h+e+.02)}tone(e,t,i,s="sine",r=null){if(!this.ctx)return;let o=this.bus(i);if(!o)return;let a=this.ctx.createOscillator(),l=this.ctx.createGain(),c=this.ctx.currentTime;a.type=s,a.frequency.setValueAtTime(e,c),r&&a.frequency.exponentialRampToValueAtTime(r,c+t),l.gain.setValueAtTime(.8,c),l.gain.exponentialRampToValueAtTime(.001,c+t),a.connect(l),l.connect(o),a.start(c),a.stop(c+t+.02)}shot(e,t=0){if(!this.ctx)return;let i=1/(1+t*.045);e==="sniper"?(this.noiseBurst(.4,1400,.6,.9*i),this.tone(110,.35,.5*i,"sawtooth",45)):e==="pistol"?(this.noiseBurst(.14,2200,.8,.5*i),this.tone(190,.1,.25*i,"square",90)):e==="rifle"||e==="m4"?(this.noiseBurst(.19,1800,.7,.62*i),this.tone(135,.13,.35*i,"sawtooth",60)):this.noiseBurst(.08,900,1,.2*i)}footstep(e,t=!1){!this.ctx||e-this.lastStep<(t?.28:.42)||(this.lastStep=e,this.noiseBurst(.07,420+Math.random()*180,1.2,.06))}hit(){this.tone(1250,.06,.22,"square",900)}hurt(){this.noiseBurst(.18,320,.8,.28)}reload(){this.noiseBurst(.05,3e3,2,.16,"bandpass"),setTimeout(()=>this.noiseBurst(.06,1800,2,.14,"bandpass"),250)}beep(e){this.tone(e?1400:950,.07,.24,"square")}plant(){this.tone(500,.2,.3,"sine"),setTimeout(()=>this.tone(760,.25,.3),180)}defuse(){this.tone(880,.15,.25,"sine"),setTimeout(()=>this.tone(1320,.3,.25),140)}explode(){this.noiseBurst(1.4,260,.4,1.3),this.tone(80,1.1,.8,"sawtooth",25)}ui(){this.tone(660,.05,.12,"sine")}death(){this.tone(220,.7,.3,"sawtooth",50)}};var Io="160";var $h=0,fl=1,Jh=2;var Hc=1,Do=2,Tn=3,Jn=0,Dt=1,Rn=2;var Xn=0,Yn=1,pi=2,pl=3,ml=4,Kh=5,li=100,jh=101,Qh=102,gl=103,_l=104,eu=200,tu=201,nu=202,iu=203,Za=204,$a=205,su=206,ru=207,au=208,ou=209,lu=210,cu=211,hu=212,uu=213,du=214,fu=0,pu=1,mu=2,xr=3,gu=4,_u=5,xu=6,vu=7,Vc=0,yu=1,Mu=2,qn=0,Su=1,bu=2,Eu=3,Uo=4,wu=5,Tu=6;var Gc=300,qi=301,Zi=302,Ja=303,Ka=304,qr=306,ys=1e3,an=1001,ja=1002,Bt=1003,xl=1004;var fa=1005;var Kt=1006,Au=1007;var Ms=1008;var Zn=1009,Ru=1010,Cu=1011,No=1012,Wc=1013,Gn=1014,Wn=1015,Ss=1016,Xc=1017,Yc=1018,ui=1020,Pu=1021,on=1023,Lu=1024,Iu=1025,di=1026,$i=1027,Du=1028,qc=1029,Uu=1030,Zc=1031,$c=1033,pa=33776,ma=33777,ga=33778,_a=33779,vl=35840,yl=35841,Ml=35842,Sl=35843,Jc=36196,bl=37492,El=37496,wl=37808,Tl=37809,Al=37810,Rl=37811,Cl=37812,Pl=37813,Ll=37814,Il=37815,Dl=37816,Ul=37817,Nl=37818,Ol=37819,Fl=37820,zl=37821,xa=36492,Bl=36494,kl=36495,Nu=36283,Hl=36284,Vl=36285,Gl=36286;var vr=2300,yr=2301,va=2302,Wl=2400,Xl=2401,Yl=2402;var Kc=3e3,fi=3001,Ou=3200,Fu=3201,jc=0,zu=1,jt="",pt="srgb",Ln="srgb-linear",Oo="display-p3",Zr="display-p3-linear",Mr="linear",ot="srgb",Sr="rec709",br="p3";var bi=7680;var ql=519,Bu=512,ku=513,Hu=514,Qc=515,Vu=516,Gu=517,Wu=518,Xu=519,Qa=35044;var Zl="300 es",eo=1035,Pn=2e3,Er=2001,Kn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ya=Math.PI/180,to=180/Math.PI;function $n(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[i&255]+Lt[i>>8&255]+Lt[i>>16&255]+Lt[i>>24&255]).toLowerCase()}function Gt(n,e,t){return Math.max(e,Math.min(t,n))}function Yu(n,e){return(n%e+e)%e}function Ma(n,e,t){return(1-t)*n+t*e}function $l(n){return(n&n-1)===0&&n!==0}function no(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Cn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function tt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var De=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ge=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],m=i[5],g=i[8],_=s[0],p=s[3],d=s[6],b=s[1],x=s[4],E=s[7],R=s[2],T=s[5],A=s[8];return r[0]=o*_+a*b+l*R,r[3]=o*p+a*x+l*T,r[6]=o*d+a*E+l*A,r[1]=c*_+h*b+u*R,r[4]=c*p+h*x+u*T,r[7]=c*d+h*E+u*A,r[2]=f*_+m*b+g*R,r[5]=f*p+m*x+g*T,r[8]=f*d+m*E+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,m=c*r-o*l,g=t*u+i*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=u*_,e[1]=(s*c-h*i)*_,e[2]=(a*i-s*o)*_,e[3]=f*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=m*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Sa.makeScale(e,t)),this}rotate(e){return this.premultiply(Sa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Sa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Sa=new Ge;function eh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function wr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function qu(){let n=wr("canvas");return n.style.display="block",n}var Jl={};function xs(n){n in Jl||(Jl[n]=!0,console.warn(n))}var Kl=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),jl=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Xs={[Ln]:{transfer:Mr,primaries:Sr,toReference:n=>n,fromReference:n=>n},[pt]:{transfer:ot,primaries:Sr,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Zr]:{transfer:Mr,primaries:br,toReference:n=>n.applyMatrix3(jl),fromReference:n=>n.applyMatrix3(Kl)},[Oo]:{transfer:ot,primaries:br,toReference:n=>n.convertSRGBToLinear().applyMatrix3(jl),fromReference:n=>n.applyMatrix3(Kl).convertLinearToSRGB()}},Zu=new Set([Ln,Zr]),Qe={enabled:!0,_workingColorSpace:Ln,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Zu.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=Xs[e].toReference,s=Xs[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Xs[n].primaries},getTransfer:function(n){return n===jt?Mr:Xs[n].transfer}};function Xi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ba(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ei,Tr=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ei===void 0&&(Ei=wr("canvas")),Ei.width=e.width,Ei.height=e.height;let i=Ei.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ei}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=wr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Xi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Xi(t[i]/255)*255):t[i]=Xi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},$u=0,Ar=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$u++}),this.uuid=$n(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ea(s[o].image)):r.push(Ea(s[o]))}else r=Ea(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Ea(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?Tr.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ju=0,Qt=class n extends Kn{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=an,s=an,r=Kt,o=Ms,a=on,l=Zn,c=n.DEFAULT_ANISOTROPY,h=jt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ju++}),this.uuid=$n(),this.name="",this.source=new Ar(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(xs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===fi?pt:jt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ys:e.x=e.x-Math.floor(e.x);break;case an:e.x=e.x<0?0:1;break;case ja:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ys:e.y=e.y-Math.floor(e.y);break;case an:e.y=e.y<0?0:1;break;case ja:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return xs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===pt?fi:Kc}set encoding(e){xs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===fi?pt:jt}};Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=Gc;Qt.DEFAULT_ANISOTROPY=1;var ct=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],m=l[5],g=l[9],_=l[2],p=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,E=(m+1)/2,R=(d+1)/2,T=(h+f)/4,A=(u+_)/4,k=(g+p)/4;return x>E&&x>R?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=T/i,r=A/i):E>R?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=T/s,r=k/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=A/r,s=k/r),this.set(i,s,r,t),this}let b=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(u-_)/b,this.z=(f-h)/b,this.w=Math.acos((c+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},io=class extends Kn{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(xs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===fi?pt:jt),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Qt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ar(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},In=class extends io{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Rr=class extends Qt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var so=class extends Qt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var jn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],f=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==f||c!==m||h!==g){let p=1-a,d=l*f+c*m+h*g+u*_,b=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){let R=Math.sqrt(x),T=Math.atan2(R,d*b);p=Math.sin(p*T)/R,a=Math.sin(a*T)/R}let E=a*b;if(l=l*p+f*E,c=c*p+m*E,h=h*p+g*E,u=u*p+_*E,p===1-a){let R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],f=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*m-c*f,e[t+1]=l*g+h*f+c*u-a*m,e[t+2]=c*g+h*m+a*f-l*u,e[t+3]=h*g-a*u-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),f=l(i/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"YXZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"ZXY":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"ZYX":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"YZX":this._x=f*h*u+c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u-f*m*g;break;case"XZY":this._x=f*h*u-c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=i+a+u;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>u){let m=2*Math.sqrt(1+i-a-u);this._w=(h-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>u){let m=2*Math.sqrt(1+a-i-u);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+u-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Gt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ql.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ql.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return wa.copy(this).projectOnVector(e),this.sub(wa)}reflect(e){return this.sub(wa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},wa=new P,Ql=new jn,mi=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,nn):nn.fromBufferAttribute(r,o),nn.applyMatrix4(e.matrixWorld),this.expandByPoint(nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ys.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ys.copy(i.boundingBox)),Ys.applyMatrix4(e.matrixWorld),this.union(Ys)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,nn),nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hs),qs.subVectors(this.max,hs),wi.subVectors(e.a,hs),Ti.subVectors(e.b,hs),Ai.subVectors(e.c,hs),zn.subVectors(Ti,wi),Bn.subVectors(Ai,Ti),ii.subVectors(wi,Ai);let t=[0,-zn.z,zn.y,0,-Bn.z,Bn.y,0,-ii.z,ii.y,zn.z,0,-zn.x,Bn.z,0,-Bn.x,ii.z,0,-ii.x,-zn.y,zn.x,0,-Bn.y,Bn.x,0,-ii.y,ii.x,0];return!Ta(t,wi,Ti,Ai,qs)||(t=[1,0,0,0,1,0,0,0,1],!Ta(t,wi,Ti,Ai,qs))?!1:(Zs.crossVectors(zn,Bn),t=[Zs.x,Zs.y,Zs.z],Ta(t,wi,Ti,Ai,qs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Mn=[new P,new P,new P,new P,new P,new P,new P,new P],nn=new P,Ys=new mi,wi=new P,Ti=new P,Ai=new P,zn=new P,Bn=new P,ii=new P,hs=new P,qs=new P,Zs=new P,si=new P;function Ta(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){si.fromArray(n,r);let a=s.x*Math.abs(si.x)+s.y*Math.abs(si.y)+s.z*Math.abs(si.z),l=e.dot(si),c=t.dot(si),h=i.dot(si);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Ku=new mi,us=new P,Aa=new P,Ji=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Ku.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;us.subVectors(e,this.center);let t=us.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(us,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Aa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(us.copy(e.center).add(Aa)),this.expandByPoint(us.copy(e.center).sub(Aa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Sn=new P,Ra=new P,$s=new P,kn=new P,Ca=new P,Js=new P,Pa=new P,Cr=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Sn.copy(this.origin).addScaledVector(this.direction,t),Sn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ra.copy(e).add(t).multiplyScalar(.5),$s.copy(t).sub(e).normalize(),kn.copy(this.origin).sub(Ra);let r=e.distanceTo(t)*.5,o=-this.direction.dot($s),a=kn.dot(this.direction),l=-kn.dot($s),c=kn.lengthSq(),h=Math.abs(1-o*o),u,f,m,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let _=1/h;u*=_,f*=_,m=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ra).addScaledVector($s,f),m}intersectSphere(e,t){Sn.subVectors(e.center,this.origin);let i=Sn.dot(this.direction),s=Sn.dot(Sn)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Sn)!==null}intersectTriangle(e,t,i,s,r){Ca.subVectors(t,e),Js.subVectors(i,e),Pa.crossVectors(Ca,Js);let o=this.direction.dot(Pa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;kn.subVectors(this.origin,e);let l=a*this.direction.dot(Js.crossVectors(kn,Js));if(l<0)return null;let c=a*this.direction.dot(Ca.cross(kn));if(c<0||l+c>o)return null;let h=-a*kn.dot(Pa);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xt=class n{constructor(e,t,i,s,r,o,a,l,c,h,u,f,m,g,_,p){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,u,f,m,g,_,p)}set(e,t,i,s,r,o,a,l,c,h,u,f,m,g,_,p){let d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=m,d[7]=g,d[11]=_,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Ri.setFromMatrixColumn(e,0).length(),r=1/Ri.setFromMatrixColumn(e,1).length(),o=1/Ri.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,m=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,m=l*u,g=c*h,_=c*u;t[0]=f+_*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=m*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,m=l*u,g=c*h,_=c*u;t[0]=f-_*a,t[4]=-o*u,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*h,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,m=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=g*c-m,t[8]=f*c+_,t[1]=l*u,t[5]=_*c+f,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-f*u,t[8]=g*u+m,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*u+g,t[10]=f-_*u}else if(e.order==="XZY"){let f=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+_,t[5]=o*h,t[9]=m*u-g,t[2]=g*u-m,t[6]=a*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ju,e,Qu)}lookAt(e,t,i){let s=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),Hn.crossVectors(i,Yt),Hn.lengthSq()===0&&(Math.abs(i.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),Hn.crossVectors(i,Yt)),Hn.normalize(),Ks.crossVectors(Yt,Hn),s[0]=Hn.x,s[4]=Ks.x,s[8]=Yt.x,s[1]=Hn.y,s[5]=Ks.y,s[9]=Yt.y,s[2]=Hn.z,s[6]=Ks.z,s[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],m=i[13],g=i[2],_=i[6],p=i[10],d=i[14],b=i[3],x=i[7],E=i[11],R=i[15],T=s[0],A=s[4],k=s[8],y=s[12],w=s[1],z=s[5],G=s[9],ee=s[13],L=s[2],D=s[6],V=s[10],Y=s[14],X=s[3],W=s[7],J=s[11],Q=s[15];return r[0]=o*T+a*w+l*L+c*X,r[4]=o*A+a*z+l*D+c*W,r[8]=o*k+a*G+l*V+c*J,r[12]=o*y+a*ee+l*Y+c*Q,r[1]=h*T+u*w+f*L+m*X,r[5]=h*A+u*z+f*D+m*W,r[9]=h*k+u*G+f*V+m*J,r[13]=h*y+u*ee+f*Y+m*Q,r[2]=g*T+_*w+p*L+d*X,r[6]=g*A+_*z+p*D+d*W,r[10]=g*k+_*G+p*V+d*J,r[14]=g*y+_*ee+p*Y+d*Q,r[3]=b*T+x*w+E*L+R*X,r[7]=b*A+x*z+E*D+R*W,r[11]=b*k+x*G+E*V+R*J,r[15]=b*y+x*ee+E*Y+R*Q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],m=e[14],g=e[3],_=e[7],p=e[11],d=e[15];return g*(+r*l*u-s*c*u-r*a*f+i*c*f+s*a*m-i*l*m)+_*(+t*l*m-t*c*f+r*o*f-s*o*m+s*c*h-r*l*h)+p*(+t*c*u-t*a*m-r*o*u+i*o*m+r*a*h-i*c*h)+d*(-s*a*h-t*l*u+t*a*f+s*o*u-i*o*f+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],m=e[11],g=e[12],_=e[13],p=e[14],d=e[15],b=u*p*c-_*f*c+_*l*m-a*p*m-u*l*d+a*f*d,x=g*f*c-h*p*c-g*l*m+o*p*m+h*l*d-o*f*d,E=h*_*c-g*u*c+g*a*m-o*_*m-h*a*d+o*u*d,R=g*u*l-h*_*l-g*a*f+o*_*f+h*a*p-o*u*p,T=t*b+i*x+s*E+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/T;return e[0]=b*A,e[1]=(_*f*r-u*p*r-_*s*m+i*p*m+u*s*d-i*f*d)*A,e[2]=(a*p*r-_*l*r+_*s*c-i*p*c-a*s*d+i*l*d)*A,e[3]=(u*l*r-a*f*r-u*s*c+i*f*c+a*s*m-i*l*m)*A,e[4]=x*A,e[5]=(h*p*r-g*f*r+g*s*m-t*p*m-h*s*d+t*f*d)*A,e[6]=(g*l*r-o*p*r-g*s*c+t*p*c+o*s*d-t*l*d)*A,e[7]=(o*f*r-h*l*r+h*s*c-t*f*c-o*s*m+t*l*m)*A,e[8]=E*A,e[9]=(g*u*r-h*_*r-g*i*m+t*_*m+h*i*d-t*u*d)*A,e[10]=(o*_*r-g*a*r+g*i*c-t*_*c-o*i*d+t*a*d)*A,e[11]=(h*a*r-o*u*r-h*i*c+t*u*c+o*i*m-t*a*m)*A,e[12]=R*A,e[13]=(h*_*s-g*u*s+g*i*f-t*_*f-h*i*p+t*u*p)*A,e[14]=(g*a*s-o*_*s-g*i*l+t*_*l+o*i*p-t*a*p)*A,e[15]=(o*u*s-h*a*s+h*i*l-t*u*l-o*i*f+t*a*f)*A,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,m=r*h,g=r*u,_=o*h,p=o*u,d=a*u,b=l*c,x=l*h,E=l*u,R=i.x,T=i.y,A=i.z;return s[0]=(1-(_+d))*R,s[1]=(m+E)*R,s[2]=(g-x)*R,s[3]=0,s[4]=(m-E)*T,s[5]=(1-(f+d))*T,s[6]=(p+b)*T,s[7]=0,s[8]=(g+x)*A,s[9]=(p-b)*A,s[10]=(1-(f+_))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Ri.set(s[0],s[1],s[2]).length(),o=Ri.set(s[4],s[5],s[6]).length(),a=Ri.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],sn.copy(this);let c=1/r,h=1/o,u=1/a;return sn.elements[0]*=c,sn.elements[1]*=c,sn.elements[2]*=c,sn.elements[4]*=h,sn.elements[5]*=h,sn.elements[6]*=h,sn.elements[8]*=u,sn.elements[9]*=u,sn.elements[10]*=u,t.setFromRotationMatrix(sn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Pn){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s),m,g;if(a===Pn)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Er)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Pn){let l=this.elements,c=1/(t-e),h=1/(i-s),u=1/(o-r),f=(t+e)*c,m=(i+s)*h,g,_;if(a===Pn)g=(o+r)*u,_=-2*u;else if(a===Er)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Ri=new P,sn=new xt,ju=new P(0,0,0),Qu=new P(1,1,1),Hn=new P,Ks=new P,Yt=new P,ec=new xt,tc=new jn,Pr=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Gt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ec.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ec,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return tc.setFromEuler(this),this.setFromQuaternion(tc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Pr.DEFAULT_ORDER="XYZ";var Lr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ed=0,nc=new P,Ci=new jn,bn=new xt,js=new P,ds=new P,td=new P,nd=new jn,ic=new P(1,0,0),sc=new P(0,1,0),rc=new P(0,0,1),id={type:"added"},sd={type:"removed"},Ct=class n extends Kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=$n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new P,t=new Pr,i=new jn,s=new P(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xt},normalMatrix:{value:new Ge}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ci.setFromAxisAngle(e,t),this.quaternion.multiply(Ci),this}rotateOnWorldAxis(e,t){return Ci.setFromAxisAngle(e,t),this.quaternion.premultiply(Ci),this}rotateX(e){return this.rotateOnAxis(ic,e)}rotateY(e){return this.rotateOnAxis(sc,e)}rotateZ(e){return this.rotateOnAxis(rc,e)}translateOnAxis(e,t){return nc.copy(e).applyQuaternion(this.quaternion),this.position.add(nc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ic,e)}translateY(e){return this.translateOnAxis(sc,e)}translateZ(e){return this.translateOnAxis(rc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?js.copy(e):js.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(ds,js,this.up):bn.lookAt(js,ds,this.up),this.quaternion.setFromRotationMatrix(bn),s&&(bn.extractRotation(s.matrixWorld),Ci.setFromRotationMatrix(bn),this.quaternion.premultiply(Ci.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(id)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sd)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(bn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,e,td),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,nd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Ct.DEFAULT_UP=new P(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var rn=new P,En=new P,La=new P,wn=new P,Pi=new P,Li=new P,ac=new P,Ia=new P,Da=new P,Ua=new P,Qs=!1,hi=class n{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),rn.subVectors(e,t),s.cross(rn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){rn.subVectors(s,t),En.subVectors(i,t),La.subVectors(e,t);let o=rn.dot(rn),a=rn.dot(En),l=rn.dot(La),c=En.dot(En),h=En.dot(La),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,m=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-m-g,g,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,wn)===null?!1:wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getUV(e,t,i,s,r,o,a,l){return Qs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qs=!0),this.getInterpolation(e,t,i,s,r,o,a,l)}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,wn.x),l.addScaledVector(o,wn.y),l.addScaledVector(a,wn.z),l)}static isFrontFacing(e,t,i,s){return rn.subVectors(i,t),En.subVectors(e,t),rn.cross(En).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rn.subVectors(this.c,this.b),En.subVectors(this.a,this.b),rn.cross(En).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return Qs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qs=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Pi.subVectors(s,i),Li.subVectors(r,i),Ia.subVectors(e,i);let l=Pi.dot(Ia),c=Li.dot(Ia);if(l<=0&&c<=0)return t.copy(i);Da.subVectors(e,s);let h=Pi.dot(Da),u=Li.dot(Da);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(Pi,o);Ua.subVectors(e,r);let m=Pi.dot(Ua),g=Li.dot(Ua);if(g>=0&&m<=g)return t.copy(r);let _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Li,a);let p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return ac.subVectors(r,s),a=(u-h)/(u-h+(m-g)),t.copy(s).addScaledVector(ac,a);let d=1/(p+_+f);return o=_*d,a=f*d,t.copy(i).addScaledVector(Pi,o).addScaledVector(Li,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},th={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vn={h:0,s:0,l:0},er={h:0,s:0,l:0};function Na(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ye=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Qe.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Qe.workingColorSpace){if(e=Yu(e,1),t=Gt(t,0,1),i=Gt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Na(o,r,e+1/3),this.g=Na(o,r,e),this.b=Na(o,r,e-1/3)}return Qe.toWorkingColorSpace(this,s),this}setStyle(e,t=pt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pt){let i=th[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}copyLinearToSRGB(e){return this.r=ba(e.r),this.g=ba(e.g),this.b=ba(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pt){return Qe.fromWorkingColorSpace(It.copy(this),e),Math.round(Gt(It.r*255,0,255))*65536+Math.round(Gt(It.g*255,0,255))*256+Math.round(Gt(It.b*255,0,255))}getHexString(e=pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(It.copy(this),t);let i=It.r,s=It.g,r=It.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=pt){Qe.fromWorkingColorSpace(It.copy(this),e);let t=It.r,i=It.g,s=It.b;return e!==pt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Vn),this.setHSL(Vn.h+e,Vn.s+t,Vn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Vn),e.getHSL(er);let i=Ma(Vn.h,er.h,t),s=Ma(Vn.s,er.s,t),r=Ma(Vn.l,er.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},It=new Ye;Ye.NAMES=th;var rd=0,Dn=class extends Kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=$n(),this.name="",this.type="Material",this.blending=Yn,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Za,this.blendDst=$a,this.blendEquation=li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ql,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bi,this.stencilZFail=bi,this.stencilZPass=bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Yn&&(i.blending=this.blending),this.side!==Jn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Za&&(i.blendSrc=this.blendSrc),this.blendDst!==$a&&(i.blendDst=this.blendDst),this.blendEquation!==li&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==xr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ql&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==bi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==bi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},kt=class extends Dn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Vc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var vt=new P,tr=new De,Zt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Qa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)tr.fromBufferAttribute(this,t),tr.applyMatrix3(e),this.setXY(t,tr.x,tr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Cn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=tt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Cn(t,this.array)),t}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Cn(t,this.array)),t}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Cn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Cn(t,this.array)),t}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),s=tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),s=tt(s,this.array),r=tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qa&&(e.usage=this.usage),e}};var Ir=class extends Zt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Dr=class extends Zt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var St=class extends Zt{constructor(e,t,i){super(new Float32Array(e),t,i)}};var ad=0,Jt=new xt,Oa=new Ct,Ii=new P,qt=new mi,fs=new mi,At=new P,Wt=class n extends Kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=$n(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(eh(e)?Dr:Ir)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ge().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,i){return Jt.makeTranslation(e,t,i),this.applyMatrix4(Jt),this}scale(e,t,i){return Jt.makeScale(e,t,i),this.applyMatrix4(Jt),this}lookAt(e){return Oa.lookAt(e),Oa.updateMatrix(),this.applyMatrix4(Oa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ii).negate(),this.translate(Ii.x,Ii.y,Ii.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new St(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];qt.setFromBufferAttribute(r),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ji);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){let i=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];fs.setFromBufferAttribute(a),this.morphTargetsRelative?(At.addVectors(qt.min,fs.min),qt.expandByPoint(At),At.addVectors(qt.max,fs.max),qt.expandByPoint(At)):(qt.expandByPoint(fs.min),qt.expandByPoint(fs.max))}qt.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)At.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(At));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)At.fromBufferAttribute(a,c),l&&(Ii.fromBufferAttribute(e,c),At.add(Ii)),s=Math.max(s,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zt(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let w=0;w<a;w++)c[w]=new P,h[w]=new P;let u=new P,f=new P,m=new P,g=new De,_=new De,p=new De,d=new P,b=new P;function x(w,z,G){u.fromArray(s,w*3),f.fromArray(s,z*3),m.fromArray(s,G*3),g.fromArray(o,w*2),_.fromArray(o,z*2),p.fromArray(o,G*2),f.sub(u),m.sub(u),_.sub(g),p.sub(g);let ee=1/(_.x*p.y-p.x*_.y);isFinite(ee)&&(d.copy(f).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(ee),b.copy(m).multiplyScalar(_.x).addScaledVector(f,-p.x).multiplyScalar(ee),c[w].add(d),c[z].add(d),c[G].add(d),h[w].add(b),h[z].add(b),h[G].add(b))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let w=0,z=E.length;w<z;++w){let G=E[w],ee=G.start,L=G.count;for(let D=ee,V=ee+L;D<V;D+=3)x(i[D+0],i[D+1],i[D+2])}let R=new P,T=new P,A=new P,k=new P;function y(w){A.fromArray(r,w*3),k.copy(A);let z=c[w];R.copy(z),R.sub(A.multiplyScalar(A.dot(z))).normalize(),T.crossVectors(k,z);let ee=T.dot(h[w])<0?-1:1;l[w*4]=R.x,l[w*4+1]=R.y,l[w*4+2]=R.z,l[w*4+3]=ee}for(let w=0,z=E.length;w<z;++w){let G=E[w],ee=G.start,L=G.count;for(let D=ee,V=ee+L;D<V;D+=3)y(i[D+0]),y(i[D+1]),y(i[D+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Zt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);let s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,u=new P;if(e)for(let f=0,m=e.count;f<m;f+=3){let g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),m=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*h;for(let d=0;d<h;d++)f[g++]=c[m++]}return new Zt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],m=e(f,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},oc=new xt,ri=new Cr,nr=new Ji,lc=new P,Di=new P,Ui=new P,Ni=new P,Fa=new P,ir=new P,sr=new De,rr=new De,ar=new De,cc=new P,hc=new P,uc=new P,or=new P,lr=new P,We=class extends Ct{constructor(e=new Wt,t=new kt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){ir.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Fa.fromBufferAttribute(u,e),o?ir.addScaledVector(Fa,h):ir.addScaledVector(Fa.sub(t),h))}t.add(ir)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),nr.copy(i.boundingSphere),nr.applyMatrix4(r),ri.copy(e.ray).recast(e.near),!(nr.containsPoint(ri.origin)===!1&&(ri.intersectSphere(nr,lc)===null||ri.origin.distanceToSquared(lc)>(e.far-e.near)**2))&&(oc.copy(r).invert(),ri.copy(e.ray).applyMatrix4(oc),!(i.boundingBox!==null&&ri.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ri)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let p=f[g],d=o[p.materialIndex],b=Math.max(p.start,m.start),x=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let E=b,R=x;E<R;E+=3){let T=a.getX(E),A=a.getX(E+1),k=a.getX(E+2);s=cr(this,d,e,i,c,h,u,T,A,k),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){let b=a.getX(p),x=a.getX(p+1),E=a.getX(p+2);s=cr(this,o,e,i,c,h,u,b,x,E),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let p=f[g],d=o[p.materialIndex],b=Math.max(p.start,m.start),x=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let E=b,R=x;E<R;E+=3){let T=E,A=E+1,k=E+2;s=cr(this,d,e,i,c,h,u,T,A,k),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){let b=p,x=p+1,E=p+2;s=cr(this,o,e,i,c,h,u,b,x,E),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function od(n,e,t,i,s,r,o,a){let l;if(e.side===Dt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Jn,a),l===null)return null;lr.copy(a),lr.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(lr);return c<t.near||c>t.far?null:{distance:c,point:lr.clone(),object:n}}function cr(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Di),n.getVertexPosition(l,Ui),n.getVertexPosition(c,Ni);let h=od(n,e,t,i,Di,Ui,Ni,or);if(h){s&&(sr.fromBufferAttribute(s,a),rr.fromBufferAttribute(s,l),ar.fromBufferAttribute(s,c),h.uv=hi.getInterpolation(or,Di,Ui,Ni,sr,rr,ar,new De)),r&&(sr.fromBufferAttribute(r,a),rr.fromBufferAttribute(r,l),ar.fromBufferAttribute(r,c),h.uv1=hi.getInterpolation(or,Di,Ui,Ni,sr,rr,ar,new De),h.uv2=h.uv1),o&&(cc.fromBufferAttribute(o,a),hc.fromBufferAttribute(o,l),uc.fromBufferAttribute(o,c),h.normal=hi.getInterpolation(or,Di,Ui,Ni,cc,hc,uc,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new P,materialIndex:0};hi.getNormal(Di,Ui,Ni,u.normal),h.face=u}return h}var Ht=class n extends Wt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,m=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new St(c,3)),this.setAttribute("normal",new St(h,3)),this.setAttribute("uv",new St(u,2));function g(_,p,d,b,x,E,R,T,A,k,y){let w=E/A,z=R/k,G=E/2,ee=R/2,L=T/2,D=A+1,V=k+1,Y=0,X=0,W=new P;for(let J=0;J<V;J++){let Q=J*z-ee;for(let ce=0;ce<D;ce++){let H=ce*w-G;W[_]=H*b,W[p]=Q*x,W[d]=L,c.push(W.x,W.y,W.z),W[_]=0,W[p]=0,W[d]=T>0?1:-1,h.push(W.x,W.y,W.z),u.push(ce/A),u.push(1-J/k),Y+=1}}for(let J=0;J<k;J++)for(let Q=0;Q<A;Q++){let ce=f+Q+D*J,H=f+Q+D*(J+1),q=f+(Q+1)+D*(J+1),oe=f+(Q+1)+D*J;l.push(ce,H,oe),l.push(H,q,oe),X+=6}a.addGroup(m,X,y),m+=X,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ki(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function zt(n){let e={};for(let t=0;t<n.length;t++){let i=Ki(n[t]);for(let s in i)e[s]=i[s]}return e}function ld(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function nh(n){return n.getRenderTarget()===null?n.outputColorSpace:Qe.workingColorSpace}var cd={clone:Ki,merge:zt},hd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ud=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ln=class extends Dn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hd,this.fragmentShader=ud,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ki(e.uniforms),this.uniformsGroups=ld(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Ur=class extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=Pn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Rt=class extends Ur{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=to*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ya*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return to*2*Math.atan(Math.tan(ya*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ya*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Oi=-90,Fi=1,ro=class extends Ct{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Rt(Oi,Fi,e,t);s.layers=this.layers,this.add(s);let r=new Rt(Oi,Fi,e,t);r.layers=this.layers,this.add(r);let o=new Rt(Oi,Fi,e,t);o.layers=this.layers,this.add(o);let a=new Rt(Oi,Fi,e,t);a.layers=this.layers,this.add(a);let l=new Rt(Oi,Fi,e,t);l.layers=this.layers,this.add(l);let c=new Rt(Oi,Fi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Pn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Er)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,f,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Nr=class extends Qt{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:qi,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ao=class extends In{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(xs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===fi?pt:jt),this.texture=new Nr(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ht(5,5,5),r=new ln({name:"CubemapFromEquirect",uniforms:Ki(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Dt,blending:Xn});r.uniforms.tEquirect.value=t;let o=new We(s,r),a=t.minFilter;return t.minFilter===Ms&&(t.minFilter=Kt),new ro(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},za=new P,dd=new P,fd=new Ge,An=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=za.subVectors(i,t).cross(dd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(za),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||fd.getNormalMatrix(e),s=this.coplanarPoint(za).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ai=new Ji,hr=new P,bs=class{constructor(e=new An,t=new An,i=new An,s=new An,r=new An,o=new An){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Pn){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],m=s[8],g=s[9],_=s[10],p=s[11],d=s[12],b=s[13],x=s[14],E=s[15];if(i[0].setComponents(l-r,f-c,p-m,E-d).normalize(),i[1].setComponents(l+r,f+c,p+m,E+d).normalize(),i[2].setComponents(l+o,f+h,p+g,E+b).normalize(),i[3].setComponents(l-o,f-h,p-g,E-b).normalize(),i[4].setComponents(l-a,f-u,p-_,E-x).normalize(),t===Pn)i[5].setComponents(l+a,f+u,p+_,E+x).normalize();else if(t===Er)i[5].setComponents(a,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ai)}intersectsSprite(e){return ai.center.set(0,0,0),ai.radius=.7071067811865476,ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(ai)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(hr.x=s.normal.x>0?e.max.x:e.min.x,hr.y=s.normal.y>0?e.max.y:e.min.y,hr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(hr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ih(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function pd(n,e){let t=e.isWebGL2,i=new WeakMap;function s(c,h){let u=c.array,f=c.usage,m=u.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,u,f),c.onUploadCallback();let _;if(u instanceof Float32Array)_=n.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=n.SHORT;else if(u instanceof Uint32Array)_=n.UNSIGNED_INT;else if(u instanceof Int32Array)_=n.INT;else if(u instanceof Int8Array)_=n.BYTE;else if(u instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,h,u){let f=h.array,m=h._updateRange,g=h.updateRanges;if(n.bindBuffer(u,c),m.count===-1&&g.length===0&&n.bufferSubData(u,0,f),g.length!==0){for(let _=0,p=g.length;_<p;_++){let d=g[_];t?n.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):n.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):n.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);if(u===void 0)i.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}var Un=class n extends Wt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=e/a,f=t/l,m=[],g=[],_=[],p=[];for(let d=0;d<h;d++){let b=d*f-o;for(let x=0;x<c;x++){let E=x*u-r;g.push(E,-b,0),_.push(0,0,1),p.push(x/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let b=0;b<a;b++){let x=b+c*d,E=b+c*(d+1),R=b+1+c*(d+1),T=b+1+c*d;m.push(x,E,T),m.push(E,R,T)}this.setIndex(m),this.setAttribute("position",new St(g,3)),this.setAttribute("normal",new St(_,3)),this.setAttribute("uv",new St(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},md=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,_d=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,yd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Md=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Sd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bd=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ed=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,wd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Td=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ad=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Rd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Cd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Pd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Id=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ud=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Od=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Fd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,zd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Bd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,kd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Hd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yd=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,qd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Zd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$d=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Jd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ef=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,sf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,rf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,af=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,of=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,cf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,hf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,df=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ff=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,mf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_f=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,xf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Sf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,bf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ef=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Tf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Af=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Lf=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,If=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Df=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Uf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Nf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Of=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ff=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Bf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Xf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$f=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,jf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Qf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ep=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,tp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,np=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ip=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,rp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ap=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,op=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,cp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,hp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,pp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,mp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Sp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,bp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ep=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ap=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Pp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ip=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Up=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Np=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Op=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Fp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,kp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Wp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:md,alphahash_pars_fragment:gd,alphamap_fragment:_d,alphamap_pars_fragment:xd,alphatest_fragment:vd,alphatest_pars_fragment:yd,aomap_fragment:Md,aomap_pars_fragment:Sd,batching_pars_vertex:bd,batching_vertex:Ed,begin_vertex:wd,beginnormal_vertex:Td,bsdfs:Ad,iridescence_fragment:Rd,bumpmap_pars_fragment:Cd,clipping_planes_fragment:Pd,clipping_planes_pars_fragment:Ld,clipping_planes_pars_vertex:Id,clipping_planes_vertex:Dd,color_fragment:Ud,color_pars_fragment:Nd,color_pars_vertex:Od,color_vertex:Fd,common:zd,cube_uv_reflection_fragment:Bd,defaultnormal_vertex:kd,displacementmap_pars_vertex:Hd,displacementmap_vertex:Vd,emissivemap_fragment:Gd,emissivemap_pars_fragment:Wd,colorspace_fragment:Xd,colorspace_pars_fragment:Yd,envmap_fragment:qd,envmap_common_pars_fragment:Zd,envmap_pars_fragment:$d,envmap_pars_vertex:Jd,envmap_physical_pars_fragment:cf,envmap_vertex:Kd,fog_vertex:jd,fog_pars_vertex:Qd,fog_fragment:ef,fog_pars_fragment:tf,gradientmap_pars_fragment:nf,lightmap_fragment:sf,lightmap_pars_fragment:rf,lights_lambert_fragment:af,lights_lambert_pars_fragment:of,lights_pars_begin:lf,lights_toon_fragment:hf,lights_toon_pars_fragment:uf,lights_phong_fragment:df,lights_phong_pars_fragment:ff,lights_physical_fragment:pf,lights_physical_pars_fragment:mf,lights_fragment_begin:gf,lights_fragment_maps:_f,lights_fragment_end:xf,logdepthbuf_fragment:vf,logdepthbuf_pars_fragment:yf,logdepthbuf_pars_vertex:Mf,logdepthbuf_vertex:Sf,map_fragment:bf,map_pars_fragment:Ef,map_particle_fragment:wf,map_particle_pars_fragment:Tf,metalnessmap_fragment:Af,metalnessmap_pars_fragment:Rf,morphcolor_vertex:Cf,morphnormal_vertex:Pf,morphtarget_pars_vertex:Lf,morphtarget_vertex:If,normal_fragment_begin:Df,normal_fragment_maps:Uf,normal_pars_fragment:Nf,normal_pars_vertex:Of,normal_vertex:Ff,normalmap_pars_fragment:zf,clearcoat_normal_fragment_begin:Bf,clearcoat_normal_fragment_maps:kf,clearcoat_pars_fragment:Hf,iridescence_pars_fragment:Vf,opaque_fragment:Gf,packing:Wf,premultiplied_alpha_fragment:Xf,project_vertex:Yf,dithering_fragment:qf,dithering_pars_fragment:Zf,roughnessmap_fragment:$f,roughnessmap_pars_fragment:Jf,shadowmap_pars_fragment:Kf,shadowmap_pars_vertex:jf,shadowmap_vertex:Qf,shadowmask_pars_fragment:ep,skinbase_vertex:tp,skinning_pars_vertex:np,skinning_vertex:ip,skinnormal_vertex:sp,specularmap_fragment:rp,specularmap_pars_fragment:ap,tonemapping_fragment:op,tonemapping_pars_fragment:lp,transmission_fragment:cp,transmission_pars_fragment:hp,uv_pars_fragment:up,uv_pars_vertex:dp,uv_vertex:fp,worldpos_vertex:pp,background_vert:mp,background_frag:gp,backgroundCube_vert:_p,backgroundCube_frag:xp,cube_vert:vp,cube_frag:yp,depth_vert:Mp,depth_frag:Sp,distanceRGBA_vert:bp,distanceRGBA_frag:Ep,equirect_vert:wp,equirect_frag:Tp,linedashed_vert:Ap,linedashed_frag:Rp,meshbasic_vert:Cp,meshbasic_frag:Pp,meshlambert_vert:Lp,meshlambert_frag:Ip,meshmatcap_vert:Dp,meshmatcap_frag:Up,meshnormal_vert:Np,meshnormal_frag:Op,meshphong_vert:Fp,meshphong_frag:zp,meshphysical_vert:Bp,meshphysical_frag:kp,meshtoon_vert:Hp,meshtoon_frag:Vp,points_vert:Gp,points_frag:Wp,shadow_vert:Xp,shadow_frag:Yp,sprite_vert:qp,sprite_frag:Zp},ne={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},mn={basic:{uniforms:zt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:zt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:zt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:zt([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:zt([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:zt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:zt([ne.points,ne.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:zt([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:zt([ne.common,ne.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:zt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:zt([ne.sprite,ne.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:zt([ne.common,ne.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:zt([ne.lights,ne.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};mn.physical={uniforms:zt([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};var ur={r:0,b:0,g:0};function $p(n,e,t,i,s,r,o){let a=new Ye(0),l=r===!0?0:1,c,h,u=null,f=0,m=null;function g(p,d){let b=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=(d.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,l):x&&x.isColor&&(_(x,1),b=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||b)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===qr)?(h===void 0&&(h=new We(new Ht(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:Ki(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=Qe.getTransfer(x.colorSpace)!==ot,(u!==x||f!==x.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,m=n.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new We(new Un(2,2),new ln({name:"BackgroundMaterial",uniforms:Ki(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(x.colorSpace)!==ot,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,d){p.getRGB(ur,nh(n)),i.buffers.color.setClear(ur.r,ur.g,ur.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(p,d=1){a.set(p),l=d,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:g}}function Jp(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=p(null),c=l,h=!1;function u(L,D,V,Y,X){let W=!1;if(o){let J=_(Y,V,D);c!==J&&(c=J,m(c.object)),W=d(L,Y,V,X),W&&b(L,Y,V,X)}else{let J=D.wireframe===!0;(c.geometry!==Y.id||c.program!==V.id||c.wireframe!==J)&&(c.geometry=Y.id,c.program=V.id,c.wireframe=J,W=!0)}X!==null&&t.update(X,n.ELEMENT_ARRAY_BUFFER),(W||h)&&(h=!1,k(L,D,V,Y),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function f(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function m(L){return i.isWebGL2?n.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return i.isWebGL2?n.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function _(L,D,V){let Y=V.wireframe===!0,X=a[L.id];X===void 0&&(X={},a[L.id]=X);let W=X[D.id];W===void 0&&(W={},X[D.id]=W);let J=W[Y];return J===void 0&&(J=p(f()),W[Y]=J),J}function p(L){let D=[],V=[],Y=[];for(let X=0;X<s;X++)D[X]=0,V[X]=0,Y[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:V,attributeDivisors:Y,object:L,attributes:{},index:null}}function d(L,D,V,Y){let X=c.attributes,W=D.attributes,J=0,Q=V.getAttributes();for(let ce in Q)if(Q[ce].location>=0){let q=X[ce],oe=W[ce];if(oe===void 0&&(ce==="instanceMatrix"&&L.instanceMatrix&&(oe=L.instanceMatrix),ce==="instanceColor"&&L.instanceColor&&(oe=L.instanceColor)),q===void 0||q.attribute!==oe||oe&&q.data!==oe.data)return!0;J++}return c.attributesNum!==J||c.index!==Y}function b(L,D,V,Y){let X={},W=D.attributes,J=0,Q=V.getAttributes();for(let ce in Q)if(Q[ce].location>=0){let q=W[ce];q===void 0&&(ce==="instanceMatrix"&&L.instanceMatrix&&(q=L.instanceMatrix),ce==="instanceColor"&&L.instanceColor&&(q=L.instanceColor));let oe={};oe.attribute=q,q&&q.data&&(oe.data=q.data),X[ce]=oe,J++}c.attributes=X,c.attributesNum=J,c.index=Y}function x(){let L=c.newAttributes;for(let D=0,V=L.length;D<V;D++)L[D]=0}function E(L){R(L,0)}function R(L,D){let V=c.newAttributes,Y=c.enabledAttributes,X=c.attributeDivisors;V[L]=1,Y[L]===0&&(n.enableVertexAttribArray(L),Y[L]=1),X[L]!==D&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,D),X[L]=D)}function T(){let L=c.newAttributes,D=c.enabledAttributes;for(let V=0,Y=D.length;V<Y;V++)D[V]!==L[V]&&(n.disableVertexAttribArray(V),D[V]=0)}function A(L,D,V,Y,X,W,J){J===!0?n.vertexAttribIPointer(L,D,V,X,W):n.vertexAttribPointer(L,D,V,Y,X,W)}function k(L,D,V,Y){if(i.isWebGL2===!1&&(L.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();let X=Y.attributes,W=V.getAttributes(),J=D.defaultAttributeValues;for(let Q in W){let ce=W[Q];if(ce.location>=0){let H=X[Q];if(H===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(H=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(H=L.instanceColor)),H!==void 0){let q=H.normalized,oe=H.itemSize,_e=t.get(H);if(_e===void 0)continue;let ge=_e.buffer,Le=_e.type,Ue=_e.bytesPerElement,Ee=i.isWebGL2===!0&&(Le===n.INT||Le===n.UNSIGNED_INT||H.gpuType===Wc);if(H.isInterleavedBufferAttribute){let Ze=H.data,U=Ze.stride,Ut=H.offset;if(Ze.isInstancedInterleavedBuffer){for(let ye=0;ye<ce.locationSize;ye++)R(ce.location+ye,Ze.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Ze.meshPerAttribute*Ze.count)}else for(let ye=0;ye<ce.locationSize;ye++)E(ce.location+ye);n.bindBuffer(n.ARRAY_BUFFER,ge);for(let ye=0;ye<ce.locationSize;ye++)A(ce.location+ye,oe/ce.locationSize,Le,q,U*Ue,(Ut+oe/ce.locationSize*ye)*Ue,Ee)}else{if(H.isInstancedBufferAttribute){for(let Ze=0;Ze<ce.locationSize;Ze++)R(ce.location+Ze,H.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let Ze=0;Ze<ce.locationSize;Ze++)E(ce.location+Ze);n.bindBuffer(n.ARRAY_BUFFER,ge);for(let Ze=0;Ze<ce.locationSize;Ze++)A(ce.location+Ze,oe/ce.locationSize,Le,q,oe*Ue,oe/ce.locationSize*Ze*Ue,Ee)}}else if(J!==void 0){let q=J[Q];if(q!==void 0)switch(q.length){case 2:n.vertexAttrib2fv(ce.location,q);break;case 3:n.vertexAttrib3fv(ce.location,q);break;case 4:n.vertexAttrib4fv(ce.location,q);break;default:n.vertexAttrib1fv(ce.location,q)}}}}T()}function y(){G();for(let L in a){let D=a[L];for(let V in D){let Y=D[V];for(let X in Y)g(Y[X].object),delete Y[X];delete D[V]}delete a[L]}}function w(L){if(a[L.id]===void 0)return;let D=a[L.id];for(let V in D){let Y=D[V];for(let X in Y)g(Y[X].object),delete Y[X];delete D[V]}delete a[L.id]}function z(L){for(let D in a){let V=a[D];if(V[L.id]===void 0)continue;let Y=V[L.id];for(let X in Y)g(Y[X].object),delete Y[X];delete V[L.id]}}function G(){ee(),h=!0,c!==l&&(c=l,m(c.object))}function ee(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:G,resetDefaultState:ee,dispose:y,releaseStatesOfGeometry:w,releaseStatesOfProgram:z,initAttributes:x,enableAttribute:E,disableUnusedAttributes:T}}function Kp(n,e,t,i){let s=i.isWebGL2,r;function o(h){r=h}function a(h,u){n.drawArrays(r,h,u),t.update(u,r,1)}function l(h,u,f){if(f===0)return;let m,g;if(s)m=n,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,h,u,f),t.update(u,r,f)}function c(h,u,f){if(f===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{m.multiDrawArraysWEBGL(r,h,0,u,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function jp(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext!="undefined"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,E=o||e.has("OES_texture_float"),R=x&&E,T=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:b,vertexTextures:x,floatFragmentTextures:E,floatVertexTextures:R,maxSamples:T}}function Qp(n){let e=this,t=null,i=0,s=!1,r=!1,o=new An,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let m=u.length!==0||f||i!==0||s;return s=f,i=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,m){let g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,d=n.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let b=r?0:i,x=b*4,E=d.clippingState||null;l.value=E,E=h(g,f,x,m);for(let R=0;R!==x;++R)E[R]=t[R];d.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,m,g){let _=u!==null?u.length:0,p=null;if(_!==0){if(p=l.value,g!==!0||p===null){let d=m+_*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<d)&&(p=new Float32Array(d));for(let x=0,E=m;x!==_;++x,E+=4)o.copy(u[x]).applyMatrix4(b,a),o.normal.toArray(p,E),p[E+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function em(n){let e=new WeakMap;function t(o,a){return a===Ja?o.mapping=qi:a===Ka&&(o.mapping=Zi),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ja||a===Ka)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new ao(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Or=class extends Ur{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Gi=4,dc=[.125,.215,.35,.446,.526,.582],ci=20,Ba=new Or,fc=new Ye,ka=null,Ha=0,Va=0,oi=(1+Math.sqrt(5))/2,zi=1/oi,pc=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,oi,zi),new P(0,oi,-zi),new P(zi,0,oi),new P(-zi,0,oi),new P(oi,zi,0),new P(-oi,zi,0)],Fr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){ka=this._renderer.getRenderTarget(),Ha=this._renderer.getActiveCubeFace(),Va=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_c(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ka,Ha,Va),e.scissorTest=!1,dr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qi||e.mapping===Zi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ka=this._renderer.getRenderTarget(),Ha=this._renderer.getActiveCubeFace(),Va=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:Ss,format:on,colorSpace:Ln,depthBuffer:!1},s=mc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mc(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tm(r)),this._blurMaterial=nm(r,e,t)}return s}_compileMaterial(e){let t=new We(this._lodPlanes[0],e);this._renderer.compile(t,Ba)}_sceneToCubeUV(e,t,i,s){let a=new Rt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(fc),h.toneMapping=qn,h.autoClear=!1;let m=new kt({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1}),g=new We(new Ht,m),_=!1,p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(fc),_=!0);for(let d=0;d<6;d++){let b=d%3;b===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):b===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));let x=this._cubeSize;dr(s,b*x,d>2?x:0,x,x),h.setRenderTarget(s),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===qi||e.mapping===Zi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=_c()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gc());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new We(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;dr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ba)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=pc[(s-1)%pc.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new We(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ci-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):ci;p>ci&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ci}`);let d=[],b=0;for(let A=0;A<ci;++A){let k=A/_,y=Math.exp(-k*k/2);d.push(y),A===0?b+=y:A<p&&(b+=2*y)}for(let A=0;A<d.length;A++)d[A]=d[A]/b;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;let E=this._sizeLods[s],R=3*E*(s>x-Gi?s-x+Gi:0),T=4*(this._cubeSize-E);dr(t,R,T,3*E,2*E),l.setRenderTarget(t),l.render(u,Ba)}};function tm(n){let e=[],t=[],i=[],s=n,r=n-Gi+1+dc.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Gi?l=dc[o-n+Gi-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,_=3,p=2,d=1,b=new Float32Array(_*g*m),x=new Float32Array(p*g*m),E=new Float32Array(d*g*m);for(let T=0;T<m;T++){let A=T%3*2/3-1,k=T>2?0:-1,y=[A,k,0,A+2/3,k,0,A+2/3,k+1,0,A,k,0,A+2/3,k+1,0,A,k+1,0];b.set(y,_*g*T),x.set(f,p*g*T);let w=[T,T,T,T,T,T];E.set(w,d*g*T)}let R=new Wt;R.setAttribute("position",new Zt(b,_)),R.setAttribute("uv",new Zt(x,p)),R.setAttribute("faceIndex",new Zt(E,d)),e.push(R),s>Gi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function mc(n,e,t){let i=new In(n,e,t);return i.texture.mapping=qr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function dr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function nm(n,e,t){let i=new Float32Array(ci),s=new P(0,1,0);return new ln({name:"SphericalGaussianBlur",defines:{n:ci,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Fo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function gc(){return new ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function _c(){return new ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Fo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function im(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Ja||l===Ka,h=l===qi||l===Zi;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new Fr(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(c&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new Fr(n));let f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function sm(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function rm(n,e,t,i){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let _=f.morphAttributes[g];for(let p=0,d=_.length;p<d;p++)e.remove(_[p])}f.removeEventListener("dispose",o),delete s[f.id];let m=r.get(f);m&&(e.remove(m),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)e.update(f[g],n.ARRAY_BUFFER);let m=u.morphAttributes;for(let g in m){let _=m[g];for(let p=0,d=_.length;p<d;p++)e.update(_[p],n.ARRAY_BUFFER)}}function c(u){let f=[],m=u.index,g=u.attributes.position,_=0;if(m!==null){let b=m.array;_=m.version;for(let x=0,E=b.length;x<E;x+=3){let R=b[x+0],T=b[x+1],A=b[x+2];f.push(R,T,T,A,A,R)}}else if(g!==void 0){let b=g.array;_=g.version;for(let x=0,E=b.length/3-1;x<E;x+=3){let R=x+0,T=x+1,A=x+2;f.push(R,T,T,A,A,R)}}else return;let p=new(eh(f)?Dr:Ir)(f,1);p.version=_;let d=r.get(u);d&&e.remove(d),r.set(u,p)}function h(u){let f=r.get(u);if(f){let m=u.index;m!==null&&f.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function am(n,e,t,i){let s=i.isWebGL2,r;function o(m){r=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function h(m,g){n.drawElements(r,g,a,m*l),t.update(g,r,1)}function u(m,g,_){if(_===0)return;let p,d;if(s)p=n,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](r,g,a,m*l,_),t.update(g,r,_)}function f(m,g,_){if(_===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<_;d++)this.render(m[d]/l,g[d]);else{p.multiDrawElementsWEBGL(r,g,0,a,m,0,_);let d=0;for(let b=0;b<_;b++)d+=g[b];t.update(d,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function om(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function lm(n,e){return n[0]-e[0]}function cm(n,e){return Math.abs(e[1])-Math.abs(n[1])}function hm(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,o=new ct,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){let f=c.morphTargetInfluences;if(e.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=m!==void 0?m.length:0,_=r.get(h);if(_===void 0||_.count!==g){let L=function(){G.dispose(),r.delete(h),h.removeEventListener("dispose",L)};_!==void 0&&_.texture.dispose();let b=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],A=h.morphAttributes.color||[],k=0;b===!0&&(k=1),x===!0&&(k=2),E===!0&&(k=3);let y=h.attributes.position.count*k,w=1;y>e.maxTextureSize&&(w=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let z=new Float32Array(y*w*4*g),G=new Rr(z,y,w,g);G.type=Wn,G.needsUpdate=!0;let ee=k*4;for(let D=0;D<g;D++){let V=R[D],Y=T[D],X=A[D],W=y*w*4*D;for(let J=0;J<V.count;J++){let Q=J*ee;b===!0&&(o.fromBufferAttribute(V,J),z[W+Q+0]=o.x,z[W+Q+1]=o.y,z[W+Q+2]=o.z,z[W+Q+3]=0),x===!0&&(o.fromBufferAttribute(Y,J),z[W+Q+4]=o.x,z[W+Q+5]=o.y,z[W+Q+6]=o.z,z[W+Q+7]=0),E===!0&&(o.fromBufferAttribute(X,J),z[W+Q+8]=o.x,z[W+Q+9]=o.y,z[W+Q+10]=o.z,z[W+Q+11]=X.itemSize===4?o.w:1)}}_={count:g,texture:G,size:new De(y,w)},r.set(h,_),h.addEventListener("dispose",L)}let p=0;for(let b=0;b<f.length;b++)p+=f[b];let d=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(n,"morphTargetBaseInfluence",d),u.getUniforms().setValue(n,"morphTargetInfluences",f),u.getUniforms().setValue(n,"morphTargetsTexture",_.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}else{let m=f===void 0?0:f.length,g=i[h.id];if(g===void 0||g.length!==m){g=[];for(let x=0;x<m;x++)g[x]=[x,0];i[h.id]=g}for(let x=0;x<m;x++){let E=g[x];E[0]=x,E[1]=f[x]}g.sort(cm);for(let x=0;x<8;x++)x<m&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(lm);let _=h.morphAttributes.position,p=h.morphAttributes.normal,d=0;for(let x=0;x<8;x++){let E=a[x],R=E[0],T=E[1];R!==Number.MAX_SAFE_INTEGER&&T?(_&&h.getAttribute("morphTarget"+x)!==_[R]&&h.setAttribute("morphTarget"+x,_[R]),p&&h.getAttribute("morphNormal"+x)!==p[R]&&h.setAttribute("morphNormal"+x,p[R]),s[x]=T,d+=T):(_&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),p&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),s[x]=0)}let b=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(n,"morphTargetBaseInfluence",b),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function um(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var zr=class extends Qt{constructor(e,t,i,s,r,o,a,l,c,h){if(h=h!==void 0?h:di,h!==di&&h!==$i)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===di&&(i=Gn),i===void 0&&h===$i&&(i=ui),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Bt,this.minFilter=l!==void 0?l:Bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},sh=new Qt,rh=new zr(1,1);rh.compareFunction=Qc;var ah=new Rr,oh=new so,lh=new Nr,xc=[],vc=[],yc=new Float32Array(16),Mc=new Float32Array(9),Sc=new Float32Array(4);function ts(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=xc[s];if(r===void 0&&(r=new Float32Array(s),xc[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function bt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Et(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function $r(n,e){let t=vc[e];t===void 0&&(t=new Int32Array(e),vc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function dm(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function fm(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2fv(this.addr,e),Et(t,e)}}function pm(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;n.uniform3fv(this.addr,e),Et(t,e)}}function mm(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4fv(this.addr,e),Et(t,e)}}function gm(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(bt(t,i))return;Sc.set(i),n.uniformMatrix2fv(this.addr,!1,Sc),Et(t,i)}}function _m(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(bt(t,i))return;Mc.set(i),n.uniformMatrix3fv(this.addr,!1,Mc),Et(t,i)}}function xm(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(bt(t,i))return;yc.set(i),n.uniformMatrix4fv(this.addr,!1,yc),Et(t,i)}}function vm(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function ym(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2iv(this.addr,e),Et(t,e)}}function Mm(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;n.uniform3iv(this.addr,e),Et(t,e)}}function Sm(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4iv(this.addr,e),Et(t,e)}}function bm(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Em(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2uiv(this.addr,e),Et(t,e)}}function wm(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;n.uniform3uiv(this.addr,e),Et(t,e)}}function Tm(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4uiv(this.addr,e),Et(t,e)}}function Am(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?rh:sh;t.setTexture2D(e||r,s)}function Rm(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||oh,s)}function Cm(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||lh,s)}function Pm(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||ah,s)}function Lm(n){switch(n){case 5126:return dm;case 35664:return fm;case 35665:return pm;case 35666:return mm;case 35674:return gm;case 35675:return _m;case 35676:return xm;case 5124:case 35670:return vm;case 35667:case 35671:return ym;case 35668:case 35672:return Mm;case 35669:case 35673:return Sm;case 5125:return bm;case 36294:return Em;case 36295:return wm;case 36296:return Tm;case 35678:case 36198:case 36298:case 36306:case 35682:return Am;case 35679:case 36299:case 36307:return Rm;case 35680:case 36300:case 36308:case 36293:return Cm;case 36289:case 36303:case 36311:case 36292:return Pm}}function Im(n,e){n.uniform1fv(this.addr,e)}function Dm(n,e){let t=ts(e,this.size,2);n.uniform2fv(this.addr,t)}function Um(n,e){let t=ts(e,this.size,3);n.uniform3fv(this.addr,t)}function Nm(n,e){let t=ts(e,this.size,4);n.uniform4fv(this.addr,t)}function Om(n,e){let t=ts(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Fm(n,e){let t=ts(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function zm(n,e){let t=ts(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Bm(n,e){n.uniform1iv(this.addr,e)}function km(n,e){n.uniform2iv(this.addr,e)}function Hm(n,e){n.uniform3iv(this.addr,e)}function Vm(n,e){n.uniform4iv(this.addr,e)}function Gm(n,e){n.uniform1uiv(this.addr,e)}function Wm(n,e){n.uniform2uiv(this.addr,e)}function Xm(n,e){n.uniform3uiv(this.addr,e)}function Ym(n,e){n.uniform4uiv(this.addr,e)}function qm(n,e,t){let i=this.cache,s=e.length,r=$r(t,s);bt(i,r)||(n.uniform1iv(this.addr,r),Et(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||sh,r[o])}function Zm(n,e,t){let i=this.cache,s=e.length,r=$r(t,s);bt(i,r)||(n.uniform1iv(this.addr,r),Et(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||oh,r[o])}function $m(n,e,t){let i=this.cache,s=e.length,r=$r(t,s);bt(i,r)||(n.uniform1iv(this.addr,r),Et(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||lh,r[o])}function Jm(n,e,t){let i=this.cache,s=e.length,r=$r(t,s);bt(i,r)||(n.uniform1iv(this.addr,r),Et(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||ah,r[o])}function Km(n){switch(n){case 5126:return Im;case 35664:return Dm;case 35665:return Um;case 35666:return Nm;case 35674:return Om;case 35675:return Fm;case 35676:return zm;case 5124:case 35670:return Bm;case 35667:case 35671:return km;case 35668:case 35672:return Hm;case 35669:case 35673:return Vm;case 5125:return Gm;case 36294:return Wm;case 36295:return Xm;case 36296:return Ym;case 35678:case 36198:case 36298:case 36306:case 35682:return qm;case 35679:case 36299:case 36307:return Zm;case 35680:case 36300:case 36308:case 36293:return $m;case 36289:case 36303:case 36311:case 36292:return Jm}}var oo=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Lm(t.type)}},lo=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Km(t.type)}},co=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Ga=/(\w+)(\])?(\[|\.)?/g;function bc(n,e){n.seq.push(e),n.map[e.id]=e}function jm(n,e,t){let i=n.name,s=i.length;for(Ga.lastIndex=0;;){let r=Ga.exec(i),o=Ga.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){bc(t,c===void 0?new oo(a,n,e):new lo(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new co(a),bc(t,u)),t=u}}}var Yi=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);jm(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Ec(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Qm=37297,eg=0;function tg(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function ng(n){let e=Qe.getPrimaries(Qe.workingColorSpace),t=Qe.getPrimaries(n),i;switch(e===t?i="":e===br&&t===Sr?i="LinearDisplayP3ToLinearSRGB":e===Sr&&t===br&&(i="LinearSRGBToLinearDisplayP3"),n){case Ln:case Zr:return[i,"LinearTransferOETF"];case pt:case Oo:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function wc(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+tg(n.getShaderSource(e),o)}else return s}function ig(n,e){let t=ng(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function sg(n,e){let t;switch(e){case Su:t="Linear";break;case bu:t="Reinhard";break;case Eu:t="OptimizedCineon";break;case Uo:t="ACESFilmic";break;case Tu:t="AgX";break;case wu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function rg(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Wi).join(`
`)}function ag(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Wi).join(`
`)}function og(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function lg(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Wi(n){return n!==""}function Tc(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ac(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var cg=/^[ \t]*#include +<([\w\d./]+)>/gm;function ho(n){return n.replace(cg,ug)}var hg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function ug(n,e){let t=Oe[e];if(t===void 0){let i=hg.get(e);if(i!==void 0)t=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ho(t)}var dg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rc(n){return n.replace(dg,fg)}function fg(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Cc(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function pg(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Hc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Do?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Tn&&(e="SHADOWMAP_TYPE_VSM"),e}function mg(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case qi:case Zi:e="ENVMAP_TYPE_CUBE";break;case qr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gg(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Zi:e="ENVMAP_MODE_REFRACTION";break}return e}function _g(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Vc:e="ENVMAP_BLENDING_MULTIPLY";break;case yu:e="ENVMAP_BLENDING_MIX";break;case Mu:e="ENVMAP_BLENDING_ADD";break}return e}function xg(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function vg(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=pg(t),c=mg(t),h=gg(t),u=_g(t),f=xg(t),m=t.isWebGL2?"":rg(t),g=ag(t),_=og(r),p=s.createProgram(),d,b,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Wi).join(`
`),d.length>0&&(d+=`
`),b=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Wi).join(`
`),b.length>0&&(b+=`
`)):(d=[Cc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wi).join(`
`),b=[m,Cc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qn?"#define TONE_MAPPING":"",t.toneMapping!==qn?Oe.tonemapping_pars_fragment:"",t.toneMapping!==qn?sg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,ig("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wi).join(`
`)),o=ho(o),o=Tc(o,t),o=Ac(o,t),a=ho(a),a=Tc(a,t),a=Ac(a,t),o=Rc(o),a=Rc(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,b=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Zl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);let E=x+d+o,R=x+b+a,T=Ec(s,s.VERTEX_SHADER,E),A=Ec(s,s.FRAGMENT_SHADER,R);s.attachShader(p,T),s.attachShader(p,A),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function k(G){if(n.debug.checkShaderErrors){let ee=s.getProgramInfoLog(p).trim(),L=s.getShaderInfoLog(T).trim(),D=s.getShaderInfoLog(A).trim(),V=!0,Y=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,T,A);else{let X=wc(s,T,"vertex"),W=wc(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+ee+`
`+X+`
`+W)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):(L===""||D==="")&&(Y=!1);Y&&(G.diagnostics={runnable:V,programLog:ee,vertexShader:{log:L,prefix:d},fragmentShader:{log:D,prefix:b}})}s.deleteShader(T),s.deleteShader(A),y=new Yi(s,p),w=lg(s,p)}let y;this.getUniforms=function(){return y===void 0&&k(this),y};let w;this.getAttributes=function(){return w===void 0&&k(this),w};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=s.getProgramParameter(p,Qm)),z},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=eg++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=T,this.fragmentShader=A,this}var yg=0,uo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new fo(e),t.set(e,i)),i}},fo=class{constructor(e){this.id=yg++,this.code=e,this.usedTimes=0}};function Mg(n,e,t,i,s,r,o){let a=new Lr,l=new uo,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures,m=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return y===0?"uv":`uv${y}`}function p(y,w,z,G,ee){let L=G.fog,D=ee.geometry,V=y.isMeshStandardMaterial?G.environment:null,Y=(y.isMeshStandardMaterial?t:e).get(y.envMap||V),X=Y&&Y.mapping===qr?Y.image.height:null,W=g[y.type];y.precision!==null&&(m=s.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));let J=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,Q=J!==void 0?J.length:0,ce=0;D.morphAttributes.position!==void 0&&(ce=1),D.morphAttributes.normal!==void 0&&(ce=2),D.morphAttributes.color!==void 0&&(ce=3);let H,q,oe,_e;if(W){let Nt=mn[W];H=Nt.vertexShader,q=Nt.fragmentShader}else H=y.vertexShader,q=y.fragmentShader,l.update(y),oe=l.getVertexShaderID(y),_e=l.getFragmentShaderID(y);let ge=n.getRenderTarget(),Le=ee.isInstancedMesh===!0,Ue=ee.isBatchedMesh===!0,Ee=!!y.map,Ze=!!y.matcap,U=!!Y,Ut=!!y.aoMap,ye=!!y.lightMap,Re=!!y.bumpMap,de=!!y.normalMap,ht=!!y.displacementMap,Fe=!!y.emissiveMap,S=!!y.metalnessMap,v=!!y.roughnessMap,O=y.anisotropy>0,K=y.clearcoat>0,$=y.iridescence>0,j=y.sheen>0,fe=y.transmission>0,re=O&&!!y.anisotropyMap,he=K&&!!y.clearcoatMap,be=K&&!!y.clearcoatNormalMap,ze=K&&!!y.clearcoatRoughnessMap,Z=$&&!!y.iridescenceMap,je=$&&!!y.iridescenceThicknessMap,Xe=j&&!!y.sheenColorMap,Ae=j&&!!y.sheenRoughnessMap,xe=!!y.specularMap,ue=!!y.specularColorMap,Ne=!!y.specularIntensityMap,Ke=fe&&!!y.transmissionMap,dt=fe&&!!y.thicknessMap,ke=!!y.gradientMap,te=!!y.alphaMap,C=y.alphaTest>0,ie=!!y.alphaHash,se=!!y.extensions,we=!!D.attributes.uv1,Me=!!D.attributes.uv2,it=!!D.attributes.uv3,st=qn;return y.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(st=n.toneMapping),{isWebGL2:h,shaderID:W,shaderType:y.type,shaderName:y.name,vertexShader:H,fragmentShader:q,defines:y.defines,customVertexShaderID:oe,customFragmentShaderID:_e,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:Ue,instancing:Le,instancingColor:Le&&ee.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:ge===null?n.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:Ln,map:Ee,matcap:Ze,envMap:U,envMapMode:U&&Y.mapping,envMapCubeUVHeight:X,aoMap:Ut,lightMap:ye,bumpMap:Re,normalMap:de,displacementMap:f&&ht,emissiveMap:Fe,normalMapObjectSpace:de&&y.normalMapType===zu,normalMapTangentSpace:de&&y.normalMapType===jc,metalnessMap:S,roughnessMap:v,anisotropy:O,anisotropyMap:re,clearcoat:K,clearcoatMap:he,clearcoatNormalMap:be,clearcoatRoughnessMap:ze,iridescence:$,iridescenceMap:Z,iridescenceThicknessMap:je,sheen:j,sheenColorMap:Xe,sheenRoughnessMap:Ae,specularMap:xe,specularColorMap:ue,specularIntensityMap:Ne,transmission:fe,transmissionMap:Ke,thicknessMap:dt,gradientMap:ke,opaque:y.transparent===!1&&y.blending===Yn,alphaMap:te,alphaTest:C,alphaHash:ie,combine:y.combine,mapUv:Ee&&_(y.map.channel),aoMapUv:Ut&&_(y.aoMap.channel),lightMapUv:ye&&_(y.lightMap.channel),bumpMapUv:Re&&_(y.bumpMap.channel),normalMapUv:de&&_(y.normalMap.channel),displacementMapUv:ht&&_(y.displacementMap.channel),emissiveMapUv:Fe&&_(y.emissiveMap.channel),metalnessMapUv:S&&_(y.metalnessMap.channel),roughnessMapUv:v&&_(y.roughnessMap.channel),anisotropyMapUv:re&&_(y.anisotropyMap.channel),clearcoatMapUv:he&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:be&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:je&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Xe&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&_(y.sheenRoughnessMap.channel),specularMapUv:xe&&_(y.specularMap.channel),specularColorMapUv:ue&&_(y.specularColorMap.channel),specularIntensityMapUv:Ne&&_(y.specularIntensityMap.channel),transmissionMapUv:Ke&&_(y.transmissionMap.channel),thicknessMapUv:dt&&_(y.thicknessMap.channel),alphaMapUv:te&&_(y.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(de||O),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUv1s:we,vertexUv2s:Me,vertexUv3s:it,pointsUvs:ee.isPoints===!0&&!!D.attributes.uv&&(Ee||te),fog:!!L,useFog:y.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:ee.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:ce,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&z.length>0,shadowMapType:n.shadowMap.type,toneMapping:st,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ee&&y.map.isVideoTexture===!0&&Qe.getTransfer(y.map.colorSpace)===ot,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Rn,flipSided:y.side===Dt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:se&&y.extensions.derivatives===!0,extensionFragDepth:se&&y.extensions.fragDepth===!0,extensionDrawBuffers:se&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:se&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:se&&y.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function d(y){let w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(let z in y.defines)w.push(z),w.push(y.defines[z]);return y.isRawShaderMaterial===!1&&(b(w,y),x(w,y),w.push(n.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function b(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function x(y,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),y.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),y.push(a.mask)}function E(y){let w=g[y.type],z;if(w){let G=mn[w];z=cd.clone(G.uniforms)}else z=y.uniforms;return z}function R(y,w){let z;for(let G=0,ee=c.length;G<ee;G++){let L=c[G];if(L.cacheKey===w){z=L,++z.usedTimes;break}}return z===void 0&&(z=new vg(n,w,y,r),c.push(z)),z}function T(y){if(--y.usedTimes===0){let w=c.indexOf(y);c[w]=c[c.length-1],c.pop(),y.destroy()}}function A(y){l.remove(y)}function k(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:E,acquireProgram:R,releaseProgram:T,releaseShaderCache:A,programs:c,dispose:k}}function Sg(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function bg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Pc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Lc(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,f,m,g,_,p){let d=n[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},n[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=m,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=_,d.group=p),e++,d}function a(u,f,m,g,_,p){let d=o(u,f,m,g,_,p);m.transmission>0?i.push(d):m.transparent===!0?s.push(d):t.push(d)}function l(u,f,m,g,_,p){let d=o(u,f,m,g,_,p);m.transmission>0?i.unshift(d):m.transparent===!0?s.unshift(d):t.unshift(d)}function c(u,f){t.length>1&&t.sort(u||bg),i.length>1&&i.sort(f||Pc),s.length>1&&s.sort(f||Pc)}function h(){for(let u=e,f=n.length;u<f;u++){let m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Eg(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Lc,n.set(i,[o])):s>=r.length?(o=new Lc,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function wg(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Ye};break;case"SpotLight":t={position:new P,direction:new P,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function Tg(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Ag=0;function Rg(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Cg(n,e){let t=new wg,i=Tg(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new P);let r=new P,o=new xt,a=new xt;function l(h,u){let f=0,m=0,g=0;for(let G=0;G<9;G++)s.probe[G].set(0,0,0);let _=0,p=0,d=0,b=0,x=0,E=0,R=0,T=0,A=0,k=0,y=0;h.sort(Rg);let w=u===!0?Math.PI:1;for(let G=0,ee=h.length;G<ee;G++){let L=h[G],D=L.color,V=L.intensity,Y=L.distance,X=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=D.r*V*w,m+=D.g*V*w,g+=D.b*V*w;else if(L.isLightProbe){for(let W=0;W<9;W++)s.probe[W].addScaledVector(L.sh.coefficients[W],V);y++}else if(L.isDirectionalLight){let W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity*w),L.castShadow){let J=L.shadow,Q=i.get(L);Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,s.directionalShadow[_]=Q,s.directionalShadowMap[_]=X,s.directionalShadowMatrix[_]=L.shadow.matrix,E++}s.directional[_]=W,_++}else if(L.isSpotLight){let W=t.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(D).multiplyScalar(V*w),W.distance=Y,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,s.spot[d]=W;let J=L.shadow;if(L.map&&(s.spotLightMap[A]=L.map,A++,J.updateMatrices(L),L.castShadow&&k++),s.spotLightMatrix[d]=J.matrix,L.castShadow){let Q=i.get(L);Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,s.spotShadow[d]=Q,s.spotShadowMap[d]=X,T++}d++}else if(L.isRectAreaLight){let W=t.get(L);W.color.copy(D).multiplyScalar(V),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),s.rectArea[b]=W,b++}else if(L.isPointLight){let W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity*w),W.distance=L.distance,W.decay=L.decay,L.castShadow){let J=L.shadow,Q=i.get(L);Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,Q.shadowCameraNear=J.camera.near,Q.shadowCameraFar=J.camera.far,s.pointShadow[p]=Q,s.pointShadowMap[p]=X,s.pointShadowMatrix[p]=L.shadow.matrix,R++}s.point[p]=W,p++}else if(L.isHemisphereLight){let W=t.get(L);W.skyColor.copy(L.color).multiplyScalar(V*w),W.groundColor.copy(L.groundColor).multiplyScalar(V*w),s.hemi[x]=W,x++}}b>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ne.LTC_FLOAT_1,s.rectAreaLTC2=ne.LTC_FLOAT_2):(s.rectAreaLTC1=ne.LTC_HALF_1,s.rectAreaLTC2=ne.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ne.LTC_FLOAT_1,s.rectAreaLTC2=ne.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ne.LTC_HALF_1,s.rectAreaLTC2=ne.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=m,s.ambient[2]=g;let z=s.hash;(z.directionalLength!==_||z.pointLength!==p||z.spotLength!==d||z.rectAreaLength!==b||z.hemiLength!==x||z.numDirectionalShadows!==E||z.numPointShadows!==R||z.numSpotShadows!==T||z.numSpotMaps!==A||z.numLightProbes!==y)&&(s.directional.length=_,s.spot.length=d,s.rectArea.length=b,s.point.length=p,s.hemi.length=x,s.directionalShadow.length=E,s.directionalShadowMap.length=E,s.pointShadow.length=R,s.pointShadowMap.length=R,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=E,s.pointShadowMatrix.length=R,s.spotLightMatrix.length=T+A-k,s.spotLightMap.length=A,s.numSpotLightShadowsWithMaps=k,s.numLightProbes=y,z.directionalLength=_,z.pointLength=p,z.spotLength=d,z.rectAreaLength=b,z.hemiLength=x,z.numDirectionalShadows=E,z.numPointShadows=R,z.numSpotShadows=T,z.numSpotMaps=A,z.numLightProbes=y,s.version=Ag++)}function c(h,u){let f=0,m=0,g=0,_=0,p=0,d=u.matrixWorldInverse;for(let b=0,x=h.length;b<x;b++){let E=h[b];if(E.isDirectionalLight){let R=s.directional[f];R.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(d),f++}else if(E.isSpotLight){let R=s.spot[g];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(d),R.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(d),g++}else if(E.isRectAreaLight){let R=s.rectArea[_];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(d),a.identity(),o.copy(E.matrixWorld),o.premultiply(d),a.extractRotation(o),R.halfWidth.set(E.width*.5,0,0),R.halfHeight.set(0,E.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),_++}else if(E.isPointLight){let R=s.point[m];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(d),m++}else if(E.isHemisphereLight){let R=s.hemi[p];R.direction.setFromMatrixPosition(E.matrixWorld),R.direction.transformDirection(d),p++}}}return{setup:l,setupView:c,state:s}}function Ic(n,e){let t=new Cg(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(u){i.push(u)}function a(u){s.push(u)}function l(u){t.setup(i,u)}function c(u){t.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Pg(n,e){let t=new WeakMap;function i(r,o=0){let a=t.get(r),l;return a===void 0?(l=new Ic(n,e),t.set(r,[l])):o>=a.length?(l=new Ic(n,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:i,dispose:s}}var po=class extends Dn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ou,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},mo=class extends Dn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Lg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ig=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Dg(n,e,t){let i=new bs,s=new De,r=new De,o=new ct,a=new po({depthPacking:Fu}),l=new mo,c={},h=t.maxTextureSize,u={[Jn]:Dt,[Dt]:Jn,[Rn]:Rn},f=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:Lg,fragmentShader:Ig}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let g=new Wt;g.setAttribute("position",new Zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new We(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hc;let d=this.type;this.render=function(T,A,k){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;let y=n.getRenderTarget(),w=n.getActiveCubeFace(),z=n.getActiveMipmapLevel(),G=n.state;G.setBlending(Xn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let ee=d!==Tn&&this.type===Tn,L=d===Tn&&this.type!==Tn;for(let D=0,V=T.length;D<V;D++){let Y=T[D],X=Y.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let W=X.getFrameExtents();if(s.multiply(W),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/W.x),s.x=r.x*W.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/W.y),s.y=r.y*W.y,X.mapSize.y=r.y)),X.map===null||ee===!0||L===!0){let Q=this.type!==Tn?{minFilter:Bt,magFilter:Bt}:{};X.map!==null&&X.map.dispose(),X.map=new In(s.x,s.y,Q),X.map.texture.name=Y.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();let J=X.getViewportCount();for(let Q=0;Q<J;Q++){let ce=X.getViewport(Q);o.set(r.x*ce.x,r.y*ce.y,r.x*ce.z,r.y*ce.w),G.viewport(o),X.updateMatrices(Y,Q),i=X.getFrustum(),E(A,k,X.camera,Y,this.type)}X.isPointLightShadow!==!0&&this.type===Tn&&b(X,k),X.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(y,w,z)};function b(T,A){let k=e.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new In(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(A,null,k,f,_,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(A,null,k,m,_,null)}function x(T,A,k,y){let w=null,z=k.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(z!==void 0)w=z;else if(w=k.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let G=w.uuid,ee=A.uuid,L=c[G];L===void 0&&(L={},c[G]=L);let D=L[ee];D===void 0&&(D=w.clone(),L[ee]=D,A.addEventListener("dispose",R)),w=D}if(w.visible=A.visible,w.wireframe=A.wireframe,y===Tn?w.side=A.shadowSide!==null?A.shadowSide:A.side:w.side=A.shadowSide!==null?A.shadowSide:u[A.side],w.alphaMap=A.alphaMap,w.alphaTest=A.alphaTest,w.map=A.map,w.clipShadows=A.clipShadows,w.clippingPlanes=A.clippingPlanes,w.clipIntersection=A.clipIntersection,w.displacementMap=A.displacementMap,w.displacementScale=A.displacementScale,w.displacementBias=A.displacementBias,w.wireframeLinewidth=A.wireframeLinewidth,w.linewidth=A.linewidth,k.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let G=n.properties.get(w);G.light=k}return w}function E(T,A,k,y,w){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&w===Tn)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,T.matrixWorld);let ee=e.update(T),L=T.material;if(Array.isArray(L)){let D=ee.groups;for(let V=0,Y=D.length;V<Y;V++){let X=D[V],W=L[X.materialIndex];if(W&&W.visible){let J=x(T,W,y,w);T.onBeforeShadow(n,T,A,k,ee,J,X),n.renderBufferDirect(k,null,ee,J,T,X),T.onAfterShadow(n,T,A,k,ee,J,X)}}}else if(L.visible){let D=x(T,L,y,w);T.onBeforeShadow(n,T,A,k,ee,D,null),n.renderBufferDirect(k,null,ee,D,T,null),T.onAfterShadow(n,T,A,k,ee,D,null)}}let G=T.children;for(let ee=0,L=G.length;ee<L;ee++)E(G[ee],A,k,y,w)}function R(T){T.target.removeEventListener("dispose",R);for(let k in c){let y=c[k],w=T.target.uuid;w in y&&(y[w].dispose(),delete y[w])}}}function Ug(n,e,t){let i=t.isWebGL2;function s(){let C=!1,ie=new ct,se=null,we=new ct(0,0,0,0);return{setMask:function(Me){se!==Me&&!C&&(n.colorMask(Me,Me,Me,Me),se=Me)},setLocked:function(Me){C=Me},setClear:function(Me,it,st,wt,Nt){Nt===!0&&(Me*=wt,it*=wt,st*=wt),ie.set(Me,it,st,wt),we.equals(ie)===!1&&(n.clearColor(Me,it,st,wt),we.copy(ie))},reset:function(){C=!1,se=null,we.set(-1,0,0,0)}}}function r(){let C=!1,ie=null,se=null,we=null;return{setTest:function(Me){Me?Ue(n.DEPTH_TEST):Ee(n.DEPTH_TEST)},setMask:function(Me){ie!==Me&&!C&&(n.depthMask(Me),ie=Me)},setFunc:function(Me){if(se!==Me){switch(Me){case fu:n.depthFunc(n.NEVER);break;case pu:n.depthFunc(n.ALWAYS);break;case mu:n.depthFunc(n.LESS);break;case xr:n.depthFunc(n.LEQUAL);break;case gu:n.depthFunc(n.EQUAL);break;case _u:n.depthFunc(n.GEQUAL);break;case xu:n.depthFunc(n.GREATER);break;case vu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}se=Me}},setLocked:function(Me){C=Me},setClear:function(Me){we!==Me&&(n.clearDepth(Me),we=Me)},reset:function(){C=!1,ie=null,se=null,we=null}}}function o(){let C=!1,ie=null,se=null,we=null,Me=null,it=null,st=null,wt=null,Nt=null;return{setTest:function(rt){C||(rt?Ue(n.STENCIL_TEST):Ee(n.STENCIL_TEST))},setMask:function(rt){ie!==rt&&!C&&(n.stencilMask(rt),ie=rt)},setFunc:function(rt,Ot,pn){(se!==rt||we!==Ot||Me!==pn)&&(n.stencilFunc(rt,Ot,pn),se=rt,we=Ot,Me=pn)},setOp:function(rt,Ot,pn){(it!==rt||st!==Ot||wt!==pn)&&(n.stencilOp(rt,Ot,pn),it=rt,st=Ot,wt=pn)},setLocked:function(rt){C=rt},setClear:function(rt){Nt!==rt&&(n.clearStencil(rt),Nt=rt)},reset:function(){C=!1,ie=null,se=null,we=null,Me=null,it=null,st=null,wt=null,Nt=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,u=new WeakMap,f={},m={},g=new WeakMap,_=[],p=null,d=!1,b=null,x=null,E=null,R=null,T=null,A=null,k=null,y=new Ye(0,0,0),w=0,z=!1,G=null,ee=null,L=null,D=null,V=null,Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,W=0,J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(J)[1]),X=W>=1):J.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),X=W>=2);let Q=null,ce={},H=n.getParameter(n.SCISSOR_BOX),q=n.getParameter(n.VIEWPORT),oe=new ct().fromArray(H),_e=new ct().fromArray(q);function ge(C,ie,se,we){let Me=new Uint8Array(4),it=n.createTexture();n.bindTexture(C,it),n.texParameteri(C,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(C,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let st=0;st<se;st++)i&&(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)?n.texImage3D(ie,0,n.RGBA,1,1,we,0,n.RGBA,n.UNSIGNED_BYTE,Me):n.texImage2D(ie+st,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Me);return it}let Le={};Le[n.TEXTURE_2D]=ge(n.TEXTURE_2D,n.TEXTURE_2D,1),Le[n.TEXTURE_CUBE_MAP]=ge(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Le[n.TEXTURE_2D_ARRAY]=ge(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Le[n.TEXTURE_3D]=ge(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ue(n.DEPTH_TEST),l.setFunc(xr),Fe(!1),S(fl),Ue(n.CULL_FACE),de(Xn);function Ue(C){f[C]!==!0&&(n.enable(C),f[C]=!0)}function Ee(C){f[C]!==!1&&(n.disable(C),f[C]=!1)}function Ze(C,ie){return m[C]!==ie?(n.bindFramebuffer(C,ie),m[C]=ie,i&&(C===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=ie),C===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=ie)),!0):!1}function U(C,ie){let se=_,we=!1;if(C)if(se=g.get(ie),se===void 0&&(se=[],g.set(ie,se)),C.isWebGLMultipleRenderTargets){let Me=C.texture;if(se.length!==Me.length||se[0]!==n.COLOR_ATTACHMENT0){for(let it=0,st=Me.length;it<st;it++)se[it]=n.COLOR_ATTACHMENT0+it;se.length=Me.length,we=!0}}else se[0]!==n.COLOR_ATTACHMENT0&&(se[0]=n.COLOR_ATTACHMENT0,we=!0);else se[0]!==n.BACK&&(se[0]=n.BACK,we=!0);we&&(t.isWebGL2?n.drawBuffers(se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(se))}function Ut(C){return p!==C?(n.useProgram(C),p=C,!0):!1}let ye={[li]:n.FUNC_ADD,[jh]:n.FUNC_SUBTRACT,[Qh]:n.FUNC_REVERSE_SUBTRACT};if(i)ye[gl]=n.MIN,ye[_l]=n.MAX;else{let C=e.get("EXT_blend_minmax");C!==null&&(ye[gl]=C.MIN_EXT,ye[_l]=C.MAX_EXT)}let Re={[eu]:n.ZERO,[tu]:n.ONE,[nu]:n.SRC_COLOR,[Za]:n.SRC_ALPHA,[lu]:n.SRC_ALPHA_SATURATE,[au]:n.DST_COLOR,[su]:n.DST_ALPHA,[iu]:n.ONE_MINUS_SRC_COLOR,[$a]:n.ONE_MINUS_SRC_ALPHA,[ou]:n.ONE_MINUS_DST_COLOR,[ru]:n.ONE_MINUS_DST_ALPHA,[cu]:n.CONSTANT_COLOR,[hu]:n.ONE_MINUS_CONSTANT_COLOR,[uu]:n.CONSTANT_ALPHA,[du]:n.ONE_MINUS_CONSTANT_ALPHA};function de(C,ie,se,we,Me,it,st,wt,Nt,rt){if(C===Xn){d===!0&&(Ee(n.BLEND),d=!1);return}if(d===!1&&(Ue(n.BLEND),d=!0),C!==Kh){if(C!==b||rt!==z){if((x!==li||T!==li)&&(n.blendEquation(n.FUNC_ADD),x=li,T=li),rt)switch(C){case Yn:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case pi:n.blendFunc(n.ONE,n.ONE);break;case pl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ml:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Yn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case pi:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case pl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ml:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}E=null,R=null,A=null,k=null,y.set(0,0,0),w=0,b=C,z=rt}return}Me=Me||ie,it=it||se,st=st||we,(ie!==x||Me!==T)&&(n.blendEquationSeparate(ye[ie],ye[Me]),x=ie,T=Me),(se!==E||we!==R||it!==A||st!==k)&&(n.blendFuncSeparate(Re[se],Re[we],Re[it],Re[st]),E=se,R=we,A=it,k=st),(wt.equals(y)===!1||Nt!==w)&&(n.blendColor(wt.r,wt.g,wt.b,Nt),y.copy(wt),w=Nt),b=C,z=!1}function ht(C,ie){C.side===Rn?Ee(n.CULL_FACE):Ue(n.CULL_FACE);let se=C.side===Dt;ie&&(se=!se),Fe(se),C.blending===Yn&&C.transparent===!1?de(Xn):de(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),a.setMask(C.colorWrite);let we=C.stencilWrite;c.setTest(we),we&&(c.setMask(C.stencilWriteMask),c.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),c.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),O(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Ue(n.SAMPLE_ALPHA_TO_COVERAGE):Ee(n.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(C){G!==C&&(C?n.frontFace(n.CW):n.frontFace(n.CCW),G=C)}function S(C){C!==$h?(Ue(n.CULL_FACE),C!==ee&&(C===fl?n.cullFace(n.BACK):C===Jh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ee(n.CULL_FACE),ee=C}function v(C){C!==L&&(X&&n.lineWidth(C),L=C)}function O(C,ie,se){C?(Ue(n.POLYGON_OFFSET_FILL),(D!==ie||V!==se)&&(n.polygonOffset(ie,se),D=ie,V=se)):Ee(n.POLYGON_OFFSET_FILL)}function K(C){C?Ue(n.SCISSOR_TEST):Ee(n.SCISSOR_TEST)}function $(C){C===void 0&&(C=n.TEXTURE0+Y-1),Q!==C&&(n.activeTexture(C),Q=C)}function j(C,ie,se){se===void 0&&(Q===null?se=n.TEXTURE0+Y-1:se=Q);let we=ce[se];we===void 0&&(we={type:void 0,texture:void 0},ce[se]=we),(we.type!==C||we.texture!==ie)&&(Q!==se&&(n.activeTexture(se),Q=se),n.bindTexture(C,ie||Le[C]),we.type=C,we.texture=ie)}function fe(){let C=ce[Q];C!==void 0&&C.type!==void 0&&(n.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function re(){try{n.compressedTexImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function he(){try{n.compressedTexImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function be(){try{n.texSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ze(){try{n.texSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Z(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function je(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Xe(){try{n.texStorage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ae(){try{n.texStorage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function xe(){try{n.texImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ue(){try{n.texImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ne(C){oe.equals(C)===!1&&(n.scissor(C.x,C.y,C.z,C.w),oe.copy(C))}function Ke(C){_e.equals(C)===!1&&(n.viewport(C.x,C.y,C.z,C.w),_e.copy(C))}function dt(C,ie){let se=u.get(ie);se===void 0&&(se=new WeakMap,u.set(ie,se));let we=se.get(C);we===void 0&&(we=n.getUniformBlockIndex(ie,C.name),se.set(C,we))}function ke(C,ie){let we=u.get(ie).get(C);h.get(ie)!==we&&(n.uniformBlockBinding(ie,we,C.__bindingPointIndex),h.set(ie,we))}function te(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},Q=null,ce={},m={},g=new WeakMap,_=[],p=null,d=!1,b=null,x=null,E=null,R=null,T=null,A=null,k=null,y=new Ye(0,0,0),w=0,z=!1,G=null,ee=null,L=null,D=null,V=null,oe.set(0,0,n.canvas.width,n.canvas.height),_e.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ue,disable:Ee,bindFramebuffer:Ze,drawBuffers:U,useProgram:Ut,setBlending:de,setMaterial:ht,setFlipSided:Fe,setCullFace:S,setLineWidth:v,setPolygonOffset:O,setScissorTest:K,activeTexture:$,bindTexture:j,unbindTexture:fe,compressedTexImage2D:re,compressedTexImage3D:he,texImage2D:xe,texImage3D:ue,updateUBOMapping:dt,uniformBlockBinding:ke,texStorage2D:Xe,texStorage3D:Ae,texSubImage2D:be,texSubImage3D:ze,compressedTexSubImage2D:Z,compressedTexSubImage3D:je,scissor:Ne,viewport:Ke,reset:te}}function Ng(n,e,t,i,s,r,o){let a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,v){return m?new OffscreenCanvas(S,v):wr("canvas")}function _(S,v,O,K){let $=1;if((S.width>K||S.height>K)&&($=K/Math.max(S.width,S.height)),$<1||v===!0)if(typeof HTMLImageElement!="undefined"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&S instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&S instanceof ImageBitmap){let j=v?no:Math.floor,fe=j($*S.width),re=j($*S.height);u===void 0&&(u=g(fe,re));let he=O?g(fe,re):u;return he.width=fe,he.height=re,he.getContext("2d").drawImage(S,0,0,fe,re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+fe+"x"+re+")."),he}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function p(S){return $l(S.width)&&$l(S.height)}function d(S){return a?!1:S.wrapS!==an||S.wrapT!==an||S.minFilter!==Bt&&S.minFilter!==Kt}function b(S,v){return S.generateMipmaps&&v&&S.minFilter!==Bt&&S.minFilter!==Kt}function x(S){n.generateMipmap(S)}function E(S,v,O,K,$=!1){if(a===!1)return v;if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let j=v;if(v===n.RED&&(O===n.FLOAT&&(j=n.R32F),O===n.HALF_FLOAT&&(j=n.R16F),O===n.UNSIGNED_BYTE&&(j=n.R8)),v===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(j=n.R8UI),O===n.UNSIGNED_SHORT&&(j=n.R16UI),O===n.UNSIGNED_INT&&(j=n.R32UI),O===n.BYTE&&(j=n.R8I),O===n.SHORT&&(j=n.R16I),O===n.INT&&(j=n.R32I)),v===n.RG&&(O===n.FLOAT&&(j=n.RG32F),O===n.HALF_FLOAT&&(j=n.RG16F),O===n.UNSIGNED_BYTE&&(j=n.RG8)),v===n.RGBA){let fe=$?Mr:Qe.getTransfer(K);O===n.FLOAT&&(j=n.RGBA32F),O===n.HALF_FLOAT&&(j=n.RGBA16F),O===n.UNSIGNED_BYTE&&(j=fe===ot?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function R(S,v,O){return b(S,O)===!0||S.isFramebufferTexture&&S.minFilter!==Bt&&S.minFilter!==Kt?Math.log2(Math.max(v.width,v.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?v.mipmaps.length:1}function T(S){return S===Bt||S===xl||S===fa?n.NEAREST:n.LINEAR}function A(S){let v=S.target;v.removeEventListener("dispose",A),y(v),v.isVideoTexture&&h.delete(v)}function k(S){let v=S.target;v.removeEventListener("dispose",k),z(v)}function y(S){let v=i.get(S);if(v.__webglInit===void 0)return;let O=S.source,K=f.get(O);if(K){let $=K[v.__cacheKey];$.usedTimes--,$.usedTimes===0&&w(S),Object.keys(K).length===0&&f.delete(O)}i.remove(S)}function w(S){let v=i.get(S);n.deleteTexture(v.__webglTexture);let O=S.source,K=f.get(O);delete K[v.__cacheKey],o.memory.textures--}function z(S){let v=S.texture,O=i.get(S),K=i.get(v);if(K.__webglTexture!==void 0&&(n.deleteTexture(K.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(O.__webglFramebuffer[$]))for(let j=0;j<O.__webglFramebuffer[$].length;j++)n.deleteFramebuffer(O.__webglFramebuffer[$][j]);else n.deleteFramebuffer(O.__webglFramebuffer[$]);O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer[$])}else{if(Array.isArray(O.__webglFramebuffer))for(let $=0;$<O.__webglFramebuffer.length;$++)n.deleteFramebuffer(O.__webglFramebuffer[$]);else n.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&n.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let $=0;$<O.__webglColorRenderbuffer.length;$++)O.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(O.__webglColorRenderbuffer[$]);O.__webglDepthRenderbuffer&&n.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let $=0,j=v.length;$<j;$++){let fe=i.get(v[$]);fe.__webglTexture&&(n.deleteTexture(fe.__webglTexture),o.memory.textures--),i.remove(v[$])}i.remove(v),i.remove(S)}let G=0;function ee(){G=0}function L(){let S=G;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),G+=1,S}function D(S){let v=[];return v.push(S.wrapS),v.push(S.wrapT),v.push(S.wrapR||0),v.push(S.magFilter),v.push(S.minFilter),v.push(S.anisotropy),v.push(S.internalFormat),v.push(S.format),v.push(S.type),v.push(S.generateMipmaps),v.push(S.premultiplyAlpha),v.push(S.flipY),v.push(S.unpackAlignment),v.push(S.colorSpace),v.join()}function V(S,v){let O=i.get(S);if(S.isVideoTexture&&ht(S),S.isRenderTargetTexture===!1&&S.version>0&&O.__version!==S.version){let K=S.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(O,S,v);return}}t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+v)}function Y(S,v){let O=i.get(S);if(S.version>0&&O.__version!==S.version){oe(O,S,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+v)}function X(S,v){let O=i.get(S);if(S.version>0&&O.__version!==S.version){oe(O,S,v);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+v)}function W(S,v){let O=i.get(S);if(S.version>0&&O.__version!==S.version){_e(O,S,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+v)}let J={[ys]:n.REPEAT,[an]:n.CLAMP_TO_EDGE,[ja]:n.MIRRORED_REPEAT},Q={[Bt]:n.NEAREST,[xl]:n.NEAREST_MIPMAP_NEAREST,[fa]:n.NEAREST_MIPMAP_LINEAR,[Kt]:n.LINEAR,[Au]:n.LINEAR_MIPMAP_NEAREST,[Ms]:n.LINEAR_MIPMAP_LINEAR},ce={[Bu]:n.NEVER,[Xu]:n.ALWAYS,[ku]:n.LESS,[Qc]:n.LEQUAL,[Hu]:n.EQUAL,[Wu]:n.GEQUAL,[Vu]:n.GREATER,[Gu]:n.NOTEQUAL};function H(S,v,O){if(O?(n.texParameteri(S,n.TEXTURE_WRAP_S,J[v.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,J[v.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,J[v.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,Q[v.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,Q[v.minFilter])):(n.texParameteri(S,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(S,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(v.wrapS!==an||v.wrapT!==an)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(S,n.TEXTURE_MAG_FILTER,T(v.magFilter)),n.texParameteri(S,n.TEXTURE_MIN_FILTER,T(v.minFilter)),v.minFilter!==Bt&&v.minFilter!==Kt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,ce[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let K=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===Bt||v.minFilter!==fa&&v.minFilter!==Ms||v.type===Wn&&e.has("OES_texture_float_linear")===!1||a===!1&&v.type===Ss&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||i.get(v).__currentAnisotropy)&&(n.texParameterf(S,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy)}}function q(S,v){let O=!1;S.__webglInit===void 0&&(S.__webglInit=!0,v.addEventListener("dispose",A));let K=v.source,$=f.get(K);$===void 0&&($={},f.set(K,$));let j=D(v);if(j!==S.__cacheKey){$[j]===void 0&&($[j]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),$[j].usedTimes++;let fe=$[S.__cacheKey];fe!==void 0&&($[S.__cacheKey].usedTimes--,fe.usedTimes===0&&w(v)),S.__cacheKey=j,S.__webglTexture=$[j].texture}return O}function oe(S,v,O){let K=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(K=n.TEXTURE_3D);let $=q(S,v),j=v.source;t.bindTexture(K,S.__webglTexture,n.TEXTURE0+O);let fe=i.get(j);if(j.version!==fe.__version||$===!0){t.activeTexture(n.TEXTURE0+O);let re=Qe.getPrimaries(Qe.workingColorSpace),he=v.colorSpace===jt?null:Qe.getPrimaries(v.colorSpace),be=v.colorSpace===jt||re===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let ze=d(v)&&p(v.image)===!1,Z=_(v.image,ze,!1,s.maxTextureSize);Z=Fe(v,Z);let je=p(Z)||a,Xe=r.convert(v.format,v.colorSpace),Ae=r.convert(v.type),xe=E(v.internalFormat,Xe,Ae,v.colorSpace,v.isVideoTexture);H(K,v,je);let ue,Ne=v.mipmaps,Ke=a&&v.isVideoTexture!==!0&&xe!==Jc,dt=fe.__version===void 0||$===!0,ke=R(v,Z,je);if(v.isDepthTexture)xe=n.DEPTH_COMPONENT,a?v.type===Wn?xe=n.DEPTH_COMPONENT32F:v.type===Gn?xe=n.DEPTH_COMPONENT24:v.type===ui?xe=n.DEPTH24_STENCIL8:xe=n.DEPTH_COMPONENT16:v.type===Wn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===di&&xe===n.DEPTH_COMPONENT&&v.type!==No&&v.type!==Gn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=Gn,Ae=r.convert(v.type)),v.format===$i&&xe===n.DEPTH_COMPONENT&&(xe=n.DEPTH_STENCIL,v.type!==ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=ui,Ae=r.convert(v.type))),dt&&(Ke?t.texStorage2D(n.TEXTURE_2D,1,xe,Z.width,Z.height):t.texImage2D(n.TEXTURE_2D,0,xe,Z.width,Z.height,0,Xe,Ae,null));else if(v.isDataTexture)if(Ne.length>0&&je){Ke&&dt&&t.texStorage2D(n.TEXTURE_2D,ke,xe,Ne[0].width,Ne[0].height);for(let te=0,C=Ne.length;te<C;te++)ue=Ne[te],Ke?t.texSubImage2D(n.TEXTURE_2D,te,0,0,ue.width,ue.height,Xe,Ae,ue.data):t.texImage2D(n.TEXTURE_2D,te,xe,ue.width,ue.height,0,Xe,Ae,ue.data);v.generateMipmaps=!1}else Ke?(dt&&t.texStorage2D(n.TEXTURE_2D,ke,xe,Z.width,Z.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Z.width,Z.height,Xe,Ae,Z.data)):t.texImage2D(n.TEXTURE_2D,0,xe,Z.width,Z.height,0,Xe,Ae,Z.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ke&&dt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ke,xe,Ne[0].width,Ne[0].height,Z.depth);for(let te=0,C=Ne.length;te<C;te++)ue=Ne[te],v.format!==on?Xe!==null?Ke?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,ue.width,ue.height,Z.depth,Xe,ue.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,xe,ue.width,ue.height,Z.depth,0,ue.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,ue.width,ue.height,Z.depth,Xe,Ae,ue.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,xe,ue.width,ue.height,Z.depth,0,Xe,Ae,ue.data)}else{Ke&&dt&&t.texStorage2D(n.TEXTURE_2D,ke,xe,Ne[0].width,Ne[0].height);for(let te=0,C=Ne.length;te<C;te++)ue=Ne[te],v.format!==on?Xe!==null?Ke?t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,ue.width,ue.height,Xe,ue.data):t.compressedTexImage2D(n.TEXTURE_2D,te,xe,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?t.texSubImage2D(n.TEXTURE_2D,te,0,0,ue.width,ue.height,Xe,Ae,ue.data):t.texImage2D(n.TEXTURE_2D,te,xe,ue.width,ue.height,0,Xe,Ae,ue.data)}else if(v.isDataArrayTexture)Ke?(dt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ke,xe,Z.width,Z.height,Z.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,Xe,Ae,Z.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,xe,Z.width,Z.height,Z.depth,0,Xe,Ae,Z.data);else if(v.isData3DTexture)Ke?(dt&&t.texStorage3D(n.TEXTURE_3D,ke,xe,Z.width,Z.height,Z.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,Xe,Ae,Z.data)):t.texImage3D(n.TEXTURE_3D,0,xe,Z.width,Z.height,Z.depth,0,Xe,Ae,Z.data);else if(v.isFramebufferTexture){if(dt)if(Ke)t.texStorage2D(n.TEXTURE_2D,ke,xe,Z.width,Z.height);else{let te=Z.width,C=Z.height;for(let ie=0;ie<ke;ie++)t.texImage2D(n.TEXTURE_2D,ie,xe,te,C,0,Xe,Ae,null),te>>=1,C>>=1}}else if(Ne.length>0&&je){Ke&&dt&&t.texStorage2D(n.TEXTURE_2D,ke,xe,Ne[0].width,Ne[0].height);for(let te=0,C=Ne.length;te<C;te++)ue=Ne[te],Ke?t.texSubImage2D(n.TEXTURE_2D,te,0,0,Xe,Ae,ue):t.texImage2D(n.TEXTURE_2D,te,xe,Xe,Ae,ue);v.generateMipmaps=!1}else Ke?(dt&&t.texStorage2D(n.TEXTURE_2D,ke,xe,Z.width,Z.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Xe,Ae,Z)):t.texImage2D(n.TEXTURE_2D,0,xe,Xe,Ae,Z);b(v,je)&&x(K),fe.__version=j.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function _e(S,v,O){if(v.image.length!==6)return;let K=q(S,v),$=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+O);let j=i.get($);if($.version!==j.__version||K===!0){t.activeTexture(n.TEXTURE0+O);let fe=Qe.getPrimaries(Qe.workingColorSpace),re=v.colorSpace===jt?null:Qe.getPrimaries(v.colorSpace),he=v.colorSpace===jt||fe===re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let be=v.isCompressedTexture||v.image[0].isCompressedTexture,ze=v.image[0]&&v.image[0].isDataTexture,Z=[];for(let te=0;te<6;te++)!be&&!ze?Z[te]=_(v.image[te],!1,!0,s.maxCubemapSize):Z[te]=ze?v.image[te].image:v.image[te],Z[te]=Fe(v,Z[te]);let je=Z[0],Xe=p(je)||a,Ae=r.convert(v.format,v.colorSpace),xe=r.convert(v.type),ue=E(v.internalFormat,Ae,xe,v.colorSpace),Ne=a&&v.isVideoTexture!==!0,Ke=j.__version===void 0||K===!0,dt=R(v,je,Xe);H(n.TEXTURE_CUBE_MAP,v,Xe);let ke;if(be){Ne&&Ke&&t.texStorage2D(n.TEXTURE_CUBE_MAP,dt,ue,je.width,je.height);for(let te=0;te<6;te++){ke=Z[te].mipmaps;for(let C=0;C<ke.length;C++){let ie=ke[C];v.format!==on?Ae!==null?Ne?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,C,0,0,ie.width,ie.height,Ae,ie.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,C,ue,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,C,0,0,ie.width,ie.height,Ae,xe,ie.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,C,ue,ie.width,ie.height,0,Ae,xe,ie.data)}}}else{ke=v.mipmaps,Ne&&Ke&&(ke.length>0&&dt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,dt,ue,Z[0].width,Z[0].height));for(let te=0;te<6;te++)if(ze){Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Z[te].width,Z[te].height,Ae,xe,Z[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,ue,Z[te].width,Z[te].height,0,Ae,xe,Z[te].data);for(let C=0;C<ke.length;C++){let se=ke[C].image[te].image;Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,C+1,0,0,se.width,se.height,Ae,xe,se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,C+1,ue,se.width,se.height,0,Ae,xe,se.data)}}else{Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ae,xe,Z[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,ue,Ae,xe,Z[te]);for(let C=0;C<ke.length;C++){let ie=ke[C];Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,C+1,0,0,Ae,xe,ie.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,C+1,ue,Ae,xe,ie.image[te])}}}b(v,Xe)&&x(n.TEXTURE_CUBE_MAP),j.__version=$.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function ge(S,v,O,K,$,j){let fe=r.convert(O.format,O.colorSpace),re=r.convert(O.type),he=E(O.internalFormat,fe,re,O.colorSpace);if(!i.get(v).__hasExternalTextures){let ze=Math.max(1,v.width>>j),Z=Math.max(1,v.height>>j);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?t.texImage3D($,j,he,ze,Z,v.depth,0,fe,re,null):t.texImage2D($,j,he,ze,Z,0,fe,re,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),de(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,$,i.get(O).__webglTexture,0,Re(v)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,$,i.get(O).__webglTexture,j),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Le(S,v,O){if(n.bindRenderbuffer(n.RENDERBUFFER,S),v.depthBuffer&&!v.stencilBuffer){let K=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(O||de(v)){let $=v.depthTexture;$&&$.isDepthTexture&&($.type===Wn?K=n.DEPTH_COMPONENT32F:$.type===Gn&&(K=n.DEPTH_COMPONENT24));let j=Re(v);de(v)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,j,K,v.width,v.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,j,K,v.width,v.height)}else n.renderbufferStorage(n.RENDERBUFFER,K,v.width,v.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,S)}else if(v.depthBuffer&&v.stencilBuffer){let K=Re(v);O&&de(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,K,n.DEPTH24_STENCIL8,v.width,v.height):de(v)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,K,n.DEPTH24_STENCIL8,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,S)}else{let K=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let $=0;$<K.length;$++){let j=K[$],fe=r.convert(j.format,j.colorSpace),re=r.convert(j.type),he=E(j.internalFormat,fe,re,j.colorSpace),be=Re(v);O&&de(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,be,he,v.width,v.height):de(v)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,be,he,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,he,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ue(S,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),V(v.depthTexture,0);let K=i.get(v.depthTexture).__webglTexture,$=Re(v);if(v.depthTexture.format===di)de(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0);else if(v.depthTexture.format===$i)de(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Ee(S){let v=i.get(S),O=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Ue(v.__webglFramebuffer,S)}else if(O){v.__webglDepthbuffer=[];for(let K=0;K<6;K++)t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[K]),v.__webglDepthbuffer[K]=n.createRenderbuffer(),Le(v.__webglDepthbuffer[K],S,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),Le(v.__webglDepthbuffer,S,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ze(S,v,O){let K=i.get(S);v!==void 0&&ge(K.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&Ee(S)}function U(S){let v=S.texture,O=i.get(S),K=i.get(v);S.addEventListener("dispose",k),S.isWebGLMultipleRenderTargets!==!0&&(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=v.version,o.memory.textures++);let $=S.isWebGLCubeRenderTarget===!0,j=S.isWebGLMultipleRenderTargets===!0,fe=p(S)||a;if($){O.__webglFramebuffer=[];for(let re=0;re<6;re++)if(a&&v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[re]=[];for(let he=0;he<v.mipmaps.length;he++)O.__webglFramebuffer[re][he]=n.createFramebuffer()}else O.__webglFramebuffer[re]=n.createFramebuffer()}else{if(a&&v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let re=0;re<v.mipmaps.length;re++)O.__webglFramebuffer[re]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(j)if(s.drawBuffers){let re=S.texture;for(let he=0,be=re.length;he<be;he++){let ze=i.get(re[he]);ze.__webglTexture===void 0&&(ze.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&S.samples>0&&de(S)===!1){let re=j?v:[v];O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let he=0;he<re.length;he++){let be=re[he];O.__webglColorRenderbuffer[he]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[he]);let ze=r.convert(be.format,be.colorSpace),Z=r.convert(be.type),je=E(be.internalFormat,ze,Z,be.colorSpace,S.isXRRenderTarget===!0),Xe=Re(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Xe,je,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,O.__webglColorRenderbuffer[he])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),Le(O.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),H(n.TEXTURE_CUBE_MAP,v,fe);for(let re=0;re<6;re++)if(a&&v.mipmaps&&v.mipmaps.length>0)for(let he=0;he<v.mipmaps.length;he++)ge(O.__webglFramebuffer[re][he],S,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,he);else ge(O.__webglFramebuffer[re],S,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);b(v,fe)&&x(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(j){let re=S.texture;for(let he=0,be=re.length;he<be;he++){let ze=re[he],Z=i.get(ze);t.bindTexture(n.TEXTURE_2D,Z.__webglTexture),H(n.TEXTURE_2D,ze,fe),ge(O.__webglFramebuffer,S,ze,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,0),b(ze,fe)&&x(n.TEXTURE_2D)}t.unbindTexture()}else{let re=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(a?re=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(re,K.__webglTexture),H(re,v,fe),a&&v.mipmaps&&v.mipmaps.length>0)for(let he=0;he<v.mipmaps.length;he++)ge(O.__webglFramebuffer[he],S,v,n.COLOR_ATTACHMENT0,re,he);else ge(O.__webglFramebuffer,S,v,n.COLOR_ATTACHMENT0,re,0);b(v,fe)&&x(re),t.unbindTexture()}S.depthBuffer&&Ee(S)}function Ut(S){let v=p(S)||a,O=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let K=0,$=O.length;K<$;K++){let j=O[K];if(b(j,v)){let fe=S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,re=i.get(j).__webglTexture;t.bindTexture(fe,re),x(fe),t.unbindTexture()}}}function ye(S){if(a&&S.samples>0&&de(S)===!1){let v=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],O=S.width,K=S.height,$=n.COLOR_BUFFER_BIT,j=[],fe=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=i.get(S),he=S.isWebGLMultipleRenderTargets===!0;if(he)for(let be=0;be<v.length;be++)t.bindFramebuffer(n.FRAMEBUFFER,re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let be=0;be<v.length;be++){j.push(n.COLOR_ATTACHMENT0+be),S.depthBuffer&&j.push(fe);let ze=re.__ignoreDepthValues!==void 0?re.__ignoreDepthValues:!1;if(ze===!1&&(S.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),he&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,re.__webglColorRenderbuffer[be]),ze===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[fe]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[fe])),he){let Z=i.get(v[be]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Z,0)}n.blitFramebuffer(0,0,O,K,0,0,O,K,$,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,j)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),he)for(let be=0;be<v.length;be++){t.bindFramebuffer(n.FRAMEBUFFER,re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,re.__webglColorRenderbuffer[be]);let ze=i.get(v[be]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,ze,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}}function Re(S){return Math.min(s.maxSamples,S.samples)}function de(S){let v=i.get(S);return a&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ht(S){let v=o.render.frame;h.get(S)!==v&&(h.set(S,v),S.update())}function Fe(S,v){let O=S.colorSpace,K=S.format,$=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===eo||O!==Ln&&O!==jt&&(Qe.getTransfer(O)===ot?a===!1?e.has("EXT_sRGB")===!0&&K===on?(S.format=eo,S.minFilter=Kt,S.generateMipmaps=!1):v=Tr.sRGBToLinear(v):(K!==on||$!==Zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}this.allocateTextureUnit=L,this.resetTextureUnits=ee,this.setTexture2D=V,this.setTexture2DArray=Y,this.setTexture3D=X,this.setTextureCube=W,this.rebindTextures=Ze,this.setupRenderTarget=U,this.updateRenderTargetMipmap=Ut,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=de}function Og(n,e,t){let i=t.isWebGL2;function s(r,o=jt){let a,l=Qe.getTransfer(o);if(r===Zn)return n.UNSIGNED_BYTE;if(r===Xc)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Yc)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Ru)return n.BYTE;if(r===Cu)return n.SHORT;if(r===No)return n.UNSIGNED_SHORT;if(r===Wc)return n.INT;if(r===Gn)return n.UNSIGNED_INT;if(r===Wn)return n.FLOAT;if(r===Ss)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Pu)return n.ALPHA;if(r===on)return n.RGBA;if(r===Lu)return n.LUMINANCE;if(r===Iu)return n.LUMINANCE_ALPHA;if(r===di)return n.DEPTH_COMPONENT;if(r===$i)return n.DEPTH_STENCIL;if(r===eo)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Du)return n.RED;if(r===qc)return n.RED_INTEGER;if(r===Uu)return n.RG;if(r===Zc)return n.RG_INTEGER;if(r===$c)return n.RGBA_INTEGER;if(r===pa||r===ma||r===ga||r===_a)if(l===ot)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===pa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ma)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ga)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===_a)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===pa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ma)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ga)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===_a)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===vl||r===yl||r===Ml||r===Sl)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===vl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===yl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ml)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Sl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Jc)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===bl||r===El)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===bl)return l===ot?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===El)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===wl||r===Tl||r===Al||r===Rl||r===Cl||r===Pl||r===Ll||r===Il||r===Dl||r===Ul||r===Nl||r===Ol||r===Fl||r===zl)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===wl)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Tl)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Al)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Rl)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Cl)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Pl)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ll)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Il)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Dl)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ul)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Nl)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ol)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Fl)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===zl)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===xa||r===Bl||r===kl)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===xa)return l===ot?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Bl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===kl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Nu||r===Hl||r===Vl||r===Gl)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===xa)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Hl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Vl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Gl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ui?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var go=class extends Rt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},mt=class extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}},Fg={type:"move"},vs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let p=t.getJointPose(_,i),d=this._getHandJoint(c,_);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Fg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new mt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},_o=class extends Kn{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,m=null,g=null,_=t.getContextAttributes(),p=null,d=null,b=[],x=[],E=new De,R=null,T=new Rt;T.layers.enable(1),T.viewport=new ct;let A=new Rt;A.layers.enable(2),A.viewport=new ct;let k=[T,A],y=new go;y.layers.enable(1),y.layers.enable(2);let w=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let q=b[H];return q===void 0&&(q=new vs,b[H]=q),q.getTargetRaySpace()},this.getControllerGrip=function(H){let q=b[H];return q===void 0&&(q=new vs,b[H]=q),q.getGripSpace()},this.getHand=function(H){let q=b[H];return q===void 0&&(q=new vs,b[H]=q),q.getHandSpace()};function G(H){let q=x.indexOf(H.inputSource);if(q===-1)return;let oe=b[q];oe!==void 0&&(oe.update(H.inputSource,H.frame,c||o),oe.dispatchEvent({type:H.type,data:H.inputSource}))}function ee(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",ee),s.removeEventListener("inputsourceschange",L);for(let H=0;H<b.length;H++){let q=x[H];q!==null&&(x[H]=null,b[H].disconnect(q))}w=null,z=null,e.setRenderTarget(p),m=null,f=null,u=null,s=null,d=null,ce.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",ee),s.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(E),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let q={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,q),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),d=new In(m.framebufferWidth,m.framebufferHeight,{format:on,type:Zn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let q=null,oe=null,_e=null;_.depth&&(_e=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,q=_.stencil?$i:di,oe=_.stencil?ui:Gn);let ge={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(ge),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),d=new In(f.textureWidth,f.textureHeight,{format:on,type:Zn,depthTexture:new zr(f.textureWidth,f.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});let Le=e.properties.get(d);Le.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ce.setContext(s),ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(H){for(let q=0;q<H.removed.length;q++){let oe=H.removed[q],_e=x.indexOf(oe);_e>=0&&(x[_e]=null,b[_e].disconnect(oe))}for(let q=0;q<H.added.length;q++){let oe=H.added[q],_e=x.indexOf(oe);if(_e===-1){for(let Le=0;Le<b.length;Le++)if(Le>=x.length){x.push(oe),_e=Le;break}else if(x[Le]===null){x[Le]=oe,_e=Le;break}if(_e===-1)break}let ge=b[_e];ge&&ge.connect(oe)}}let D=new P,V=new P;function Y(H,q,oe){D.setFromMatrixPosition(q.matrixWorld),V.setFromMatrixPosition(oe.matrixWorld);let _e=D.distanceTo(V),ge=q.projectionMatrix.elements,Le=oe.projectionMatrix.elements,Ue=ge[14]/(ge[10]-1),Ee=ge[14]/(ge[10]+1),Ze=(ge[9]+1)/ge[5],U=(ge[9]-1)/ge[5],Ut=(ge[8]-1)/ge[0],ye=(Le[8]+1)/Le[0],Re=Ue*Ut,de=Ue*ye,ht=_e/(-Ut+ye),Fe=ht*-Ut;q.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Fe),H.translateZ(ht),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();let S=Ue+ht,v=Ee+ht,O=Re-Fe,K=de+(_e-Fe),$=Ze*Ee/v*S,j=U*Ee/v*S;H.projectionMatrix.makePerspective(O,K,$,j,S,v),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function X(H,q){q===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(q.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;y.near=A.near=T.near=H.near,y.far=A.far=T.far=H.far,(w!==y.near||z!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),w=y.near,z=y.far);let q=H.parent,oe=y.cameras;X(y,q);for(let _e=0;_e<oe.length;_e++)X(oe[_e],q);oe.length===2?Y(y,T,A):y.projectionMatrix.copy(T.projectionMatrix),W(H,y,q)};function W(H,q,oe){oe===null?H.matrix.copy(q.matrixWorld):(H.matrix.copy(oe.matrixWorld),H.matrix.invert(),H.matrix.multiply(q.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(q.projectionMatrix),H.projectionMatrixInverse.copy(q.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=to*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(H){l=H,f!==null&&(f.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)};let J=null;function Q(H,q){if(h=q.getViewerPose(c||o),g=q,h!==null){let oe=h.views;m!==null&&(e.setRenderTargetFramebuffer(d,m.framebuffer),e.setRenderTarget(d));let _e=!1;oe.length!==y.cameras.length&&(y.cameras.length=0,_e=!0);for(let ge=0;ge<oe.length;ge++){let Le=oe[ge],Ue=null;if(m!==null)Ue=m.getViewport(Le);else{let Ze=u.getViewSubImage(f,Le);Ue=Ze.viewport,ge===0&&(e.setRenderTargetTextures(d,Ze.colorTexture,f.ignoreDepthValues?void 0:Ze.depthStencilTexture),e.setRenderTarget(d))}let Ee=k[ge];Ee===void 0&&(Ee=new Rt,Ee.layers.enable(ge),Ee.viewport=new ct,k[ge]=Ee),Ee.matrix.fromArray(Le.transform.matrix),Ee.matrix.decompose(Ee.position,Ee.quaternion,Ee.scale),Ee.projectionMatrix.fromArray(Le.projectionMatrix),Ee.projectionMatrixInverse.copy(Ee.projectionMatrix).invert(),Ee.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),ge===0&&(y.matrix.copy(Ee.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),_e===!0&&y.cameras.push(Ee)}}for(let oe=0;oe<b.length;oe++){let _e=x[oe],ge=b[oe];_e!==null&&ge!==void 0&&ge.update(_e,q,c||o)}J&&J(H,q),q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:q}),g=null}let ce=new ih;ce.setAnimationLoop(Q),this.setAnimationLoop=function(H){J=H},this.dispose=function(){}}};function zg(n,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,nh(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,b,x,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),u(p,d)):d.isMeshPhongMaterial?(r(p,d),h(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,E)):d.isMeshMatcapMaterial?(r(p,d),g(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),_(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,b,x):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Dt&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Dt&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let b=e.get(d).envMap;if(b&&(p.envMap.value=b,p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;let x=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*x,t(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,b,x){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*b,p.scale.value=x*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,b){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Dt&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function _(p,d){let b=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Bg(n,e,t,i){let s={},r={},o=[],a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(b,x){let E=x.program;i.uniformBlockBinding(b,E)}function c(b,x){let E=s[b.id];E===void 0&&(g(b),E=h(b),s[b.id]=E,b.addEventListener("dispose",p));let R=x.program;i.updateUBOMapping(b,R);let T=e.render.frame;r[b.id]!==T&&(f(b),r[b.id]=T)}function h(b){let x=u();b.__bindingPointIndex=x;let E=n.createBuffer(),R=b.__size,T=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,R,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,E),E}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let x=s[b.id],E=b.uniforms,R=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let T=0,A=E.length;T<A;T++){let k=Array.isArray(E[T])?E[T]:[E[T]];for(let y=0,w=k.length;y<w;y++){let z=k[y];if(m(z,T,y,R)===!0){let G=z.__offset,ee=Array.isArray(z.value)?z.value:[z.value],L=0;for(let D=0;D<ee.length;D++){let V=ee[D],Y=_(V);typeof V=="number"||typeof V=="boolean"?(z.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,G+L,z.__data)):V.isMatrix3?(z.__data[0]=V.elements[0],z.__data[1]=V.elements[1],z.__data[2]=V.elements[2],z.__data[3]=0,z.__data[4]=V.elements[3],z.__data[5]=V.elements[4],z.__data[6]=V.elements[5],z.__data[7]=0,z.__data[8]=V.elements[6],z.__data[9]=V.elements[7],z.__data[10]=V.elements[8],z.__data[11]=0):(V.toArray(z.__data,L),L+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,z.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(b,x,E,R){let T=b.value,A=x+"_"+E;if(R[A]===void 0)return typeof T=="number"||typeof T=="boolean"?R[A]=T:R[A]=T.clone(),!0;{let k=R[A];if(typeof T=="number"||typeof T=="boolean"){if(k!==T)return R[A]=T,!0}else if(k.equals(T)===!1)return k.copy(T),!0}return!1}function g(b){let x=b.uniforms,E=0,R=16;for(let A=0,k=x.length;A<k;A++){let y=Array.isArray(x[A])?x[A]:[x[A]];for(let w=0,z=y.length;w<z;w++){let G=y[w],ee=Array.isArray(G.value)?G.value:[G.value];for(let L=0,D=ee.length;L<D;L++){let V=ee[L],Y=_(V),X=E%R;X!==0&&R-X<Y.boundary&&(E+=R-X),G.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=E,E+=Y.storage}}}let T=E%R;return T>0&&(E+=R-T),b.__size=E,b.__cache={},this}function _(b){let x={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function p(b){let x=b.target;x.removeEventListener("dispose",p);let E=o.indexOf(x.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function d(){for(let b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}var Es=class{constructor(e={}){let{canvas:t=qu(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;let m=new Uint32Array(4),g=new Int32Array(4),_=null,p=null,d=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pt,this._useLegacyLights=!1,this.toneMapping=qn,this.toneMappingExposure=1;let x=this,E=!1,R=0,T=0,A=null,k=-1,y=null,w=new ct,z=new ct,G=null,ee=new Ye(0),L=0,D=t.width,V=t.height,Y=1,X=null,W=null,J=new ct(0,0,D,V),Q=new ct(0,0,D,V),ce=!1,H=new bs,q=!1,oe=!1,_e=null,ge=new xt,Le=new De,Ue=new P,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ze(){return A===null?Y:1}let U=i;function Ut(M,I){for(let F=0;F<M.length;F++){let B=M[F],N=t.getContext(B,I);if(N!==null)return N}return null}try{let M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Io}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",C,!1),t.addEventListener("webglcontextcreationerror",ie,!1),U===null){let I=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&I.shift(),U=Ut(I,M),U===null)throw Ut(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let ye,Re,de,ht,Fe,S,v,O,K,$,j,fe,re,he,be,ze,Z,je,Xe,Ae,xe,ue,Ne,Ke;function dt(){ye=new sm(U),Re=new jp(U,ye,e),ye.init(Re),ue=new Og(U,ye,Re),de=new Ug(U,ye,Re),ht=new om(U),Fe=new Sg,S=new Ng(U,ye,de,Fe,Re,ue,ht),v=new em(x),O=new im(x),K=new pd(U,Re),Ne=new Jp(U,ye,K,Re),$=new rm(U,K,ht,Ne),j=new um(U,$,K,ht),Xe=new hm(U,Re,S),ze=new Qp(Fe),fe=new Mg(x,v,O,ye,Re,Ne,ze),re=new zg(x,Fe),he=new Eg,be=new Pg(ye,Re),je=new $p(x,v,O,de,j,f,l),Z=new Dg(x,j,Re),Ke=new Bg(U,ht,Re,de),Ae=new Kp(U,ye,ht,Re),xe=new am(U,ye,ht,Re),ht.programs=fe.programs,x.capabilities=Re,x.extensions=ye,x.properties=Fe,x.renderLists=he,x.shadowMap=Z,x.state=de,x.info=ht}dt();let ke=new _o(x,U);this.xr=ke,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let M=ye.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=ye.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(M){M!==void 0&&(Y=M,this.setSize(D,V,!1))},this.getSize=function(M){return M.set(D,V)},this.setSize=function(M,I,F=!0){if(ke.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=M,V=I,t.width=Math.floor(M*Y),t.height=Math.floor(I*Y),F===!0&&(t.style.width=M+"px",t.style.height=I+"px"),this.setViewport(0,0,M,I)},this.getDrawingBufferSize=function(M){return M.set(D*Y,V*Y).floor()},this.setDrawingBufferSize=function(M,I,F){D=M,V=I,Y=F,t.width=Math.floor(M*F),t.height=Math.floor(I*F),this.setViewport(0,0,M,I)},this.getCurrentViewport=function(M){return M.copy(w)},this.getViewport=function(M){return M.copy(J)},this.setViewport=function(M,I,F,B){M.isVector4?J.set(M.x,M.y,M.z,M.w):J.set(M,I,F,B),de.viewport(w.copy(J).multiplyScalar(Y).floor())},this.getScissor=function(M){return M.copy(Q)},this.setScissor=function(M,I,F,B){M.isVector4?Q.set(M.x,M.y,M.z,M.w):Q.set(M,I,F,B),de.scissor(z.copy(Q).multiplyScalar(Y).floor())},this.getScissorTest=function(){return ce},this.setScissorTest=function(M){de.setScissorTest(ce=M)},this.setOpaqueSort=function(M){X=M},this.setTransparentSort=function(M){W=M},this.getClearColor=function(M){return M.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor.apply(je,arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha.apply(je,arguments)},this.clear=function(M=!0,I=!0,F=!0){let B=0;if(M){let N=!1;if(A!==null){let le=A.texture.format;N=le===$c||le===Zc||le===qc}if(N){let le=A.texture.type,pe=le===Zn||le===Gn||le===No||le===ui||le===Xc||le===Yc,Se=je.getClearColor(),Te=je.getClearAlpha(),Be=Se.r,Ce=Se.g,Ie=Se.b;pe?(m[0]=Be,m[1]=Ce,m[2]=Ie,m[3]=Te,U.clearBufferuiv(U.COLOR,0,m)):(g[0]=Be,g[1]=Ce,g[2]=Ie,g[3]=Te,U.clearBufferiv(U.COLOR,0,g))}else B|=U.COLOR_BUFFER_BIT}I&&(B|=U.DEPTH_BUFFER_BIT),F&&(B|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",C,!1),t.removeEventListener("webglcontextcreationerror",ie,!1),he.dispose(),be.dispose(),Fe.dispose(),v.dispose(),O.dispose(),j.dispose(),Ne.dispose(),Ke.dispose(),fe.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",Nt),ke.removeEventListener("sessionend",rt),_e&&(_e.dispose(),_e=null),Ot.stop()};function te(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let M=ht.autoReset,I=Z.enabled,F=Z.autoUpdate,B=Z.needsUpdate,N=Z.type;dt(),ht.autoReset=M,Z.enabled=I,Z.autoUpdate=F,Z.needsUpdate=B,Z.type=N}function ie(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function se(M){let I=M.target;I.removeEventListener("dispose",se),we(I)}function we(M){Me(M),Fe.remove(M)}function Me(M){let I=Fe.get(M).programs;I!==void 0&&(I.forEach(function(F){fe.releaseProgram(F)}),M.isShaderMaterial&&fe.releaseShaderCache(M))}this.renderBufferDirect=function(M,I,F,B,N,le){I===null&&(I=Ee);let pe=N.isMesh&&N.matrixWorld.determinant()<0,Se=Lh(M,I,F,B,N);de.setMaterial(B,pe);let Te=F.index,Be=1;if(B.wireframe===!0){if(Te=$.getWireframeAttribute(F),Te===void 0)return;Be=2}let Ce=F.drawRange,Ie=F.attributes.position,_t=Ce.start*Be,Xt=(Ce.start+Ce.count)*Be;le!==null&&(_t=Math.max(_t,le.start*Be),Xt=Math.min(Xt,(le.start+le.count)*Be)),Te!==null?(_t=Math.max(_t,0),Xt=Math.min(Xt,Te.count)):Ie!=null&&(_t=Math.max(_t,0),Xt=Math.min(Xt,Ie.count));let Tt=Xt-_t;if(Tt<0||Tt===1/0)return;Ne.setup(N,B,Se,F,Te);let vn,ut=Ae;if(Te!==null&&(vn=K.get(Te),ut=xe,ut.setIndex(vn)),N.isMesh)B.wireframe===!0?(de.setLineWidth(B.wireframeLinewidth*Ze()),ut.setMode(U.LINES)):ut.setMode(U.TRIANGLES);else if(N.isLine){let He=B.linewidth;He===void 0&&(He=1),de.setLineWidth(He*Ze()),N.isLineSegments?ut.setMode(U.LINES):N.isLineLoop?ut.setMode(U.LINE_LOOP):ut.setMode(U.LINE_STRIP)}else N.isPoints?ut.setMode(U.POINTS):N.isSprite&&ut.setMode(U.TRIANGLES);if(N.isBatchedMesh)ut.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else if(N.isInstancedMesh)ut.renderInstances(_t,Tt,N.count);else if(F.isInstancedBufferGeometry){let He=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,ea=Math.min(F.instanceCount,He);ut.renderInstances(_t,Tt,ea)}else ut.render(_t,Tt)};function it(M,I,F){M.transparent===!0&&M.side===Rn&&M.forceSinglePass===!1?(M.side=Dt,M.needsUpdate=!0,Os(M,I,F),M.side=Jn,M.needsUpdate=!0,Os(M,I,F),M.side=Rn):Os(M,I,F)}this.compile=function(M,I,F=null){F===null&&(F=M),p=be.get(F),p.init(),b.push(p),F.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),M!==F&&M.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights(x._useLegacyLights);let B=new Set;return M.traverse(function(N){let le=N.material;if(le)if(Array.isArray(le))for(let pe=0;pe<le.length;pe++){let Se=le[pe];it(Se,F,N),B.add(Se)}else it(le,F,N),B.add(le)}),b.pop(),p=null,B},this.compileAsync=function(M,I,F=null){let B=this.compile(M,I,F);return new Promise(N=>{function le(){if(B.forEach(function(pe){Fe.get(pe).currentProgram.isReady()&&B.delete(pe)}),B.size===0){N(M);return}setTimeout(le,10)}ye.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let st=null;function wt(M){st&&st(M)}function Nt(){Ot.stop()}function rt(){Ot.start()}let Ot=new ih;Ot.setAnimationLoop(wt),typeof self!="undefined"&&Ot.setContext(self),this.setAnimationLoop=function(M){st=M,ke.setAnimationLoop(M),M===null?Ot.stop():Ot.start()},ke.addEventListener("sessionstart",Nt),ke.addEventListener("sessionend",rt),this.render=function(M,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(ke.cameraAutoUpdate===!0&&ke.updateCamera(I),I=ke.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,I,A),p=be.get(M,b.length),p.init(),b.push(p),ge.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),H.setFromProjectionMatrix(ge),oe=this.localClippingEnabled,q=ze.init(this.clippingPlanes,oe),_=he.get(M,d.length),_.init(),d.push(_),pn(M,I,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(X,W),this.info.render.frame++,q===!0&&ze.beginShadows();let F=p.state.shadowsArray;if(Z.render(F,M,I),q===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),je.render(_,M),p.setupLights(x._useLegacyLights),I.isArrayCamera){let B=I.cameras;for(let N=0,le=B.length;N<le;N++){let pe=B[N];Zo(_,M,pe,pe.viewport)}}else Zo(_,M,I);A!==null&&(S.updateMultisampleRenderTarget(A),S.updateRenderTargetMipmap(A)),M.isScene===!0&&M.onAfterRender(x,M,I),Ne.resetDefaultState(),k=-1,y=null,b.pop(),b.length>0?p=b[b.length-1]:p=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function pn(M,I,F,B){if(M.visible===!1)return;if(M.layers.test(I.layers)){if(M.isGroup)F=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(I);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||H.intersectsSprite(M)){B&&Ue.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ge);let pe=j.update(M),Se=M.material;Se.visible&&_.push(M,pe,Se,F,Ue.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||H.intersectsObject(M))){let pe=j.update(M),Se=M.material;if(B&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ue.copy(M.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Ue.copy(pe.boundingSphere.center)),Ue.applyMatrix4(M.matrixWorld).applyMatrix4(ge)),Array.isArray(Se)){let Te=pe.groups;for(let Be=0,Ce=Te.length;Be<Ce;Be++){let Ie=Te[Be],_t=Se[Ie.materialIndex];_t&&_t.visible&&_.push(M,pe,_t,F,Ue.z,Ie)}}else Se.visible&&_.push(M,pe,Se,F,Ue.z,null)}}let le=M.children;for(let pe=0,Se=le.length;pe<Se;pe++)pn(le[pe],I,F,B)}function Zo(M,I,F,B){let N=M.opaque,le=M.transmissive,pe=M.transparent;p.setupLightsView(F),q===!0&&ze.setGlobalState(x.clippingPlanes,F),le.length>0&&Ph(N,le,I,F),B&&de.viewport(w.copy(B)),N.length>0&&Ns(N,I,F),le.length>0&&Ns(le,I,F),pe.length>0&&Ns(pe,I,F),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function Ph(M,I,F,B){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;let le=Re.isWebGL2;_e===null&&(_e=new In(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?Ss:Zn,minFilter:Ms,samples:le?4:0})),x.getDrawingBufferSize(Le),le?_e.setSize(Le.x,Le.y):_e.setSize(no(Le.x),no(Le.y));let pe=x.getRenderTarget();x.setRenderTarget(_e),x.getClearColor(ee),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();let Se=x.toneMapping;x.toneMapping=qn,Ns(M,F,B),S.updateMultisampleRenderTarget(_e),S.updateRenderTargetMipmap(_e);let Te=!1;for(let Be=0,Ce=I.length;Be<Ce;Be++){let Ie=I[Be],_t=Ie.object,Xt=Ie.geometry,Tt=Ie.material,vn=Ie.group;if(Tt.side===Rn&&_t.layers.test(B.layers)){let ut=Tt.side;Tt.side=Dt,Tt.needsUpdate=!0,$o(_t,F,B,Xt,Tt,vn),Tt.side=ut,Tt.needsUpdate=!0,Te=!0}}Te===!0&&(S.updateMultisampleRenderTarget(_e),S.updateRenderTargetMipmap(_e)),x.setRenderTarget(pe),x.setClearColor(ee,L),x.toneMapping=Se}function Ns(M,I,F){let B=I.isScene===!0?I.overrideMaterial:null;for(let N=0,le=M.length;N<le;N++){let pe=M[N],Se=pe.object,Te=pe.geometry,Be=B===null?pe.material:B,Ce=pe.group;Se.layers.test(F.layers)&&$o(Se,I,F,Te,Be,Ce)}}function $o(M,I,F,B,N,le){M.onBeforeRender(x,I,F,B,N,le),M.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),N.onBeforeRender(x,I,F,B,M,le),N.transparent===!0&&N.side===Rn&&N.forceSinglePass===!1?(N.side=Dt,N.needsUpdate=!0,x.renderBufferDirect(F,I,B,N,M,le),N.side=Jn,N.needsUpdate=!0,x.renderBufferDirect(F,I,B,N,M,le),N.side=Rn):x.renderBufferDirect(F,I,B,N,M,le),M.onAfterRender(x,I,F,B,N,le)}function Os(M,I,F){I.isScene!==!0&&(I=Ee);let B=Fe.get(M),N=p.state.lights,le=p.state.shadowsArray,pe=N.state.version,Se=fe.getParameters(M,N.state,le,I,F),Te=fe.getProgramCacheKey(Se),Be=B.programs;B.environment=M.isMeshStandardMaterial?I.environment:null,B.fog=I.fog,B.envMap=(M.isMeshStandardMaterial?O:v).get(M.envMap||B.environment),Be===void 0&&(M.addEventListener("dispose",se),Be=new Map,B.programs=Be);let Ce=Be.get(Te);if(Ce!==void 0){if(B.currentProgram===Ce&&B.lightsStateVersion===pe)return Ko(M,Se),Ce}else Se.uniforms=fe.getUniforms(M),M.onBuild(F,Se,x),M.onBeforeCompile(Se,x),Ce=fe.acquireProgram(Se,Te),Be.set(Te,Ce),B.uniforms=Se.uniforms;let Ie=B.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ie.clippingPlanes=ze.uniform),Ko(M,Se),B.needsLights=Dh(M),B.lightsStateVersion=pe,B.needsLights&&(Ie.ambientLightColor.value=N.state.ambient,Ie.lightProbe.value=N.state.probe,Ie.directionalLights.value=N.state.directional,Ie.directionalLightShadows.value=N.state.directionalShadow,Ie.spotLights.value=N.state.spot,Ie.spotLightShadows.value=N.state.spotShadow,Ie.rectAreaLights.value=N.state.rectArea,Ie.ltc_1.value=N.state.rectAreaLTC1,Ie.ltc_2.value=N.state.rectAreaLTC2,Ie.pointLights.value=N.state.point,Ie.pointLightShadows.value=N.state.pointShadow,Ie.hemisphereLights.value=N.state.hemi,Ie.directionalShadowMap.value=N.state.directionalShadowMap,Ie.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ie.spotShadowMap.value=N.state.spotShadowMap,Ie.spotLightMatrix.value=N.state.spotLightMatrix,Ie.spotLightMap.value=N.state.spotLightMap,Ie.pointShadowMap.value=N.state.pointShadowMap,Ie.pointShadowMatrix.value=N.state.pointShadowMatrix),B.currentProgram=Ce,B.uniformsList=null,Ce}function Jo(M){if(M.uniformsList===null){let I=M.currentProgram.getUniforms();M.uniformsList=Yi.seqWithValue(I.seq,M.uniforms)}return M.uniformsList}function Ko(M,I){let F=Fe.get(M);F.outputColorSpace=I.outputColorSpace,F.batching=I.batching,F.instancing=I.instancing,F.instancingColor=I.instancingColor,F.skinning=I.skinning,F.morphTargets=I.morphTargets,F.morphNormals=I.morphNormals,F.morphColors=I.morphColors,F.morphTargetsCount=I.morphTargetsCount,F.numClippingPlanes=I.numClippingPlanes,F.numIntersection=I.numClipIntersection,F.vertexAlphas=I.vertexAlphas,F.vertexTangents=I.vertexTangents,F.toneMapping=I.toneMapping}function Lh(M,I,F,B,N){I.isScene!==!0&&(I=Ee),S.resetTextureUnits();let le=I.fog,pe=B.isMeshStandardMaterial?I.environment:null,Se=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ln,Te=(B.isMeshStandardMaterial?O:v).get(B.envMap||pe),Be=B.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Ce=!!F.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ie=!!F.morphAttributes.position,_t=!!F.morphAttributes.normal,Xt=!!F.morphAttributes.color,Tt=qn;B.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Tt=x.toneMapping);let vn=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ut=vn!==void 0?vn.length:0,He=Fe.get(B),ea=p.state.lights;if(q===!0&&(oe===!0||M!==y)){let $t=M===y&&B.id===k;ze.setState(B,M,$t)}let ft=!1;B.version===He.__version?(He.needsLights&&He.lightsStateVersion!==ea.state.version||He.outputColorSpace!==Se||N.isBatchedMesh&&He.batching===!1||!N.isBatchedMesh&&He.batching===!0||N.isInstancedMesh&&He.instancing===!1||!N.isInstancedMesh&&He.instancing===!0||N.isSkinnedMesh&&He.skinning===!1||!N.isSkinnedMesh&&He.skinning===!0||N.isInstancedMesh&&He.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&He.instancingColor===!1&&N.instanceColor!==null||He.envMap!==Te||B.fog===!0&&He.fog!==le||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==ze.numPlanes||He.numIntersection!==ze.numIntersection)||He.vertexAlphas!==Be||He.vertexTangents!==Ce||He.morphTargets!==Ie||He.morphNormals!==_t||He.morphColors!==Xt||He.toneMapping!==Tt||Re.isWebGL2===!0&&He.morphTargetsCount!==ut)&&(ft=!0):(ft=!0,He.__version=B.version);let ti=He.currentProgram;ft===!0&&(ti=Os(B,I,N));let jo=!1,ss=!1,ta=!1,Pt=ti.getUniforms(),ni=He.uniforms;if(de.useProgram(ti.program)&&(jo=!0,ss=!0,ta=!0),B.id!==k&&(k=B.id,ss=!0),jo||y!==M){Pt.setValue(U,"projectionMatrix",M.projectionMatrix),Pt.setValue(U,"viewMatrix",M.matrixWorldInverse);let $t=Pt.map.cameraPosition;$t!==void 0&&$t.setValue(U,Ue.setFromMatrixPosition(M.matrixWorld)),Re.logarithmicDepthBuffer&&Pt.setValue(U,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Pt.setValue(U,"isOrthographic",M.isOrthographicCamera===!0),y!==M&&(y=M,ss=!0,ta=!0)}if(N.isSkinnedMesh){Pt.setOptional(U,N,"bindMatrix"),Pt.setOptional(U,N,"bindMatrixInverse");let $t=N.skeleton;$t&&(Re.floatVertexTextures?($t.boneTexture===null&&$t.computeBoneTexture(),Pt.setValue(U,"boneTexture",$t.boneTexture,S)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}N.isBatchedMesh&&(Pt.setOptional(U,N,"batchingTexture"),Pt.setValue(U,"batchingTexture",N._matricesTexture,S));let na=F.morphAttributes;if((na.position!==void 0||na.normal!==void 0||na.color!==void 0&&Re.isWebGL2===!0)&&Xe.update(N,F,ti),(ss||He.receiveShadow!==N.receiveShadow)&&(He.receiveShadow=N.receiveShadow,Pt.setValue(U,"receiveShadow",N.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(ni.envMap.value=Te,ni.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),ss&&(Pt.setValue(U,"toneMappingExposure",x.toneMappingExposure),He.needsLights&&Ih(ni,ta),le&&B.fog===!0&&re.refreshFogUniforms(ni,le),re.refreshMaterialUniforms(ni,B,Y,V,_e),Yi.upload(U,Jo(He),ni,S)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Yi.upload(U,Jo(He),ni,S),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Pt.setValue(U,"center",N.center),Pt.setValue(U,"modelViewMatrix",N.modelViewMatrix),Pt.setValue(U,"normalMatrix",N.normalMatrix),Pt.setValue(U,"modelMatrix",N.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let $t=B.uniformsGroups;for(let ia=0,Uh=$t.length;ia<Uh;ia++)if(Re.isWebGL2){let Qo=$t[ia];Ke.update(Qo,ti),Ke.bind(Qo,ti)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ti}function Ih(M,I){M.ambientLightColor.needsUpdate=I,M.lightProbe.needsUpdate=I,M.directionalLights.needsUpdate=I,M.directionalLightShadows.needsUpdate=I,M.pointLights.needsUpdate=I,M.pointLightShadows.needsUpdate=I,M.spotLights.needsUpdate=I,M.spotLightShadows.needsUpdate=I,M.rectAreaLights.needsUpdate=I,M.hemisphereLights.needsUpdate=I}function Dh(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(M,I,F){Fe.get(M.texture).__webglTexture=I,Fe.get(M.depthTexture).__webglTexture=F;let B=Fe.get(M);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=F===void 0,B.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,I){let F=Fe.get(M);F.__webglFramebuffer=I,F.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(M,I=0,F=0){A=M,R=I,T=F;let B=!0,N=null,le=!1,pe=!1;if(M){let Te=Fe.get(M);Te.__useDefaultFramebuffer!==void 0?(de.bindFramebuffer(U.FRAMEBUFFER,null),B=!1):Te.__webglFramebuffer===void 0?S.setupRenderTarget(M):Te.__hasExternalTextures&&S.rebindTextures(M,Fe.get(M.texture).__webglTexture,Fe.get(M.depthTexture).__webglTexture);let Be=M.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(pe=!0);let Ce=Fe.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ce[I])?N=Ce[I][F]:N=Ce[I],le=!0):Re.isWebGL2&&M.samples>0&&S.useMultisampledRTT(M)===!1?N=Fe.get(M).__webglMultisampledFramebuffer:Array.isArray(Ce)?N=Ce[F]:N=Ce,w.copy(M.viewport),z.copy(M.scissor),G=M.scissorTest}else w.copy(J).multiplyScalar(Y).floor(),z.copy(Q).multiplyScalar(Y).floor(),G=ce;if(de.bindFramebuffer(U.FRAMEBUFFER,N)&&Re.drawBuffers&&B&&de.drawBuffers(M,N),de.viewport(w),de.scissor(z),de.setScissorTest(G),le){let Te=Fe.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+I,Te.__webglTexture,F)}else if(pe){let Te=Fe.get(M.texture),Be=I||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Te.__webglTexture,F||0,Be)}k=-1},this.readRenderTargetPixels=function(M,I,F,B,N,le,pe){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Fe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&pe!==void 0&&(Se=Se[pe]),Se){de.bindFramebuffer(U.FRAMEBUFFER,Se);try{let Te=M.texture,Be=Te.format,Ce=Te.type;if(Be!==on&&ue.convert(Be)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ie=Ce===Ss&&(ye.has("EXT_color_buffer_half_float")||Re.isWebGL2&&ye.has("EXT_color_buffer_float"));if(Ce!==Zn&&ue.convert(Ce)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ce===Wn&&(Re.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!Ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=M.width-B&&F>=0&&F<=M.height-N&&U.readPixels(I,F,B,N,ue.convert(Be),ue.convert(Ce),le)}finally{let Te=A!==null?Fe.get(A).__webglFramebuffer:null;de.bindFramebuffer(U.FRAMEBUFFER,Te)}}},this.copyFramebufferToTexture=function(M,I,F=0){let B=Math.pow(2,-F),N=Math.floor(I.image.width*B),le=Math.floor(I.image.height*B);S.setTexture2D(I,0),U.copyTexSubImage2D(U.TEXTURE_2D,F,0,0,M.x,M.y,N,le),de.unbindTexture()},this.copyTextureToTexture=function(M,I,F,B=0){let N=I.image.width,le=I.image.height,pe=ue.convert(F.format),Se=ue.convert(F.type);S.setTexture2D(F,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment),I.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,B,M.x,M.y,N,le,pe,Se,I.image.data):I.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,B,M.x,M.y,I.mipmaps[0].width,I.mipmaps[0].height,pe,I.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,B,M.x,M.y,pe,Se,I.image),B===0&&F.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),de.unbindTexture()},this.copyTextureToTexture3D=function(M,I,F,B,N=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let le=M.max.x-M.min.x+1,pe=M.max.y-M.min.y+1,Se=M.max.z-M.min.z+1,Te=ue.convert(B.format),Be=ue.convert(B.type),Ce;if(B.isData3DTexture)S.setTexture3D(B,0),Ce=U.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)S.setTexture2DArray(B,0),Ce=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);let Ie=U.getParameter(U.UNPACK_ROW_LENGTH),_t=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Xt=U.getParameter(U.UNPACK_SKIP_PIXELS),Tt=U.getParameter(U.UNPACK_SKIP_ROWS),vn=U.getParameter(U.UNPACK_SKIP_IMAGES),ut=F.isCompressedTexture?F.mipmaps[N]:F.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,ut.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ut.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,M.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,M.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,M.min.z),F.isDataTexture||F.isData3DTexture?U.texSubImage3D(Ce,N,I.x,I.y,I.z,le,pe,Se,Te,Be,ut.data):F.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Ce,N,I.x,I.y,I.z,le,pe,Se,Te,ut.data)):U.texSubImage3D(Ce,N,I.x,I.y,I.z,le,pe,Se,Te,Be,ut),U.pixelStorei(U.UNPACK_ROW_LENGTH,Ie),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,_t),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Xt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Tt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,vn),N===0&&B.generateMipmaps&&U.generateMipmap(Ce),de.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?S.setTextureCube(M,0):M.isData3DTexture?S.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?S.setTexture2DArray(M,0):S.setTexture2D(M,0),de.unbindTexture()},this.resetState=function(){R=0,T=0,A=null,de.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Oo?"display-p3":"srgb",t.unpackColorSpace=Qe.workingColorSpace===Zr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===pt?fi:Kc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===fi?pt:Ln}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},xo=class extends Es{};xo.prototype.isWebGL1Renderer=!0;var Br=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ye(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ji=class extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},vo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Qa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=$n()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ft=new P,kr=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Cn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Cn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Cn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Cn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),s=tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),s=tt(s,this.array),r=tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Zt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},gn=class extends Dn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Bi,ps=new P,ki=new P,Hi=new P,Vi=new De,ms=new De,ch=new xt,fr=new P,gs=new P,pr=new P,Dc=new De,Wa=new De,Uc=new De,Nn=class extends Ct{constructor(e=new gn){if(super(),this.isSprite=!0,this.type="Sprite",Bi===void 0){Bi=new Wt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new vo(t,5);Bi.setIndex([0,1,2,0,2,3]),Bi.setAttribute("position",new kr(i,3,0,!1)),Bi.setAttribute("uv",new kr(i,2,3,!1))}this.geometry=Bi,this.material=e,this.center=new De(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ki.setFromMatrixScale(this.matrixWorld),ch.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Hi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ki.multiplyScalar(-Hi.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;mr(fr.set(-.5,-.5,0),Hi,o,ki,s,r),mr(gs.set(.5,-.5,0),Hi,o,ki,s,r),mr(pr.set(.5,.5,0),Hi,o,ki,s,r),Dc.set(0,0),Wa.set(1,0),Uc.set(1,1);let a=e.ray.intersectTriangle(fr,gs,pr,!1,ps);if(a===null&&(mr(gs.set(-.5,.5,0),Hi,o,ki,s,r),Wa.set(0,1),a=e.ray.intersectTriangle(fr,pr,gs,!1,ps),a===null))return;let l=e.ray.origin.distanceTo(ps);l<e.near||l>e.far||t.push({distance:l,point:ps.clone(),uv:hi.getInterpolation(ps,fr,gs,pr,Dc,Wa,Uc,new De),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function mr(n,e,t,i,s,r){Vi.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(ms.x=r*Vi.x-s*Vi.y,ms.y=s*Vi.x+r*Vi.y):ms.copy(Vi),n.copy(e),n.x+=ms.x,n.y+=ms.y,n.applyMatrix4(ch)}var ws=class extends Dn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Nc=new P,Oc=new P,Fc=new xt,Xa=new Cr,gr=new Ji,Hr=class extends Ct{constructor(e=new Wt,t=new ws){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Nc.fromBufferAttribute(t,s-1),Oc.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Nc.distanceTo(Oc);e.setAttribute("lineDistance",new St(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),gr.copy(i.boundingSphere),gr.applyMatrix4(s),gr.radius+=r,e.ray.intersectsSphere(gr)===!1)return;Fc.copy(s).invert(),Xa.copy(e.ray).applyMatrix4(Fc);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new P,h=new P,u=new P,f=new P,m=this.isLineSegments?2:1,g=i.index,p=i.attributes.position;if(g!==null){let d=Math.max(0,o.start),b=Math.min(g.count,o.start+o.count);for(let x=d,E=b-1;x<E;x+=m){let R=g.getX(x),T=g.getX(x+1);if(c.fromBufferAttribute(p,R),h.fromBufferAttribute(p,T),Xa.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);let k=e.ray.origin.distanceTo(f);k<e.near||k>e.far||t.push({distance:k,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{let d=Math.max(0,o.start),b=Math.min(p.count,o.start+o.count);for(let x=d,E=b-1;x<E;x+=m){if(c.fromBufferAttribute(p,x),h.fromBufferAttribute(p,x+1),Xa.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);let T=e.ray.origin.distanceTo(f);T<e.near||T>e.far||t.push({distance:T,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};var cn=class extends Qt{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Vr=class n extends Wt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new P,h=new De;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let m=i+u/t*s;c.x=e*Math.cos(m),c.y=e*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new St(o,3)),this.setAttribute("normal",new St(a,3)),this.setAttribute("uv",new St(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},On=class n extends Wt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],m=[],g=0,_=[],p=i/2,d=0;b(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new St(u,3)),this.setAttribute("normal",new St(f,3)),this.setAttribute("uv",new St(m,2));function b(){let E=new P,R=new P,T=0,A=(t-e)/i;for(let k=0;k<=r;k++){let y=[],w=k/r,z=w*(t-e)+e;for(let G=0;G<=s;G++){let ee=G/s,L=ee*l+a,D=Math.sin(L),V=Math.cos(L);R.x=z*D,R.y=-w*i+p,R.z=z*V,u.push(R.x,R.y,R.z),E.set(D,A,V).normalize(),f.push(E.x,E.y,E.z),m.push(ee,1-w),y.push(g++)}_.push(y)}for(let k=0;k<s;k++)for(let y=0;y<r;y++){let w=_[y][k],z=_[y+1][k],G=_[y+1][k+1],ee=_[y][k+1];h.push(w,z,ee),h.push(z,G,ee),T+=6}c.addGroup(d,T,0),d+=T}function x(E){let R=g,T=new De,A=new P,k=0,y=E===!0?e:t,w=E===!0?1:-1;for(let G=1;G<=s;G++)u.push(0,p*w,0),f.push(0,w,0),m.push(.5,.5),g++;let z=g;for(let G=0;G<=s;G++){let L=G/s*l+a,D=Math.cos(L),V=Math.sin(L);A.x=y*V,A.y=p*w,A.z=y*D,u.push(A.x,A.y,A.z),f.push(0,w,0),T.x=D*.5+.5,T.y=V*.5*w+.5,m.push(T.x,T.y),g++}for(let G=0;G<s;G++){let ee=R+G,L=z+G;E===!0?h.push(L,L+1,ee):h.push(L+1,L,ee),k+=3}c.addGroup(d,k,E===!0?1:2),d+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var hn=class n extends Wt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new P,f=new P,m=[],g=[],_=[],p=[];for(let d=0;d<=i;d++){let b=[],x=d/i,E=0;d===0&&o===0?E=.5/t:d===i&&l===Math.PI&&(E=-.5/t);for(let R=0;R<=t;R++){let T=R/t;u.x=-e*Math.cos(s+T*r)*Math.sin(o+x*a),u.y=e*Math.cos(o+x*a),u.z=e*Math.sin(s+T*r)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),p.push(T+E,1-x),b.push(c++)}h.push(b)}for(let d=0;d<i;d++)for(let b=0;b<t;b++){let x=h[d][b+1],E=h[d][b],R=h[d+1][b],T=h[d+1][b+1];(d!==0||o>0)&&m.push(x,E,T),(d!==i-1||l<Math.PI)&&m.push(E,R,T)}this.setIndex(m),this.setAttribute("position",new St(g,3)),this.setAttribute("normal",new St(_,3)),this.setAttribute("uv",new St(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Je=class extends Dn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jc,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function _r(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function kg(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Qi=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},yo=class extends Qi{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wl,endingEnd:Wl}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Xl:r=e,a=2*t-i;break;case Yl:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Xl:o=e,l=2*i-t;break;case Yl:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,m=this._weightNext,g=(i-t)/(s-t),_=g*g,p=_*g,d=-f*p+2*f*_-f*g,b=(1+f)*p+(-1.5-2*f)*_+(-.5+f)*g+1,x=(-1-m)*p+(1.5+m)*_+.5*g,E=m*p-m*_;for(let R=0;R!==a;++R)r[R]=d*o[h+R]+b*o[c+R]+x*o[l+R]+E*o[u+R];return r}},Mo=class extends Qi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},So=class extends Qi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},un=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_r(t,this.TimeBufferType),this.values=_r(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:_r(e.times,Array),values:_r(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new So(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Mo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new yo(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case vr:t=this.InterpolantFactoryMethodDiscrete;break;case yr:t=this.InterpolantFactoryMethodLinear;break;case va:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vr;case this.InterpolantFactoryMethodLinear:return yr;case this.InterpolantFactoryMethodSmooth:return va}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&kg(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===va,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*i,f=u-i,m=u+i;for(let g=0;g!==i;++g){let _=t[u+g];if(_!==t[f+g]||_!==t[m+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*i,f=o*i;for(let m=0;m!==i;++m)t[f+m]=t[u+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};un.prototype.TimeBufferType=Float32Array;un.prototype.ValueBufferType=Float32Array;un.prototype.DefaultInterpolation=yr;var gi=class extends un{};gi.prototype.ValueTypeName="bool";gi.prototype.ValueBufferType=Array;gi.prototype.DefaultInterpolation=vr;gi.prototype.InterpolantFactoryMethodLinear=void 0;gi.prototype.InterpolantFactoryMethodSmooth=void 0;var bo=class extends un{};bo.prototype.ValueTypeName="color";var Eo=class extends un{};Eo.prototype.ValueTypeName="number";var wo=class extends Qi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)jn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ts=class extends un{InterpolantFactoryMethodLinear(e){return new wo(this.times,this.values,this.getValueSize(),e)}};Ts.prototype.ValueTypeName="quaternion";Ts.prototype.DefaultInterpolation=yr;Ts.prototype.InterpolantFactoryMethodSmooth=void 0;var _i=class extends un{};_i.prototype.ValueTypeName="string";_i.prototype.ValueBufferType=Array;_i.prototype.DefaultInterpolation=vr;_i.prototype.InterpolantFactoryMethodLinear=void 0;_i.prototype.InterpolantFactoryMethodSmooth=void 0;var To=class extends un{};To.prototype.ValueTypeName="vector";var Ao=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let m=c[u],g=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},Hg=new Ao,Ro=class{constructor(e){this.manager=e!==void 0?e:Hg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ro.DEFAULT_MATERIAL_NAME="__DEFAULT";var es=class extends Ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Gr=class extends es{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Ya=new xt,zc=new P,Bc=new P,Wr=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bs,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;zc.setFromMatrixPosition(e.matrixWorld),t.position.copy(zc),Bc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bc),t.updateMatrixWorld(),Ya.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ya),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ya)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var kc=new xt,_s=new P,qa=new P,Co=class extends Wr{constructor(){super(new Rt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new De(4,2),this._viewportCount=6,this._viewports=[new ct(2,1,1,1),new ct(0,1,1,1),new ct(3,1,1,1),new ct(1,1,1,1),new ct(3,0,1,1),new ct(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),_s.setFromMatrixPosition(e.matrixWorld),i.position.copy(_s),qa.copy(i.position),qa.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(qa),i.updateMatrixWorld(),s.makeTranslation(-_s.x,-_s.y,-_s.z),kc.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kc)}},Xr=class extends es{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Co}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Po=class extends Wr{constructor(){super(new Or(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},xi=class extends es{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new Po}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Yr=class extends es{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var zo="\\[\\]\\.:\\/",Vg=new RegExp("["+zo+"]","g"),Bo="[^"+zo+"]",Gg="[^"+zo.replace("\\.","")+"]",Wg=/((?:WC+[\/:])*)/.source.replace("WC",Bo),Xg=/(WCOD+)?/.source.replace("WCOD",Gg),Yg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bo),qg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bo),Zg=new RegExp("^"+Wg+Xg+Yg+qg+"$"),$g=["material","materials","bones","map"],Lo=class{constructor(e,t,i){let s=i||lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},lt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Vg,"")}static parseTrackName(e){let t=Zg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);$g.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};lt.Composite=Lo;lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};lt.prototype.GetterByBindingType=[lt.prototype._getValue_direct,lt.prototype._getValue_array,lt.prototype._getValue_arrayElement,lt.prototype._getValue_toArray];lt.prototype.SetterByBindingTypeAndVersioning=[[lt.prototype._setValue_direct,lt.prototype._setValue_direct_setNeedsUpdate,lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_array,lt.prototype._setValue_array_setNeedsUpdate,lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_arrayElement,lt.prototype._setValue_arrayElement_setNeedsUpdate,lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_fromArray,lt.prototype._setValue_fromArray_setNeedsUpdate,lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var q0=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Io}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Io);function Rs(n){let e=n>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}function Cs(n=256){let e=document.createElement("canvas");return e.width=e.height=n,[e,e.getContext("2d")]}function Ps(n,e,t,i,s=.12){let r=n.getImageData(0,0,e,e),o=r.data;for(let a=0;a<o.length;a+=4){let l=(t()-.5)*i;o[a]=Math.max(0,Math.min(255,o[a]+l)),o[a+1]=Math.max(0,Math.min(255,o[a+1]+l)),o[a+2]=Math.max(0,Math.min(255,o[a+2]+l))}n.putImageData(r,0,0),n.globalAlpha=s;for(let a=0;a<e/2;a++)n.fillStyle=t()>.5?"#fff":"#000",n.fillRect(t()*e,t()*e,1+t()*3,1);n.globalAlpha=1}function Ls(n,e=1){let t=new cn(n);return t.wrapS=t.wrapT=ys,t.repeat.set(e,e),t.anisotropy=4,t.colorSpace=pt,t}function Jg(){let[e,t]=Cs(512),i=Rs(7);t.fillStyle="#c9ad7c",t.fillRect(0,0,512,512);for(let s=0;s<1600;s++){t.fillStyle=i()>.5?"rgba(160,130,85,0.16)":"rgba(240,220,175,0.16)";let r=2+i()*22;t.beginPath(),t.ellipse(i()*512,i()*512,r,r*(.3+i()*.5),i()*3,0,7),t.fill()}return Ps(t,512,i,26,.1),Ls(e,9)}function Kg(){let[e,t]=Cs(256),i=Rs(19);t.fillStyle="#d9c39a",t.fillRect(0,0,256,256);for(let s=0;s<90;s++)t.fillStyle=i()>.5?"rgba(150,120,80,0.09)":"rgba(255,245,220,0.12)",t.fillRect(i()*256,i()*256,8+i()*60,4+i()*30);t.strokeStyle="rgba(120,95,60,0.25)",t.lineWidth=3;for(let s=0;s<=256;s+=64)t.beginPath(),t.moveTo(0,s),t.lineTo(256,s),t.stroke();for(let s=0;s<=256;s+=128){t.beginPath(),t.moveTo(s,0),t.lineTo(s,256),t.stroke();let r=s===0?64:0;t.beginPath(),t.moveTo(s+r,0),t.lineTo(s+r,256),t.stroke()}return Ps(t,256,i,24,.08),Ls(e,1)}function jg(){let[e,t]=Cs(256),i=Rs(31);t.fillStyle="#a9906b",t.fillRect(0,0,256,256);for(let s=0;s<256;s+=32){let r=s/32%2?32:0;for(let o=-64;o<256;o+=64)t.fillStyle=`rgba(${150+i()*40},${125+i()*35},${85+i()*30},0.55)`,t.fillRect(o+r+2,s+2,60,28)}return Ps(t,256,i,30,.12),Ls(e,1)}function Qg(){let[e,t]=Cs(256),i=Rs(53);t.fillStyle="#a27642",t.fillRect(0,0,256,256);for(let s=0;s<256;s+=42){t.fillStyle="#8e6336",t.fillRect(0,s+40,256,3);for(let r=0;r<26;r++)t.strokeStyle=`rgba(70,45,20,${.05+i()*.14})`,t.lineWidth=1+i()*2,t.beginPath(),t.moveTo(0,s+i()*40),t.bezierCurveTo(256/3,s+i()*40,256*2/3,s+i()*40,256,s+i()*40),t.stroke()}return t.strokeStyle="rgba(60,40,20,0.65)",t.lineWidth=12,t.beginPath(),t.moveTo(14,14),t.lineTo(242,242),t.moveTo(242,14),t.lineTo(14,242),t.stroke(),t.strokeStyle="rgba(220,190,140,0.22)",t.lineWidth=2,t.strokeRect(10,10,236,236),Ps(t,256,i,22,.1),Ls(e,1)}function hh(n="#63727a"){let[t,i]=Cs(256),s=Rs(71);i.fillStyle=n,i.fillRect(0,0,256,256);for(let r=0;r<256;r+=16)i.fillStyle="rgba(0,0,0,0.11)",i.fillRect(r,0,2,256),i.fillStyle="rgba(255,255,255,0.06)",i.fillRect(r+3,0,2,256);for(let r=0;r<8;r++)i.fillStyle=`rgba(90,60,35,${.15+s()*.25})`,i.beginPath(),i.ellipse(s()*256,s()*256,4+s()*22,3+s()*12,s()*3,0,7),i.fill();return Ps(i,256,s,22,.08),Ls(t,1)}var Jr=null;function e0(){return Jr||(Jr={sand:Jg(),plaster:Kg(),stone:jg(),wood:Qg(),metal:hh(),rust:hh("#8a5d3c")},Jr)}function uh(){let n=e0();return{ground:new Je({map:n.sand,color:16777215,roughness:1}),wall:new Je({map:n.plaster,color:16774104,roughness:.94}),low:new Je({map:n.stone,roughness:.95}),crate:new Je({map:n.wood,roughness:.88}),barrel:new Je({map:n.metal,roughness:.55,metalness:.35})}}function t0(){let n=new hn(400,24,16),e=new ln({side:Dt,depthWrite:!1,uniforms:{},vertexShader:`
      varying vec3 vPos;
      void main() {
        vPos = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      varying vec3 vPos;
      void main() {
        float h = clamp(normalize(vPos).y * 0.5 + 0.5, 0.0, 1.0);
        vec3 horizon = vec3(0.83, 0.74, 0.58);
        vec3 mid = vec3(0.58, 0.70, 0.83);
        vec3 top = vec3(0.26, 0.45, 0.72);
        vec3 col = mix(horizon, mid, smoothstep(0.40, 0.62, h));
        col = mix(col, top, smoothstep(0.60, 1.0, h));
        gl_FragColor = vec4(col, 1.0);
      }`});return new We(n,e)}function n0(){let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d"),t=e.createRadialGradient(64,64,4,64,64,62);t.addColorStop(0,"rgba(255,250,220,1)"),t.addColorStop(.18,"rgba(255,235,170,0.95)"),t.addColorStop(.55,"rgba(255,210,120,0.25)"),t.addColorStop(1,"rgba(255,210,120,0)"),e.fillStyle=t,e.fillRect(0,0,128,128);let i=new cn(n),s=new Nn(new gn({map:i,transparent:!0,depthWrite:!1,blending:pi}));return s.scale.set(80,80,1),s.position.set(-160,150,-220),s}function dh(n,e,t,i){let s=document.createElement("canvas");s.width=s.height=256;let r=s.getContext("2d");r.clearRect(0,0,256,256),r.strokeStyle=i,r.lineWidth=10,r.setLineDash([20,12]),r.beginPath(),r.arc(128,128,105,0,Math.PI*2),r.stroke(),r.setLineDash([]),r.fillStyle=i,r.font="bold 150px sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillText(n,128,136);let o=new cn(s);o.colorSpace=pt;let a=new We(new Un(7,7),new kt({map:o,transparent:!0,depthWrite:!1,opacity:.75}));return a.rotation.x=-Math.PI/2,a.position.set(e,.035,t),a}function i0(n){let e=new Je({color:11770741,roughness:1}),t=new Je({color:10323557,roughness:1}),i=11,s=()=>(i=i*16807%2147483647,i/2147483647);for(let r=0;r<46;r++){let o=s()*Math.PI*2,a=80+s()*100,l=8+s()*18,c=8+s()*34,h=new We(new Ht(l,c,l*(.7+s()*.6)),s()>.5?e:t);h.position.set(Math.cos(o)*a,c/2-1,Math.sin(o)*a),h.castShadow=!1,h.receiveShadow=!1,n.add(h)}}function s0(n,e){let t={alpha:!1,antialias:e!=="low",powerPreference:"high-performance",preserveDrawingBuffer:!1},i=null;for(let s of["webgl2","webgl","experimental-webgl"]){try{i=n.getContext(s,t)}catch{}if(i)break}if(!i)throw new Error("Brak kontekstu WebGL w WebView (w\u0142\u0105cz akceleracj\u0119 sprz\u0119tow\u0105).");return window.__cs3GLVersion=typeof WebGL2RenderingContext!="undefined"&&i instanceof WebGL2RenderingContext?2:1,new Es({canvas:n,context:i,...t})}function fh(n,e="high"){let t=s0(n,e);t.outputColorSpace=pt,t.toneMapping=Uo,t.toneMappingExposure=1.18,t.shadowMap.enabled=e!=="low",t.shadowMap.type=Do;let i=new ji;i.fog=new Br(13351060,.0065);let s=new Rt(78,1,.05,600);s.rotation.order="YXZ",i.add(s),i.add(t0()),i.add(n0());let r=new Gr(13623551,9072712,1.35);i.add(r);let o=new xi(16773324,2.5);o.position.set(-38,62,-46),o.castShadow=e!=="low",o.shadow.mapSize.set(e==="high"?2048:1024,e==="high"?2048:1024),o.shadow.camera.left=-48,o.shadow.camera.right=48,o.shadow.camera.top=48,o.shadow.camera.bottom=-48,o.shadow.camera.near=1,o.shadow.camera.far=180,o.shadow.bias=-6e-4,i.add(o),i.add(o.target),o.target.position.set(0,0,0);let a=uh(),l=new We(new Un(400,400),a.ground);l.rotation.x=-Math.PI/2,l.position.y=-.02,l.receiveShadow=!0,i.add(l);let c=new We(new Un(Ve.size,Ve.size),new Je({color:14073228,roughness:1}));c.rotation.x=-Math.PI/2,c.position.y=.002,c.receiveShadow=!0,i.add(c);let h=new Ht(1,1,1),u=new mt;for(let E of rs){let R;if(E.mat==="barrel"?(R=new We(new On(E.w/2,E.w/2,E.h,14),a.barrel),R.position.set(E.x,E.h/2,E.z)):(R=new We(h,a[E.mat]||a.wall),R.scale.set(E.w,E.h,E.d),R.position.set(E.x,E.h/2,E.z)),R.castShadow=!0,R.receiveShadow=!0,u.add(R),E.mat==="wall"&&E.h>4){let T=new We(h,a.low);T.scale.set(E.w+.06,.45,E.d+.06),T.position.set(E.x,.22,E.z),T.receiveShadow=!0,u.add(T);let A=new We(h,a.low);A.scale.set(E.w+.12,.22,E.d+.12),A.position.set(E.x,E.h-.1,E.z),A.castShadow=!0,u.add(A)}}i.add(u),i.add(dh("A",Ve.sites.A.x,Ve.sites.A.z,"#e8c14b")),i.add(dh("B",Ve.sites.B.x,Ve.sites.B.z,"#e8c14b")),i0(i);let f=new Je({color:5984578,roughness:.8,metalness:.3});for(let[E,R]of[[-27,2],[27,2],[-27,-28],[27,-28],[0,19]]){let T=new We(new On(.12,.16,7,8),f);T.position.set(E,3.5,R),T.castShadow=!0,i.add(T);let A=new We(new Ht(.9,.18,.5),f);A.position.set(E+(E>0?-.45:.45),6.9,R),i.add(A)}let m=new mt,g=new We(new Ht(.38,.2,.28),new Je({color:4014649,roughness:.75}));m.add(g);let _=new We(new hn(.055,8,8),new kt({color:16724770}));_.position.set(.16,.1,.1),m.add(_),m.visible=!1,i.add(m);let p=e;function d(E){var A;p=E;let R=E==="high"?Math.min(window.devicePixelRatio||1,2):E==="medium"?Math.min(window.devicePixelRatio||1,1.35):1;t.setPixelRatio(R),t.shadowMap.enabled=E!=="low",o.castShadow=E!=="low";let T=E==="high"?2048:1024;o.shadow.mapSize.x!==T&&(o.shadow.mapSize.set(T,T),(A=o.shadow.map)==null||A.dispose(),o.shadow.map=null),t.shadowMap.needsUpdate=!0,b()}function b(){let E=n.clientWidth||window.innerWidth,R=n.clientHeight||window.innerHeight;t.setSize(E,R,!1),s.aspect=E/R,s.updateProjectionMatrix()}d(p);function x(E,R){_.material.color.setHex(Math.sin(R*(m.visible?8:2))>0?16724770:4460800)}return{renderer:t,scene:i,camera:s,sun:o,bomb:m,bombLed:_,setQuality:d,resize:b,update:x,mats:a}}var ph=new Je({color:13212272,roughness:.9}),r0=new Je({color:2894375,roughness:.95}),ko=new Je({color:2566956,roughness:.55,metalness:.5}),a0=new Je({color:7030054,roughness:.8});function en(n,e,t,i,s=0,r=0,o=0){let a=new We(new Ht(n,e,t),i);return a.position.set(s,r,o),a.castShadow=!0,a}function o0(n){let e=document.createElement("canvas");e.width=e.height=64;let t=e.getContext("2d");t.fillStyle=n,t.beginPath(),t.arc(32,32,18,0,Math.PI*2),t.fill(),t.strokeStyle="rgba(255,255,255,0.9)",t.lineWidth=3,t.stroke();let i=new cn(e),s=new Nn(new gn({map:i,depthTest:!1,transparent:!0}));return s.scale.set(.55,.55,1),s.position.y=2.35,s.renderOrder=20,s}function Kr(n,e=!1){let t=new mt,i=el[n],s=new Je({color:i,roughness:.92}),r=new Je({color:n==="CT"?3099752:7033907,roughness:.9}),o=new mt;t.add(o),o.add(en(.62,.72,.34,s,0,1.22,0)),o.add(en(.66,.48,.4,r,0,1.28,-.02)),o.add(en(.3,.3,.3,ph,0,1.78,0));let a=new We(new hn(.235,12,8,0,Math.PI*2,0,Math.PI*.62),r);a.position.y=1.87,a.castShadow=!0,o.add(a),o.add(en(.5,.3,.22,r,0,1.18,.25));let l={};for(let u of[-1,1]){let f=new mt;f.position.set(u*.42,1.5,0),f.add(en(.19,.5,.19,s,0,-.25,0)),f.add(en(.17,.18,.17,ph,0,-.55,0)),o.add(f),l[u<0?"armL":"armR"]=f;let m=new mt;m.position.set(u*.18,.93,0),m.add(en(.23,.55,.24,s,0,-.28,0)),m.add(en(.25,.16,.32,r0,0,-.62,-.04)),o.add(m),l[u<0?"legL":"legR"]=m}let c=new mt;c.add(en(.09,.1,.7,ko,0,0,-.2)),c.add(en(.07,.2,.1,ko,0,-.14,.02)),c.add(en(.08,.08,.25,a0,0,-.02,.2)),c.add(en(.04,.04,.35,ko,0,.08,-.3)),c.position.set(.16,1.22,-.34),c.rotation.y=-.1,o.add(c);let h=null;return e&&(h=o0(n==="CT"?"#6fc3ff":"#ffc861"),t.add(h)),t.userData={body:o,limbs:l,rifle:c,marker:h,walkPhase:Math.random()*6},t}function mh(n,e,t,i){let s=n.userData;if(n.position.set(e.x,e.y,e.z),n.rotation.y=e.yaw,!e.alive){s.body.rotation.x=Math.min(Math.PI/2,(s.body.rotation.x||0)+t*4),s.body.position.y=-.25,s.marker&&(s.marker.visible=!1);return}s.body.rotation.x=0,s.body.position.y=0,s.marker&&(s.marker.visible=!0);let r=Math.hypot(e.vx,e.vz);s.walkPhase+=t*(4+r*1.7);let o=Math.min(.65,r/6),a=Math.sin(s.walkPhase)*o;s.limbs.legL.rotation.x=a,s.limbs.legR.rotation.x=-a,s.limbs.armL.rotation.x=-a*.4,s.limbs.armR.rotation.x=a*.25,s.body.position.y=Math.abs(Math.sin(s.walkPhase))*.045*o;let l=e.crouch?.72:1;s.body.scale.y+=(l-s.body.scale.y)*Math.min(1,t*12),s.rifle.rotation.x=e.pitch*.5}var Fn=new Je({color:2369578,roughness:.5,metalness:.55}),dn=new Je({color:1316632,roughness:.75}),xh=new Je({color:8016431,roughness:.85}),vh=new Je({color:10192224,roughness:.8}),gh=new Je({color:4932663,roughness:.95}),l0=new Je({color:1911603,roughness:.15,metalness:.7});function yt(n,e,t,i,s,r,o,a){let l=new We(new Ht(n,e,t),i);return l.position.set(s,r,o),a.add(l),l}function vi(n,e,t,i,s,r,o,a=[Math.PI/2,0,0]){let l=new We(new On(n,n,e,10),t);return l.position.set(i,s,r),l.rotation.set(...a),o.add(l),l}function Is(n,e){for(let[t,i,s]of e)yt(.12,.14,.22,gh,t,i,s,n),yt(.09,.19,.09,gh,t,i-.12,s+.05,n)}function _h(n=!1){let e=new mt,t=n?vh:xh;return yt(.085,.11,.62,Fn,0,0,-.12,e),yt(.11,.1,.28,t,0,-.005,.28,e),yt(.07,.22,.12,dn,0,-.16,.02,e),yt(.09,.09,.22,t,0,-.02,.5,e),vi(.022,.42,Fn,0,.012,-.5,e),vi(.033,.1,dn,0,.012,-.7,e),yt(.05,.05,.05,dn,0,.1,-.3,e),yt(.03,.02,.02,dn,0,.13,-.3,e),yt(.06,.04,.12,t,0,-.09,-.3,e),Is(e,[[.02,-.16,.02],[-.02,-.12,-.38]]),e.userData.muzzle=new P(0,.012,-.76),e}function c0(){let n=new mt;return yt(.08,.1,.3,Fn,0,0,-.08,n),yt(.075,.22,.1,dn,0,-.16,.05,n),vi(.02,.16,Fn,0,.01,-.3,n),yt(.05,.03,.03,dn,0,.08,-.2,n),yt(.08,.02,.03,dn,0,.065,.03,n),Is(n,[[.01,-.17,.08]]),n.userData.muzzle=new P(0,.01,-.4),n}function h0(){let n=new mt;return yt(.09,.11,.72,dn,0,0,-.08,n),yt(.11,.09,.3,xh,0,-.01,.4,n),vi(.025,.6,Fn,0,.015,-.66,n),vi(.055,.3,l0,0,.16,-.1,n,[Math.PI/2,0,0]),vi(.062,.04,Fn,0,.16,.06,n,[Math.PI/2,0,0]),vi(.062,.04,Fn,0,.16,-.26,n,[Math.PI/2,0,0]),yt(.05,.06,.05,dn,0,.1,-.44,n),Is(n,[[.02,-.14,.1],[-.02,-.14,-.45]]),n.userData.muzzle=new P(0,.015,-.98),n}function u0(){let n=new mt;yt(.05,.05,.2,dn,0,0,.05,n);let e=new We(new Ht(.07,.02,.32),Fn);return e.position.set(0,0,-.2),e.rotation.y=.12,n.add(e),Is(n,[[0,-.06,.08]]),n.userData.muzzle=new P(0,0,-.38),n}function d0(){let n=new mt;return yt(.32,.18,.24,vh,0,0,0,n),yt(.2,.05,.04,dn,0,.1,.02,n),yt(.06,.06,.02,Fn,.1,.11,-.06,n),Is(n,[[-.14,-.12,.12],[.14,-.12,.12]]),n.userData.muzzle=new P(0,0,-.2),n}function yh(){let n=new ji,e=new Rt(60,1,.01,20);e.position.set(0,0,0),n.add(new Yr(16777215,1.5));let t=new xi(16773336,2.4);t.position.set(-1,2,1),n.add(t);let i=new xi(10470655,1.1);i.position.set(2,.5,-1),n.add(i);let s=new mt;n.add(s);let r={rifle:_h(!1),m4:_h(!0),pistol:c0(),sniper:h0(),knife:u0(),c4:d0()};for(let b of Object.values(r))b.visible=!1,s.add(b);let o=new We(new Un(.26,.26),new kt({color:16767114,transparent:!0,opacity:0,depthTest:!1}));o.renderOrder=100,s.add(o);let a="rifle",l=0,c=0,h=0,u=0,f=new P(.26,-.24,-.5),m=new P(0,-.115,-.36);function g(b){r[b]||(b="pistol"),r[a].visible=!1,a=b,r[a].visible=!0,l=0}function _(){l=1,c=.055,o.rotation.z=Math.random()*6;let b=r[a].userData.muzzle||new P;o.position.copy(b),o.position.z-=.05}function p(b,x,E,R,T={}){let A=r[a];if(!A)return;let k=Math.hypot(b.vx,b.vz);h+=E*(5+k*1.6),l=Math.max(0,l-E*7),c=Math.max(0,c-E),o.material.opacity=c>0?Math.min(1,c*18):0,b.reloading>0?u=Math.min(1,u+E*4):u=Math.max(0,u-E*5);let y=b.ads&&a!=="c4"&&a!=="knife",w=1-Math.exp(-E*(y?16:11)),z=y?m:f,G=Math.sin(R*1.3)*.006+x.swayX*.015,ee=Math.cos(R*1.7)*.005+x.swayY*.012;s.position.x+=(z.x+G-s.position.x)*w,s.position.y+=(z.y+ee-s.position.y)*w,s.position.z+=(z.z+l*.09-s.position.z)*w,s.rotation.x=-l*.16+(y?0:Math.sin(h)*.012*k),s.rotation.y=u*.75+(y?0:Math.cos(h*.5)*.01*k),s.rotation.z=u*.45+(y?0:Math.sin(h)*.008*k),A.position.y=-u*.14,e.fov=y&&a==="sniper"?22:y?58:72,e.updateProjectionMatrix()}function d(b){e.aspect=b,e.updateProjectionMatrix()}return g("rifle"),{scene:n,camera:e,models:r,setWeapon:g,fire:_,update:p,resize:d}}var f0=new kt({color:16765066}),p0=new kt({color:10361884}),m0=new Je({color:13215308,metalness:.8,roughness:.3});function Mh(n){let e=document.createElement("canvas");e.width=e.height=64;let t=e.getContext("2d"),i=t.createRadialGradient(32,32,2,32,32,31);return i.addColorStop(0,n),i.addColorStop(.5,n.replace("1)","0.55)")),i.addColorStop(1,n.replace("1)","0)")),t.fillStyle=i,t.fillRect(0,0,64,64),new cn(e)}var jr=class{constructor(e){this.scene=e,this.items=[],this.decals=[],this.sparkTex=Mh("rgba(255,220,140,1)"),this.bloodTex=Mh("rgba(180,25,25,1)")}add(e,t,i){if(this.scene.add(e),this.items.push({obj:e,life:t,max:t,update:i}),this.items.length>260){let s=this.items.shift();this.scene.remove(s.obj)}}tracer(e,t,i=16769696){let s=new Wt().setFromPoints([new P(e.x,e.y,e.z),new P(t.x,t.y,t.z)]),r=new ws({color:i,transparent:!0,opacity:.85}),o=new Hr(s,r);this.add(o,.09,(a,l)=>{r.opacity=l*.85})}muzzle(e){let t=new Nn(new gn({map:this.sparkTex,transparent:!0,blending:pi,depthWrite:!1}));t.position.set(e.x,e.y,e.z),t.scale.set(.55,.55,1),this.add(t,.075,(i,s)=>{t.scale.setScalar(.3+s*.6)})}impact(e,t=!1){let i=t?this.bloodTex:this.sparkTex,s=new Nn(new gn({map:i,transparent:!0,depthWrite:!1,blending:t?Yn:pi}));s.position.set(e.x,e.y,e.z),s.scale.set(.3,.3,1),this.add(s,.22,(r,o)=>{s.scale.setScalar(.1+(1-o)*.55)});for(let r=0;r<(t?6:4);r++){let o=new We(new hn(.025,4,4),t?p0:f0);o.position.set(e.x,e.y,e.z);let a=new P((Math.random()-.5)*2.4,Math.random()*2,(Math.random()-.5)*2.4);this.add(o,.45,(l,c)=>{o.position.addScaledVector(a,c),a.y-=8*c})}if(!t&&this.decals.length<70){let r=new We(new Vr(.055+Math.random()*.03,6),new kt({color:2827292,transparent:!0,opacity:.65}));r.position.set(e.x,e.y,e.z),r.position.y=Math.max(.04,r.position.y),r.rotation.x=-Math.PI/2,this.scene.add(r),this.decals.push(r)}}shell(e,t){let i=new We(new On(.018,.018,.06,6),m0);i.position.set(e.x,e.y,e.z);let s=new P(-t.x*1.4+Math.random(),1.8+Math.random(),-t.z*1.4+Math.random());this.add(i,1.2,(r,o)=>{i.position.addScaledVector(s,o),s.y-=9*o,i.rotation.x+=o*9,i.rotation.z+=o*5})}explosion(e){let t=new Xr(16756821,25,30);t.position.set(e.x,1.5,e.z),this.add(t,.5,(s,r)=>{t.intensity=r*25});let i=new We(new hn(1,16,12),new kt({color:16764006,transparent:!0,opacity:.9}));i.position.set(e.x,1,e.z),this.add(i,.5,(s,r)=>{i.scale.setScalar(1+(1-r)*8),i.material.opacity=r*.8});for(let s=0;s<34;s++){let r=new We(new hn(.08+Math.random()*.12,5,4),new kt({color:s%3?5919045:16751155,transparent:!0}));r.position.set(e.x,.6,e.z);let o=new P((Math.random()-.5)*14,3+Math.random()*9,(Math.random()-.5)*14);this.add(r,1.2+Math.random(),(a,l,c)=>{r.position.addScaledVector(o,l),o.y-=9*l,r.material.opacity=c})}}update(e){var t,i,s,r,o;for(let a=this.items.length-1;a>=0;a--){let l=this.items[a];l.life-=e;let c=Math.max(0,l.life/l.max);(t=l.update)==null||t.call(l,l,e,c),l.life<=0&&(this.scene.remove(l.obj),(s=(i=l.obj.geometry)==null?void 0:i.dispose)==null||s.call(i),(o=(r=l.obj.material)==null?void 0:r.dispose)==null||o.call(r),this.items.splice(a,1))}}};var me=n=>document.getElementById(n),Qr=class{constructor(e,t={}){this.settings=e,this.cb=t,this.bannerT=0,this.toastT=0,this.damageAlpha=0,this.flashAlpha=0,this.hitT=0,this.bindMenu(),this.bindBuy()}bindMenu(){let e=(o,a,l=c=>c)=>{let c=me(o);c==null||c.addEventListener("click",h=>{var f,m;let u=h.target.closest("button");u&&([...c.querySelectorAll("button")].forEach(g=>g.classList.remove("active")),u.classList.add("active"),this.settings[a]=l(u.dataset[a==="team"?"team":a==="difficulty"?"diff":"control"]),(m=(f=this.cb).onSettings)==null||m.call(f,this.settings))})};e("team-select","team"),e("diff-select","difficulty",Number),e("control-select","controlMode");let t=me("opt-sens"),i=me("opt-vol"),s=me("opt-quality"),r=me("opt-invert");t.value=this.settings.sensitivity,i.value=this.settings.volume,s.value=this.settings.quality,r.checked=this.settings.invertY,me("out-sens").textContent=Number(t.value).toFixed(2),me("out-vol").textContent=Number(i.value).toFixed(2),t.addEventListener("input",()=>{var o,a;this.settings.sensitivity=Number(t.value),me("out-sens").textContent=t.value,(a=(o=this.cb).onSettings)==null||a.call(o,this.settings)}),i.addEventListener("input",()=>{var o,a;this.settings.volume=Number(i.value),me("out-vol").textContent=i.value,(a=(o=this.cb).onSettings)==null||a.call(o,this.settings)}),s.addEventListener("change",()=>{var o,a;this.settings.quality=s.value,(a=(o=this.cb).onSettings)==null||a.call(o,this.settings)}),r.addEventListener("change",()=>{var o,a;this.settings.invertY=r.checked,(a=(o=this.cb).onSettings)==null||a.call(o,this.settings)}),me("start-btn").addEventListener("click",()=>{var o,a;return(a=(o=this.cb).onStart)==null?void 0:a.call(o)}),me("resume-btn").addEventListener("click",()=>{var o,a;return(a=(o=this.cb).onResume)==null?void 0:a.call(o)}),me("restart-btn").addEventListener("click",()=>{var o,a;return(a=(o=this.cb).onRestart)==null?void 0:a.call(o)}),me("menu-btn").addEventListener("click",()=>{var o,a;return(a=(o=this.cb).onMenu)==null?void 0:a.call(o)}),me("again-btn").addEventListener("click",()=>{var o,a;return(a=(o=this.cb).onRestart)==null?void 0:a.call(o)}),me("over-menu-btn").addEventListener("click",()=>{var o,a;return(a=(o=this.cb).onMenu)==null?void 0:a.call(o)}),me("fullscreen-btn").addEventListener("click",()=>{var a,l;let o=document.documentElement;document.fullscreenElement?(l=document.exitFullscreen)==null||l.call(document):(a=o.requestFullscreen)==null||a.call(o)})}bindBuy(){let e=me("buy-grid");e.innerHTML=Fs.map(t=>`
      <button class="buy-item" data-item="${t.id}">
        <span><b>${t.label}</b><small>${t.desc}</small></span>
        <span class="price">$${t.price}</span>
      </button>`).join(""),e.addEventListener("click",t=>{var s,r;let i=t.target.closest("[data-item]");i&&((r=(s=this.cb).onBuy)==null||r.call(s,i.dataset.item))}),me("buy-close").addEventListener("click",()=>{var t,i;return(i=(t=this.cb).onBuyClose)==null?void 0:i.call(t)})}screen(e){for(let i of["menu","pause","buy","matchover"])me(i).classList.toggle("hidden",i!==e);me("hud").classList.toggle("hidden",e==="menu");let t=this.settings.controlMode==="touch"||this.settings.controlMode==="auto"&&this.settings.touchDetected;me("touch-controls").classList.toggle("hidden",!t||e==="menu")}setTeam(e){[...me("team-select").querySelectorAll("button")].forEach(t=>t.classList.toggle("active",t.dataset.team===e))}banner(e,t=2.5){me("banner").textContent=e,me("banner").classList.remove("hidden"),this.bannerT=t}toast(e,t=1.8){me("toast").textContent=e,me("toast").classList.remove("hidden"),this.toastT=t}hit(){this.hitT=.16,me("hitmarker").classList.add("show")}damage(e){this.damageAlpha=Math.min(1,this.damageAlpha+e/80)}flash(e){this.flashAlpha=Math.max(this.flashAlpha,e)}kill(e,t,i){let s=document.createElement("div");s.className="kill";let r=(e==null?void 0:e.team)==="CT"?"kct":"kt",o=t.team==="CT"?"kct":"kt";s.innerHTML=`<span class="${r}">${(e==null?void 0:e.name)||"\u2014"}</span> <span class="kw">[${i}]</span> <span class="${o}">${t.name}</span>`;let a=me("killfeed");for(a.prepend(s);a.children.length>5;)a.lastChild.remove();setTimeout(()=>s.remove(),6e3)}showBuy(e,t){me("buy-money").textContent=`$${t.money}`,me("buy").classList.remove("hidden")}buyResult(e){var t,i;me("buy-msg").textContent=e.msg,me("buy-money").textContent=`$${(i=(t=this.cb.getPlayer())==null?void 0:t.money)!=null?i:0}`}showScoreboard(e,t){let i=me("scoreboard-body");i.innerHTML=["CT","T"].map(s=>`
      <tr><td colspan="4" style="color:var(--${s==="T"?"t":"ct"})">${s==="T"?"TERRORY\u015ACI":"ANTYTERRORY\u015ACI"}</td></tr>
      ${e.actors.filter(r=>r.team===s).map(r=>`
        <tr class="row${s} ${r===t?"me":""}">
          <td>${r.name}${r.hasBomb?" \u{1F4A3}":""}${r===t?" (TY)":""}</td>
          <td>${r.kills}</td><td>${r.deaths}</td><td>$${r.money}</td>
        </tr>`).join("")}`).join(""),me("scoreboard").classList.remove("hidden")}hideScoreboard(){me("scoreboard").classList.add("hidden")}update(e,t,i){var r;me("scoreT").textContent=t.score.T,me("scoreCT").textContent=t.score.CT,me("timer").textContent=t.timeText,me("timer").style.color=t.bombPlanted?"#ff7050":t.phaseTime<20?"#ffbd5c":"#eef2f4";let s=t.phase==="freeze"?"PRZYGOTOWANIE":t.phase==="live"?t.bombPlanted?"BOMBA AKTYWNA":"WALKA":t.phase==="roundend"?"KONIEC RUNDY":"";if(me("roundInfo").textContent=`RUNDA ${t.round} \xB7 ${s}`,i){me("hp").textContent=Math.ceil(i.hp),me("armor").textContent=Math.ceil(i.armor),me("ammo").textContent=i.weapon==="knife"||i.weapon==="c4"?"\u2014":i.ammo,me("reserve").textContent=i.weapon==="knife"||i.weapon==="c4"?"":`/ ${i.reserve}`,me("weapon-name").textContent=((r=Mt[i.weapon])==null?void 0:r.name)||"";let o=Math.hypot(i.vx,i.vz),a=4+Math.min(13,o*1.5+i.recoilShots*.8)+(i.ads?-3:0);for(let[c,h]of[["ch-top",a],["ch-bottom",a],["ch-left",a],["ch-right",a]]){let u=document.querySelector("."+c);c.startsWith("ch-t")?u.style.top=`${20-h}px`:c.startsWith("ch-b")?u.style.bottom=`${20-h}px`:c.startsWith("ch-l")?u.style.left=`${20-h}px`:u.style.right=`${20-h}px`}let l=Math.max(i.plantProgress/Pe.PLANT_TIME,i.defuseProgress/Pe.DEFUSE_TIME);me("progress").classList.toggle("hidden",l<=.001),me("progress-bar").style.width=`${Math.min(100,l*100)}%`,me("progress-label").textContent=i.plantProgress>0?"ZAK\u0141ADANIE BOMBY":"ROZBRAJANIE BOMBY"}me("bomb-warning").classList.toggle("hidden",!t.bombPlanted),this.damageAlpha=Math.max(0,this.damageAlpha-e*1.8),this.flashAlpha=Math.max(0,this.flashAlpha-e*1.6),me("damage-flash").style.opacity=this.damageAlpha,me("flashbang").style.opacity=this.flashAlpha,this.bannerT>0&&(this.bannerT-=e,this.bannerT<=0&&me("banner").classList.add("hidden")),this.toastT>0&&(this.toastT-=e,this.toastT<=0&&me("toast").classList.add("hidden")),this.hitT>0&&(this.hitT-=e,this.hitT<=0&&me("hitmarker").classList.remove("show")),this.drawMinimap(t,i)}drawMinimap(e,t){let i=me("minimap");if(!i||!t)return;let s=i.getContext("2d"),r=i.width/Ve.size,o=c=>(c+Ve.half)*r,a=c=>(c+Ve.half)*r;s.clearRect(0,0,i.width,i.height),s.fillStyle="rgba(30,28,22,.5)",s.fillRect(0,0,i.width,i.height);for(let c of rs)c.mat==="crate"||c.mat==="barrel"||(s.fillStyle=c.h>4?"rgba(160,143,108,.55)":"rgba(120,105,80,.7)",s.fillRect(o(c.x-c.w/2),a(c.z-c.d/2),c.w*r,c.d*r));s.strokeStyle="rgba(232,193,75,.9)",s.lineWidth=2;for(let c of["A","B"]){let h=Ve.sites[c];s.strokeRect(o(h.x-h.w/2),a(h.z-h.d/2),h.w*r,h.d*r),s.fillStyle="#e8c14b",s.font="bold 13px sans-serif",s.fillText(c,o(h.x)-4,a(h.z)+4)}e.bombPlanted&&(s.fillStyle="#ff5b3d",s.beginPath(),s.arc(o(e.bomb.x),a(e.bomb.z),5,0,7),s.fill());for(let c of e.actors)!c.alive||c===t||c.team!==t.team&&Math.hypot(c.x-t.x,c.z-t.z)>16||(s.fillStyle=c.team==="CT"?"#6bb6ef":"#e0a64a",s.beginPath(),s.arc(o(c.x),a(c.z),3,0,7),s.fill());let l=t.yaw;s.save(),s.translate(o(t.x),a(t.z)),s.rotate(-l),s.fillStyle="#7dffa8",s.beginPath(),s.moveTo(0,-7),s.lineTo(5,6),s.lineTo(0,3),s.lineTo(-5,6),s.closePath(),s.fill(),s.restore()}};var Sh={team:"CT",difficulty:1,controlMode:"auto",sensitivity:1,volume:.7,quality:"high",invertY:!1,touchDetected:!1};function g0(){try{return{...Sh,...JSON.parse(localStorage.getItem("cs3-settings")||"{}")}}catch{return{...Sh}}}function Ah(n){try{localStorage.setItem("cs3-settings",JSON.stringify(n))}catch{}}var et=g0();(navigator.maxTouchPoints>0||matchMedia("(pointer: coarse)").matches)&&(et.touchDetected=!0,et.controlMode==="auto"&&(et.controlMode="touch"));var _n=document.getElementById("game"),qe,Th;try{qe=fh(_n,et.quality)}catch(n){throw(Th=window.__cs3Fatal)==null||Th.call(window,"Nie mo\u017Cna uruchomi\u0107 grafiki 3D: "+(n.message||n)),n}var yi=yh(),Qn=new jr(qe.scene),$e=new Gs(_n,et),gt=new Ws(et.volume),at=new Qr(et,{onStart:()=>Wo(),onResume:()=>qo(!1),onRestart:()=>Wo(),onMenu:()=>M0(),onSettings:()=>{Ah(et),qe.setQuality(et.quality),qe.resize(),gt.setVolume(et.volume)},onBuy:n=>{let e=nt.buy(x0(),n);at.buyResult(e),gt.ui()},onBuyClose:()=>{document.getElementById("buy").classList.add("hidden")},getPlayer:()=>ae}),bh=["Wilk","Szpak","Rys","Orze\u0142","Borsuk","Jastrz\u0105b","Lis","Komar"],ae=ua({name:"TY",team:et.team,bot:!1});ae.radius=Pe.PLAYER_RADIUS;ae.nades=1;var xn=[ae],is=new Map;is.set(ae.id,Kr(ae.team,!1));qe.scene.add(is.get(ae.id));var _0=et.team==="CT"?"T":"CT";for(let n=0;n<7;n++){let e=n<3?et.team:_0,t=ua({name:bh[n%bh.length],team:e,bot:!0,difficulty:et.difficulty*(.9+Math.random()*.2)});xn.push(t);let i=Kr(e,e===et.team);is.set(t.id,i),qe.scene.add(i)}var nt=new Vs(xn,v0),ei="menu",Mi=!1,fn=0,Eh=performance.now(),wh=0,Us=[],ns=null,Ho=0,Go=null;function x0(){return ae}function v0(n,e){if(n==="roundstart")ae.nades=1,ns=null,Us=[],at.banner(`RUNDA ${e.round} \xB7 PRZYGOTOWANIE`,2),at.hideScoreboard(),document.getElementById("buy").classList.add("hidden"),Go=null;else if(n==="roundlive")at.banner("IDZIE!, IDZIE!",1.6),gt.ui();else if(n==="roundend"){let t=e.winner===et.team;at.banner(`${e.winner==="CT"?"CT":"T"} WYGRYWAJ\u0104 \xB7 ${e.reason}`,Pe.ROUND_END_TIME),gt.tone(t?880:220,.6,.3,t?"sine":"sawtooth")}else if(n==="plant")at.banner(`BOMBA ZA\u0141O\u017BONA \xB7 STREFA ${e.site}`,2.4),at.toast("Rozbr\xF3j bomb\u0119 lub zniszcz przeciwnik\xF3w"),gt.plant();else if(n==="defuse")gt.defuse();else if(n==="beep")gt.beep(e.time<10);else if(n==="explode"){gt.explode(),Qn.explosion(e.bomb||{x:0,z:0});for(let t of xn){if(!t.alive)continue;let i=Vt(t.x,t.z,e.bomb.x,e.bomb.z);i<14&&cs(t,Math.round(140*(1-i/14)),"body",null)}qe.bomb.visible=!1}else if(n==="matchover"){ei="matchover",$e.releasePointerLock();let t=e.winner===et.team,i=document.getElementById("matchover-title");i.textContent=t?"ZWYCI\u0118STWO!":"PORa\u017CKA",i.className=t?"win":"lose",document.getElementById("matchover-score").textContent=`${nt.score.T} : ${nt.score.CT}`,at.screen("matchover")}}function Wo(){gt.init(),et.team=y0(),ae.team=et.team;let n=et.team==="CT"?"T":"CT";xn.forEach((e,t)=>{e.team=t<4?et.team:n,e.difficulty=et.difficulty*(.9+Math.random()*.2);let i=is.get(e.id);i&&qe.scene.remove(i);let s=Kr(e.team,e.bot&&e.team===et.team);is.set(e.id,s),qe.scene.add(s)}),ae.name="TY",nt.playerSite="A",Ah(et),nt.startMatch(),ei="playing",Mi=!1,at.screen(null),at.setTeam(et.team),$e.releasePointerLock()}function y0(){var n;return((n=document.querySelector("#team-select button.active"))==null?void 0:n.dataset.team)||et.team}function M0(){ei="menu",Mi=!1,nt.phase="menu",at.screen("menu"),at.hideScoreboard(),$e.releasePointerLock()}function qo(n){ei==="playing"&&(Mi=n,at.screen(n?"pause":null),n&&($e.releasePointerLock(),document.getElementById("pause-info").textContent=`Runda ${nt.round} \xB7 T ${nt.score.T} : ${nt.score.CT} CT`))}function Ds(n){ae.hasBomb&&n!=="c4"&&(ae.hasBomb=!1,nt.giveBombToSomeone("T")),yn(ae,n)&&(yi.setWeapon(n),gt.ui(),at.toast(Mt[n].name,1))}function Vo(n=1){let e=ae.team==="T"?["knife","pistol","rifle","sniper"]:["knife","pistol","m4","sniper"],t=e.indexOf(ae.weapon);t=(t+n+e.length)%e.length,Ds(e[t])}function Xo(n){let{origin:e,dir:t,hit:i,weapon:s,damage:r,shooter:o}=n,a={x:e.x+t.x*i.t,y:e.y+t.y*i.t,z:e.z+t.z*i.t};Qn.tracer({x:e.x+t.x*.5,y:e.y-.12,z:e.z+t.z*.5},a,o===ae?16770720:16756848),Qn.impact(a,!!i.actor),Qn.shell(e,t),Qn.muzzle({x:e.x+t.x*.6,y:e.y-.1,z:e.z+t.z*.6});let l=o===ae?0:Vt(o.x,o.z,ae.x,ae.z);gt.shot(s.id,l),o===ae&&r>0&&(at.hit(),gt.hit()),r>0&&o!==ae&&i.actor===ae&&(at.damage(r),gt.hurt()),r>0&&i.actor&&!i.actor.alive&&(at.kill(o,i.actor,s.name),i.actor===ae&&gt.death())}function S0(){if(ae.nades<=0){at.toast("Brak granat\xF3w",1);return}ae.nades--;let n={x:-Math.sin(ae.yaw),z:-Math.cos(ae.yaw)};Us.push({x:ae.x+n.x*.5,z:ae.z+n.z*.5,y:ae.y+1.5,vx:n.x*17,vz:n.z*17,vy:6.5,t:1.5,owner:ae}),at.toast("Granat odrzuci\u0142!",1),gt.ui()}function b0(n){for(let e=Us.length-1;e>=0;e--){let t=Us[e];if(t.x+=t.vx*n,t.z+=t.vz*n,t.vy-=Pe.GRAVITY*n,t.y+=t.vy*n,t.y<.12&&(t.y=.12,t.vy*=-.35,t.vx*=.5,t.vz*=.5),t.t-=n,t.t<=0){Us.splice(e,1),Qn.explosion({x:t.x,z:t.z}),gt.explode();for(let i of xn){if(!i.alive)continue;let s=Vt(i.x,i.z,t.x,t.z);if(s<9){let r=Math.round(95*(1-s/9));cs(i,r,"body",t.owner),i===ae&&at.damage(r),s<6&&Bs({x:t.x,y:1,z:t.z},{x:i.x,y:i.y+1.5,z:i.z},Ve.walls,6)&&(i.flashT=2,i===ae&&gt.tone(2200,1.2,.4,"sine",400))}}}}}function E0(){if($e.consumePause()&&qo(!Mi),!Mi){if($e.consumeAction("mute")&&(gt.muted=!gt.muted,at.toast(gt.muted?"D\u017Awi\u0119k wy\u0142\u0105czony":"D\u017Awi\u0119k w\u0142\u0105czony")),$e.consumeAction("buy")){let n=document.getElementById("buy");n.classList.contains("hidden")?(at.showBuy(nt,ae),$e.releasePointerLock()):n.classList.add("hidden")}$e.consumeAction("reload")&&nt.phase!=="freeze"&&ls(ae,fn)&&gt.reload(),$e.consumeAction("weapon1")&&Ds("pistol"),$e.consumeAction("weapon2")&&Ds(ae.team==="T"?"rifle":"m4"),$e.consumeAction("weapon3")&&Ds("sniper"),$e.consumeAction("weapon4")&&Ds("knife"),$e.consumeAction("cycle")&&Vo(1),$e.consumeAction("weaponNext")&&Vo(1),$e.consumeAction("weaponPrev")&&Vo(-1),$e.consumeAction("grenade")&&nt.phase==="live"&&S0(),$e.consumeAction("help")&&at.toast("WASD \xB7 LPM strza\u0142 \xB7 PPM cel \xB7 R reload \xB7 E u\u017Cyj \xB7 B sklep \xB7 Tab wyniki",4)}}function w0(n){let e=$e.consumeLook();ae.yaw-=e.dx,ae.pitch=tn(ae.pitch-e.dy,-1.45,1.45),ae.ads=$e.mouse.right&&!ae.hasBomb;let t=nt.phase==="freeze",i=$e.moveInput();t&&(i.forward=i.strafe=0,i.jump=!1),ks(ae,i,n),Math.hypot(ae.vx,ae.vz)>.8&&ae.grounded&&gt.footstep(fn,!ae.walking),!($e.down("KeyE")||$e.down("KeyF")||$e.virtualKeys.has("KeyF")||$e.mouse.middle)||t?nt.cancelInteract(ae):ae.hasBomb?nt.tryPlant(ae,n):nt.bombPlanted&&ae.team==="CT"&&nt.tryDefuse(ae,n),nt.phase==="live"&&$e.mouse.left&&!ae.hasBomb&&(Mt[ae.weapon].melee?ol(ae,fn,{...Yo,onShot:Xo}):Hs(ae,fn,Yo)),ae.alive||(!ns||!ns.alive)&&(ns=xn.find(o=>o.alive&&o.team===ae.team)||null)}var Yo={get actors(){return xn},get walls(){return Ve.walls},get weapons(){return Mt},get now(){return fn},get match(){return nt},onShot:Xo,onBotShot:Xo};function T0(n){var r;let e=ae.alive?ae:ns;if(!e){Rh(n);return}let t=Math.hypot(e.vx,e.vz);wh+=n*(5+t*1.4);let i=e.grounded&&t>.6?Math.sin(wh)*.035:0,s=e.grounded?tn(e.vx*.002+e.vz*4e-4,-.035,.035):0;qe.camera.position.set(e.x,e.y+e.eye+i,e.z),qe.camera.rotation.set(e.pitch+e.viewKick,e.yaw+e.viewKickYaw,e===ae&&!ae.alive?0:s,"YXZ"),qe.camera.fov=e.ads&&((r=Mt[e.weapon])!=null&&r.scoped)?22:78,qe.camera.updateProjectionMatrix()}function Rh(n){Ho+=n*.08;let e=38;qe.camera.position.set(Math.sin(Ho)*e,17,Math.cos(Ho)*e),qe.camera.lookAt(0,2,-4),qe.camera.fov=68,qe.camera.updateProjectionMatrix()}function Ch(n){requestAnimationFrame(Ch);let e=Math.min(.05,Math.max(.001,(n-Eh)/1e3));if(Eh=n,fn=n/1e3,ei==="playing"&&!Mi){if(E0(),$e.consumeAction("buy"),document.getElementById("scoreboard").classList.toggle("hidden",!$e.down("Tab")),document.getElementById("buy").classList.contains("hidden")){w0(e);for(let s of xn)s.bot&&ul(s,Yo,e);b0(e),nt.update(e,fn);for(let s of xn){let r=is.get(s.id);r&&mh(r,s,e,fn)}Qn.update(e)}T0(e),qe.bomb.visible=nt.bombPlanted,nt.bombPlanted&&qe.bomb.position.set(nt.bomb.x,.12,nt.bomb.z),qe.update(e,fn);let t=ae.alive?ae:ns,i={swayX:$e.touchMove.x||0,swayY:$e.touchMove.y||0};Go!==ae.weapon&&(yi.setWeapon(ae.weapon),Go=ae.weapon),yi.update(ae,i,e,fn,{}),at.update(e,nt,ae),qe.renderer.autoClear=!1,qe.renderer.clear(),qe.renderer.render(qe.scene,qe.camera),qe.renderer.clearDepth(),qe.renderer.render(yi.scene,yi.camera)}else ei==="menu"&&Rh(e),Qn.update(e),qe.update(e,fn),qe.renderer.autoClear=!0,qe.renderer.render(qe.scene,qe.camera)}window.addEventListener("resize",()=>{qe.resize(),yi.resize(_n.clientWidth/Math.max(1,_n.clientHeight))});document.addEventListener("visibilitychange",()=>{document.hidden&&ei==="playing"&&qo(!0)});_n.addEventListener("click",()=>{var n;ei==="playing"&&!Mi&&et.controlMode!=="touch"&&!$e.nativeMouseSeen&&((n=_n.requestPointerLock)==null||n.call(_n))});qe.resize();yi.resize(_n.clientWidth/Math.max(1,_n.clientHeight));at.screen("menu");requestAnimationFrame(Ch);window.__CS3={match:nt,actors:xn,player:ae,world:qe,settings:et,input:$e,hud:at,startMatch:Wo};window.__CS3_READY=!0;})();
