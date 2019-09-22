import Vue from 'vue'
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    ADD_PRODUCT(state, product) {
      state.products.push(product);
    },
    SET_PRODUCTS(state, products) {
      state.products = products;
    }
  },
  actions: {
    addProduct(context, payload) {
      context.commit('ADD_PRODUCT', payload);
    },
    async fetchProducts(context){
      await axios.get('http://localhost:3000/products').then(res => context.commit('SET_PRODUCTS', res.data));
    }
  }
})
