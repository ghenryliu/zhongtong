import Vue from 'vue'

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.scss' // global css

import App from './App'

import router from './router'



import './icons' // icon


import Mint from 'mint-ui';     //import mint
import 'mint-ui/lib/style.css';  //import mint



import Axios from  'axios'  //新增
Vue.prototype.$axios = Axios;



Vue.use(Element, {
  size: Cookies.get('size') || 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})

// register global utility filters.
// Object.keys(filters).forEach(key => {
//   Vue.filter(key, filters[key])
// })

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  //store,
  //i18n,
  render: h => h(App)
})
