import Vue from 'vue'
import App from './App'

import router from './router'
import store from './store'

import './plugins'

import './axios'

// import styles
import './assets/css/fontawesome-all.min.css'
import './assets/css/main.css'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')