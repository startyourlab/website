(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[524],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),c=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},l=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},g={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,l=u(t,["components","mdxType","originalType","parentName"]),m=c(n),d=a,b=m["".concat(s,".").concat(d)]||m[d]||g[d]||i;return n?r.createElement(b,o(o({ref:e},l),{},{components:n})):r.createElement(b,o({ref:e},l))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=m;var u={};for(var s in e)hasOwnProperty.call(e,s)&&(u[s]=e[s]);u.originalType=t,u.mdxType="string"==typeof t?t:a,o[1]=u;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2924:function(t,e,n){"use strict";var r=n(7294).createContext(void 0);e.Z=r},8465:function(t,e,n){"use strict";n.d(e,{Z:function(){return l}});var r=n(2122),a=n(9756),i=n(7294),o=n(6010),u=n(2263),s=n(5350),c={themedImage:"themedImage_1VuW","themedImage--light":"themedImage--light_3UqQ","themedImage--dark":"themedImage--dark_hz6m"},l=function(t){var e=(0,u.default)().isClient,n=(0,s.Z)().isDarkTheme,l=t.sources,g=t.className,m=t.alt,d=void 0===m?"":m,b=(0,a.Z)(t,["sources","className","alt"]),p=e?n?["dark"]:["light"]:["light","dark"];return i.createElement(i.Fragment,null,p.map((function(t){return i.createElement("img",(0,r.Z)({key:t,src:l[t],alt:d,className:(0,o.Z)(c.themedImage,c["themedImage--"+t],g)},b))})))}},5350:function(t,e,n){"use strict";var r=n(7294),a=n(2924);e.Z=function(){var t=(0,r.useContext)(a.Z);if(null==t)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://docusaurus.io/docs/api/themes/configuration#usethemecontext.");return t}},6297:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return g}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=n(8465),u={id:"github-organizations",title:"GitHub Organizations",description:"A guide to configure your lab's GitHub Organization",keywords:["github","git","lab","team","setup"],slug:"/github-organizations"},s={unversionedId:"setup/github-organizations",id:"setup/github-organizations",isDocsHomePage:!1,title:"GitHub Organizations",description:"A guide to configure your lab's GitHub Organization",source:"@site/docs/setup/github-organizations.mdx",sourceDirName:"setup",slug:"/github-organizations",permalink:"/docs/github-organizations",editUrl:"https://github.com/startyourlab/website/edit/production/docs/setup/github-organizations.mdx",version:"current",lastUpdatedBy:"Ari Dyckovsky",lastUpdatedAt:1619296231,formattedLastUpdatedAt:"4/24/2021",frontMatter:{id:"github-organizations",title:"GitHub Organizations",description:"A guide to configure your lab's GitHub Organization",keywords:["github","git","lab","team","setup"],slug:"/github-organizations"},sidebar:"docs",previous:{title:"GitHub Accounts",permalink:"/docs/github-accounts"},next:{title:"GitHub Desktop",permalink:"/docs/github-desktop"}},c=[{value:"Create your lab&#39;s GitHub organization",id:"create-your-labs-github-organization",children:[]},{value:"Configure your lab&#39;s GitHub organization",id:"configure-your-labs-github-organization",children:[]},{value:"Invite lab members to the lab&#39;s GitHub",id:"invite-lab-members-to-the-labs-github",children:[]}],l={toc:c};function g(t){var e=t.components,n=(0,a.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To work on projects as a team effectively and efficiently, your lab needs a GitHub organization account. An organization serves as your lab's shared account to facilitate collaboration on multiple projects at once. For example, any new collaborators or lab members can simply be added to the organization with one or two clicks, and thereby be given access to all GitHub-related materials for the lab. Once you create your lab's organization, you can then invite your lab members who have already ",(0,i.kt)("a",{parentName:"p",href:"/docs/github-accounts#create-your-github-user-account"},"created GitHub user accounts")," to join."),(0,i.kt)("div",{style:{textAlign:"center",paddingTop:"1em",paddingBottom:"1em"}},(0,i.kt)(o.Z,{alt:"Your Lab as a GitHub Organization Diagram",sources:{light:"/img/setup/github-organization.svg",dark:"/img/setup/github-organization-dark.svg"},mdxType:"ThemedImage"})),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Proceed with caution: This page is still under construction!"))),(0,i.kt)("h2",{id:"create-your-labs-github-organization"},"Create your lab's GitHub organization"),(0,i.kt)("p",null,"To create your lab's organization, follow the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch"},"instructions from GitHub here"),"."),(0,i.kt)("h2",{id:"configure-your-labs-github-organization"},"Configure your lab's GitHub organization"),(0,i.kt)("p",null,"Then, you will need to configure your lab's GitHub organization by customizing the settings."),(0,i.kt)("h2",{id:"invite-lab-members-to-the-labs-github"},"Invite lab members to the lab's GitHub"),(0,i.kt)("p",null,"Ask each lab member to ",(0,i.kt)("a",{parentName:"p",href:"#create-your-gitHub-user-account"},"create an account")," if they have not already, and then to ",(0,i.kt)("a",{parentName:"p",href:"#configure-your-account"},"configure it"),". When done, ask for their username."),(0,i.kt)("p",null,"Then, invite that username to the organization."))}g.isMDXComponent=!0},6010:function(t,e,n){"use strict";function r(t){var e,n,a="";if("string"==typeof t||"number"==typeof t)a+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=r(t[e]))&&(a&&(a+=" "),a+=n);else for(e in t)t[e]&&(a&&(a+=" "),a+=e);return a}function a(){for(var t,e,n=0,a="";n<arguments.length;)(t=arguments[n++])&&(e=r(t))&&(a&&(a+=" "),a+=e);return a}n.d(e,{Z:function(){return a}})}}]);