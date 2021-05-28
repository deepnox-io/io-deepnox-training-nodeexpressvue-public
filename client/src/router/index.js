import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PostAdd from '../views/post/Add.vue'
import PostView from '../views/post/View.vue'
import PostList from '../views/post/List.vue'
import PostListWithSearch from '../views/post/ListWithSearch.vue'

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
  {
    path: '/post/list',
    name: 'post.list',
    component: PostList
  },
  {
    path: '/post/list-with-search',
    name: 'post.list-with-search',
    component: PostListWithSearch
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
