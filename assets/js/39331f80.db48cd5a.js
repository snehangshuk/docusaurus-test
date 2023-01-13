"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[353],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>p});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),m=c(t),p=o,f=m["".concat(s,".").concat(p)]||m[p]||u[p]||i;return t?a.createElement(f,l(l({ref:n},d),{},{components:t})):a.createElement(f,l({ref:n},d))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=m;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var c=2;c<i;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3743:(e,n,t)=>{t.d(n,{Z:()=>f});var a=t(7462),o=t(7294),i=t(6668);function l(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const a=t.slice(2,e.level);e.parentIndex=Math.max(...a),t[e.level]=n}));const a=[];return n.forEach((e=>{const{parentIndex:t,...o}=e;t>=0?n[t].children.push(o):a.push(o)})),a}function r(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return n.flatMap((e=>{const n=r({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[{...e,children:n}]:n}))}function s(e){const n=e.getBoundingClientRect();return n.top===n.bottom?s(e.parentNode):n}function c(e,n){let{anchorTopOffset:t}=n;const a=e.find((e=>s(e).top>=t));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function d(){const e=(0,o.useRef)(0),{navbar:{hideOnScroll:n}}=(0,i.L)();return(0,o.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function u(e){const n=(0,o.useRef)(void 0),t=d();(0,o.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:o,minHeadingLevel:i,maxHeadingLevel:l}=e;function r(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),r=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const a=[];for(let o=n;o<=t;o+=1)a.push(`h${o}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:i,maxHeadingLevel:l}),s=c(r,{anchorTopOffset:t.current}),d=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(o),e.classList.add(o),n.current=e):e.classList.remove(o)}(e,e===d)}))}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}),[e,t])}function m(e){let{toc:n,className:t,linkClassName:a,isChild:i}=e;return n.length?o.createElement("ul",{className:i?void 0:t},n.map((e=>o.createElement("li",{key:e.id},o.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),o.createElement(m,{isChild:!0,toc:e.children,className:t,linkClassName:a}))))):null}const p=o.memo(m);function f(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:d,maxHeadingLevel:m,...f}=e;const g=(0,i.L)(),v=d??g.tableOfContents.minHeadingLevel,h=m??g.tableOfContents.maxHeadingLevel,k=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return(0,o.useMemo)((()=>r({toc:l(n),minHeadingLevel:t,maxHeadingLevel:a})),[n,t,a])}({toc:n,minHeadingLevel:v,maxHeadingLevel:h});return u((0,o.useMemo)((()=>{if(s&&c)return{linkClassName:s,linkActiveClassName:c,minHeadingLevel:v,maxHeadingLevel:h}}),[s,c,v,h])),o.createElement(p,(0,a.Z)({toc:k,className:t,linkClassName:s},f))}},5162:(e,n,t)=>{t(7294)},5488:(e,n,t)=>{t(7294),t(2389)},1852:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>d,default:()=>g,frontMatter:()=>c,metadata:()=>u,toc:()=>p});var a=t(7462),o=t(7294),i=t(3905),l=t(3743);const r="tableOfContentsInline_prmo";function s(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return o.createElement("div",{className:r},o.createElement(l.Z,{toc:n,minHeadingLevel:t,maxHeadingLevel:a,className:"table-of-contents",linkClassName:null}))}t(5488),t(5162),t(9960);const c={sidebar_position:2},d="Table of Contents",u={unversionedId:"docusaurus-mdx-guide/table-of-contents",id:"docusaurus-mdx-guide/table-of-contents",title:"Table of Contents",description:"Two ways to list table of contents.",source:"@site/docs/docusaurus-mdx-guide/table-of-contents.mdx",sourceDirName:"docusaurus-mdx-guide",slug:"/docusaurus-mdx-guide/table-of-contents",permalink:"/docusaurus-test/docusaurus-mdx-guide/table-of-contents",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/docusaurus-mdx-guide/table-of-contents.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Headings and Ids",permalink:"/docusaurus-test/docusaurus-mdx-guide/heading-ids"},next:{title:"Admonition",permalink:"/docusaurus-test/docusaurus-mdx-guide/admonition"}},m={},p=[{value:"Dummy Heading 2",id:"section1",level:2},{value:"Dummy Heading 3",id:"section1.1",level:3},{value:"Dummy Heading 3.1",id:"section1.1.1",level:4},{value:"Dummy Heading 4",id:"section2.1",level:3},{value:"Dummy Heading 4.1",id:"secion2.1.1",level:4},{value:"Handling custom table of contents",id:"handling-custom-table-of-contents",level:2}],f={toc:p};function g(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"table-of-contents"},"Table of Contents"),(0,i.kt)("p",null,"Two ways to list table of contents."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"List the contents within the same document."),(0,i.kt)("li",{parentName:"ol"},"List contents for different documents. Say, an index page.")),(0,i.kt)("br",null),(0,i.kt)("p",null,"Below is auto listed TOC for this document"),(0,i.kt)(s,{toc:p,mdxType:"TOCInline"}),(0,i.kt)("p",null,"It is also possible to display an inline table of contents directly inside a Markdown document. This is the simplest way and is autogenerated on usage of ",(0,i.kt)("inlineCode",{parentName:"p"},"TOCInline")," component from docusaurus. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},"## Dummy Heading 2 {#section1}\n### Dummy Heading 3 {#section1.1}\n#### Dummy Heading 3.1 {#section1.1.1}\n### Dummy Heading 4 {#section2.1} \n#### Dummy Heading 4.1 {#secion2.1.1}\n")),(0,i.kt)("h2",{id:"section1"},"Dummy Heading 2"),(0,i.kt)("h3",{id:"section1.1"},"Dummy Heading 3"),(0,i.kt)("h4",{id:"section1.1.1"},"Dummy Heading 3.1"),(0,i.kt)("h3",{id:"section2.1"},"Dummy Heading 4"),(0,i.kt)("h4",{id:"secion2.1.1"},"Dummy Heading 4.1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import TOCInline from '@theme/TOCInline';\n\n<TOCInline toc={toc} />\n")),(0,i.kt)("admonition",{title:"How to control the depth of TOC?",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},":depth:")," param or can be controlled by ",(0,i.kt)("inlineCode",{parentName:"li"},"toc_min_heading_level")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"toc_max_heading_level")," meta for individual files and ",(0,i.kt)("inlineCode",{parentName:"li"},"minHeadingLevel")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"maxHeadingLevel")," for global theme config in docusaurus as given in docs."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},":backlinks:")," seems to be set to none for all and also there is no direct replacement in MDX via Docusaurus. So, can be ignored."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},":local:")," can be ignored as well cause the TOCInline component works only for local (same) document."))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"toc")," can easily be cut out to exclude unwanted nodes or insert extra nodes, and create a new TOC tree."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},"<TOCInline\n  // Only show h2 and h4 headings\n  toc={toc.filter((node) => node.level === 2 || node.level === 4)}\n  minHeadingLevel={2}\n  // Important: Show h4 headings in addition to the default h2 and h3 headings\n  maxHeadingLevel={4}\n/>\n")),(0,i.kt)("p",null,"This is how it be rendered: "),(0,i.kt)(s,{toc:p.filter((e=>2===e.level||4===e.level)),maxHeadingLevel:4,mdxType:"TOCInline"}),(0,i.kt)("p",null,"Please refer docusaurus ",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features/inline-toc"},"Inline TOC docs")," for more insights into syntax and usage of ",(0,i.kt)("inlineCode",{parentName:"p"},"TOCInline"),"."),(0,i.kt)("h2",{id:"handling-custom-table-of-contents"},"Handling custom table of contents"),(0,i.kt)("p",null,"If one individual section requires to have its own TOC. For example, for creating TOC for subheading for ",(0,i.kt)("inlineCode",{parentName:"p"},"Dummy Heading 2")," section."),(0,i.kt)("p",null,"Use the level to create the TOC as shown below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},"<TOCInline\n  toc={\n    // Only show section1.1 and section2.1 and thier next level headings\n    [toc[1], toc[2], toc[3], toc[4]]\n  }\n  maxHeadingLevel={4}\n/>\n")),(0,i.kt)(s,{toc:[p[1],p[2],p[3],p[4]],maxHeadingLevel:4,mdxType:"TOCInline"}),(0,i.kt)("p",null,"This can be achived by filtering ",(0,i.kt)("inlineCode",{parentName:"p"},"toc")," with the heading id. Use the following to filter based on heading id:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},"<TOCInline\n  // Only show section1.1 and section2.1 headings\n  toc={toc.filter((node) => node.id === 'section1.1' || node.id === 'section2.1')}\n/>\n")),(0,i.kt)("p",null,"Rendered as:"),(0,i.kt)(s,{toc:p.filter((e=>"section2.1"===e.id||"section1.1"===e.id)),mdxType:"TOCInline"}))}g.isMDXComponent=!0}}]);