(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{149:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=a.a.createContext({}),d=function(e){var t=a.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return a.a.createElement(m.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=d(n),p=r,u=s["".concat(c,".").concat(p)]||s[p]||b[p]||o;return n?a.a.createElement(u,l(l({ref:t},m),{},{components:n})):a.a.createElement(u,l({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var m=2;m<o;m++)c[m]=n[m];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),o=(n(0),n(149)),c={id:"command_delete",title:"delete",sidebar_label:"delete"},l={unversionedId:"commands/command_delete",id:"commands/command_delete",isDocsHomePage:!1,title:"delete",description:"|                    Description                    |        Argument        | Accessible | Cooldown |",source:"@site/docs/commands/delete.md",slug:"/commands/command_delete",permalink:"/docs/commands/command_delete",editUrl:"https://portal-bot.xyz/docs/commands/delete.md",version:"current",sidebar_label:"delete",sidebar:"docs",previous:{title:"deauthorise",permalink:"/docs/commands/command_deauthorise"},next:{title:"dj",permalink:"/docs/commands/command_dj"}},i=[{value:"Examples",id:"examples",children:[]}],m={toc:i};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"center"},"Description"),Object(o.b)("th",{parentName:"tr",align:"center"},"Argument"),Object(o.b)("th",{parentName:"tr",align:"center"},"Accessible"),Object(o.b)("th",{parentName:"tr",align:"center"},"Cooldown"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"center"},"Deletes n number of messsages on the text channel"),Object(o.b)("td",{parentName:"tr",align:"center"},Object(o.b)("strong",{parentName:"td"},"!numer_of_messages")),Object(o.b)("td",{parentName:"tr",align:"center"},Object(o.b)("inlineCode",{parentName:"td"},"admin")),Object(o.b)("td",{parentName:"tr",align:"center"},Object(o.b)("inlineCode",{parentName:"td"},"none"))))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note that Portal will delete n + 1 messages as it will also delete the command to delete")),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Lets say you want to delete 9 messages, you would type",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"./delete 9\n")))))}d.isMDXComponent=!0}}]);