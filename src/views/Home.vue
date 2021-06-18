<template>
  <div class="main">
    <!-- <m-category v-on:update="ChangeCategory" /> -->
    <div class="main__container">
      <h1>Our Partners</h1>
      <div class="cantainer__grid">
        <div
          v-for="(partner, index) in partners"
          :key="index"
          class="grid_partner"
        >
          <a :href="partner.url"><img :src="partner.img_url" width="250" /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mFood from "../components/m-food.vue";
import axios from "axios";

export default {
  name: "Home",
  components: { mFood },
  props: {
    var1: {
      type: String,
      default: "scr/assets/pizza.png",
    },
  },
  data() {
    return {
      partners: [],
    };
  },

  methods: {
    getPartnersData() {
      let vm = this;
      axios
        .get("http://localhost/afanasyev-project-php/get_partners_data.php")
        .then(function (response) {
          if (response.data.error) {
            this.errorMsg = response.data.message;
          } else {
            vm.partners = response.data.brands_info;
          }
        });
    },
    ToCard(card) {
      console.log(card);
    },
  },
  created() {
    this.getPartnersData();
  },
};
</script>
<style>
.main__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-top: 1px solid var(--hover-color);
}
.grid__food {
  text-align: left;
}
h1 {
  font-weight: bold;
  font-size: 44px;
}
.text__main-info {
  display: flex;
  justify-content: space-between;
  margin: 5px 12px;
  padding: 5px 0px;
  border-bottom: 1px solid var(--hover-color);
}
.text__title {
  font-size: 22px;
  font-weight: bold;
}
.text__description {
  margin-top: 10px;
  text-align: center;
  padding-bottom: 5px;
  border-bottom: 1px solid var(--hover-color);
}
.cantainer__grid {
  /* border-top: 1px solid var(--hover-color); */
  display: grid;
  max-width: 100%;
  padding: 50px;
  margin-bottom: 50px;
  grid-column-gap: 10%;
  grid-row-gap: 80px;
  grid-template-columns: repeat(auto-fill, 250px);
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.grid_partner {
  width: 250px;
  height: 250px;
  display: block;
  align-items: center;
  align-self: center;
}
@media (max-width: 673px) {
  .cantainer__grid {
    justify-content: center;
  }
  .main__container-category {
    display: grid;
    grid-template-columns: repeat(2, 150px);
  }
}
@media (max-width: 340px) {
  .main__container-category {
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    padding: 20px 70px;
  }
}
</style>