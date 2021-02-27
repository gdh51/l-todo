import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './common/style/var.styl'
import './common/style/reset.styl'
import './common/components'
import 'animate.css'
import L182Ui from 'l-182-ui'

Vue.config.productionTip = true
Vue.use(L182Ui)

new Vue({
    store,
    render: h => h(App)
}).$mount('#app')
