import Vue from "vue";
import App from "./App.vue";
import cfbgcOpenApplets from "./../packages/index";
Vue.use(cfbgcOpenApplets);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
