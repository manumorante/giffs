(this.webpackJsonpgiffs=this.webpackJsonpgiffs||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),i=a.n(c),o=(a(11),a(2));a(12);function l(e){var t=e.title,a=e.id,n=e.url;return r.a.createElement("div",{className:"gif"},r.a.createElement(o.a,{to:"/gif/".concat(a)},r.a.createElement("img",{className:"gif__img",key:a,src:n,alt:t}),r.a.createElement("div",{className:"gif__title"},t)))}a(13);function s(e){var t=e.gifs;return r.a.createElement("div",{className:"ListOfGifs"},t.map((function(e){return r.a.createElement(l,{key:e.id,id:e.id,title:e.title,url:e.url})})))}a(14);function u(){return r.a.createElement("div",{className:"spinner"},"Loading")}var m=a(1),f="2Qxzc5KLKUrAtMUUsbJaMMI6TzNYJwd3";function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.keyword,a=void 0===t?"morty":t,n="https://api.giphy.com/v1/gifs/search?api_key=".concat(f,"&q=").concat(a,"&limit=25&offset=0&rating=g&lang=en");return fetch(n).then((function(e){return e.json()})).then((function(e){var t=e.data,a=void 0===t?[]:t;if(Array.isArray(a))return a.map((function(e){var t=e.images;return{title:e.title,id:e.id,url:t.downsized_medium.url}}))}))}function g(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{keyword:null},t=e.keyword,a=Object(n.useState)(!1),r=Object(m.a)(a,2),c=r[0],i=r[1],o=Object(n.useState)([]),l=Object(m.a)(o,2),s=l[0],u=l[1];return Object(n.useEffect)((function(){i(!0),d({keyword:t||localStorage.getItem("lastKeyword")}).then((function(e){return u(e)})),i(!1),localStorage.setItem("lastKeyword",t)}),[t]),{loading:c,gifs:s}}function h(){var e=g(),t=e.loading,a=e.gifs;return r.a.createElement("div",{className:"Home"},t?r.a.createElement(u,null):r.a.createElement(s,{gifs:a}))}function v(e){var t=g({keyword:e.params.keyword}),a=t.loading,n=t.gifs;return r.a.createElement("div",null,a?r.a.createElement(u,null):r.a.createElement(s,{gifs:n}))}function E(e){var t=e.params.id;return r.a.createElement("div",null,r.a.createElement("h1",null,"Gif's details page"),r.a.createElement("h2",null,"ID: ",t))}a(15);function p(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],c=t[1],i=Object(o.d)(),l=Object(m.a)(i,2),s=(l[0],l[1]);return r.a.createElement("div",{className:"Search"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),s("/".concat("/giffs/build","/search/").concat(a))}},r.a.createElement("input",{type:"search",className:"Search__input",onChange:function(e){c(e.target.value)},value:a,placeholder:"Search for gifs!"})))}a(16);function b(){return r.a.createElement("div",{className:"App"},r.a.createElement("section",{className:"App-content"},r.a.createElement(o.c,{base:"/giffs/build"},r.a.createElement("h1",null,r.a.createElement(o.a,{to:"/"},"Giffs")),r.a.createElement(p,null),r.a.createElement(o.b,{component:h,path:"/"}),r.a.createElement(o.b,{component:v,path:"/search/:keyword"}),r.a.createElement(o.b,{component:E,path:"/gif/:id"}))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.fd2c0eb1.chunk.js.map