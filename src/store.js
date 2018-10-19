import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'
axios.defaults.baseURL = 'https://gank.io/api';
Vue.use(Vuex)

const count = 3 // 每次请求几条数据
// let page = 1 // 请求的第几页每次请求不同接口要重置为1
export default new Vuex.Store({
  state: {
    // count: 2, //this.state.count
    page: 1, // 请求的第几页每次请求不同接口要重置为1
    today: {},
    categories: {},
    subcategories: {},
    subdata: [],
    id: ''
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
    },
    setSubdata(state, params) {
      console.log(params)
      if ( params.page === 1 ) {
        state.subdata = params.data
        state.id = params.id
        state.page = params.page
      } else {
        // state.subdata = params.data
        state.subdata = [...state.subdata, ...params.data]
        state.page = params.page
      }
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
    },
    getSubdata({ commit }, {id, page}) {
      axios({
        method: 'get',
        url: '/xiandu/data/id/' + id + '/count/' + count + '/page/' + page
      }).then(function (response) {
        if ( page === 1 ) {
          commit( "setSubdata", {data: response.data.results, id: id, page: page} )
        } else {
          commit( "setSubdata", {data: response.data.results, id: id, page: page} )
        }
        // console.log(response.data.results[0].title), page: page
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
