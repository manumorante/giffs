(this.webpackJsonpgiffs=this.webpackJsonpgiffs||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),i=n.n(c),o=(n(11),n(12),n(2));n(13);function l(e){var t=e.title,n=e.id,a=e.url,c=e.width,i=e.height;return r.a.createElement("div",{className:"gif",style:{width:c,height:i}},r.a.createElement(o.a,{to:"/gif/".concat(n)},r.a.createElement("img",{loading:"lazy",className:"gif__img",key:n,src:a,alt:t}),r.a.createElement("div",{className:"gif__title"},t)))}n(14);function u(e){var t=e.gifs;return r.a.createElement("div",{className:"ListOfGifs"},t.map((function(e){return r.a.createElement(l,{key:e.id,id:e.id,title:e.title,url:e.url})})))}n(15);function s(){return r.a.createElement("div",{className:"spinner"},"Loading")}var f=n(1),m="2Qxzc5KLKUrAtMUUsbJaMMI6TzNYJwd3",d="https://api.giphy.com/v1",g=function(e){var t=e.data,n=void 0===t?[]:t;return Array.isArray(n)?n.map((function(e){var t=e.images;return{title:e.title,id:e.id,url:t.downsized_medium.url}})):[]};function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.limit,n=void 0===t?25:t,a=e.keyword,r=void 0===a?"morty":a,c=e.page,i=void 0===c?0:c,o="".concat(d,"/gifs/search?api_key=").concat(m,"&q=").concat(r,"&limit=").concat(n,"&offset=").concat(i*n,"&rating=g&lang=en");return fetch(o).then((function(e){return e.json()})).then(g)}var v=r.a.createContext({});function E(e){var t=e.children,n=Object(a.useState)([]),c=Object(f.a)(n,2),i=c[0],o=c[1];return r.a.createElement(v.Provider,{value:{gifs:i,setGifs:o}},t)}var p=v;function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{keyword:"rick and morty"},t=e.keyword,n=Object(a.useState)(!1),r=Object(f.a)(n,2),c=r[0],i=r[1],o=Object(a.useState)(!1),l=Object(f.a)(o,2),u=l[0],s=l[1],m=Object(a.useState)(0),d=Object(f.a)(m,2),g=d[0],v=d[1],E=Object(a.useContext)(p),b=E.gifs,w=E.setGifs,O=t||localStorage.getItem("lastKeyword")||"random";return Object(a.useEffect)((function(){i(!0),h({keyword:O}).then((function(e){w(e),i(!1),localStorage.setItem("lastKeyword",t)}))}),[t,w,O]),Object(a.useEffect)((function(){0!==g&&(s(!0),h({keyword:O,page:g}).then((function(e){w((function(t){return t.concat(e)})),s(!1)})))}),[g,O,w]),{loading:c,gifs:b,loadingNextPage:u,setPage:v}}function w(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.distance,n=void 0===t?"100px":t,r=e.externalRef,c=e.once,i=void 0===c||c,o=Object(a.useState)(!1),l=Object(f.a)(o,2),u=l[0],s=l[1],m=Object(a.useRef)();return Object(a.useEffect)((function(){var e=r?r.current:m.current,t=new IntersectionObserver((function(e,t){e[0].isIntersecting?(s(!0),i&&t.disconnect()):!i&&s(!1)}),{rootMargin:n});return e&&t.observe(e),function(){return t&&t.disconnect()}})),{isNearScreen:u,fromRef:m}}({distance:"500px"}),t=e.isNearScreen,n=e.fromRef;return r.a.createElement("div",{ref:n},console.log(t),t?r.a.createElement(w,null):r.a.createElement(s,null))}function O(){var e=b(),t=e.loading,n=e.gifs;return r.a.createElement("div",{className:"Home"},t?r.a.createElement(s,null):r.a.createElement(u,{gifs:n}),r.a.createElement(w,null))}function j(e){var t=e.params.keyword,n=b({keyword:t}),a=n.loading,c=n.gifs,i=n.setPage;return r.a.createElement("div",null,a?r.a.createElement(s,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"Searching for '",t,"'"),r.a.createElement(u,{gifs:c})),r.a.createElement("button",{onClick:function(){return i((function(e){return e+1}))}},"Next"))}function y(e){var t=e.params,n=Object(a.useContext)(p).gifs.find((function(e){return e.id===t.id}));return r.a.createElement(l,n)}var N=function(){return window.location.hash.replace("#","")||"/"};function k(){var e=Object(a.useState)(N()),t=Object(f.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){var e=function(){return r(N())};return window.addEventListener("hashchange",e),function(){return window.removeEventListener("hashchange",e)}}),[]),[n,Object(a.useCallback)((function(e){return window.location.hash=e}),[])]}function _(){return r.a.createElement("div",null,"Info page")}function S(){return r.a.createElement("div",null,"Contact page")}function x(e){var t=Object(o.e)(e.href),n=Object(f.a)(t,2),a=n[0],c=n[1];return r.a.createElement(o.a,e,r.a.createElement("a",{className:a?"active":"",href:c},e.children))}n(16);function M(){return r.a.createElement("ul",{className:"Menu"},r.a.createElement("li",{className:"Menu__link"},r.a.createElement(x,{href:"/"},"Home")),r.a.createElement("li",{className:"Menu__link"},r.a.createElement(x,{href:"/info"},"Info")),r.a.createElement("li",{className:"Menu__link"},r.a.createElement(x,{href:"/contact"},"Contact")))}n(17);function C(){var e=Object(a.useState)(""),t=Object(f.a)(e,2),n=t[0],c=t[1],i=Object(o.d)(),l=Object(f.a)(i,2),u=(l[0],l[1]);return r.a.createElement("div",{className:"Search"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),u("/search/".concat(n||""))}},r.a.createElement("input",{type:"search",className:"Search__input",onChange:function(e){c(e.target.value)},value:n,placeholder:"Search for gifs!"})))}n(18);function I(){return r.a.createElement("div",{className:"Header"},r.a.createElement("div",{className:"Logo Header__logo"},r.a.createElement("h1",null,"The page of the gifs")),r.a.createElement("div",{className:"Header__menu"},r.a.createElement(M,null),r.a.createElement(C,null)))}function L(){return r.a.createElement("div",{className:"App"},r.a.createElement("section",{className:"App-content"},r.a.createElement(o.c,{hook:k},r.a.createElement(I,null),r.a.createElement(E,null,r.a.createElement(o.b,{component:O,path:"/"}),r.a.createElement(o.b,{component:j,path:"/search/:keyword"}),r.a.createElement(o.b,{component:y,path:"/gif/:id"}),r.a.createElement(o.b,{component:_,path:"/info"}),r.a.createElement(o.b,{component:S,path:"/contact"})))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.bb170755.chunk.js.map