if(!self.define){let i,n={};const e=(e,s)=>(e=new URL(e+".js",s).href,n[e]||new Promise((n=>{if("document"in self){const i=document.createElement("script");i.src=e,i.onload=n,document.head.appendChild(i)}else i=e,importScripts(e),n()})).then((()=>{let i=n[e];if(!i)throw new Error(`Module ${e} didn’t register its module`);return i})));self.define=(s,l)=>{const t=i||("document"in self?document.currentScript.src:"")||location.href;if(n[t])return;let c={};const r=i=>e(i,t),u={module:{uri:t},exports:c,require:r};n[t]=Promise.all(s.map((i=>u[i]||r(i)))).then((i=>(l(...i),c)))}}define(["./workbox-f0806d7b"],(function(i){"use strict";self.skipWaiting(),i.clientsClaim(),i.precacheAndRoute([{url:"/index.html",revision:"fb1658847bd6953961ec4dfd26441082"},{url:"/static/css/605.f471616b.chunk.css",revision:null},{url:"/static/css/866.67035ad4.chunk.css",revision:null},{url:"/static/css/main.b1c1cc22.css",revision:null},{url:"/static/js/400.18b1f9bf.chunk.js",revision:null},{url:"/static/js/605.f99b45e4.chunk.js",revision:null},{url:"/static/js/866.0e81b7b7.chunk.js",revision:null},{url:"/static/js/main.85413ac2.js",revision:null},{url:"/static/js/main.85413ac2.js.LICENSE.txt",revision:"70422739386db34f4ba47262b066aa74"},{url:"/static/media/app-logo.8a70f407b3a3b4e08b98.png",revision:null},{url:"/static/media/clouds-day.1859c13293e385b94e6a.png",revision:null},{url:"/static/media/clouds-night.ce699d1b13d2746e314d.png",revision:null},{url:"/static/media/ele-day.136250f6d55ce49f1b62.png",revision:null},{url:"/static/media/ele-night.f69fd5bf321322de5b89.png",revision:null},{url:"/static/media/rain-day.7b69089a6dabd4d29eeb.png",revision:null},{url:"/static/media/rain-night.99a407f712fd1fc112bd.png",revision:null},{url:"/static/media/snow-day.6112778c510e36e7ae0c.png",revision:null},{url:"/static/media/snow-night.2b651bc0a7355bd9641f.png",revision:null},{url:"/static/media/sun-day.016e2d54143ed9061263.png",revision:null},{url:"/static/media/sun-night.bbef46a57948d1d7d18b.png",revision:null},{url:"/static/media/wind-night.dc04c4bdfc2c1e0bc4fd.png",revision:null},{url:"/static/media/wind.f99a0f79c7c9b3a0081a.png",revision:null}],{})}));
//# sourceMappingURL=service-worker.js.map
