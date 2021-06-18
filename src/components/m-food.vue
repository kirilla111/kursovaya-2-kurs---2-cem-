<template>
  <div id="modal_window__cart"></div>
  <div class="grid__food">
    <img :src="image_url" width="250" />
    <div class="food_text">
      <div class="text__main-info">
        <div class="text__title">{{ food_name }}</div>
        <div class="text__price">{{ price }} $</div>
      </div>
      <div class="text__brand">
        {{ brand }} &nbsp;&nbsp;&nbsp; {{ rating }}&nbsp;&#9733;
      </div>
      <div class="text__description">{{ description }}</div>
    </div>
    <button class="grid__cart-button" @click="ToCard()">To Cart</button>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    image_url: String,
    food_name: String,
    brand: String,
    price: String,
    rating: String,
    description: String,
  },
  methods: {
    ToCard() {
      this.showModal(true, "Successfully!");
      var params = {
        id: this.id,
        image_url: this.image_url,
        food_name: this.food_name,
        brand: this.brand,
        price: this.price,
        rating: this.rating,
        description: this.description,
        count: 1
      };
      console.log(params);
      this.$store.dispatch("pushCart", params);
      console.log(this.id);
      console.log(this.$store.getters.cart);
    },
    showModal(type, message) {
      var modal = document.getElementById("modal_window__cart");

      modal.innerHTML = message;

      if (type) {
        modal.style.backgroundColor = "#00cc99";
      } else {
        modal.style.backgroundColor = "#ff3300";
      }
      modal.classList.add("show");
      setTimeout(function () {
        modal.classList.remove("show");
      }, 3000);
    },
  },
};
</script>

<style>
#modal_window__cart {
  display: block;
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
.show {
  animation: showModal 2s 1;
  animation-fill-mode: forwards;
}
@keyframes showModal {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.grid__cart-button {
  margin-top: 15px;
  margin-left: 30px;
  width: 80%;
  font-size: 18px;
}
</style>