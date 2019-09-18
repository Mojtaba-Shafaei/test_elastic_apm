import { init as initApm } from "elastic-apm-js-base";
const apm = initApm({
  // Set required service name (allowed characters: a-z, A-Z, 0-9, -, _, and space)
  serviceName: "",
  // Set custom APM Server URL (default: http://localhost:8200)
  serverUrl: "http://localhost:8200"
});
Vue.use(apm);
