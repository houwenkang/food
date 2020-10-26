import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Detail from '../views/Detail.vue'
import Video from '../views/Video.vue'
import Cooking from '../views/Cooking.vue'
import Eggs from '../views/Eggs.vue'
import Meat from '../views/Meat.vue'
import Condi from '../views/Condi.vue'
import Nuts from '../views/Nuts.vue'
import Kitchen from '../views/Kitchen.vue'
import Flavor from '../views/Flavor.vue'
import Cosplay from '../views/Cosplay.vue'
import Holoday from '../views/Holoday.vue'
import Movie from '../views/Movie.vue'
import Search from '../views/Search.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/detail/:id?',
    name:'Detail',
    component:Detail
  },
  {
    path:'/video/:id?',
    name:'Video',
    component:Video
  },
  {
    path:'/cooking',
    name:'Cooking',
    component:Cooking
  },
  {
    path:'/eggs',
    name:'Eggs',
    component:Eggs
  },
  {
    path:'/meat',
    name:'Meat',
    component:Meat
  },
  {
    path:'/condi',
    name:'Condi',
    component:Condi
  },
  {
    path:'/nuts',
    name:'Nuts',
    component:Nuts
  },
  {
    path:'/kitchen',
    name:'kitchen',
    component:Kitchen
  },
  {
    path:'/flavor',
    name:'Flavor',
    component:Flavor
  },
  {
    path:'/cosplay',
    name:'Cosplay',
    component:Cosplay
  },
  {
    path:'/holoday',
    name:'Holoday',
    component:Holoday
  },
  {
    path:'/movie',
    name:'Movie',
    component:Movie
  },
  {
    path:'/search/:keyword?',
    name:'Search',
    component:Search
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
