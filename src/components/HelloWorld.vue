<template>
  <v-container>
    <v-btn @click="gotoPage1" class="primary">goto page 1</v-btn>
    <v-btn @click="gotoPage2" class="primary">goto page 2</v-btn>
    <v-btn @click="gotoPage3" class="primary">goto page 3</v-btn>
    <v-btn @click="load_api_data" class="primary text-capitalize"
      >Load API</v-btn
    >
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
const axios = require("axios");
export default Vue.extend({
  data: () => ({}),
  methods: {
    gotoPage1() {
      this.$router.push("/Page1");
    },
    gotoPage2() {
      this.$router.push("/Page2");
    },
    gotoPage3() {
      this.$router.push("/Page3");
    },
    load_api_data() {
      axios.get("https://testapi.io/api/Mojtaba-Shafaei/users")
              .then(value => console.log(value.status + ' '+ value ));
    }
  }
});
</script>
