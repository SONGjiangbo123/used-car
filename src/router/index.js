import Vue from 'vue'
import Router from 'vue-router'
import Sousuo from '../pages/Sousuo'
import Register from '../pages/Register'
import LocationStr from '../pages/LocationStr'
import Filter from '../pages/Filter'
import Bulekefu from '../pages/Bulekefu'
import Index from '../pages/index.vue'
import Shopping from '../pages/shopping'
import Page from '../pages/page'
import Sellcar from '../pages/sellcar'
import Contract from '../pages/contract'
import Videodetection from '../pages/videodetection'
import Goodcar from '../pages/goodcar'
import Valuable from '../pages/valuable'
import Home from '../pages/home'
import Brand from '../pages/brand'
import Shoppingcart from '../components/shopping/shoppingcart.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/sousuo',
      name: 'Sousuo',
      component: Sousuo
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/locationStr',
      name: 'LocationStr',
      component: LocationStr
    },
    {
      path: '/filter',
      name: 'Filter',
      component: Filter
    },
    {
      path: '/bulekefu',
      name: 'Bulekefu',
      component: Bulekefu
    },
      {
        path:"/index",
        name:"Index",
        component:Index
      },
      {
        path:"/shopping",
        name:"Shopping",
        component:Shopping
      },
      {
        path:"/page",
        name:"Page",
        component:Page
      },
      {
        path:"/sellcar",
        name:"Sellcar",
        component:Sellcar
      },
      {
        path: '/contract',
        name: 'Contract',
        component: Contract
      },
      { 
        path: '/videodetection',
        name: 'Videodetection',
        component: Videodetection
      },
      { 
        path: '/goodcar',
        name: 'Goodcar',
        component: Goodcar
      },
      {
        path: '/valuable',
        name: 'Valuable',
        component: Valuable
      },
      {
        path: '/brand',
        name: 'Brand',
        component: Brand
      },
      {
        path: '/locationStr',
        name: 'LocationStr',
        component: LocationStr
      },
      {
        path: '/home',
        name: 'Home',
        component: Home
      },
      {
        path: '/shoppingcart',
        name: 'Shoppingcart',
        component: Shoppingcart
      },
      {
        path:"/*",redirect:"/index"
      }
  ]
})
