(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{105:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return u}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var m=i.a.createContext({}),s=function(e){var n=i.a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=s(e.components);return i.a.createElement(m.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(t),b=a,u=p["".concat(o,".").concat(b)]||p[b]||d[b]||r;return t?i.a.createElement(u,c(c({ref:n},m),{},{components:t})):i.a.createElement(u,c({ref:n},m))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var m=2;m<r;m++)o[m]=t[m];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},97:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return s}));var a=t(3),i=t(8),r=(t(0),t(105)),o={id:"command-line",title:"Command Line",slug:"/command-line"},c={unversionedId:"concepts/command-line",id:"concepts/command-line",isDocsHomePage:!1,title:"Command Line",description:"Proceed with caution: This page is still under construction!",source:"@site/docs/concepts/command-line.md",slug:"/command-line",permalink:"/docs/command-line",editUrl:"https://github.com/startyourlab/website/edit/production/docs/concepts/command-line.md",version:"current",sidebar:"docs",previous:{title:"Git Goals",permalink:"/docs/tutorials/git-goals"},next:{title:"Text Editors",permalink:"/docs/text-editors"}},l=[{value:"What is the command line?",id:"what-is-the-command-line",children:[]},{value:"Does my computer have a command line?",id:"does-my-computer-have-a-command-line",children:[]},{value:"What makes something a command?",id:"what-makes-something-a-command",children:[{value:"Example commands in Bash",id:"example-commands-in-bash",children:[]}]},{value:"For Experienced Users",id:"for-experienced-users",children:[]}],m={toc:l};function s(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},m,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Proceed with caution: This page is still under construction!"))),Object(r.b)("h2",{id:"what-is-the-command-line"},"What is the command line?"),Object(r.b)("p",null,"The command line is an interface that allows you to\nprovide text-based commands for computers to execute."),Object(r.b)("h2",{id:"does-my-computer-have-a-command-line"},"Does my computer have a command line?"),Object(r.b)("p",null,"Every computer comes equipped with a system-wide command line interface (CLI) called a ",Object(r.b)("em",{parentName:"p"},"shell"),". Depending on the operating system\nof your computer, the default shell is:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"Z shell")," or ",Object(r.b)("em",{parentName:"li"},"Bash")," on macOS and Linux"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"PowerShell")," on Windows")),Object(r.b)("p",null,"These shells run programs within a ",Object(r.b)("em",{parentName:"p"},"terminal")," application, such as Terminal on macOS. While\nshells all serve a similar purpose, they are each different in various ways, including\ntheir ",Object(r.b)("em",{parentName:"p"},"command prompts"),". The prompts are "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"%")," for Z shell"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"$")," for Bash"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},">")," for PowerShell")),Object(r.b)("h2",{id:"what-makes-something-a-command"},"What makes something a command?"),Object(r.b)("p",null,"A ",Object(r.b)("em",{parentName:"p"},"command")," is made up of a sequence of arguments. In most cases, the first argument of a command\nis the ",Object(r.b)("em",{parentName:"p"},"command name"),", so we will consider a command the combination of two conceptual parts:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"The ",Object(r.b)("em",{parentName:"li"},"command name")," to express the program you wish to use, and"),Object(r.b)("li",{parentName:"ol"},"The ",Object(r.b)("em",{parentName:"li"},"arguments")," the program should consider (oftentimes split into ",Object(r.b)("em",{parentName:"li"},"options"),").")),Object(r.b)("h3",{id:"example-commands-in-bash"},"Example commands in Bash"),Object(r.b)("p",null,"Let's consider a few example commands using Bash, meaning all commands will begin\nafter the ",Object(r.b)("inlineCode",{parentName:"p"},"$")," prompt in a terminal. For this set of examples, suppose we start inside\na folder called ",Object(r.b)("inlineCode",{parentName:"p"},"parent")," that has a child folder, ",Object(r.b)("inlineCode",{parentName:"p"},"child"),". Then,\nthe child folder has two ",Object(r.b)("inlineCode",{parentName:"p"},".txt")," files inside of it. This tree diagram\nmay help visualize the nested file structure we've described:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"parent\n\u2514\u2500\u2500 child\n \xa0\xa0 \u251c\u2500\u2500 file-1.txt\n \xa0\xa0 \u2514\u2500\u2500 file-2.txt\n")),Object(r.b)("p",null,"To navigate from inside the ",Object(r.b)("inlineCode",{parentName:"p"},"parent")," folder to the ",Object(r.b)("inlineCode",{parentName:"p"},"child")," folder, run"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"$ cd child\n")),Object(r.b)("p",null,"which calls ",Object(r.b)("inlineCode",{parentName:"p"},"cd")," with an argument to go into the directory ",Object(r.b)("inlineCode",{parentName:"p"},"child"),".\nThen, if you'd like to see the contents of ",Object(r.b)("inlineCode",{parentName:"p"},"child"),", run"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"$ ls\n")),Object(r.b)("p",null,"which calls ",Object(r.b)("inlineCode",{parentName:"p"},"ls")," without arguments to list of the two files ",Object(r.b)("inlineCode",{parentName:"p"},"file-1.txt")," and ",Object(r.b)("inlineCode",{parentName:"p"},"file-2.txt")," inside of ",Object(r.b)("inlineCode",{parentName:"p"},"child"),".\nWhen it's time to navigate back to ",Object(r.b)("inlineCode",{parentName:"p"},"parent"),", run"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"$ cd ../parent\n")),Object(r.b)("p",null,"which calls ",Object(r.b)("inlineCode",{parentName:"p"},"cd")," with an argument to go up one directory (the ",Object(r.b)("inlineCode",{parentName:"p"},".."),")\nin the tree and into the ",Object(r.b)("inlineCode",{parentName:"p"},"parent")," directory (the ",Object(r.b)("inlineCode",{parentName:"p"},"/parent"),")."),Object(r.b)("h2",{id:"for-experienced-users"},"For Experienced Users"),Object(r.b)("p",null,"Once you feel more comfortable with the concept of command line tools, and have had some\nreal experience using one for a project, it's time to step up your game. While many\navenues are available, these referenced links include useful collections of materials\nto make your command line experience even better:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/jlevy/the-art-of-command-line"},"The Art of Command Line")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/herrbischoff/awesome-macos-command-line"},"MacOS Command Line"))))}s.isMDXComponent=!0}}]);