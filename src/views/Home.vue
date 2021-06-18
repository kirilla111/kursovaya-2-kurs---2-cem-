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
    <!-- <div v-else class="main__food-info"> -->
    <!-- <div v-else class="main__container">
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
        /> -->
        <!-- <div v-for="(food, index) in food_info" :key="index" class="grid__food">
          <img :src="food.image_url" width="250" />
          <div class="food_text">
            <div class="text__main-info">
              <div class="text__title">{{ food.food_name }}</div>
              <div class="text__price">{{ food.price }} $</div>
            </div>
            <div class="text__description">{{ food.description }}</div>
          </div>
          <button class="grid__cart-button" @click="ToCard(food)">To Cart</button>
        </div> -->
      <!-- </div> -->
    <!-- </div> -->
  </div>
</template>

<script>
// @ is an alias to /src
import mFood from "../components/m-food.vue";
import axios from "axios";
// import mCategory from "../components/m-category.vue";

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
      //category: "",
      // food_info: [
      //   // {
      //   //   id: "4",
      //   //   food_name: "Set #21232222 222",
      //   //   price: "11.99",
      //   //   description: "Lorem ipsum asd asdjasopdaijsdoasijdo",
      //   //   category_id: "5",
      //   //   image_url:
      //   //     "https://i1.wp.com/4ao3uo2687rn3u1b6w2vblpy-wpengine.netdna-ssl.com/wp-content/uploads/2019/02/15735694_web1_190125-WLT-FoodGuide.jpg",
      //   //   brand_id: "2",
      //   // },
      // ],
      partners: [
        {
          id: 0,
          title: "Mak",
          img_url:
            "https://www.phoenixglassrepair.com/wp-content/uploads/2017/04/Phoenix-glass-repair-customer-McDonalds-250x250.png",
        },
        {
          id: 1,
          title: "Yakitoria",
          img_url: "https://kuhnya-crimea.ru/userfiles/image/catalog/unagi.png",
        },
        {
          id: 2,
          title: "KFC",
          img_url: "https://cdn.worldvectorlogo.com/logos/kfc-2.svg",
          url: "https://www.kfc.ru/",
        },
        {
          id: 3,
          title: "Burger King",
          img_url: "https://i.otzovik.com/objects/b/750000/748703.png",
        },
      ],
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
    // ChangeCategory: function (categoryInfo) {
    //   //console.log(categoryInfo);
    //   this.category = `${categoryInfo.title}`;
    //   let vm = this;
    //   axios
    //     .get(
    //       `http://localhost/afanasyev-project-php/get_food_info.php?category=${categoryInfo.id}`
    //     )
    //     .then(function (response) {
    //       //console.log(response);
    //       console.log(response.data);
    //       //console.log(vm.isAutorized);
    //       vm.food_info = response.data.food_info;
    //     });
    // },
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
  margin: 5px 40px;
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