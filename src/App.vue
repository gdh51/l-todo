<template>
    <div id="l-todo__app">
        <div class="app__bg"></div>
        <l-todo-header />
        <l-container class="app__display-area">
            <router-view />
        </l-container>
    </div>
</template>

<script>
import LTodoHeader from './views/components/header/index'

export default {
    name: 'LTodoApp',
    components: {
        LTodoHeader
    }
}
</script>

<style lang="stylus" scoped>
#l-todo__app
    height 100%

    .app__bg
        position fixed
        top 0
        left 0
        z-index -1
        width 100%
        height 100%
        background-image linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, .3)), url('./assets/image/bg.jpg')
        background-position center center
        background-size cover
        background-repeat no-repeat
        opacity 1
        transition opacity .7s

    .app__display-area
        height calc(100% - 60px)
</style>
