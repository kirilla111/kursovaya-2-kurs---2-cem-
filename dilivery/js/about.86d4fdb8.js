(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"75ca":function(e,t,n){"use strict";n("eed7")},eed7:function(e,t,n){},f820:function(e,t,n){"use strict";n.r(t);var o=n("7a23");const s=Object(o["G"])("data-v-17c48d43");Object(o["t"])("data-v-17c48d43");const i=Object(o["h"])("div",{id:"modal_window__signUp"},null,-1),a={class:"check"},c=Object(o["h"])("h1",null,"Sign Up",-1),l=Object(o["h"])("h1",null,"First time? - Register",-1),r=Object(o["h"])("input",{id:"tn1",min:"1000000",type:"number",placeholder:"Telepthone Number",required:""},null,-1),d=Object(o["h"])("input",{type:"password",placeholder:"Password",minlength:"6",id:"pc1",required:""},null,-1),u=Object(o["h"])("input",{type:"password",minlength:"6",placeholder:"Confirm Password",id:"pc2",required:""},null,-1);Object(o["r"])();const p=s((e,t,n,s,p,h)=>(Object(o["q"])(),Object(o["d"])(o["a"],null,[i,Object(o["h"])("div",a,[Object(o["h"])("div",null,[c,Object(o["h"])("form",{onSubmit:t[4]||(t[4]=Object(o["F"])((...t)=>e.onSubmit&&e.onSubmit(...t),["prevent"])),class:"check__form",action:""},[Object(o["E"])(Object(o["h"])("input",{id:"tn_input_signUp",type:"number",placeholder:"Telepthone Number","onUpdate:modelValue":t[1]||(t[1]=e=>p.tel_num=e),min:"1000000",required:""},null,512),[[o["B"],p.tel_num]]),Object(o["E"])(Object(o["h"])("input",{type:"password",placeholder:"Password","onUpdate:modelValue":t[2]||(t[2]=e=>p.pass=e),minlength:"6",id:"password_signUp",required:""},null,512),[[o["B"],p.pass]]),Object(o["h"])("button",{onClick:t[3]||(t[3]=e=>h.SignUp()),type:"submit"},"Submit")],32)]),Object(o["h"])("div",null,[l,Object(o["h"])("form",{onSubmit:t[6]||(t[6]=Object(o["F"])((...t)=>e.onSubmit&&e.onSubmit(...t),["prevent"])),class:"check__form",action:""},[r,d,u,Object(o["h"])("button",{type:"submit",onClick:t[5]||(t[5]=e=>h.Register())},"Submit")],32)])])],64)));var h=n("bc3a"),m=n.n(h),b=n("a18c"),g={data(){return{pass:"",tel_num:""}},methods:{Register(){var e=document.getElementById("tn1").value,t=document.getElementById("pc1").value,n=document.getElementById("pc2").value;if(""===e||e.length<=6||""===t.length||t.length<6)return void this.showModal(!1,"Check sintax!");if(t!=n)return void this.showModal(!1,"Different passwords!");var o={tel:e,pass:t};let s=this;m.a.get("http://localhost/afanasyev-project-php/user_register.php",{params:o}).then((function(e){e.data.error?s.showModal(!1,"This number is already occupied!"):(b["a"].replace("food"),s.$store.commit("sign"),s.showModal(!0,"Success!"),document.getElementById("signUpBu").innerHTML="Exit")}))},SignUp(){var e=document.getElementById("tn_input_signUp").value,t=document.getElementById("password_signUp").value;if(""===e||e.length<=6||""===t.length||t.length<6)return void this.showModal(!1,"Check sintax!");var n={tel:e,pass:t};let o=this;m.a.get("http://localhost/afanasyev-project-php/user_signup.php",{params:n}).then((function(e){e.data.error?o.showModal(!1,"Wrong number or password!"):(b["a"].replace("food"),o.$store.commit("sign"),o.showModal(!0,"Success!"),document.getElementById("signUpBu").innerHTML="Exit")}))},showModal(e,t){var n=document.getElementById("modal_window__signUp");n.innerHTML=t,n.style.backgroundColor=e?"#00cc99":"#ff3300",n.classList.add("show"),setTimeout((function(){n.classList.remove("show")}),3e3)}}};n("75ca");g.render=p,g.__scopeId="data-v-17c48d43";t["default"]=g}}]);
//# sourceMappingURL=about.86d4fdb8.js.map