!function(e){var t={};function s(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=t,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s(s.s=5)}([function(e,t,s){"use strict";try{self["workbox:precaching:6.1.5"]&&_()}catch(e){}},function(e,t,s){"use strict";try{self["workbox:core:6.1.5"]&&_()}catch(e){}},function(e,t,s){"use strict";try{self["workbox:routing:6.1.5"]&&_()}catch(e){}},function(e,t,s){"use strict";try{self["workbox:strategies:6.1.5"]&&_()}catch(e){}},function(e,t){function s(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}s.keys=function(){return[]},s.resolve=s,e.exports=s,s.id=4},function(e,t,s){"use strict";s.r(t);s(1);const a=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class n extends Error{constructor(e,t){super(a(e,t)),this.name=e,this.details=t}}const r={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},i=e=>[r.prefix,e,r.suffix].filter((e=>e&&e.length>0)).join("-"),c=e=>e||i(r.precache),o=e=>e||i(r.runtime);function l(e,t){const s=t();return e.waitUntil(s),s}s(0);function h(e){if(!e)throw new n("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:s}=e;if(!s)throw new n("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(s,location.href);return{cacheKey:e.href,url:e.href}}const a=new URL(s,location.href),r=new URL(s,location.href);return a.searchParams.set("__WB_REVISION__",t),{cacheKey:a.href,url:r.href}}class u{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class f{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=t&&t.cacheKey||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s):e},this._precacheController=e}}let d;async function p(e,t){let s=null;if(e.url){s=new URL(e.url).origin}if(s!==self.location.origin)throw new n("cross-origin-copy-response",{origin:s});const a=e.clone(),r={headers:new Headers(a.headers),status:a.status,statusText:a.statusText},i=t?t(r):r,c=function(){if(void 0===d){const e=new Response("");if("body"in e)try{new Response(e.body),d=!0}catch(e){d=!1}d=!1}return d}()?a.body:await a.blob();return new Response(c,i)}function y(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class g{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const w=new Set;s(3);function _(e){return"string"==typeof e?new Request(e):e}class v{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new g,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:t}=this;let s=_(e);if("navigate"===s.mode&&t instanceof FetchEvent&&t.preloadResponse){const e=await t.preloadResponse;if(e)return e}const a=this.hasCallback("fetchDidFail")?s.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))s=await e({request:s.clone(),event:t})}catch(e){throw new n("plugin-error-request-will-fetch",{thrownError:e})}const r=s.clone();try{let e;e=await fetch(s,"navigate"===s.mode?void 0:this._strategy.fetchOptions);for(const s of this.iterateCallbacks("fetchDidSucceed"))e=await s({event:t,request:r,response:e});return e}catch(e){throw a&&await this.runCallbacks("fetchDidFail",{error:e,event:t,originalRequest:a.clone(),request:r.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=_(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,r=await this.getCacheKey(t,"read"),i={...n,cacheName:a};s=await caches.match(r,i);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:r,event:this.event})||void 0;return s}async cachePut(e,t){const s=_(e);var a;await(a=0,new Promise((e=>setTimeout(e,a))));const r=await this.getCacheKey(s,"write");if(!t)throw new n("cache-put-with-no-response",{url:(i=r.url,new URL(String(i),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var i;const c=await this._ensureResponseSafeToCache(t);if(!c)return!1;const{cacheName:o,matchOptions:l}=this._strategy,h=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=y(t.url,s);if(t.url===n)return e.match(t,a);const r={...a,ignoreSearch:!0},i=await e.keys(t,r);for(const t of i)if(n===y(t.url,s))return e.match(t,a)}(h,r.clone(),["__WB_REVISION__"],l):null;try{await h.put(r,u?c.clone():c)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of w)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:r,event:this.event});return!0}async getCacheKey(e,t){if(!this._cacheKeys[t]){let s=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))s=_(await e({mode:t,request:s,event:this.event,params:this.params}));this._cacheKeys[t]=s}return this._cacheKeys[t]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n={...a,state:s};return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve()}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class m extends class{constructor(e={}){this.cacheName=o(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new v(this,{event:t,request:s,params:a}),r=this._getResponse(n,s,t);return[r,this._awaitComplete(r,n,s,t)]}async _getResponse(e,t,s){let a;await e.runCallbacks("handlerWillStart",{event:s,request:t});try{if(a=await this._handle(t,e),!a||"error"===a.type)throw new n("no-response",{url:t.url})}catch(n){for(const r of e.iterateCallbacks("handlerDidError"))if(a=await r({error:n,event:s,request:t}),a)break;if(!a)throw n}for(const n of e.iterateCallbacks("handlerWillRespond"))a=await n({event:s,request:t,response:a});return a}async _awaitComplete(e,t,s,a){let n,r;try{n=await e}catch(r){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){r=e}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:r}),t.destroy(),r)throw r}}{constructor(e={}){e.cacheName=c(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(m.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let s;if(!this._fallbackToNetwork)throw new n("missing-precache-entry",{cacheName:this.cacheName,url:e.url});return s=await t.fetch(e),s}async _handleInstall(e,t){this._useDefaultCacheabilityPluginIfNeeded();const s=await t.fetch(e);if(!await t.cachePut(e,s.clone()))throw new n("bad-precaching-response",{url:e.url,status:s.status});return s}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==m.copyRedirectedCacheableResponsesPlugin&&(a===m.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(m.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}m.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},m.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await p(e):e};class b{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new m({cacheName:c(e),plugins:[...t,new f({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const t=[];for(const s of e){"string"==typeof s?t.push(s):s&&void 0===s.revision&&t.push(s.url);const{cacheKey:e,url:a}=h(s),r="string"!=typeof s&&s.revision?"reload":"default";if(this._urlsToCacheKeys.has(a)&&this._urlsToCacheKeys.get(a)!==e)throw new n("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(a),secondEntry:e});if("string"!=typeof s&&s.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==s.integrity)throw new n("add-to-cache-list-conflicting-integrities",{url:a});this._cacheKeysToIntegrities.set(e,s.integrity)}if(this._urlsToCacheKeys.set(a,e),this._urlsToCacheModes.set(a,r),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return l(e,(async()=>{const t=new u;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),r=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:r,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return l(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const t=this.getCacheKeyForURL(e);if(!t)throw new n("non-precached-url",{url:e});return s=>(s.request=new Request(e),s.params={cacheKey:t,...s.params},this.strategy.handle(s))}}s(2);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"cb601765aa12a85f2b516fb18c6d16f9","url":"404.html"},{"revision":"9c42905f19f7fc159e27b5fc856c89fe","url":"assets/css/styles.d6b7cbd7.css"},{"revision":"73af7bc738288b763d7268110ec351b5","url":"assets/js/00927e56.84852659.js"},{"revision":"8c741301f5e1514800ee6ef24aa5f4be","url":"assets/js/01a85c17.ff281135.js"},{"revision":"4e38c9cd3876f7dae221014658f83f5f","url":"assets/js/1.3945a010.js"},{"revision":"6e920164c4963ecb2a84e64c4eea7d2f","url":"assets/js/1be78505.e5b8e26b.js"},{"revision":"1b26717197e7daa4d73bc83811e2d174","url":"assets/js/2.03d68b45.js"},{"revision":"357a28413040e9ea59270c6b85719149","url":"assets/js/221cde73.93d2ddb2.js"},{"revision":"c6cd7062ba82d78c815abf45d22a8da4","url":"assets/js/2a510483.13ac3c2f.js"},{"revision":"f830261c20d0031bf952e78d9c37e9e5","url":"assets/js/30.562d9c62.js"},{"revision":"d1d4c91a9966a46d96c033280f414dda","url":"assets/js/306a8c6c.706b9375.js"},{"revision":"e3bc82000ccd5f875e9aef619e058242","url":"assets/js/30b452fd.4c22c32f.js"},{"revision":"55055b86e5235c8c23740b156807b948","url":"assets/js/31.2a397482.js"},{"revision":"d48832b745b09f6563302528abe8d118","url":"assets/js/32.cf137166.js"},{"revision":"7233ab045f7fb66dda100e85b572552e","url":"assets/js/33.40e850c9.js"},{"revision":"8566003b82e13f028aa2f837280eb210","url":"assets/js/34.63d6cfdd.js"},{"revision":"25efd3c60c2571b9c55e97146b47999c","url":"assets/js/35.62a6b307.js"},{"revision":"7c604f2c91540ba4809c6cc950536b58","url":"assets/js/6875c492.a2aa5c3d.js"},{"revision":"92e3a3896f36749c5cdd0f4dd9a09b87","url":"assets/js/69b6aeef.078fc693.js"},{"revision":"a7a81313659b5fd9533c549fc565179c","url":"assets/js/8d9e30b6.452471e1.js"},{"revision":"df6719f2679643f53275487ede6e0220","url":"assets/js/935f2afb.c635da15.js"},{"revision":"3ffb4a2809d0c778186165d70e55d7b8","url":"assets/js/a09c2993.445288f1.js"},{"revision":"63db0372c584c46399ddae45ec131c90","url":"assets/js/a0b7350a.0d438bba.js"},{"revision":"344479d74a2b651b8eb81ec4cc054886","url":"assets/js/a6aa9e1f.90d604c0.js"},{"revision":"987ff9ae4230c17c2cbd70cfc35ecbb3","url":"assets/js/a7023ddc.48e8600d.js"},{"revision":"ce53fd2cab0b69a5aaaa33cf0d4c4060","url":"assets/js/adc60a63.f8ec279d.js"},{"revision":"41e8d6f5d59b90fc2e2fc841be2e506e","url":"assets/js/b2b675dd.56db3cbc.js"},{"revision":"439dfa1a9ed787a9db1a0be6ea1f4362","url":"assets/js/bcf8cf57.6450a0ae.js"},{"revision":"00de4ddc85ccff4c1567551ff2f497aa","url":"assets/js/c0cda8fa.fd16356e.js"},{"revision":"4902fa3af3299b9bc5ab1d5203ebd130","url":"assets/js/c23c5e6d.481b63f1.js"},{"revision":"7372344ffab98cfc68e455235d501e06","url":"assets/js/c4f5d8e4.19295ea1.js"},{"revision":"97851faef8890d737bbc492952d10d7c","url":"assets/js/ccc49370.c7762012.js"},{"revision":"a2d21011123e12b434360fd0960ebd8b","url":"assets/js/e3f34e86.272ffb6e.js"},{"revision":"f3d79df296982907bed4b27b0c7a4e74","url":"assets/js/e60aca67.3e7ce55a.js"},{"revision":"c4aa9cdb6b563f1b315d5e379d8e8837","url":"assets/js/f6ba3702.022f9a23.js"},{"revision":"d549696766a4e0b96cc41d645fc04fe6","url":"assets/js/main.c264ba7d.js"},{"revision":"20d95a72aa05877648d6811ed8ef4c40","url":"assets/js/runtime~main.679f31ed.js"},{"revision":"a671b1c9343aeb911f66f0cbb680937e","url":"assets/js/styles.55c19d37.js"},{"revision":"2036c5b65e2ead1ca23745fa6bf69880","url":"blog/index.html"},{"revision":"3ea9f7e4c2842335c2c008e870e3d3e9","url":"blog/tags/index.html"},{"revision":"588f2c19ca07a770a0237009a40ccf49","url":"blog/tags/welcome/index.html"},{"revision":"c69af769c39819ee862ac78263bc16db","url":"blog/welcome/index.html"},{"revision":"e6df0977c96c8b1dd9cd391c91233409","url":"community/contributing/index.html"},{"revision":"241880eb3de98e0ed3ac420ef651b6ca","url":"community/labs/index.html"},{"revision":"590cf09363f22929e7ab82934068f386","url":"community/resources/index.html"},{"revision":"339b477744580ab47c86b9fee806e5d8","url":"community/support/index.html"},{"revision":"d6b21608805649f063484b9495c803fe","url":"community/team/index.html"},{"revision":"a048e1f7a55246a9abc9c72f0513d69f","url":"docs/command-line/index.html"},{"revision":"9396b67b00934b0f511d8258e12f1929","url":"docs/github-accounts/index.html"},{"revision":"f37e988caaa787d4d55dbd5909fd9fef","url":"docs/index.html"},{"revision":"2321f8cbe6845796bed17f1c32bf0d9c","url":"docs/text-editors/index.html"},{"revision":"610efff143146779f7892674829062f4","url":"docs/tutorials/git-goals/index.html"},{"revision":"97b09022be73c5a6974555bb4a1749d0","url":"docs/tutorials/your-first-commit/index.html"},{"revision":"d03b0275fc0c070f75bf3c85eb5fde9d","url":"index.html"},{"revision":"9c2c0157ca081fba8d1d728f5da961d5","url":"manifest.json"},{"revision":"e2e2bafdcd1926e94060480eab1dd09c","url":"img/best-practices.svg"},{"revision":"64484b856574f10f5bc38caf7ce76b74","url":"img/brandmark.png"},{"revision":"1a8a915407d758dcd261fe2d0e0b0214","url":"img/collaborate-with-digital-tools.svg"},{"revision":"9253ec4697d9a0789f4f0c56727b989c","url":"img/favicon.ico"},{"revision":"9fe10ab94dd329d69ae8100d56e46f4d","url":"img/for-academics.svg"},{"revision":"8ba9879e8893e863f9046d1bddab75c6","url":"img/icons/icon-128x128.png"},{"revision":"d6dd32daef4ff7a2cb61e5eefa2ba8bb","url":"img/icons/icon-144x144.png"},{"revision":"816d38bbb608350c111fc5b2bc5d7775","url":"img/icons/icon-152x152.png"},{"revision":"854aadaf3168820f17609d25eacff4ae","url":"img/icons/icon-192x192.png"},{"revision":"3cb6d7620691fdd66597a595763f8c2c","url":"img/icons/icon-384x384.png"},{"revision":"673ee05e6856581a75da548b72c75726","url":"img/icons/icon-512x512.png"},{"revision":"cf2b8aed1fd511e02200995acc56cb4e","url":"img/icons/icon-72x72.png"},{"revision":"e3d30430a37ca44e2402855c44afab12","url":"img/icons/icon-96x96.png"},{"revision":"783ea354107181c72d8e1c85163bc3c7","url":"img/logo-dark.png"},{"revision":"a6c9f243bd3eb2850e2fc4c58fbaaed5","url":"img/logo-dark.svg"},{"revision":"545f2495167745f6c98a9daa76cc8cae","url":"img/logo.png"},{"revision":"5901dee81b45b5aafcbebcb4b749d2e0","url":"img/logo.svg"},{"revision":"33a278404ee13dcb73dba1240225f934","url":"img/og-image-large.png"},{"revision":"92575103964de56101749458dfb30b82","url":"img/product-screenshot.png"},{"revision":"64484b856574f10f5bc38caf7ce76b74","url":"img/startyourlab.png"},{"revision":"50cc941f63184086d163a810dfad6eef","url":"img/startyourlab.svg"}],s=new b({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=[],s=new URL(e,self.location.href);return s.origin!==self.location.origin||(s.search="",s.hash="",t.push(s.href),s.pathname.endsWith("/")?t.push(`${s.href}index.html`):t.push(`${s.href}/index.html`)),t}(a);for(let r=0;r<n.length;r+=1){const i=n[r],c=s.getCacheKeyForURL(i);if(c){const s=caches.match(c);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:c,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});"SKIP_WAITING"===(t.data&&t.data.type)&&self.skipWaiting()}))})()}]);