(()=>{var e={};e.id=626,e.ids=[626],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},60998:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>l.a,__next_app__:()=>u,originalPathname:()=>x,pages:()=>d,routeModule:()=>p,tree:()=>c});var r=s(67096),a=s(16132),n=s(37284),l=s.n(n),o=s(32564),i={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>o[e]);s.d(t,i);let c=["",{children:["login",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,52407)),"/home/nullchilly/code/git/web101/src/app/login/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,21670)),"/home/nullchilly/code/git/web101/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/home/nullchilly/code/git/web101/src/app/login/page.tsx"],x="/login/page",u={require:s,loadChunk:()=>Promise.resolve()},p=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/login/page",pathname:"/login",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},78811:(e,t,s)=>{Promise.resolve().then(s.bind(s,89296))},89296:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>d});var r=s(53854),a=s(75548),n=s.n(a),l=s(34218),o=s(4992),i=s(51018),c=s(55100);let d=function(){let[e,t]=(0,l.useState)({user_name:"",password:""}),[s,a]=(0,l.useState)(!0),[d,x]=(0,l.useState)(!0),[u,p]=(0,l.useState)(!0),m=(0,i.useRouter)(),{checkLogin:h}=(0,l.useContext)(c.UserContext);(0,l.useEffect)(()=>{localStorage.getItem("accessToken")&&m.push("/profile")},[]);let g=async t=>{t.preventDefault();let s=!1;if(""==e.user_name?(x(!1),s=!0):x(!0),""==e.password?(a(!1),s=!0):a(!0),!s)try{let t=await fetch("http://fall2324w3g9.int3306.freeddns.org/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(t.ok){let e=await t.json(),s=e.data.accessToken;s&&localStorage.setItem("accessToken",s),p(!0),h&&await h(),m.push("/profile")}else console.error("Login failed:",t.statusText),p(!1)}catch(e){console.error("An unexpected error occurred:",e)}},f=s=>{t({...e,[s.target.name]:s.target.value})};return r.jsx("div",{className:"relative flex flex-col items-center justify-center min-h-screen overflow-hidden",children:(0,r.jsxs)("div",{className:"w-full p-6 bg-white rounded-md shadow-xl lg:max-w-xl border",children:[(0,r.jsxs)("div",{className:"flex justify-center",children:[r.jsx("div",{className:"text-4xl font-extrabold text-center text-gray-800 not-italic",children:"Next Chess"}),r.jsx(o.Z,{width:45,height:45})]}),(0,r.jsxs)("form",{className:"mt-4",onSubmit:g,children:[(0,r.jsxs)("div",{className:"mb-4",children:[r.jsx("label",{htmlFor:"username",className:"block text-lg font-bold text-gray-700",children:"Username"}),r.jsx("input",{type:"username",name:"user_name",onChange:f,className:"block w-full px-2 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-gray-800 focus:ring-gray-300"}),!d&&r.jsx("p",{className:"text-red-500 text-sm",children:"Enter your Username."})]}),(0,r.jsxs)("div",{className:"mb-",children:[r.jsx("label",{htmlFor:"password",className:"block text-lg font-bold text-gray-700",children:"Password"}),r.jsx("input",{type:"password",name:"password",onChange:f,className:"block w-full px-2 py-2 mt-2 mb-2 text-gray-700 bg-white border rounded-lg focus:border-gray-800 focus:ring-gray-300"}),!s&&r.jsx("p",{className:"text-red-500 text-sm",children:"Enter your Password."}),!u&&r.jsx("p",{className:"text-red-500 text-sm",children:"UserName or Password is wrong."})]}),r.jsx(n(),{href:"/forget",className:"text-base text-blue-700 hover:underline font-semibold",children:"Forget Password?"}),r.jsx("div",{className:"mt-2",children:r.jsx("button",{className:"w-full px-4 py-2 font-bold text-white bg-gray-700 rounded-md hover:bg-gray-500",children:"Login"})})]}),(0,r.jsxs)("p",{className:"mt-4 text-base text-center text-gray-700",children:["Don't have an account?"," ",r.jsx(n(),{href:"/signup",className:"text-base text-blue-700 hover:underline font-semibold",children:"Sign up"})]})]})})}},4992:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var r=s(53854);s(34218);let a=e=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:45,height:45,...e,children:(0,r.jsxs)("g",{style:{fill:"#000",stroke:"#000",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"},children:[r.jsx("path",{d:"M9 26c8.5-1.5 21-1.5 27 0l2.5-12.5L31 25l-.3-14.1-5.2 13.6-3-14.5-3 14.5-5.2-13.6L14 25 6.5 13.5 9 26z",style:{strokeLinecap:"butt",fill:"#000"}}),r.jsx("path",{d:"M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1 2.5-1 2.5-1.5 1.5 0 2.5 0 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z"}),r.jsx("path",{d:"M11.5 30c3.5-1 18.5-1 22 0M12 33.5c6-1 15-1 21 0"}),r.jsx("circle",{cx:6,cy:12,r:2}),r.jsx("circle",{cx:14,cy:9,r:2}),r.jsx("circle",{cx:22.5,cy:8,r:2}),r.jsx("circle",{cx:31,cy:9,r:2}),r.jsx("circle",{cx:39,cy:12,r:2}),r.jsx("path",{d:"M11 38.5a35 35 1 0 0 23 0",style:{fill:"none",stroke:"#000",strokeLinecap:"butt"}}),r.jsx("g",{style:{fill:"none",stroke:"#fff"},children:r.jsx("path",{d:"M11 29a35 35 1 0 1 23 0M12.5 31.5h20M11.5 34.5a35 35 1 0 0 22 0M10.5 37.5a35 35 1 0 0 24 0"})})]})})},52407:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>l,__esModule:()=>n,default:()=>i});var r=s(95153);let a=(0,r.createProxy)(String.raw`/home/nullchilly/code/git/web101/src/app/login/page.tsx`),{__esModule:n,$$typeof:l}=a,o=a.default,i=o},73881:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var r=s(31323);let a=e=>{let t=(0,r.fillMetadataSegment)(".",e.params,"favicon.ico");return[{type:"image/x-icon",sizes:"16x16",url:t+""}]}}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[271,565,323,738],()=>s(60998));module.exports=r})();