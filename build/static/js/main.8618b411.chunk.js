(this.webpackJsonpgiffs=this.webpackJsonpgiffs||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),i=n.n(c),o=(n(11),n(2));n(12),n(13);function l(e){var t=e.title,n=e.id,a=e.url;return r.a.createElement("div",{className:"gif"},r.a.createElement("img",{className:"gif__img",key:n,src:a,alt:t}),r.a.createElement("div",{className:"gif__title"},t))}n(14);function s(e){var t=e.gifs;return r.a.createElement("div",{className:"ListOfGifs"},t.map((function(e){return r.a.createElement(l,{key:e.id,id:e.id,title:e.title,url:e.url})})))}n(15);function u(){return r.a.createElement("div",{className:"spinner"},"Loading")}var m=n(1),f="2Qxzc5KLKUrAtMUUsbJaMMI6TzNYJwd3";function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.keyword,n=void 0===t?"morty":t,a="https://api.giphy.com/v1/gifs/search?api_key=".concat(f,"&q=").concat(n,"&limit=25&offset=0&rating=g&lang=es");return fetch(a).then((function(e){return e.json()})).then((function(e){var t=e.data,n=void 0===t?[]:t;if(Array.isArray(n))return n.map((function(e){var t=e.images;return{title:e.title,id:e.id,url:t.downsized_medium.url}}))}))}function g(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{keyword:null},t=e.keyword,n=Object(a.useState)(!1),r=Object(m.a)(n,2),c=r[0],i=r[1],o=Object(a.useState)([]),l=Object(m.a)(o,2),s=l[0],u=l[1];return Object(a.useEffect)((function(){i(!0),d({keyword:t||localStorage.getItem("lastKeyword")}).then((function(e){return u(e)})),i(!1),localStorage.setItem("lastKeyword",t)}),[t]),{loading:c,gifs:s}}function v(){var e=g(),t=e.loading,n=e.gifs;return r.a.createElement("div",{className:"Home"},t?r.a.createElement(u,null):r.a.createElement(s,{gifs:n}))}function h(e){var t=g({keyword:e.params.keyword}),n=t.loading,a=t.gifs;return r.a.createElement("div",null,n?r.a.createElement(u,null):r.a.createElement(s,{gifs:a}))}function p(e){var t=e.params.id;return console.log(t),r.a.createElement("div",null,"detail ",t)}n(16);function E(){var e=Object(a.useState)(""),t=Object(m.a)(e,2),n=t[0],c=t[1],i=Object(o.c)(),l=Object(m.a)(i,2),s=(l[0],l[1]);return r.a.createElement("div",{className:"Search"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),s("/search/".concat(n))}},r.a.createElement("input",{type:"search",className:"Search__input",onChange:function(e){c(e.target.value)},value:n,placeholder:"Search for gifs!"})))}function w(){return r.a.createElement("div",{className:"App"},r.a.createElement("section",{className:"App-content"},r.a.createElement("h1",null,r.a.createElement(o.a,{to:"/"},"Giffs")),r.a.createElement(E,null),r.a.createElement(o.b,{component:v,path:"/"}),r.a.createElement(o.b,{component:h,path:"/search/:keyword"}),r.a.createElement(o.b,{component:p,path:"/gif/:id"})))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.8618b411.chunk.js.map