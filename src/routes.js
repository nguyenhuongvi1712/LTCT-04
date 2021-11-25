
import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "./components/HomePage.vue"
import Users from "./components/Users.vue"
import Products from "./components/Products.vue"
Vue.use(VueRouter);

export const router = new VueRouter({
  routes: [
    { path: "/", component: HomePage, name: "homepage" },
    { path: "/product", component: Products, name: "products.index"},
    { path: "/user",component: Users,name: "users.index"}
  ],
});
