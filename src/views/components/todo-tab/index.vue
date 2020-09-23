<template>
    <el-card class="todo-tab__card_main">
        <transition-group tag="div" class="todo-tab__display" mode="out-in">
            <todo-card
                v-for="(todo, index) in todoList"
                :key="todo.uid"
                v-bind="{ todo, index }"
                @done-todo="doneTodo(todo, index)"
            ></todo-card>
            <todo-card
                @click.native="addTodo"
                v-if="todoList.length !== MAX_CARD_NUM"
                :key="0"
                :empty="true"
            />
        </transition-group>
    </el-card>
</template>

<script>
import { genUid } from '@/utils'

const MAX_CARD_NUM = 12

export default {
    name: 'TodoTab',
    data() {
        return {
            todoList: [],
            MAX_CARD_NUM
        }
    },

    methods: {
        addTodo() {
            if (this.todoList.length < 12) {
                this.todoList.push({
                    uid: genUid(),
                    done: false
                })
            }
        },

        doneTodo(todo, index) {
            this.todoList.splice(index, 1)
        }
    }
}
</script>

<style lang="stylus" scoped>
$body = 'el-card__body'
$color = rgba(255, 255, 255, .2)

.todo-tab__card_main
    height 100%
    border-color rgba(0, 0, 0, .1)
    background-color transparent

    ::v-deep .{$body}
        height 100%

        .todo-tab__display
            display grid
            justify-content space-around
            align-content center
            height 100%
            // column-gap 24px
            grid-template-columns repeat(6, 180px)
            grid-template-rows repeat(2, 250px)
            row-gap 24px
</style>
