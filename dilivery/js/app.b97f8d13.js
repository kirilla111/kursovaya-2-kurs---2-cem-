(function(e){function t(t){for(var o,r,d=t[0],i=t[1],c=t[2],s=0,f=[];s<d.length;s++)r=d[s],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&f.push(n[r][0]),n[r]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);u&&u(t);while(f.length)f.shift()();return l.push.apply(l,c||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a=l[t],o=!0,r=1;r<a.length;r++){var i=a[r];0!==n[i]&&(o=!1)}o&&(l.splice(t--,1),e=d(d.s=a[0]))}return e}var o={},n={app:0},l=[];function r(e){return d.p+"js/"+({about:"about"}[e]||e)+"."+{about:"c8f68a9c"}[e]+".js"}function d(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,d),a.l=!0,a.exports}d.e=function(e){var t=[],a=n[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,o){a=n[e]=[t,o]}));t.push(a[2]=o);var l,i=document.createElement("script");i.charset="utf-8",i.timeout=120,d.nc&&i.setAttribute("nonce",d.nc),i.src=r(e);var c=new Error;l=function(t){i.onerror=i.onload=null,clearTimeout(s);var a=n[e];if(0!==a){if(a){var o=t&&("load"===t.type?"missing":t.type),l=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+o+": "+l+")",c.name="ChunkLoadError",c.type=o,c.request=l,a[1](c)}n[e]=void 0}};var s=setTimeout((function(){l({type:"timeout",target:i})}),12e4);i.onerror=i.onload=l,document.head.appendChild(i)}return Promise.all(t)},d.m=e,d.c=o,d.d=function(e,t,a){d.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,t){if(1&t&&(e=d(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(d.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)d.d(a,o,function(t){return e[t]}.bind(null,o));return a},d.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(t,"a",t),t},d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},d.p="/dilivery/",d.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var u=c;l.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0a60":function(e,t,a){"use strict";a("dc65")},"56d7":function(e,t,a){"use strict";a.r(t);var o=a("7a23");const n={id:"nav"},l=Object(o["f"])("Home"),r=Object(o["f"])(" | "),d=Object(o["f"])("About");function i(e,t){const a=Object(o["w"])("router-link"),i=Object(o["w"])("router-view");return Object(o["p"])(),Object(o["d"])(o["a"],null,[Object(o["g"])("div",n,[Object(o["g"])(a,{to:"/"},{default:Object(o["C"])(()=>[l]),_:1}),r,Object(o["g"])(a,{to:"/about"},{default:Object(o["C"])(()=>[d]),_:1})]),Object(o["g"])(i)],64)}a("0a60");const c={};c.render=i;var s=c,u=a("6c02"),f=a("cf05"),p=a.n(f);const b={class:"home"},v=Object(o["g"])("img",{alt:"Vue logo",src:p.a},null,-1);function g(e,t,a,n,l,r){const d=Object(o["w"])("HelloWorld");return Object(o["p"])(),Object(o["d"])("div",b,[v,Object(o["g"])(d,{msg:"Welcome to Your Vue.js App"})])}const h=Object(o["E"])("data-v-df2aa6b2");Object(o["s"])("data-v-df2aa6b2");const m={class:"hello"},_=Object(o["e"])('<p data-v-df2aa6b2> For a guide and recipes on how to configure / customize this project,<br data-v-df2aa6b2> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-df2aa6b2>vue-cli documentation</a>. </p><h3 data-v-df2aa6b2>Installed CLI Plugins</h3><ul data-v-df2aa6b2><li data-v-df2aa6b2><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-df2aa6b2>router</a></li><li data-v-df2aa6b2><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener" data-v-df2aa6b2>vuex</a></li></ul><h3 data-v-df2aa6b2>Essential Links</h3><ul data-v-df2aa6b2><li data-v-df2aa6b2><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-df2aa6b2>Core Docs</a></li><li data-v-df2aa6b2><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-df2aa6b2>Forum</a></li><li data-v-df2aa6b2><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-df2aa6b2>Community Chat</a></li><li data-v-df2aa6b2><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-df2aa6b2>Twitter</a></li><li data-v-df2aa6b2><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-df2aa6b2>News</a></li></ul><h3 data-v-df2aa6b2>Ecosystem</h3><ul data-v-df2aa6b2><li data-v-df2aa6b2><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-df2aa6b2>vue-router</a></li><li data-v-df2aa6b2><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-df2aa6b2>vuex</a></li><li data-v-df2aa6b2><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-df2aa6b2>vue-devtools</a></li><li data-v-df2aa6b2><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-df2aa6b2>vue-loader</a></li><li data-v-df2aa6b2><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-df2aa6b2>awesome-vue</a></li></ul>',7);Object(o["q"])();const j=h((e,t,a,n,l,r)=>(Object(o["p"])(),Object(o["d"])("div",m,[Object(o["g"])("h1",null,Object(o["y"])(a.msg),1),_])));var O={name:"HelloWorld",props:{msg:String}};a("95a2");O.render=j,O.__scopeId="data-v-df2aa6b2";var w=O,y={name:"Home",components:{HelloWorld:w}};y.render=g;var k=y;const C=Object(o["E"])("data-v-2f39f030");Object(o["s"])("data-v-2f39f030");const E={class:"main"},I=Object(o["g"])("h1",{class:"form__title"},"Administrator page",-1),L=Object(o["g"])("div",{class:"modal",id:"modal_window"},null,-1),x={key:0,class:"info"},M={class:"info__actions"},T={style:{padding:"10px","text-align":"right"}},P={class:"info__grid"},S=Object(o["e"])('<div class="grid__head" data-v-2f39f030><p class="head__cell corner-left" data-v-2f39f030>Id</p><p class="head__cell" data-v-2f39f030>Name</p><p class="head__cell" data-v-2f39f030>Descripton</p><p class="head__cell" data-v-2f39f030>Category</p><p class="head__cell" data-v-2f39f030>Price</p><p class="head__cell" data-v-2f39f030>Company</p><p class="head__cell" data-v-2f39f030>Image URL</p><p class="head__cell green" data-v-2f39f030>Edit</p><p class="head__cell corner-right red" data-v-2f39f030>Remove</p></div>',1),A={class:"row__cell green"},B={class:"row__cell red"},R={key:1,class:"main__container"},H=Object(o["g"])("p",{class:"container__options"}," If you are not the administrator of our site, please leave this page ",-1),D={class:"container__form"},q=Object(o["e"])('<div class="form__item" data-v-2f39f030><label class="item__label" data-v-2f39f030> Login: </label><input id="admin_login" class="item__input" type="text" placeholder="" required data-v-2f39f030></div><div class="form__item" data-v-2f39f030><label class="item__label" data-v-2f39f030> Password: </label><input id="admin_password" class="item__input" type="password" placeholder="" required data-v-2f39f030></div>',2),z={class:"form__item row"},N=Object(o["g"])("button",{class:"item__button"},"Return",-1);Object(o["q"])();const U=C((e,t,a,n,l,r)=>{const d=Object(o["w"])("router-link");return Object(o["p"])(),Object(o["d"])("div",E,[I,L,l.isAutorized?(Object(o["p"])(),Object(o["d"])("div",x,[Object(o["g"])("div",M,[Object(o["D"])(Object(o["g"])("input",{class:"actions__search",placeholder:"Search..",type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>l.filter=e)},null,512),[[o["A"],l.filter]]),Object(o["g"])("button",{onClick:t[2]||(t[2]=(...e)=>r.addNewRow&&r.addNewRow(...e)),class:"actions__button"},"Add"),Object(o["g"])("button",{onClick:t[3]||(t[3]=(...e)=>r.saveChanges&&r.saveChanges(...e)),class:"actions__button green"},"Save"),Object(o["g"])("button",{onClick:t[4]||(t[4]=(...e)=>r.cancelChanges&&r.cancelChanges(...e)),class:"actions__button red"},"Cancel"),Object(o["g"])("div",T,"Total of records "+Object(o["y"])(r.filtered_food_info.length),1)]),Object(o["g"])("div",P,[S,(Object(o["p"])(!0),Object(o["d"])(o["a"],null,Object(o["v"])(r.filtered_food_info,(e,t)=>(Object(o["p"])(),Object(o["d"])("div",{class:["grid__row",{gray:t%2==0}],key:t},[Object(o["g"])("input",{disabled:"",id:"0"+t,class:"row__cell",value:e.id},null,8,["id","value"]),Object(o["g"])("input",{id:"1"+t,class:"row__cell",value:e.food_name},null,8,["id","value"]),Object(o["g"])("input",{id:"2"+t,class:"row__cell",value:e.description},null,8,["id","value"]),Object(o["g"])("input",{id:"3"+t,class:"row__cell",value:e.category},null,8,["id","value"]),Object(o["g"])("input",{id:"4"+t,class:"row__cell",min:"0,00",type:"number",step:"0.01",value:e.price},null,8,["id","value"]),Object(o["g"])("input",{id:"5"+t,class:"row__cell",value:e.brand},null,8,["id","value"]),Object(o["g"])("input",{id:"6"+t,class:"row__cell",value:e.image},null,8,["id","value"]),Object(o["g"])("div",A,[Object(o["g"])("img",{src:"https://i.stack.imgur.com/F2zuF.png",height:"30",alt:"Edit",onClick:e=>r.editRow(t)},null,8,["onClick"])]),Object(o["g"])("div",B,[Object(o["g"])("img",{src:"http://cdn.onlinewebfonts.com/svg/download_216356.png",height:"32",alt:"Delete",onClick:e=>r.deleteRow(t)},null,8,["onClick"])])],2))),128))])])):(Object(o["p"])(),Object(o["d"])("div",R,[H,Object(o["g"])("form",D,[q,Object(o["g"])("div",z,[Object(o["g"])(d,{to:"/"},{default:C(()=>[N]),_:1}),Object(o["g"])("button",{type:"submit",onClick:t[5]||(t[5]=(...e)=>r.TrySignUp&&r.TrySignUp(...e)),class:"item__button"}," Enter ")])])]))])});var F=a("bc3a"),W=a.n(F),V={name:"admin",data(){return{errorMsg:"",successMsg:"",food_info:[],isAutorized:!1,filter:""}},computed:{filtered_food_info:function(){var e=this.filter.toLowerCase();return this.food_info.filter(t=>(t.food_name.toLowerCase().includes(e)||t.brand.toLowerCase().includes(e)||t.description.toLowerCase().includes(e)||t.category.toLowerCase().includes(e))&&"3"!=t.updated)},findId:function(e){this.food_info.forEach(t=>{if(e===t.id)return t})}},mounted:function(){},methods:{editRow(e){console.log(e);var t=document.getElementById("0"+e).value,a=document.getElementById("1"+e).value,o=document.getElementById("2"+e).value,n=document.getElementById("3"+e).value,l=document.getElementById("4"+e).value,r=document.getElementById("5"+e).value,d=document.getElementById("6"+e).value,i=this.findId(t);console.log(i),"0"===i.updated&&i.updated,"2"===i.updated&&i.updated,i.food_name=a,i.description=o,i.category=n,i.price=l,i.brand=r,i.image=d,this.showModal(!0)},cancelChanges(){this.getTableData()},saveChanges(){var e=confirm("Are You sure?"),t={table:this.food_info,login:"asd"};console.log({params:t}),e&&W.a.get("http://localhost/afanasyev-project-php/admin_actions.php?action=write",{params:t}).then((function(e){console.log(e.config.params)}))},deleteRow(e){this.filtered_food_info[e].updated="3",this.showModal(!0)},addNewRow(){this.food_info[this.food_info.length]={id:parseInt(this.food_info[this.food_info.length-1].id)+1,food_name:"",description:"",category:"",price:"",brand:"",image:"",updated:"2"}},showModal(e){var t=document.getElementById("modal_window");e?(t.style.backgroundColor="#00cc99",t.innerHTML="Success!"):(t.style.backgroundColor="#ff3300",t.innerHTML="Error!"),t.classList.add("show"),setTimeout((function(){t.classList.remove("show")}),2e3)},TrySignUp:function(){var e=document.getElementById("admin_login").value;let t=document.getElementById("admin_password").value;if(""==e||""==t)return void this.showModal(!1);let a=this,o={login:""+e,password:""+t};W.a.get("http://localhost/afanasyev-project-php/admin_signup.php",{params:o}).then((function(e){e.data.session?(a.showModal(!0),a.isAutorized=e.data.session,a.getTableData()):a.showModal(!1)}))},getTableData(){let e=this;W.a.get("http://localhost/afanasyev-project-php/admin_actions.php?action=read").then((function(t){t.data.error?this.errorMsg=t.data.message:e.food_info=t.data.food_info}))}}};a("f26e");V.render=U,V.__scopeId="data-v-2f39f030";var J=V;const Y=[{path:"/",name:"Home",component:k},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/admin",name:"admin",component:J}],G=Object(u["a"])({history:Object(u["b"])(),routes:Y});var K=G,Q=a("5502"),X=Object(Q["a"])({state:{},mutations:{},actions:{},modules:{}});Object(o["c"])(s).use(X).use(K).mount("#app"),K.onError(e=>{const t=/Loading chunk (\d)+ failed/g,a=e.message.match(t),o=K.history.pending.fullPath;a&&K.replace(o)})},"654b":function(e,t,a){},"95a2":function(e,t,a){"use strict";a("654b")},cf05:function(e,t,a){e.exports=a.p+"img/logo.82b9c7a5.png"},dc65:function(e,t,a){},e5f8:function(e,t,a){},f26e:function(e,t,a){"use strict";a("e5f8")}});
//# sourceMappingURL=app.b97f8d13.js.map