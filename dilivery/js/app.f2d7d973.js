(function(e){function t(t){for(var o,l,c=t[0],i=t[1],d=t[2],s=0,b=[];s<c.length;s++)l=c[s],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&b.push(n[l][0]),n[l]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);u&&u(t);while(b.length)b.shift()();return r.push.apply(r,d||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],o=!0,l=1;l<a.length;l++){var i=a[l];0!==n[i]&&(o=!1)}o&&(r.splice(t--,1),e=c(c.s=a[0]))}return e}var o={},n={app:0},r=[];function l(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"c8f68a9c"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a=n[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,o){a=n[e]=[t,o]}));t.push(a[2]=o);var r,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=l(e);var d=new Error;r=function(t){i.onerror=i.onload=null,clearTimeout(s);var a=n[e];if(0!==a){if(a){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,a[1](d)}n[e]=void 0}};var s=setTimeout((function(){r({type:"timeout",target:i})}),12e4);i.onerror=i.onload=r,document.head.appendChild(i)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(a,o,function(t){return e[t]}.bind(null,o));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/dist/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var u=d;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);var o=a("7a23");const n={id:"nav"},r=Object(o["f"])("Home"),l=Object(o["f"])(" | "),c=Object(o["f"])("About");function i(e,t){const a=Object(o["w"])("router-link"),i=Object(o["w"])("router-view");return Object(o["p"])(),Object(o["d"])(o["a"],null,[Object(o["g"])("div",n,[Object(o["g"])(a,{to:"/"},{default:Object(o["C"])(()=>[r]),_:1}),l,Object(o["g"])(a,{to:"/about"},{default:Object(o["C"])(()=>[c]),_:1})]),Object(o["g"])(i)],64)}a("7e13");const d={};d.render=i;var s=d,u=a("6c02"),b=a("cf05"),p=a.n(b);const f={class:"home"},v=Object(o["g"])("img",{alt:"Vue logo",src:p.a},null,-1);function g(e,t,a,n,r,l){const c=Object(o["w"])("HelloWorld");return Object(o["p"])(),Object(o["d"])("div",f,[v,Object(o["g"])(c,{msg:"Welcome to Your Vue.js App"})])}const _=Object(o["E"])("data-v-df2aa6b2");Object(o["s"])("data-v-df2aa6b2");const h={class:"hello"},m=Object(o["e"])('<p data-v-df2aa6b2> For a guide and recipes on how to configure / customize this project,<br data-v-df2aa6b2> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-df2aa6b2>vue-cli documentation</a>. </p><h3 data-v-df2aa6b2>Installed CLI Plugins</h3><ul data-v-df2aa6b2><li data-v-df2aa6b2><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-df2aa6b2>router</a></li><li data-v-df2aa6b2><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener" data-v-df2aa6b2>vuex</a></li></ul><h3 data-v-df2aa6b2>Essential Links</h3><ul data-v-df2aa6b2><li data-v-df2aa6b2><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-df2aa6b2>Core Docs</a></li><li data-v-df2aa6b2><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-df2aa6b2>Forum</a></li><li data-v-df2aa6b2><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-df2aa6b2>Community Chat</a></li><li data-v-df2aa6b2><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-df2aa6b2>Twitter</a></li><li data-v-df2aa6b2><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-df2aa6b2>News</a></li></ul><h3 data-v-df2aa6b2>Ecosystem</h3><ul data-v-df2aa6b2><li data-v-df2aa6b2><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-df2aa6b2>vue-router</a></li><li data-v-df2aa6b2><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-df2aa6b2>vuex</a></li><li data-v-df2aa6b2><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-df2aa6b2>vue-devtools</a></li><li data-v-df2aa6b2><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-df2aa6b2>vue-loader</a></li><li data-v-df2aa6b2><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-df2aa6b2>awesome-vue</a></li></ul>',7);Object(o["q"])();const j=_((e,t,a,n,r,l)=>(Object(o["p"])(),Object(o["d"])("div",h,[Object(o["g"])("h1",null,Object(o["y"])(a.msg),1),m])));var O={name:"HelloWorld",props:{msg:String}};a("95a2");O.render=j,O.__scopeId="data-v-df2aa6b2";var w=O,y={name:"Home",components:{HelloWorld:w}};y.render=g;var k=y;const C=Object(o["E"])("data-v-6270a992");Object(o["s"])("data-v-6270a992");const E={class:"main"},L=Object(o["g"])("h1",{class:"form__title"},"Administrator page",-1),I=Object(o["g"])("div",{class:"modal",id:"modal_window"},null,-1),x={key:0,class:"info"},M={class:"info__actions"},P=Object(o["g"])("button",{class:"actions__button"},"Add",-1),T=Object(o["g"])("button",{class:"actions__button green"},"Save",-1),S={class:"info__grid"},A=Object(o["e"])('<div class="grid__head" data-v-6270a992><p class="head__cell corner-left" data-v-6270a992>№</p><p class="head__cell" data-v-6270a992>Name</p><p class="head__cell" data-v-6270a992>Descripton</p><p class="head__cell" data-v-6270a992>Category</p><p class="head__cell" data-v-6270a992>Price</p><p class="head__cell" data-v-6270a992>Company</p><p class="head__cell" data-v-6270a992>Image URL</p><p class="head__cell green" data-v-6270a992>Edit</p><p class="head__cell corner-right red" data-v-6270a992>Remove</p></div>',1),B={class:"row__cell green"},H=Object(o["g"])("div",{class:"row__cell red"},[Object(o["g"])("img",{src:"http://cdn.onlinewebfonts.com/svg/download_216356.png",height:"32",alt:"Delete"})],-1),D={key:1,class:"main__container"},q=Object(o["g"])("p",{class:"container__options"}," If you are not the administrator of our site, please leave this page ",-1),z={class:"container__form"},R=Object(o["e"])('<div class="form__item" data-v-6270a992><label class="item__label" data-v-6270a992> Login: </label><input id="admin_login" class="item__input" type="text" placeholder="" required data-v-6270a992></div><div class="form__item" data-v-6270a992><label class="item__label" data-v-6270a992> Password: </label><input id="admin_password" class="item__input" type="password" placeholder="" required data-v-6270a992></div>',2),U={class:"form__item row"},F=Object(o["g"])("button",{class:"item__button"},"Return",-1);Object(o["q"])();const W=C((e,t,a,n,r,l)=>{const c=Object(o["w"])("router-link");return Object(o["p"])(),Object(o["d"])("div",E,[L,I,r.isAutorized?(Object(o["p"])(),Object(o["d"])("div",x,[Object(o["g"])("div",M,[Object(o["D"])(Object(o["g"])("input",{class:"actions__search",placeholder:"Search..",type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>r.filter=e)},null,512),[[o["A"],r.filter]]),P,T,Object(o["g"])("button",{onClick:t[2]||(t[2]=(...e)=>l.cancelChanges&&l.cancelChanges(...e)),class:"actions__button red"},"Cancel")]),Object(o["g"])("div",S,[A,(Object(o["p"])(!0),Object(o["d"])(o["a"],null,Object(o["v"])(l.filtered_food_info,(e,t)=>(Object(o["p"])(),Object(o["d"])("div",{class:"grid__row",key:t},[Object(o["g"])("input",{disabled:"",id:"0"+t,class:"row__cell",value:e.id},null,8,["id","value"]),Object(o["g"])("input",{id:"1"+t,class:"row__cell",value:e.food_name},null,8,["id","value"]),Object(o["g"])("input",{id:"2"+t,class:"row__cell",value:e.description},null,8,["id","value"]),Object(o["g"])("input",{id:"3"+t,class:"row__cell",value:e.category},null,8,["id","value"]),Object(o["g"])("input",{id:"4"+t,class:"row__cell",min:"0,00",type:"number",step:"0.01",value:e.price},null,8,["id","value"]),Object(o["g"])("input",{id:"5"+t,class:"row__cell",value:e.brand},null,8,["id","value"]),Object(o["g"])("input",{id:"6"+t,class:"row__cell",value:e.image},null,8,["id","value"]),Object(o["g"])("div",B,[Object(o["g"])("img",{src:"https://i.stack.imgur.com/F2zuF.png",height:"30",alt:"Edit",onClick:e=>l.editRow(t)},null,8,["onClick"])]),H]))),128))])])):(Object(o["p"])(),Object(o["d"])("div",D,[q,Object(o["g"])("form",z,[R,Object(o["g"])("div",U,[Object(o["g"])(c,{to:"/"},{default:C(()=>[F]),_:1}),Object(o["g"])("button",{type:"submit",onClick:t[3]||(t[3]=(...e)=>l.TrySignUp&&l.TrySignUp(...e)),class:"item__button"}," Enter ")])])]))])});var V=a("bc3a"),J=a.n(V),N={name:"admin",data(){return{errorMsg:"",successMsg:"",food_info:[],food_info_copy:[],isAutorized:!1,filter:""}},computed:{filtered_food_info:function(){var e=this.filter.toLowerCase();return this.food_info.filter(t=>t.food_name.toLowerCase().includes(e)||t.brand.toLowerCase().includes(e)||t.description.toLowerCase().includes(e)||t.category.toLowerCase().includes(e))}},mounted:function(){},methods:{editRow(e){console.log(e);var t=document.getElementById("1"+e).value,a=document.getElementById("2"+e).value,o=document.getElementById("3"+e).value,n=document.getElementById("4"+e).value,r=document.getElementById("5"+e).value,l=document.getElementById("6"+e).value;this.food_info[e]={id:this.food_info[e].id,food_name:t,description:a,category:o,price:n,brand:r,image:l},console.log(this.food_info[e])},cancelChanges(){this.food_info=this.food_info_copy},showModal(e){var t=document.getElementById("modal_window");e?(t.style.backgroundColor="#00cc99",t.innerHTML="Success!"):(t.style.backgroundColor="#ff3300",t.innerHTML="Error!"),t.classList.add("show"),setTimeout((function(){t.classList.remove("show")}),2e3)},TrySignUp:function(){var e=document.getElementById("admin_login").value;let t=document.getElementById("admin_password").value;if(""==e||""==t)return void this.showModal(!1);let a=this,o={login:""+e,password:""+t};J.a.get("http://localhost/afanasyev-project-php/admin_signup.php",{params:o}).then((function(e){e.data.session?(a.showModal(!0),a.isAutorized=e.data.session,a.getTableData()):a.showModal(!1)}))},getTableData(){let e=this;J.a.get("http://localhost/afanasyev-project-php/admin_actions.php?action=read").then((function(t){t.data.error?this.errorMsg=t.data.message:(e.food_info=t.data.food_info,e.food_info_copy=t.data.food_info)}))}}};a("a2fe");N.render=W,N.__scopeId="data-v-6270a992";var Y=N;const G=[{path:"/",name:"Home",component:k},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/admin",name:"admin",component:Y}],K=Object(u["a"])({history:Object(u["b"])(),routes:G});var Q=K,X=a("5502"),Z=Object(X["a"])({state:{},mutations:{},actions:{},modules:{}});Object(o["c"])(s).use(Z).use(Q).mount("#app"),Q.onError(e=>{const t=/Loading chunk (\d)+ failed/g,a=e.message.match(t),o=Q.history.pending.fullPath;a&&Q.replace(o)})},"64ff":function(e,t,a){},"654b":function(e,t,a){},"6bb8":function(e,t,a){},"7e13":function(e,t,a){"use strict";a("6bb8")},"95a2":function(e,t,a){"use strict";a("654b")},a2fe:function(e,t,a){"use strict";a("64ff")},cf05:function(e,t,a){e.exports=a.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.f2d7d973.js.map