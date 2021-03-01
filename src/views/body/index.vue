<template>
    <div class="l-todo__body">
        <keep-alive>
            <implicit-router-view routerKey="menu" />
        </keep-alive>
    </div>
</template>

<script>
import ImplicitRouterView from 'l-182-ui/src/utils/implicit-router/components/view'

export default {
    name: 'LTodoBody',
    components: {
        ImplicitRouterView
    },
    data() {
        return {}
    }
}
</script>

<style lang="stylus" scoped>
.l-todo__body
    height calc(100% - 80px)
</style>
