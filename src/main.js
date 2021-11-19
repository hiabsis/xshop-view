import ElementUI from 'element-ui' //
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

import VueRouter from 'vue-router'
// import routers from './routers'

// 创建的 router 对象
// const router = new VueRouter({
//   mode: 'history',
//   routes: routers
// })


import Vue from 'vue'
import App from './App.vue'

Vue.use(VueRouter)
Vue.use(axios);
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$http = axios
new Vue({
  // router,
  render: h => h(App)
}).$mount('#app')
