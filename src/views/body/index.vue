<template>
    <div class="l-todo__body">
        <l-slide-box height="100%" width="100%" ref="slide-box">
            <template v-for="(panel, index) in calcPanels">
                <l-slide-panel :key="index">
                    <l-todo-panel :todos="panel" />
                </l-slide-panel>
            </template>
        </l-slide-box>
    </div>
</template>

<script>
import LTodoPanel from './components/todo-panel'
import { debounce } from 'l-182-ui/src/utils/lazy'
import { on, off } from 'l-182-ui/src/utils/event'

export default {
    name: 'LTodoBody',
    components: {
        LTodoPanel
    },
    data() {
        return {
            singleCardCapacity: 0,
            todoList: [
                {
                    uid: 1,
                    title: '一个十个字的需求l',
                    desc: 'sdasdsada'
                },
                {
                    uid: 2
                },
                {
                    uid: 3
                },
                {
                    uid: 4
                },
                {
                    uid: 5
                },
                {
                    uid: 6
                },
                {
                    uid: 7
                },
                {
                    uid: 8
                },
                {
                    uid: 9
                },
                {
                    uid: 10
                },
                {
                    uid: 11
                },
                {
                    uid: 12
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

<style lang="stylus" scoped>
.l-todo__body
    height calc(100% - 80px)
</style>
