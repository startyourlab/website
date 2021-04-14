(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{97:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return m})),t.d(n,"default",(function(){return s}));var a=t(3),i=t(8),o=(t(0),t(110)),c={id:"command-line",title:"Command Line",slug:"/command-line"},l={unversionedId:"concepts/command-line",id:"concepts/command-line",isDocsHomePage:!1,title:"Command Line",description:"Proceed with caution: This page is still under construction!",source:"@site/docs/concepts/command-line.md",slug:"/command-line",permalink:"/docs/command-line",editUrl:"https://github.com/startyourlab/website/edit/production/docs/docs/concepts/command-line.md",version:"current",sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"Text Editors",permalink:"/docs/text-editors"}},m=[{value:"What is the command line?",id:"what-is-the-command-line",children:[]},{value:"Does my computer have a command line?",id:"does-my-computer-have-a-command-line",children:[]},{value:"What makes something a command?",id:"what-makes-something-a-command",children:[{value:"Example commands in Bash",id:"example-commands-in-bash",children:[]}]},{value:"For Experienced Users",id:"for-experienced-users",children:[]}],r={toc:m};function s(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},r,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Proceed with caution: This page is still under construction!"))),Object(o.b)("h2",{id:"what-is-the-command-line"},"What is the command line?"),Object(o.b)("p",null,"The command line is an interface that allows you to\nprovide text-based commands for computers to execute."),Object(o.b)("h2",{id:"does-my-computer-have-a-command-line"},"Does my computer have a command line?"),Object(o.b)("p",null,"Every computer comes equipped with a system-wide command line interface (CLI) called a ",Object(o.b)("em",{parentName:"p"},"shell"),". Depending on the operating system\nof your computer, the default shell is:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"Z shell")," or ",Object(o.b)("em",{parentName:"li"},"Bash")," on macOS and Linux"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"PowerShell")," on Windows")),Object(o.b)("p",null,"These shells run programs within a ",Object(o.b)("em",{parentName:"p"},"terminal")," application, such as Terminal on macOS. While\nshells all serve a similar purpose, they are each different in various ways, including\ntheir ",Object(o.b)("em",{parentName:"p"},"command prompts"),". The prompts are "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"%")," for Z shell"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"$")," for Bash"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},">")," for PowerShell")),Object(o.b)("h2",{id:"what-makes-something-a-command"},"What makes something a command?"),Object(o.b)("p",null,"A ",Object(o.b)("em",{parentName:"p"},"command")," is made up of a sequence of arguments. In most cases, the first argument of a command\nis the ",Object(o.b)("em",{parentName:"p"},"command name"),", so we will consider a command the combination of two conceptual parts:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"The ",Object(o.b)("em",{parentName:"li"},"command name")," to express the program you wish to use, and"),Object(o.b)("li",{parentName:"ol"},"The ",Object(o.b)("em",{parentName:"li"},"arguments")," the program should consider (oftentimes split into ",Object(o.b)("em",{parentName:"li"},"options"),").")),Object(o.b)("h3",{id:"example-commands-in-bash"},"Example commands in Bash"),Object(o.b)("p",null,"Let's consider a few example commands using Bash, meaning all commands will begin\nafter the ",Object(o.b)("inlineCode",{parentName:"p"},"$")," prompt in a terminal. For this set of examples, suppose we start inside\na folder called ",Object(o.b)("inlineCode",{parentName:"p"},"parent")," that has a child folder, ",Object(o.b)("inlineCode",{parentName:"p"},"child"),". Then,\nthe child folder has two ",Object(o.b)("inlineCode",{parentName:"p"},".txt")," files inside of it. This tree diagram\nmay help visualize the nested file structure we've described:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"parent\n\u2514\u2500\u2500 child\n \xa0\xa0 \u251c\u2500\u2500 file-1.txt\n \xa0\xa0 \u2514\u2500\u2500 file-2.txt\n")),Object(o.b)("p",null,"To navigate from inside the ",Object(o.b)("inlineCode",{parentName:"p"},"parent")," folder to the ",Object(o.b)("inlineCode",{parentName:"p"},"child")," folder, run"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"$ cd child\n")),Object(o.b)("p",null,"which calls ",Object(o.b)("inlineCode",{parentName:"p"},"cd")," with an argument to go into the directory ",Object(o.b)("inlineCode",{parentName:"p"},"child"),".\nThen, if you'd like to see the contents of ",Object(o.b)("inlineCode",{parentName:"p"},"child"),", run"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"$ ls\n")),Object(o.b)("p",null,"which calls ",Object(o.b)("inlineCode",{parentName:"p"},"ls")," without arguments to list of the two files ",Object(o.b)("inlineCode",{parentName:"p"},"file-1.txt")," and ",Object(o.b)("inlineCode",{parentName:"p"},"file-2.txt")," inside of ",Object(o.b)("inlineCode",{parentName:"p"},"child"),".\nWhen it's time to navigate back to ",Object(o.b)("inlineCode",{parentName:"p"},"parent"),", run"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"$ cd ../parent\n")),Object(o.b)("p",null,"which calls ",Object(o.b)("inlineCode",{parentName:"p"},"cd")," with an argument to go up one directory (the ",Object(o.b)("inlineCode",{parentName:"p"},".."),")\nin the tree and into the ",Object(o.b)("inlineCode",{parentName:"p"},"parent")," directory (the ",Object(o.b)("inlineCode",{parentName:"p"},"/parent"),")."),Object(o.b)("h2",{id:"for-experienced-users"},"For Experienced Users"),Object(o.b)("p",null,"Once you feel more comfortable with the concept of command line tools, and have had some\nreal experience using one for a project, it's time to step up your game. While many\navenues are available, these referenced links include useful collections of materials\nto make your command line experience even better:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/jlevy/the-art-of-command-line"},"The Art of Command Line")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/herrbischoff/awesome-macos-command-line"},"MacOS Command Line"))))}s.isMDXComponent=!0}}]);