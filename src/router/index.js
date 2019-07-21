import Vue from 'vue'
import Router from 'vue-router'
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
import LocationStr from '../pages/LocationStr'
import Shoppingcart from '../components/shopping/shoppingcart.vue'

Vue.use(Router)

export default new Router({
  routes: [
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
