<template>
    <div class="l-todo__header">
        <l-todo-menu :is-show="isFold" />
        <l-icon
            icon="arrow-up"
            :style="arrowDeg"
            class="l-todo__menu-toggle"
            @click="toggleFold"
        />
    </div>
</template>

<script>
import LTodoMenu from './components/menu'

export default {
    name: 'LTodoHeader',
    components: {
        LTodoMenu
    },

    data() {
        return {
            isFold: false
        }
    },

    computed: {
        arrowDeg() {
            return {
                transform: `rotateZ(${this.isFold ? 0 : 180}deg)`
            }
        }
    },

    methods: {
        toggleFold() {
            this.isFold = !this.isFold
        }
    }
}
</script>

<style lang="stylus" scoped>
.l-todo__header
    position relative
    display flex
    justify-content flex-end
    align-items center
    padding 12px
    height 80px

    .l-todo__menu-toggle
        margin-top 6px
        padding 0 18px
        color #6c6c6c + 20%
        font-size 24px
        cursor pointer
        transition .3s ease all

        &:hover
            color #262626
</style>
