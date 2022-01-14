<template>
  <div id="nav">
    <router-link to="/"
      ><img src="../assets/logo.jpg" alt="logo" id="logo" width="100"
    /></router-link>
    <div id="nav-links" class="nav__text-links">
      <router-link class="link" to="/"><a>Partners</a></router-link>
      <p class="devider" style="font-size: 30px">|</p>
      <router-link class="link" to="/food"><a>Food</a></router-link>
      <p class="devider" style="font-size: 30px">|</p>
      <router-link class="link" id="Basket" to="/cart"><a>Cart</a></router-link>
    </div>
    <div id="nav-buttons" class="nav__buttons">
      <!-- <router-link id="login" to="/about"><button>Login</button></router-link> -->
      <button @click="Exit()" id="signUpBu">Sign In</button>
      <button @click="ExitСouriers()" id="signUpBuCourier">For Сouriers</button>
    </div>
  </div>
  <router-view />
</template>

<script>
import router from "../router/index";

export default {
  methods: {
    Exit() {
      router.replace("about");
      if (this.$store.getters.sign) {
        this.$store.commit("sign");
        document.getElementById("signUpBu").innerHTML = "Sign In";
      }
    },
    ExitСouriers() {
      router.replace("aboutCouriers");
      if (this.$store.getters.sign) {
        this.$store.commit("signСouriers");
        //document.getElementById("signUpBuCourier").innerHTML = "Sign In";
      }
    },
  },
};
</script>

<style scoped>
a {
  display: inline;
  padding: 0;
  margin: 0;
}
#nav {
  padding: 10px 30px;
  border-bottom: 1px solid var(--hover-color);
  display: flex;
  text-align: center;
  gap: 10%;
  justify-content: space-between;
}
.nav__text-links a {
  font-size: 26px;
  justify-content: center;
}
.link {
  text-align: center;
  padding: auto;
  margin: auto;
}

#nav a {
  font-weight: bold;
  color: var(--text-color);
  text-decoration: none;
}
#nav a:hover {
  color: var(--hover-color);
}
.nav__text-links {
  grid-area: h2;
  display: flex;
  gap: 7px;
}
.nav__buttons {
  display: flex;
  justify-content: center;
  gap: 10px;
  grid-area: r1;
}
.nav__buttons button {
  min-width: 90px;
}
#logo {
  grid-area: h1;
}
#nav a.router-link-exact-active {
  color: var(--hover-color);
  text-decoration: underline;
}
.devider {
  text-align: center;
  margin: auto;
}
@media (max-width: 340px) {
  .nav__text-links a {
    font-size: 22px;
    justify-content: center;
  }
}

@media (max-width: 620px) {
  #nav {
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
    padding: 20px 70px;
  }
}
</style>