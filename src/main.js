// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import 'swiper/dist/css/swiper.css';
Vue.config.productionTip = false
import axios from 'axios'
Vue.prototype.axios = axios;
Vue.use(MintUI)

require('./mock')//main.js引用模拟数据


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
