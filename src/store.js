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
    pageTopic: 1, // 请求的第几页每次请求不同接口要重置为1
    today: {},
    read: {
      pageRead: 1,
      category: ['前端', 'Android', 'iOS', '休息视频', '拓展资源', 'all', '福利'],
      readdata: [] // .results
    },
    categories: {},
    subcategories: {},
    subdata: [],
    id: ''
  },
  getters: {
    getSubdataConent: state => (cid) => {
      if (cid !=="") {
        let content = state.subdata.find(v => v._id === cid).content
        if ( content !=="" ) {
          return content
        } else {
          return '暂无正文预览'
        }
      } else {
        return ''
      }
    }
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
        state.pageTopic = params.page
      } else {
        // state.subdata = params.data
        state.subdata = [...state.subdata, ...params.data]
        state.pageTopic = params.page
      }
    },
    setReaddata(state, params) {
      if ( params.page === 1 ) {
        state.read.readdata = params.data
        state.read.id = params.id
        state.read.pageRead = params.page
      } else {
        state.read.readdata = [...state.read.readdata, ...params.data]
        state.read.pageRead = params.page
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
      return new Promise(function(resolve) {
        axios({
          method: 'get',
          url: '/xiandu/category/' + sub
        }).then(function (response) {
          commit("setSubcategories", response.data)
          console.log(response.data)
          resolve(response.data);
        });
      })
    },
    getSubdata({ commit }, {id, page}) {
      return new Promise(function(resolve) {
        axios({
          method: 'get',
          url: '/xiandu/data/id/' + id + '/count/' + count + '/page/' + page
        }).then(function (response) {
          if ( page === 1 ) {
            commit( "setSubdata", {data: response.data.results, id: id, page: page} )
          } else {
            commit( "setSubdata", {data: response.data.results, id: id, page: page} )
          }
          resolve("ok");
        })
      });
    },
    getReaddata( {commit}, {id, page} ) {
      return new Promise( (resolve) => {
        axios({
          method: 'get',
          url: '/data/' + id + '/' + count + '/' + page // https://gank.io/api/data/Android/3/1
        }).then( (response) => {
          console.log(response.data.results)
          commit( "setReaddata", {data: response.data.results, id: id, page: page})
          resolve("ok")
        } )
      } )
    }
  }
})
