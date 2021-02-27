<template>
    <l-card suspended class="l-todo-card">
        <div class="l-todo-card__header">
            <div class="l-todo-card__text-wrapper">{{ shortData.title }}</div>
        </div>
        <div class="l-todo-card__ctx">
            <div class="l-todo-card__text-wrapper">{{ shortData.desc }}</div>
        </div>
        <div class="l-todo-card__op-tab">
            <l-icon icon="deletealt1" class="l-todo-card__op-icon" />
        </div>
    </l-card>
</template>

<script>
import a, { $alert } from 'l-182-ui'

console.log(a, $alert)
export default {
    name: 'LTodoCard',
    props: {
        shortData: Object
    },

    data() {
        return {}
    }
}
</script>

<style lang="stylus" scoped>
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

    .l-todo-card__op-tab
        position absolute
        top 0
        right 0
        bottom 0
        left 0
        display flex
        justify-content center
        align-items center
        border-radius 5px
        background-color rgba(0, 0, 0, .6)
        color rgba(255, 255, 255, .8)
        cursor default

        .l-todo-card__op-icon
            font-size 24px
            cursor pointer
</style>
