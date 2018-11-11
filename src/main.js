import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'

import '../node_modules/materialize-css/dist/css/materialize.min.css'
import '../node_modules/materialize-css/dist/js/materialize.min.js'
import '../node_modules/material-design-icons-iconfont/dist/material-design-icons.css'

// import VueMqtt from '../node_modules/vue-mqtt/dist/build.js'
import VueMqtt from 'vue-mqtt'

let config = {
  mqtt: {
    broker: 'mqtt.littlewan.be',
    port: 9001
  }
}
Vue.use(VueMqtt, `mqtt://${config.mqtt.broker}:${config.mqtt.port}`)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
