<template>
  <m-header/>

 

  <m-footer />
</template>

<script>
import mFooter from "./components/m-footer.vue";
import mHeader from "./components/m-header.vue";
//import router from "../router/index";

export default {
  name: "app",
  components: { mFooter, mHeader },
  
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
:root {
  --main-bg: #f5f5f5;
  --color-primary: #f63;
  --border-color-primary: #666666;
  --hover-color: #ff7e53;
  --text-color: #2c3e50;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text-color);
  font-size: 18px;
}

::placeholder {
  font-family: "Open Sans", sans-serif;
}

button {
  background-color: var(--color-primary);
  outline: none;
  border: none;
  color: var(--main-bg);
  padding: 10px 15px;
  border-radius: 2px;
  font-weight: 600;
  font-size: 16px;
}
button:hover {
  background-color: var(--hover-color);
}
</style>
