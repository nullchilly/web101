"use strict";exports.id=686,exports.ids=[686],exports.modules={46686:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return m}});let r=n(80085),i=n(8425),o=i._(n(9885)),a=r._(n(88908)),l=r._(n(56420)),d=n(55161),s=n(21412),u=n(87927);n(8601);let c=n(10713),f=r._(n(68320)),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function handleLoading(e,t,n,r,i,o){let a=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===a)return;e["data-loaded-src"]=a;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,i=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==r?void 0:r.current)&&r.current(e)}})}function getDynamicProps(e){let[t,n]=o.version.split(".",2),r=parseInt(t,10),i=parseInt(n,10);return r>18||18===r&&i>=3?{fetchPriority:e}:{fetchpriority:e}}globalThis.__NEXT_IMAGE_IMPORTED=!0;let g=(0,o.forwardRef)((e,t)=>{let{src:n,srcSet:r,sizes:i,height:a,width:l,decoding:d,className:s,style:u,fetchPriority:c,placeholder:f,loading:p,unoptimized:g,fill:m,onLoadRef:h,onLoadingCompleteRef:y,setBlurComplete:v,setShowAltText:b,onLoad:S,onError:w,..._}=e;return o.default.createElement("img",{..._,...getDynamicProps(c),loading:p,width:l,height:a,decoding:d,"data-nimg":m?"fill":"1",className:s,style:u,sizes:i,srcSet:r,src:n,ref:(0,o.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(w&&(e.src=e.src),e.complete&&handleLoading(e,f,h,y,v,g))},[n,f,h,y,v,w,g,t]),onLoad:e=>{let t=e.currentTarget;handleLoading(t,f,h,y,v,g)},onError:e=>{b(!0),"empty"!==f&&v(!0),w&&w(e)}})});function ImagePreload(e){let{isAppRouter:t,imgAttributes:n}=e,r={as:"image",imageSrcSet:n.srcSet,imageSizes:n.sizes,crossOrigin:n.crossOrigin,referrerPolicy:n.referrerPolicy,...getDynamicProps(n.fetchPriority)};return t&&a.default.preload?(a.default.preload(n.src,r),null):o.default.createElement(l.default,null,o.default.createElement("link",{key:"__nimg-"+n.src+n.srcSet+n.sizes,rel:"preload",href:n.srcSet?void 0:n.src,...r}))}let m=(0,o.forwardRef)((e,t)=>{let n=(0,o.useContext)(c.RouterContext),r=(0,o.useContext)(u.ImageConfigContext),i=(0,o.useMemo)(()=>{let e=p||r||s.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:n}},[r]),{onLoad:a,onLoadingComplete:l}=e,m=(0,o.useRef)(a);(0,o.useEffect)(()=>{m.current=a},[a]);let h=(0,o.useRef)(l);(0,o.useEffect)(()=>{h.current=l},[l]);let[y,v]=(0,o.useState)(!1),[b,S]=(0,o.useState)(!1),{props:w,meta:_}=(0,d.getImgProps)(e,{defaultLoader:f.default,imgConf:i,blurComplete:y,showAltText:b});return o.default.createElement(o.default.Fragment,null,o.default.createElement(g,{...w,unoptimized:_.unoptimized,placeholder:_.placeholder,fill:_.fill,onLoadRef:m,onLoadingCompleteRef:h,setBlurComplete:v,setShowAltText:S,ref:t}),_.priority?o.default.createElement(ImagePreload,{isAppRouter:!n,imgAttributes:w}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},81281:(e,t)=>{function isInAmpMode(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:r=!1}=void 0===e?{}:e;return t||n&&r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return isInAmpMode}})},55161:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return getImgProps}}),n(8601);let r=n(52490),i=n(21412);function isStaticRequire(e){return void 0!==e.default}function isStaticImageData(e){return void 0!==e.src}function isStaticImport(e){return"object"==typeof e&&(isStaticRequire(e)||isStaticImageData(e))}function getInt(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function getWidths(e,t,n){let{deviceSizes:r,allSizes:i}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(n);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let o=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:o,kind:"x"}}function generateImgAttrs(e){let{config:t,src:n,unoptimized:r,width:i,quality:o,sizes:a,loader:l}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:d,kind:s}=getWidths(t,i,a),u=d.length-1;return{sizes:a||"w"!==s?a:"100vw",srcSet:d.map((e,r)=>l({config:t,src:n,quality:o,width:e})+" "+("w"===s?e:r+1)+s).join(", "),src:l({config:t,src:n,quality:o,width:d[u]})}}function getImgProps(e,t){let n,o,a,{src:l,sizes:d,unoptimized:s=!1,priority:u=!1,loading:c,className:f,quality:p,width:g,height:m,fill:h=!1,style:y,onLoad:v,onLoadingComplete:b,placeholder:S="empty",blurDataURL:w,fetchPriority:_,layout:C,objectFit:E,objectPosition:P,lazyBoundary:x,lazyRoot:I,...O}=e,{imgConf:j,showAltText:M,blurComplete:z,defaultLoader:A}=t,R=j||i.imageConfigDefault;if("allSizes"in R)n=R;else{let e=[...R.deviceSizes,...R.imageSizes].sort((e,t)=>e-t),t=R.deviceSizes.sort((e,t)=>e-t);n={...R,allSizes:e,deviceSizes:t}}let k=O.loader||A;delete O.loader,delete O.srcSet;let D="__next_img_default"in k;if(D){if("custom"===n.loader)throw Error('Image with src "'+l+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=k;k=t=>{let{config:n,...r}=t;return e(r)}}if(C){"fill"===C&&(h=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[C];e&&(y={...y,...e});let t={responsive:"100vw",fill:"100vw"}[C];t&&!d&&(d=t)}let L="",U=getInt(g),B=getInt(m);if(isStaticImport(l)){let e=isStaticRequire(l)?l.default:l;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(o=e.blurWidth,a=e.blurHeight,w=w||e.blurDataURL,L=e.src,!h){if(U||B){if(U&&!B){let t=U/e.width;B=Math.round(e.height*t)}else if(!U&&B){let t=B/e.height;U=Math.round(e.width*t)}}else U=e.width,B=e.height}}let H=!u&&("lazy"===c||void 0===c);(!(l="string"==typeof l?l:L)||l.startsWith("data:")||l.startsWith("blob:"))&&(s=!0,H=!1),n.unoptimized&&(s=!0),D&&l.endsWith(".svg")&&!n.dangerouslyAllowSVG&&(s=!0),u&&(_="high");let T=getInt(p),N=Object.assign(h?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:E,objectPosition:P}:{},M?{}:{color:"transparent"},y),q=z||"empty"===S?null:"blur"===S?'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:U,heightInt:B,blurWidth:o,blurHeight:a,blurDataURL:w||"",objectFit:N.objectFit})+'")':'url("'+S+'")',F=q?{backgroundSize:N.objectFit||"cover",backgroundPosition:N.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:q}:{},G=generateImgAttrs({config:n,src:l,unoptimized:s,width:U,quality:T,sizes:d,loader:k}),W={...O,loading:H?"lazy":c,fetchPriority:_,width:U,height:B,decoding:"async",className:f,style:{...N,...F},sizes:G.sizes,srcSet:G.srcSet,src:G.src},V={unoptimized:s,priority:u,placeholder:S,fill:h};return{props:W,meta:V}}},56420:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{defaultHead:function(){return defaultHead},default:function(){return c}});let r=n(80085),i=n(8425),o=i._(n(9885)),a=r._(n(94005)),l=n(12999),d=n(75851),s=n(81281);function defaultHead(e){void 0===e&&(e=!1);let t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function onlyReactElement(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(8601);let u=["name","httpEquiv","charSet","itemProp"];function unique(){let e=new Set,t=new Set,n=new Set,r={};return i=>{let o=!0,a=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){a=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=u.length;e<t;e++){let t=u[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?o=!1:n.add(t);else{let e=i.props[t],n=r[t]||new Set;("name"!==t||!a)&&n.has(e)?o=!1:(n.add(e),r[t]=n)}}}}return o}}function reduceComponents(e,t){let{inAmpMode:n}=t;return e.reduce(onlyReactElement,[]).reverse().concat(defaultHead(n).reverse()).filter(unique()).reverse().map((e,t)=>{let r=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,o.default.cloneElement(e,t)}return o.default.cloneElement(e,{key:r})})}function Head(e){let{children:t}=e,n=(0,o.useContext)(l.AmpStateContext),r=(0,o.useContext)(d.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:reduceComponents,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)}let c=Head;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},52490:(e,t)=>{function getImageBlurSvg(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:i,blurDataURL:o,objectFit:a}=e,l=r?40*r:t,d=i?40*i:n,s=l&&d?"viewBox='0 0 "+l+" "+d+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+s+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(s?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return getImageBlurSvg}})},21412:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{VALID_LOADERS:function(){return n},imageConfigDefault:function(){return r}});let n=["default","imgix","cloudinary","akamai","custom"],r={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},68320:(e,t)=>{function defaultLoader(e){let{config:t,src:n,width:r,quality:i}=e;return t.path+"?url="+encodeURIComponent(n)+"&w="+r+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),defaultLoader.__next_img_default=!0;let n=defaultLoader},94005:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return SideEffect}});let r=n(9885),useClientOnlyLayoutEffect=()=>{},useClientOnlyEffect=()=>{};function SideEffect(e){var t;let{headManager:n,reduceComponentsToState:i}=e;function emitChange(){if(n&&n.mountedInstances){let t=r.Children.toArray(Array.from(n.mountedInstances).filter(Boolean));n.updateHead(i(t,e))}}return null==n||null==(t=n.mountedInstances)||t.add(e.children),emitChange(),useClientOnlyLayoutEffect(()=>{var t;return null==n||null==(t=n.mountedInstances)||t.add(e.children),()=>{var t;null==n||null==(t=n.mountedInstances)||t.delete(e.children)}}),useClientOnlyLayoutEffect(()=>(n&&(n._pendingUpdate=emitChange),()=>{n&&(n._pendingUpdate=emitChange)})),useClientOnlyEffect(()=>(n&&n._pendingUpdate&&(n._pendingUpdate(),n._pendingUpdate=null),()=>{n&&n._pendingUpdate&&(n._pendingUpdate(),n._pendingUpdate=null)})),null}},8601:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return warnOnce}});let warnOnce=e=>{}},12999:(e,t,n)=>{e.exports=n(10316).vendored.contexts.AmpContext},75851:(e,t,n)=>{e.exports=n(10316).vendored.contexts.HeadManagerContext},87927:(e,t,n)=>{e.exports=n(10316).vendored.contexts.ImageConfigContext}};