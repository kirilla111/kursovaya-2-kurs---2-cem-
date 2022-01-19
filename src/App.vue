<template>
  <div class="wrapper">
    <m-header />
    
    <m-footer id="mFooter" />
  </div>
</template>

<script>
import mFooter from "./components/m-footer.vue";
import mHeader from "./components/m-header.vue";


export default {
  name: "app",
  components: { mFooter, mHeader },
};
</script>

<style>
main {
  flex: 1 1 auto !important;
}
body {
  padding: 0;
  margin: 0;
  height: 100%;
}
.wrapper {
  min-height: 100%;
  display: flex;
  flex-direction: column;
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
  height: 100%;
}

::placeholder {
  font-family: "Open Sans", sans-serif;
}
html {
  height: 100%;
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
.main__dashboard_container{
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px;
}
.dashboard_container__diagramm{
  margin: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.diagramm__pie_container{
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10%;
}
@media  (max-width: 1100px) {
   .diagramm__pie_container{
    flex-direction: column;
    gap: 30px;
  }
}
</style>
