(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{149:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},b=Object.keys(e);for(n=0;n<b.length;n++)r=b[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)r=b[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),o=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=o(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,b=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=o(r),u=n,d=s["".concat(i,".").concat(u)]||s[u]||m[u]||b;return r?a.a.createElement(d,c(c({ref:t},p),{},{components:r})):a.a.createElement(d,c({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=r.length,i=new Array(b);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<b;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},81:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return o}));var n=r(3),a=r(7),b=(r(0),r(149)),i={id:"interpreter",title:"Interpreter Guide",sidebar_label:"Interpreter Guide"},c={unversionedId:"regex/interpreter",id:"regex/interpreter",isDocsHomePage:!1,title:"Interpreter Guide",description:"Description",source:"@site/docs/regex/interpreter.md",slug:"/regex/interpreter",permalink:"/docs/regex/interpreter",editUrl:"https://portal-bot.xyz/docs/regex/interpreter.md",version:"current",sidebar_label:"Interpreter Guide",sidebar:"docs",previous:{title:"url",permalink:"/docs/commands/command_url"},next:{title:"Variables",permalink:"/docs/regex/interpreter/variables"}},l=[{value:"Description",id:"description",children:[{value:"Variables",id:"variables",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Pipes",id:"pipes",children:[]},{value:"Structures",id:"structures",children:[]},{value:"Combined",id:"combined",children:[]}]}],p={toc:l};function o(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"description"},"Description"),Object(b.b)("p",null,"Text Interpreter is a program used by Portal when asked to generate\na channel's name. For example if you have set your voices name to\n",Object(b.b)("inlineCode",{parentName:"p"},"./set v.regex $status_list")," portal knows thats ",Object(b.b)("inlineCode",{parentName:"p"},"status_list")," is a\nvariable, as it is proceded by the symbol ",Object(b.b)("em",{parentName:"p"},"$"),"  (portal can read variables,\nattributes, pipes and structures as seen bellow).",Object(b.b)("br",null),"\nSo lets say you are playing Counter Strike, your channel's name will be\n",Object(b.b)("strong",{parentName:"p"},"CS:GO"),"."),Object(b.b)("h3",{id:"variables"},Object(b.b)("a",{parentName:"h3",href:"interpreter/variables"},"Variables")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"prefix"),Object(b.b)("th",{parentName:"tr",align:"center"},"Description"),Object(b.b)("th",{parentName:"tr",align:"center"},"Format"),Object(b.b)("th",{parentName:"tr",align:"center"},"Example ",Object(b.b)("inlineCode",{parentName:"th"},"$status_list")))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"$"),Object(b.b)("td",{parentName:"tr",align:"center"},"Variables are immutable and live data that return information"),Object(b.b)("td",{parentName:"tr",align:"center"},Object(b.b)("inlineCode",{parentName:"td"},"$variable")),Object(b.b)("td",{parentName:"tr",align:"center"},Object(b.b)("inlineCode",{parentName:"td"},"CS:GO"),Object(b.b)("br",null),"or",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"CS:GO, Apex"))))),Object(b.b)("h3",{id:"attributes"},Object(b.b)("a",{parentName:"h3",href:"interpreter/attributes"},"Attributes")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"prefix"),Object(b.b)("th",{parentName:"tr",align:"center"},"Description"),Object(b.b)("th",{parentName:"tr",align:"center"},"Format"),Object(b.b)("th",{parentName:"tr",align:"center"},"Example ",Object(b.b)("inlineCode",{parentName:"th"},"@g.locale")))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"&"),Object(b.b)("td",{parentName:"tr",align:"center"},"Attributes are Portal Bot's, Portal Voice or Voice Channel options that can be manipulated by whomever has clearance"),Object(b.b)("td",{parentName:"tr",align:"center"},Object(b.b)("inlineCode",{parentName:"td"},"&attribute")),Object(b.b)("td",{parentName:"tr",align:"center"},Object(b.b)("inlineCode",{parentName:"td"},"gr"))))),Object(b.b)("h3",{id:"pipes"},Object(b.b)("a",{parentName:"h3",href:"interpreter/pipes"},"Pipes")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"prefix"),Object(b.b)("th",{parentName:"tr",align:"center"},"Description"),Object(b.b)("th",{parentName:"tr",align:"center"},"Format"),Object(b.b)("th",{parentName:"tr",align:"center"},"Example @g.locale ","|"," upperCase"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"|"),Object(b.b)("td",{parentName:"tr",align:"center"},"Pipes are mini functions you can pass text or Variables to manipulate their outcome"),Object(b.b)("td",{parentName:"tr",align:"center"},"|"," pipe"),Object(b.b)("td",{parentName:"tr",align:"center"},Object(b.b)("inlineCode",{parentName:"td"},"GR"))))),Object(b.b)("h3",{id:"structures"},Object(b.b)("a",{parentName:"h3",href:"interpreter/structures"},"Structures")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"prefix"),Object(b.b)("th",{parentName:"tr",align:"center"},"sufix"),Object(b.b)("th",{parentName:"tr",align:"center"},"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"{{"),Object(b.b)("td",{parentName:"tr",align:"center"},"}}"),Object(b.b)("td",{parentName:"tr",align:"center"},"Structures are conditional flow manipulators")))),Object(b.b)("h4",{id:"format"},"Format"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-json"},'{{\n    "if": "string", "is": "string", "with": "string",\n    "yes": "string", "no": "string"\n}}\n')),Object(b.b)("h4",{id:"example"},"Example"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-json"},'{{\n    "if": "@status_list", "is": "===", "with": "CS:GO",\n    "yes": "$member_count/5", "no": "is not CS"\n}}\n')),Object(b.b)("p",null,"will become"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre"},"If you're playing CS:GO: 4/5 (if 4 members in channel), if not: is not CS\n")),Object(b.b)("h3",{id:"combined"},"Combined"),Object(b.b)("p",null,"Combining everything in one naming guideline it would look something like this:",Object(b.b)("br",null)),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre"},"$status_list / @g.locale / g.locale | upperCase\n")),Object(b.b)("p",null,"will become"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre"},"CS:GO / gr / GR\n")))}o.isMDXComponent=!0}}]);