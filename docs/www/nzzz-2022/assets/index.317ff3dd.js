var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,i=(t,r,o)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,s=(e,t)=>{for(var r in t||(t={}))n.call(t,r)&&i(e,r,t[r]);if(o)for(var r of o(t))a.call(t,r)&&i(e,r,t[r]);return e};import{c as l,o as c,r as d,a as u,b as g,d as m,e as p,f as h}from"./vendor.36cce008.js";const f={};f.render=function(e,t){const r=d("router-view");return c(),l(r)};let O;const b={},_=function(e,t){if(!t)return e();if(void 0===O){const e=document.createElement("link").relList;O=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in b)return;b[e]=!0;const t=e.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${r}`))return;const o=document.createElement("link");return o.rel=t?"stylesheet":O,t||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),t?new Promise(((e,t)=>{o.addEventListener("load",e),o.addEventListener("error",t)})):void 0}))).then((()=>e()))};const P=[...[{path:"/",name:"main",redirect:"home",component:()=>_((()=>import("./Ready.2e5d748e.js")),["./assets/Ready.2e5d748e.js","./assets/vendor.36cce008.js"]),children:[{name:"home",path:"/home",component:()=>_((()=>import("./Index.0c90af40.js")),["./assets/Index.0c90af40.js","./assets/vendor.36cce008.js"])}]}]],y=u({history:g(),routes:P});var v;(v=y).beforeEach(((e,t,r)=>{if(/\/http/.test(e.path)||/\/https/.test(e.path)){const t=e.path.split("http")[1];window.location.href=`http${t}`}else r()})),v.afterEach((()=>{window.scrollTo(0,0)}));var j={loading(e,t){},changeRoute(e,t){e.routeFrom=t},changeOnline(e,t){e.online=t},changeUser(e,t){e.user.name=t,e.user=Object.assign({},e.user),localStorage.setItem("username",t)},changeScroll(e,t){e.distance=t}},w={hideLoading(e,t){setTimeout((()=>{e.commit("loading",!1)}),600)}};const S={state:{loading:null,online:!0,user:{name:localStorage.getItem("username")},scroll:!0,distance:0,winHeight:document.documentElement.clientHeight||document.body.clientHeight},getters:{online:e=>e.online,user:e=>e.user,distance:e=>e.distance,winHeight:e=>e.winHeight},mutations:s({},j),actions:s({},w)};var E,I=m((E=s({},S),t(E,r({modules:{}}))));console.log("production");var L={BASE_URL:"./",VERSION:"0.0.0",APP_COPYRIGHT:"",API_URL:"http://localhost:9999",IMG_URL:""};p.defaults.timeout=3e4;const D=L.API_URL;p.interceptors.request.use((e=>{const t=e.url,r=new Object;return 0!==t.indexOf("http://")&&0!==t.indexOf("https://")&&(0===t.indexOf("/")?e.url=D+t:e.url=D+"/"+t),"get"===e.method?e.params=Object.assign(e.params,r):e.data=Object.assign(e.data,r),e}),(e=>Promise.reject(e))),p.interceptors.response.use((e=>e.data?(401===e.data.code&&(console.log("登录失效"),I.commit("changeOnline",!1)),e.data.result&&200===e.data.code?Promise.resolve(e.data.result):e.data.data?Promise.resolve(e.data.data):Promise.resolve(e.data)):Promise.reject(e)),(e=>(I.dispatch("hideLoading"),Promise.reject(e))));const M=Object.freeze(Object.defineProperty({__proto__:null,login:e=>((e,t,r="get")=>{if(t&&t._noLoading&&delete t._noLoading,"get"===r)return p.get(e,{headers:{Authorization:""+localStorage.getItem("token")},params:t});{const o={};return o.Authorization=""+localStorage.getItem("token"),p[r](e,t,{headers:o})}})("api/user/login",e,"post")},Symbol.toStringTag,{value:"Module"}));var A=Object.freeze(Object.defineProperty({__proto__:null,home:M},Symbol.toStringTag,{value:"Module"}));const x=L;var R=Object.freeze(Object.defineProperty({__proto__:null,config:x,transformDate:e=>{const t=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],r=new Date(e.replace(/-/g,"/"));return t[r.getDay()]?t[r.getDay()]:""},getDate:e=>new Date(e.replace(/-/g,"/")),getMinDate:(e,t)=>{const r=new Date(e.replace(/-/g,"/"));return isNaN(r.getDate())?e:"ym"===t?r.getFullYear()+" - "+(r.getMonth()+1):"md"===t?r.getMonth()+1+"-"+r.getDate():(r.getMonth()+1+"").padStart(2,"0")},isInArray:(e,t)=>{if(e.indexOf&&"function"==typeof e.indexOf){const r=e.indexOf(t);if(r>=0)return r}return!1},deleteSome:(e,t)=>(t.forEach((t=>{delete e[t]})),e),pickSome:(e,t)=>{const r={};return t.forEach((t=>{r[t]=e[t]})),r},getBLen:e=>null==e?0:(e+="").replace(/[^\x00-\xff]/g,"01").length,rndNum:(e,t)=>Math.floor(Math.random()*(t-e+1)+e),isIOS:()=>!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),isWX:()=>"micromessenger"===(window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i)+""||""),Fingerprint:()=>(new window.Fingerprint).get(),default:{}},Symbol.toStringTag,{value:"Module"})),T={install(e){e.config.globalProperties.$ajax=A,e.config.globalProperties.$utils=R}};h(f).use(I).use(y).use(T).mount("#app");
