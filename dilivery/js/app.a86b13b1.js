(function(e){function t(t){for(var r,u,l=t[0],c=t[1],s=t[2],d=0,b=[];d<l.length;d++)u=l[d],Object.prototype.hasOwnProperty.call(n,u)&&n[u]&&b.push(n[u][0]),n[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);i&&i(t);while(b.length)b.shift()();return o.push.apply(o,s||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,u=1;u<a.length;u++){var c=a[u];0!==n[c]&&(r=!1)}r&&(o.splice(t--,1),e=l(l.s=a[0]))}return e}var r={},n={app:0},o=[];function u(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"1faf9e36"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var t=[],a=n[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,r){a=n[e]=[t,r]}));t.push(a[2]=r);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=u(e);var s=new Error;o=function(t){c.onerror=c.onload=null,clearTimeout(d);var a=n[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,a[1](s)}n[e]=void 0}};var d=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(a,r,function(t){return e[t]}.bind(null,r));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/dist/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var i=s;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},3785:function(e,t,a){"use strict";a("4570")},4570:function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);var r=a("7a23");const n={id:"nav"},o=Object(r["f"])("Home"),u=Object(r["f"])(" | "),l=Object(r["f"])("About");function c(e,t){const a=Object(r["w"])("router-link"),c=Object(r["w"])("router-view");return Object(r["p"])(),Object(r["d"])(r["a"],null,[Object(r["g"])("div",n,[Object(r["g"])(a,{to:"/"},{default:Object(r["B"])(()=>[o]),_:1}),u,Object(r["g"])(a,{to:"/about"},{default:Object(r["B"])(()=>[l]),_:1})]),Object(r["g"])(c)],64)}a("3785");const s={};s.render=c;var d=s,i=a("6c02"),b=a("cf05"),f=a.n(b);const p={class:"home"},v=Object(r["g"])("img",{alt:"Vue logo",src:f.a},null,-1);function h(e,t,a,n,o,u){const l=Object(r["w"])("HelloWorld");return Object(r["p"])(),Object(r["d"])("div",p,[v,Object(r["g"])(l,{msg:"Welcome to Your Vue.js App"})])}const g=Object(r["C"])("data-v-df2aa6b2");Object(r["s"])("data-v-df2aa6b2");const j={class:"hello"},m=Object(r["e"])('<p data-v-df2aa6b2> For a guide and recipes on how to configure / customize this project,<br data-v-df2aa6b2> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-df2aa6b2>vue-cli documentation</a>. </p><h3 data-v-df2aa6b2>Installed CLI Plugins</h3><ul data-v-df2aa6b2><li data-v-df2aa6b2><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-df2aa6b2>router</a></li><li data-v-df2aa6b2><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener" data-v-df2aa6b2>vuex</a></li></ul><h3 data-v-df2aa6b2>Essential Links</h3><ul data-v-df2aa6b2><li data-v-df2aa6b2><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-df2aa6b2>Core Docs</a></li><li data-v-df2aa6b2><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-df2aa6b2>Forum</a></li><li data-v-df2aa6b2><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-df2aa6b2>Community Chat</a></li><li data-v-df2aa6b2><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-df2aa6b2>Twitter</a></li><li data-v-df2aa6b2><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-df2aa6b2>News</a></li></ul><h3 data-v-df2aa6b2>Ecosystem</h3><ul data-v-df2aa6b2><li data-v-df2aa6b2><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-df2aa6b2>vue-router</a></li><li data-v-df2aa6b2><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-df2aa6b2>vuex</a></li><li data-v-df2aa6b2><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-df2aa6b2>vue-devtools</a></li><li data-v-df2aa6b2><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-df2aa6b2>vue-loader</a></li><li data-v-df2aa6b2><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-df2aa6b2>awesome-vue</a></li></ul>',7);Object(r["q"])();const O=g((e,t,a,n,o,u)=>(Object(r["p"])(),Object(r["d"])("div",j,[Object(r["g"])("h1",null,Object(r["y"])(a.msg),1),m])));var y={name:"HelloWorld",props:{msg:String}};a("95a2");y.render=O,y.__scopeId="data-v-df2aa6b2";var k=y,w={name:"Home",components:{HelloWorld:k}};w.render=h;var _=w;const x=Object(r["g"])("h1",null,"Admin page",-1);function P(e,t,a,n,o,u){return Object(r["p"])(),Object(r["d"])(r["a"],null,[x,Object(r["g"])("p",null,Object(r["y"])(o.users),1),Object(r["g"])("button",{onClick:t[1]||(t[1]=(...e)=>u.getTableData&&u.getTableData(...e))}),(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(o.users,(e,t)=>(Object(r["p"])(),Object(r["d"])("div",{key:t},[Object(r["g"])("p",null,Object(r["y"])(t),1),Object(r["g"])("p",null,Object(r["y"])(e.name),1)]))),128))],64)}var T=a("bc3a"),C=a.n(T),M={name:"admin",data(){return{errorMsg:"",successMsg:"",users:[]}},mounted:function(){this.getTableData()},methods:{getTableData(){C.a.get("http://localhost/afanasyev-project-php/process.php?action=read").then((function(e){console.log(e.users),console.log(e.data.users),console.log(e.data.data.users),this.users=e.data.users,e.data.error?this.errorMsg=e.data.message:this.users=e.data.users}))}}};M.render=P;var E=M;const H=[{path:"/",name:"Home",component:_},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/admin",name:"admin",component:E}],S=Object(i["a"])({history:Object(i["b"])(),routes:H});var A=S,D=a("5502"),L=Object(D["a"])({state:{},mutations:{},actions:{},modules:{}});Object(r["c"])(d).use(L).use(A).mount("#app"),A.onError(e=>{const t=/Loading chunk (\d)+ failed/g,a=e.message.match(t),r=A.history.pending.fullPath;a&&A.replace(r)})},"654b":function(e,t,a){},"95a2":function(e,t,a){"use strict";a("654b")},cf05:function(e,t,a){e.exports=a.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.a86b13b1.js.map