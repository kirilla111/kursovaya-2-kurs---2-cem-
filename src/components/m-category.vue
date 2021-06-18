<template>
    <div  class="container-category">
      <button
        v-for="(category, index) in categorys"
        :key="index"
        @click="$emit('update',category)"
        class="container-category__button"
      >
        <img :src="category.image_url" width="30" alt="category" />
        <p>{{ category.title }}</p>
      </button>
    </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      categorys: [
        {
          id: 0,
          title: "Pizza",
          image_url: "http://cdn.onlinewebfonts.com/svg/img_427249.png",
        },
        {
          id: 1,
          title: "FastFood",
          image_url: "http://cdn.onlinewebfonts.com/svg/download_561498.png",
        },
        {
          id: 2,
          title: "Rolls",
          image_url: "http://cdn.onlinewebfonts.com/svg/img_58517.png",
        },
        {
          id: 3,
          title: "Others",
          image_url: "http://cdn.onlinewebfonts.com/svg/download_58143.png",
        },
         {
          id: 0,
          title: "Pizza",
          image_url: "http://cdn.onlinewebfonts.com/svg/img_427249.png",
        },
        {
          id: 1,
          title: "FastFood",
          image_url: "http://cdn.onlinewebfonts.com/svg/download_561498.png",
        },
        {
          id: 2,
          title: "Rolls",
          image_url: "http://cdn.onlinewebfonts.com/svg/img_58517.png",
        },
        {
          id: 3,
          title: "Others",
          image_url: "http://cdn.onlinewebfonts.com/svg/download_58143.png",
        },
      ],
    };
  },
  methods:{
    getCategoryData(){
      let vm = this;
      axios
        .get("http://localhost/afanasyev-project-php/get_category_info.php")
        .then(function (response) {
          if (response.data.error) {
            this.errorMsg = response.data.message;
          } else {
            vm.categorys = response.data.category_info;
          }
        });
    }
  },
  created(){
    this.getCategoryData()
  }
};
</script>

<style>
.container-category {
  display: grid;
  max-width: 100%;
  grid-template-columns: repeat(auto-fit, 150px);
  justify-content: center;
  align-items: center;
  padding: 20px 30px;
  column-gap: 20px;
  row-gap: 20px;
  text-decoration: none;
  color: inherit;
}

.container-category__button {
  background: white;
  border: 1px solid var(--hover-color);
  color: var(--text-color);
  display: flex;
  gap: 5px;
  padding: 10px;
  height: 55px;
  align-items: center;
}
.container-category__button:hover {
  background: var(--hover-color);
  color: white;
}
</style>