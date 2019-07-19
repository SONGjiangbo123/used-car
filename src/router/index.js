import Vue from 'vue'
import Router from 'vue-router'
import Contract from '../pages/contract'
import Videodetection from '../pages/videodetection'
import Goodcar from '../pages/goodcar'
import Valuable from '../pages/valuable'
import Guide from '../pages/guide'
import Details from '../pages/details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/guide',
      name: 'Guide',
      component: Guide
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
      path: '/details/:id',
      name: 'Details',
      component: Details
    },
    {
      path: '/*',
      redirect:'/contract'
    }
  ]
})
