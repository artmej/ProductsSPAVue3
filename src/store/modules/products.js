import { GET_PRODUCTS } from './mutation-types';
import axios from 'axios';

const captains = console;


export default {
  strict: process.env.NODE_ENV !== 'production',
  namespaced: true,
  state: {
    products: [],
  },
  mutations: {
    [GET_PRODUCTS](state, products) {
      state.products = products;
    },
  },
  actions: {
    async getProductsAction() {
      try {
        axios.get('./data-api/rest/Products')
             .then(function (response) {
               return response;
             })
      } catch (error) {
        captains.error(error);
      }
    },
  },
  getters: {
    products: (state) => state.products,
  },
};