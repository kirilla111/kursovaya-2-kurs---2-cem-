<template>
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
      console.log(this.id);
      console.log(this.food_name);
    },
  },
};
</script>

<style>
</style>