(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6563],{40639:function(e,s,l){Promise.resolve().then(l.bind(l,80921))},80921:function(e,s,l){"use strict";l.r(s),l.d(s,{default:function(){return T}});var t=l(57437),n=l(45303),a=l(2265),c=e=>{let[s,l]=(0,a.useState)({fen:void 0,title:"No data found",player:"w",moves:[],id:"",rate:"?"}),[t,n]=(0,a.useState)(null),[c,i]=(0,a.useState)(!1),r=async()=>{i(!0);try{let e;if(!e){let s=await fetch("".concat("http://fall2324w3g9.int3306.freeddns.org","/api/puzzle/rated"));e=await s.json()}if(e){let s=e.fen.includes(" b ")?"Black":"White",t=e.moves.replace(/\d+\./gi,"").replace("..","").split(" ").filter(e=>e&&!["*","1-0","0-1","1/2-1/2"].includes(e));l({id:e.id,moves:t,player:s,title:e.name||"Random Match",fen:(null==e?void 0:e.fen)||"",results:e.moves,date:e.createdAt,rate:e.rating})}else l({...s})}catch(e){console.log(e),n(e),i(!1)}finally{i(!1)}};return(0,a.useEffect)(()=>{e&&r()},[e]),{data:s,error:t,isLoading:c,onSkip:()=>{r()}}},i=l(64755),r=l(24033),o=l(54131);let d=e=>e.slice().reverse();async function h(e){return new Promise(s=>{setTimeout(()=>{s(void 0)},e)})}d([[0,0,0,0,0,0,0,0],[5,5,5,5,5,5,5,5],[1,1,2,3,3,2,1,1],[.5,.5,1,2.5,2.5,1,.5,.5],[0,0,0,2,2,0,0,0],[.5,-.5,-1,0,0,-1,-.5,.5],[.5,1,1,-2,-2,1,1,.5],[0,0,0,0,0,0,0,0]]),d([[-2,-1,-1,-1,-1,-1,-1,-2],[-1,0,0,0,0,0,0,-1],[-1,0,.5,1,1,.5,0,-1],[-1,.5,.5,1,1,.5,.5,-1],[-1,0,1,1,1,1,0,-1],[-1,1,1,1,1,1,1,-1],[-1,.5,0,0,0,0,.5,-1],[-2,-1,-1,-1,-1,-1,-1,-2]]),d([[0,0,0,0,0,0,0,0],[.5,1,1,1,1,1,1,.5],[-.5,0,0,0,0,0,0,-.5],[-.5,0,0,0,0,0,0,-.5],[-.5,0,0,0,0,0,0,-.5],[-.5,0,0,0,0,0,0,-.5],[-.5,0,0,0,0,0,0,-.5],[0,0,0,.5,.5,0,0,0]]),d([[-3,-4,-4,-5,-5,-4,-4,-3],[-3,-4,-4,-5,-5,-4,-4,-3],[-3,-4,-4,-5,-5,-4,-4,-3],[-3,-4,-4,-5,-5,-4,-4,-3],[-2,-3,-3,-4,-4,-3,-3,-2],[-1,-2,-2,-2,-2,-2,-2,-1],[2,2,0,0,0,0,2,2],[2,3,1,0,0,1,3,2]]);var f=e=>{let[s,l]=(0,a.useState)(!1),[t,n]=(0,a.useState)(!0),[c,d]=(0,a.useState)([]),[f,u]=(0,a.useState)(new i.qQ),[x,j]=(0,a.useState)(null),[m,p]=(0,a.useState)(""),[v,z]=(0,a.useState)(""),g=(0,r.useRouter)();(0,a.useEffect)(()=>{},[s]),(0,a.useEffect)(()=>{e&&e.fen&&w()},[e,v]);let w=()=>{e&&e.fen&&(u(new i.qQ(e.fen)),d(e.moves),l(!1),n(!0),z(e.id),p("pending"))},N=e=>{e&&(g.push("/puzzle/".concat(e)),z(e))},S=e=>{try{let s=new i.qQ(f.fen()),l=s.move(e);if(console.log("result",l),null===l)return!1;if(l.san!==c[0])return null;return l}catch(e){return j(e),!1}},y=async()=>{let e=c[0],s=c[1],t=f;console.log("validMoves:",c),console.log("hintMove:",e),console.log("computerMove:",s),e&&(p("pending"),setTimeout(()=>{let s=new i.qQ(t.fen()),l=s.move(e);u(t=new i.qQ(l.after))},200)),await h(1e3),console.log(2),s?(p("pending"),setTimeout(()=>{let e=new i.qQ(t.fen()),l=e.move(s);u(t=new i.qQ(l.after)),console.log(3)},200),d(c.slice(2))):(l(!0),n(!1),p("done"),d(c.slice(1))),u(t)};return{game:f,error:x,message:m,solved:s,onDrop:(e,s)=>{let a=S({from:e,to:s,promotion:"q"});if(!1===a)return!0;if(!a)return p("done"),t&&(l(!1),n(!1)),!1;u(new i.qQ(a.after));let r=c[1],o=c.slice(2);if(d(c.slice(1)),r)p("pending"),setTimeout(()=>{let e=new i.qQ(a.after),s=e.move(r);d(o),u(new i.qQ(s.after))},200);else if(l(!0),t){p("done");let e=JSON.stringify({tacticsProblemId:v,seconds:60,isPassed:!0,isRated:!0}),s=localStorage.getItem("accessToken");s&&fetch("".concat("http://fall2324w3g9.int3306.freeddns.org")+"/api/puzzle/submit",{method:"POST",headers:{accessToken:s,"Content-Type":"application/json"},body:e}).then(e=>console.log(e)).catch(e=>console.log("error",e)),l(!0)}return!0},onSkip:()=>{N((0,o.randomInt)(1,1e3).toString())},onHint:y,onRetry:()=>{e&&e.fen&&w()},onNext:()=>{N((0,o.randomInt)(1,1e3).toString())}}},u=l(88110),x=l.n(u),j=l(20020);l(11438);var m=l(98998),p=l(81581),v=l(3914),z=l(27675),g=l(48247),w=l(91492),N=l(60077),S=l(6378),y=l(68528),b=l(91658),C=e=>{let{puzzleData:s,result:l,status:n,onSkipModal:c,onHint:i,onRetry:r,onNext:o}=e,{name:d}=(0,a.useContext)(b.UserContext);return(0,t.jsxs)("div",{children:[(0,t.jsx)(j.Z,{style:{height:"100px"},children:"pending"===n?"White"===s.player?(0,t.jsxs)("div",{className:"bg-[#f1f1f1] w-full h-full flex justify-center",children:[(0,t.jsx)("span",{children:(0,t.jsx)(p.Z,{})}),(0,t.jsx)("span",{className:"headerControls text-[#321E2B]",children:"White to Move"})]}):(0,t.jsxs)("div",{className:"bg-[#4B4847] w-full h-full flex justify-center",children:[(0,t.jsx)("span",{children:(0,t.jsx)(v.Z,{})}),(0,t.jsx)("span",{className:"headerControls text-[#fff]",children:"Black to Move"})]}):"done"===n?1===l?(0,t.jsxs)("div",{className:"bg-[#81b64c] w-full h-full flex justify-center",children:[(0,t.jsx)("span",{children:(0,t.jsx)(w.default,{style:{fontSize:"90px",color:"#fff"}})}),(0,t.jsx)("span",{className:"headerControls text-[#fff]",children:"Correct"})]}):(0,t.jsxs)("div",{className:"bg-[#e02828] w-full h-full flex justify-center",children:[(0,t.jsx)("span",{children:(0,t.jsx)(N.default,{style:{fontSize:"90px"}})}),(0,t.jsx)("span",{className:"headerControls text-[#321E2B]",children:"Incorrect"})]}):(0,t.jsx)("div",{className:"bg-gray-500 w-full h-full flex justify-center",children:(0,t.jsx)("div",{className:"headerControls text-amber-50",children:"No data found"})})}),(0,t.jsx)(j.Z,{children:(0,t.jsx)("div",{className:"flex justify-center w-full",children:(0,t.jsx)(m.Z,{id:"1",name:"Shark",inGame:!0})})}),(0,t.jsx)(j.Z,{children:(0,t.jsx)("div",{className:"overflow-auto puzzleStats justify-center w-full",children:(0,t.jsxs)("div",{className:"puzzleStatsRow",children:[(0,t.jsx)("div",{className:"puzzleStatsText",children:"Title"}),(0,t.jsx)("div",{className:"puzzleStatsFlex",children:(0,t.jsx)("strong",{className:"puzzleStatsText",children:s.title})})]})})}),(0,t.jsx)(j.Z,{children:(0,t.jsx)("div",{className:"overflow-auto puzzleStats justify-center w-full",children:(0,t.jsxs)("div",{className:"puzzleStatsRow",children:[(0,t.jsx)("div",{className:"puzzleStatsText",children:"Date"}),(0,t.jsx)("div",{className:"puzzleStatsFlex",children:(0,t.jsx)("strong",{className:"puzzleStatsText",children:s.date})})]})})}),(0,t.jsx)(j.Z,{children:(0,t.jsx)("div",{className:"overflow-auto puzzleStats justify-center w-full",children:(0,t.jsxs)("div",{className:"puzzleStatsRow",children:[(0,t.jsx)("div",{className:"puzzleStatsText",children:"Rating"}),(0,t.jsx)("div",{className:"puzzleStatsFlex",children:(0,t.jsx)("strong",{className:"puzzleStatsText",children:s.rate})})]})})}),(0,t.jsx)(j.Z,{className:"flex justify-center pt-10 overflow-auto w-full",children:(0,t.jsx)("div",{children:"pending"===n?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(x(),{type:"primary",icon:(0,t.jsx)(y.Z,{}),className:"buttonSize",danger:!0,onClick:c,children:"Skip"}),(0,t.jsx)(x(),{icon:(0,t.jsx)(g.Z,{}),className:"hintButton buttonSize",onClick:i,style:{background:"#f1f1f1"},children:"Hint"})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(x(),{icon:(0,t.jsx)(S.Z,{style:{color:"#000"}}),onClick:r,className:"buttonSize",style:{backgroundColor:"#f1f1f1"},children:"Retry"}),(0,t.jsx)(x(),{icon:(0,t.jsx)(z.Z,{}),className:"hintButton buttonSize",onClick:o,style:{background:"#81b64c"},children:"Next"})]})})})]})},k=e=>{let{isOpen:s,children:l}=e;return s?(0,t.jsx)("div",{className:"modal",children:(0,t.jsx)("div",{className:"modal-content",children:l})}):(0,t.jsx)(t.Fragment,{})},M=e=>(0,t.jsx)(k,{isOpen:e.isOpen,children:(0,t.jsxs)("div",{className:"p-[24px]",children:[e.isAllowClose&&(0,t.jsx)("div",{className:"modal-close-row",onClick:()=>{e.onCloseModal()},children:(0,t.jsx)(N.default,{width:20,height:20,className:"modal-close-row-button"})}),(0,t.jsxs)("div",{className:"waiting-content-inner",children:[(0,t.jsx)("span",{children:e.message}),(0,t.jsx)("div",{className:"result-progress-bar",children:(0,t.jsx)("div",{className:"result-circle result-border"})})]})]})}),T=e=>{let{id:s}=e,{data:l,error:a,isLoading:i,onSkip:r}=c(s),{game:o,message:d,solved:h,onDrop:u,onHint:x,onRetry:j}=f(l);return(0,t.jsx)("div",{children:i?(0,t.jsx)(M,{isOpen:i,isAllowClose:!1,onCloseModal:()=>{}}):(0,t.jsxs)("div",{className:"flex p-4 mt-8",children:[(0,t.jsx)("div",{className:"flex justify-center w-2/3",children:(0,t.jsx)("div",{className:"w-[650px] flex pt-4 pb-4",children:(0,t.jsx)("div",{className:"",children:(0,t.jsx)(n.r,{boardWidth:650,position:o.fen(),onPieceDrop:u,boardOrientation:"white",animationDuration:300,arePiecesDraggable:!h})})})}),(0,t.jsx)("div",{className:"flex justify-center w-1/3",children:(0,t.jsx)("div",{children:(0,t.jsx)("div",{className:"flex pt-4 pb-4",children:(0,t.jsx)("div",{className:"max-h-[650px] h-[650px] w-[450px] overflow-y-auto divide-y border rounded-lg",children:(0,t.jsx)(C,{puzzleData:l,result:h?1:0,status:d,onNext:r,onRetry:j,onHint:x,onSkipModal:r})})})})})]})})}},3914:function(e,s,l){"use strict";var t=l(57437);l(2265),s.Z=()=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:90,height:90,fill:"none",children:[(0,t.jsx)("path",{fill:"#222426",d:"M45.07 69.58c-7.03-4.45-8.37-9.82-8.79-12.72h4.76s1.76-2.36 1.76-4.96v-1.03l-5.38-3.51c2.17-2.17 3.51-5.17 3.51-8.37 0-6.41-5.27-11.58-11.68-11.58s-11.68 5.17-11.68 11.58c0 3.2 1.34 6.2 3.51 8.37l-5.38 3.51v1.03c0 2.48 1.76 4.96 1.76 4.96h4.76c-.31 2.89-1.76 8.27-8.79 12.72-4.03 2.58-6.31 7.34-6.31 13.13 0 1.03.69 1.77 1.86 1.86 1.17.09 9.42.43 20.26.43 10.84 0 19.18-.31 20.37-.43 1.18-.12 1.86-.83 1.86-1.86 0-5.79-2.38-10.54-6.41-13.13h.01z"}),(0,t.jsx)("path",{fill:"#292a2b",d:"m21.09 47.35-5.38 3.51v.02l4.64.03c.24-1.7.7-3.54.73-3.57l.01.01zm-3.73 23.93c3.18-2.32 3.85-9.46 3.94-10.65-1.07 2.75-3.28 6.04-7.86 8.94-4.03 2.58-6.31 7.34-6.31 13.13 2-6.59 5.01-7.6 10.23-11.42z"}),(0,t.jsx)("path",{fill:"#83868a",d:"M37.05 67.85c3.68 3.45 9.14 4.59 11.42 4.93-.94-1.27-2.08-2.35-3.4-3.2-7.03-4.45-8.37-9.82-8.79-12.72h4.76s1.76-2.36 1.76-4.96v-1.03l-5.38-3.51c2.17-2.17 3.51-5.17 3.51-8.37 0-4.85-3.02-8.99-7.26-10.71 3.96 2.41 6.75 9.23 3.12 14.38-2.71 3.84-8.01 4.75-8.01 4.75h6.49c.07.05 3.2 5.02-1.06 7.8l-17.66.03c.45.97.91 1.62.92 1.64h8.69s5.95 6.35 10.89 10.99v-.02z"}),(0,t.jsx)("path",{fill:"#292a2b",d:"M29.25 27.4c-6.41 0-11.68 5.17-11.68 11.58 0 1.21.19 2.39.55 3.51.81-9.78 7.06-14.6 11.13-15.09z"}),(0,t.jsx)("path",{fill:"#D5A47D",d:"M38.46 45.66c-.02.55 0 5.56 5.17 5.58 2.24 0 4.09-.64 6.08-1.58l30.87-14.94s2.35-1.14 2.35-3.9V12.06s-.21-2.94-3.58-3.6C72.02 7.04 59.31 5 52.6 5c-8.7 0-10.51.66-15.92 2.13-4.48 1.23-10.03 4.46-10.03 4.46s-9.52 4.47-12.71 8.43c-3.01 3.72-6.85 14.59-6.85 17.43 0 2.29 5.67 2.34 7.16 1.92 3.11-.91 8.35-12.23 8.35-12.23s9.8-4.7 14.85-4.7c2.17 0 7.58-.02 10.11-.02 2.53 0 6 2.61 7.44 5.56 1.13 2.31-12.19 11.85-14 12.98-1.34.84-2 2.5-2.3 3.6l-.23 1.11-.01-.01z"}),(0,t.jsx)("path",{fill:"#8D694B",d:"M22.58 27.13s9.8-4.7 14.85-4.7c2.17 0 7.58-.02 10.11-.02.43 0 .89.08 1.36.22 2.29.68 4.88 2.9 6.08 5.35.01.03.03.06.03.09.03.08.04.18.03.27.1-.33 1.04-3.64.6-5.69-.49-2.29-2.4-6.07-6.71-5.93-7.59.25-13.31.92-13.31.92l-15.37 5.6s-1.44 5.84-4.76 12.31c-1.31 2.55-2.46 3.59-3.24 4.01.62 0 1.18-.05 1.6-.12.06-.01.11-.02.16-.03h.03c.05-.01.1-.02.14-.04h.02c3.11-.91 8.35-12.23 8.35-12.23l.03-.01zm49.2 6.7c-4.12 2.39-29.56 16.26-30.69 16.87.67.33 1.49.54 2.54.54 2.24 0 4.09-.64 6.08-1.58l30.87-14.93s.52-.25 1.06-.8a5.409 5.409 0 0 0 .48-.57c.03-.05.07-.1.1-.15.09-.13.17-.27.25-.43.05-.09.09-.19.13-.29a4.023 4.023 0 0 0 .2-.63c.07-.31.12-.66.12-1.03V15.97c-1.47 10.68-6.02 14.89-11.15 17.86h.01z"})]})},81581:function(e,s,l){"use strict";var t=l(57437);l(2265),s.Z=()=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:90,height:90,fill:"none",children:[(0,t.jsx)("path",{fill:"#E8E6E1",d:"M45.07 69.58c-7.03-4.45-8.37-9.82-8.79-12.72h4.76s1.76-2.36 1.76-4.96v-1.03l-5.38-3.51c2.17-2.17 3.51-5.17 3.51-8.37 0-6.41-5.27-11.58-11.68-11.58s-11.68 5.17-11.68 11.58c0 3.2 1.34 6.2 3.51 8.37l-5.38 3.51v1.03c0 2.48 1.76 4.96 1.76 4.96h4.76c-.31 2.89-1.76 8.27-8.79 12.72-4.03 2.58-6.31 7.34-6.31 13.13 0 1.03.69 1.77 1.86 1.86 1.17.09 9.42.43 20.26.43 10.84 0 19.18-.31 20.37-.43 1.18-.12 1.86-.83 1.86-1.86 0-5.79-2.38-10.54-6.41-13.13h.01z"}),(0,t.jsx)("path",{fill:"#fff",d:"m21.09 47.35-5.38 3.51v.02l4.64.03c.24-1.7.7-3.54.73-3.57l.01.01zm-3.73 23.93c3.18-2.32 3.85-9.46 3.94-10.65-1.07 2.75-3.28 6.04-7.86 8.94-4.03 2.58-6.31 7.34-6.31 13.13 2-6.59 5.01-7.6 10.23-11.42z"}),(0,t.jsx)("path",{fill:"#B3ACA8",d:"M37.05 67.85c3.68 3.45 9.14 4.59 11.42 4.93-.94-1.27-2.08-2.35-3.4-3.2-7.03-4.45-8.37-9.82-8.79-12.72h4.76s1.76-2.36 1.76-4.96v-1.03l-5.38-3.51c2.17-2.17 3.51-5.17 3.51-8.37 0-4.85-3.02-8.99-7.26-10.71 3.96 2.41 6.75 9.23 3.12 14.38-2.71 3.84-8.01 4.75-8.01 4.75h6.49c.07.05 3.2 5.02-1.06 7.8l-17.66.03c.45.97.91 1.62.92 1.64h8.69s5.95 6.35 10.89 10.99v-.02z"}),(0,t.jsx)("path",{fill:"#fff",d:"M29.25 27.4c-6.41 0-11.68 5.17-11.68 11.58 0 1.21.19 2.39.55 3.51.81-9.78 7.06-14.6 11.13-15.09z"}),(0,t.jsx)("path",{fill:"#D5A47D",d:"M38.46 45.66c-.02.55 0 5.56 5.17 5.58 2.24 0 4.09-.64 6.08-1.58l30.87-14.94s2.35-1.14 2.35-3.9V12.06s-.21-2.94-3.58-3.6C72.02 7.04 59.31 5 52.6 5c-8.7 0-10.51.66-15.92 2.13-4.48 1.23-10.03 4.46-10.03 4.46s-9.52 4.47-12.71 8.43c-3.01 3.72-6.85 14.59-6.85 17.43 0 2.29 5.67 2.34 7.16 1.92 3.11-.91 8.35-12.23 8.35-12.23s9.8-4.7 14.85-4.7c2.17 0 7.58-.02 10.11-.02 2.53 0 6 2.61 7.44 5.56 1.13 2.31-12.19 11.85-14 12.98-1.34.84-2 2.5-2.3 3.6l-.23 1.11-.01-.01z"}),(0,t.jsx)("path",{fill:"#8D694B",d:"M22.58 27.13s9.8-4.7 14.85-4.7c2.17 0 7.58-.02 10.11-.02.43 0 .89.08 1.36.22 2.29.68 4.88 2.9 6.08 5.35.01.03.03.06.03.09.03.08.04.18.03.27.1-.33 1.04-3.64.6-5.69-.49-2.29-2.4-6.07-6.71-5.93-7.59.25-13.31.92-13.31.92l-15.37 5.6s-1.44 5.84-4.76 12.31c-1.31 2.55-2.46 3.59-3.24 4.01.62 0 1.18-.05 1.6-.12.06-.01.11-.02.16-.03h.03c.05-.01.1-.02.14-.04h.02c3.11-.91 8.35-12.23 8.35-12.23l.03-.01zm49.2 6.7c-4.12 2.39-29.56 16.26-30.69 16.87.67.33 1.49.54 2.54.54 2.24 0 4.09-.64 6.08-1.58l30.87-14.93s.52-.25 1.06-.8a5.409 5.409 0 0 0 .48-.57c.03-.05.07-.1.1-.15.09-.13.17-.27.25-.43.05-.09.09-.19.13-.29a4.023 4.023 0 0 0 .2-.63c.07-.31.12-.66.12-1.03V15.97c-1.47 10.68-6.02 14.89-11.15 17.86h.01z"})]})},11438:function(){}},function(e){e.O(0,[8218,6227,5279,8110,8623,1328,298,989,8998,2971,2472,1744],function(){return e(e.s=40639)}),_N_E=e.O()}]);