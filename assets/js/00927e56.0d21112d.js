(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{134:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),c=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=c(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),b=c(n),d=a,m=b["".concat(i,".").concat(d)]||b[d]||p[d]||r;return n?o.a.createElement(m,s(s({ref:t},l),{},{components:n})):o.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return c}));var a=n(4),o=n(11),r=(n(0),n(134)),i={id:"contributing",title:"Contributing",description:"Learn how you can contribute to Start Your Lab. We welcome community contributions."},s={unversionedId:"contributing",id:"contributing",isDocsHomePage:!1,title:"Contributing",description:"Learn how you can contribute to Start Your Lab. We welcome community contributions.",source:"@site/community/contributing.md",sourceDirName:".",slug:"/contributing",permalink:"/community/contributing",editUrl:"https://github.com/startyourlab/website/edit/production/community/contributing.md",version:"current",lastUpdatedBy:"Ari Dyckovsky",lastUpdatedAt:1619052392,formattedLastUpdatedAt:"4/22/2021",frontMatter:{id:"contributing",title:"Contributing",description:"Learn how you can contribute to Start Your Lab. We welcome community contributions."},sidebar:"community",previous:{title:"Resources",permalink:"/community/resources"}},u=[{value:"Code of Conduct",id:"code-of-conduct",children:[]},{value:"Get involved",id:"get-involved",children:[]},{value:"Our development process",id:"our-development-process",children:[{value:"Reporting new issues",id:"reporting-new-issues",children:[]},{value:"Reporting bugs",id:"reporting-bugs",children:[]}]},{value:"Working on Start Your Lab code",id:"working-on-startyourlab-code",children:[{value:"Installation",id:"installation",children:[]},{value:"Semantic commit messages",id:"semantic-commit-messages",children:[]},{value:"Code conventions",id:"code-conventions",children:[]}]},{value:"Pull requests",id:"pull-requests",children:[{value:"Your first pull request",id:"your-first-pull-request",children:[]},{value:"Proposing a change",id:"proposing-a-change",children:[]},{value:"Sending a pull request",id:"sending-a-pull-request",children:[]},{value:"What happens next?",id:"what-happens-next",children:[]}]},{value:"License",id:"license",children:[]}],l={toc:u};function c(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://www.startyourlab.com/"},"Start Your Lab")," is currently in development. We have ",Object(r.b)("a",{parentName:"p",href:"/community/labs"},"early adopters who already use our Start Your Lab to work more effectively and efficiently together"),". We welcome you to collaborate with us on Start Your Lab's materials as a contributor."),Object(r.b)("p",null,"The ",Object(r.b)("a",{parentName:"p",href:"https://opensource.guide/"},"Open Source Guides")," website has a collection of resources for individuals, communities, and companies who want to learn how to run and contribute to an open source project like Start Your Lab. Contributors and people new to open source alike will find the following guides especially useful:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://opensource.guide/how-to-contribute/"},"How to Contribute to Open Source")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://opensource.guide/building-community/"},"Building Welcoming Communities"))),Object(r.b)("h2",{id:"code-of-conduct"},Object(r.b)("a",{parentName:"h2",href:"https://github.com/startyourlab/.github/blob/main/CODE_OF_CONDUCT.md"},"Code of Conduct")),Object(r.b)("p",null,"Start Your Lab has adopted a Code of Conduct that we expect our community members to adhere to. Please read ",Object(r.b)("a",{parentName:"p",href:"https://github.com/startyourlab/.github/blob/main/CODE_OF_CONDUCT.md"},"the full text")," so that you can understand what behaviors will and will not be tolerated."),Object(r.b)("h2",{id:"get-involved"},"Get involved"),Object(r.b)("p",null,"There are many ways to contribute to Start Your Lab, and many of them ",Object(r.b)("strong",{parentName:"p"},"do not involve writing any code"),". Here are a few ideas to get involved:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Start using Start Your Lab! Check out the ",Object(r.b)("a",{parentName:"li",href:"/docs"},"docs"),", read the ",Object(r.b)("a",{parentName:"li",href:"/blog"},"blog"),", and learn more through our ",Object(r.b)("a",{parentName:"li",href:"/community/resources"},"resources"),". Does everything work as expected? If not, we're always looking for ways to improve this site's interface to support academic researchers like you. Let us know by ",Object(r.b)("a",{parentName:"li",href:"#reporting-new-issues"},"opening an issue"),"."),Object(r.b)("li",{parentName:"ul"},"Look through the ",Object(r.b)("a",{parentName:"li",href:"https://github.com/startyourlab/website/issues"},"open issues"),". If you find an issue you would like to fix, ",Object(r.b)("a",{parentName:"li",href:"#your-first-pull-request"},"open a pull request"),". Issues tagged as ",Object(r.b)("a",{parentName:"li",href:"https://github.com/startyourlab/website/labels/good%20first%20issue"},Object(r.b)("em",{parentName:"a"},"good first issue"))," are a good place to get started."),Object(r.b)("li",{parentName:"ul"},"Help us making the materials better. ",Object(r.b)("a",{parentName:"li",href:"#reporting-new-issues"},"File an issue")," if you find anything that is confusing or can be improved."),Object(r.b)("li",{parentName:"ul"},"Take a look at the ",Object(r.b)("a",{parentName:"li",href:"https://github.com/startyourlab/website/labels/enhancement"},"features requested")," by others in the community and consider opening a pull request if you see something you want to work on.")),Object(r.b)("p",null,"Contributions are very welcome. If you think you need help planning your contribution, please contact us on Twitter at ",Object(r.b)("a",{parentName:"p",href:"https://twitter.com/startyourlab"},"@startyourlab")," and let us know you are looking for a bit of help. We typically respond within a day or two, and often faster!"),Object(r.b)("h2",{id:"our-development-process"},"Our development process"),Object(r.b)("p",null,"Start Your Lab uses ",Object(r.b)("a",{parentName:"p",href:"https://github.com/startyourlab/website"},"GitHub")," as its source of truth. The active team will be working directly there. All changes will be, and have been, public from the beginning."),Object(r.b)("p",null,"When a change made on GitHub is approved, it will be checked by our continuous integration system that deploys our website to GitHub Pages."),Object(r.b)("h3",{id:"reporting-new-issues"},"Reporting new issues"),Object(r.b)("p",null,"When ",Object(r.b)("a",{parentName:"p",href:"https://github.com/startyourlab/website/issues/new/choose"},"opening a new issue"),", always make sure to fill out the issue template. ",Object(r.b)("strong",{parentName:"p"},"This step is very important!")," Not doing so may result in your issue not being managed in a timely fashion by a member of the ",Object(r.b)("a",{parentName:"p",href:"/community/team#active-team"},"active team")," that maintains Start Your Lab. If this happens, don't take it personally, and feel free to open a new issue once you've gathered all the information required by the template."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"One bug, one issue:")," Please report a single bug per issue."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Provide reproduction steps:")," List all the steps necessary to reproduce the issue. The person reading your bug report should be able to follow these steps to reproduce your issue with minimal effort.")),Object(r.b)("h3",{id:"reporting-bugs"},"Reporting bugs"),Object(r.b)("p",null,"We use ",Object(r.b)("a",{parentName:"p",href:"https://github.com/startyourlab/website/issues"},"GitHub Issues")," for tracking, discussing, and fixing our site's bugs. If you would like to report a problem, take a look around and see if someone already opened an issue about it. If you a are certain this is a new, unreported bug, you can submit a ",Object(r.b)("a",{parentName:"p",href:"#reporting-new-issues"},"bug report"),"."),Object(r.b)("p",null,"If you have questions about using Start Your Lab, contact the Start Your Lab Twitter account at ",Object(r.b)("a",{parentName:"p",href:"https://twitter.com/startyourlab"},"@startyourlab"),", and we will do our best to answer your questions."),Object(r.b)("p",null,"You can also file issues as ",Object(r.b)("a",{parentName:"p",href:"https://github.com/startyourlab/website/labels/feature"},"feature requests or enhancements"),". If you see anything you'd like to be implemented, create an issue with the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/startyourlab/website/issues/new?assignees=&labels=feature%2C+needs+triage&template=feature_request.md"},"feature request template")),Object(r.b)("h2",{id:"working-on-startyourlab-code"},"Working on Start Your Lab code"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"This section ",Object(r.b)("em",{parentName:"p"},"does")," require some experience with writing code."))),Object(r.b)("h3",{id:"installation"},"Installation"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Ensure you have ",Object(r.b)("a",{parentName:"li",href:"https://yarnpkg.com/"},"Yarn")," installed"),Object(r.b)("li",{parentName:"ol"},"After cloning the repository, run ",Object(r.b)("inlineCode",{parentName:"li"},"yarn install")," in the root of the repository"),Object(r.b)("li",{parentName:"ol"},"To start a local development server serving the Start Your Lab site, run ",Object(r.b)("inlineCode",{parentName:"li"},"yarn start")," from the root of the ",Object(r.b)("inlineCode",{parentName:"li"},"website")," repository.")),Object(r.b)("h3",{id:"semantic-commit-messages"},"Semantic commit messages"),Object(r.b)("p",null,"See how a minor change to your commit message style can make you a better programmer."),Object(r.b)("p",null,"Format: ",Object(r.b)("inlineCode",{parentName:"p"},"<type>(<scope>): <subject>")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"<scope>")," is optional"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Example")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"feat: allow overriding of webpack config\n^--^  ^------------^\n|     |\n|     +-> Summary in present tense.\n|\n+-------\x3e Type: chore, docs, feat, fix, refactor, style, or test.\n")),Object(r.b)("p",null,"The various types of commits:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"feat"),": (new feature for the user, not a new feature for build script)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"fix"),": (bug fix for the user, not a fix to a build script)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"docs"),": (changes to the documentation)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"style"),": (formatting, missing semi colons, etc; no production code change)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"refactor"),": (refactoring production code, eg. renaming a variable)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"test"),": (adding missing tests, refactoring tests; no production code change)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"chore"),": (updating grunt tasks etc; no production code change)")),Object(r.b)("p",null,"Please use ",Object(r.b)("strong",{parentName:"p"},"lower case commit messages"),", not title case!"),Object(r.b)("h3",{id:"code-conventions"},"Code conventions"),Object(r.b)("h4",{id:"style-guide"},"Style guide"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://prettier.io/"},"Prettier")," will catch most styling issues that may exist in your code. You can check the status of your code styling by simply running ",Object(r.b)("inlineCode",{parentName:"p"},"npm run prettier"),"."),Object(r.b)("p",null,"However, there are still some styles that Prettier cannot pick up."),Object(r.b)("h4",{id:"general"},"General"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Most important: Look around.")," Match the style you see used in the rest of the project. This includes formatting, naming files, naming things in code, naming things in documentation."),Object(r.b)("li",{parentName:"ul"},"Ask us! If you aren't sure, we'd love to help you learn how to contribute great code.")),Object(r.b)("h4",{id:"documentation"},"Documentation"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Do not wrap lines at 80 characters. Please configure your editor to soft-wrap when editing documentation.")),Object(r.b)("h2",{id:"pull-requests"},"Pull requests"),Object(r.b)("h3",{id:"your-first-pull-request"},"Your first pull request"),Object(r.b)("p",null,"So you have decided to contribute code to our site by opening a pull request. You've invested a good chunk of time, and we appreciate it. We will do our best to work with you and get the pull request looked at."),Object(r.b)("p",null,"Working on your first Pull Request via GitHub? We suggest trying our ",Object(r.b)("a",{parentName:"p",href:"/docs/tutorials/git-goals"},"Git Goals Tutorial")," before anything else. You can also learn how from this free video series:"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github"},Object(r.b)("strong",{parentName:"a"},"How to Contribute to an Open Source Project on GitHub"))),Object(r.b)("p",null,"We have a list of ",Object(r.b)("a",{parentName:"p",href:"https://github.com/startyourlab/website/labels/good%20first%20issue"},"beginner friendly issues")," to help you get your feet wet in the Start Your Lab codebase and become familiar with our contribution process. This is a great place to get started."),Object(r.b)("h3",{id:"proposing-a-change"},"Proposing a change"),Object(r.b)("p",null,"If you would like to request a new feature or enhancement but are not yet thinking about opening a pull request, you can also file an issue with ",Object(r.b)("a",{parentName:"p",href:"https://github.com/startyourlab/website/issues/new?assignees=&labels=feature%2C+needs+triage&template=feature.md"},"feature template"),"."),Object(r.b)("p",null,"If you intend to change the public API (e.g., something in ",Object(r.b)("inlineCode",{parentName:"p"},"docusaurus.config.js"),"), or make any non-trivial changes to the implementation, we recommend filing an issue with a ",Object(r.b)("a",{parentName:"p",href:"https://github.com/startyourlab/website/issues/new?assignees=&labels=feature%2C+needs+triage&template=feature_request.md"},"feature request template")," and including ",Object(r.b)("inlineCode",{parentName:"p"},"[Proposal]")," in the title. This lets us reach an agreement on your proposal before you put significant effort into it. ",Object(r.b)("em",{parentName:"p"},"These types of issues should be rare.")),Object(r.b)("p",null,"If you're only fixing a bug, it's fine to submit a pull request right away but we still recommend filing an issue detailing what you're fixing with the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/startyourlab/website/issues/new?assignees=&labels=bug%2C+needs+triage&template=bug_report.md"},"bug report template"),". This is helpful in case we don't accept that specific fix but want to keep track of the issue."),Object(r.b)("h3",{id:"sending-a-pull-request"},"Sending a pull request"),Object(r.b)("p",null,"Small pull requests are much easier to review and more likely to get merged into our ",Object(r.b)("inlineCode",{parentName:"p"},"production")," branch. Make sure the pull request does only one thing, otherwise please split it into multiple, smaller, single-purpose pull requests. It is recommended to follow this ",Object(r.b)("a",{parentName:"p",href:"#semantic-commit-messages"},"commit message style"),"."),Object(r.b)("p",null,"All pull requests should be opened against the ",Object(r.b)("inlineCode",{parentName:"p"},"production")," branch."),Object(r.b)("h4",{id:"test-plan"},"Test plan"),Object(r.b)("p",null,"A good test plan has the exact commands you ran and their output, provides screenshots or videos if the pull request changes UI."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"If you've changed APIs, update the documentation.")),Object(r.b)("h4",{id:"breaking-changes"},"Breaking changes"),Object(r.b)("p",null,"When adding a new breaking change, add this template to your pull request's body:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-md"},"### New breaking change here\n\n- **Who does this affect**:\n- **How to migrate**:\n- **Why make this breaking change**:\n- **Severity (number of people affected x effort)**:\n")),Object(r.b)("h4",{id:"copyright-header-for-source-code"},"Copyright header for source code"),Object(r.b)("p",null,"Copy and paste this to the top of your new file(s):"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"/**\n * Copyright (c) Start Your Lab, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.md file in the root directory of this source tree.\n */\n")),Object(r.b)("h3",{id:"what-happens-next"},"What happens next?"),Object(r.b)("p",null,"The core Start Your Lab team will be monitoring for pull requests. Do help us by keeping pull requests consistent by following the guidelines above."),Object(r.b)("h2",{id:"license"},"License"),Object(r.b)("p",null,"By contributing to Start Your Lab, you agree that your contributions will be licensed under its MIT license."))}c.isMDXComponent=!0}}]);