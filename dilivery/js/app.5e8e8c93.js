(function(e){function t(t){for(var o,l,u=t[0],c=t[1],s=t[2],d=0,b=[];d<u.length;d++)l=u[d],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&b.push(r[l][0]),r[l]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);i&&i(t);while(b.length)b.shift()();return n.push.apply(n,s||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],o=!0,l=1;l<a.length;l++){var c=a[l];0!==r[c]&&(o=!1)}o&&(n.splice(t--,1),e=u(u.s=a[0]))}return e}var o={},r={app:0},n=[];function l(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"1faf9e36"}[e]+".js"}function u(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,u),a.l=!0,a.exports}u.e=function(e){var t=[],a=r[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,o){a=r[e]=[t,o]}));t.push(a[2]=o);var n,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=l(e);var s=new Error;n=function(t){c.onerror=c.onload=null,clearTimeout(d);var a=r[e];if(0!==a){if(a){var o=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+n+")",s.name="ChunkLoadError",s.type=o,s.request=n,a[1](s)}r[e]=void 0}};var d=setTimeout((function(){n({type:"timeout",target:c})}),12e4);c.onerror=c.onload=n,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,a){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(u.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(a,o,function(t){return e[t]}.bind(null,o));return a},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/dist/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var i=s;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},3785:function(e,t,a){"use strict";a("4570")},4570:function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);var o=a("7a23");const r={id:"nav"},n=Object(o["f"])("Home"),l=Object(o["f"])(" | "),u=Object(o["f"])("About");function c(e,t){const a=Object(o["w"])("router-link"),c=Object(o["w"])("router-view");return Object(o["p"])(),Object(o["d"])(o["a"],null,[Object(o["g"])("div",r,[Object(o["g"])(a,{to:"/"},{default:Object(o["B"])(()=>[n]),_:1}),l,Object(o["g"])(a,{to:"/about"},{default:Object(o["B"])(()=>[u]),_:1})]),Object(o["g"])(c)],64)}a("3785");const s={};s.render=c;var d=s,i=a("6c02"),b=a("cf05"),f=a.n(b);const p={class:"home"},v=Object(o["g"])("img",{alt:"Vue logo",src:f.a},null,-1);function g(e,t,a,r,n,l){const u=Object(o["w"])("HelloWorld");return Object(o["p"])(),Object(o["d"])("div",p,[v,Object(o["g"])(u,{msg:"Welcome to Your Vue.js App"})])}const h=Object(o["C"])("data-v-df2aa6b2");Object(o["s"])("data-v-df2aa6b2");const j={class:"hello"},m=Object(o["e"])('<p data-v-df2aa6b2> For a guide and recipes on how to configure / customize this project,<br data-v-df2aa6b2> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-df2aa6b2>vue-cli documentation</a>. </p><h3 data-v-df2aa6b2>Installed CLI Plugins</h3><ul data-v-df2aa6b2><li data-v-df2aa6b2><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-df2aa6b2>router</a></li><li data-v-df2aa6b2><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener" data-v-df2aa6b2>vuex</a></li></ul><h3 data-v-df2aa6b2>Essential Links</h3><ul data-v-df2aa6b2><li data-v-df2aa6b2><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-df2aa6b2>Core Docs</a></li><li data-v-df2aa6b2><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-df2aa6b2>Forum</a></li><li data-v-df2aa6b2><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-df2aa6b2>Community Chat</a></li><li data-v-df2aa6b2><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-df2aa6b2>Twitter</a></li><li data-v-df2aa6b2><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-df2aa6b2>News</a></li></ul><h3 data-v-df2aa6b2>Ecosystem</h3><ul data-v-df2aa6b2><li data-v-df2aa6b2><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-df2aa6b2>vue-router</a></li><li data-v-df2aa6b2><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-df2aa6b2>vuex</a></li><li data-v-df2aa6b2><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-df2aa6b2>vue-devtools</a></li><li data-v-df2aa6b2><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-df2aa6b2>vue-loader</a></li><li data-v-df2aa6b2><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-df2aa6b2>awesome-vue</a></li></ul>',7);Object(o["q"])();const O=h((e,t,a,r,n,l)=>(Object(o["p"])(),Object(o["d"])("div",j,[Object(o["g"])("h1",null,Object(o["y"])(a.msg),1),m])));var y={name:"HelloWorld",props:{msg:String}};a("95a2");y.render=O,y.__scopeId="data-v-df2aa6b2";var k=y,w={name:"Home",components:{HelloWorld:k}};w.render=g;var _=w;const x=Object(o["g"])("h1",null,"Admin page",-1);function P(e,t,a,r,n,l){return Object(o["p"])(),Object(o["d"])(o["a"],null,[x,Object(o["g"])("p",null,Object(o["y"])(n.successMsg),1),Object(o["g"])("button",{onClick:t[1]||(t[1]=(...e)=>l.getTableData&&l.getTableData(...e))}),(Object(o["p"])(!0),Object(o["d"])(o["a"],null,Object(o["v"])(n.users,(e,t)=>(Object(o["p"])(),Object(o["d"])("div",{key:t},[Object(o["g"])("p",null,Object(o["y"])(t),1),Object(o["g"])("p",null,Object(o["y"])(e.name),1)]))),128))],64)}var M=a("bc3a"),T=a.n(M),C={name:"admin",data(){return{errorMsg:"",successMsg:"",users:[]}},mounted:function(){this.getTableData()},methods:{getTableData(){T.a.get("http://localhost/afanasyev-project-php/process.php?action=read").then((function(e){console.log(e),console.log(e.data),e.data.error?this.errorMsg=e.data.message:(console.log("sucess"),this.successMsg=e.data,console.log("aaaa"))}))}}};C.render=P;var E=C;const H=[{path:"/",name:"Home",component:_},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/admin",name:"admin",component:E}],S=Object(i["a"])({history:Object(i["b"])(),routes:H});var A=S,D=a("5502"),L=Object(D["a"])({state:{},mutations:{},actions:{},modules:{}});Object(o["c"])(d).use(L).use(A).mount("#app"),A.onError(e=>{const t=/Loading chunk (\d)+ failed/g,a=e.message.match(t),o=A.history.pending.fullPath;a&&A.replace(o)})},"654b":function(e,t,a){},"95a2":function(e,t,a){"use strict";a("654b")},cf05:function(e,t,a){e.exports=a.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.5e8e8c93.js.map