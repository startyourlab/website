(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{105:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),c=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||a;return n?r.a.createElement(m,l(l({ref:t},u),{},{components:n})):r.a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return c}));var o=n(3),r=n(8),a=(n(0),n(105)),i={id:"git-goals",title:"Git Goals",description:"Learn how to make your first real contribution on GitHub",slug:"/tutorials/git-goals"},l={unversionedId:"tutorials/git-goals",id:"tutorials/git-goals",isDocsHomePage:!1,title:"Git Goals",description:"Learn how to make your first real contribution on GitHub",source:"@site/docs/tutorials/git-goals.md",slug:"/tutorials/git-goals",permalink:"/docs/tutorials/git-goals",editUrl:"https://github.com/startyourlab/website/edit/production/docs/tutorials/git-goals.md",version:"current",sidebar:"docs",previous:{title:"GitHub Accounts",permalink:"/docs/github-accounts"},next:{title:"Command Line",permalink:"/docs/command-line"}},s=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Setup",id:"setup",children:[]},{value:"Create your personal file",id:"create-your-personal-file",children:[{value:"Workshop participants",id:"workshop-participants",children:[]}]},{value:"Edit your personal file",id:"edit-your-personal-file",children:[]},{value:"Commit your changes",id:"commit-your-changes",children:[]},{value:"Create a pull request",id:"create-a-pull-request",children:[]},{value:"After your pull request",id:"after-your-pull-request",children:[]},{value:"Congratulations on your first contribution!",id:"congratulations-on-your-first-contribution",children:[]}],u={toc:s};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Welcome to Start Your Lab's official page for the ",Object(a.b)("strong",{parentName:"p"},"Git Goals Tutorial"),".\nIn this tutorial you will learn how to make your first real contribution\non GitHub!"),Object(a.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(a.b)("p",null,"Before continuing with this tutorial, please create a user account on GitHub.\nYou can do so by ",Object(a.b)("a",{parentName:"p",href:"/docs/github-accounts#create-your-github-user-account"},"following these instructions"),"."),Object(a.b)("h2",{id:"setup"},"Setup"),Object(a.b)("p",null,"Open the ",Object(a.b)("a",{parentName:"p",href:"https://github.com/startyourlab/git-goals-tutorial"},"tutorial repository"),". You will\nuse GitHub's web interface to implement each of the steps detailed below."),Object(a.b)("h2",{id:"create-your-personal-file"},"Create your personal file"),Object(a.b)("p",null,"We invite you to create your personal file within the ",Object(a.b)("inlineCode",{parentName:"p"},"community")," folder.\nWhen inside the folder, click ",Object(a.b)("strong",{parentName:"p"},"Add file > Create new file"),". Then, name your file\nusing your GitHub username, like ",Object(a.b)("inlineCode",{parentName:"p"},"username.md"),". Make sure to include the file\nextension ",Object(a.b)("inlineCode",{parentName:"p"},".md"),"."),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"You can learn more about files ending in ",Object(a.b)("inlineCode",{parentName:"p"},".md")," using the the ",Object(a.b)("a",{parentName:"p",href:"https://www.markdownguide.org/"},"Markdown Guide"),"."))),Object(a.b)("h3",{id:"workshop-participants"},"Workshop participants"),Object(a.b)("p",null,"If you are doing this tutorial after participating in an official Start Your Lab workshop,\nplease navigate into your workshop's folder, which you can find by looking for a blue\nfolder icon next to a name that identifies your workshop, such as ",Object(a.b)("inlineCode",{parentName:"p"},"du-psych"),".\nOpen your personal file by clicking on the associated filename ending in ",Object(a.b)("inlineCode",{parentName:"p"},".md"),"."),Object(a.b)("p",null,"Can't find your named file? Please feel free to create one inside of your\nworkshop's folder by clicking ",Object(a.b)("strong",{parentName:"p"},"Add file > Create new file"),". Then, name your file\nusing your first and last name, like ",Object(a.b)("inlineCode",{parentName:"p"},"first-last.md"),". Make sure to include the file\nextension ",Object(a.b)("inlineCode",{parentName:"p"},".md"),"."),Object(a.b)("h2",{id:"edit-your-personal-file"},"Edit your personal file"),Object(a.b)("p",null,"With your file page open, it's time to make some updates to reflect who you are\nand what your Git Goals are."),Object(a.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"Use the ",Object(a.b)("strong",{parentName:"p"},"Preview")," tab to check how the edits you make affect the file's appearance."))),Object(a.b)("p",null,"For this tutorial, we ask you to make the following changes:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},'Change "First Last" to your name'),Object(a.b)("li",{parentName:"ol"},"Add your pronouns next to your name"),Object(a.b)("li",{parentName:"ol"},"Update your professional summary"),Object(a.b)("li",{parentName:"ol"},"Include a personal fun fact"),Object(a.b)("li",{parentName:"ol"},"Write your best practices learning goal")),Object(a.b)("p",null,"When you've completed these five steps, you should head to the next step to commit\nyour changes. Of course, after you finish this tutorial, we ",Object(a.b)("em",{parentName:"p"},"highly")," encourage using\nyour imagination to personalize your file even more."),Object(a.b)("h2",{id:"commit-your-changes"},"Commit your changes"),Object(a.b)("p",null,"Scroll further down on the same page to the ",Object(a.b)("strong",{parentName:"p"},"Commit changes")," form, and write a summary description of\nthe changes you made above (5-10 words). You can use the extra text field to write an extended description."),Object(a.b)("p",null,"Then, select the option to \u201cCreate a ",Object(a.b)("strong",{parentName:"p"},"new branch")," for this commit and start a pull request.\u201d\nIn the provided text input, rename the branch (of the form ",Object(a.b)("inlineCode",{parentName:"p"},"username-patch-1"),") to ",Object(a.b)("inlineCode",{parentName:"p"},"username-patch-descriptive-phrase"),"\n(i.e., ",Object(a.b)("inlineCode",{parentName:"p"},"username-patch-pronouns"),"). Click ",Object(a.b)("strong",{parentName:"p"},"Propose changes"),"."),Object(a.b)("h2",{id:"create-a-pull-request"},"Create a pull request"),Object(a.b)("p",null,"After committing your changes, you will be asked to create a pull request.\nThe title of your pull request should be the summary description you wrote in the previous step,\nand the body should look like the following code block: "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-md"},"# Summary of the changes made to your personal file\n\nPlease delete this line and replace it with a short summary of the changes made to your personal file.\n\n")),Object(a.b)("p",null,"To fill out the template, simply replace the ",Object(a.b)("inlineCode",{parentName:"p"},"Please delete ...")," line with documentation of your changes.\nThere will be many other things on the page, but don't worry about them for this tutorial. When you've documented\nthe changes you made, simply click the green ",Object(a.b)("strong",{parentName:"p"},"Create pull request")," button. This submits your request and notifies\nthe Start Your Lab team that you have made changes."),Object(a.b)("h2",{id:"after-your-pull-request"},"After your pull request"),Object(a.b)("p",null,"Once you submit a pull request, a member of the Start Your Lab team will review the\nproposed changes to your personal file to make sure everything works as expected. This\nreview is ",Object(a.b)("em",{parentName:"p"},"not")," a test and serves only as an opportunity for you to receive constructive, friendly,\nand supportive feedback on your first contribution from the Start Your Lab team."),Object(a.b)("p",null,"If we happen to notice a way to improve your pull request, we'll let you know by leaving a\ncomment on the pull request page. Then, when everything\nis in tip-top shape, we can approve your changes and merge your changes into the\nmain, public-facing version of the project."),Object(a.b)("h2",{id:"congratulations-on-your-first-contribution"},"Congratulations on your first contribution!"),Object(a.b)("p",null,"You did it! You made your first real contribution to a GitHub repository."))}c.isMDXComponent=!0}}]);