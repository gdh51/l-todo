<template>
    <l-card suspended class="l-todo-card">
        <div class="l-todo-card__header">
            <div class="l-todo-card__text-wrapper">{{ shortData.title }}</div>
        </div>
        <div class="l-todo-card__ctx">
            <div class="l-todo-card__text-wrapper">{{ shortData.desc }}</div>
        </div>
        <div class="l-todo-card__op-add">
            <l-icon icon="add" class="l-todo-card__add-icon" @click="addTodo" />
        </div>
        <!-- <div class="l-todo-card__op-tab">
            <l-icon icon="deletealt1" class="l-todo-card__op-icon" />
        </div>-->
    </l-card>
</template>

<script>
import { $modal } from 'l-182-ui'
import LTodoAddForm from './todo-add-form'

export default {
    name: 'LTodoCard',
    props: {
        shortData: Object,
        isAdd: Boolean
    },

    data() {
        return {}
    },
    methods: {
        addTodo() {
            $modal({
                title: '添加Todo',
                content: LTodoAddForm
            })
        }
    }
}
</script>

<style lang="stylus" scoped>
$step-one = #7affaf
$step-two = #70b991
$step-three = #7a88ff

@keyframes changecolor
    0%
        background-position 0% 0%

    50%
        background-position 50% 0

    100%
        background-position 100% 0

hover-panel()
    position absolute
    top 0
    right 0
    bottom 0
    left 0
    display flex
    justify-content center
    align-items center
    border-radius 5px
    cursor default

ellipsisMultiple()
    display -webkit-box
    overflow hidden
    text-overflow ellipsis
    -webkit-box-orient vertical

.l-todo-card
    position relative
    display flex
    flex-direction column
    background-color rgba(94, 72, 170, .7) !important

    .l-todo-card__header
        padding 8px
        width 100%
        height 80px
        border-radius 9px
        background-color rgba(72, 155, 159, .8)
        color rgba(255, 255, 255, .8)
        font-size 20px
        line-height 22px

        .l-todo-card__text-wrapper
            -webkit-line-clamp 3
            ellipsisMultiple()

    .l-todo-card__ctx
        flex 1
        overflow hidden
        padding 8px
        width 100%
        font-size 18px
        line-height 20px

        .l-todo-card__text-wrapper
            -webkit-line-clamp 10
            ellipsisMultiple()
            color rgba(255, 255, 255, .8)

    .l-todo-card__op-add
        hover-panel()
        background-image linear-gradient(45deg, $step-one, $step-two, $step-three, $step-one, $step-two)
        background-size 1000% 200%
        animation changecolor 5s infinite linear

        .l-todo-card__add-icon
            color #fff
            font-size 60px
            cursor pointer

    .l-todo-card__op-tab
        hover-panel()
        background-color rgba(0, 0, 0, .6)
        color rgba(255, 255, 255, .8)

        .l-todo-card__op-icon
            font-size 30px
            cursor pointer
</style>
