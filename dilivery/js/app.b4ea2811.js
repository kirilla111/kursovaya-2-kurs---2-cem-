(function(e){function t(t){for(var o,r,c=t[0],d=t[1],i=t[2],s=0,p=[];s<c.length;s++)r=c[s],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&p.push(n[r][0]),n[r]=0;for(o in d)Object.prototype.hasOwnProperty.call(d,o)&&(e[o]=d[o]);u&&u(t);while(p.length)p.shift()();return l.push.apply(l,i||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a=l[t],o=!0,r=1;r<a.length;r++){var d=a[r];0!==n[d]&&(o=!1)}o&&(l.splice(t--,1),e=c(c.s=a[0]))}return e}var o={},n={app:0},l=[];function r(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"c8f68a9c"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a=n[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,o){a=n[e]=[t,o]}));t.push(a[2]=o);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=r(e);var i=new Error;l=function(t){d.onerror=d.onload=null,clearTimeout(s);var a=n[e];if(0!==a){if(a){var o=t&&("load"===t.type?"missing":t.type),l=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+o+": "+l+")",i.name="ChunkLoadError",i.type=o,i.request=l,a[1](i)}n[e]=void 0}};var s=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(a,o,function(t){return e[t]}.bind(null,o));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/dist/",c.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],i=d.push.bind(d);d.push=t,d=d.slice();for(var s=0;s<d.length;s++)t(d[s]);var u=i;l.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);var o=a("7a23");const n={id:"nav"},l=Object(o["f"])("Home"),r=Object(o["f"])(" | "),c=Object(o["f"])("About");function d(e,t){const a=Object(o["w"])("router-link"),d=Object(o["w"])("router-view");return Object(o["p"])(),Object(o["d"])(o["a"],null,[Object(o["g"])("div",n,[Object(o["g"])(a,{to:"/"},{default:Object(o["C"])(()=>[l]),_:1}),r,Object(o["g"])(a,{to:"/about"},{default:Object(o["C"])(()=>[c]),_:1})]),Object(o["g"])(d)],64)}a("7e13");const i={};i.render=d;var s=i,u=a("6c02"),p=a("cf05"),b=a.n(p);const f={class:"home"},v=Object(o["g"])("img",{alt:"Vue logo",src:b.a},null,-1);function g(e,t,a,n,l,r){const c=Object(o["w"])("HelloWorld");return Object(o["p"])(),Object(o["d"])("div",f,[v,Object(o["g"])(c,{msg:"Welcome to Your Vue.js App"})])}const h=Object(o["E"])("data-v-df2aa6b2");Object(o["s"])("data-v-df2aa6b2");const m={class:"hello"},_=Object(o["e"])('<p data-v-df2aa6b2> For a guide and recipes on how to configure / customize this project,<br data-v-df2aa6b2> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-df2aa6b2>vue-cli documentation</a>. </p><h3 data-v-df2aa6b2>Installed CLI Plugins</h3><ul data-v-df2aa6b2><li data-v-df2aa6b2><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-df2aa6b2>router</a></li><li data-v-df2aa6b2><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener" data-v-df2aa6b2>vuex</a></li></ul><h3 data-v-df2aa6b2>Essential Links</h3><ul data-v-df2aa6b2><li data-v-df2aa6b2><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-df2aa6b2>Core Docs</a></li><li data-v-df2aa6b2><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-df2aa6b2>Forum</a></li><li data-v-df2aa6b2><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-df2aa6b2>Community Chat</a></li><li data-v-df2aa6b2><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-df2aa6b2>Twitter</a></li><li data-v-df2aa6b2><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-df2aa6b2>News</a></li></ul><h3 data-v-df2aa6b2>Ecosystem</h3><ul data-v-df2aa6b2><li data-v-df2aa6b2><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-df2aa6b2>vue-router</a></li><li data-v-df2aa6b2><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-df2aa6b2>vuex</a></li><li data-v-df2aa6b2><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-df2aa6b2>vue-devtools</a></li><li data-v-df2aa6b2><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-df2aa6b2>vue-loader</a></li><li data-v-df2aa6b2><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-df2aa6b2>awesome-vue</a></li></ul>',7);Object(o["q"])();const j=h((e,t,a,n,l,r)=>(Object(o["p"])(),Object(o["d"])("div",m,[Object(o["g"])("h1",null,Object(o["y"])(a.msg),1),_])));var O={name:"HelloWorld",props:{msg:String}};a("95a2");O.render=j,O.__scopeId="data-v-df2aa6b2";var w=O,y={name:"Home",components:{HelloWorld:w}};y.render=g;var k=y;const C=Object(o["E"])("data-v-a85278ce");Object(o["s"])("data-v-a85278ce");const E={class:"main"},U=Object(o["g"])("h1",{class:"form__title"},"Administrator page",-1),A=Object(o["g"])("div",{class:"modal",id:"modal_window"},null,-1),V={key:0,class:"info"},L={class:"info__actions"},M={class:"info__grid"},I=Object(o["e"])('<div class="grid__head" data-v-a85278ce><p class="head__cell corner-left" data-v-a85278ce>№</p><p class="head__cell" data-v-a85278ce>Name</p><p class="head__cell" data-v-a85278ce>Descripton</p><p class="head__cell" data-v-a85278ce>Category</p><p class="head__cell" data-v-a85278ce>Price</p><p class="head__cell" data-v-a85278ce>Company</p><p class="head__cell" data-v-a85278ce>Image URL</p><p class="head__cell green" data-v-a85278ce>Edit</p><p class="head__cell corner-right red" data-v-a85278ce>Remove</p></div>',1),D={class:"row__cell green"},T={class:"row__cell red"},x={key:1,class:"main__container"},P=Object(o["g"])("p",{class:"container__options"}," If you are not the administrator of our site, please leave this page ",-1),S={class:"container__form"},R=Object(o["e"])('<div class="form__item" data-v-a85278ce><label class="item__label" data-v-a85278ce> Login: </label><input id="admin_login" class="item__input" type="text" placeholder="" required data-v-a85278ce></div><div class="form__item" data-v-a85278ce><label class="item__label" data-v-a85278ce> Password: </label><input id="admin_password" class="item__input" type="password" placeholder="" required data-v-a85278ce></div>',2),B={class:"form__item row"},H=Object(o["g"])("button",{class:"item__button"},"Return",-1);Object(o["q"])();const q=C((e,t,a,n,l,r)=>{const c=Object(o["w"])("router-link");return Object(o["p"])(),Object(o["d"])("div",E,[U,A,l.isAutorized?(Object(o["p"])(),Object(o["d"])("div",V,[Object(o["g"])("div",L,[Object(o["D"])(Object(o["g"])("input",{class:"actions__search",placeholder:"Search..",type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>l.filter=e)},null,512),[[o["A"],l.filter]]),Object(o["g"])("button",{onClick:t[2]||(t[2]=(...e)=>r.addNewRow&&r.addNewRow(...e)),class:"actions__button"},"Add"),Object(o["g"])("button",{onClick:t[3]||(t[3]=(...e)=>r.saveChanges&&r.saveChanges(...e)),class:"actions__button green"},"Save"),Object(o["g"])("button",{onClick:t[4]||(t[4]=(...e)=>r.cancelChanges&&r.cancelChanges(...e)),class:"actions__button red"},"Cancel")]),Object(o["g"])("div",M,[I,(Object(o["p"])(!0),Object(o["d"])(o["a"],null,Object(o["v"])(r.filtered_food_info,(e,t)=>(Object(o["p"])(),Object(o["d"])("div",{class:"grid__row",key:t},[Object(o["D"])(Object(o["g"])("input",{disabled:"",id:"0"+t,class:"row__cell","onUpdate:modelValue":t=>e.id=t},null,8,["id","onUpdate:modelValue"]),[[o["A"],e.id]]),Object(o["D"])(Object(o["g"])("input",{id:"1"+t,class:"row__cell","onUpdate:modelValue":t=>e.food_name=t},null,8,["id","onUpdate:modelValue"]),[[o["A"],e.food_name]]),Object(o["D"])(Object(o["g"])("input",{id:"2"+t,class:"row__cell","onUpdate:modelValue":t=>e.description=t},null,8,["id","onUpdate:modelValue"]),[[o["A"],e.description]]),Object(o["D"])(Object(o["g"])("input",{id:"3"+t,class:"row__cell","onUpdate:modelValue":t=>e.category=t},null,8,["id","onUpdate:modelValue"]),[[o["A"],e.category]]),Object(o["D"])(Object(o["g"])("input",{id:"4"+t,class:"row__cell",min:"0,00",type:"number",step:"0.01","onUpdate:modelValue":t=>e.price=t},null,8,["id","onUpdate:modelValue"]),[[o["A"],e.price]]),Object(o["D"])(Object(o["g"])("input",{id:"5"+t,class:"row__cell","onUpdate:modelValue":t=>e.brand=t},null,8,["id","onUpdate:modelValue"]),[[o["A"],e.brand]]),Object(o["D"])(Object(o["g"])("input",{id:"6"+t,class:"row__cell","onUpdate:modelValue":t=>e.image=t},null,8,["id","onUpdate:modelValue"]),[[o["A"],e.image]]),Object(o["g"])("div",D,[Object(o["g"])("img",{src:"https://i.stack.imgur.com/F2zuF.png",height:"30",alt:"Edit",onClick:e=>r.editRow(t)},null,8,["onClick"])]),Object(o["g"])("div",T,[Object(o["g"])("img",{src:"http://cdn.onlinewebfonts.com/svg/download_216356.png",height:"32",alt:"Delete",onClick:e=>r.deleteRow(t)},null,8,["onClick"])])]))),128))])])):(Object(o["p"])(),Object(o["d"])("div",x,[P,Object(o["g"])("form",S,[R,Object(o["g"])("div",B,[Object(o["g"])(c,{to:"/"},{default:C(()=>[H]),_:1}),Object(o["g"])("button",{type:"submit",onClick:t[5]||(t[5]=(...e)=>r.TrySignUp&&r.TrySignUp(...e)),class:"item__button"}," Enter ")])])]))])});var z=a("bc3a"),N=a.n(z),F={name:"admin",data(){return{errorMsg:"",successMsg:"",food_info:[],isAutorized:!1,filter:""}},computed:{filtered_food_info:function(){var e=this.filter.toLowerCase();return this.food_info.filter(t=>t.food_name.toLowerCase().includes(e)||t.brand.toLowerCase().includes(e)||t.description.toLowerCase().includes(e)||t.category.toLowerCase().includes(e))}},mounted:function(){},methods:{editRow(e){console.log(e);var t=document.getElementById("1"+e).value,a=document.getElementById("2"+e).value,o=document.getElementById("3"+e).value,n=document.getElementById("4"+e).value,l=document.getElementById("5"+e).value,r=document.getElementById("6"+e).value;this.food_info[e]={id:this.food_info[e].id,food_name:t,description:a,category:o,price:n,brand:l,image:r},this.showModal(!0)},cancelChanges(){this.getTableData()},saveChanges(){var e=confirm("Are You sure?");e&&this.showModal(!0)},deleteRow(e){this.$delete(this.food_info,e),this.showModal(!0)},addNewRow(){this.food_info.push={id:this.food_info[this.food_info.length-1].id+1,food_name:"",description:"",category:"",price:"",brand:"",image:""},console.log(this.food_info),console.log(this.food_info[this.food_info-1])},showModal(e){var t=document.getElementById("modal_window");e?(t.style.backgroundColor="#00cc99",t.innerHTML="Success!"):(t.style.backgroundColor="#ff3300",t.innerHTML="Error!"),t.classList.add("show"),setTimeout((function(){t.classList.remove("show")}),2e3)},TrySignUp:function(){var e=document.getElementById("admin_login").value;let t=document.getElementById("admin_password").value;if(""==e||""==t)return void this.showModal(!1);let a=this,o={login:""+e,password:""+t};N.a.get("http://localhost/afanasyev-project-php/admin_signup.php",{params:o}).then((function(e){e.data.session?(a.showModal(!0),a.isAutorized=e.data.session,a.getTableData()):a.showModal(!1)}))},getTableData(){let e=this;N.a.get("http://localhost/afanasyev-project-php/admin_actions.php?action=read").then((function(t){t.data.error?this.errorMsg=t.data.message:e.food_info=t.data.food_info}))}}};a("9b29");F.render=q,F.__scopeId="data-v-a85278ce";var W=F;const J=[{path:"/",name:"Home",component:k},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/admin",name:"admin",component:W}],Y=Object(u["a"])({history:Object(u["b"])(),routes:J});var $=Y,G=a("5502"),K=Object(G["a"])({state:{},mutations:{},actions:{},modules:{}});Object(o["c"])(s).use(K).use($).mount("#app"),$.onError(e=>{const t=/Loading chunk (\d)+ failed/g,a=e.message.match(t),o=$.history.pending.fullPath;a&&$.replace(o)})},"654b":function(e,t,a){},"6bb8":function(e,t,a){},"7e13":function(e,t,a){"use strict";a("6bb8")},"95a2":function(e,t,a){"use strict";a("654b")},"9b29":function(e,t,a){"use strict";a("f6ae")},cf05:function(e,t,a){e.exports=a.p+"img/logo.82b9c7a5.png"},f6ae:function(e,t,a){}});
//# sourceMappingURL=app.b4ea2811.js.map