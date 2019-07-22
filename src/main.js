// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import axios from 'axios'
import MintUI from 'mint-ui'

Vue.prototype.axios = axios

require("./mock");
Vue.use(ElementUI)



import 'mint-ui/lib/style.css'

// import 'swiper/dist/js/sweper.min.js'

Vue.use(MintUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
