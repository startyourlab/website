!function(e){var t={};function s(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=t,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s(s.s=5)}([function(e,t,s){"use strict";try{self["workbox:precaching:6.1.5"]&&_()}catch(e){}},function(e,t,s){"use strict";try{self["workbox:core:6.1.5"]&&_()}catch(e){}},function(e,t,s){"use strict";try{self["workbox:routing:6.1.5"]&&_()}catch(e){}},function(e,t,s){"use strict";try{self["workbox:strategies:6.1.5"]&&_()}catch(e){}},function(e,t){function s(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}s.keys=function(){return[]},s.resolve=s,e.exports=s,s.id=4},function(e,t,s){"use strict";s.r(t);s(1);const a=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class n extends Error{constructor(e,t){super(a(e,t)),this.name=e,this.details=t}}const r={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},i=e=>[r.prefix,e,r.suffix].filter((e=>e&&e.length>0)).join("-"),c=e=>e||i(r.precache),o=e=>e||i(r.runtime);function l(e,t){const s=t();return e.waitUntil(s),s}s(0);function h(e){if(!e)throw new n("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:s}=e;if(!s)throw new n("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(s,location.href);return{cacheKey:e.href,url:e.href}}const a=new URL(s,location.href),r=new URL(s,location.href);return a.searchParams.set("__WB_REVISION__",t),{cacheKey:a.href,url:r.href}}class u{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class f{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=t&&t.cacheKey||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s):e},this._precacheController=e}}let d;async function p(e,t){let s=null;if(e.url){s=new URL(e.url).origin}if(s!==self.location.origin)throw new n("cross-origin-copy-response",{origin:s});const a=e.clone(),r={headers:new Headers(a.headers),status:a.status,statusText:a.statusText},i=t?t(r):r,c=function(){if(void 0===d){const e=new Response("");if("body"in e)try{new Response(e.body),d=!0}catch(e){d=!1}d=!1}return d}()?a.body:await a.blob();return new Response(c,i)}function y(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class g{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const w=new Set;s(3);function _(e){return"string"==typeof e?new Request(e):e}class v{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new g,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:t}=this;let s=_(e);if("navigate"===s.mode&&t instanceof FetchEvent&&t.preloadResponse){const e=await t.preloadResponse;if(e)return e}const a=this.hasCallback("fetchDidFail")?s.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))s=await e({request:s.clone(),event:t})}catch(e){throw new n("plugin-error-request-will-fetch",{thrownError:e})}const r=s.clone();try{let e;e=await fetch(s,"navigate"===s.mode?void 0:this._strategy.fetchOptions);for(const s of this.iterateCallbacks("fetchDidSucceed"))e=await s({event:t,request:r,response:e});return e}catch(e){throw a&&await this.runCallbacks("fetchDidFail",{error:e,event:t,originalRequest:a.clone(),request:r.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=_(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,r=await this.getCacheKey(t,"read"),i={...n,cacheName:a};s=await caches.match(r,i);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:r,event:this.event})||void 0;return s}async cachePut(e,t){const s=_(e);var a;await(a=0,new Promise((e=>setTimeout(e,a))));const r=await this.getCacheKey(s,"write");if(!t)throw new n("cache-put-with-no-response",{url:(i=r.url,new URL(String(i),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var i;const c=await this._ensureResponseSafeToCache(t);if(!c)return!1;const{cacheName:o,matchOptions:l}=this._strategy,h=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=y(t.url,s);if(t.url===n)return e.match(t,a);const r={...a,ignoreSearch:!0},i=await e.keys(t,r);for(const t of i)if(n===y(t.url,s))return e.match(t,a)}(h,r.clone(),["__WB_REVISION__"],l):null;try{await h.put(r,u?c.clone():c)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of w)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:r,event:this.event});return!0}async getCacheKey(e,t){if(!this._cacheKeys[t]){let s=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))s=_(await e({mode:t,request:s,event:this.event,params:this.params}));this._cacheKeys[t]=s}return this._cacheKeys[t]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n={...a,state:s};return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve()}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class m extends class{constructor(e={}){this.cacheName=o(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new v(this,{event:t,request:s,params:a}),r=this._getResponse(n,s,t);return[r,this._awaitComplete(r,n,s,t)]}async _getResponse(e,t,s){let a;await e.runCallbacks("handlerWillStart",{event:s,request:t});try{if(a=await this._handle(t,e),!a||"error"===a.type)throw new n("no-response",{url:t.url})}catch(n){for(const r of e.iterateCallbacks("handlerDidError"))if(a=await r({error:n,event:s,request:t}),a)break;if(!a)throw n}for(const n of e.iterateCallbacks("handlerWillRespond"))a=await n({event:s,request:t,response:a});return a}async _awaitComplete(e,t,s,a){let n,r;try{n=await e}catch(r){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){r=e}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:r}),t.destroy(),r)throw r}}{constructor(e={}){e.cacheName=c(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(m.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let s;if(!this._fallbackToNetwork)throw new n("missing-precache-entry",{cacheName:this.cacheName,url:e.url});return s=await t.fetch(e),s}async _handleInstall(e,t){this._useDefaultCacheabilityPluginIfNeeded();const s=await t.fetch(e);if(!await t.cachePut(e,s.clone()))throw new n("bad-precaching-response",{url:e.url,status:s.status});return s}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==m.copyRedirectedCacheableResponsesPlugin&&(a===m.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(m.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}m.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},m.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await p(e):e};class b{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new m({cacheName:c(e),plugins:[...t,new f({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const t=[];for(const s of e){"string"==typeof s?t.push(s):s&&void 0===s.revision&&t.push(s.url);const{cacheKey:e,url:a}=h(s),r="string"!=typeof s&&s.revision?"reload":"default";if(this._urlsToCacheKeys.has(a)&&this._urlsToCacheKeys.get(a)!==e)throw new n("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(a),secondEntry:e});if("string"!=typeof s&&s.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==s.integrity)throw new n("add-to-cache-list-conflicting-integrities",{url:a});this._cacheKeysToIntegrities.set(e,s.integrity)}if(this._urlsToCacheKeys.set(a,e),this._urlsToCacheModes.set(a,r),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return l(e,(async()=>{const t=new u;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),r=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:r,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return l(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const t=this.getCacheKeyForURL(e);if(!t)throw new n("non-precached-url",{url:e});return s=>(s.request=new Request(e),s.params={cacheKey:t,...s.params},this.strategy.handle(s))}}s(2);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"6f0c7728bcb344c04801f74be2b2887f","url":"404.html"},{"revision":"5eb6fd47057a81f1d0492047bf7a1048","url":"assets/css/styles.401394cd.css"},{"revision":"547213b0f8e7d4895acc62101774ba36","url":"assets/js/00927e56.f230dd59.js"},{"revision":"ac48228477ca873dc692be6f46f2fd13","url":"assets/js/01a85c17.f8374d65.js"},{"revision":"9107b941c69a1ff9c404458f51d62d04","url":"assets/js/09c367c0.f1cf60c2.js"},{"revision":"d8bc599d796c85a73dafcb962d27b1c7","url":"assets/js/1.7b75c0c5.js"},{"revision":"8df7a9012729ec6d7e1dd8634920ff64","url":"assets/js/1be78505.131a980d.js"},{"revision":"86b8b051b00fd43bdd335f0038b94e76","url":"assets/js/2.ae16295d.js"},{"revision":"0e48c5e5e5709d33a27db5ef944bea49","url":"assets/js/221cde73.b96a2513.js"},{"revision":"8d3fa849e608993e7bc851b2c08c14df","url":"assets/js/2a510483.43f64876.js"},{"revision":"da034714407fc57ba33cc29523fc3973","url":"assets/js/306a8c6c.65dc79ec.js"},{"revision":"a894325e8ef730d7993b943c7b83ba2a","url":"assets/js/30b452fd.3a155fcc.js"},{"revision":"400c2d37add82b6057d19ae97189122b","url":"assets/js/33.8f83bf9d.js"},{"revision":"f13ffbf84637c03f76ff547066b0acca","url":"assets/js/34.057449a5.js"},{"revision":"d95df70c499cdd3107b9cba5168fb99f","url":"assets/js/35.a1ab6d96.js"},{"revision":"941bec11d2b8d492f663a07d81386ad7","url":"assets/js/36.c81d91a0.js"},{"revision":"2f6afeb0737023fad375d9b2757d4d8e","url":"assets/js/37.7983c81f.js"},{"revision":"8ee5e6f30fdafb9264e6eaa7a3dff512","url":"assets/js/38.95bfa0d1.js"},{"revision":"a781be4893d9ae859a6df5bb8a1c6419","url":"assets/js/661d559c.b00898ec.js"},{"revision":"b12d4a3dc166a36d63f51c55979be869","url":"assets/js/6875c492.ad6fd9a2.js"},{"revision":"9cd9631382763053bd09cf6480b7b093","url":"assets/js/69b6aeef.12216a06.js"},{"revision":"a43e02fbba9e783fb2383b21387bcd04","url":"assets/js/8d9e30b6.197f8c7f.js"},{"revision":"2aea37fd5626e9248e6da2ce4176fa62","url":"assets/js/935f2afb.4ab84dd4.js"},{"revision":"75de6cc259f6fb8e7988bf8a0444871e","url":"assets/js/a09c2993.aabada08.js"},{"revision":"d21a397cc53ce4022b6cc65f8e45071c","url":"assets/js/a0b7350a.49d514da.js"},{"revision":"1f4affb7caef778b5298a409e175e6a2","url":"assets/js/a6aa9e1f.316935f5.js"},{"revision":"37396be9df71837d1e16a6d4628adf94","url":"assets/js/a7023ddc.0408e8af.js"},{"revision":"a702cd344e59739cec040d9272832ff0","url":"assets/js/adc60a63.63307eca.js"},{"revision":"2c6d6e8f65b151590bf508ae4ecb3d7c","url":"assets/js/b2b675dd.82fa5fa5.js"},{"revision":"647e988b9678b845a3ac3f4b56807bf0","url":"assets/js/bcf8cf57.02282ce5.js"},{"revision":"a161bb6234c6588a94c1fab019d5a147","url":"assets/js/c0cda8fa.2ee6d025.js"},{"revision":"287f72830f8d89b859aa20fd17854623","url":"assets/js/c23c5e6d.a139ef9d.js"},{"revision":"ae1aa018f7557e650c7c6c2cad6a7362","url":"assets/js/c4f5d8e4.0e30ea1e.js"},{"revision":"d0b395d1427412bf4108d44b048e6055","url":"assets/js/ccc49370.d54bd9b0.js"},{"revision":"e43f868c3577823229e667e7b11d5200","url":"assets/js/e3f34e86.ed2f0782.js"},{"revision":"0b44d8555da87b496e46fd5878120a4e","url":"assets/js/e60aca67.750a60f2.js"},{"revision":"7a39bc43b331792ef6ea32938d17b12b","url":"assets/js/e747ec83.5f19afdb.js"},{"revision":"8dc64bd4ded231245cb40fdd78e7e473","url":"assets/js/f6ba3702.6d5abbab.js"},{"revision":"ddd64648f3ca53daed4f1b704d1c3854","url":"assets/js/main.104d402c.js"},{"revision":"c24f619f5c218325db762a8be77330e5","url":"assets/js/runtime~main.67d0cc31.js"},{"revision":"10ae1b5aa6dbf41e7f804aba9464b047","url":"assets/js/styles.40fea150.js"},{"revision":"ae11610e7665d1cac665835a40839067","url":"blog/index.html"},{"revision":"6d8bbd72691a85d17090619cd37fcde6","url":"blog/tags/index.html"},{"revision":"a3410467631c83d5cd576add58204bf4","url":"blog/tags/welcome/index.html"},{"revision":"8e960e4516dccb1ffa772f08617aeadc","url":"blog/welcome/index.html"},{"revision":"4ee3cc827a4b63427e24a0794aa6efdf","url":"community/contributing/index.html"},{"revision":"54399ee6f2dcc9a444f90ca9ae6b2ba8","url":"community/labs/index.html"},{"revision":"81a6091df3fd14ff286f8351a6a716e6","url":"community/resources/index.html"},{"revision":"b20ea6be4cc99a43efe769f7102e2030","url":"community/support/index.html"},{"revision":"f2cbdd50947032f9a12ed7ea7293bfb4","url":"community/team/index.html"},{"revision":"3ce007bc2be14925a62499063e0c35b5","url":"docs/command-line/index.html"},{"revision":"9feedca924b8e540844efc56da9d8066","url":"docs/github-accounts/index.html"},{"revision":"c6324e27547fb14e9f6dcd153c3e706f","url":"docs/github-desktop/index.html"},{"revision":"5d347e5943f69a5352b84653308557e8","url":"docs/github-organizations/index.html"},{"revision":"72bb853e048623047cf77e90ee3e25ed","url":"docs/glossary/index.html"},{"revision":"7a7893e527704223c0a21bb16db10f5a","url":"docs/index.html"},{"revision":"94b71f75ee045b71c5f069be92fc7ea0","url":"docs/text-editors/index.html"},{"revision":"87ca93ef4528f184634cce11072c98f4","url":"docs/tutorials/git-goals/index.html"},{"revision":"e3a576bff4d870873d5358a9f0013dd8","url":"docs/tutorials/your-first-commit/index.html"},{"revision":"425af522efabf06ba77fc82d7615b875","url":"index.html"},{"revision":"9c2c0157ca081fba8d1d728f5da961d5","url":"manifest.json"},{"revision":"e629256581df464a21fdfc554fea9760","url":"assets/images/app-preferences-fbd9bc3ea8ff76d4256ca7919d043bb0.png"},{"revision":"2e7601e68252f2769c67b327080e763f","url":"assets/images/browser-authorize-desktop-58741470c9a69b8bd4e71a23ad29d1bc.png"},{"revision":"da14b2a73bfcaedad7272f4063d24084","url":"assets/images/local-home-screen-signed-in-aba73884d69a5e1b36d806918fe1eab0.png"},{"revision":"cd779ead312506071b77629ebfff9ef9","url":"assets/images/local-preferences-accounts-no-user-c6bc82ecb345fda2f000575e00392dcc.png"},{"revision":"e2e2bafdcd1926e94060480eab1dd09c","url":"img/best-practices.svg"},{"revision":"64484b856574f10f5bc38caf7ce76b74","url":"img/brandmark.png"},{"revision":"1a8a915407d758dcd261fe2d0e0b0214","url":"img/collaborate-with-digital-tools.svg"},{"revision":"9253ec4697d9a0789f4f0c56727b989c","url":"img/favicon.ico"},{"revision":"9fe10ab94dd329d69ae8100d56e46f4d","url":"img/for-academics.svg"},{"revision":"8ba9879e8893e863f9046d1bddab75c6","url":"img/icons/icon-128x128.png"},{"revision":"d6dd32daef4ff7a2cb61e5eefa2ba8bb","url":"img/icons/icon-144x144.png"},{"revision":"816d38bbb608350c111fc5b2bc5d7775","url":"img/icons/icon-152x152.png"},{"revision":"854aadaf3168820f17609d25eacff4ae","url":"img/icons/icon-192x192.png"},{"revision":"3cb6d7620691fdd66597a595763f8c2c","url":"img/icons/icon-384x384.png"},{"revision":"673ee05e6856581a75da548b72c75726","url":"img/icons/icon-512x512.png"},{"revision":"cf2b8aed1fd511e02200995acc56cb4e","url":"img/icons/icon-72x72.png"},{"revision":"e3d30430a37ca44e2402855c44afab12","url":"img/icons/icon-96x96.png"},{"revision":"783ea354107181c72d8e1c85163bc3c7","url":"img/logo-dark.png"},{"revision":"a6c9f243bd3eb2850e2fc4c58fbaaed5","url":"img/logo-dark.svg"},{"revision":"545f2495167745f6c98a9daa76cc8cae","url":"img/logo.png"},{"revision":"5901dee81b45b5aafcbebcb4b749d2e0","url":"img/logo.svg"},{"revision":"33a278404ee13dcb73dba1240225f934","url":"img/og-image-large.png"},{"revision":"92575103964de56101749458dfb30b82","url":"img/product-screenshot.png"},{"revision":"e629256581df464a21fdfc554fea9760","url":"img/setup/app-preferences.png"},{"revision":"2e7601e68252f2769c67b327080e763f","url":"img/setup/browser-authorize-desktop.png"},{"revision":"f07712fdc2166ca3e44733c460aadb35","url":"img/setup/github-organization-dark.png"},{"revision":"cf96952155f043cf745862d0382d88e5","url":"img/setup/github-organization-dark.svg"},{"revision":"cbf0caf9a20b9b5634c2cacfc35ce6bb","url":"img/setup/github-organization.png"},{"revision":"93df6ee1b0f798f4f50341cbb7cfbded","url":"img/setup/github-organization.svg"},{"revision":"da14b2a73bfcaedad7272f4063d24084","url":"img/setup/local-home-screen-signed-in.png"},{"revision":"cd779ead312506071b77629ebfff9ef9","url":"img/setup/local-preferences-accounts-no-user.png"},{"revision":"b9c269b857152ae2488bb1c526558ee3","url":"img/setup/local-preferences-git.png"},{"revision":"b243d207ea77d898508bf4d7f77f7465","url":"img/setup/local-preferences-text-editor.png"},{"revision":"19ba258281314cb226b8d8dcb009e678","url":"img/setup/sign-in-browser-identity.png"},{"revision":"64484b856574f10f5bc38caf7ce76b74","url":"img/startyourlab.png"},{"revision":"50cc941f63184086d163a810dfad6eef","url":"img/startyourlab.svg"}],s=new b({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=[],s=new URL(e,self.location.href);return s.origin!==self.location.origin||(s.search="",s.hash="",t.push(s.href),s.pathname.endsWith("/")?t.push(`${s.href}index.html`):t.push(`${s.href}/index.html`)),t}(a);for(let r=0;r<n.length;r+=1){const i=n[r],c=s.getCacheKeyForURL(i);if(c){const s=caches.match(c);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:c,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});"SKIP_WAITING"===(t.data&&t.data.type)&&self.skipWaiting()}))})()}]);