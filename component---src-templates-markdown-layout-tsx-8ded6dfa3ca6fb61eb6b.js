(self.webpackChunkhyeokjaelee_github_io=self.webpackChunkhyeokjaelee_github_io||[]).push([[387],{8626:function(e,t,n){"use strict";n.d(t,{J:function(){return a}});var r=n(7294),l=n(5444),a=function(e){var t=e.navItem;return r.createElement("nav",{className:"nav"},r.createElement("div",{className:"nav-item"}," ",t),r.createElement("ul",{className:"nav-item link"},r.createElement("li",null,r.createElement(l.rU,{to:"/"},"Posts")),r.createElement("li",null,r.createElement(l.rU,{to:"/about"},"About"))))}},9521:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var r=n(5444),l=n(7294),a=n(5186),c=n(8626),m=n.p+"static/post-profile-10ec8ddcbab9944c96b10592f92c731d.jpg",i=n(8448),o=n.n(i),s=n(7610),u=n.n(s),E=n(7027),d=function(){var e=(0,l.useRef)(),t=(0,l.useState)("pending"),n=t[0],r=t[1],a=(0,l.useContext)(E.N).theme;return(0,l.useEffect)((function(){var t=e.current,n=document.createElement("script"),l={src:"https://utteranc.es/client.js",repo:"HyeokjaeLee/hyeokjaelee.github.io","issue-term":"url",theme:"dark"===a?"photon-dark":"github-light",crossorigin:"anonymous",async:"true"};Object.entries(l).forEach((function(e){var t=e[0],r=e[1];n.setAttribute(t,r)})),n.onload=function(){return r("success")},n.onerror=function(){return r("failed")},t.innerHTML="",t.appendChild(n)}),[a]),l.createElement("div",{className:"content"},l.createElement("section",{ref:e}),"failed"===n&&l.createElement("div",null,"Error. Please try again."),"pending"===n&&l.createElement("div",null,"Loading script..."))},g=function(e){var t=e.data,n=t.markdownRemark,i=t.allMarkdownRemark,s=n.frontmatter,E=i.nodes,g=E.findIndex((function(e){return e.id===n.id})),k=g>0?E[g-1]:null,y=g<E.length-1?E[g+1]:null,f=function(e){var t=e.postNode,n=e.direction;if(t){var a=[l.createElement("div",null,l.createElement("h2",null,t.frontmatter.title),l.createElement("p",null,t.frontmatter.description))];return"left"===n?a.unshift(l.createElement(o(),{className:"arrow"})):a.push(l.createElement(u(),{className:"arrow"})),l.createElement("div",{id:"otherContents",className:"content"},l.createElement(r.rU,{className:n,to:t.fields.slug},a))}return l.createElement(l.Fragment,null)},p=s.tag.map((function(e,t){return l.createElement("li",{key:t},e)}));return l.createElement(l.Fragment,null,l.createElement(a.q,{title:s.title,meta:[{name:"description",content:s.description},{name:"keywords",content:s.tag.join()}]}),l.createElement(c.J,null),l.createElement("div",{className:"content first"},l.createElement("article",{id:"md-article"},l.createElement("header",null,l.createElement("i",null,"Posted on ",s.date),l.createElement("h2",null,s.emoji," ",s.title),l.createElement("ul",{className:"tags individuals"},p)),l.createElement("hr",null),l.createElement("section",{dangerouslySetInnerHTML:{__html:n.html}}),l.createElement("footer",null,l.createElement("img",{className:"profile pic",src:m}),l.createElement("div",{className:"profile text"},l.createElement("h1",null,"Hyeok-Jae Lee"),l.createElement("p",null,"개발자를 꿈꾸는 코더"))))),l.createElement(d,null),l.createElement(f,{postNode:k,direction:"left"}),l.createElement(f,{postNode:y,direction:"right"}))}},8448:function(e,t,n){var r=n(7294);function l(e){return r.createElement("svg",e,[r.createElement("path",{id:"XMLID_6_",d:"M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M205.606,234.394\r\n\tc5.858,5.857,5.858,15.355,0,21.213C202.678,258.535,198.839,260,195,260s-7.678-1.464-10.606-4.394l-80-79.998\r\n\tc-2.813-2.813-4.394-6.628-4.394-10.606c0-3.978,1.58-7.794,4.394-10.607l80-80.002c5.857-5.858,15.355-5.858,21.213,0\r\n\tc5.858,5.857,5.858,15.355,0,21.213l-69.393,69.396L205.606,234.394z",key:0}),r.createElement("g",{key:1}),r.createElement("g",{key:2}),r.createElement("g",{key:3}),r.createElement("g",{key:4}),r.createElement("g",{key:5}),r.createElement("g",{key:6}),r.createElement("g",{key:7}),r.createElement("g",{key:8}),r.createElement("g",{key:9}),r.createElement("g",{key:10}),r.createElement("g",{key:11}),r.createElement("g",{key:12}),r.createElement("g",{key:13}),r.createElement("g",{key:14}),r.createElement("g",{key:15})])}l.defaultProps={version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 330 330",style:{enableBackground:"new 0 0 330 330"},xmlSpace:"preserve"},e.exports=l,l.default=l},7610:function(e,t,n){var r=n(7294);function l(e){return r.createElement("svg",e,[r.createElement("path",{id:"XMLID_2_",d:"M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M225.606,175.605\r\n\tl-80,80.002C142.678,258.535,138.839,260,135,260s-7.678-1.464-10.606-4.394c-5.858-5.857-5.858-15.355,0-21.213l69.393-69.396\r\n\tl-69.393-69.392c-5.858-5.857-5.858-15.355,0-21.213c5.857-5.858,15.355-5.858,21.213,0l80,79.998\r\n\tc2.814,2.813,4.394,6.628,4.394,10.606C230,168.976,228.42,172.792,225.606,175.605z",key:0}),r.createElement("g",{key:1}),r.createElement("g",{key:2}),r.createElement("g",{key:3}),r.createElement("g",{key:4}),r.createElement("g",{key:5}),r.createElement("g",{key:6}),r.createElement("g",{key:7}),r.createElement("g",{key:8}),r.createElement("g",{key:9}),r.createElement("g",{key:10}),r.createElement("g",{key:11}),r.createElement("g",{key:12}),r.createElement("g",{key:13}),r.createElement("g",{key:14}),r.createElement("g",{key:15})])}l.defaultProps={version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 330 330",style:{enableBackground:"new 0 0 330 330"},xmlSpace:"preserve"},e.exports=l,l.default=l}}]);
//# sourceMappingURL=component---src-templates-markdown-layout-tsx-8ded6dfa3ca6fb61eb6b.js.map