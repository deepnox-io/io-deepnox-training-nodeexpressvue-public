import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PostAdd from '../views/post/Add.vue'
import PostView from '../views/post/View.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/post/add',
    name: 'post.add',
    component: PostAdd
  },
  {
    path: '/post/view/:id',
    name: 'post.view',
    component: PostView
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
