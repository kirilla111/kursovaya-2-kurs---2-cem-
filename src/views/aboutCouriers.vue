<template>
  <main class="main">
    <div id="main__modal_window"></div>
    <h1 class="main__title">This page is only for our Couriers</h1>
    <form v-on:submit.prevent="onSubmit" class="main__form" action="">
      <input
        id="cour_log_input_signUp"
        type="text"
        placeholder="Login"
        minlength="3"
        min="1000000"
        autocomplete="on"
        required
      />
      <input
        type="password"
        placeholder="Password"
        minlength="3"
        id="cour_password_signUp"
        autocomplete="off"
        required
      />
      <button @click="CourSignUp()" type="submit">Submit</button>
    </form>
  </main>
</template>

<script>
import axios from "axios";
import router from "../router/index";
export default {
  methods: {
    CourSignUp() {
      var login = document.getElementById("cour_log_input_signUp").value;
      var password = document.getElementById("cour_password_signUp").value;

      if (
        login === "" ||
        login.length < 3 ||
        password.length === "" ||
        password.length < 3
      ) {
        this.showModal(false, "Check sintax!");
        return;
      }

      var params = { cour_lgn: login, cour_pwd: password };
      let vm = this;

      axios
        .get("http://localhost/afanasyev-project-php/courier_signup.php", {
          params,
        })
        .then(function (response) {
          if (response.data.error) {
            vm.showModal(false, "Wrong login or password!");
          } else {
            vm.$store.commit("courierSign", login);
            router.replace("courierPage");
            // document.getElementById("signUpBu").innerHTML = "Exit";
          }
        });
    },
    showModal(type, message) {
      var modal = document.getElementById("main__modal_window");
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

<style scoped>
.main__form input {
  padding: 10px;
  width: 200px;
}
.main__form {
  margin-top: 50px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10%;
  padding: 100px 20px;
  margin-bottom: 200px;
}
#main__modal_window {
  display: none;
  position: fixed;
  text-align: center;
  top: 90px;
  right: 20px;
  background-color: black;
  padding: 20px 50px;
  color: white;
  opacity: 0;
  border-radius: 10px;
}
</style>