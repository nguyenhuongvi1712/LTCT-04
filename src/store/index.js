import Vue from "vue";
import Vuex from "vuex";

import products_mock from "../mock/products";
import customers_mock from "../mock/users"

// if (!localStorage.getItem("products"))
// 	localStorage.setItem("products", JSON.stringify(products_mock));
// const products = JSON.parse(localStorage.getItem("products"));
// if (!localStorage.getItem("customers"))
// 	localStorage.setItem("customers", JSON.stringify(customers_mock));
// const customers = JSON.parse(localStorage.getItem("customers"));

const products = products_mock
const users = customers_mock

Vue.use(Vuex);
export const store = new Vuex.Store({
	state: {
		products: products,
        users : users
	},
	getters: {
		products: (state) => state.products,
        users: (state) => state.users
	},
	mutations: {
		addproducts(state, productsList) {
			state.products.push(...productsList);
			localStorage.setItem("products", JSON.stringify(state.products));
		},
	},
});
