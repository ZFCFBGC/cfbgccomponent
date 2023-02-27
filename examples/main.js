import Vue from "vue";
import App from "./App.vue";
import cfbgcOpenApplets from "../packages/OpenApplet/index";
import cfbgcColorPicker from "../packages/color-picker/index";
Vue.use(cfbgcOpenApplets);
Vue.use(cfbgcColorPicker);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
