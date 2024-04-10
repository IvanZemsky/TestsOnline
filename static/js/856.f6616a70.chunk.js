"use strict";(self.webpackChunks_quest_2=self.webpackChunks_quest_2||[]).push([[856],{596:(e,s,t)=>{t.d(s,{c:()=>c});const a="Loading_container__UNdXp",r="Loading_loader__yIJWx";var n=t(496);const c=()=>(0,n.jsx)("div",{className:a,children:(0,n.jsx)("div",{className:r})})},856:(e,s,t)=>{t.r(s),t.d(s,{default:()=>b});var a=t(60);const r={testCardBorder:"TestCard_testCardBorder__TWVGp",testCard:"TestCard_testCard__T4N1m",imgWrap:"TestCard_imgWrap__Fa5iL",testImg:"TestCard_testImg__SsxJ5",name:"TestCard_name__enVoe",desc:"TestCard_desc__eYPc7",startBtn:"TestCard_startBtn__vdjli"};var n=t(12),c=t(496);const l=(0,a.memo)((e=>{let{test:s}=e;const{id:t,name:a,desc:l,cover:i}=s;return(0,c.jsx)("div",{className:r.testCardBorder,children:(0,c.jsxs)("div",{className:r.testCard,children:[(0,c.jsx)("div",{className:r.imgWrap,children:(0,c.jsx)("img",{className:r.testImg,src:i,alt:"Cover of the test: ".concat(a)})}),(0,c.jsxs)("div",{className:r.info,children:[(0,c.jsx)("h2",{className:r.name,children:a}),(0,c.jsx)("p",{className:r.desc,children:l})]}),(0,c.jsx)(n.cH,{className:r.startBtn,to:"/tests/".concat(t),children:"\u041d\u0430\u0447\u0430\u0442\u044c"})]})})})),i={testCards:"Tests_testCards__bYhlD",testsContent:"Tests_testsContent__u5LrQ"},o=()=>(0,c.jsxs)("div",{children:["\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e ",":("]});var d=t(624),_=t(420);const m="TestsPanel_panel__mHnvH",h="TestsPanel_content__j0sdp",v="TestsPanel_buttons__zkMV0",x="TestsPanel_panelCategories__jp9Hm",u="TestsSearch_testsSearch__lf5+8";var g=t(416);const j=()=>{const e=(0,d.OY)(),s=(0,d.w1)((e=>e.filter.filters.searchText));return(0,c.jsx)("input",{type:"text",className:u,placeholder:"\u041f\u043e\u0438\u0441\u043a",onChange:s=>e((0,g.Wo)(s.target.value)),value:s})},p={categories:"CategoryList_categories__lurC7",wrapped:"CategoryList_wrapped__CXxAd"},C={categoryText:"Category_categoryText__dn2Zq",categoryRadio:"Category_categoryRadio__jjO74"},w=e=>{let{category:s}=e;const t=(0,d.OY)(),a=(0,d.w1)((e=>e.filter.filters.category)),r=s.value===a;return(0,c.jsxs)("div",{className:C.category,children:[(0,c.jsx)("input",{className:C.categoryRadio,type:"radio",id:s.value,name:"category",value:s.value,checked:r,onChange:()=>{return e=s.value,void t((0,g.S0)(e));var e}}),(0,c.jsx)("label",{className:C.categoryText,htmlFor:s.value,children:s.name})]})};const y=[{name:"\u0412\u0441\u0435",value:"all"},{name:"\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",value:"programming"},{name:"\u041c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u043a\u0430",value:"math"},{name:"\u042f\u0437\u044b\u043a\u0438",value:"languages"},{name:"\u0418\u0441\u0442\u043e\u0440\u0438\u044f",value:"history"},{name:"\u0424\u0438\u0437\u0438\u043a\u0430",value:"physics"},{name:"\u0425\u0438\u043c\u0438\u044f",value:"chemistry"}],f=e=>{let{amount:s,isWrapped:t}=e,a=function(e,s){let t=[];return"all"===s?e:(s.forEach((s=>{t.push(e[s])})),t)}(y,s);const r=t?p.wrapped:null;return(0,c.jsx)("form",{className:[p.categories,r].join(" "),children:a.map((e=>(0,c.jsx)(w,{category:e},e.value)))})};function N(){return(0,c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"40",hanging:"40",children:(0,c.jsx)("path",{d:"M3.5 2A1.5 1.5 0 0 0 2 3.5v2A1.5 1.5 0 0 0 3.5 7h2A1.5 1.5 0 0 0 7 5.5v-2A1.5 1.5 0 0 0 5.5 2zm0 7A1.5 1.5 0 0 0 2 10.5v2A1.5 1.5 0 0 0 3.5 14h2A1.5 1.5 0 0 0 7 12.5v-2A1.5 1.5 0 0 0 5.5 9zM9 3.5A1.5 1.5 0 0 1 10.5 2h2A1.5 1.5 0 0 1 14 3.5v2A1.5 1.5 0 0 1 12.5 7h-2A1.5 1.5 0 0 1 9 5.5zM10.5 9A1.5 1.5 0 0 0 9 10.5v2a1.5 1.5 0 0 0 1.5 1.5h2a1.5 1.5 0 0 0 1.5-1.5v-2A1.5 1.5 0 0 0 12.5 9z"})})}const A="AllCategoriesBtn_categoriesBtn__p0ita",T=e=>{let{setIsActive:s}=e;return(0,c.jsx)("button",{className:A,onClick:()=>s(!0),children:(0,c.jsx)(N,{})})},B={modal:"Modal_modal__Fts3I",active:"Modal_active__ndHw5",content:"Modal_content__RKstA",closeBtn:"Modal_closeBtn__n8EDe"},L=()=>(0,c.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 40 40",fill:"#fff",xmlns:"http://www.w3.org/2000/svg",children:[(0,c.jsx)("rect",{y:"35.3553",width:"50",height:"6",rx:"3",transform:"rotate(-45 0 35.3553)"}),(0,c.jsx)("rect",{x:"4.33459",y:"0.0918579",width:"50",height:"6",rx:"3",transform:"rotate(45 4.33459 0.0918579)"})]}),k=e=>{let{isActive:s,setIsActive:t,children:a}=e;const r=s?B.active:null;return(0,c.jsx)("div",{className:[B.modal,r].join(" "),onClick:()=>t(!1),children:(0,c.jsxs)("div",{className:B.content,onClick:e=>e.stopPropagation(),children:[a,(0,c.jsx)("button",{className:B.closeBtn,onClick:()=>t(!1),children:(0,c.jsx)(L,{})})]})})};var I=t(916);const M=()=>{const[e,s]=(0,a.useState)(!1);return(0,c.jsxs)("div",{className:m,children:[(0,c.jsxs)(I.c,{additonalStyles:[h],children:[(0,c.jsx)(j,{}),(0,c.jsxs)("div",{className:v,children:[(0,c.jsx)("div",{className:x,children:(0,c.jsx)(f,{amount:[0,1,2,3,4]})}),(0,c.jsx)(T,{setIsActive:s})]})]}),(0,c.jsx)(k,{isActive:e,setIsActive:s,children:(0,c.jsx)(f,{amount:"all",isWrapped:!0})})]})};var W=t(596);const b=()=>{const{previews:e,error:s,isLoading:t}=function(){const e=(0,d.w1)((e=>e.filter.filters.searchText)),s=(0,d.w1)((e=>e.filter.filters.category));let t=[];const{data:a,error:r,isLoading:n}=_.q.useFetchPreviewsByCategoryQuery(s);var c,l;return a&&(c=e,l=["name","desc"],t=a.filter((e=>{const s=c.toLowerCase();return l.reduce(((t,a)=>t||e[a].toLowerCase().includes(s)),!1)}))),{previews:t,error:r,isLoading:n}}();return(0,c.jsxs)("main",{className:i.tests,children:[(0,c.jsx)(M,{}),t?(0,c.jsx)(W.c,{}):(0,c.jsx)(I.c,{additonalStyles:[i.testsContent],children:(0,c.jsx)("div",{className:i.testCards,children:s||!e.length?(0,c.jsx)(o,{}):e.map((e=>(0,c.jsx)(l,{test:e},e.id)))})})]})}}}]);
//# sourceMappingURL=856.f6616a70.chunk.js.map