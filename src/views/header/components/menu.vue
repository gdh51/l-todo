<template>
    <ul class="l-todo__menu" :style="{ top: this.isShow ? '12px' : '-56px' }">
        <li class="l-todo__menu-item">首页</li>
        <li class="l-todo__menu-item">历史任务</li>
        <li class="l-todo__menu-item">管理任务</li>
    </ul>
</template>

<script>
export default {
    name: 'LTodoMenu',

    props: ['isShow']
}
</script>

<style lang="stylus" scoped>
.l-todo__menu
    position absolute
    right 60px
    display flex
    justify-content flex-end
    height 56px
    transition .3s ease top

    .l-todo__menu-item
        margin 0 2px
        padding 0 16px
        border 1px dashed transparent
        border-radius 5px
        color #6c6c6c + 20%
        line-height 56px
        cursor pointer
        transition .3s ease border
        user-select none

        &:hover
            border 1px dashed #fff
            color #fff
</style>
