<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Hello world 2</h2>
  </div>
</template>

  <script>
    export default {
      name: "HelloWorld",
  props: {
      test: String
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
  };
},
  created() {
      // console.log("hello world route", this.$route);
      console.log("hello props", this.$props);
    }
  };
</script>