import Vue from 'vue'
import Router from 'vue-router'
import Yichenggou from '../pages/yichenggou'
import Jiancebaogao from '../pages/jiancebaogao'
import Canshu from "../pages/canshu"
import Userinfo from "../pages/userinfo"

import LocationStr from '../pages/LocationStr'
import Serve from '../pages/serve'
import Datails from '../pages/datails'
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
import Shoppingcart from '../components/shopping/shoppingcart'

Vue.use(Router)

export default new Router({
  routes: [
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
      path: '/brand',
      name: 'Brand',
      component: Brand
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
      path: '/locationStr',
      name: 'LocationStr',
      component: LocationStr
    },
  
    {
      path: '/serve',
      name: 'Serve',
      component: Serve
    },
    {
      path: '/*',
      name: 'Home',
      component: Home
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
      path: '/shoppingcart',
      name: 'Shoppingcart',
      component: Shoppingcart
    },
    {
      path:"/*",redirect:"/index"
    }
  ]
})
