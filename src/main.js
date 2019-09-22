import Vue from 'vue'
// import Vuex from 'vuex';
import VeeValidate from 'vee-validate';
import store from '@/store'

import App from './App.vue'
Vue.use(VeeValidate);
Vue.config.productionTip = false


new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
