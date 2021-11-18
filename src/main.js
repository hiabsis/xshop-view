import ElementUI from 'element-ui' //新添加
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
// import VueAxios from 'vue-axios';

import Vue from 'vue'
import App from './App.vue'

Vue.use(axios);
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$http = axios
new Vue({

  render: h => h(App)
}).$mount('#app')
