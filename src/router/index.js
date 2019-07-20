import Vue from 'vue'
import Router from 'vue-router'
import Yichenggou from '../pages/yichenggou'
import Jiancebaogao from '../pages/jiancebaogao'
import Canshu from "../pages/canshu"
import Userinfo from "../pages/userinfo"
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
    }
  ]
})
