<template>
  <div id="app">
    <div>
      <router-link to="/hello">Go to hello</router-link>
      <br />
      <router-link to="/hello2">Go to hello2</router-link>
    </div>
    <router-view name="hello2" />
    <img width="25%" src="./assets/logo.png" />
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  props: {
    test: String
  },
  created() {
    // console.log("App route", this.$route);
    console.log("App props", this.$props);
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
