!function(e){var t={};function s(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=t,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s(s.s=5)}([function(e,t,s){"use strict";try{self["workbox:precaching:6.1.5"]&&_()}catch(e){}},function(e,t,s){"use strict";try{self["workbox:core:6.1.5"]&&_()}catch(e){}},function(e,t,s){"use strict";try{self["workbox:routing:6.1.5"]&&_()}catch(e){}},function(e,t,s){"use strict";try{self["workbox:strategies:6.1.5"]&&_()}catch(e){}},function(e,t){function s(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}s.keys=function(){return[]},s.resolve=s,e.exports=s,s.id=4},function(e,t,s){"use strict";s.r(t);s(1);const a=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class n extends Error{constructor(e,t){super(a(e,t)),this.name=e,this.details=t}}const r={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},i=e=>[r.prefix,e,r.suffix].filter((e=>e&&e.length>0)).join("-"),c=e=>e||i(r.precache),o=e=>e||i(r.runtime);function l(e,t){const s=t();return e.waitUntil(s),s}s(0);function h(e){if(!e)throw new n("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:s}=e;if(!s)throw new n("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(s,location.href);return{cacheKey:e.href,url:e.href}}const a=new URL(s,location.href),r=new URL(s,location.href);return a.searchParams.set("__WB_REVISION__",t),{cacheKey:a.href,url:r.href}}class u{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class f{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=t&&t.cacheKey||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s):e},this._precacheController=e}}let d;async function p(e,t){let s=null;if(e.url){s=new URL(e.url).origin}if(s!==self.location.origin)throw new n("cross-origin-copy-response",{origin:s});const a=e.clone(),r={headers:new Headers(a.headers),status:a.status,statusText:a.statusText},i=t?t(r):r,c=function(){if(void 0===d){const e=new Response("");if("body"in e)try{new Response(e.body),d=!0}catch(e){d=!1}d=!1}return d}()?a.body:await a.blob();return new Response(c,i)}function y(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class g{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const w=new Set;s(3);function _(e){return"string"==typeof e?new Request(e):e}class v{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new g,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:t}=this;let s=_(e);if("navigate"===s.mode&&t instanceof FetchEvent&&t.preloadResponse){const e=await t.preloadResponse;if(e)return e}const a=this.hasCallback("fetchDidFail")?s.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))s=await e({request:s.clone(),event:t})}catch(e){throw new n("plugin-error-request-will-fetch",{thrownError:e})}const r=s.clone();try{let e;e=await fetch(s,"navigate"===s.mode?void 0:this._strategy.fetchOptions);for(const s of this.iterateCallbacks("fetchDidSucceed"))e=await s({event:t,request:r,response:e});return e}catch(e){throw a&&await this.runCallbacks("fetchDidFail",{error:e,event:t,originalRequest:a.clone(),request:r.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=_(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,r=await this.getCacheKey(t,"read"),i={...n,cacheName:a};s=await caches.match(r,i);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:r,event:this.event})||void 0;return s}async cachePut(e,t){const s=_(e);var a;await(a=0,new Promise((e=>setTimeout(e,a))));const r=await this.getCacheKey(s,"write");if(!t)throw new n("cache-put-with-no-response",{url:(i=r.url,new URL(String(i),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var i;const c=await this._ensureResponseSafeToCache(t);if(!c)return!1;const{cacheName:o,matchOptions:l}=this._strategy,h=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=y(t.url,s);if(t.url===n)return e.match(t,a);const r={...a,ignoreSearch:!0},i=await e.keys(t,r);for(const t of i)if(n===y(t.url,s))return e.match(t,a)}(h,r.clone(),["__WB_REVISION__"],l):null;try{await h.put(r,u?c.clone():c)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of w)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:r,event:this.event});return!0}async getCacheKey(e,t){if(!this._cacheKeys[t]){let s=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))s=_(await e({mode:t,request:s,event:this.event,params:this.params}));this._cacheKeys[t]=s}return this._cacheKeys[t]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n={...a,state:s};return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve()}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class m extends class{constructor(e={}){this.cacheName=o(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new v(this,{event:t,request:s,params:a}),r=this._getResponse(n,s,t);return[r,this._awaitComplete(r,n,s,t)]}async _getResponse(e,t,s){let a;await e.runCallbacks("handlerWillStart",{event:s,request:t});try{if(a=await this._handle(t,e),!a||"error"===a.type)throw new n("no-response",{url:t.url})}catch(n){for(const r of e.iterateCallbacks("handlerDidError"))if(a=await r({error:n,event:s,request:t}),a)break;if(!a)throw n}for(const n of e.iterateCallbacks("handlerWillRespond"))a=await n({event:s,request:t,response:a});return a}async _awaitComplete(e,t,s,a){let n,r;try{n=await e}catch(r){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){r=e}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:r}),t.destroy(),r)throw r}}{constructor(e={}){e.cacheName=c(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(m.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let s;if(!this._fallbackToNetwork)throw new n("missing-precache-entry",{cacheName:this.cacheName,url:e.url});return s=await t.fetch(e),s}async _handleInstall(e,t){this._useDefaultCacheabilityPluginIfNeeded();const s=await t.fetch(e);if(!await t.cachePut(e,s.clone()))throw new n("bad-precaching-response",{url:e.url,status:s.status});return s}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==m.copyRedirectedCacheableResponsesPlugin&&(a===m.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(m.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}m.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},m.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await p(e):e};class b{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new m({cacheName:c(e),plugins:[...t,new f({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const t=[];for(const s of e){"string"==typeof s?t.push(s):s&&void 0===s.revision&&t.push(s.url);const{cacheKey:e,url:a}=h(s),r="string"!=typeof s&&s.revision?"reload":"default";if(this._urlsToCacheKeys.has(a)&&this._urlsToCacheKeys.get(a)!==e)throw new n("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(a),secondEntry:e});if("string"!=typeof s&&s.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==s.integrity)throw new n("add-to-cache-list-conflicting-integrities",{url:a});this._cacheKeysToIntegrities.set(e,s.integrity)}if(this._urlsToCacheKeys.set(a,e),this._urlsToCacheModes.set(a,r),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return l(e,(async()=>{const t=new u;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),r=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:r,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return l(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const t=this.getCacheKeyForURL(e);if(!t)throw new n("non-precached-url",{url:e});return s=>(s.request=new Request(e),s.params={cacheKey:t,...s.params},this.strategy.handle(s))}}s(2);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"ae3d3d1433382a76330cbb60355272d5","url":"404.html"},{"revision":"ff389a67e6656280a8a997d572f18287","url":"assets/css/styles.55b16503.css"},{"revision":"69347174f8ca3b17d6f7bc623ac841b2","url":"assets/js/00927e56.fbf1fd5f.js"},{"revision":"0845efd780f5a18b97dfd4a7daef800f","url":"assets/js/01a85c17.9efecaf2.js"},{"revision":"6c55e76f670b0ca87582d1009ea03e3e","url":"assets/js/1.354b492c.js"},{"revision":"ec3533dd46e7a501058fccdc35ce48d8","url":"assets/js/1be78505.80969a04.js"},{"revision":"d63ed37e1bc96085da0a0f56f2f9045a","url":"assets/js/2.ea4c12dc.js"},{"revision":"26a4cae33b716e664a159225d610d8f6","url":"assets/js/221cde73.5965b194.js"},{"revision":"9aee9a7718b701fe6234a2bf740d4a09","url":"assets/js/276255c7.19d834e1.js"},{"revision":"8507b6ccec68e49b312d7cbe11dca314","url":"assets/js/2a510483.9eb4e5b9.js"},{"revision":"da034714407fc57ba33cc29523fc3973","url":"assets/js/306a8c6c.65dc79ec.js"},{"revision":"ab7b5c9ee903f01e3af6db79a6318b5a","url":"assets/js/30b452fd.1605674b.js"},{"revision":"a742ba8630a261db2ba92ee38f385112","url":"assets/js/32.252ffcd0.js"},{"revision":"0a4c4d65100dd67c738c3b5f750c47a5","url":"assets/js/33.6882e451.js"},{"revision":"f4d23ad37360d063cfff5c9e5aa015ff","url":"assets/js/34.c09af33a.js"},{"revision":"8a1839cd4e51f639298c7bb687321c76","url":"assets/js/35.e5f22a45.js"},{"revision":"c16a567fd1144c4f868d49cbed7f6fee","url":"assets/js/36.478169a0.js"},{"revision":"d1dc6beb4976c0bc4cadb72eaccfac1d","url":"assets/js/37.6ad6cf01.js"},{"revision":"66f807c997dd93c3a6c462e21e730211","url":"assets/js/661d559c.140ab136.js"},{"revision":"f5a4526c4517e1712e8dbe2ab01c052f","url":"assets/js/6875c492.8ca6d0d1.js"},{"revision":"e180e8b2fa2ab9f38af4152c9370ec43","url":"assets/js/69b6aeef.feba56a6.js"},{"revision":"9f7774e5c6dcd434346a41d0961de511","url":"assets/js/8d9e30b6.30d8720f.js"},{"revision":"185ecd15af2002d28de6186529da4c6b","url":"assets/js/935f2afb.57dfe792.js"},{"revision":"e27c7e3bedb6732e1ac902881a2dd1c5","url":"assets/js/a09c2993.2dd0f17c.js"},{"revision":"1e40a8fde66a8fda52d6f486a9d943fe","url":"assets/js/a0b7350a.22b33a4d.js"},{"revision":"f10b26465c1172d253b9763edb49de7e","url":"assets/js/a6aa9e1f.48b310d9.js"},{"revision":"37396be9df71837d1e16a6d4628adf94","url":"assets/js/a7023ddc.0408e8af.js"},{"revision":"7a7938a045db00eaa540d9b36fd35f99","url":"assets/js/adc60a63.a94c5601.js"},{"revision":"2c6d6e8f65b151590bf508ae4ecb3d7c","url":"assets/js/b2b675dd.82fa5fa5.js"},{"revision":"b4d6996edc5ca28560aeeafc0ffd32e7","url":"assets/js/bcf8cf57.6fd33805.js"},{"revision":"9db52788ef3b2f2a3ba6f4456a3c34ae","url":"assets/js/c0cda8fa.b505764a.js"},{"revision":"c84d63c5469fa8fc28733528bb071be6","url":"assets/js/c23c5e6d.ea4b2dbe.js"},{"revision":"cbe29f82cb1ab456012ce1bee2d43770","url":"assets/js/c4f5d8e4.8ecbcc41.js"},{"revision":"79928b52e9d912e6102e3052f5e136e1","url":"assets/js/ccc49370.596efa92.js"},{"revision":"e43f868c3577823229e667e7b11d5200","url":"assets/js/e3f34e86.ed2f0782.js"},{"revision":"e938aa93db34da1fe23c631df4876507","url":"assets/js/e60aca67.546e7094.js"},{"revision":"46b2f589ec89cdb1ecb8b5641d55c28b","url":"assets/js/f6ba3702.66659641.js"},{"revision":"149290eaa8ecef0e1c7265cdaafa84a2","url":"assets/js/main.2efbb7df.js"},{"revision":"a13b67c6038d64df90f7c806d9b2cfe0","url":"assets/js/runtime~main.31a127e1.js"},{"revision":"9121085e89b57c8f42c7864ef2e7d30b","url":"assets/js/styles.37b1a83e.js"},{"revision":"d489e0b1493991043d15b636fab84851","url":"blog/index.html"},{"revision":"b360baa4b675c18c5b309fb5d8bc60f5","url":"blog/tags/index.html"},{"revision":"5a81ee7b59f2066d4ca1388d5921b247","url":"blog/tags/welcome/index.html"},{"revision":"7cd55a0185fcf9738d2f712606f17e2a","url":"blog/welcome/index.html"},{"revision":"bdbe004270e2688cb897ed2d9a9e851e","url":"community/contributing/index.html"},{"revision":"dba39fd517b9e994a4b3fd30012b5a42","url":"community/labs/index.html"},{"revision":"e97cbe7d450c428245bff0e81886ead4","url":"community/resources/index.html"},{"revision":"30787f232d16f618d8b6130841a667c9","url":"community/support/index.html"},{"revision":"e3b4506b148fccdcc8f1ccfada2dfc4e","url":"community/team/index.html"},{"revision":"477201e5bc384ed484be8efba1b9678d","url":"docs/command-line/index.html"},{"revision":"aec565b12fcbf2e876637c585818e23c","url":"docs/github-accounts/index.html"},{"revision":"54a61573268a73e695a2f0039b7e0c62","url":"docs/github-desktop/index.html"},{"revision":"4d338e5b1bda54daa3714eea7e9b0685","url":"docs/github-organizations/index.html"},{"revision":"042bd957ae2a89c8909a467e9b8e7fa7","url":"docs/index.html"},{"revision":"a63d082c92607b65e44789cf38e46e86","url":"docs/text-editors/index.html"},{"revision":"e14089df25bb2689a6eeea4303403178","url":"docs/tutorials/git-goals/index.html"},{"revision":"eacdf13220b4d1ce50a7a805b60b282f","url":"docs/tutorials/your-first-commit/index.html"},{"revision":"e0b17c66537482d183b6cd88e0f71577","url":"index.html"},{"revision":"9c2c0157ca081fba8d1d728f5da961d5","url":"manifest.json"},{"revision":"e629256581df464a21fdfc554fea9760","url":"assets/images/app-preferences-fbd9bc3ea8ff76d4256ca7919d043bb0.png"},{"revision":"2e7601e68252f2769c67b327080e763f","url":"assets/images/browser-authorize-desktop-58741470c9a69b8bd4e71a23ad29d1bc.png"},{"revision":"da14b2a73bfcaedad7272f4063d24084","url":"assets/images/local-home-screen-signed-in-aba73884d69a5e1b36d806918fe1eab0.png"},{"revision":"cd779ead312506071b77629ebfff9ef9","url":"assets/images/local-preferences-accounts-no-user-c6bc82ecb345fda2f000575e00392dcc.png"},{"revision":"e2e2bafdcd1926e94060480eab1dd09c","url":"img/best-practices.svg"},{"revision":"64484b856574f10f5bc38caf7ce76b74","url":"img/brandmark.png"},{"revision":"1a8a915407d758dcd261fe2d0e0b0214","url":"img/collaborate-with-digital-tools.svg"},{"revision":"9253ec4697d9a0789f4f0c56727b989c","url":"img/favicon.ico"},{"revision":"9fe10ab94dd329d69ae8100d56e46f4d","url":"img/for-academics.svg"},{"revision":"8ba9879e8893e863f9046d1bddab75c6","url":"img/icons/icon-128x128.png"},{"revision":"d6dd32daef4ff7a2cb61e5eefa2ba8bb","url":"img/icons/icon-144x144.png"},{"revision":"816d38bbb608350c111fc5b2bc5d7775","url":"img/icons/icon-152x152.png"},{"revision":"854aadaf3168820f17609d25eacff4ae","url":"img/icons/icon-192x192.png"},{"revision":"3cb6d7620691fdd66597a595763f8c2c","url":"img/icons/icon-384x384.png"},{"revision":"673ee05e6856581a75da548b72c75726","url":"img/icons/icon-512x512.png"},{"revision":"cf2b8aed1fd511e02200995acc56cb4e","url":"img/icons/icon-72x72.png"},{"revision":"e3d30430a37ca44e2402855c44afab12","url":"img/icons/icon-96x96.png"},{"revision":"783ea354107181c72d8e1c85163bc3c7","url":"img/logo-dark.png"},{"revision":"a6c9f243bd3eb2850e2fc4c58fbaaed5","url":"img/logo-dark.svg"},{"revision":"545f2495167745f6c98a9daa76cc8cae","url":"img/logo.png"},{"revision":"5901dee81b45b5aafcbebcb4b749d2e0","url":"img/logo.svg"},{"revision":"33a278404ee13dcb73dba1240225f934","url":"img/og-image-large.png"},{"revision":"92575103964de56101749458dfb30b82","url":"img/product-screenshot.png"},{"revision":"e629256581df464a21fdfc554fea9760","url":"img/setup/app-preferences.png"},{"revision":"2e7601e68252f2769c67b327080e763f","url":"img/setup/browser-authorize-desktop.png"},{"revision":"da14b2a73bfcaedad7272f4063d24084","url":"img/setup/local-home-screen-signed-in.png"},{"revision":"cd779ead312506071b77629ebfff9ef9","url":"img/setup/local-preferences-accounts-no-user.png"},{"revision":"b9c269b857152ae2488bb1c526558ee3","url":"img/setup/local-preferences-git.png"},{"revision":"b243d207ea77d898508bf4d7f77f7465","url":"img/setup/local-preferences-text-editor.png"},{"revision":"19ba258281314cb226b8d8dcb009e678","url":"img/setup/sign-in-browser-identity.png"},{"revision":"64484b856574f10f5bc38caf7ce76b74","url":"img/startyourlab.png"},{"revision":"50cc941f63184086d163a810dfad6eef","url":"img/startyourlab.svg"}],s=new b({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=[],s=new URL(e,self.location.href);return s.origin!==self.location.origin||(s.search="",s.hash="",t.push(s.href),s.pathname.endsWith("/")?t.push(`${s.href}index.html`):t.push(`${s.href}/index.html`)),t}(a);for(let r=0;r<n.length;r+=1){const i=n[r],c=s.getCacheKeyForURL(i);if(c){const s=caches.match(c);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:c,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});"SKIP_WAITING"===(t.data&&t.data.type)&&self.skipWaiting()}))})()}]);