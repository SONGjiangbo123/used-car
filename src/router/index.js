import Vue from 'vue'
import Router from 'vue-router'
import Shopping from '../pages/shopping'
import Sellcar from '../pages/sellcar'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/shopping",
      name:"Shopping",
      component:Shopping
    },
    {
      path:"/sellcar",
      name:"Sellcar",
      component:Sellcar
    },
    {
      path:"/shopping",
      redirect: Shopping
    }
    
  ]
})