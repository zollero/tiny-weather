if(!self.define){let e,i={};const n=(n,t)=>(n=new URL(n+".js",t).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(t,s)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let r={};const l=e=>n(e,a),c={module:{uri:a},exports:r,require:l};i[a]=Promise.all(t.map((e=>c[e]||l(e)))).then((e=>(s(...e),r)))}}define(["./workbox-f0806d7b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/tiny-weather/index.html",revision:"2a6ba1339e71baf0126c73285a043b6b"},{url:"/tiny-weather/static/css/605.f471616b.chunk.css",revision:null},{url:"/tiny-weather/static/css/866.67035ad4.chunk.css",revision:null},{url:"/tiny-weather/static/css/main.b1c1cc22.css",revision:null},{url:"/tiny-weather/static/js/400.18b1f9bf.chunk.js",revision:null},{url:"/tiny-weather/static/js/605.116f5133.chunk.js",revision:null},{url:"/tiny-weather/static/js/866.3d74fd8b.chunk.js",revision:null},{url:"/tiny-weather/static/js/main.cddbea33.js",revision:null},{url:"/tiny-weather/static/js/main.cddbea33.js.LICENSE.txt",revision:"70422739386db34f4ba47262b066aa74"},{url:"/tiny-weather/static/media/app-logo.8a70f407b3a3b4e08b98.png",revision:null},{url:"/tiny-weather/static/media/clouds-day.1859c13293e385b94e6a.png",revision:null},{url:"/tiny-weather/static/media/clouds-night.ce699d1b13d2746e314d.png",revision:null},{url:"/tiny-weather/static/media/ele-day.136250f6d55ce49f1b62.png",revision:null},{url:"/tiny-weather/static/media/ele-night.f69fd5bf321322de5b89.png",revision:null},{url:"/tiny-weather/static/media/rain-day.7b69089a6dabd4d29eeb.png",revision:null},{url:"/tiny-weather/static/media/rain-night.99a407f712fd1fc112bd.png",revision:null},{url:"/tiny-weather/static/media/snow-day.6112778c510e36e7ae0c.png",revision:null},{url:"/tiny-weather/static/media/snow-night.2b651bc0a7355bd9641f.png",revision:null},{url:"/tiny-weather/static/media/sun-day.016e2d54143ed9061263.png",revision:null},{url:"/tiny-weather/static/media/sun-night.bbef46a57948d1d7d18b.png",revision:null},{url:"/tiny-weather/static/media/wind-night.dc04c4bdfc2c1e0bc4fd.png",revision:null},{url:"/tiny-weather/static/media/wind.f99a0f79c7c9b3a0081a.png",revision:null}],{})}));
//# sourceMappingURL=service-worker.js.map
