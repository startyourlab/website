(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{132:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},134:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return f}));var r=n(0),a=n.n(r),o=/{\w+}/g,u="{}";function i(e,t){var n=[],r=e.replace(o,(function(e){var r=e.substr(1,e.length-2),o=null==t?void 0:t[r];if(void 0!==o){var i=a.a.isValidElement(o)?o:String(o);return n.push(i),u}return e}));return 0===n.length?e:n.every((function(e){return"string"==typeof e}))?r.split(u).reduce((function(e,t,r){var a;return e.concat(t).concat(null!==(a=n[r])&&void 0!==a?a:"")}),""):r.split(u).reduce((function(e,t,r){return[].concat(e,[a.a.createElement(a.a.Fragment,{key:r},t,n[r])])}),[])}function l(e){return i(e.children,e.values)}var c=n(29);function s(e){var t,n=e.id,r=e.message;return null!==(t=c[null!=n?n:r])&&void 0!==t?t:r}function d(e,t){var n,r=e.message;return i(null!==(n=s({message:r,id:e.id}))&&void 0!==n?n:r,t)}function f(e){var t,n=e.children,r=e.id,o=e.values,u=null!==(t=s({message:n,id:r}))&&void 0!==t?t:n;return a.a.createElement(l,{values:o},u)}},450:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var r=n(0),a=n.n(r),o=n(132),u=n(134),i=n(124),l=n.n(i);function c(e){var t=e.onReload,n=Object(r.useState)(!0),i=n[0],c=n[1];return i&&a.a.createElement("div",{className:Object(o.a)("alert","alert--secondary",l.a.popup)},a.a.createElement("p",null,a.a.createElement(u.a,{id:"theme.PwaReloadPopup.info",description:"The text for PWA reload popup"},"New version available")),a.a.createElement("div",{className:l.a.buttonContainer},a.a.createElement("button",{className:"button button--link",type:"button",onClick:function(){c(!1),t()}},a.a.createElement(u.a,{id:"theme.PwaReloadPopup.refreshButtonText",description:"The text for PWA reload button"},"Refresh")),a.a.createElement("button",{"aria-label":Object(u.b)({id:"theme.PwaReloadPopup.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of PWA reload popup"}),className:"close",type:"button",onClick:function(){return c(!1)}},a.a.createElement("span",{"aria-hidden":"true"},"\xd7"))))}}}]);