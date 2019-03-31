import Vue from 'vue'
import App from './App.vue'
import http from 'vue-resource';
import router from './router';

Vue.config.productionTip = false
Vue.use(http);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
