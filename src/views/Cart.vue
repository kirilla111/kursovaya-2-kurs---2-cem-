<template>
  <div v-if="cart.length===0" class="empty-block">
    <h1> Your Cart is empty</h1>
  </div>
  <div v-else class="cart-container">
    <h1>Your Cart:</h1>

    <div   v-for="(item, index) in cart" :key="index" class="cart-container__row">
      <img :src="item.image_url" width="220" alt="cart item" />
      <div class="row__info">
        <div class="info__title">
          <h3>{{ item.food_name }}</h3>
        </div>
        <div class="info__description">{{ item.description }}</div>
        <div class="info__price">
          Total price: {{ item.price * item.count }} $
        </div>
      </div>
      <div class="row__actions">
        <button @click="item.count++" class="action__button green">+</button>
        <div>{{ item.count }}</div>
        <button @click="inc(item.count, index)" class="action__button red">
          -
        </button>
      </div>
    </div>
    <router-link class="link" id="Basket" to="/check">
      <button @click="Save" id="goToCheck">
        Continue without authorization
      </button></router-link
    >
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: [
        // {
        //   brand: "MacDonalds",
        //   description:
        //     "qwewqeytwqyteuwuqyt asghdghasjhjdgas iot uoireoti erh j hgfdkj hasd agvsj uhrfguie rhfgu",
        //   food_name: "Set #2",
        //   id: "4",
        //   image_url:
        //     "https://i1.wp.com/4ao3uo2687rn3u1b6w2vblpy-wpengine.netdna-ssl.com/wp-content/uploads/2019/02/15735694_web1_190125-WLT-FoodGuide.jpg",
        //   price: "11.99",
        //   rating: "0",
        //   count: 1,
        // },
        // {
        //   brand: "MacDonalds",
        //   description:
        //     "qwewqeytwqyteuwuqyt asghdghasjhjdgas iot uoireoti erh j hgfdkj hasd agvsj uhrfguie rhfgu",
        //   food_name: "Set #2",
        //   id: "4",
        //   image_url:
        //     "https://i1.wp.com/4ao3uo2687rn3u1b6w2vblpy-wpengine.netdna-ssl.com/wp-content/uploads/2019/02/15735694_web1_190125-WLT-FoodGuide.jpg",
        //   price: "11.99",
        //   rating: "0",
        //   count: 1,
        // },
        // {
        //   brand: "MacDonalds",
        //   description:
        //     "qwewqeytwqyteuwuqyt asghdghasjhjdgas iot uoireoti erh j hgfdkj hasd agvsj uhrfguie rhfgu",
        //   food_name: "Set #2",
        //   id: "4",
        //   image_url:
        //     "https://i1.wp.com/4ao3uo2687rn3u1b6w2vblpy-wpengine.netdna-ssl.com/wp-content/uploads/2019/02/15735694_web1_190125-WLT-FoodGuide.jpg",
        //   price: "11.99",
        //   rating: "0",
        //   count: 1,
        // },
        // {
        //   brand: "MacDonalds",
        //   description:
        //     "qwewqeytwqyteuwuqyt asghdghasjhjdgas iot uoireoti erh j hgfdkj hasd agvsj uhrfguie rhfgu",
        //   food_name: "Set #2",
        //   id: "4",
        //   image_url:
        //     "https://i1.wp.com/4ao3uo2687rn3u1b6w2vblpy-wpengine.netdna-ssl.com/wp-content/uploads/2019/02/15735694_web1_190125-WLT-FoodGuide.jpg",
        //   price: "11.99",
        //   rating: "0",
        //   count: 1,
        // },
      ],
      sign: false,
    };
  },
  methods: {
    getCartInfo() {
      console.log("-------->");
      this.cart = this.$store.getters.cart;

      if (this.$store.getters.sign) {
        document.getElementById("goToCheck").innerHTML = "Continue";
      }
    },
    inc(count, index) {
      if (count > 0) this.cart[index].count--;
    },
    Save(){
      var cart_copy = [];
      this.cart.forEach(element => {
        if (element.count > 0){
          cart_copy.push(element);
        }
      });
      this.$store.dispatch("saveCart", cart_copy);
    }
  },
  created() {
    this.getCartInfo();
  },
};
</script>

<style>
.cart-container__row {
  display: flex;
  padding-right: 20px;
  padding-bottom: 10px;
  margin: 0px 40px 60px 40px;
  justify-content: space-between;
  flex-direction: row;
  border-bottom: 1px solid var(--hover-color);
}
h3 {
  padding: 0;
  margin: 10px;
}
.row__info {
  padding-right: 15%;
  padding-left: 20px;
}
.row__info {
  text-align: center;
}
.green {
  background-color: #00cc99;
}
.red {
  background-color: #ff3300;
}
.row__actions {
  display: block;
}
.action__button {
  font-size: 20px;
  padding: 10px;
  width: 43px;
  border-radius: 25px;
  margin: 5px 5px;
}
.info__price {
  margin-top: 10px;
  font-size: 20px;
  font-weight: 600;
}
.action__button:hover {
}
#goToCheck {
  height: 60px;
  width: 30%;
  margin-bottom: 30px;
}
.empty-block{
  margin-bottom: 800px;
}
@media (max-width: 660px) {
  .cart-container__row {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 10px;
  }
  .row__actions {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }
  .row__info {
    padding: 0;
  }
}

</style>