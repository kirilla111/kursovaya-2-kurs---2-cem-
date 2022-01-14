<template>
  <main>
    <div id="modal_window__signUp"></div>
    <h1>Welcome to Your personal user Page</h1>
    <div class="main__info">
      <form class="info__item">
        <p class="item__text">Edit telephone number:</p>
        <input
          min="1000000"
          type="number"
          :placeholder="tel_number"
          v-model="tel_number"
        />
        <button type="submit" @click="editTelNum()">Edit</button>
      </form>
      <form class="info__item">
        <p class="item__text">Edit password:</p>
        <input minlength="6" type="password" v-model="password" required />
        <button type="submit" @click="editPassword()">Edit</button>
      </form>
      <div class="info__item">
        <h3>Your personal discount:</h3>
        <h3>{{ discount }}</h3>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      tel_number: "",
      discount: "0%",
      password: "",
    };
  },
  methods: {
    getUserDiscount() {
      let vm = this;
      axios
        .get(`http://localhost/afanasyev-project-php/get_user_discount.php`)
        .then(function (response) {
          console.log(response.data);
          vm.discount = `${response.data.discount} %`;
        });
    },
    editTelNum() {
      if (this.tel_number === "" || this.tel_number.length <= 6) {
        this.showModal(false, "Check sintax!");
        return;
      }

      this.showModal(true, "Succesfully!");

      var params = { tel: this.tel_number};
      axios
        .get("http://localhost/afanasyev-project-php/edit_user_login.php", {
          params,
        })
      console.log(this.tel_number);
    },
    editPassword() {
      console.log(this.password);
    },
    getUserInfo() {
      this.tel_number = this.$store.getters.userLogin;
      this.getUserDiscount();
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

  created() {
    this.getUserInfo();
  },
};
</script>

<style>
.info__item {
  display: flex;
  height: 48px;
  flex-direction: row;
  gap: 5%;
  width: 500px;
  justify-content: space-between;
}
#modal_window__signUp {
  height: auto;
  color: white;
}
.main__info {
  margin-top: 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
}
.item__text {
  width: 200px;
}
main {
  justify-content: flex-start !important;
}
@media (max-width: 400px) {
  .info__item {
    flex-direction: column;
    padding: 20px;
  }
}
</style>