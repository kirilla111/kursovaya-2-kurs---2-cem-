<template>
  <main>
    <div id="modal_window__signUp"></div>
    <div class="check">
      <div>
        <h1>Sign Up</h1>
        <form v-on:submit.prevent="onSubmit" class="check__form" action="">
          <input
            id="tn_input_signUp"
            type="number"
            placeholder="Telethone Number"
            v-model="tel_num"
            min="1000000"
            required
          />
          <input
            type="password"
            placeholder="Password"
            v-model="pass"
            minlength="6"
            id="password_signUp"
            required
          />
          <button @click="SignUp()" type="submit">Submit</button>
        </form>
      </div>
      <div>
        <h1>First time? - Register</h1>
        <form v-on:submit.prevent="onSubmit" class="check__form" action="">
          <input
            id="tn1"
            min="1000000"
            type="number"
            placeholder="Telethone Number"
            required
          />
          <input
            type="password"
            placeholder="Password"
            minlength="6"
            id="pc1"
            required
          />
          <input
            type="password"
            minlength="6"
            placeholder="Confirm Password"
            id="pc2"
            required
          />
          <button type="submit" @click="Register()">Submit</button>
        </form>
      </div>
    </div>
    <p>
      Getting Your own account on Our web-site grants You a discount depending
      on the number of orders
    </p>
  </main>
</template>

<script>
import axios from "axios";
import router from "../router/index";

export default {
  data() {
    return {
      pass: "",
      tel_num: "",
    };
  },
  methods: {
    Register() {
      var tn = document.getElementById("tn1").value;
      var p1 = document.getElementById("pc1").value;
      var p2 = document.getElementById("pc2").value;
      if (tn === "" || tn.length <= 6 || p1.length === "" || p1.length < 6) {
        this.showModal(false, "Check sintax!");
        return;
      }

      if (p1 != p2) {
        this.showModal(false, "Different passwords!");
        return;
      }

      var params = { tel: tn, pass: p1 };
      let vm = this;
      axios
        .get("http://localhost/afanasyev-project-php/user_register.php", {
          params,
        })
        .then(function (response) {
          if (response.data.error) {
            vm.showModal(false, "This number is already occupied!");
          } else {
            router.replace("food");
            vm.$store.commit("sign");
            // vm.showModal(true, "Success!");
            document.getElementById("signUpBu").innerHTML = "Exit";
          }
          //console.log(response.data.error);
        });

      //document.getElementById('signUpBu').innerHTML = 'Welcome!';
      //document.getElementById("signUpBu").disabled = true;
      //console.log(this.$store.getters.sign);
    },
    SignUp() {
      var tn = document.getElementById("tn_input_signUp").value;
      var p1 = document.getElementById("password_signUp").value;

      if (tn === "" || tn.length <= 6 || p1.length === "" || p1.length < 6) {
        this.showModal(false, "Check sintax!");
        return;
      }

      var params = { tel: tn, pass: p1 };
      let vm = this;

      axios
        .get("http://localhost/afanasyev-project-php/user_signup.php", {
          params,
        })
        .then(function (response) {
          if (response.data.error) {
            vm.showModal(false, "Wrong number or password!");
          } else {
            router.replace("userPage");
            vm.$store.commit("sign");
            vm.$store.commit("userSignLogin", tn);
            console.log(tn);
            // vm.showModal(true, "Success!");
            document.getElementById("signUpBu").innerHTML = "Exit";
          }
        });
    },
    showModal(type, message) {
      var modal = document.getElementById("modal_window__signUp");
      modal.style.display = "block";
      modal.innerHTML = message;

      if (type) {
        modal.style.backgroundColor = "#00cc99";
      } else {
        modal.style.backgroundColor = "#ff3300";
      }
      modal.classList.add("show");
      setTimeout(function () {
        modal.classList.remove("show");
        modal.style.display = "none";
      }, 2000);
    },
  },
};
</script>

<style>
main{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.check__form input {
  padding: 10px;
  width: 200px;
}
.check__form {
  margin-bottom: 50px;
}
.check {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10%;
  padding: 100px 20px;
}
@media (max-width: 600px) {
  .check {
    flex-direction: column;
    padding: 40px 20px;
    margin-bottom: 50px;
  }
}

#modal_window__signUp {
  display: none;
  position: fixed;
  text-align: center;
  top: 20px;
  right: 20px;
  background-color: black;
  padding: 20px 50px;
  color: white;
  opacity: 0;
  border-radius: 10px;
}
</style>
