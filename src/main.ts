import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";
import vuetify from "./plugins/vuetify";
import "@babel/polyfill";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";

Vue.config.productionTip = false;

import { init as initApm } from "@elastic/apm-rum";

const apm = initApm({
  // Set required service name (allowed characters: a-z, A-Z, 0-9, -, _, and space)
  serviceName: "vuetify-node",
  serviceVersion: "0.90",
  serverUrl: "http://localhost:8200",

  distributedTracingOrigins: ["http://localhost:8080"]
});
export default apm;
Vue.use(apm);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
