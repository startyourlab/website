(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[572],{3905:function(e,t,o){"use strict";o.d(t,{Zo:function(){return c},kt:function(){return h}});var a=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(o),h=r,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||n;return o?a.createElement(m,i(i({ref:t},c),{},{components:o})):a.createElement(m,i({ref:t},c))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,i=new Array(n);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<n;u++)i[u]=o[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},8215:function(e,t,o){"use strict";var a=o(7294);t.Z=function(e){var t=e.children,o=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:o,className:r},t)}},1395:function(e,t,o){"use strict";o.d(t,{Z:function(){return c}});var a=o(7294),r=o(944),n=o(6010),i="tabItem_1uMI",l="tabItemActive_2DSg";var s=37,u=39;var c=function(e){var t=e.lazy,o=e.block,c=e.defaultValue,p=e.values,d=e.groupId,h=e.className,m=(0,r.Z)(),g=m.tabGroupChoices,f=m.setTabGroupChoices,y=(0,a.useState)(c),k=y[0],b=y[1],v=a.Children.toArray(e.children),w=[];if(null!=d){var N=g[d];null!=N&&N!==k&&p.some((function(e){return e.value===N}))&&b(N)}var C=function(e){var t=e.currentTarget,o=w.indexOf(t),a=p[o].value;b(a),null!=d&&(f(d,a),setTimeout((function(){var e,o,a,r,n,i,s,u;(e=t.getBoundingClientRect(),o=e.top,a=e.left,r=e.bottom,n=e.right,i=window,s=i.innerHeight,u=i.innerWidth,o>=0&&n<=u&&r<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},T=function(e){var t,o;switch(e.keyCode){case u:var a=w.indexOf(e.target)+1;o=w[a]||w[0];break;case s:var r=w.indexOf(e.target)-1;o=w[r]||w[w.length-1]}null==(t=o)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":o},h)},p.map((function(e){var t=e.value,o=e.label;return a.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,n.Z)("tabs__item",i,{"tabs__item--active":k===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:T,onFocus:C,onClick:C},o)}))),t?(0,a.cloneElement)(v.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},9443:function(e,t,o){"use strict";var a=(0,o(7294).createContext)(void 0);t.Z=a},944:function(e,t,o){"use strict";var a=o(7294),r=o(9443);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1054:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var a=o(2122),r=o(9756),n=(o(7294),o(3905)),i=(o(1395),o(8215),{id:"git-goals",title:"Git Goals",description:"Learn how to make your first real contribution on GitHub with the Git Goals Tutorial",keywords:["git","goal","profile","tutorial","github","learn"],slug:"/tutorials/git-goals"}),l={unversionedId:"tutorials/git-goals",id:"tutorials/git-goals",isDocsHomePage:!1,title:"Git Goals",description:"Learn how to make your first real contribution on GitHub with the Git Goals Tutorial",source:"@site/docs/tutorials/git-goals.md",sourceDirName:"tutorials",slug:"/tutorials/git-goals",permalink:"/docs/tutorials/git-goals",editUrl:"https://github.com/startyourlab/website/edit/production/docs/tutorials/git-goals.md",version:"current",lastUpdatedBy:"Ari Dyckovsky",lastUpdatedAt:1621036016,formattedLastUpdatedAt:"5/14/2021",frontMatter:{id:"git-goals",title:"Git Goals",description:"Learn how to make your first real contribution on GitHub with the Git Goals Tutorial",keywords:["git","goal","profile","tutorial","github","learn"],slug:"/tutorials/git-goals"},sidebar:"docs",previous:{title:"GitHub Desktop",permalink:"/docs/github-desktop"},next:{title:"Command Line",permalink:"/docs/command-line"}},s=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Create your git goals file",id:"create-your-git-goals-file",children:[{value:"Template for git goals file contents",id:"template-for-git-goals-file-contents",children:[]}]},{value:"Add your git goals",id:"add-your-git-goals",children:[]},{value:"Propose your changes",id:"propose-your-changes",children:[]},{value:"Create a pull request",id:"create-a-pull-request",children:[]},{value:"After your pull request",id:"after-your-pull-request",children:[]},{value:"Congratulations on your first contribution!",id:"congratulations-on-your-first-contribution",children:[{value:"Tutorial feedback",id:"tutorial-feedback",children:[]}]}],u={toc:s};function c(e){var t=e.components,o=(0,r.Z)(e,["components"]);return(0,n.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Welcome to Start Your Lab's official page for the ",(0,n.kt)("strong",{parentName:"p"},"Git Goals Tutorial"),".\nIn this tutorial you will learn how to make your first real contribution\non GitHub!"),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"Before continuing with this tutorial, you must create a user account on GitHub.\nYou can do so by ",(0,n.kt)("a",{parentName:"p",href:"/docs/github-accounts#create-your-github-user-account"},"following these instructions"),"."),(0,n.kt)("p",null,"You don't need any special software to do this tutorial - you'll participate using just the GitHub.com interface. The steps to follow for this tutorial are detailed here on this page."),(0,n.kt)("h2",{id:"create-your-git-goals-file"},"Create your git goals file"),(0,n.kt)("p",null,"The goal of this tutorial is to create a ",(0,n.kt)("em",{parentName:"p"},"git goals file"),", where you will describe yourself with a professional summary, a fun fact, and a short description of a goal you have related to best practices. For example, you can view Ari Dyckovsky's git goals file ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/startyourlab/git-goals-tutorial/blob/main/git-goals-files/community/aridyckovsky.md"},"at this link"),"."),(0,n.kt)("p",null,"To get started, open the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/startyourlab/git-goals-tutorial"},"Git Goal Tutorial's GitHub repository")," in a new browser window, and then navigate into the ",(0,n.kt)("inlineCode",{parentName:"p"},"git-goals-files")," folder on the tutorial's repository page."),(0,n.kt)("p",null,"While inside the ",(0,n.kt)("inlineCode",{parentName:"p"},"git-goals-files")," folder, click ",(0,n.kt)("strong",{parentName:"p"},"Add file > Create new file"),". Then, name your file using your GitHub username, like ",(0,n.kt)("inlineCode",{parentName:"p"},"username.md"),". Make sure to include the file extension ",(0,n.kt)("inlineCode",{parentName:"p"},".md"),"."),(0,n.kt)("p",null,"You should now copy and paste the contents of the ",(0,n.kt)("a",{parentName:"p",href:"#template-for-git-goals-file-contents"},"template text below")," into the live editor for your newly created git goals file."),(0,n.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},(0,n.kt)("inlineCode",{parentName:"p"},".md")," files are called Markdown files. They're a standard filetype that makes it easy to create formatted documents. You can learn more about Markdown documents (files ending in ",(0,n.kt)("inlineCode",{parentName:"p"},".md"),") using the ",(0,n.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/"},"Markdown Guide"),"."))),(0,n.kt)("h3",{id:"template-for-git-goals-file-contents"},"Template for git goals file contents"),(0,n.kt)("p",null,"To populate your git goals file, start with this template."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-md"},"# First Last (pronouns)\n\n## :mortar_board: Professional Summary\n\nA professional summary consisting of 2 or 3 sentences goes here.\n\n## :smile: Personal Fun Fact\n\nA personal fun fact goes here.\n\n## :white_check_mark: Best Practices Learning Goal\n\nA best practices learning goal that you intend to implement goes here.\n")),(0,n.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"This template uses ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md"},"emoji codes"),", i.e., ",(0,n.kt)("inlineCode",{parentName:"p"},":mortar_board:")," for \ud83c\udf93."))),(0,n.kt)("h2",{id:"add-your-git-goals"},"Add your git goals"),(0,n.kt)("p",null,"After creating your git goals file with the ",(0,n.kt)("a",{parentName:"p",href:"#template-for-git-goals-file-contents"},"template"),", it's time to make some updates to reflect who you are and what your Git Goals are!"),(0,n.kt)("p",null,"Since you created the file and pasted in the template yourself, you're already editing it! Now that you're in editing mode, for this tutorial we ask you to make the following changes:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Change ",(0,n.kt)("inlineCode",{parentName:"li"},"First Last")," to your name"),(0,n.kt)("li",{parentName:"ol"},"Add your pronouns next to your name"),(0,n.kt)("li",{parentName:"ol"},"Update your professional summary"),(0,n.kt)("li",{parentName:"ol"},"Include a personal fun fact"),(0,n.kt)("li",{parentName:"ol"},"Write your best practices learning goal")),(0,n.kt)("p",null,'When you think your git goals file is ready to go, you can click on the "Preview changes" button directly above the file\'s text. Simply click "Edit file" to go back to the editor. After you finish writing the contents of your git goals file, you need to "save" your changes. You\'ll do this by proposing your changes to the repository.'),(0,n.kt)("h2",{id:"propose-your-changes"},"Propose your changes"),(0,n.kt)("p",null,"Below the file editor, there's a small form with the phrase ",(0,n.kt)("strong",{parentName:"p"},"Propose changes")," or ",(0,n.kt)("strong",{parentName:"p"},"Propose new file")," at the top. This is where you write a message that briefly describes what you just did, giving enough context that someone who later wants to understand what happened in the file could read your description and know roughly what changes were made."),(0,n.kt)("p",null,'Use the provided form to write a brief title message that describes the changes you made above (just a few words, e.g. "filled out git goals profile"). You can use the larger text box below to write an extended description, which can help provide more context around your file modifications for both you and your team. Then, click the button to submit the proposed changes.'),(0,n.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"Part of the philosophy of Git is to always make changes ",(0,n.kt)("em",{parentName:"p"},"intentionally"),". That means that every time you want to integrate a change into your main code, you have to fill out a message like this summarizing what you did. When the repository is not yours or one you've explicitly been granted access to, you ",(0,n.kt)("strong",{parentName:"p"},"Propose")," changes. When the repository is yours, or someone has given you special access to it, you ",(0,n.kt)("strong",{parentName:"p"},"Commit")," changes. They function very similarly in most other respects."))),(0,n.kt)("h2",{id:"create-a-pull-request"},"Create a pull request"),(0,n.kt)("p",null,'After proposing your changes, you will be brought to a page titled "Comparing changes". This is where you will create a ',(0,n.kt)("em",{parentName:"p"},"pull request"),", which informs the Start Your Lab team that you would like to add your completed git goals file to the tutorial repository. Click ",(0,n.kt)("strong",{parentName:"p"},"Create pull request"),", and it will bring you to a text editor to describe your pull request."),(0,n.kt)("p",null,"The title of your pull request should automatically use the summary description text that you wrote in the previous step,\nand the body should look like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-md"},"# Summary of the changes made to your personal file\n\nPlease delete this line and replace it with a short summary of the changes made to your personal git goals file.\n\n")),(0,n.kt)("p",null,"To fill out the pull request's template, simply replace the ",(0,n.kt)("inlineCode",{parentName:"p"},"Please delete ...")," line with documentation of your changes.\nThere will be many other things on the page, but don't worry about them for this tutorial. When you've documented\nthe changes you made, simply click the green ",(0,n.kt)("strong",{parentName:"p"},"Create pull request")," button. This submits your request and notifies\nthe Start Your Lab team that you have made changes."),(0,n.kt)("h2",{id:"after-your-pull-request"},"After your pull request"),(0,n.kt)("p",null,"Once you submit a pull request, the process isn't over, but that's all you need to do for now! At this point, a member of the Start Your Lab team will review the proposed changes to your git goals file and make sure everything works as expected. This\nreview is ",(0,n.kt)("em",{parentName:"p"},"not")," a test and serves only as an opportunity for you to receive constructive, friendly,\nand supportive feedback on your first contribution from the Start Your Lab team."),(0,n.kt)("p",null,"If we happen to notice a way to improve your pull request, we'll let you know by leaving a\ncomment on the pull request page. If so, it's pretty easy to edit the file, and we'd be happy to guide you through that. Then, when everything\nis in tip-top shape, we can approve your changes and ",(0,n.kt)("em",{parentName:"p"},"merge")," them into the\nmain, public-facing version of the project, called the ",(0,n.kt)("em",{parentName:"p"},"main branch"),". Once your requested changes are pulled into the repository's main branch (the default, working version of the project), your pull request will be closed and you will be able to find your git goals file in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/startyourlab/git-goals-tutorial/tree/main/git-goals-files"},"main tutorial repository's ",(0,n.kt)("inlineCode",{parentName:"a"},"git-goals-files"))," folder."),(0,n.kt)("h2",{id:"congratulations-on-your-first-contribution"},"Congratulations on your first contribution!"),(0,n.kt)("p",null,"You did it! You made your first real contribution to a GitHub repository. Not too bad, right?"),(0,n.kt)("h3",{id:"tutorial-feedback"},"Tutorial feedback"),(0,n.kt)("p",null,"This tutorial is relatively new! We welcome, value, and appreciate any feedback you may have about this tutorial. You can send your feedback to ",(0,n.kt)("a",{parentName:"p",href:"mailto:feedback@startyourlab.com?subject=Git%20Goals%20Tutorial%20Feedback"},"feedback@startyourlab.com"),"."))}c.isMDXComponent=!0},6010:function(e,t,o){"use strict";function a(e){var t,o,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(o=a(e[t]))&&(r&&(r+=" "),r+=o);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,o=0,r="";o<arguments.length;)(e=arguments[o++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}o.d(t,{Z:function(){return r}})}}]);