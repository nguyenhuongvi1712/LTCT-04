import Vue from "vue";
import Vuex from "vuex";

import products_mock from "../mock/products";

if (!localStorage.getItem("productss"))
	localStorage.setItem("products", JSON.stringify(products_mock));
const products = JSON.parse(localStorage.getItem("products"));
Vue.use(Vuex);
export const store = new Vuex.Store({
	state: {
		products: products,
	},
	getters: {
		products: (state) => state.products,
	},
	mutations: {
		addproducts(state, productsList) {
			state.products.push(...productsList);
			localStorage.setItem("products", JSON.stringify(state.products));
		},
	},
});
