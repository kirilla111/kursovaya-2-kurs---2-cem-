(function(e){function t(t){for(var o,c,l=t[0],i=t[1],d=t[2],s=0,p=[];s<l.length;s++)c=l[s],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&p.push(n[c][0]),n[c]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,d||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],o=!0,c=1;c<a.length;c++){var i=a[c];0!==n[i]&&(o=!1)}o&&(r.splice(t--,1),e=l(l.s=a[0]))}return e}var o={},n={app:0},r=[];function c(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"c8f68a9c"}[e]+".js"}function l(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var t=[],a=n[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,o){a=n[e]=[t,o]}));t.push(a[2]=o);var r,i=document.createElement("script");i.charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.src=c(e);var d=new Error;r=function(t){i.onerror=i.onload=null,clearTimeout(s);var a=n[e];if(0!==a){if(a){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,a[1](d)}n[e]=void 0}};var s=setTimeout((function(){r({type:"timeout",target:i})}),12e4);i.onerror=i.onload=r,document.head.appendChild(i)}return Promise.all(t)},l.m=e,l.c=o,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(a,o,function(t){return e[t]}.bind(null,o));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/dist/",l.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var u=d;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"185f":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);var o=a("7a23");const n={id:"nav"},r=Object(o["f"])("Home"),c=Object(o["f"])(" | "),l=Object(o["f"])("About");function i(e,t){const a=Object(o["w"])("router-link"),i=Object(o["w"])("router-view");return Object(o["p"])(),Object(o["d"])(o["a"],null,[Object(o["g"])("div",n,[Object(o["g"])(a,{to:"/"},{default:Object(o["C"])(()=>[r]),_:1}),c,Object(o["g"])(a,{to:"/about"},{default:Object(o["C"])(()=>[l]),_:1})]),Object(o["g"])(i)],64)}a("7e13");const d={};d.render=i;var s=d,u=a("6c02"),p=a("cf05"),b=a.n(p);const f={class:"home"},v=Object(o["g"])("img",{alt:"Vue logo",src:b.a},null,-1);function g(e,t,a,n,r,c){const l=Object(o["w"])("HelloWorld");return Object(o["p"])(),Object(o["d"])("div",f,[v,Object(o["g"])(l,{msg:"Welcome to Your Vue.js App"})])}const m=Object(o["E"])("data-v-df2aa6b2");Object(o["s"])("data-v-df2aa6b2");const _={class:"hello"},h=Object(o["e"])('<p data-v-df2aa6b2> For a guide and recipes on how to configure / customize this project,<br data-v-df2aa6b2> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-df2aa6b2>vue-cli documentation</a>. </p><h3 data-v-df2aa6b2>Installed CLI Plugins</h3><ul data-v-df2aa6b2><li data-v-df2aa6b2><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-df2aa6b2>router</a></li><li data-v-df2aa6b2><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener" data-v-df2aa6b2>vuex</a></li></ul><h3 data-v-df2aa6b2>Essential Links</h3><ul data-v-df2aa6b2><li data-v-df2aa6b2><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-df2aa6b2>Core Docs</a></li><li data-v-df2aa6b2><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-df2aa6b2>Forum</a></li><li data-v-df2aa6b2><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-df2aa6b2>Community Chat</a></li><li data-v-df2aa6b2><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-df2aa6b2>Twitter</a></li><li data-v-df2aa6b2><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-df2aa6b2>News</a></li></ul><h3 data-v-df2aa6b2>Ecosystem</h3><ul data-v-df2aa6b2><li data-v-df2aa6b2><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-df2aa6b2>vue-router</a></li><li data-v-df2aa6b2><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-df2aa6b2>vuex</a></li><li data-v-df2aa6b2><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-df2aa6b2>vue-devtools</a></li><li data-v-df2aa6b2><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-df2aa6b2>vue-loader</a></li><li data-v-df2aa6b2><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-df2aa6b2>awesome-vue</a></li></ul>',7);Object(o["q"])();const j=m((e,t,a,n,r,c)=>(Object(o["p"])(),Object(o["d"])("div",_,[Object(o["g"])("h1",null,Object(o["y"])(a.msg),1),h])));var O={name:"HelloWorld",props:{msg:String}};a("95a2");O.render=j,O.__scopeId="data-v-df2aa6b2";var w=O,y={name:"Home",components:{HelloWorld:w}};y.render=g;var k=y;const C=Object(o["E"])("data-v-78639f9c");Object(o["s"])("data-v-78639f9c");const E={class:"main"},L=Object(o["g"])("h1",{class:"form__title"},"Administrator page",-1),I={key:0,class:"info"},x={class:"info__actions"},P=Object(o["g"])("button",{class:"actions__button"},"Add",-1),T=Object(o["g"])("button",{class:"actions__button green"},"Save",-1),A=Object(o["g"])("button",{class:"actions__button red"},"Cancel",-1),S={class:"info__grid"},B=Object(o["e"])('<div class="grid__head" data-v-78639f9c><p class="head__cell corner-left" data-v-78639f9c>№</p><p class="head__cell" data-v-78639f9c>Name</p><p class="head__cell" data-v-78639f9c>Descripton</p><p class="head__cell" data-v-78639f9c>Category</p><p class="head__cell" data-v-78639f9c>Price</p><p class="head__cell" data-v-78639f9c>Company</p><p class="head__cell" data-v-78639f9c>Image URL</p><p class="head__cell green" data-v-78639f9c>Edit</p><p class="head__cell corner-right red" data-v-78639f9c>Remove</p></div>',1),F={class:"row__cell green"},M=Object(o["g"])("div",{class:"row__cell red"},[Object(o["g"])("img",{src:"http://cdn.onlinewebfonts.com/svg/download_216356.png",height:"32",alt:"Delete"})],-1),W={key:1,class:"main__container"},z=Object(o["g"])("p",{class:"container__options"}," If you are not the administrator of our site, please leave this page ",-1),D={class:"container__form"},H=Object(o["e"])('<div class="form__item" data-v-78639f9c><label class="item__label" data-v-78639f9c> Login: </label><input id="admin_login" class="item__input" type="text" placeholder="" required data-v-78639f9c></div><div class="form__item" data-v-78639f9c><label class="item__label" data-v-78639f9c> Password: </label><input id="admin_password" class="item__input" type="password" placeholder="" required data-v-78639f9c></div>',2),q={class:"form__item row"},R=Object(o["g"])("button",{class:"item__button"},"Return",-1);Object(o["q"])();const U=C((e,t,a,n,r,c)=>{const l=Object(o["w"])("router-link");return Object(o["p"])(),Object(o["d"])("div",E,[L,r.isAutorized?(Object(o["p"])(),Object(o["d"])("div",I,[Object(o["g"])("div",x,[Object(o["D"])(Object(o["g"])("input",{class:"actions__search",placeholder:"Search..",type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>r.filter=e)},null,512),[[o["A"],r.filter]]),P,T,A]),Object(o["g"])("div",S,[B,(Object(o["p"])(!0),Object(o["d"])(o["a"],null,Object(o["v"])(c.filtered_food_info,(e,t)=>(Object(o["p"])(),Object(o["d"])("div",{class:"grid__row",key:t},[Object(o["g"])("input",{disabled:"",id:"0"+t,class:"row__cell",value:e.id},null,8,["id","value"]),Object(o["g"])("input",{id:"1"+t,class:"row__cell",value:e.food_name},null,8,["id","value"]),Object(o["g"])("input",{id:"2"+t,class:"row__cell",value:e.description},null,8,["id","value"]),Object(o["g"])("input",{id:"3"+t,class:"row__cell",value:e.category},null,8,["id","value"]),Object(o["g"])("input",{id:"4"+t,class:"row__cell",min:"0,00",type:"number",step:"0.01",value:e.price},null,8,["id","value"]),Object(o["g"])("input",{id:"5"+t,class:"row__cell",value:e.brand},null,8,["id","value"]),Object(o["g"])("input",{id:"6"+t,class:"row__cell",value:e.image},null,8,["id","value"]),Object(o["g"])("div",F,[Object(o["g"])("img",{src:"https://i.stack.imgur.com/F2zuF.png",height:"30",alt:"Edit",onClick:e=>c.editRow(t)},null,8,["onClick"])]),M]))),128))])])):(Object(o["p"])(),Object(o["d"])("div",W,[z,Object(o["g"])("form",D,[H,Object(o["g"])("div",q,[Object(o["g"])(l,{to:"/"},{default:C(()=>[R]),_:1}),Object(o["g"])("button",{type:"submit",onClick:t[2]||(t[2]=(...e)=>c.TrySignUp&&c.TrySignUp(...e)),class:"item__button"},"Enter")])])]))])});var G=a("bc3a"),V=a.n(G),J={name:"admin",data(){return{errorMsg:"",successMsg:"",food_info:[{id:0,brand:"МакДональдс",image:"https://i1.wp.com/4ao3uo2687rn3u1b6w2vblpy-wpengine.netdna-ssl.com/wp-content/uploads/2019/02/15735694_web1_190125-WLT-FoodGuide.jpg",food_name:"Сет № 1",category:"Японская кухня",price:3500.99,description:"ЕдаВ"},{id:1,brand:"МакДональдс",image:"https://i1.wp.com/4ao3uo2687rn3u1b6w2vblpy-wpengine.netdna-ssl.com/wp-content/uploads/2019/02/15735694_web1_190125-WLT-FoodGuide.jpg",food_name:"Сет № 1",category:"Японская кухня",price:3500.99,description:"Едаб"},{id:2,brand:"МакДональдс",image:"https://i1.wp.com/4ao3uo2687rn3u1b6w2vblpy-wpengine.netdna-ssl.com/wp-content/uploads/2019/02/15735694_web1_190125-WLT-FoodGuide.jpg",food_name:"Сет № 1",category:"Японская кухня",price:3500.99,description:"ЕдаА"}],isAutorized:!1,filter:""}},computed:{filtered_food_info:function(){var e=this.filter.toLowerCase();return this.food_info.filter(t=>t.food_name.toLowerCase().includes(e)||t.brand.toLowerCase().includes(e)||t.description.toLowerCase().includes(e)||t.category.toLowerCase().includes(e))}},mounted:function(){},methods:{editRow(e){console.log(e);var t=document.getElementById("1"+e).value,a=document.getElementById("2"+e).value,o=document.getElementById("3"+e).value,n=document.getElementById("4"+e).value,r=document.getElementById("5"+e).value,c=document.getElementById("6"+e).value;this.food_info[e]={id:id,food_name:t,description:a,category:o,price:n,brand:r,image:c}},TrySignUp:function(){var e=document.getElementById("admin_login").value;let t=document.getElementById("admin_password").value,a={login:""+e,password:""+t},o=this;V.a.get("http://localhost/afanasyev-project-php/admin_signup.php",{params:a}).then((function(e){console.log(e),e.data.session&&(o.isAutorized=e.data.session,o.getTableData()),console.log(o.isAutorized)}))},getTableData(){let e=this;V.a.get("http://localhost/afanasyev-project-php/admin_actions.php?action=read").then((function(t){t.data.error?this.errorMsg=t.data.message:e.food_info=t.data.food_info}))}}};a("d40c");J.render=U,J.__scopeId="data-v-78639f9c";var N=J;const Y=[{path:"/",name:"Home",component:k},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/admin",name:"admin",component:N}],K=Object(u["a"])({history:Object(u["b"])(),routes:Y});var Q=K,X=a("5502"),Z=Object(X["a"])({state:{},mutations:{},actions:{},modules:{}});Object(o["c"])(s).use(Z).use(Q).mount("#app"),Q.onError(e=>{const t=/Loading chunk (\d)+ failed/g,a=e.message.match(t),o=Q.history.pending.fullPath;a&&Q.replace(o)})},"654b":function(e,t,a){},"6bb8":function(e,t,a){},"7e13":function(e,t,a){"use strict";a("6bb8")},"95a2":function(e,t,a){"use strict";a("654b")},cf05:function(e,t,a){e.exports=a.p+"img/logo.82b9c7a5.png"},d40c:function(e,t,a){"use strict";a("185f")}});
//# sourceMappingURL=app.a411b71d.js.map