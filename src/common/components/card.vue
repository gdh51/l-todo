<template>
    <el-card class="todo-card_main" :class="{ 'todo-card_empty': !!empty }">
        <i
            v-if="!empty"
            class="tab__card__rivet"
            :class="done ? 'el-icon-check' : 'el-icon-circle-close'"
            @click="confirmToDone"
        />
        <i class="el-icon-circle-plus-outline" v-else />
        <l-container class="todo-card__content" v-if="!empty">
            <span>
                我具有超长的标题哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦
            </span>
        </l-container>
        <i
            v-if="!empty"
            class="tab__card__rivet el-icon-close card_bottom-fixed"
            @click="delTodo"
        />
    </el-card>
</template>

<script>
export default {
    name: 'TodoCard',

    props: ['todo', 'index', 'empty'],

    data() {
        return {
            done: (this.todo && this.todo.done) || false
        }
    },

    methods: {
        confirmToDone() {
            const { done } = this
            if (done) return this.$emit('done-todo')
            this.done = true
        },

        delTodo() {
            this.$confirm('确定删除该TODO吗?', '提示')
                .then(() => this.$emit('del-todo'))
                .catch(() => {})
        }
    }
}
</script>

<style lang="stylus" scoped>
$body = 'el-card__body'
$color = rgba(255, 255, 255, .2)

.todo-card_main
    position relative
    height 100%
    border-color rgba(0, 0, 0, .1)
    background-color rgba(255, 255, 255, .2)

    ::v-deep .{$body}
        display flex
        flex-direction column
        align-items stretch
        height 100%

        .todo-card__content
            padding 12px 0 24px
            text-align center
            font-size 24px
            font-weight 600
            color rgba(25, 25, 25, .6)

            span
                display -webkit-box
                overflow hidden
                text-overflow ellipsis
                line-height 28px
                letter-spacing 2px
                -webkit-line-clamp 5
                -webkit-box-orient vertical

        .tab__card__rivet
            color $color + rgba(255, 255, 255, .3)
            text-align center
            font-size 20px
            cursor pointer

        .el-icon-check
            color #E95040

        .card_bottom-fixed
            position absolute
            right 0
            bottom 12px
            left 0

.todo-card_empty
    ::v-deep .{$body}
        display flex
        justify-content center
        align-items center
        cursor pointer

        .el-icon-circle-plus-outline
            color $color
            font-size 40px
</style>
