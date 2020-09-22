import Vue from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'
import './common/style/var.styl'
import './common/style/reset.styl'
import El from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './common/components'

Vue.config.productionTip = true
Vue.use(El)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
