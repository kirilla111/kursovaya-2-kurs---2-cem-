<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<style>

:root{
    --main-bg: #f5f5f5;
    --color-primary: #f63;
    --hover-color: #ff7e53
}
#app {
  font-family: 'Open Sans', sans-serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
::placeholder{
  font-family: 'Open Sans', sans-serif;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
button{
  background-color: var(--color-primary);
  outline: none;
  border: none;
  color: var(--main-bg);
  padding: 10px 10px;
  border-radius: 4px;
}
button:hover{
  background-color: var(--hover-color);
}
</style>
