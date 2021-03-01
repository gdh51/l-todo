<template>
    <div class="l-todo__panel">
        <l-card class="l-todo__list" ref="wrapper-card">
            <l-todo-card
                v-for="todo in todos"
                :key="todo.uid"
                :shortData="todo"
                :is-add="todo.add"
                class="l-todo__list-card"
                suspended
            />
        </l-card>
    </div>
</template>

<script>
import LTodoCard from './widget/todo-card'

export default {
    name: 'LTodoPanel',
    components: {
        LTodoCard
    },

    props: {
        todos: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {}
    }
}
</script>

<style lang="stylus" scoped>
.l-todo__panel
    padding 20px
    width 100%
    height 100%

    .l-todo__list
        display grid
        justify-content center
        align-items center
        align-content center
        width 100%
        height 100%
        background-color rgba(191, 191, 191, .4)
        justify-items center
        grid-template-columns repeat(auto-fill, 220px)
        grid-template-rows repeat(auto-fill, 320px)

        .l-todo__list-card
            width 200px
            height 300px
            background-color rgba(255, 255, 255, .4)
            white-space normal
</style>
