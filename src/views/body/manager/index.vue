<template>
    <l-slide-box height="100%" width="100%" ref="slide-box">
        <template v-for="(panel, index) in calcPanels">
            <l-slide-panel :key="index">
                <l-todo-panel :todos="panel" />
            </l-slide-panel>
        </template>
    </l-slide-box>
</template>

<script>
import LTodoPanel from './components/todo-panel'
import { debounce } from 'l-182-ui/src/utils/lazy'
import { on, off } from 'l-182-ui/src/utils/event'

export default {
    name: 'LTodoManager',
    components: {
        LTodoPanel
    },
    data() {
        return {
            singleCardCapacity: 0,
            todoList: [
                {
                    uid: 0,
                    add: true
                }
            ]
        }
    },

    computed: {
        calcPanels() {
            const capacity = this.singleCardCapacity
            if (!capacity) return []
            const length = Math.ceil(this.todoList.length / capacity),
                todoPanels = []

            for (let i = 0; i < length; i++) {
                todoPanels.push(
                    this.todoList.slice(i * capacity, (i + 1) * capacity)
                )
            }
            return todoPanels
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
        }
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
