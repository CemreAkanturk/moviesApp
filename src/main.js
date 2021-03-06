import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import RouterPath from './router/router'
import StoreOptions from './stores/store'
import vSelect from 'vue-select'





Vue.use(Vuex);
Vue.use(VueRouter)

Vue.config.productionTip = false

Vue.component('v-select', vSelect)


const router =new VueRouter(RouterPath)
const store = new Vuex.Store(StoreOptions)


new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
