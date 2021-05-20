(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.1.5"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.1.5"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.1.5"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.1.5"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,s),r.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),r=e=>e||n(a.precache),i=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),r=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:r.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=t&&t.cacheKey||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),r={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},i=s?s(r):r,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,i)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const y=new Set;s(873);function g(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=g(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){throw new t("plugin-error-request-will-fetch",{thrownError:e})}const r=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:r,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:r.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=g(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,r=await this.getCacheKey(t,"read"),i={...n,cacheName:a};s=await caches.match(r,i);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:r,event:this.event})||void 0;return s}async cachePut(e,s){const a=g(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const r=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(i=r.url,new URL(String(i),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var i;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const r={...a,ignoreSearch:!0},i=await e.keys(t,r);for(const t of i)if(n===d(t.url,s))return e.match(t,a)}(l,r.clone(),["__WB_REVISION__"],h):null;try{await l.put(r,u?c.clone():c)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of y)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:r,event:this.event});return!0}async getCacheKey(e,t){if(!this._cacheKeys[t]){let s=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))s=g(await e({mode:t,request:s,event:this.event,params:this.params}));this._cacheKeys[t]=s}return this._cacheKeys[t]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n={...a,state:s};return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve()}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _ extends class{constructor(e={}){this.cacheName=i(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),r=this._getResponse(n,s,t);return[r,this._awaitComplete(r,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){for(const r of e.iterateCallbacks("handlerDidError"))if(n=await r({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,r;try{n=await e}catch(r){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){r=e}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:r}),t.destroy(),r)throw r}}{constructor(e={}){e.cacheName=r(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(_.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});return a=await s.fetch(e),a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==_.copyRedirectedCacheableResponsesPlugin&&(a===_.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(_.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}_.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},_.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class v{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new _({cacheName:r(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),r="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,r),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),r=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:r,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params={cacheKey:s,...t.params},this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"97e38f4a54e0474bad94363fc2dc3dcc","url":"404.html"},{"revision":"befe9afb25c149c936900bd54b5d765b","url":"assets/css/styles.00094343.css"},{"revision":"95eaeafdf117505b0bf447ea75aeeaeb","url":"assets/js/00927e56.17290108.js"},{"revision":"a27fb174b081a2391f9d7314bd7ab496","url":"assets/js/01a85c17.ed4e2878.js"},{"revision":"b79c77c0e26249d5966c3cc276be312b","url":"assets/js/09c367c0.2de34473.js"},{"revision":"2812b4b2e7d03f3aea1c1cb0db23ba34","url":"assets/js/134.66892d20.js"},{"revision":"a65ab5ec6180263710efe56029aa029e","url":"assets/js/17896441.6eb140de.js"},{"revision":"6c642fbe723b283e74f1123754db565b","url":"assets/js/1be78505.085d4311.js"},{"revision":"6eccb0349888ef62d4fc7c0b1d297393","url":"assets/js/221cde73.95539a3b.js"},{"revision":"4822579e8b7f68ec14ab6c5b4ccbb741","url":"assets/js/2a510483.d2310e6d.js"},{"revision":"564669fbf894fcab91a0f7d729e9247d","url":"assets/js/306a8c6c.e3c967d3.js"},{"revision":"8b1b5110081749c121dabe1410d2349f","url":"assets/js/30b452fd.8a89b49e.js"},{"revision":"d470624f80beb8c44b944a89c68f2c6f","url":"assets/js/403.df54fe77.js"},{"revision":"4662d228d1c4e85952a8aefbb114417b","url":"assets/js/580.5d2a4170.js"},{"revision":"c5e834563a4264b4f197aabb107953d2","url":"assets/js/608.37fae2d8.js"},{"revision":"7b1bb418406569609de87c93598a885c","url":"assets/js/611.430e2515.js"},{"revision":"61e4e1407e9af2a9c7e6404b6c4e3c03","url":"assets/js/661d559c.f43e3fe0.js"},{"revision":"759b2e8e9b482cde7d0eb95571538fc9","url":"assets/js/6875c492.1760af9a.js"},{"revision":"9cf07cf721ae882c4acbbf7f03ccf3d1","url":"assets/js/69b6aeef.a9771ce1.js"},{"revision":"92e8dedbb8d6f91b4229280cc8b0c0f3","url":"assets/js/796.66654af7.js"},{"revision":"b7a6c58a94d1f328d0eaf9c16104fe16","url":"assets/js/8d9e30b6.b15edbce.js"},{"revision":"cba3113cf8ca3bed5bf797f751856bd8","url":"assets/js/923.d29c80dc.js"},{"revision":"bb43a509d1600bbb78854cbd1375f913","url":"assets/js/935f2afb.af0a9542.js"},{"revision":"10cbc8588108eb3bb8c803a6a618c909","url":"assets/js/a09c2993.5f801337.js"},{"revision":"732b3a570ed43a92ef77cfe9834fc816","url":"assets/js/a0b7350a.55d37725.js"},{"revision":"6719d507d8c37a8846895e928e03fb81","url":"assets/js/a6aa9e1f.4da2f27b.js"},{"revision":"0e26a48094468f681558be4d20adf104","url":"assets/js/a7023ddc.bb6fbc33.js"},{"revision":"fb0a9e1f6e0a66462aed838e17e92d5c","url":"assets/js/adc60a63.871e7e09.js"},{"revision":"f5b92ca99a937d5899d83a1c6df403ba","url":"assets/js/b2b675dd.06390d0f.js"},{"revision":"09e66ca33a0fcb5fc47492f0b8442194","url":"assets/js/bcf8cf57.6a2c881c.js"},{"revision":"fecba994ead0380ec819431f14f6d5a9","url":"assets/js/c0cda8fa.d87b6fb6.js"},{"revision":"71f5129109427431c7ebdda10c9558f4","url":"assets/js/c23c5e6d.e7bcbe38.js"},{"revision":"3b21ecb3596cd046d6a35b39375ff731","url":"assets/js/c4f5d8e4.fc44551e.js"},{"revision":"e4303a764898e8fbe09533db6df7431a","url":"assets/js/ccc49370.77d32536.js"},{"revision":"254513bffb0805a8a34f0551754ade45","url":"assets/js/e3f34e86.1947959d.js"},{"revision":"ad1db893daef0f9da4c5db340b5c8785","url":"assets/js/e60aca67.d792001a.js"},{"revision":"780d47c999ac6ede15804eea1651c0da","url":"assets/js/e747ec83.1c961bc1.js"},{"revision":"dd668198e8aa65a88582029c2a5e4d95","url":"assets/js/f6ba3702.151b238f.js"},{"revision":"9e2a0af9fdee59754935c6a661784ba3","url":"assets/js/main.6d9f36b1.js"},{"revision":"bceb5de315feed1b42bb8fe5100d1360","url":"assets/js/runtime~main.b188e7ea.js"},{"revision":"b96c0204ad40a97cf649b8cd506cffed","url":"blog/index.html"},{"revision":"8e20f612c65894c7958d4d0de53b1240","url":"blog/tags/index.html"},{"revision":"1c518e8abe224dcb91871b09cdb6544e","url":"blog/tags/welcome/index.html"},{"revision":"b97a81bffd3ac4a0c495c41d3ea87674","url":"blog/welcome/index.html"},{"revision":"7308adfc49e093acaea7de670c2aa06a","url":"community/contributing/index.html"},{"revision":"4164c24fa110881c178e0c0dbdb06c64","url":"community/labs/index.html"},{"revision":"e31bf19cb8f6458f310b6c51752a5c3d","url":"community/resources/index.html"},{"revision":"9efa958f718e9608ecc4f9ae44bbfeed","url":"community/support/index.html"},{"revision":"b8fa674fbe98f87745c32b484ae2a197","url":"community/team/index.html"},{"revision":"230b731ca45f2a33b9ef1df6633f5071","url":"docs/command-line/index.html"},{"revision":"a09953d0fe4a2e72ae8bb7d491cc0d31","url":"docs/github-accounts/index.html"},{"revision":"f6a19aa1ab20fc40de6e66398719ed8e","url":"docs/github-desktop/index.html"},{"revision":"bd9aa1a44bf8beb36dc9a0f9c23cc40f","url":"docs/github-organizations/index.html"},{"revision":"b384bf8b1783eaf5da140775aaa61319","url":"docs/glossary/index.html"},{"revision":"fe87a20b9a41cd4e1fd32591e1bb120a","url":"docs/index.html"},{"revision":"0aa97c34515816649227e986b6c5b7b6","url":"docs/text-editors/index.html"},{"revision":"ed4f481c37afb4ed42a3b04acb336339","url":"docs/tutorials/git-goals/index.html"},{"revision":"7107c3a10aa2a6af9c1a2cd73d25a562","url":"docs/tutorials/your-first-commit/index.html"},{"revision":"5c6dac9d5e888064f7e3cd2fc059c09c","url":"index.html"},{"revision":"d6aa51ca817406e77d91a56be29b8a3d","url":"manifest.json"},{"revision":"e629256581df464a21fdfc554fea9760","url":"assets/images/app-preferences-fbd9bc3ea8ff76d4256ca7919d043bb0.png"},{"revision":"2e7601e68252f2769c67b327080e763f","url":"assets/images/browser-authorize-desktop-58741470c9a69b8bd4e71a23ad29d1bc.png"},{"revision":"da14b2a73bfcaedad7272f4063d24084","url":"assets/images/local-home-screen-signed-in-aba73884d69a5e1b36d806918fe1eab0.png"},{"revision":"cd779ead312506071b77629ebfff9ef9","url":"assets/images/local-preferences-accounts-no-user-c6bc82ecb345fda2f000575e00392dcc.png"},{"revision":"e2e2bafdcd1926e94060480eab1dd09c","url":"img/best-practices.svg"},{"revision":"64484b856574f10f5bc38caf7ce76b74","url":"img/brandmark.png"},{"revision":"1a8a915407d758dcd261fe2d0e0b0214","url":"img/collaborate-with-digital-tools.svg"},{"revision":"9253ec4697d9a0789f4f0c56727b989c","url":"img/favicon.ico"},{"revision":"9fe10ab94dd329d69ae8100d56e46f4d","url":"img/for-academics.svg"},{"revision":"8ba9879e8893e863f9046d1bddab75c6","url":"img/icons/icon-128x128.png"},{"revision":"d6dd32daef4ff7a2cb61e5eefa2ba8bb","url":"img/icons/icon-144x144.png"},{"revision":"816d38bbb608350c111fc5b2bc5d7775","url":"img/icons/icon-152x152.png"},{"revision":"854aadaf3168820f17609d25eacff4ae","url":"img/icons/icon-192x192.png"},{"revision":"3cb6d7620691fdd66597a595763f8c2c","url":"img/icons/icon-384x384.png"},{"revision":"673ee05e6856581a75da548b72c75726","url":"img/icons/icon-512x512.png"},{"revision":"cf2b8aed1fd511e02200995acc56cb4e","url":"img/icons/icon-72x72.png"},{"revision":"e3d30430a37ca44e2402855c44afab12","url":"img/icons/icon-96x96.png"},{"revision":"783ea354107181c72d8e1c85163bc3c7","url":"img/logo-dark.png"},{"revision":"a6c9f243bd3eb2850e2fc4c58fbaaed5","url":"img/logo-dark.svg"},{"revision":"545f2495167745f6c98a9daa76cc8cae","url":"img/logo.png"},{"revision":"5901dee81b45b5aafcbebcb4b749d2e0","url":"img/logo.svg"},{"revision":"33a278404ee13dcb73dba1240225f934","url":"img/og-image-large.png"},{"revision":"92575103964de56101749458dfb30b82","url":"img/product-screenshot.png"},{"revision":"e629256581df464a21fdfc554fea9760","url":"img/setup/app-preferences.png"},{"revision":"2e7601e68252f2769c67b327080e763f","url":"img/setup/browser-authorize-desktop.png"},{"revision":"f07712fdc2166ca3e44733c460aadb35","url":"img/setup/github-organization-dark.png"},{"revision":"cf96952155f043cf745862d0382d88e5","url":"img/setup/github-organization-dark.svg"},{"revision":"cbf0caf9a20b9b5634c2cacfc35ce6bb","url":"img/setup/github-organization.png"},{"revision":"93df6ee1b0f798f4f50341cbb7cfbded","url":"img/setup/github-organization.svg"},{"revision":"da14b2a73bfcaedad7272f4063d24084","url":"img/setup/local-home-screen-signed-in.png"},{"revision":"cd779ead312506071b77629ebfff9ef9","url":"img/setup/local-preferences-accounts-no-user.png"},{"revision":"b9c269b857152ae2488bb1c526558ee3","url":"img/setup/local-preferences-git.png"},{"revision":"b243d207ea77d898508bf4d7f77f7465","url":"img/setup/local-preferences-text-editor.png"},{"revision":"19ba258281314cb226b8d8dcb009e678","url":"img/setup/sign-in-browser-identity.png"},{"revision":"64484b856574f10f5bc38caf7ce76b74","url":"img/startyourlab.png"},{"revision":"50cc941f63184086d163a810dfad6eef","url":"img/startyourlab.svg"}],s=new v({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=[],s=new URL(e,self.location.href);return s.origin!==self.location.origin||(s.search="",s.hash="",t.push(s.href),s.pathname.endsWith("/")?t.push(`${s.href}index.html`):t.push(`${s.href}/index.html`)),t}(a);for(let r=0;r<n.length;r+=1){const i=n[r],c=s.getCacheKeyForURL(i);if(c){const s=caches.match(c);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:c,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});"SKIP_WAITING"===(t.data&&t.data.type)&&self.skipWaiting()}))})()})()})();