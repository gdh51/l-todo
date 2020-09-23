import Vue from 'vue'
import LContainer from './container.vue'
import TodoCard from './card.vue'

const Components = [LContainer, TodoCard]

Components.forEach(component => {
    Vue.component(component.name, component)
})
