"use strict";(self.webpackChunks_quest_2=self.webpackChunks_quest_2||[]).push([[852],{852:(e,s,n)=>{n.r(s),n.d(s,{default:()=>k});var t=n(60),r=n(560);const c={testPage:"Test_testPage__f3S+p",content:"Test_content__-CZql",testName:"Test_testName__o759W"};var o=n(624);const i="Answer_answer__QQOcC",l="Answer_answerRadio__1ry79",a="Answer_answerText__6S9ya";var d=n(496);const u=(0,t.memo)((e=>{let{answer:s,id:n,value:t,setSelectedAnswerIndex:r}=e;return(0,d.jsxs)("div",{className:i,children:[(0,d.jsx)("input",{className:l,type:"radio",id:n,name:"answer",value:t,onClick:e=>r(e.target.value)}),(0,d.jsx)("label",{className:a,htmlFor:n,children:s})]})})),x="AnswerList_controls__oX1r-",_="AnswerList_answersList__2yXy0",w="NextQuestionBtn_nextQuestionBtn__6QKiS",m=(0,t.memo)((()=>(0,d.jsx)("svg",{viewBox:"0 0 42 74",fill:"black",xmlns:"http://www.w3.org/2000/svg",children:(0,d.jsx)("path",{d:"M25.6692 36.888L0.0351562 9.14326L7.83682 0.699203L41.2725 36.888L7.83682 73.0768L0.0351562 64.6328L25.6692 36.888Z"})}))),h=e=>{let{onNextQuestionClick:s,selectedAnswerIndex:n}=e;const t=!n;return(0,d.jsx)("button",{type:"button",className:w,onClick:s,disabled:t,children:(0,d.jsx)(m,{})})};var j=n(620);const A=e=>{const{answers:s,questionAmount:n,currentQuestionIndex:c,correctAnswerIndex:i}=e,{selectedAnswerIndex:l,setSelectedAnswerIndex:a,onNextQuestionClick:w}=function(e,s,n){const c=(0,o.OY)(),i=(0,r.i6)(),[l,a]=(0,t.useState)(null);return{onNextQuestionClick:function(){if(e>=s-1)return c((0,j.MX)({selectedAnswerIndex:l,correctAnswerIndex:n})),c((0,j.KW)()),void i("result");c((0,j.MX)({selectedAnswerIndex:l,correctAnswerIndex:n})),c((0,j.UF)({selectedAnswerIndex:l})),a(null)},selectedAnswerIndex:l,setSelectedAnswerIndex:a}}(c,n,i);return(0,d.jsxs)("form",{className:x,children:[(0,d.jsx)("div",{className:_,children:s.map(((e,s)=>(0,d.jsx)(u,{answer:e,id:s+c,value:s,setSelectedAnswerIndex:a},e+s+c)))}),(0,d.jsx)(h,{onNextQuestionClick:w,selectedAnswerIndex:l})]})},N="Question_question__0nk1D",p="Question_questionTitle__iOS4h",g=e=>{let{test:s}=e;const n=(0,o.w1)((e=>e.test.currentQuestionIndex)),t=s.questions[n];return console.log(t),(0,d.jsxs)("section",{className:N,children:[(0,d.jsx)("h2",{className:p,children:t.title}),(0,d.jsx)(A,{testId:s.id,answers:t.answers,questionAmount:s.questions.length,currentQuestionIndex:n,correctAnswerIndex:t.correctAnswer})]})},I="ProgressLine_progressWrap__6mQZO",v="ProgressLine_progressInfo__TDJ2B",Q="ProgressLine_progressLine__-GqJr",q=e=>{const{questionNumber:s,questionAmount:n}=e;return(0,d.jsxs)("div",{className:I,children:[(0,d.jsxs)("label",{className:v,htmlFor:"test-progress",children:[(0,d.jsx)("span",{children:s}),(0,d.jsx)("span",{children:"/"}),(0,d.jsxs)("span",{children:[n," "]})]}),(0,d.jsx)("progress",{className:Q,id:"test-progress",value:s,max:n})]})};var L=n(420),f=n(596);const k=()=>{const e=(0,o.OY)();let{id:s}=(0,r.W4)();s=+s;const{data:n,error:i,isLoading:l}=L.q.useFetchTestQuery(s),a=(0,o.w1)((e=>e.test.currentQuestionIndex));return(0,t.useEffect)((()=>{e((0,j.Gg)(n))}),[n]),l?(0,d.jsx)(f.c,{}):(0,d.jsx)("main",{className:c.testPage,children:(0,d.jsxs)("div",{className:[c.content,"wrapper"].join(" "),children:[(0,d.jsx)("h1",{className:c.testName,children:n.name}),(0,d.jsx)(g,{test:n}),(0,d.jsx)(q,{questionNumber:a+1,questionAmount:n.questions.length})]})})}}}]);
//# sourceMappingURL=852.5cbcedc9.chunk.js.map