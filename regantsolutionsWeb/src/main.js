import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  BootstrapVue,
  render: h => h(App)
}).$mount('#app')
