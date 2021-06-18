<template>
<div>
 <m-category v-on:update="ChangeCategory" />
  <div class="main__container">
    <div v-if="switched">
       <h1>Category: {{ category }}</h1>
     
      <div class="cantainer__grid">
        <m-food
          v-for="(food, index) in food_info"
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
    <div v-else class="main__container">
       <h1>Here's What We deliver</h1>
      <div class="cantainer__grid">
        <m-food
          v-for="(food, index) in food_info"
          :key="index"
          :id="food.id"
          :image_url="food.image_url"
          :food_name="food.food_name"
          :brand="food.brand"
          :price="food.price"
          :rating="food.rating"
          :description="food.description"
        />
        <!-- <div v-for="(food, index) in food_info" :key="index" class="grid__food">
          <img :src="food.image_url" width="250" />
          <div class="food_text">
            <div class="text__main-info">
              <div class="text__title">{{ food.food_name }}</div>
              <div class="text__price">{{ food.price }} $</div>
            </div>
              <div class="text__brand">{{ food.brand }} &nbsp;&nbsp;&nbsp; {{food.rating}}&nbsp;&#9733;</div>
            <div class="text__description">{{ food.description }}</div>
          </div>
          <button class="grid__cart-button" @click="ToCard(food)">To Cart</button> -->
        <!-- </div> -->
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
      category: "",
      food_info: [],
      switched: false,
    };
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
      this.category = `${categoryInfo.title}`;
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

.grid__cart-button {
  margin-top: 15px;
  margin-left: 140px;
}
</style>