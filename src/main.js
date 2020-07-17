import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as netlifyIdentityWidget from "netlify-identity-widget";
import Gotrue from "gotrue-js";
import VueFirestore from "vue-firestore";

Vue.config.productionTip = false;

// Netlify identity here
netlifyIdentityWidget.init();

// Add goTrueJS for netlify
export const auth = new Gotrue({
  APIUrl: "https://codigo-qr-dashboard.netlify.app/.netlify/identity",
  setCookie: true,
});

// Initialize Vue Firestore
Vue.use(VueFirestore);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
