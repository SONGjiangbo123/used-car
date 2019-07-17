import Vue from 'vue'
import Router from 'vue-router'
import Shopping from '../pages/shopping'
import Percent from '../pages/percent'
import Overflow from '../pages/overflow'
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
      path:"/percent",
      name:"Percent",
      component:Percent
    },
    {
      path:"/overflow",
      name:"Overflow",
      component:Overflow
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
