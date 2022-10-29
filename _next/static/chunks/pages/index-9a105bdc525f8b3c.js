(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(4369)}])},9749:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageLoaderProps",{enumerable:!0,get:function(){return u.ImageLoaderProps}}),t.default=function(e){let t,r;var a,{src:o,sizes:p,unoptimized:b=!1,priority:w=!1,loading:v,className:y,quality:j,width:x,height:E,fill:S,style:k,onLoad:C,onLoadingComplete:N,placeholder:P="empty",blurDataURL:z}=e,O=n(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL"]);let I=s.useContext(d.ImageConfigContext),R=s.useMemo(()=>{let e=g||I||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return i({},e,{allSizes:t,deviceSizes:r})},[I]),L=O,T=L.loader||f.default;if(delete L.loader,"__next_img_default"in T){if("custom"===R.loader)throw Error('Image with src "'.concat(o,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let A=T;T=e=>{let{config:t}=e,r=n(e,["config"]);return A(r)}}let H="",M=m(x),D=m(E);if("object"==typeof(a=o)&&(h(a)||void 0!==a.src)){let W=h(o)?o.default:o;if(!W.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(W)));if(!W.height||!W.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(W)));if(t=W.blurWidth,r=W.blurHeight,z=z||W.blurDataURL,H=W.src,!S){if(M||D){if(M&&!D){let B=M/W.width;D=Math.round(W.height*B)}else if(!M&&D){let F=D/W.height;M=Math.round(W.width*F)}}else M=W.width,D=W.height}}let G=!w&&("lazy"===v||void 0===v);((o="string"==typeof o?o:H).startsWith("data:")||o.startsWith("blob:"))&&(b=!0,G=!1),R.unoptimized&&(b=!0);let[q,J]=s.useState(!1),[Q,V]=s.useState(!1),Z=m(j),U=Object.assign(S?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0}:{},Q?{}:{color:"transparent"},k),K="blur"===P&&z&&!q?{backgroundSize:U.objectFit||"cover",backgroundPosition:U.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:M,heightInt:D,blurWidth:t,blurHeight:r,blurDataURL:z}),'")')}:{},X=function(e){let{config:t,src:r,unoptimized:i,width:a,quality:o,sizes:n,loader:s}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,r){let{deviceSizes:i,allSizes:a}=e;if(r){let o=/(^|\s)(1?\d?\d)vw/g,n=[];for(let s;s=o.exec(r);s)n.push(parseInt(s[2]));if(n.length){let l=.01*Math.min(...n);return{widths:a.filter(e=>e>=i[0]*l),kind:"w"}}return{widths:a,kind:"w"}}if("number"!=typeof t)return{widths:i,kind:"w"};let c=[...new Set([t,2*t].map(e=>a.find(t=>t>=e)||a[a.length-1]))];return{widths:c,kind:"x"}}(t,a,n),u=l.length-1;return{sizes:n||"w"!==c?n:"100vw",srcSet:l.map((e,i)=>"".concat(s({config:t,src:r,quality:o,width:e})," ").concat("w"===c?e:i+1).concat(c)).join(", "),src:s({config:t,src:r,quality:o,width:l[u]})}}({config:R,src:o,unoptimized:b,width:M,quality:Z,sizes:p,loader:T}),Y=o,$="imagesrcset",ee="imagesizes";$="imageSrcSet",ee="imageSizes";let et={[$]:X.srcSet,[ee]:X.sizes,crossOrigin:L.crossOrigin},er=s.useRef(C);s.useEffect(()=>{er.current=C},[C]);let ei=s.useRef(N);s.useEffect(()=>{ei.current=N},[N]);let ea=i({isLazy:G,imgAttributes:X,heightInt:D,widthInt:M,qualityInt:Z,className:y,imgStyle:U,blurStyle:K,loading:v,config:R,fill:S,unoptimized:b,placeholder:P,loader:T,srcString:Y,onLoadRef:er,onLoadingCompleteRef:ei,setBlurComplete:J,setShowAltText:V},L);return s.default.createElement(s.default.Fragment,null,s.default.createElement(_,Object.assign({},ea)),w?s.default.createElement(l.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+X.src+X.srcSet+X.sizes,rel:"preload",as:"image",href:X.srcSet?void 0:X.src},et))):null)};var i=r(6495).Z,a=r(2648).Z,o=r(1598).Z,n=r(7273).Z,s=o(r(7294)),l=a(r(3121)),c=r(2675),u=r(139),d=r(8730);r(670);var f=a(r(9824));let g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function h(e){return void 0!==e.default}function m(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function p(e,t,r,a,o,n){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===r&&n(!0),null==a?void 0:a.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let s=!1,l=!1;a.current(i({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>s,isPropagationStopped:()=>l,persist(){},preventDefault(){s=!0,t.preventDefault()},stopPropagation(){l=!0,t.stopPropagation()}}))}(null==o?void 0:o.current)&&o.current(e)}})}let _=e=>{var{imgAttributes:t,heightInt:r,widthInt:a,qualityInt:o,className:l,imgStyle:c,blurStyle:u,isLazy:d,fill:f,placeholder:g,loading:h,srcString:m,config:_,unoptimized:b,loader:w,onLoadRef:v,onLoadingCompleteRef:y,setBlurComplete:j,setShowAltText:x,onLoad:E,onError:S}=e,k=n(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return h=d?"lazy":h,s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},k,t,{width:a,height:r,decoding:"async","data-nimg":f?"fill":"1",className:l,loading:h,style:i({},c,u),ref:s.useCallback(e=>{e&&(S&&(e.src=e.src),e.complete&&p(e,m,g,v,y,j))},[m,g,v,y,j,S]),onLoad(e){let t=e.currentTarget;p(t,m,g,v,y,j)},onError(e){x(!0),"blur"===g&&j(!0),S&&S(e)}})))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:a,blurDataURL:o}=e,n=i||t,s=a||r,l=o.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return n&&s?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(n," ").concat(s,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(i&&a?"1":"20","'/%3E").concat(l,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(o,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(o,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function r(e){let{config:t,src:r,width:i,quality:a}=e;return r.endsWith(".svg")&&!t.dangerouslyAllowSVG?r:"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(i,"&q=").concat(a||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r.__next_img_default=!0,t.default=r},4369:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var i=r(5893),a=r(9008),o=r.n(a),n=r(5675),s=r.n(n),l=r(7160),c=r.n(l);function u(){let e=[{title:"Jobs Board",subtitle:"Displays HackerNews jobs using an API request.",url:"https://frank0o.github.io/jobboard"},{title:"Selectable Grid",subtitle:"Resizeable grid of selectable squares.",url:"https://frank0o.github.io/selectablegrid"},{title:"Just Another Weather App",subtitle:"Weather app for major cities that calls an API.",url:"https://frank0o.github.io/justanotherweatherapp"},{title:"Tic Tac Toe",subtitle:"Multiplayer Tic Tac Toe that keeps score and has undo feature",url:"https://frank0o.github.io/tic-tac-toe"}].map((e,t)=>(0,i.jsxs)("a",{className:c().card,href:e.url,children:[(0,i.jsxs)("h2",{children:[e.title," →"]}),(0,i.jsx)("p",{children:e.subtitle})]},t));return(0,i.jsxs)("div",{className:c().container,children:[(0,i.jsxs)(o(),{children:[(0,i.jsx)("title",{children:"Francis Mikula-Quilty Portfolio"}),(0,i.jsx)("meta",{name:"description",content:"Generated by create next app"})]}),(0,i.jsxs)("main",{className:c().main,children:[(0,i.jsxs)("h1",{className:c().title,children:["Welcome to ",(0,i.jsx)("b",{className:c().highlight,children:"My Portfolio"})]}),(0,i.jsxs)("p",{className:c().description,children:["I am Francis Mikula-Quilty, an aspiring Frontend Developer who works with ReactJS",(0,i.jsx)("br",{}),"Here is my portfolio"]}),(0,i.jsx)("div",{className:c().grid,children:e})]}),(0,i.jsx)("footer",{className:c().footer,children:(0,i.jsxs)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["Powered by"," ",(0,i.jsx)("span",{className:c().logo,children:(0,i.jsx)(s(),{src:"/vercel.svg",alt:"Vercel Logo",width:72,height:16})})]})})]})}},7160:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",highlight:"Home_highlight__Kze_c",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},9008:function(e,t,r){e.exports=r(3121)},5675:function(e,t,r){e.exports=r(9749)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);