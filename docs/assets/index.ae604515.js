import{f as e,e as t,a as n,o as a,s as r,c as i,p as o,b as s,d as c,g as l,h as d,v as u}from"./vendor.e3820820.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const m={},p=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`/${e}`)in m)return;m[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const a=document.createElement("link");return a.rel=t?"stylesheet":"modulepreload",t||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),t?new Promise(((e,t)=>{a.addEventListener("load",e),a.addEventListener("error",t)})):void 0}))).then((()=>e())):e()},g=document.querySelector("canvas"),h=document.querySelector(".fieldsets"),v=document.querySelector(".posterize"),f=document.querySelector("[for=posterize]"),y=document.querySelector(".color"),w=document.querySelector("[for=color]"),b=document.querySelector(".monochrome"),x=document.querySelector("[for=monochrome]"),L=document.querySelector(".consider-dpr"),E=document.querySelector('[for="consider-dpr"]'),S=document.querySelector("img"),M=document.querySelector(".reset-all"),k=document.querySelector(".open"),N=document.querySelector(".save"),$=document.querySelector(".copy"),T=document.querySelector(".paste"),q=document.querySelector("output"),C=document.querySelector(".debug"),j=document.querySelector("progress"),O=document.querySelector(".toast"),R=document.documentElement,P=document.querySelector("details"),_=document.querySelector("summary"),I=window.devicePixelRatio,U=(e,t)=>{let n;return function(...a){clearTimeout(n),n=setTimeout((()=>{clearTimeout(n),e(...a)}),t)}},z=g.getContext("2d",{desynchronized:!0});z.scale(I,I),z.imageSmoothingEnabled=!0;const H=()=>{const e=Number(oe[Q.scale].value)/100;return{width:Math.ceil(I*S.naturalWidth*e),height:Math.ceil(I*S.naturalHeight*e)}},V=()=>{let e=""+(v.checked?`url('${(()=>{const e=e=>{const t=Number(e.value),n=[];for(let a=0;a<=t;a++)n[a]=(1/t*a).toFixed(1);return n.join(",")};return`data:image/svg+xml;utf8,<svg\n      xmlns="http://www.w3.org/2000/svg"\n      xmlns:xlink="http://www.w3.org/1999/xlink"\n    >\n      <filter id="posterize">\n        <feComponentTransfer>\n          <feFuncR type="discrete" tableValues="${e(oe[K.red])}" />\n          <feFuncG type="discrete" tableValues="${e(oe[K.green])}" />\n          <feFuncB type="discrete" tableValues="${e(oe[K.blue])}" />\n          <feFuncA type="discrete" tableValues="${e(oe[K.alpha])}" />\n        </feComponentTransfer>\n      </filter>\n    </svg>`.replace(/[\r\n]/g,"").replace(/\s+/g," ").trim()})()}#posterize') `:"");for(const[t,n]of Object.entries(ee)){const a=oe[t];n.initial!==Number(a.value)&&(e+=`${t}(${a.value}${a.dataset.unit}) `)}return e.trim()||"none"};const A=new function(){return new Worker("/assets/monochromeworker.a07b995d.js",{type:"module"})};const B=new function(){return new Worker("/assets/colorworker.19da7b1a.js",{type:"module"})};const D=["en","de"],F=["en-US","de-DE"];const W=new class{constructor(){this.currentLanguageAndLocale=this.detectLanguageAndLocal(),this.defaultLanguage=D[0],this.defaultLocale=F[0],this.translations=null}detectLanguageAndLocal(){var e;const t=localStorage.getItem("language");if(t)return JSON.parse(t);let[n,a=null]=null==(e=navigator.language)?void 0:e.split("-");a&&(a=a.toUpperCase()),n&&D.includes(n)||(n=D[0]);const r={language:n,locale:a};return localStorage.setItem("language",JSON.stringify(r)),r}async getTranslations(){const{language:e,locale:t}=this.currentLanguageAndLocale;this.translations=(await function(e){switch(e){case"../i18n/de.js":return p((()=>import("./de.58feef74.js")),[]);case"../i18n/en-US.js":return p((()=>import("./en-US.cd79436f.js")),[]);default:return new Promise((function(t,n){("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+e)))}))}}(`../i18n/${e}${t?`-${t}`:""}.js`).catch((()=>function(e){switch(e){case"../i18n/de.js":return p((()=>import("./de.58feef74.js")),[]);case"../i18n/en-US.js":return p((()=>import("./en-US.cd79436f.js")),[]);default:return new Promise((function(t,n){("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+e)))}))}}(`../i18n/${this.defaultLocale}.js`)))).default}t(e){return this.translations[e]}};const G=(e,t,n)=>{e&&(e=e.replace(/\s+width="\d+(?:\.\d+)?"/,"").replace(/\s+height="\d+(?:\.\d+)"/,""),q.dataset.originalViewBox=/viewBox="([^"]+)"/.exec(e)[1],n.width&&(e=e.replace(/viewBox="([^"]+)"/,`viewBox="${n.x} ${n.y} ${n.width} ${n.height}"`)),q.classList.remove("color"),q.classList.remove("monochrome"),q.classList.add(t),q.innerHTML=e,Te(`${W.t("svgSize")}: ${e.length} ${W.t("bytes")}`,3e3))},X=async(e={})=>{q.innerHTML="";let t=q.querySelector("img");t||(t=document.createElement("img"),t.classList.add("spinner"),t.src=URL.createObjectURL(new Blob(['<svg viewBox="0 0 57 57" xmlns="http://www.w3.org/2000/svg" stroke="currentColor"><g transform="translate(1 1)" stroke-width="2" fill="none" fill-rule="evenodd"><circle cx="5" cy="50" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" values="50;5;50;50" calcMode="linear" repeatCount="indefinite"/><animate attributeName="cx" begin="0s" dur="2.2s" values="5;27;49;5" calcMode="linear" repeatCount="indefinite"/></circle><circle cx="27" cy="5" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" from="5" to="5" values="5;50;50;5" calcMode="linear" repeatCount="indefinite"/><animate attributeName="cx" begin="0s" dur="2.2s" from="27" to="27" values="27;49;5;27" calcMode="linear" repeatCount="indefinite"/></circle><circle cx="49" cy="50" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" values="50;50;5;50" calcMode="linear" repeatCount="indefinite"/><animate attributeName="cx" from="49" to="49" begin="0s" dur="2.2s" values="49;5;27;49" calcMode="linear" repeatCount="indefinite"/></circle></g></svg>'],{type:"image/svg+xml"})),q.append(t)),t.style.display="block";const n=(()=>{let{width:e,height:t}=H();const n=L.checked?I:1;let a=1;for(;e*t>268435456;)e=Math.floor(e/2),t=Math.floor(t/2),a/=2;return g.width=e,g.height=t,z.clearRect(0,0,e,t),z.filter=V(),z.drawImage(S,0,0,n*S.naturalWidth*a,n*S.naturalHeight*a,0,0,e,t),z.getImageData(0,0,e,t)})();if(y.checked){const t=await(async e=>new Promise((async t=>{const n=new MessageChannel;n.port1.onmessage=({data:e})=>{n.port1.close(),t(e.result)},j.value=0,j.style.visibility="visible";let a="",r="",i="";const o=setInterval((()=>{q.innerHTML=a+i+r}),100),s=new MessageChannel;s.port1.onmessage=({data:e})=>{const t=Math.floor(e.processed/e.total*100);if(j.value=t,e.svg){a||(a=e.svg.replace(/(.*?<svg[^>]+>)(.*?)(<\/svg>)/,"$1"),r=e.svg.replace(/(.*?<svg[^>]+>)(.*?)(<\/svg>)/,"$3"));const t=e.svg.replace(/(.*?<svg[^>]+>)(.*?)(<\/svg>)/,"$2");i+=t}e.processed===e.total&&(clearInterval(o),s.port1.close(),j.value=0,j.style.visibility="hidden")};const c={minPathSegments:Number(oe[Z.minPathLenght].value),turdsize:Number(oe[Z.turdsize].value),alphamax:Number(oe[Z.alphamax].value),turnpolicy:Number(oe[Z.turnpolicy].value),opticurve:Number(oe[Z.opticurve].value),opttolerance:Number(oe[Z.opttolerance].value)};B.postMessage({imageData:e,params:c},[n.port2,s.port2])})))(n);G(t,"color",e)}else{const t=await(async e=>new Promise((async t=>{const n=new MessageChannel;n.port1.onmessage=({data:e})=>{n.port1.close(),t(e.result)};const a={turdsize:Number(oe[Z.turdsize].value),alphamax:Number(oe[Z.alphamax].value),turnpolicy:Number(oe[Z.turnpolicy].value),opticurve:Number(oe[Z.opticurve].value),opttolerance:Number(oe[Z.opttolerance].value)};A.postMessage({imageData:e,params:a},[n.port2])})))(n);G(t,"monochrome",e)}t.style.display="none"};const Y=new function(){return new Worker("/assets/svgoworker.b2e746cf.js",{type:"module"})},J=async e=>new Promise((t=>{const n=new MessageChannel;n.port1.onmessage=({data:e})=>{n.port1.close(),t(e.result)},Y.postMessage({svg:e,originalViewBox:q.dataset.originalViewBox},[n.port2])}));k.addEventListener("click",(async()=>{try{const t=await e({mimeTypes:["image/*"],description:"Image files"}),n=URL.createObjectURL(t);S.addEventListener("load",(()=>{URL.revokeObjectURL(n)}),{once:!0}),S.src=n}catch(t){console.error(t.name,t.message)}})),document.addEventListener("dragover",(e=>{e.preventDefault()})),document.addEventListener("dragenter",(e=>{e.preventDefault(),R.classList.add("dropenter")})),document.addEventListener("dragleave",(e=>{e.preventDefault(),e.target===document.documentElement&&R.classList.remove("dropenter")})),document.addEventListener("drop",(async e=>{e.preventDefault(),e.stopPropagation(),R.classList.remove("dropenter");const n=e.dataTransfer.items[0];if("file"===n.kind){let e;if(S.addEventListener("load",(()=>{URL.revokeObjectURL(e)}),{once:!0}),t){const t=await n.getAsFileSystemHandle();if("directory"===t.kind)return;{const n=await t.getFile();e=URL.createObjectURL(n),S.src=e}}else{const t=n.getAsFile();e=URL.createObjectURL(t),S.src=e}}})),N.addEventListener("click",(async()=>{try{let e=q.innerHTML,a=null;t&&(a=await showSaveFilePicker({types:[{description:"SVG file",accept:{"image/svg+xml":[".svg"]}}]})),e=await J(e);const r=new Blob([e],{type:"image/svg+xml"});await n(r,{fileName:"",description:"SVG file"},a)}catch(e){console.error(e.name,e.message)}})),T.addEventListener("click",(async()=>{const e=await navigator.clipboard.read();for(const t of e)for(const e of t.types)if(e.startsWith("image/")){const n=await t.getType(e);if(!n)return;const a=URL.createObjectURL(n);return void(S.src=a)}})),$.addEventListener("click",(async()=>{let e=q.innerHTML;try{navigator.clipboard.write([new ClipboardItem({"text/plain":new Promise((async t=>{e=await J(e),t(new Blob([e],{type:"text/plain"}))})),"image/svg+xml":new Promise((async t=>{e=await J(e),t(new Blob([e],{type:"image/svg+xml"}))}))})])}catch{e=await J(e);const t=new Blob([e],{type:"text/plain"}),n=new Blob([e],{type:"image/svg+xml"});navigator.clipboard.write([new ClipboardItem({[n.type]:n,[t.type]:t})])}}));const K={red:"red",green:"green",blue:"blue",alpha:"alpha"},Q={scale:"scale"},Z={minPathLenght:"minPathSegments",turdsize:"turdsize",alphamax:"alphamax",turnpolicy:"turnpolicy",opticurve:"opticurve",opttolerance:"opttolerance"},ee={["brightness"]:{unit:"%",initial:100,min:0,max:200},["contrast"]:{unit:"%",initial:100,min:0,max:200},["grayscale"]:{unit:"%",initial:0,min:0,max:100},["hue-rotate"]:{unit:"deg",initial:0,min:0,max:360},["invert"]:{unit:"%",initial:0,min:0,max:100},["opacity"]:{unit:"%",initial:100,min:0,max:100},["saturate"]:{unit:"%",initial:100,min:0,max:200},["sepia"]:{unit:"%",initial:0,min:0,max:100}},te={[K.red]:{unit:"steps",initial:10,min:1,max:20},[K.green]:{unit:"steps",initial:10,min:1,max:20},[K.blue]:{unit:"steps",initial:10,min:1,max:20},[K.alpha]:{unit:"steps",initial:1,min:1,max:10}},ne={[Q.scale]:{unit:"%",initial:100,min:1,max:200}},ae={[Z.minPathLenght]:{unit:"steps",initial:0,min:0,max:30},[Z.turdsize]:{unit:"pixels",initial:2,min:1,max:50},[Z.alphamax]:{unit:"",initial:1,min:0,max:1.3334},[Z.turnpolicy]:{unit:"steps",initial:4,min:0,max:6},[Z.opticurve]:{unit:"steps",initial:1,min:0,max:1},[Z.opttolerance]:{unit:"",initial:.2,min:0,max:1}},re=[{name:"svgOptions",icon:s},{name:"colorChannels",icon:c},{name:"imageSize",icon:l},{name:"imagePreprocessing",icon:d}],ie=[Object.entries(ae),Object.entries(te),Object.entries(ne),Object.entries(ee)],oe={},se={},ce={};let le=0,de=0,ue=null,me=1,pe={};const ge=(e,t)=>{const n=W.t(e);return` (${e?`${t}${1===n.length?n:` ${n}`}`:t})`},he=e=>{const t=document.createElement("span");return t.classList.add("icon"),t.innerHTML=e,t},ve=(e,t,n)=>{const{unit:a,min:r,max:i,initial:o}=t,s=document.createElement("div");s.classList.add("preprocess-input");const c=document.createElement("label");c.textContent=W.t(e)||e,c.for=e;const l=document.createElement("span");se[e]=l,l.textContent=ge(a,o);const d=document.createElement("input");oe[e]=d,d.id=e,d.type="range",d.class=e,a&&(d.dataset.unit=a),""===a&&(d.step=.01),d.min=r,d.max=i,d.value=o,d.addEventListener("input",(()=>{l.textContent=ge(a,d.value)})),Object.keys(K).includes(e)||Object.keys(Z).includes(e),d.addEventListener("change",U((async()=>{Ee(),ue=null,await X(pe)}),250));const u=document.createElement("button");u.type="button",u.textContent=W.t("reset"),u.addEventListener("click",(async()=>{d.value=o,l.textContent=ge(a,o),d.dispatchEvent(new Event("change"))})),c.append(l),c.append(d),s.append(c),s.append(u),n.append(s)};v.addEventListener("change",(async()=>{const e=!v.checked;Object.keys(K).forEach((t=>{oe[t].disabled=e})),Ee(),ue=null,await X(pe)}));const fe=()=>{le=0,de=0,ue=null,me=1,pe={}};y.addEventListener("change",(async()=>{Ee(),ue=null,await X(pe)})),b.addEventListener("change",(async()=>{Ee(),ue=null,await X(pe)})),L.addEventListener("change",(async()=>{Ee(),ue=null,await X(pe)}));const ye=async()=>{await W.getTranslations(),we();const e=window.matchMedia("(max-width: 400px)"),t=()=>{e.matches?P.open=!1:P.open=!0};t(),e.addEventListener("change",t),ie.forEach(((e,t)=>{const{name:n,icon:a}=re[t],r=((e,t)=>{const n=document.createElement("fieldset");ce[e]=n;const a=document.createElement("legend"),r=he(t);return a.append(r),a.append(document.createTextNode(W.t(e))),n.append(a),n})(n,a);"colorChannels"===n?ce.colorChannels.append(v.parentNode):"svgOptions"===n?(ce.svgOptions.append(y.parentNode),ce.svgOptions.append(b.parentNode)):"imageSize"===n&&ce.imageSize.append(L.parentNode);for(const[i,o]of e)ve(i,o,r);h.append(r)})),h.append(M.parentNode),S.addEventListener("load",(()=>{S.width=S.naturalWidth,S.height=S.naturalHeight,setTimeout((async()=>{fe(),await X()}),200)})),S.complete&&S.dispatchEvent(new Event("load"))},we=()=>{M.textContent=W.t("resetAll"),f.textContent=W.t("posterizeInputImage"),w.textContent=W.t("colorSVG"),x.textContent=W.t("monochromeSVG"),E.textContent=W.t("considerDPR"),k.innerHTML="",k.append(he(a)),k.append(document.createTextNode(W.t("openImage"))),N.innerHTML="",N.append(he(r)),N.append(document.createTextNode(W.t("saveSVG"))),$.innerHTML="",$.append(he(i)),$.append(document.createTextNode(W.t("copySVG"))),T.innerHTML="",T.append(he(o)),T.append(document.createTextNode(W.t("pasteImage"))),R.dataset.dropText=W.t("dropFileHere"),_.innerHTML="",_.append(he(s)),_.append(document.createTextNode(W.t("tweak")))};M.addEventListener("click",(async()=>{const e=(e,t,n)=>{oe[e].value=n,se[e].textContent=ge(t,n)};ie.forEach((t=>{for(const[n,a]of t)e(n,a.unit,a.initial)})),fe(),await X()}));const be=e=>(e.preventDefault(),!1),xe=e=>{for(let t=0;t<Me.length;t++)if(e.pointerId===Me[t].pointerId){Me[t]=e;break}if(2===Me.length){const e=Math.abs(Me[0].clientX-Me[1].clientX);ke>0&&(e>ke&&(me*=.995,Se(me)),e<ke&&(me*=1.005,Se(me))),ke=e}else if(1===Me.length){const t=Math.floor(e.offsetX-le),n=Math.floor(e.offsetY-de);ue.setAttribute("viewBox",`${-1*t} ${-1*n} ${pe.width} ${pe.height}`)}};q.addEventListener("pointerdown",(e=>{ue=ue||q.querySelector("svg"),ue&&(Me.push(e),ue.addEventListener("dragstart",be),Ee(),le=Math.floor(e.offsetX+pe.x),de=Math.floor(e.offsetY+pe.y),q.addEventListener("pointermove",xe),q.style.cursor="grabbing")}));const Le=e=>{q.removeEventListener("pointermove",xe),ue=ue||q.querySelector("svg"),ue&&(Ne(e),Me.length<2&&(ke=-1),ue.removeEventListener("dragstart",be),Ee(),q.style.cursor="grab")};q.addEventListener("pointerup",(e=>{Le(e)})),q.addEventListener("pointercancel",(e=>{Le(e)})),q.addEventListener("pointerleave",(e=>{Le(e)}));const Ee=()=>{if(ue=ue||q.querySelector("svg"),!ue)return;const e=ue.getAttribute("viewBox"),[t,n,a,r]=e.split(" ");pe.x=Number(t),pe.y=Number(n),pe.width=Number(a),pe.height=Number(r)},Se=e=>{if(ue=ue||q.querySelector("svg"),!ue)return;Te(`${W.t("zoom")}: ${(1/e).toFixed(1)}×`,2e3),void 0===pe.width&&Ee();const t=Math.ceil(pe.width*e),n=Math.ceil(pe.height*e);if(t<=0||n<=0)return;const a=Math.floor(pe.x+(pe.width-t)/2),r=Math.floor(pe.y+(pe.height-n)/2);ue.setAttribute("viewBox",`${a} ${r} ${t} ${n}`)};q.addEventListener("wheel",(e=>{e.preventDefault(),me=Math.max(.1,Math.min(me*(1+.005*e.deltaY),10)),Se(me)}));const Me=[];let ke=-1;const Ne=e=>{for(let t=0;t<Me.length;t++)if(Me[t].pointerId===e.pointerId){Me.splice(t,1);break}};C.addEventListener("click",(()=>{g.classList.toggle("debug"),j.classList.toggle("debug")}));let $e=null;const Te=(e,t=5e3)=>{O.innerHTML=e,O.hidden=!1,$e&&clearTimeout($e),$e=setTimeout((()=>{O.hidden=!0,O.textContent=""}),t)};document.documentElement.style.setProperty("--100vh",`${window.innerHeight}px`),window.addEventListener("resize",U((()=>{document.documentElement.style.setProperty("--100vh",`${window.innerHeight}px`)}),250)),"launchQueue"in window&&p((()=>import("./filehandling.3967ebbb.js")),["assets/filehandling.3967ebbb.js","assets/vendor.e3820820.js"]),(async()=>{ye();(function(e={}){const{immediate:t=!1,onNeedRefresh:n,onOfflineReady:a,onRegistered:r,onRegisterError:i}=e;let o;return"serviceWorker"in navigator&&(o=new u("/sw.js",{scope:"/"}),o.addEventListener("activated",(e=>{e.isUpdate?window.location.reload():null==a||a()})),o.register({immediate:t}).then((e=>{null==r||r(e)})).catch((e=>{null==i||i(e)}))),async(e=!0)=>{}})({onOfflineReady(){Te(W.t("readyToWorkOffline"))},onNeedRefresh(){location.reload()}})()})();export{S as i};