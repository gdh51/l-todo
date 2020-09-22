<template>
    <div class="todo-list">
        <el-card class="todo-list__card_main">
            <div class="todo-list__display">
                <template v-if="todoList.length"></template>
                <template v-else>
                    <i class="el-icon-circle-plus-outline todo-list_empty" />
                </template>
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
    name: 'TodoList',
    components: {},

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

    .todo-list__card_main
        height 100%
        border-color rgba(0, 0, 0, .1)
        background-color transparent

        ::v-deep .el-card__body
            height 100%

            .todo-list__display
                display flex
                justify-content flex-start
                align-items flex-start
                height 100%

                .todo-list_empty
                    align-self center
                    justify-self center
</style>
