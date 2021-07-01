import Vue from 'vue'
import store from './store'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from "./router";

Vue.config.productionTip = false

new Vue({
  el: '#app',
  vuetify,
  store,
  router,
  render: h => h(App)
})
