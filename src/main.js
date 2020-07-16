import Vue from 'vue'
import App from './App'

import router from './router'
import store from './store'

import './plugins'

import './axios'

// import styles
import './assets/css/global.css'
import './assets/css/me.css'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')