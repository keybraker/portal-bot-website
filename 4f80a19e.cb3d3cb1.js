(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{149:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return s}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),m=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=m(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=m(r),d=n,s=b["".concat(o,".").concat(d)]||b[d]||u[d]||c;return r?a.a.createElement(s,i(i({ref:t},l),{},{components:r})):a.a.createElement(s,i({ref:t},l))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var l=2;l<c;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},98:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return m}));var n=r(3),a=r(7),c=(r(0),r(149)),o={id:"command_crypto",title:"crypto",sidebar_label:"crypto"},i={unversionedId:"commands/command_crypto",id:"commands/command_crypto",isDocsHomePage:!1,title:"crypto",description:"|                        Description                         |            Argument             | Accessible | Cooldown |",source:"@site/docs/commands/crypto.md",slug:"/commands/command_crypto",permalink:"/docs/commands/command_crypto",editUrl:"https://portal-bot.xyz/docs/commands/crypto.md",version:"current",sidebar_label:"crypto",sidebar:"docs",previous:{title:"corona",permalink:"/docs/commands/command_corona"},next:{title:"deauthorise",permalink:"/docs/commands/command_deauthorise"}},p=[{value:"Examples",id:"examples",children:[]}],l={toc:p};function m(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"center"},"Description"),Object(c.b)("th",{parentName:"tr",align:"center"},"Argument"),Object(c.b)("th",{parentName:"tr",align:"center"},"Accessible"),Object(c.b)("th",{parentName:"tr",align:"center"},"Cooldown"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"Replies with the current price of requested cryptocurrency"),Object(c.b)("td",{parentName:"tr",align:"center"},Object(c.b)("strong",{parentName:"td"},"!cryptocurrency ","|"," exchange")),Object(c.b)("td",{parentName:"tr",align:"center"},Object(c.b)("inlineCode",{parentName:"td"},"everyone")),Object(c.b)("td",{parentName:"tr",align:"center"},Object(c.b)("inlineCode",{parentName:"td"},"none"))))),Object(c.b)("h2",{id:"examples"},"Examples"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Lets say you want to get the current price of Bitcoin in USD, you would type",Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",{parentName:"pre",className:"language-bash"},"./crypto bitcoin | usd\n")))))}m.isMDXComponent=!0}}]);