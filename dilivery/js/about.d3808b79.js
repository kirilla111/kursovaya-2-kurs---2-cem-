(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{a5c0:function(e,t,n){"use strict";n("cc25")},cc25:function(e,t,n){},f820:function(e,t,n){"use strict";n.r(t);var s=n("7a23");const o=Object(s["G"])("data-v-e3dbdc32");Object(s["t"])("data-v-e3dbdc32");const c=Object(s["h"])("div",{id:"modal_window__signUp"},null,-1),i={class:"check"},l=Object(s["h"])("h1",null,"Sign Up",-1),a=Object(s["h"])("h1",null,"First time? - Register",-1),r=Object(s["h"])("input",{id:"tn1",min:"1000000",type:"number",placeholder:"Telepthone Number",required:""},null,-1),d=Object(s["h"])("input",{type:"password",placeholder:"Password",minlength:"6",id:"pc1",required:""},null,-1),u=Object(s["h"])("input",{type:"password",minlength:"6",placeholder:"Confirm Password",id:"pc2",required:""},null,-1);Object(s["r"])();const p=o((e,t,n,o,p,h)=>(Object(s["q"])(),Object(s["d"])(s["a"],null,[c,Object(s["h"])("div",i,[Object(s["h"])("div",null,[l,Object(s["h"])("form",{onSubmit:t[4]||(t[4]=Object(s["F"])((...t)=>e.onSubmit&&e.onSubmit(...t),["prevent"])),class:"check__form",action:""},[Object(s["E"])(Object(s["h"])("input",{id:"tn_input_signUp",type:"number",placeholder:"Telepthone Number","onUpdate:modelValue":t[1]||(t[1]=e=>p.tel_num=e),min:"1000000",required:""},null,512),[[s["B"],p.tel_num]]),Object(s["E"])(Object(s["h"])("input",{type:"password",placeholder:"Password","onUpdate:modelValue":t[2]||(t[2]=e=>p.pass=e),minlength:"6",id:"password_signUp",required:""},null,512),[[s["B"],p.pass]]),Object(s["h"])("button",{onClick:t[3]||(t[3]=e=>h.SignUp()),type:"submit"},"Submit")],32)]),Object(s["h"])("div",null,[a,Object(s["h"])("form",{onSubmit:t[6]||(t[6]=Object(s["F"])((...t)=>e.onSubmit&&e.onSubmit(...t),["prevent"])),class:"check__form",action:""},[r,d,u,Object(s["h"])("button",{type:"submit",onClick:t[5]||(t[5]=e=>h.Register())},"Submit")],32)])])],64)));var h=n("bc3a"),m=n.n(h),b={data(){return{pass:"",tel_num:""}},methods:{Register(){var e=document.getElementById("tn_input_signUp").value,t=document.getElementById("pc1").value,n=document.getElementById("pc2").value;if(""===e||e.length<=6||""===t.length||t.length<6)return;if(t!=n)return void this.showModal(!1,"Different passwords!");var s={tel:e,pass:t};let o=this;m.a.get("http://localhost/afanasyev-project-php/user_register.php",{params:s}).then((function(e){e.data.error?(o.$store.commit("sign"),o.showModal(!0,"Success!"),document.getElementById("signUpBu").innerHTML="Exit"):o.showModal(!1,"This number is already occupied!")}))},SignUp(){var e=document.getElementById("tn1").value,t=document.getElementById("password_signUp").value;if(""===e||e.length<=6||""===t.length||t.length<6)return;var n={tel:e,pass:t};let s=this;m.a.get("http://localhost/afanasyev-project-php/user_signup.php",{params:n}).then((function(e){e.data.error?(s.$store.commit("sign"),s.showModal(!0,"Success!"),document.getElementById("signUpBu").innerHTML="Exit"):s.showModal(!1,"Error!")}))},showModal(e,t){var n=document.getElementById("modal_window__signUp");n.innerHTML=t,n.style.backgroundColor=e?"#00cc99":"#ff3300",n.classList.add("show"),setTimeout((function(){n.classList.remove("show")}),3e3)}}};n("a5c0");b.render=p,b.__scopeId="data-v-e3dbdc32";t["default"]=b}}]);
//# sourceMappingURL=about.d3808b79.js.map