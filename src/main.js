import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// 上面是默认配置 下面引用插件
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css';
import 'typeface-roboto'
import theme from 'muse-ui/lib/theme';
// theme.use('dark');
theme.add('teal', {
  primary: '#009688',
  secondary: '#ffeb3b',
  success: '#4caf50',
  warning: '#ffeb3b',
}, 'light');
theme.use('teal');

Vue.use(MuseUI)

Vue.prototype.$eventHub= Vue.prototype.$eventHub ||  new Vue()

new Vue({
  router,
  store,
  render: h => h(App),
  data: {
    eventHub: new Vue()
  }
}).$mount('#app')

/* new Vue({
  el: '#app',
  render (h) {
    return h('mu-button', {}, 'Hello World');
  }
}); */