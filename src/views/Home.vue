<template>
    <div class="todo-list">
        <todo-tab />
    </div>
</template>

<script>
import TodoTab from './components/todo-tab/index'

export default {
    name: 'TodoList',
    components: { TodoTab },

    data() {
        return {
            todoList: []
        }
    }
}
</script>

<style lang="stylus" scoped>
.todo-list
    height 100%
</style>
