import Vue from 'vue'
import LContainer from './container.vue'

const Components = [LContainer]

Components.forEach(component => {
    Vue.component(component.name, component)
})
