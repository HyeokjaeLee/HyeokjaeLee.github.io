"use strict";(self.webpackChunkhyeokjaelee_github_io=self.webpackChunkhyeokjaelee_github_io||[]).push([[154],{5787:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,l=/([\p{Alpha}\p{N}_]|$)/u,n=/[_.\- ]+/,o=new RegExp("^"+n.source),c=new RegExp(n.source+l.source,"gu"),s=new RegExp("\\d+"+l.source,"gu"),i=(e,l)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(l={pascalCase:!1,preserveConsecutiveUppercase:!1,...l},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const n=!1===l.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(l.locale),i=!1===l.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(l.locale);if(1===e.length)return l.pascalCase?i(e):n(e);return e!==n(e)&&(e=((e,r,l)=>{let n=!1,o=!1,c=!1;for(let s=0;s<e.length;s++){const i=e[s];n&&t.test(i)?(e=e.slice(0,s)+"-"+e.slice(s),n=!1,c=o,o=!0,s++):o&&c&&a.test(i)?(e=e.slice(0,s-1)+"-"+e.slice(s-1),c=o,o=!1,n=!0):(n=r(i)===i&&l(i)!==i,c=o,o=l(i)===i&&r(i)!==i)}return e})(e,n,i)),e=e.replace(o,""),e=l.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,n):n(e),l.pascalCase&&(e=i(e.charAt(0))+e.slice(1)),((e,t)=>(c.lastIndex=0,s.lastIndex=0,e.replace(c,((e,a)=>t(a))).replace(s,(e=>t(e)))))(e,i)};e.exports=i,e.exports.default=i},9688:function(e,t,a){a.d(t,{L:function(){return g},M:function(){return v},P:function(){return C},S:function(){return U},_:function(){return c},a:function(){return o},b:function(){return m},g:function(){return d},h:function(){return s}});var r=a(959),l=(a(5787),a(507)),n=a.n(l);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},o.apply(this,arguments)}function c(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)t.indexOf(a=n[r])>=0||(l[a]=e[a]);return l}const s=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function i(e,t,a){const r={};let l="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(l="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:l,"data-gatsby-image-wrapper":"",style:r}}function m(e,t,a,r,l){return void 0===l&&(l={}),o({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:o({},l,{opacity:t?1:0})})}function d(e,t,a,r,l,n,c,s){const i={};n&&(i.backgroundColor=n,"fixed"===a?(i.width=r,i.height=l,i.backgroundColor=n,i.position="relative"):("constrained"===a||"fullWidth"===a)&&(i.position="absolute",i.top=0,i.left=0,i.bottom=0,i.right=0)),c&&(i.objectFit=c),s&&(i.objectPosition=s);const m=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},i)});return m}const u=["children"],p=function(e){let{layout:t,width:a,height:l}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:l/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${l}'%20width='${a}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,a=c(e,u);return r.createElement(r.Fragment,null,r.createElement(p,o({},a)),t,null)},b=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],E=function(e){let{src:t,srcSet:a,loading:l,alt:n="",shouldLoad:s}=e,i=c(e,b);return r.createElement("img",o({},i,{decoding:"async",loading:l,src:s?t:void 0,"data-src":s?void 0:t,srcSet:s?a:void 0,"data-srcset":s?void 0:a,alt:n}))},f=function(e){let{fallback:t,sources:a=[],shouldLoad:l=!0}=e,n=c(e,h);const s=n.sizes||(null==t?void 0:t.sizes),i=r.createElement(E,o({},n,t,{sizes:s,shouldLoad:l}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:n}=e;return r.createElement("source",{key:`${t}-${n}-${a}`,type:n,media:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,sizes:s})})),i):i};var k;E.propTypes={src:l.string.isRequired,alt:l.string.isRequired,sizes:l.string,srcSet:l.string,shouldLoad:l.bool},f.displayName="Picture",f.propTypes={alt:l.string.isRequired,shouldLoad:l.bool,fallback:l.exact({src:l.string.isRequired,srcSet:l.string,sizes:l.string}),sources:l.arrayOf(l.oneOfType([l.exact({media:l.string.isRequired,type:l.string,sizes:l.string,srcSet:l.string.isRequired}),l.exact({media:l.string,type:l.string.isRequired,sizes:l.string,srcSet:l.string.isRequired})]))};const y=["fallback"],C=function(e){let{fallback:t}=e,a=c(e,y);return t?r.createElement(f,o({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",o({},a))};C.displayName="Placeholder",C.propTypes={fallback:l.string,sources:null==(k=f.propTypes)?void 0:k.sources,alt:function(e,t,a){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${a}\`. Validation failed.`):null}};const v=function(e){return r.createElement(r.Fragment,null,r.createElement(f,o({},e)),r.createElement("noscript",null,r.createElement(f,o({},e,{shouldLoad:!0}))))};v.displayName="MainImage",v.propTypes=f.propTypes;const x=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],O=["style","className"],w=e=>e.replace(/\n/g,""),N=function(e,t,a){for(var r=arguments.length,l=new Array(r>3?r-3:0),o=3;o<r;o++)l[o-3]=arguments[o];return e.alt||""===e.alt?n().string.apply(n(),[e,t,a].concat(l)):new Error(`The "alt" prop is required in ${a}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},S={image:n().object.isRequired,alt:N},A=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],T=["style","className"],L=new Set;let I,P;const _=function(e){let{as:t="div",image:l,style:n,backgroundColor:m,className:d,class:u,onStartLoad:p,onLoad:g,onError:b}=e,h=c(e,A);const{width:E,height:f,layout:k}=l,y=i(E,f,k),{style:C,className:v}=y,x=c(y,T),O=(0,r.useRef)(),w=(0,r.useMemo)((()=>JSON.stringify(l.images)),[l.images]);u&&(d=u);const N=function(e,t,a){let r="";return"fullWidth"===e&&(r=`<div aria-hidden="true" style="padding-top: ${a/t*100}%;"></div>`),"constrained"===e&&(r=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${a}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),r}(k,E,f);return(0,r.useEffect)((()=>{I||(I=a.e(214).then(a.bind(a,1214)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return P=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=O.current.querySelector("[data-gatsby-image-ssr]");if(e&&s())return e.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void L.add(w);if(P&&L.has(w))return;let t,r;return I.then((e=>{let{renderImageToString:a,swapPlaceholderImage:c}=e;O.current&&(O.current.innerHTML=a(o({isLoading:!0,isLoaded:L.has(w),image:l},h)),L.has(w)||(t=requestAnimationFrame((()=>{O.current&&(r=c(O.current,w,L,n,p,g,b))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[l]),(0,r.useLayoutEffect)((()=>{L.has(w)&&P&&(O.current.innerHTML=P(o({isLoading:L.has(w),isLoaded:L.has(w),image:l},h)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[l]),(0,r.createElement)(t,o({},x,{style:o({},C,n,{backgroundColor:m}),className:`${v}${d?` ${d}`:""}`,ref:O,dangerouslySetInnerHTML:{__html:N},suppressHydrationWarning:!0}))},D=(0,r.memo)((function(e){return e.image?(0,r.createElement)(_,e):null}));D.propTypes=S,D.displayName="GatsbyImage";const j=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function R(e){return function(t){let{src:a,__imageData:l,__error:n}=t,s=c(t,j);return n&&console.warn(n),l?r.createElement(e,o({image:l},s)):(console.warn("Image not loaded",a),null)}}const F=R((function(e){let{as:t="div",className:a,class:l,style:n,image:s,loading:u="lazy",imgClassName:p,imgStyle:b,backgroundColor:h,objectFit:E,objectPosition:f}=e,k=c(e,x);if(!s)return console.warn("[gatsby-plugin-image] Missing image prop"),null;l&&(a=l),b=o({objectFit:E,objectPosition:f,backgroundColor:h},b);const{width:y,height:N,layout:S,images:A,placeholder:T,backgroundColor:L}=s,I=i(y,N,S),{style:P,className:_}=I,D=c(I,O),j={fallback:void 0,sources:[]};return A.fallback&&(j.fallback=o({},A.fallback,{srcSet:A.fallback.srcSet?w(A.fallback.srcSet):void 0})),A.sources&&(j.sources=A.sources.map((e=>o({},e,{srcSet:w(e.srcSet)})))),r.createElement(t,o({},D,{style:o({},P,n,{backgroundColor:h}),className:`${_}${a?` ${a}`:""}`}),r.createElement(g,{layout:S,width:y,height:N},r.createElement(C,o({},d(T,!1,S,y,N,L,E,f))),r.createElement(v,o({"data-gatsby-image-ssr":"",className:p},k,m("eager"===u,!1,j,u,b)))))})),B=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),l=2;l<a;l++)r[l-2]=arguments[l];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?n().number.apply(n(),[e,t].concat(r)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},M=new Set(["fixed","fullWidth","constrained"]),W={src:n().string.isRequired,alt:N,width:B,height:B,sizes:n().string,layout:e=>{if(void 0!==e.layout&&!M.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};F.displayName="StaticImage",F.propTypes=W;const U=R(D);U.displayName="StaticImage",U.propTypes=W},1021:function(e,t,a){a.r(t),a.d(t,{Head:function(){return I},default:function(){return P}});var r=a(959),l=a(9688),n=a(7877),o=a(507),c=a.n(o);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var m=(0,r.forwardRef)((function(e,t){var a=e.color,l=void 0===a?"currentColor":a,n=e.size,o=void 0===n?24:n,c=i(e,["color","size"]);return r.createElement("svg",s({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:l,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),r.createElement("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}))}));m.propTypes={color:c().string,size:c().oneOfType([c().string,c().number])},m.displayName="Phone";var d=m,u=a(2472);let p=function(e){return e.ABOUT_ME="about-me",e.WORK_EXPERIENCE="work-experience",e.CODESTATES="codestates",e.EMPLOY_PLATFORM="employ-platform",e.PAYMENT_SYSTEM="payment-system",e.COUPANG="coupang",e.EDP_CHAT_BOT="edp-chat-bot",e.DATA_COLLECT="data-collect",e.WORK_AUTOMATION="work-automation",e.REVIEW="review",e.SIDE_PROJECT="side-project",e.BRIEND="briend",e.PASTIME_UI="pastime-ui",e.KOREA_WEBTOON_API="korea-webtoon-api",e.WEBTOON_HUB="webtoon-hub",e.KNU="knu",e.GITITLE="gititle",e.BLOG="blog",e.CODE_CONVENTION="code-convention",e.KOREA_COVID_19_API="korea-covid-19-api",e.KOREA_COVID_19_DASHBOARD="korea-covid-19-dashboard",e.ETC="etc",e.EDU="edu",e}({});const g=()=>r.createElement(u.M,{headings:[{value:"About me",id:p.ABOUT_ME,depth:1},{value:"Work experience",id:p.WORK_EXPERIENCE,depth:1},{value:"CodeStates",id:p.CODESTATES,depth:2},{value:"채용 플랫폼 개발",id:p.EMPLOY_PLATFORM,depth:3},{value:"후불 결제 시스템 개발",id:p.PAYMENT_SYSTEM,depth:3},{value:"Coupang",id:p.COUPANG,depth:2},{value:"카카오톡 챗봇 개발",id:p.EDP_CHAT_BOT,depth:3},{value:"데이터 수집 / 클렌징 / 시각화",id:p.DATA_COLLECT,depth:3},{value:"업무 자동화",id:p.WORK_AUTOMATION,depth:3},{value:"이런 평가를 받았어요",id:p.REVIEW,depth:3},{value:"Side project",id:p.SIDE_PROJECT,depth:1},{value:"실시간 번역 채팅앱 - Briend",id:p.BRIEND,depth:2},{value:"리액트 컴포넌트 라이브러리 - Pastime UI",id:p.PASTIME_UI,depth:2},{value:"비공식 한국 웹툰 API - Korea webtoon API",id:p.KOREA_WEBTOON_API,depth:2},{value:"웹툰 종합 플랫폼 - Webtoon hub",id:p.WEBTOON_HUB,depth:2},{value:"공주대학교 온라인 강의 시스템 편의성 향상 프로그램 - KNU LMS scheduler",id:p.KNU,depth:2},{value:"Emoji를 활용하는 git 커밋메시지 에디터 - Gititle",id:p.GITITLE,depth:2},{value:"개인 블로그 - hyeokjaelee.github.io",id:p.BLOG,depth:2},{value:"코드 컨벤션 라이브러리 - Code convetion packages",id:p.CODE_CONVENTION,depth:2},{value:"비공식 한국 COVID-19 API - Korea COVID-19 API",id:p.KOREA_COVID_19_API,depth:2},{value:"한국 COVID-19 Dashboard - COVID-19 dashboard",id:p.KOREA_COVID_19_DASHBOARD,depth:2},{value:"Etc",id:p.ETC,depth:1},{value:"Education",id:p.EDU,depth:1}],title:"Portfolio"}),b=()=>r.createElement("header",{className:"flex flex-col gap-12",id:p.ABOUT_ME},r.createElement("section",{className:"flex gap-9 items-center flex-wrap"},r.createElement(l.S,{src:"../images/profile.jpeg",alt:"profile",className:"w-32 h-32 rounded-full",__imageData:a(2273)}),r.createElement("dl",null,r.createElement("dt",{className:"flex items-center gap-2 text-sm"},r.createElement(n.Z,{className:"w-4 h-4"}),"email"),r.createElement("dd",{className:"mb-2"},r.createElement("a",{href:"mailto:leehyeokjae97@gmail.com",className:"hover:underline"},"leehyeokjae97@gmail.com")),r.createElement("dt",{className:"flex items-center gap-2 text-sm"},r.createElement(d,{className:"w-4 h-4"}),"phone"),r.createElement("dd",null,"+821093906067"))),r.createElement("h1",{className:"text-lg text-center"},"👋 안녕하세요!",r.createElement("br",null),"덕업일치 개발자, ",r.createElement("span",{className:"font-bold"},"이혁재"),"입니다."),r.createElement("ul",{className:"list-disc ml-2"},r.createElement("li",null,"일상에서 항상 더 편리한 방법을 고민하고 찾아낼 수 있어요."),r.createElement("li",null,"개발하면서 특정 도구를 어떻게 사용하는가(KNOW-HOW)보다",r.createElement("br",null),"어떤 도구(KNOW-WHAT)가 있고 어디서(KNOW-WHERE) 찾을 수 있는가를 중요하게 생각해요."),r.createElement("li",null,"빠르게 발전하는 Javascript 생태계를 사랑하고 새로운 기술을 학습하는 것에 즐거움을 느껴요."),r.createElement("li",null,"단순히 주어진 요구사항을 구현하는 것이 아닌, 제품의 비즈니스적인 설계 및 기획에도 관심이 많아요.")));var h=a(8909);function E(){return E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},E.apply(this,arguments)}function f(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var k=(0,r.forwardRef)((function(e,t){var a=e.color,l=void 0===a?"currentColor":a,n=e.size,o=void 0===n?24:n,c=f(e,["color","size"]);return r.createElement("svg",E({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:l,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),r.createElement("path",{d:"M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"}),r.createElement("line",{x1:"8",y1:"12",x2:"16",y2:"12"}))}));k.propTypes={color:c().string,size:c().oneOfType([c().string,c().number])},k.displayName="Link2";var y=k;const C=e=>{let{title:t,summaries:a,stacks:l,experiences:n,links:o,period:c,id:s}=e;return r.createElement("li",{className:"mb-7"},r.createElement("h4",{className:"text-xl mb-3 flex items-center gap-2 flex-wrap",id:s},t," ",c?r.createElement("small",{className:"flex items-center text-sm gap-1 font-semibold text-zinc-400"},r.createElement(h.Z,{className:"w-4 h-4"}),c):null),l?r.createElement("ul",{className:"flex gap-1 mb-5 flex-wrap"},l.map((e=>{let{name:t,backgroundColor:a,blackLogo:l,logo:n}=e;return r.createElement("li",{key:t},r.createElement("img",{src:`https://img.shields.io/badge/${t}-${a.replace("#","")}?style=flat-square&logo=${null!=n?n:t}&logoColor=${l?"black":"white"}`,alt:t,loading:"lazy"}))}))):null,a?r.createElement("ul",{className:"text-sm list-disc ml-4"},a.map(((e,t)=>r.createElement("li",{key:t,className:"mb-1"},e)))):null,n?r.createElement("ul",{className:"text-sm my-6"},n.map(((e,t)=>r.createElement("li",{className:"mb-2",key:t},e)))):null,o?r.createElement("blockquote",{className:"border-l-4 border-gray-500 pl-3 text-xs"},r.createElement("h5",{className:"mb-1 flex gap-1 items-center font-bold"},r.createElement(y,{className:"w-3 h-3"}),"관련 링크"),r.createElement("ul",{className:"list-decimal ml-4"},o.map((e=>{let{name:t,href:a,type:l="blog"}=e;return r.createElement("li",{key:t},r.createElement("a",{href:a,target:"_blank",className:"text-blue-500 hover:underline",rel:"noreferrer"},t," (",{github:"Github repo",blog:"Blog post",storybook:"Storybook",product:"Product"}[l],")"))})))):null)};var v=a(2166),x=a(3077);const O=e=>{let{title:t,period:a,children:l,jobTitle:n,id:o}=e;const c=(0,x.s)((e=>e.helloTarget));return r.createElement(r.Fragment,null,r.createElement("dt",{className:"mb-4"},r.createElement("h3",{className:"font-bold text-2xl flex items-center",id:o},t,a&&c?r.createElement("div",{className:"text-zinc-400 text-base flex gap-1 items-center ml-2"},r.createElement(h.Z,{className:"w-4 h-4"}),r.createElement("span",null,a)):null),r.createElement("p",{className:"text-sm ml-1"},n)),r.createElement("dd",{className:"mb-4"},l))},w=()=>r.createElement(O,{title:"Codestates",period:"2022.02 - 2023.08",jobTitle:"Frontend engineer",id:p.CODESTATES},r.createElement("ul",null,r.createElement(C,{title:"채용 플랫폼 개발",id:p.EMPLOY_PLATFORM,summaries:["채용 플랫폼 디자인시스템 개발","외부 렌더링을 발생시키지 않는 유효성 검사 라이브러리 개발","채용 플랫폼 B2B, B2C, 어드민 클라이언트 개발","채용 플랫폼 MVP 유저 마이그레이션 프로세스 개발","리액트 쿼리 기반 커스텀 훅 라이브러리 개발"],stacks:[{name:"TypeScript",backgroundColor:"#3178C6"},{name:"Next.js",backgroundColor:"#000000"},{name:"Swagger",backgroundColor:"#85EA2D",blackLogo:!0},{name:"Zustand",logo:"React",backgroundColor:"#423E39"},{name:"ReactQuery",backgroundColor:"#FF4154"},{name:"Storybook",backgroundColor:"#FF4785"},{name:"SCSS",logo:"Sass",backgroundColor:"#CD6799"},{name:"CSS Modules",logo:"CSSModules",backgroundColor:"#000000"},{name:"Vite",backgroundColor:"#646CFF"}],experiences:["채용 플랫폼 개발팀에 첫 번째 프론트엔드 개발자로 합류해 비즈니스 설계, 기획, 개발자 채용 등 전반적인 업무에 참여했어요.","개발 편의성 및 유지보수성을 고려해 Swagger API 문서를 기반으로 자동화된 CI/CD 파이프라인을 구축하고, PNPM 기반 모노레포 구조를 도입했어요.","비즈니스 요구사항에 맞춰 제품 개발에 필요한 도구들을 선정하고 적용했어요.","React Form의 코드 형식에 불편함을 느껴 유효성 검사 라이브러리를 개발했어요.","이전 팀에서의 경험을 바탕으로 제품 개발 패턴을 설정하고 디자인 시스템을 구축했어요.","사용자 환경에서 액션이나 오류를 트래킹 할 수 있는 도구들을 검토하고 적용했어요."],links:[{name:"codeship-platform-app-library",href:"https://github.com/HyeokjaeLee/codeship-platform-app-library",type:"github"},{name:"Codeship platform app library",href:"https://codestates-engineering.github.io/codeship-platform-app-library",type:"storybook"}]}),r.createElement(C,{title:"후불 결제 시스템 개발",id:p.PAYMENT_SYSTEM,summaries:["금융 사업부 디자인시스템 개발","후불 결제 시스템 클라이언트 레거시 개발환경 최신 개발 스택으로 마이그레이션 및 리펙토링","후불 결제 시스템 어드민, B2C, B2B 클라이언트 개발"],stacks:[{name:"TypeScript",backgroundColor:"#3178C6"},{name:"React",backgroundColor:"#61DAFB",blackLogo:!0},{name:"GraphQL",backgroundColor:"#E10098"},{name:"Apollo",logo:"ApolloGraphQL",backgroundColor:"#311C87"},{name:"MobX",backgroundColor:"#FF9955"},{name:"Storybook",backgroundColor:"#FF4785"},{name:"StyledComponents",logo:"styled-components",backgroundColor:"#DB7093"},{name:"Rollup.js",backgroundColor:"#EC4A3F"}],links:[{name:"리액트 컴포넌트, 어떤 컨셉으로 개발할까?",href:"/react-component-concept"},{name:"Atomic Design Pattern 적용기",href:"/react-atomic"},{name:"React 기반 제품을 개발할 때 고려해 볼 만한 디자인 패턴",href:"/react-design-pattern"},{name:"리액트 컴포넌트 스타일링 정리",href:"/components-styling"}],experiences:["기존 환경에서 불필요하거나 중단된 도구를 적극적으로 찾아내 제거하고 개선했어요.","GraphQL을 장점을 이해하고 API 스키마 설계 과정에 참여해 개발단계에서의 소통비용을 줄였어요.","팀 내 여러 직군들과 효율적으로 소통하는 방법을 고민하고 실천했어요.","컴포넌트 개발 컨셉을 설정하고 개발 패턴과 디자인 시스템을 도입했어요."]})));var N=a(9045);const S=()=>r.createElement(O,{title:"Coupang",period:"2019.08 - 2020.03",jobTitle:"Eats Operator",id:p.COUPANG},r.createElement("ul",null,r.createElement(C,{id:p.EDP_CHAT_BOT,title:"카카오톡 챗봇 개발",summaries:["배달파트너 센터 챗봇 개발"],stacks:[{name:"Javascript",backgroundColor:"#F7DF1E",blackLogo:!0}],experiences:["사용자 입장에서 액션을 예측하고 최적화할 수 있어요.","조직에서 제안한 환경 내에서 최선의 결과를 도출할 방법을 고민하고 적용했어요."]}),r.createElement(C,{title:"데이터 수집 / 클렌징 / 시각화",id:p.DATA_COLLECT,summaries:["배달파트너 배정취소 기능 개발 지표 데이터 수집 솔루션 제시 / 개발","지역별 배달 엣지 케이스 딥다이브 과정에 필요한 데이터 클렌징 / 시각화"],stacks:[{name:"Javascript",backgroundColor:"#F7DF1E",blackLogo:!0},{name:"Python",backgroundColor:"#3776AB"},{name:"Kibana",backgroundColor:"#005571"},{name:"Google Sheets",backgroundColor:"#0F9D58"}],experiences:["요구사항을 충족하는 기능이 개발되기 위해 필요한 데이터들을 미리 예측하고  수집, 정제할 수 있어요.","데이터를 수집하고 정제하는 과정을 자동화해 담당 인원을 75% 절감했어요.","수집한 데이터들을 비개발자도 이용할 수 있게 배포하고 대쉬보드를 만들었어요."]}),r.createElement(C,{title:"업무 자동화",id:p.WORK_AUTOMATION,summaries:["고객 경험 Worst case 배달파트너 계정 정지 자동화 프로세스 개발","업무에 필요한 자동화 스크립트 & 매크로 개발","식사시간과 서비스 피크타임이 겹쳐 식사 중 발생하는 트래킹 이슈를 해결하기 위한 봇 개발"],stacks:[{name:"Javascript",backgroundColor:"#F7DF1E",blackLogo:!0},{name:"Python",backgroundColor:"#3776AB"},{name:"Google Sheets",backgroundColor:"#0F9D58"}],experiences:["반복적으로 수행했거나 해야 할 작업에 대해 고민하고 휴먼 에러 및 리소스를 줄일 수 있었어요.","정해진 업무 외에 내가 할 수 있는 일을 찾아내 조직에 기여할 수 있어요.","각 파트별 담당 업무를 자동화해 담당 인원을 한 명 수준으로 줄일 수 있었어요."]})),r.createElement("h4",{className:"text-xl mb-3",id:p.REVIEW},"이런 평가를 받았어요"),r.createElement("section",null,r.createElement("a",{href:"https://www.specter.co.kr/",target:"_blank",rel:"noreferrer",className:"text-xs text-zinc-400 hover:underline"},"평판 조회 플랫폼 - Specter"),r.createElement("div",{className:"flex gap-4 flex-wrap"},r.createElement("div",null,r.createElement(N.UQ,{className:"w-80"},r.createElement(N.UQ.Title,{className:"font-bold"},"💁‍♀️ Moon (Operator Manager)"),r.createElement(N.UQ.Contents,{className:"text-sm"},r.createElement("dl",null,r.createElement("dt",{className:"text-base mt-4 mb-1 text-zinc-400"},"강점"),r.createElement("dd",{className:"flex flex-col gap-2"},r.createElement("p",null,"비즈니스 전반에 대한 관심을 가지고 업무에 참여하며, 주도적으로 문제를 해결하기 위한 여러가지 방법을 제시합니다."),r.createElement("p",null,"넓은 기술적 지식을 가지고 있어 문제 해결을 위한 여러가지 솔루션을 제시할 수 있습니다."),r.createElement("p",null,"데이터 가치를 파악하고 수집하는 역량이 뛰어납니다.")),r.createElement("dt",{className:"text-base mt-4 mb-1 text-zinc-400"},"개선해야할 점"),r.createElement("dd",{className:"flex flex-col gap-2"},r.createElement("p",null,"넓은 기술적 지식이 있지만, 깊이가 부족한 경우도 있습니다."),r.createElement("p",null,"집중력이 높아 업무에 몰입할 때 주변 동료들에게 담당하고 있던 업무의 진행도 공유가 늦어지는 경우가 있습니다.")))))),r.createElement("div",null,r.createElement(N.UQ,{className:"w-80"},r.createElement(N.UQ.Title,{className:"font-bold"},"💁‍♂️ Owen (Operator Manager)"),r.createElement(N.UQ.Contents,{className:"text-sm"},r.createElement("dl",null,r.createElement("dt",{className:"text-base mt-4 mb-1 text-zinc-400"},"강점"),r.createElement("dd",{className:"flex flex-col gap-2"},r.createElement("p",null,"주어진 업무 롤 이상의 성과를 내던 동료였습니다."),r.createElement("p",null,"사업 초기 맴버로 합류하여 메뉴얼적인 업무가 주를 이루었을때 업무를 간소화 하여 리드타임을 감소 시키고 스스로 문제를 찾아 팀원들에게 공유하는 등, 문제를 해결하기 위해 프로세스를 구축하고 자동화하여 조직에 기여하였습니다."),r.createElement("p",null,"AB 테스트를 통해 임팩트를 증명하여 기술적인 관점에서 빠른 조직의 변화가 있었습니다."),r.createElement("p",null,"일회성 솔루션이 아닌 재사용 가능한 프로세스를 제시하고 구현해 큰 규모의 트래픽을 감당할 수 있게 했습니다."),r.createElement("p",null,"이러한 근본적인 개선으로 조직에 유의미한 결과들을 내주었습니다."),r.createElement("p",null,"팀 전반적인 업무와 나아가서 비즈니스 퀄리티를 개선하려는 능동적인 자세를 갖추고 즉각적으로 퍼포먼스를 보일 수 있는 동료였습니다.")),r.createElement("dt",{className:"text-base mt-4 mb-1 text-zinc-400"},"개선해야할 점"),r.createElement("dd",{className:"flex flex-col gap-2"},r.createElement("p",null,"이혁재님의 첫직장에서 함께 한 짧은 시간이였지만 더 많이 소통 하지 못한 부분이 아쉽습니다."),r.createElement("p",null,"당시 업무분담이 잘못되어 있어 혁재님이 문제부터 지표관리 까지 전부 책임 지고 있었습니다."),r.createElement("p",null,"과도한 업무량이 본인에게 몰려 있다면 잡 레벨에 관계 없이 건설적인 대립도 필요하다고 생각합니다.")))))))));var A=a(8237);const T=()=>r.createElement("section",null,r.createElement("h2",{className:"font-bold text-3xl",id:p.SIDE_PROJECT},"🪀 Side Project"),r.createElement("p",{className:"text-sm mb-6 ml-1 font-bold text-zinc-400"},"1인 개발"),r.createElement("ul",null,r.createElement(C,{title:"실시간 번역 채팅앱 - Briend",id:p.BRIEND,stacks:[{name:"TypeScript",backgroundColor:"#3178C6"},{name:"Next.js",backgroundColor:"#000000"},{name:"Zustand",logo:"React",backgroundColor:"#423E39"},{name:"Pusher",backgroundColor:"#300D4F"},{name:"Tailwind",logo:"TailwindCSS",backgroundColor:"#06B6D4"},{name:"PWA",backgroundColor:"#5A0FC8"}],experiences:["유지 코스트를 줄이기 위해 Indexed DB를 이용해 정보를 저장하고 서버 및 외부 API 호출을 최소화할 수 있게 최대한 많은 로직을 클라이언트가 처리할 수 있도록 설계했어요.","UX를 고려해 최소한의 입력으로 기능을 사용할 수 있도록 구현했어요.","Next.js 13의 신기능들을 적극 활용해 Backend와 Frontend를 동시에 개발했어요.","이전에 개발한 React 컴포넌트 라이브러리를 활용해 개발 속도를 높였어요."],links:[{name:"Briend 번역 채팅앱 개발",href:"/briend"},{name:"briend",href:"https://github.com/HyeokjaeLee/briend",type:"github"},{name:"언어의 장벽없는 새로운 사람과의 대화 - Briend",href:"https://briend.vercel.app",type:"product"}]}),r.createElement(C,{title:"리액트 컴포넌트 라이브러리 - Pastime UI",id:p.PASTIME_UI,stacks:[{name:"TypeScript",backgroundColor:"#3178C6"},{name:"React",backgroundColor:"#61DAFB",blackLogo:!0},{name:"Storybook",backgroundColor:"#FF4785"},{name:"SCSS",logo:"Sass",backgroundColor:"#CD6799"},{name:"CSS Modules",logo:"CSSModules",backgroundColor:"#000000"},{name:"Vite",backgroundColor:"#646CFF"}],experiences:["사용자의 입력을 받는 컴포넌트들이 외부 상태를 업데이트시키지 않고 유효성 검사 기능을 자체적으로 제공할 수 있게 개발했어요.","대부분의 HTML Props를 지원하고 외부에서 커스텀할 수 있도록 설계했어요.","Javascript Object의 특징을 활용해 사용자의 입력을 받는 컴포넌트들이 외부 렌더링을 발생시키지 않도록 설계했어요.","Storybook을 이용해 영어와 한국어로 문서화 후 NPM에 배포했어요.","해당 라이브러리를 사용해 개인 프로젝트들을 개발하면서 재사용성과 유지보수성을 높였어요.","SCSS를 이용해 컴포넌트를 스타일링하고 공통 로직을 최대한 재활용하면서 번들 사이즈를 최소화했어요.","Github action을 통해 자동으로 배포하고 문서화할 수 있게 구성했어요."],links:[{name:"pastime-ui",href:"https://github.com/HyeokjaeLee/pastime-ui",type:"github"},{name:"Pastime UI",href:"https://hyeokjaelee.github.io/pastime-ui",type:"storybook"}]}),r.createElement(C,{title:"비공식 한국 웹툰 API - Korea webtoon API",id:p.KOREA_WEBTOON_API,stacks:[{name:"TypeScript",backgroundColor:"#3178C6"},{name:"NestJS",backgroundColor:"#E0234E"},{name:"MongoDB",backgroundColor:"#47A248"}],experiences:["여러 가지 웹툰 플랫폼을 크롤링한 데이터를 정형화하고 API로 제공해요.","배포 후 사용자들의 요구사항을 반영해 기능을 추가하고 유지보수 했어요."],links:[{name:"Webtoon API 개발",href:"/korea-webtoon-api-update"},{name:"korea-webtoon-api",href:"https://github.com/HyeokjaeLee/korea-webtoon-api",type:"github"}]}),r.createElement(C,{title:"웹툰 종합 플랫폼 - Webtoon hub",id:p.WEBTOON_HUB,stacks:[{name:"TypeScript",backgroundColor:"#3178C6"},{name:"React",backgroundColor:"#61DAFB",blackLogo:!0},{name:"SCSS",logo:"Sass",backgroundColor:"#CD6799"},{name:"Bootstrap",backgroundColor:"#7952B3"},{name:"PWA",backgroundColor:"#5A0FC8"}],experiences:["Korea Webtoon API 활용 예시 프로젝트예요.","교내에서 프로그램 저작권 등록을 제안받고 등록했어요.","여러 가지 웹툰 정보에 대한 검색과 해당 웹툰 사이트로의 링크를 제공해요."],links:[{name:"webtoon-hub",href:"https://github.com/HyeokjaeLee/webtoon-hub",type:"github"}]}),r.createElement(C,{title:"공주대학교 온라인 강의 시스템 편의성 향상 프로그램 - KNU LMS scheduler",id:p.KNU,stacks:[{name:"Javascript",backgroundColor:"#F7DF1E",blackLogo:!0},{name:"React",backgroundColor:"#61DAFB",blackLogo:!0},{name:"Electron",backgroundColor:"#47848F"}],experiences:["팬데믹으로 인해 온라인 강의가 활성화되면서 온라인 강의 시스템의 불편함을 느껴 개발했어요.","실시간으로 개인 강의 페이지들을 크롤링하고 출석, 과제, 시험 등의 마감 기한을 알려줘요.","Electron을 활용해 데스크탑 앱으로 만들어 대학생 커뮤니티에 공유하고 좋은 평가를 받았어요.","내가 만든 프로그램이 많은 사람들에게 도움이 되었을 때 뿌듯함을 느꼈어요."],links:[{name:"KNU LMS Scheduler 프로젝트",href:"/knu-lms-scheduler"},{name:"knu-lms-scheduler",href:"https://github.com/HyeokjaeLee/knu-lms-scheduler",type:"github"}]}),r.createElement(C,{title:"Emoji를 활용하는 git 커밋메시지 에디터 - Gititle",id:p.GITITLE,stacks:[{name:"Javascript",backgroundColor:"#F7DF1E",blackLogo:!0},{name:"Vue.js",backgroundColor:"#4FC08D"},{name:"SCSS",logo:"Sass",backgroundColor:"#CD6799"},{name:"PWA",backgroundColor:"#5A0FC8"}],experiences:["커밋 메시지에 이모지를 활용하고 정해진 규칙에 맞춰 작성하려고 개발했어요.","Node.js 환경을 사용하지 않고 개발했어요."],links:[{name:"Gititle 프로젝트",href:"/gititle-project"},{name:"gititle",href:"https://github.com/HyeokjaeLee/gititle",type:"github"},{name:"Gititle",href:"https://hyeokjaelee.github.io/gititle",type:"product"}]}),r.createElement(C,{title:"개인 블로그 - hyeokjaelee.github.io",id:p.BLOG,stacks:[{name:"TypeScript",backgroundColor:"#3178C6"},{name:"Gatsby",backgroundColor:"#663399"},{name:"GraphQL",backgroundColor:"#E10098"},{name:"Tailwind",logo:"TailwindCSS",backgroundColor:"#06B6D4"}],experiences:["이전에 개발한 React 컴포넌트 라이브러리를 활용해 개발 속도를 높였어요.","Markdown을 활용해 글을 작성하고 Github action을 통해 자동으로 배포할 수 있게 구성했어요."],links:[{name:"Gatsby 블로그를 개발하면서",href:"/blog-remake-review2"},{name:"Next.js 블로그를 떠나는 이유",href:"/blog-remake-review1"},{name:"hyeokjaelee.github.io",href:"https://github.com/HyeokjaeLee/hyeokjaelee.github.io",type:"github"},{name:"덕업일치 개발자",href:"https://hyeokjaelee.github.io",type:"product"}]}),r.createElement(C,{title:"코드 컨벤션 라이브러리 - Code convetion packages",id:p.CODE_CONVENTION,stacks:[{name:"TypeScript",backgroundColor:"#3178C6"},{name:"Javascript",backgroundColor:"#F7DF1E",blackLogo:!0},{name:"React",backgroundColor:"#61DAFB",blackLogo:!0},{name:"Prettier",backgroundColor:"#F7B93E",blackLogo:!0},{name:"ESLint",backgroundColor:"#4B32C3"},{name:"Stylelint",backgroundColor:"#263238"}],experiences:["PNPM을 통해 모노레포 구조로 설계해 각 린트 설정들을 독립적으로 설치하고 사용할 수 있게 했어요.","개인 프로젝트들에 적용해 가독성을 높였어요.","Github action을 통해 자동으로 NPM에 배포할 수 있게 구성했어요."],links:[{name:"code-convetion-packages",href:"https://github.com/HyeokjaeLee/code-convetion-packages",type:"github"}]}),r.createElement(C,{title:"비공식 한국 COVID-19 API - Korea COVID-19 API",id:p.KOREA_COVID_19_API,stacks:[{name:"TypeScript",backgroundColor:"#3178C6"},{name:"Express",backgroundColor:"#000000"},{name:"GraphQL",backgroundColor:"#E10098"}],experiences:["여러 API에 존재하는 COVID-19 관련 데이터를 정형화하고 API로 제공해요.","GraphQL의 편리함을 느껴 처음으로 GraphQL API를 개발했어요.","외부 API의 변경에 따라 유지보수 했어요."],links:[{name:"COVID-19 API 업데이트",href:"/covid-19-api-update"},{name:"code-convetion-packages",href:"https://github.com/HyeokjaeLee/code-convetion-packages",type:"github"}]}),r.createElement(C,{title:"한국 COVID-19 Dashboard - COVID-19 dashboard",id:p.KOREA_COVID_19_DASHBOARD,stacks:[{name:"Javascript",backgroundColor:"#F7DF1E",blackLogo:!0},{name:"SCSS",logo:"Sass",backgroundColor:"#CD6799"}],experiences:["프레임워크 없이 개발했어요.","Javascript를 처음 학습하면서 개발했어요."],links:[{name:"covid19-dashboard",href:"https://github.com/HyeokjaeLee/covid19-dashboard",type:"github"}]})));var L=a(7392);const I=()=>{const{search:e}=(0,L.useLocation)(),t=new URLSearchParams(e),a=t.get("portfolio"),l=t.get("preview"),n=!(!a&&null===l);return r.createElement(A.h,{title:n?"Portfolio":"About"})};var P=()=>{const{search:e}=(0,L.useLocation)(),t=new URLSearchParams(e),a=t.get("portfolio"),l=t.get("preview"),n=!(!a&&null===l),o=(0,x.s)((e=>e.setHelloTarget));return(0,r.useEffect)((()=>{if(a)return o(a)}),[a,o]),r.createElement("article",{className:"leading-relaxed mt-8 md:mt-14 p-4 font-nanum-square break-keep flex"},n?r.createElement("div",{className:"flex-1 hidden lg:block"}):null,r.createElement("div",{className:"max-w-3xl mx-auto flex flex-col gap-12"},r.createElement(b,null),n?r.createElement(r.Fragment,null,r.createElement("section",null,r.createElement("h2",{className:"font-bold text-3xl mb-6",id:p.WORK_EXPERIENCE},"👨‍💻 Work experience"),r.createElement("dl",{className:"mb-4"},r.createElement(w,null),r.createElement(S,null))),r.createElement(T,null),r.createElement("section",null,r.createElement("h2",{className:"font-bold text-3xl mb-6",id:p.ETC},"🗃️ Etc"),r.createElement("ul",null,r.createElement(C,{title:"정보처리기사 자격증",period:"2021.06",summaries:["정보처리기사 자격증 취득"]}),r.createElement(C,{title:"프로그램 저작권 등록 - Webtoon Hub",period:"2021.02",summaries:["등록번호: C-2021-020527"]}),r.createElement(C,{title:"공주대학교 개발 창업 동아리 - Primitive",period:"2016.05",summaries:["재학 중: Android 개발 강의","졸업 후: 취업 멘토링 활동"]}))),r.createElement("section",null,r.createElement("h2",{className:"font-bold text-3xl mb-6",id:p.EDU},"🎓 Education"),r.createElement("ul",null,r.createElement(C,{title:"공주대학교",period:"2016.04 - 2022.08",summaries:["컴퓨터 공학 학사"]})))):null,r.createElement("footer",{className:"py-12 border-t"},r.createElement(v.w,null))),n?r.createElement(g,null):null)}},2273:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#b8c8c8","images":{"fallback":{"src":"/static/6225b29fa7326310c42379adc1d4cac3/f505e/profile.jpg","srcSet":"/static/6225b29fa7326310c42379adc1d4cac3/df74b/profile.jpg 63w,\\n/static/6225b29fa7326310c42379adc1d4cac3/8bb35/profile.jpg 125w,\\n/static/6225b29fa7326310c42379adc1d4cac3/f505e/profile.jpg 250w","sizes":"(min-width: 250px) 250px, 100vw"},"sources":[{"srcSet":"/static/6225b29fa7326310c42379adc1d4cac3/74c72/profile.webp 63w,\\n/static/6225b29fa7326310c42379adc1d4cac3/d66e1/profile.webp 125w,\\n/static/6225b29fa7326310c42379adc1d4cac3/e7160/profile.webp 250w","type":"image/webp","sizes":"(min-width: 250px) 250px, 100vw"}]},"width":250,"height":250}')}}]);
//# sourceMappingURL=component---src-pages-about-index-tsx-83c6ab3ca3a95f41715f.js.map