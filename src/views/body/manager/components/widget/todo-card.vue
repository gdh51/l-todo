<template>
    <l-card suspended class="l-todo-card">
        <template v-if="!isAdd">
            <div class="l-todo-card__header">
                <div class="l-todo-card__text-wrapper">{{ shortData.title }}</div>
                <l-icon
                    icon="editalt3"
                    class="l-todo-card_edit"
                    v-if="!isEdit"
                    @click="
                        $emit('toggle', {
                            isEdit: true,
                            todo: shortData
                        })
                    "
                />
            </div>
            <div class="l-todo-card__ctx">
                <l-markdown
                    :text="shortData.desc"
                    class="l-todo-card__text-wrapper"
                    :renderClass="markdownRenderClz"
                />
            </div>
            <div class="l-todo-card__op-tab" v-show="isEdit">
                <l-icon
                    icon="deletealt1"
                    class="l-todo-card__op-icon"
                    @click="$emit('delete', shortData)"
                />
                <l-icon
                    icon="finish"
                    class="l-todo-card__op-icon"
                    @click="$emit('done', shortData)"
                />
                <l-icon
                    icon="close"
                    class="l-todo-card__op-back l-todo-card__op-icon"
                    @click="
                        $emit('toggle', {
                            isEdit: false,
                            todo: shortData
                        })
                    "
                />
            </div>
        </template>
        <div class="l-todo-card__op-add" @click="addTodo" v-else>
            <l-icon icon="add" class="l-todo-card__add-icon" />
        </div>
    </l-card>
</template>

<script>
import { $modal } from 'l-182-ui'
import LTodoAddForm from './todo-add-form'
import LMarkdown from 'l-markdown/lib/l-markdown'

export default {
    name: 'LTodoCard',
    components: {
        LMarkdown
    },
    props: {
        shortData: Object,
        isAdd: Boolean,
        isEdit: Boolean
    },

    data() {
        return {}
    },
    methods: {
        async addTodo() {
            const {
                modal: {
                    slotInstances: {
                        content: { form }
                    }
                },
                isConfirm
            } = await $modal({
                title: '添加Todo',
                content: LTodoAddForm,
                confirm: '添加'
            }).pending

            if (!isConfirm) return

            this.$emit('add-todo', form)
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
    justify-content space-evenly
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
        position relative
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

        .l-todo-card_edit
            position absolute
            right 0
            bottom -11px
            left 0
            font-size 30px
            cursor pointer
            transform translateX(calc(50% - 7.5px))

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
        cursor pointer
        animation changecolor 5s infinite linear

        .l-todo-card__add-icon
            color #fff
            font-size 60px

    .l-todo-card__op-tab
        hover-panel()
        background-color rgba(0, 0, 0, .6)
        color rgba(255, 255, 255, .8)

        .l-todo-card__op-icon
            font-size 30px
            cursor pointer

            ^[2..2] + ^[2..2]
                margin-left 8px

            &.l-todo-card__op-back
                position absolute
                top 65px
                margin-left 0
</style>
