import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'
axios.defaults.baseURL = 'https://gank.io/api';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    today: {},
    categories: {},
    subcategories: {}
  },
  mutations: {
    setToday(state, data) {
      state.today = data
    },
    setCategories(state, data) {
      state.categories = data
    },
    setSubcategories(state, data) {
      state.subcategories = data
    }
  },
  actions: {
    getToday({ commit }) {
      axios({
        method: 'get',
        url: '/today'
      }).then(function (response) {
        commit("setToday", response.data)
        console.log(response.data)
      });
    },
    getCategories({ commit }) {
      axios({
        method: 'get',
        url: '/xiandu/categories'
      }).then(function (response) {
        commit("setCategories", response.data)
        console.log(response.data)
      });
    },
    getSubcategories({ commit }, sub) {
      axios({
        method: 'get',
        url: '/xiandu/category/' + sub
      }).then(function (response) {
        commit("setSubcategories", response.data)
        console.log(response.data)
      });
    }
    /////// 例子: 
    /* saveFrom(context) {
      axios({
        method: 'post',
        url: '/user',
        data: context.state.test02
      })
    } */
    /* 在组件中发送请求的时候，需要使用 this.$store.dispatch 来分发
    methods: {
      submitForm () {
        this.$store.dispatch('saveForm')
      }
    }
    submitForm 是绑定在组件上的一个方法，将触发 saveForm，从而通过 axios 向服务器发送请求 
    */

  }
})
