import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import VueRouter from "vue-router";
import Vuex from "vuex";
import Details from "./components/CountryDetails.vue";
import Country from "./components/CountryList.vue";

Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [
  { path: "/details/:name", component: Details },
  { path: "/", component: Country },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
