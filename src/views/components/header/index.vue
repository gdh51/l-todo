<template>
    <div class="l-header__menu">
        <el-menu
            mode="horizontal"
            :default-active="activeIndex"
            background-color="transparent"
            router
        >
            <el-menu-item index="/">主页</el-menu-item>
            <el-menu-item index="2">任务中心</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
    name: 'LTodoHeader',

    data() {
        return {
            activeIndex: '1'
        }
    }
}
</script>

<style lang="stylus" scoped>
.l-header__menu
    ::v-deep .el-menu--horizontal.el-menu
        display flex
        justify-content flex-end
        border-bottom none

        .el-menu-item
            background-color transparent !important
</style>
