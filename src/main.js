import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './plugins/element.js'
import './assets/css/public.css'
import 'swiper/css/swiper.css'
import http from './api/index.js'
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI)
Vue.prototype.http = http

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
