<template>
  <main v-if="isCourierSigned"></main>
</template>

<script>
import axios from "axios";
export default {
  computed: {
    isCourierSigned: function () {
      if (this.$store.getters.courierSign) {
        let vm = this;

        axios
          .get("http://localhost/afanasyev-project-php/courier_info.php", {
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
      }
      return this.$store.getters.courierSign;
    },
  },
};
</script>

<style>
</style>