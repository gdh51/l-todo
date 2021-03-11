<template>
    <l-slide-box height="100%" width="100%" ref="slide-box">
        <template v-for="(panel, index) in calcPanels">
            <l-slide-panel :key="index">
                <l-todo-panel
                    :todos="panel"
                    @add-todo="addTodo"
                    @delete="delTodo"
                    @done="doneTodo"
                    @toggle="toggleTodoOpTab"
                />
            </l-slide-panel>
        </template>
    </l-slide-box>
</template>

<script>
import LTodoPanel from './components/todo-panel'
import { debounce } from 'l-182-ui/src/utils/lazy'
import { on, off } from 'l-182-ui/src/utils/event'
import { useStore } from 'l-182-ui/src/api/store'
import { $modal } from 'l-182-ui'

// eslint-disable-next-line
const [_, updateStore, STORE] = useStore({
    key: 'l-todo'
})

export default {
    name: 'LTodoManager',
    components: {
        LTodoPanel
    },
    data() {
        return {
            singleCardCapacity: 0,
            todoList: []
        }
    },

    computed: {
        calcPanels() {
            const capacity = this.singleCardCapacity
            if (!capacity) return []
            const length = Math.ceil(this.mergedTodoList.length / capacity),
                todoPanels = []

            for (let i = 0; i < length; i++) {
                todoPanels.push(
                    this.mergedTodoList.slice(i * capacity, (i + 1) * capacity)
                )
            }
            return todoPanels
        },
        mergedTodoList() {
            return [
                {
                    uid: 0,
                    add: true
                },
                ...this.todoList
            ]
        }
    },

    methods: {
        calcCapacity(force) {
            // 有了就返回
            if (!force && this.singleCardCapacity) return
            const { width, height } = this.$refs[
                'slide-box'
            ].$refs.view.getBoundingClientRect()

            this.singleCardCapacity =
                Math.floor((width - 40) / 220) * Math.floor((height - 40) / 320)
        },

        addTodo(todo) {
            const todoList = this.todoList,
                lastOne = todoList.slice(-1)

            todoList.push({
                ...todo,
                uid: ((lastOne && lastOne.uid) || 0) + 1,
                isEdit: false
            })

            updateStore({
                key: 'l-todo',
                todoList: this.todoList
            })
        },

        toggleTodoOpTab({ todo, isEdit }) {
            todo.isEdit = isEdit
        },

        doneTodo(todo) {
            console.log(todo)
        },

        async delTodo(todo) {
            const todoIndex = this.todoList.findIndex((t) => t === todo)

            if (todoIndex > -1) {
                const { isConfirm } = await $modal({
                    title: '提示',
                    content: '确定删除该Todo吗?'
                }).pending
                if (!isConfirm) return

                this.todoList.splice(todoIndex, 1)
                updateStore({
                    key: 'l-todo',
                    todoList: this.todoList
                })
            }
        }
    },

    created() {
        const { todoList } = STORE.$store

        // 没有时进行初始化
        if (!todoList) {
            updateStore({
                key: 'l-todo',
                todoList: []
            })
        }

        this.todoList = STORE.$store.todoList
    },

    mounted() {
        this.calcCapacity()
        const cb = debounce(this.calcCapacity, 300).bind(true)
        on(window, 'resize', cb)
        this.$once('hook:destroyed', () => off(window, 'resize', cb))
    }
}
</script>

<style lang="stylus" scoped></style>
