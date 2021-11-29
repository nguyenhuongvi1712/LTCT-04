
import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "./components/HomePage.vue"
import Users from "./components/Users.vue"
import Products from "./components/Products.vue"
import Orders from "./components/Orders.vue"
import Report from "./components/Report.vue"

Vue.use(VueRouter);

export const router = new VueRouter({
	routes: [
		{ path: "/", component: HomePage, name: "homepage" },
		{ path: "/product", component: Products, name: "products.index" },
		{ path: "/user", component: Users, name: "users.index" },
		{ path: "/order", component: Orders, name: "orders.index" },
		{ path: "/report", component: Report, name: "report.index" },
	],
});
