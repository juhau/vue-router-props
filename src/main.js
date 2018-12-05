// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import VueRouter from "vue-router";

import HelloWorld from "./components/HelloWorld";
import HelloWorld2 from "./components/HelloWorld2";

Vue.use(VueRouter);

Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    {
      name: "hello",
      path: "/hello/",
      component: HelloWorld,
      props: {
        test: "test"
      }
    },
    // namming components
    {
      name: "hello2",
      path: "/hello2/",
      components: {
        hello2: HelloWorld2
      },
      props: {
        hello2: { test: "test" }
      }
    }
  ]
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>",
  router
});
