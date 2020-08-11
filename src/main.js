import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

import Ionic from "@ionic/vue";
import { defineCustomElements } from "@ionic/pwa-elements/loader";



Vue.config.productionTip = false;

Vue.use(Ionic);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");

defineCustomElements(window);
