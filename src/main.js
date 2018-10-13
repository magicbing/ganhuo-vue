import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// 上面是默认配置 下面引用插件
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css';
import 'typeface-roboto'
Vue.use(MuseUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

/* new Vue({
  el: '#app',
  render (h) {
    return h('mu-button', {}, 'Hello World');
  }
}); */