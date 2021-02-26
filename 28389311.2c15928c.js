(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{149:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return u}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),d=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=d(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),p=d(r),s=n,u=p["".concat(c,".").concat(s)]||p[s]||m[s]||o;return r?a.a.createElement(u,l(l({ref:t},i),{},{components:r})):a.a.createElement(u,l({ref:t},i))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=s;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var i=2;i<o;i++)c[i]=r[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},85:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return b})),r.d(t,"default",(function(){return d}));var n=r(3),a=r(7),o=(r(0),r(149)),c={id:"command_leaderboard",title:"leaderboard",sidebar_label:"leaderboard"},l={unversionedId:"commands/command_leaderboard",id:"commands/command_leaderboard",isDocsHomePage:!1,title:"leaderboard",description:"|             Description             |        Argument        | Accessible | Cooldown |",source:"@site/docs/commands/leaderboard.md",slug:"/commands/command_leaderboard",permalink:"/docs/commands/command_leaderboard",editUrl:"https://portal-bot.xyz/docs/commands/leaderboard.md",version:"current",sidebar_label:"leaderboard",sidebar:"docs",previous:{title:"joke",permalink:"/docs/commands/command_joke"},next:{title:"leave",permalink:"/docs/commands/command_leave"}},b=[{value:"Examples",id:"examples",children:[]}],i={toc:b};function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"center"},"Description"),Object(o.b)("th",{parentName:"tr",align:"center"},"Argument"),Object(o.b)("th",{parentName:"tr",align:"center"},"Accessible"),Object(o.b)("th",{parentName:"tr",align:"center"},"Cooldown"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"center"},"Replies with the top 10 leaderboard"),Object(o.b)("td",{parentName:"tr",align:"center"},Object(o.b)("strong",{parentName:"td"},"@number_of_members")),Object(o.b)("td",{parentName:"tr",align:"center"},Object(o.b)("inlineCode",{parentName:"td"},"everyone")),Object(o.b)("td",{parentName:"tr",align:"center"},Object(o.b)("inlineCode",{parentName:"td"},"none"))))),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Lets say you want to get the current leaderboard, you would type"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"./leaderboard\n")),Object(o.b)("p",{parentName:"li"},"  This will return the leaderboard with all members in server"),Object(o.b)("blockquote",{parentName:"li"},Object(o.b)("p",{parentName:"blockquote"},"Think twice in big servers"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Lets say you want to get only the top 10, you would type"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"./leaderboard 10\n")),Object(o.b)("p",{parentName:"li"},"  This will return the leaderboard with all members in server"),Object(o.b)("blockquote",{parentName:"li"},Object(o.b)("p",{parentName:"blockquote"},"Think twice in big servers")))))}d.isMDXComponent=!0}}]);