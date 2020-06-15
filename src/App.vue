<template>
<!-- app.vue的页面结构是公用的始终会出现在任何页面中, -->
  <div id="app">
    <!-- <div id="nav">
      
      <router-link to="/one2">知识点回顾</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
