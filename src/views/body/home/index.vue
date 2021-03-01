<template>
    <div class="l-todo__home">
        <l-collapse-box
            v-for="{ show, hidden } in appName"
            :key="show + hidden"
            class="l-todo__home__sub-title"
        >
            {{ show }}
            <template v-slot:hover>{{ hidden }}</template>
        </l-collapse-box>
    </div>
</template>

<script>
export default {
    name: 'LTodoHome',
    data() {
        return {
            appName: [
                {
                    show: 'L',
                    hidden: 'azybones'
                },
                {
                    show: 'Todo',
                    hidden: '...'
                }
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
.l-todo__home
    display flex
    justify-content center
    align-items center
    height 100%
    color #fff

    .l-todo__home__sub-title
        ^[1..1] + ^[1..1]
            margin-left 20px

    ::v-deep .l-collapse-box__default-area
        font-size 60px

    ::v-deep .l-collapse-box__hover-area
        font-size 52px
</style>
