import Vue from 'vue'
import Router from 'vue-router'
import Sousuo from '../pages/Sousuo'
import Register from '../pages/Register'
import LocationStr from '../pages/LocationStr'
import Filter from '../pages/Filter'
import Bulekefu from '../pages/Bulekefu'

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
    }
  ]
})
