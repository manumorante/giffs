(this.webpackJsonpgiffs=this.webpackJsonpgiffs||[]).push([[3],{22:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var a=n(1),c=n(0),r=n.n(c),i=n(4),o=function(e){var t=e.data;return void 0===t?[]:t};var s=n(2);n(22);function u(e){var t=e.title,n=e.options,a=void 0===n?[]:n;return r.a.createElement("div",{className:"Category"},r.a.createElement("h3",{className:"Category__title"},t),r.a.createElement("ul",{className:"Category__list"},a.map((function(e){return r.a.createElement("li",{key:e},r.a.createElement(s.a,{to:"/search/".concat(e)},e))}))))}function f(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],s=t[1];return Object(c.useEffect)((function(){(function(){var e="".concat(i.b,"/trending/searches?api_key=").concat(i.a);return fetch(e).then((function(e){return e.json()})).then(o)})().then(s)}),[]),r.a.createElement(u,{title:"Trending searches",options:n})}}}]);
//# sourceMappingURL=3.957a848d.chunk.js.map