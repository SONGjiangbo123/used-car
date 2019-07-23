import Vue from 'vue'
import Router from 'vue-router'
import Yichenggou from '../pages/yichenggou'
import Jiancebaogao from '../pages/jiancebaogao'
import Canshu from "../pages/canshu"
import Userinfo from "../pages/userinfo"
import LocationStr from '../pages/LocationStr'
import Serve from '../pages/serve'
import Sousuo from '../pages/Sousuo'
import Register from '../pages/Register'
import Filter from '../pages/Filter'
import Bulekefu from '../pages/Bulekefu'
import Index from '../pages/index'
import Shopping from '../pages/shopping'
import Page from '../pages/page'
import Sellcar from '../pages/sellcar'
import Contract from '../pages/contract'
import Videodetection from '../pages/videodetection'
import Goodcar from '../pages/goodcar'
import Valuable from '../pages/valuable'
import Home from '../pages/home'
import Brand from '../pages/brand'
import Carinfo from '../pages/carinfo'
import Wenti from '../pages/wenti'
import Xieyi from '../pages/xieyi'
import Sfyz from '../pages/sfyz'
import Shangchuan from '../pages/shangchuan'
import Staler from '../pages/staler'
import Datails from '../pages/datails'
import Login from '../pages/login'
import Zhao from '../pages/zhao'
import Shoppingcart from '../pages/shoppingcart'
import All from '../pages/all'
import Cart from '../pages/cart'
import Inquiry from '../pages/inquiry'

Vue.use(Router)

export default new Router({
  routes: [
    
    {
      path: '/zhao',
      name: 'Zhao',
      component:Zhao
    },
    {
      path: '/login',
      name: 'Login',
      component:Login
    },
    {
      path: '/staler',
      name: 'Staler',
      component: Staler
    },
  
    {
      path: '/carinfo',
      name: 'Carinfo',
      component: Carinfo
    },
    {
      path: '/wenti',
      name: 'Wenti',
      component: Wenti
    },
    {
      path: '/xieyi',
      name: 'Xieyi',
      component: Xieyi
    },
    {
      path: '/sfyz',
      name: 'Sfyz',
      component: Sfyz
    },
    {
    path: '/shangchuan',
    name: 'Shangchuan',
    component: Shangchuan
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
        path:"/page/:id",
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
        path: '/shoppingcart/cart',
        name: 'Shoppingcart',
        component: Shoppingcart,
        children:[
          {
            path: '/shoppingcart/all',
            name: 'All',
            component: All
          },
          {
            path: '/shoppingcart/cart',
            name: 'Cart',
            component: Cart
          },
          {
            path: '/shoppingcart/inquiry',
            name: 'Inquiry',
            component: Inquiry
          }
        ],redirect:'shoppingcart/cart'
      },
      
      {
      path:'/yichenggou',
        name:'Yichenggou',
        component: Yichenggou
      },
      {
      path:'/jiancebaogao',
        name:'Jiancebaogao',
        component: Jiancebaogao
      },
      {
        path:'/canshu',
        name:'Canshu',
        component:Canshu
      },
      {
        path:"/userinfo",
        name:"/Userinfo",
        component:Userinfo
      
      },

      {
        path: '/datails',
        name: 'Datails',
        component: Datails
      },
      
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
        path: '/serve',
        name: 'Serve',
        component: Serve
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
        path:"/*",redirect:"/index"
      }
  ]
})
