import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'

import '../node_modules/materialize-css/dist/css/materialize.min.css'
import '../node_modules/materialize-css/dist/js/materialize.min.js'
import '../node_modules/material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
