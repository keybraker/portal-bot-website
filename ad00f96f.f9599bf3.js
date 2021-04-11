(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{191:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return d}));var a=t(3),o=t(7),r=(t(0),t(237)),i={id:"configuration",title:"Configuration",sidebar_label:"Configuration"},c={unversionedId:"hosting/docker/configuration",id:"hosting/docker/configuration",isDocsHomePage:!1,title:"Configuration",description:"1. Add the API keys from the services you want.",source:"@site/docs/hosting/docker/configuration.md",slug:"/hosting/docker/configuration",permalink:"/docs/hosting/docker/configuration",editUrl:"https://portal-bot.xyz/docs/hosting/docker/configuration.md",version:"current",sidebar_label:"Configuration",sidebar:"docs",previous:{title:"Prerequisites",permalink:"/docs/hosting/docker/prerequisites"},next:{title:"Build",permalink:"/docs/hosting/docker/build"}},s=[],l={toc:s};function d(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Add the API keys from the services you want."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-json",metastring:'title="Portal/src/config.json"',title:'"Portal/src/config.json"'},'{\n  "version": "0.6.8", // current version\n  "token": "add-your-token-here", // your Discord-API-Token\n  "prefix": "./", // default prefix\n  "mongo_url": "mongodb://mongo/portal?compressors=zlib&gssapiServiceName=portal", // mongoDB url\n  "owner_id": "add-your-id-(optional)", // owner ID may be used throughout Portal\n  "api_keys": {\n    // Api keys for Portal services\n    "OpenWeatherMap": "add-open-weather-map-api-key",\n    "covid_193": "add-covid-193-api-key",\n    "lyrics": "add-genius-api-key",\n    "coingecko": "add-coingecko-api-key",\n    "football_data": "add-football-data-api-key",\n    "yahoo_finance": "add-yahoo-finance-api-key",\n    "new_york_times": "add-new-york-time-api-key",\n    "translate": {\n      "engine": "yandex",\n      "key": "add-yeandex-api-key"\n    }\n  },\n  "delete_delay": 7, // how long after message sent, will it be deleted\n  "debug": false, // display run time information in console\n  "log": false // log files in ../logs directory on host\n}\n')))),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Keep in mind that mongo_url by default is set to link to docker container, in case you are running it as a standalone app, you shall give the url of the mongo database"))),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Note that if you do not want to use an api, go to ",Object(r.b)("inlineCode",{parentName:"p"},"Portal/src/config.command.json")," and delete the command corelating to the missing api (ex. covid_193 -> corona)."))),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Go to ",Object(r.b)("inlineCode",{parentName:"p"},"Portal/src/config.command.json")," and remove commands you do not want Portal to have")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Go to and set the spamming guidelines to whatever you want them to be"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-json",metastring:'title="Portal/src/config.command.json"',title:'"Portal/src/config.command.json"'},'{\n  "dupl_after": 2, // number of duplicates to warn\n  "warn_after": 3, // number of spam messages to warn\n  "mute_after": 5, // mute member after 5 messages\n  "mute_period": 2, // mute period in minutes\n  "kick_after": 0, // number of spam messages to kick\n  "ban_after": 0, // number of spam messages to ban\n  "message_interval": 1000 // interval in ms between messages to consider spam\n}\n'))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"We encourage you, to not alter ",Object(r.b)("inlineCode",{parentName:"p"},"Portal/src/config.event.json")," as all events are needed for Portal to function properly"))))}d.isMDXComponent=!0},237:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),d=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=d(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},u=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(t),u=a,b=p["".concat(i,".").concat(u)]||p[u]||m[u]||r;return t?o.a.createElement(b,c(c({ref:n},l),{},{components:t})):o.a.createElement(b,c({ref:n},l))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=u;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);