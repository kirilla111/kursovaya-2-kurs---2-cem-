<template>
<div>
 <m-category v-on:update="ChangeCategory" />
  <div class="main__container">
    <div class="container__flex">
      <input type="text" class="search" placeholder="🔎 Search.." v-model="filter" >
    </div>
    <h1>{{ category }}</h1>
    <div v-if="switched">
      <div class="cantainer__grid">
        <m-food
          v-for="(food, index) in filtered_food_info"
          :key="index"
          :id="food.id"
          :image_url="food.image_url"
          :food_name="food.food_name"
          :brand="food.brand"
          :price="food.price"
          :rating="food.rating"
          :description="food.description"
        />
      </div>
    </div>
    <div v-else>
      <div class="cantainer__grid">
        <m-food
          v-for="(food, index) in filtered_food_info"
          :key="index"
          :id="food.id"
          :image_url="food.image_url"
          :food_name="food.food_name"
          :brand="food.brand"
          :price="food.price"
          :rating="food.rating"
          :description="food.description"
        />
      </div>
    </div>
  </div>
</div>
 
</template>

<script>
import mFood from "../components/m-food.vue";
import axios from "axios";
import mCategory from "../components/m-category.vue";

export default {
  components: { mFood,mCategory },
  data() {
    return {
      category: "Here's What We deliver",
      food_info: [],
      switched: false,
      filter: ''
    };
  },
   computed: {
    filtered_food_info: function () {
      var keyword = this.filter.toLowerCase();
      return this.food_info.filter(
        (x) =>
            x.food_name.toLowerCase().includes(keyword) ||
            x.brand.toLowerCase().includes(keyword) ||
            x.description.toLowerCase().includes(keyword)
      );
    },
  },
  methods: {
    getFoodData() {
      let vm = this;
      axios
        .get("http://localhost/afanasyev-project-php/get_all_food_data.php")
        .then(function (response) {
          if (response.data.error) {
            this.errorMsg = response.data.message;
          } else {
            vm.food_info = response.data.food_info;
          }
        });
    },
    ChangeCategory: function (categoryInfo) {
      //console.log(categoryInfo);
      this.category = `Category: ${categoryInfo.title}`;
      this.switched = true;
      let vm = this;
      axios
        .get(
          `http://localhost/afanasyev-project-php/get_food_info.php?category=${categoryInfo.id}`
        )
        .then(function (response) {
          //console.log(response);
          console.log(response.data);
          //console.log(vm.isAutorized);
          vm.food_info = response.data.food_info;
        });
    },
    ToCard(card) {
      console.log(card);
    },
  },
  created() {
    this.getFoodData();
  },
};
</script>

<style>
.text__brand {
  text-align: center;
  font-size: 22px;
  font-weight: bold;
}
h1{
  margin-bottom: 20px;
  margin-top: 20px;
}
.container__flex{
  display: flex;
  justify-content: center;
  align-items: center;
}
.search{
  padding: 8px 40px;
  margin-top: 25px;
  border-radius: 5px;
  border: 1px solid var(--hover-color);
  font-weight: 400;
  outline: none;
  font-size: 20px;
  width: 40%;
  display: inline;
}
</style>