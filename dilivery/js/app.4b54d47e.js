(function(e){function t(t){for(var o,d,c=t[0],r=t[1],i=t[2],s=0,p=[];s<c.length;s++)d=c[s],Object.prototype.hasOwnProperty.call(n,d)&&n[d]&&p.push(n[d][0]),n[d]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);u&&u(t);while(p.length)p.shift()();return l.push.apply(l,i||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a=l[t],o=!0,d=1;d<a.length;d++){var r=a[d];0!==n[r]&&(o=!1)}o&&(l.splice(t--,1),e=c(c.s=a[0]))}return e}var o={},n={app:0},l=[];function d(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"c8f68a9c"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a=n[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,o){a=n[e]=[t,o]}));t.push(a[2]=o);var l,r=document.createElement("script");r.charset="utf-8",r.timeout=120,c.nc&&r.setAttribute("nonce",c.nc),r.src=d(e);var i=new Error;l=function(t){r.onerror=r.onload=null,clearTimeout(s);var a=n[e];if(0!==a){if(a){var o=t&&("load"===t.type?"missing":t.type),l=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+o+": "+l+")",i.name="ChunkLoadError",i.type=o,i.request=l,a[1](i)}n[e]=void 0}};var s=setTimeout((function(){l({type:"timeout",target:r})}),12e4);r.onerror=r.onload=l,document.head.appendChild(r)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(a,o,function(t){return e[t]}.bind(null,o));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/dilivery/",c.oe=function(e){throw console.error(e),e};var r=window["webpackJsonp"]=window["webpackJsonp"]||[],i=r.push.bind(r);r.push=t,r=r.slice();for(var s=0;s<r.length;s++)t(r[s]);var u=i;l.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0a60":function(e,t,a){"use strict";a("dc65")},"56d7":function(e,t,a){"use strict";a.r(t);var o=a("7a23");const n={id:"nav"},l=Object(o["f"])("Home"),d=Object(o["f"])(" | "),c=Object(o["f"])("About");function r(e,t){const a=Object(o["w"])("router-link"),r=Object(o["w"])("router-view");return Object(o["p"])(),Object(o["d"])(o["a"],null,[Object(o["g"])("div",n,[Object(o["g"])(a,{to:"/"},{default:Object(o["C"])(()=>[l]),_:1}),d,Object(o["g"])(a,{to:"/about"},{default:Object(o["C"])(()=>[c]),_:1})]),Object(o["g"])(r)],64)}a("0a60");const i={};i.render=r;var s=i,u=a("6c02"),p=a("cf05"),b=a.n(p);const f={class:"home"},v=Object(o["g"])("img",{alt:"Vue logo",src:b.a},null,-1);function g(e,t,a,n,l,d){const c=Object(o["w"])("HelloWorld");return Object(o["p"])(),Object(o["d"])("div",f,[v,Object(o["g"])(c,{msg:"Welcome to Your Vue.js App"})])}const h=Object(o["E"])("data-v-df2aa6b2");Object(o["s"])("data-v-df2aa6b2");const m={class:"hello"},_=Object(o["e"])('<p data-v-df2aa6b2> For a guide and recipes on how to configure / customize this project,<br data-v-df2aa6b2> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-df2aa6b2>vue-cli documentation</a>. </p><h3 data-v-df2aa6b2>Installed CLI Plugins</h3><ul data-v-df2aa6b2><li data-v-df2aa6b2><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-df2aa6b2>router</a></li><li data-v-df2aa6b2><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener" data-v-df2aa6b2>vuex</a></li></ul><h3 data-v-df2aa6b2>Essential Links</h3><ul data-v-df2aa6b2><li data-v-df2aa6b2><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-df2aa6b2>Core Docs</a></li><li data-v-df2aa6b2><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-df2aa6b2>Forum</a></li><li data-v-df2aa6b2><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-df2aa6b2>Community Chat</a></li><li data-v-df2aa6b2><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-df2aa6b2>Twitter</a></li><li data-v-df2aa6b2><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-df2aa6b2>News</a></li></ul><h3 data-v-df2aa6b2>Ecosystem</h3><ul data-v-df2aa6b2><li data-v-df2aa6b2><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-df2aa6b2>vue-router</a></li><li data-v-df2aa6b2><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-df2aa6b2>vuex</a></li><li data-v-df2aa6b2><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-df2aa6b2>vue-devtools</a></li><li data-v-df2aa6b2><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-df2aa6b2>vue-loader</a></li><li data-v-df2aa6b2><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-df2aa6b2>awesome-vue</a></li></ul>',7);Object(o["q"])();const j=h((e,t,a,n,l,d)=>(Object(o["p"])(),Object(o["d"])("div",m,[Object(o["g"])("h1",null,Object(o["y"])(a.msg),1),_])));var O={name:"HelloWorld",props:{msg:String}};a("95a2");O.render=j,O.__scopeId="data-v-df2aa6b2";var w=O,y={name:"Home",components:{HelloWorld:w}};y.render=g;var k=y;const C=Object(o["E"])("data-v-1e6c121c");Object(o["s"])("data-v-1e6c121c");const E={class:"main"},U=Object(o["g"])("h1",{class:"form__title"},"Administrator page",-1),I=Object(o["g"])("div",{class:"modal",id:"modal_window"},null,-1),A={key:0,class:"info"},V={class:"info__actions"},x={style:{padding:"10px","text-align":"right"}},D={class:"info__grid"},M=Object(o["e"])('<div class="grid__head" data-v-1e6c121c><p class="head__cell corner-left" data-v-1e6c121c>Id</p><p class="head__cell" data-v-1e6c121c>Name</p><p class="head__cell" data-v-1e6c121c>Descripton</p><p class="head__cell" data-v-1e6c121c>Category</p><p class="head__cell" data-v-1e6c121c>Price</p><p class="head__cell" data-v-1e6c121c>Company</p><p class="head__cell" data-v-1e6c121c>Image URL</p><p class="head__cell green" data-v-1e6c121c>Edit</p><p class="head__cell corner-right red" data-v-1e6c121c>Remove</p></div>',1),L={class:"row__cell green"},T={class:"row__cell red"},P={key:1,class:"main__container"},S=Object(o["g"])("p",{class:"container__options"}," If you are not the administrator of our site, please leave this page ",-1),B={class:"container__form"},R=Object(o["e"])('<div class="form__item" data-v-1e6c121c><label class="item__label" data-v-1e6c121c> Login: </label><input id="admin_login" class="item__input" type="text" placeholder="" required data-v-1e6c121c></div><div class="form__item" data-v-1e6c121c><label class="item__label" data-v-1e6c121c> Password: </label><input id="admin_password" class="item__input" type="password" placeholder="" required data-v-1e6c121c></div>',2),H={class:"form__item row"},q=Object(o["g"])("button",{class:"item__button"},"Return",-1);Object(o["q"])();const z=C((e,t,a,n,l,d)=>{const c=Object(o["w"])("router-link");return Object(o["p"])(),Object(o["d"])("div",E,[U,I,l.isAutorized?(Object(o["p"])(),Object(o["d"])("div",A,[Object(o["g"])("div",V,[Object(o["D"])(Object(o["g"])("input",{class:"actions__search",placeholder:"Search..",type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>l.filter=e)},null,512),[[o["A"],l.filter]]),Object(o["g"])("button",{onClick:t[2]||(t[2]=(...e)=>d.addNewRow&&d.addNewRow(...e)),class:"actions__button"},"Add"),Object(o["g"])("button",{onClick:t[3]||(t[3]=(...e)=>d.saveChanges&&d.saveChanges(...e)),class:"actions__button green"},"Save"),Object(o["g"])("button",{onClick:t[4]||(t[4]=(...e)=>d.cancelChanges&&d.cancelChanges(...e)),class:"actions__button red"}," Cancel "),Object(o["g"])("div",x," Total: "+Object(o["y"])(d.filtered_food_info.length),1)]),Object(o["g"])("div",D,[M,(Object(o["p"])(!0),Object(o["d"])(o["a"],null,Object(o["v"])(d.filtered_food_info,(e,t)=>(Object(o["p"])(),Object(o["d"])("div",{class:["grid__row",{gray:t%2==0}],key:t},[Object(o["D"])(Object(o["g"])("input",{disabled:"",id:"0"+t,class:"row__cell","onUpdate:modelValue":t=>e.id=t},null,8,["id","onUpdate:modelValue"]),[[o["A"],e.id]]),Object(o["D"])(Object(o["g"])("input",{id:"1"+t,class:"row__cell","onUpdate:modelValue":t=>e.food_name=t},null,8,["id","onUpdate:modelValue"]),[[o["A"],e.food_name]]),Object(o["D"])(Object(o["g"])("input",{id:"2"+t,class:"row__cell","onUpdate:modelValue":t=>e.description=t},null,8,["id","onUpdate:modelValue"]),[[o["A"],e.description]]),Object(o["D"])(Object(o["g"])("input",{id:"3"+t,class:"row__cell","onUpdate:modelValue":t=>e.category=t},null,8,["id","onUpdate:modelValue"]),[[o["A"],e.category]]),Object(o["D"])(Object(o["g"])("input",{id:"4"+t,class:"row__cell",min:"0.00",type:"number",step:"0.01","onUpdate:modelValue":t=>e.price=t},null,8,["id","onUpdate:modelValue"]),[[o["A"],e.price]]),Object(o["D"])(Object(o["g"])("input",{id:"5"+t,class:"row__cell","onUpdate:modelValue":t=>e.brand=t},null,8,["id","onUpdate:modelValue"]),[[o["A"],e.brand]]),Object(o["D"])(Object(o["g"])("input",{id:"6"+t,class:"row__cell","onUpdate:modelValue":t=>e.image=t},null,8,["id","onUpdate:modelValue"]),[[o["A"],e.image]]),Object(o["g"])("div",L,[Object(o["g"])("img",{src:"https://i.stack.imgur.com/F2zuF.png",height:"30",alt:"Edit",onClick:e=>d.editRow(t)},null,8,["onClick"])]),Object(o["g"])("div",T,[Object(o["g"])("img",{src:"http://cdn.onlinewebfonts.com/svg/download_216356.png",height:"32",alt:"Delete",onClick:e=>d.deleteRow(t)},null,8,["onClick"])])],2))),128))])])):(Object(o["p"])(),Object(o["d"])("div",P,[S,Object(o["g"])("form",B,[R,Object(o["g"])("div",H,[Object(o["g"])(c,{to:"/"},{default:C(()=>[q]),_:1}),Object(o["g"])("button",{type:"submit",onClick:t[5]||(t[5]=(...e)=>d.TrySignUp&&d.TrySignUp(...e)),class:"item__button"}," Enter ")])])]))])});var N=a("bc3a"),W=a.n(N),F={name:"admin",data(){return{errorMsg:"",successMsg:"",food_info:[],isAutorized:!1,filter:""}},computed:{filtered_food_info:function(){var e=this.filter.toLowerCase();return this.food_info.filter(t=>(t.food_name.toLowerCase().includes(e)||t.brand.toLowerCase().includes(e)||t.description.toLowerCase().includes(e)||t.category.toLowerCase().includes(e))&&"3"!=t.updated)}},mounted:function(){},methods:{findIndex(e){var t=0;this.food_info.forEach(a=>{if(e===a.id)return t;t++})},editRow(e){console.log(e);var t,a=document.getElementById("0"+e).value,o=document.getElementById("1"+e).value,n=document.getElementById("2"+e).value,l=document.getElementById("3"+e).value,d=document.getElementById("4"+e).value,c=document.getElementById("5"+e).value,r=document.getElementById("6"+e).value;console.log(a);var i=0;this.food_info.forEach(o=>{o.id===a&&(t=o,e=i),i++}),console.log(t),"0"===t.updated&&(t.updated="1"),"2"===t.updated&&(t.updated="2"),t.food_name=o,t.description=n,t.category=l,t.price=d,t.brand=c,t.image=r,this.food_info[e].food_name=o,this.showModal(!0,"Successfully!")},cancelChanges(){this.getTableData()},saveChanges(){var e=confirm("Are You sure?"),t={table:this.food_info};console.log({params:t});let a=this;e&&W.a.get("http://localhost/afanasyev-project-php/admin_actions.php?action=write",{params:t}).then((function(e){console.log(e.data);var t=e.data.errors,o=e.data.updates;t>0?a.showModal(!1,`Errors: ${t}, Updates ${o}`):a.showModal(!0,`Errors: ${t}, Updates ${o}`),a.getTableData()}))},deleteRow(e){this.filtered_food_info[e].updated="3",this.showModal(!0,"Deleted!")},addNewRow(){this.food_info[this.food_info.length]={id:""+(parseInt(this.food_info[this.food_info.length-1].id)+1),food_name:"",description:"",category:"",price:"",brand:"",image:"",updated:"2"}},showModal(e,t){var a=document.getElementById("modal_window");a.innerHTML=t,a.style.backgroundColor=e?"#00cc99":"#ff3300",a.classList.add("show"),setTimeout((function(){a.classList.remove("show")}),2e3)},TrySignUp:function(){var e=document.getElementById("admin_login").value;let t=document.getElementById("admin_password").value;if(""==e||""==t)return void this.showModal(!1,"Error!");let a=this,o={login:""+e,password:""+t};W.a.get("http://localhost/afanasyev-project-php/admin_signup.php",{params:o}).then((function(e){e.data.session?(a.isAutorized=e.data.session,a.getTableData(),a.showModal(!0,"Welcome!")):a.showModal(!1,"Error!")}))},getTableData(){let e=this;W.a.get("http://localhost/afanasyev-project-php/admin_actions.php?action=read").then((function(t){t.data.error?this.errorMsg=t.data.message:e.food_info=t.data.food_info}))}}};a("7b79");F.render=z,F.__scopeId="data-v-1e6c121c";var $=F;const J=[{path:"/",name:"Home",component:k},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/admin",name:"admin",component:$}],Y=Object(u["a"])({history:Object(u["b"])(),routes:J});var G=Y,K=a("5502"),Q=Object(K["a"])({state:{},mutations:{},actions:{},modules:{}});Object(o["c"])(s).use(Q).use(G).mount("#app"),G.onError(e=>{const t=/Loading chunk (\d)+ failed/g,a=e.message.match(t),o=G.history.pending.fullPath;a&&G.replace(o)})},"654b":function(e,t,a){},"7b79":function(e,t,a){"use strict";a("83a4")},"83a4":function(e,t,a){},"95a2":function(e,t,a){"use strict";a("654b")},cf05:function(e,t,a){e.exports=a.p+"img/logo.82b9c7a5.png"},dc65:function(e,t,a){}});
//# sourceMappingURL=app.4b54d47e.js.map