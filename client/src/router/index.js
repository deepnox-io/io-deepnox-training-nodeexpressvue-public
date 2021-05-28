import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PostAdd from '../views/post/Add.vue'

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
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
