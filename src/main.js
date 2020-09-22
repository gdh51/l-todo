import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './common/style/reset.styl'
import El from 'element-ui'

Vue.config.productionTip = true
Vue.use(El)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
