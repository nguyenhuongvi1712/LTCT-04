import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Element from "element-ui";
import { BootstrapVue, IconsPlugin, BootstrapVueIcons } from "bootstrap-vue";
import { LayoutPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(LayoutPlugin);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(BootstrapVueIcons)

Vue.use(Element, { size: "small", zIndex: 3000 });
Vue.config.productionTip = false;
Vue.use(VueRouter);
import { router } from "./routes";
import { store } from "./store";
new Vue({
  render: (h) => h(App),
  router,
  store
}).$mount("#app");
