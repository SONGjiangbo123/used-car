import Vue from 'vue'
import Router from 'vue-router'
import Contract from '../pages/contract'
import Videodetection from '../pages/videodetection'
import Goodcar from '../pages/goodcar'

Vue.use(Router)

export default new Router({
  routes: [
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
      path: '/*',
      redirect:'/contract'
    }
  ]
})
