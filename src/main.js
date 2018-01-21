// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'normalize.css'
import './assets/css/style.css'
import Vue from 'vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import axios from 'axios'
import api from './js/api-config'
import {domain} from './js/api-config'
import dateFilter from './filter'
import store from './store'
Vue.use(Vuex)
Vue.use(ElementUI)
Vue.use(dateFilter)

axios.defaults.baseURL=domain;
axios.defaults.withCredentials = true;
Vue.prototype.$http = axios;
Vue.prototype.$api = api;
Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  created () {
    this.$http.get(this.$api.isLogin).then(res=>console.log(res));
  },
  store:new Vuex.Store(store)
})
