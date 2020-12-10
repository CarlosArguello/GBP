import Vue from 'vue'
import HomePage from '@pages/homePage.vue'
import '@assets/styles/index.css';

Vue.config.productionTip = false


new Vue({
  render: h => h(HomePage),
}).$mount('#app')
