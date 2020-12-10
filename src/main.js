import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Home from './components/Home.vue'


Vue.use(Vuex);
Vue.use(VueRouter)

Vue.config.productionTip = false


const router =new VueRouter({

 routes:[
   {
    path:'/',
    component:Home
   }
 ]
  
})


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
