import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      // component: () => import( './views/Today.vue' )
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/today/:category',
      name: 'today',
      component: () => import(/* webpackChunkName: "about" */  './views/Today.vue' )
    },
    {
      path: '/topic/:category',
      name: 'topic',
      component: () => import( './views/Topic.vue' )
    },
    {
      path: '/test',
      name: 'test',
      component: () => import( './views/Test.vue' )
    }
  ]
})
