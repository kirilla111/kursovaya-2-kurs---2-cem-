(function(e){function t(t){for(var o,r,c=t[0],d=t[1],i=t[2],s=0,f=[];s<c.length;s++)r=c[s],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&f.push(n[r][0]),n[r]=0;for(o in d)Object.prototype.hasOwnProperty.call(d,o)&&(e[o]=d[o]);u&&u(t);while(f.length)f.shift()();return l.push.apply(l,i||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a=l[t],o=!0,r=1;r<a.length;r++){var d=a[r];0!==n[d]&&(o=!1)}o&&(l.splice(t--,1),e=c(c.s=a[0]))}return e}var o={},n={app:0},l=[];function r(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"c8f68a9c"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a=n[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,o){a=n[e]=[t,o]}));t.push(a[2]=o);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=r(e);var i=new Error;l=function(t){d.onerror=d.onload=null,clearTimeout(s);var a=n[e];if(0!==a){if(a){var o=t&&("load"===t.type?"missing":t.type),l=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+o+": "+l+")",i.name="ChunkLoadError",i.type=o,i.request=l,a[1](i)}n[e]=void 0}};var s=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(a,o,function(t){return e[t]}.bind(null,o));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/dilivery/",c.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],i=d.push.bind(d);d.push=t,d=d.slice();for(var s=0;s<d.length;s++)t(d[s]);var u=i;l.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0a60":function(e,t,a){"use strict";a("dc65")},"56d7":function(e,t,a){"use strict";a.r(t);var o=a("7a23");const n={id:"nav"},l=Object(o["f"])("Home"),r=Object(o["f"])(" | "),c=Object(o["f"])("About");function d(e,t){const a=Object(o["w"])("router-link"),d=Object(o["w"])("router-view");return Object(o["p"])(),Object(o["d"])(o["a"],null,[Object(o["g"])("div",n,[Object(o["g"])(a,{to:"/"},{default:Object(o["C"])(()=>[l]),_:1}),r,Object(o["g"])(a,{to:"/about"},{default:Object(o["C"])(()=>[c]),_:1})]),Object(o["g"])(d)],64)}a("0a60");const s={};s.render=d;var u=s,f=a("6c02"),p=a("cf05"),b=a.n(p);const v={class:"home"},g=Object(o["g"])("img",{alt:"Vue logo",src:b.a},null,-1);function h(e,t,a,n,l,r){const c=Object(o["w"])("HelloWorld");return Object(o["p"])(),Object(o["d"])("div",v,[g,Object(o["g"])(c,{msg:"Welcome to Your Vue.js App"})])}const m=Object(o["E"])("data-v-df2aa6b2");Object(o["s"])("data-v-df2aa6b2");const _={class:"hello"},j=Object(o["e"])('<p data-v-df2aa6b2> For a guide and recipes on how to configure / customize this project,<br data-v-df2aa6b2> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-df2aa6b2>vue-cli documentation</a>. </p><h3 data-v-df2aa6b2>Installed CLI Plugins</h3><ul data-v-df2aa6b2><li data-v-df2aa6b2><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-df2aa6b2>router</a></li><li data-v-df2aa6b2><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener" data-v-df2aa6b2>vuex</a></li></ul><h3 data-v-df2aa6b2>Essential Links</h3><ul data-v-df2aa6b2><li data-v-df2aa6b2><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-df2aa6b2>Core Docs</a></li><li data-v-df2aa6b2><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-df2aa6b2>Forum</a></li><li data-v-df2aa6b2><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-df2aa6b2>Community Chat</a></li><li data-v-df2aa6b2><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-df2aa6b2>Twitter</a></li><li data-v-df2aa6b2><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-df2aa6b2>News</a></li></ul><h3 data-v-df2aa6b2>Ecosystem</h3><ul data-v-df2aa6b2><li data-v-df2aa6b2><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-df2aa6b2>vue-router</a></li><li data-v-df2aa6b2><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-df2aa6b2>vuex</a></li><li data-v-df2aa6b2><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-df2aa6b2>vue-devtools</a></li><li data-v-df2aa6b2><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-df2aa6b2>vue-loader</a></li><li data-v-df2aa6b2><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-df2aa6b2>awesome-vue</a></li></ul>',7);Object(o["q"])();const O=m((e,t,a,n,l,r)=>(Object(o["p"])(),Object(o["d"])("div",_,[Object(o["g"])("h1",null,Object(o["y"])(a.msg),1),j])));var w={name:"HelloWorld",props:{msg:String}};a("95a2");w.render=O,w.__scopeId="data-v-df2aa6b2";var y=w,k={name:"Home",components:{HelloWorld:y}};k.render=h;var C=k;const E=Object(o["E"])("data-v-32f64fc2");Object(o["s"])("data-v-32f64fc2");const I={class:"main"},x=Object(o["g"])("h1",{class:"form__title"},"Administrator page",-1),L=Object(o["g"])("div",{class:"modal",id:"modal_window"},null,-1),M={key:0,class:"info"},T={class:"info__actions"},P={style:{padding:"10px","text-align":"right"}},S={class:"info__grid"},A=Object(o["e"])('<div class="grid__head" data-v-32f64fc2><p class="head__cell corner-left" data-v-32f64fc2>Id</p><p class="head__cell" data-v-32f64fc2>Name</p><p class="head__cell" data-v-32f64fc2>Descripton</p><p class="head__cell" data-v-32f64fc2>Category</p><p class="head__cell" data-v-32f64fc2>Price</p><p class="head__cell" data-v-32f64fc2>Company</p><p class="head__cell" data-v-32f64fc2>Image URL</p><p class="head__cell green" data-v-32f64fc2>Edit</p><p class="head__cell corner-right red" data-v-32f64fc2>Remove</p></div>',1),B={class:"row__cell green"},R={class:"row__cell red"},H={key:1,class:"main__container"},D=Object(o["g"])("p",{class:"container__options"}," If you are not the administrator of our site, please leave this page ",-1),q={class:"container__form"},z=Object(o["e"])('<div class="form__item" data-v-32f64fc2><label class="item__label" data-v-32f64fc2> Login: </label><input id="admin_login" class="item__input" type="text" placeholder="" required data-v-32f64fc2></div><div class="form__item" data-v-32f64fc2><label class="item__label" data-v-32f64fc2> Password: </label><input id="admin_password" class="item__input" type="password" placeholder="" required data-v-32f64fc2></div>',2),N={class:"form__item row"},U=Object(o["g"])("button",{class:"item__button"},"Return",-1);Object(o["q"])();const F=E((e,t,a,n,l,r)=>{const c=Object(o["w"])("router-link");return Object(o["p"])(),Object(o["d"])("div",I,[x,L,l.isAutorized?(Object(o["p"])(),Object(o["d"])("div",M,[Object(o["g"])("div",T,[Object(o["D"])(Object(o["g"])("input",{class:"actions__search",placeholder:"Search..",type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>l.filter=e)},null,512),[[o["A"],l.filter]]),Object(o["g"])("button",{onClick:t[2]||(t[2]=(...e)=>r.addNewRow&&r.addNewRow(...e)),class:"actions__button"},"Add"),Object(o["g"])("button",{onClick:t[3]||(t[3]=(...e)=>r.saveChanges&&r.saveChanges(...e)),class:"actions__button green"},"Save"),Object(o["g"])("button",{onClick:t[4]||(t[4]=(...e)=>r.cancelChanges&&r.cancelChanges(...e)),class:"actions__button red"},"Cancel"),Object(o["g"])("div",P,"Total of records "+Object(o["y"])(r.filtered_food_info.length),1)]),Object(o["g"])("div",S,[A,(Object(o["p"])(!0),Object(o["d"])(o["a"],null,Object(o["v"])(r.filtered_food_info,(e,t)=>(Object(o["p"])(),Object(o["d"])("div",{class:["grid__row",{gray:t%2==0}],key:t},[Object(o["g"])("input",{disabled:"",id:"0"+t,class:"row__cell",value:e.id},null,8,["id","value"]),Object(o["g"])("input",{id:"1"+t,class:"row__cell",value:e.food_name},null,8,["id","value"]),Object(o["g"])("input",{id:"2"+t,class:"row__cell",value:e.description},null,8,["id","value"]),Object(o["g"])("input",{id:"3"+t,class:"row__cell",value:e.category},null,8,["id","value"]),Object(o["g"])("input",{id:"4"+t,class:"row__cell",min:"0.00",type:"number",step:"0.01",value:e.price},null,8,["id","value"]),Object(o["g"])("input",{id:"5"+t,class:"row__cell",value:e.brand},null,8,["id","value"]),Object(o["g"])("input",{id:"6"+t,class:"row__cell",value:e.image},null,8,["id","value"]),Object(o["g"])("div",B,[Object(o["g"])("img",{src:"https://i.stack.imgur.com/F2zuF.png",height:"30",alt:"Edit",onClick:e=>r.editRow(t)},null,8,["onClick"])]),Object(o["g"])("div",R,[Object(o["g"])("img",{src:"http://cdn.onlinewebfonts.com/svg/download_216356.png",height:"32",alt:"Delete",onClick:e=>r.deleteRow(t)},null,8,["onClick"])])],2))),128))])])):(Object(o["p"])(),Object(o["d"])("div",H,[D,Object(o["g"])("form",q,[z,Object(o["g"])("div",N,[Object(o["g"])(c,{to:"/"},{default:E(()=>[U]),_:1}),Object(o["g"])("button",{type:"submit",onClick:t[5]||(t[5]=(...e)=>r.TrySignUp&&r.TrySignUp(...e)),class:"item__button"}," Enter ")])])]))])});var W=a("bc3a"),V=a.n(W),J={name:"admin",data(){return{errorMsg:"",successMsg:"",food_info:[],isAutorized:!1,filter:""}},computed:{filtered_food_info:function(){var e=this.filter.toLowerCase();return this.food_info.filter(t=>(t.food_name.toLowerCase().includes(e)||t.brand.toLowerCase().includes(e)||t.description.toLowerCase().includes(e)||t.category.toLowerCase().includes(e))&&"3"!=t.updated)}},mounted:function(){},methods:{findIndex(e){var t=0;this.food_info.forEach(a=>{if(e===a.id)return t;t++})},editRow(e){console.log(e);var t,a=document.getElementById("0"+e).value,o=document.getElementById("1"+e).value,n=document.getElementById("2"+e).value,l=document.getElementById("3"+e).value,r=document.getElementById("4"+e).value,c=document.getElementById("5"+e).value,d=document.getElementById("6"+e).value;console.log(a),i=0,this.food_info.forEach(o=>{o.id===a&&(t=o,e=i),i++}),console.log(t),"0"===t.updated&&(t.updated="1"),"2"===t.updated&&(t.updated="2"),t.food_name=o,t.description=n,t.category=l,t.price=r,t.brand=c,t.image=d,this.food_info[e]=t,this.showModal(!0)},cancelChanges(){this.getTableData()},saveChanges(){var e=confirm("Are You sure?"),t={table:this.food_info,login:"asd"};console.log({params:t});let a=this;e&&V.a.get("http://localhost/afanasyev-project-php/admin_actions.php?action=write",{params:t}).then((function(e){console.log(e.data),console.log(e.data.errors),console.log(e.data.updates),a.forEach(e=>{e.updated="0"})}))},deleteRow(e){this.filtered_food_info[e].updated="3",this.showModal(!0)},addNewRow(){this.food_info[this.food_info.length]={id:""+(parseInt(this.food_info[this.food_info.length-1].id)+1),food_name:"",description:"",category:"",price:"",brand:"",image:"",updated:"2"}},showModal(e){var t=document.getElementById("modal_window");e?(t.style.backgroundColor="#00cc99",t.innerHTML="Success!"):(t.style.backgroundColor="#ff3300",t.innerHTML="Error!"),t.classList.add("show"),setTimeout((function(){t.classList.remove("show")}),2e3)},TrySignUp:function(){var e=document.getElementById("admin_login").value;let t=document.getElementById("admin_password").value;if(""==e||""==t)return void this.showModal(!1);let a=this,o={login:""+e,password:""+t};V.a.get("http://localhost/afanasyev-project-php/admin_signup.php",{params:o}).then((function(e){e.data.session?(a.showModal(!0),a.isAutorized=e.data.session,a.getTableData()):a.showModal(!1)}))},getTableData(){let e=this;V.a.get("http://localhost/afanasyev-project-php/admin_actions.php?action=read").then((function(t){t.data.error?this.errorMsg=t.data.message:e.food_info=t.data.food_info}))}}};a("6592");J.render=F,J.__scopeId="data-v-32f64fc2";var Y=J;const G=[{path:"/",name:"Home",component:C},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/admin",name:"admin",component:Y}],K=Object(f["a"])({history:Object(f["b"])(),routes:G});var Q=K,X=a("5502"),Z=Object(X["a"])({state:{},mutations:{},actions:{},modules:{}});Object(o["c"])(u).use(Z).use(Q).mount("#app"),Q.onError(e=>{const t=/Loading chunk (\d)+ failed/g,a=e.message.match(t),o=Q.history.pending.fullPath;a&&Q.replace(o)})},"654b":function(e,t,a){},6592:function(e,t,a){"use strict";a("6716")},6716:function(e,t,a){},"95a2":function(e,t,a){"use strict";a("654b")},cf05:function(e,t,a){e.exports=a.p+"img/logo.82b9c7a5.png"},dc65:function(e,t,a){}});
//# sourceMappingURL=app.418baee7.js.map