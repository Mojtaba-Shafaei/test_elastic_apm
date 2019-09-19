import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";
import vuetify from "./plugins/vuetify";
import "@babel/polyfill";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";
import { init as initApm } from "@elastic/apm-rum";

Vue.config.productionTip = false;
const apm = initApm({
  // Set required service name (allowed characters: a-z, A-Z, 0-9, -, _, and space)
  serviceName: "apm-server",
  // Set custom APM Server URL (default: http://localhost:8200)
  serverUrl: "http://localhost:8200"
});

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");

Vue.use(apm);
