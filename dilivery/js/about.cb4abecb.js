(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"1a0b":function(e,t,n){"use strict";n("90f1")},"90f1":function(e,t,n){},f820:function(e,t,n){"use strict";n.r(t);var o=n("7a23");const i=Object(o["G"])("data-v-3a8b2b68");Object(o["t"])("data-v-3a8b2b68");const s=Object(o["h"])("div",{id:"modal_window__signUp"},null,-1),l={class:"check"},c=Object(o["h"])("h1",null,"Sign Up",-1),a=Object(o["h"])("h1",null,"First time? - Register",-1),u=Object(o["h"])("input",{id:"tn1",min:"1000000",type:"number",placeholder:"Telepthone Number",required:""},null,-1),r=Object(o["h"])("input",{type:"password",placeholder:"Password",minlength:"6",id:"pc1",required:""},null,-1),d=Object(o["h"])("input",{type:"password",minlength:"6",placeholder:"Confirm Password",id:"pc2",required:""},null,-1);Object(o["r"])();const p=i((e,t,n,i,p,b)=>(Object(o["q"])(),Object(o["d"])(o["a"],null,[s,Object(o["h"])("div",l,[Object(o["h"])("div",null,[c,Object(o["h"])("form",{onSubmit:t[4]||(t[4]=Object(o["F"])((...t)=>e.onSubmit&&e.onSubmit(...t),["prevent"])),class:"check__form",action:""},[Object(o["E"])(Object(o["h"])("input",{id:"tn_input_signUp",type:"number",placeholder:"Telepthone Number","onUpdate:modelValue":t[1]||(t[1]=e=>p.tel_num=e),min:"1000000",required:""},null,512),[[o["B"],p.tel_num]]),Object(o["E"])(Object(o["h"])("input",{type:"password",placeholder:"Password","onUpdate:modelValue":t[2]||(t[2]=e=>p.pass=e),minlength:"6",id:"",required:""},null,512),[[o["B"],p.pass]]),Object(o["h"])("button",{onClick:t[3]||(t[3]=t=>e.SignUp()),type:"submit"},"Submit")],32)]),Object(o["h"])("div",null,[a,Object(o["h"])("form",{onSubmit:t[6]||(t[6]=Object(o["F"])((...t)=>e.onSubmit&&e.onSubmit(...t),["prevent"])),class:"check__form",action:""},[u,r,d,Object(o["h"])("button",{type:"submit",onClick:t[5]||(t[5]=e=>b.Register())},"Submit")],32)])])],64)));var b={data(){return{pass:"",tel_num:""}},methods:{Register(){var e=document.getElementById("tn1").value,t=document.getElementById("pc1").value,n=document.getElementById("pc2").value;if(!(""===e||e.length<=6||""===t.length||t.length<6))if(t==n){var o={tel:e,pass:t};axios.get("http://localhost/afanasyev-project-php/user_register.php",{params:o}).then((function(e){console.log(e.data.error)})),this.$store.commit("sign"),document.getElementById("signUpBu").innerHTML="Exit",this.showModal(!0,"Success!")}else this.showModal(!1,"Different passwords!")},showModal(e,t){var n=document.getElementById("modal_window__signUp");n.innerHTML=t,n.style.backgroundColor=e?"#00cc99":"#ff3300",n.classList.add("show"),setTimeout((function(){n.classList.remove("show")}),3e3)}}};n("1a0b");b.render=p,b.__scopeId="data-v-3a8b2b68";t["default"]=b}}]);
//# sourceMappingURL=about.cb4abecb.js.map