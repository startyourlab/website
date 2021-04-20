(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{125:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(135),l=a(134);var s=function(e){var t=e.metadata;return r.a.createElement("nav",{className:"pagination-nav","aria-label":Object(l.b)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},r.a.createElement("div",{className:"pagination-nav__item"},t.previous&&r.a.createElement(i.a,{className:"pagination-nav__link",to:t.previous.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},r.a.createElement(l.a,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),r.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&r.a.createElement(i.a,{className:"pagination-nav__link",to:t.next.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},r.a.createElement(l.a,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),r.a.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))},o=a(9),c=a(22),u=a(28);function d(e){var t=e.siteTitle,a=e.versionLabel;return r.a.createElement(l.a,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:r.a.createElement("strong",null,a)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")}function m(e){var t=e.siteTitle,a=e.versionLabel;return r.a.createElement(l.a,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:r.a.createElement("strong",null,a)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}function v(e){var t=e.versionLabel,a=e.to,n=e.onClick;return r.a.createElement(l.a,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label userd to tell the user that he's browsing an unmaintained doc version",values:{versionLabel:t,latestVersionLink:r.a.createElement("strong",null,r.a.createElement(i.a,{to:a,onClick:n},r.a.createElement(l.a,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}var f=function(){var e=Object(o.default)().siteConfig.title,t=Object(c.useActivePlugin)({failfast:!0}).pluginId,a=Object(u.useDocsPreferredVersion)(t).savePreferredVersionName,n=Object(c.useActiveVersion)(t),i=Object(c.useDocVersionSuggestions)(t),l=i.latestDocSuggestion,s=i.latestVersionSuggestion;if(!s)return r.a.createElement(r.a.Fragment,null);var f,b=null!=l?l:(f=s).docs.find((function(e){return e.id===f.mainDocId}));return r.a.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},r.a.createElement("div",null,"current"===n.name?r.a.createElement(d,{siteTitle:e,versionLabel:n.label}):r.a.createElement(m,{siteTitle:e,versionLabel:n.label})),r.a.createElement("div",{className:"margin-top--md"},r.a.createElement(v,{versionLabel:s.label,to:b.path,onClick:function(){return a(s.name)}})))},b=a(146),p=a(95),g=a.n(p);function h(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return r.a.createElement(l.a,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:r.a.createElement("time",{dateTime:new Date(1e3*t).toISOString(),className:g.a.lastUpdatedDate},a)}}," on {date}")}function E(e){var t=e.lastUpdatedBy;return r.a.createElement(l.a,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:r.a.createElement("strong",null,t)}}," by {user}")}function w(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,n=e.lastUpdatedBy;return r.a.createElement("div",{className:"col text--right"},r.a.createElement("em",null,r.a.createElement("small",null,r.a.createElement(l.a,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?r.a.createElement(h,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:n?r.a.createElement(E,{lastUpdatedBy:n}):""}},"Last updated{atDate}{byUser}"),!1)))}var L=a(173),N=a(174),y=a(132),O=a(96),k=a.n(O);t.default=function(e){var t,a=e.content,n=a.metadata,i=a.frontMatter,l=i.image,o=i.keywords,u=i.hide_title,d=i.hide_table_of_contents,m=n.description,v=n.title,p=n.editUrl,g=n.lastUpdatedAt,h=n.formattedLastUpdatedAt,E=n.lastUpdatedBy,O=Object(c.useActivePlugin)({failfast:!0}).pluginId,U=Object(c.useVersions)(O),_=Object(c.useActiveVersion)(O),j=U.length>1;return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{title:v,description:m,keywords:o,image:l}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:Object(y.a)("col",(t={},t[k.a.docItemCol]=!d,t))},r.a.createElement(f,null),r.a.createElement("div",{className:k.a.docItemContainer},r.a.createElement("article",null,j&&r.a.createElement("div",null,r.a.createElement("span",{className:"badge badge--secondary"},"Version: ",_.label)),!u&&r.a.createElement("header",null,r.a.createElement("h1",{className:k.a.docTitle},v)),r.a.createElement("div",{className:"markdown"},r.a.createElement(a,null))),(p||g||E)&&r.a.createElement("div",{className:"margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},p&&r.a.createElement(N.a,{editUrl:p})),(g||E)&&r.a.createElement(w,{lastUpdatedAt:g,formattedLastUpdatedAt:h,lastUpdatedBy:E}))),r.a.createElement("div",{className:"margin-vert--lg"},r.a.createElement(s,{metadata:n})))),!d&&a.toc&&r.a.createElement("div",{className:"col col--3"},r.a.createElement(L.a,{toc:a.toc}))))}},132:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},134:function(e,t,a){"use strict";a.d(t,"b",(function(){return d})),a.d(t,"a",(function(){return m}));var n=a(0),r=a.n(n),i=/{\w+}/g,l="{}";function s(e,t){var a=[],n=e.replace(i,(function(e){var n=e.substr(1,e.length-2),i=null==t?void 0:t[n];if(void 0!==i){var s=r.a.isValidElement(i)?i:String(i);return a.push(s),l}return e}));return 0===a.length?e:a.every((function(e){return"string"==typeof e}))?n.split(l).reduce((function(e,t,n){var r;return e.concat(t).concat(null!==(r=a[n])&&void 0!==r?r:"")}),""):n.split(l).reduce((function(e,t,n){return[].concat(e,[r.a.createElement(r.a.Fragment,{key:n},t,a[n])])}),[])}function o(e){return s(e.children,e.values)}var c=a(29);function u(e){var t,a=e.id,n=e.message;return null!==(t=c[null!=a?a:n])&&void 0!==t?t:n}function d(e,t){var a,n=e.message;return s(null!==(a=u({message:n,id:e.id}))&&void 0!==a?a:n,t)}function m(e){var t,a=e.children,n=e.id,i=e.values,l=null!==(t=u({message:a,id:n}))&&void 0!==t?t:a;return r.a.createElement(o,{values:i},l)}},135:function(e,t,a){"use strict";var n=a(11),r=a(0),i=a.n(r),l=a(14),s=a(140),o=a(10),c=Object(r.createContext)({collectLink:function(){}}),u=a(137);t.a=function(e){var t,a,d,m=e.isNavLink,v=e.to,f=e.href,b=e.activeClassName,p=e.isActive,g=e["data-noBrokenLinkCheck"],h=e.autoAddBaseUrl,E=void 0===h||h,w=Object(n.a)(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),L=Object(u.b)().withBaseUrl,N=Object(r.useContext)(c),y=v||f,O=Object(s.a)(y),k=null==y?void 0:y.replace("pathname://",""),U=void 0!==k?(a=k,E&&function(e){return e.startsWith("/")}(a)?L(a):a):void 0,_=Object(r.useRef)(!1),j=m?l.e:l.c,A=o.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!A&&O&&null!=U&&window.docusaurus.prefetch(U),function(){A&&d&&d.disconnect()}}),[U,A,O]);var T=null!==(t=null==U?void 0:U.startsWith("#"))&&void 0!==t&&t,C=!U||!O||T;return U&&O&&!T&&!g&&N.collectLink(U),C?i.a.createElement("a",Object.assign({href:U},y&&!O&&{target:"_blank",rel:"noopener noreferrer"},w)):i.a.createElement(j,Object.assign({},w,{onMouseEnter:function(){_.current||null==U||(window.docusaurus.preload(U),_.current=!0)},innerRef:function(e){var t,a;A&&e&&O&&(t=e,a=function(){null!=U&&window.docusaurus.prefetch(U)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(t),d.disconnect(),a())}))}))).observe(t))},to:U||""},m&&{isActive:p,activeClassName:b}))}},137:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return l}));var n=a(9),r=a(140);function i(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var i=void 0===n?{}:n,l=i.forcePrependBaseUrl,s=void 0!==l&&l,o=i.absolute,c=void 0!==o&&o;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(s)return t+a;var u=a.startsWith(t)?a:t+a.replace(/^\//,"");return c?e+u:u}(i,a,e,t)}}}function l(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},140:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},146:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(0),r=a.n(n),i=a(30),l=a(28),s=a(137);function o(e){var t=e.title,a=e.description,n=e.keywords,o=e.image,c=Object(l.useThemeConfig)().image,u=Object(l.useTitleFormatter)(t),d=Object(s.a)(o||c,{absolute:!0});return r.a.createElement(i.a,null,r.a.createElement("title",null,u),r.a.createElement("meta",{property:"og:title",content:u}),a&&r.a.createElement("meta",{name:"description",content:a}),a&&r.a.createElement("meta",{property:"og:description",content:a}),n&&r.a.createElement("meta",{name:"keywords",content:Array.isArray(n)?n.join(","):n}),d&&r.a.createElement("meta",{property:"og:image",content:d}),d&&r.a.createElement("meta",{name:"twitter:image",content:d}),d&&r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}))}},173:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(132);var l=function(e,t,a){var r=Object(n.useState)(void 0),i=r[0],l=r[1];Object(n.useEffect)((function(){function n(){var n=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=a}));if(t){if(t.getBoundingClientRect().top>=a){var n=e[e.indexOf(t)-1];return null!=n?n:t}return t}return e[e.length-1]}();if(n)for(var r=0,s=!1,o=document.getElementsByClassName(e);r<o.length&&!s;){var c=o[r],u=c.href,d=decodeURIComponent(u.substring(u.indexOf("#")+1));n.id===d&&(i&&i.classList.remove(t),c.classList.add(t),l(c),s=!0),r+=1}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},s=a(82),o=a.n(s),c="table-of-contents__link";function u(e){var t=e.toc,a=e.isChild;return t.length?r.a.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("a",{href:"#"+e.id,className:c,dangerouslySetInnerHTML:{__html:e.value}}),r.a.createElement(u,{isChild:!0,toc:e.children}))}))):null}t.a=function(e){var t=e.toc;return l(c,"table-of-contents__link--active",100),r.a.createElement("div",{className:Object(i.a)(o.a.tableOfContents,"thin-scrollbar")},r.a.createElement(u,{toc:t}))}},174:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(0),r=a.n(n),i=a(134),l=a(4),s=a(11),o=a(132),c=a(83),u=a.n(c),d=function(e){var t=e.className,a=Object(s.a)(e,["className"]);return r.a.createElement("svg",Object(l.a)({fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 40 40",className:Object(o.a)(u.a.iconEdit,t),"aria-label":"Edit page"},a),r.a.createElement("g",null,r.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function m(e){var t=e.editUrl;return r.a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},r.a.createElement(d,null),r.a.createElement(i.a,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}}}]);