"use strict";(self.webpackChunkhyeokjaelee_github_io=self.webpackChunkhyeokjaelee_github_io||[]).push([[431],{7453:function(e,t){t.Z=void 0;var n=function(e,t){void 0===t&&(t="start");var n=document.querySelector(e);return!!n&&(n.scrollIntoView({behavior:"smooth",block:t}),!0)};t.Z=n},2166:function(e,t,n){n.d(t,{w:function(){return l}});var r=n(959),i=n(1874),o=n(9940),c=n(9045),a=n(5286);const l=()=>{const{isDarkMode:e}=(0,c.vs)(),t=(0,o.A)(),{title:n}=(0,i.x)();return r.createElement("section",{className:"flex items-center gap-4"},r.createElement("div",{className:"rounded-full bg-zinc-900 dark:bg-zinc-50 p-4"},r.createElement(a.T,{className:"w-14 h-14",fill:e?"black":"white"})),r.createElement("div",null,r.createElement("h2",{className:"font-semibold text-xl mb-1"},n),r.createElement("ul",{className:"flex gap-2 flex-wrap items-center"},t.map((e=>{let{name:t,href:n,icon:i,target:o}=e;return r.createElement("li",{key:t},r.createElement("a",{className:"flex gap-1 text-xs items-center hover:underline cursor-pointer",href:n,target:o},r.createElement(i,{className:"w-3 h-3"}),r.createElement("span",null,t)))})))))}},8237:function(e,t,n){n.d(t,{h:function(){return o}});var r=n(959),i=n(1874);const o=e=>{let{title:t,description:n,children:o}=e;const{title:c,description:a}=(0,i.x)(),l=t?`${c} | ${t}`:c,s=null!=n?n:a;return r.createElement(r.Fragment,null,r.createElement("title",null,l),r.createElement("meta",{name:"google-site-verification",content:"6KHb8V0fAsVjI-k0fZfovmdLDrfikkgwpVMCsfSmvrw"}),r.createElement("meta",{name:"description",content:s}),r.createElement("meta",{property:"og:title",content:l}),r.createElement("meta",{property:"og:description",content:s}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{name:"twitter:card",content:"summary"}),r.createElement("meta",{name:"twitter:title",content:l}),r.createElement("meta",{name:"twitter:description",content:s}),r.createElement("meta",{name:"theme-color",content:"#000000"}),o)}},2472:function(e,t,n){n.d(t,{M:function(){return c}});var r=n(7453),i=n(959),o=n(6735);const c=e=>{let{title:t,headings:n}=e;const{selectedHeading:c,setSelectedHeading:a}=(e=>{const{0:t,1:n}=(0,i.useState)(""),r=(0,i.useRef)(!1);return(0,i.useEffect)((()=>{const t=new Map,i=new IntersectionObserver((e=>{e.forEach((e=>{const{target:n,isIntersecting:r}=e;t.set(n.id,{isVisible:r,element:n})}))}),{threshold:.5});null==e||e.forEach((e=>{if(!e)return;const{id:t}=e,n=document.querySelector(`#${t}`);n&&t&&i.observe(n)}));const c=document.querySelector("main"),a=(0,o.Z)((()=>{if(c&&!r.current){for(const[e,{isVisible:r}]of t)if(r){n(e);break}}else r.current=!1}),30);return null==c||c.addEventListener("scroll",a,{passive:!0}),()=>{i.disconnect(),null==c||c.removeEventListener("scroll",a)}}),[e]),{selectedHeading:t,setSelectedHeading:e=>{n(e),r.current=!0}}})(n);return n&&t?i.createElement("div",{className:"flex-1 hidden lg:block"},i.createElement("nav",{className:"my-4 ml-12 sticky top-2 px-4 py-1 text-xs border-l-2 border-zinc-300 dark:border-zinc-700 min-w-[15em] max-w-xs"},i.createElement("h3",{className:"font-bold text-base mb-2"},t),i.createElement("ul",{className:"list-disc ml-4 flex flex-col gap-1"},n.map(((e,t)=>{if(!e)return null;const{value:n,depth:o,id:l}=e;return i.createElement("li",{key:t,className:"list-item transition-all "+(c===l?"text-zinc-700 dark:text-zinc-200 font-bold text-sm":"text-zinc-400 dark:text-zinc-500"),style:{marginLeft:.5*((null!=o?o:1)-1)+"rem"}},i.createElement("button",{className:"text-start cursor-pointer hover:underline",onClick:()=>{l&&(a(l),(0,r.Z)(`#${l}`))}},n))}))))):null}},1874:function(e,t,n){n.d(t,{x:function(){return i}});var r=n(718);const i=()=>{var e;const{site:t}=(0,r.useStaticQuery)("4278130389"),{title:n,description:i}=null!==(e=null==t?void 0:t.siteMetadata)&&void 0!==e?e:{};if(!n||!i)throw Error("사이트 기본정보 설정이 필요합니다.");return{title:n,description:i}}},6735:function(e,t,n){n.d(t,{Z:function(){return $}});var r=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},i="object"==typeof global&&global&&global.Object===Object&&global,o="object"==typeof self&&self&&self.Object===Object&&self,c=i||o||Function("return this")(),a=function(){return c.Date.now()},l=/\s/;var s=function(e){for(var t=e.length;t--&&l.test(e.charAt(t)););return t},u=/^\s+/;var m=function(e){return e?e.slice(0,s(e)+1).replace(u,""):e},f=c.Symbol,d=Object.prototype,v=d.hasOwnProperty,p=d.toString,b=f?f.toStringTag:void 0;var g=function(e){var t=v.call(e,b),n=e[b];try{e[b]=void 0;var r=!0}catch(o){}var i=p.call(e);return r&&(t?e[b]=n:delete e[b]),i},h=Object.prototype.toString;var y=function(e){return h.call(e)},E=f?f.toStringTag:void 0;var x=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":E&&E in Object(e)?g(e):y(e)};var w=function(e){return null!=e&&"object"==typeof e};var k=function(e){return"symbol"==typeof e||w(e)&&"[object Symbol]"==x(e)},N=/^[-+]0x[0-9a-f]+$/i,j=/^0b[01]+$/i,S=/^0o[0-7]+$/i,O=parseInt;var T=function(e){if("number"==typeof e)return e;if(k(e))return NaN;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=m(e);var n=j.test(e);return n||S.test(e)?O(e.slice(2),n?2:8):N.test(e)?NaN:+e},z=Math.max,M=Math.min;var $=function(e,t,n){var i,o,c,l,s,u,m=0,f=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=i,r=o;return i=o=void 0,m=t,l=e.apply(r,n)}function b(e){var n=e-u;return void 0===u||n>=t||n<0||d&&e-m>=c}function g(){var e=a();if(b(e))return h(e);s=setTimeout(g,function(e){var n=t-(e-u);return d?M(n,c-(e-m)):n}(e))}function h(e){return s=void 0,v&&i?p(e):(i=o=void 0,l)}function y(){var e=a(),n=b(e);if(i=arguments,o=this,u=e,n){if(void 0===s)return function(e){return m=e,s=setTimeout(g,t),f?p(e):l}(u);if(d)return clearTimeout(s),s=setTimeout(g,t),p(u)}return void 0===s&&(s=setTimeout(g,t)),l}return t=T(t)||0,r(n)&&(f=!!n.leading,c=(d="maxWait"in n)?z(T(n.maxWait)||0,t):c,v="trailing"in n?!!n.trailing:v),y.cancel=function(){void 0!==s&&clearTimeout(s),m=0,i=u=o=s=void 0},y.flush=function(){return void 0===s?l:h(a())},y}}}]);
//# sourceMappingURL=12e9e27aa0c9d1467731ab904023a2d71db73f8b-7e09fa74768ba35d78b6.js.map