import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home'
// import Hundred from '../pages/hundred'
import Brand from '../pages/brand'
import LocationStr from '../pages/LocationStr'
import Serve from '../pages/serve'
import Datails from '../pages/datails'




Vue.use(Router)

export default new Router({
  routes: [

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
      path: '/locationStr',
      name: 'LocationStr',
      component: LocationStr
    }
    ,
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
  ]
})
