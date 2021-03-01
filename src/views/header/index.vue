<template>
    <div class="l-todo__header">
        <l-menu
            class="l-todo__menu"
            :style="{ top: this.isFold ? '0' : '-56px' }"
            @path-change="changePage"
            routerKey="l-menu"
        >
            <l-menu-item
                v-for="{ name, path } in routes"
                :path="path"
                :key="path"
                >{{ name }}
            </l-menu-item>
        </l-menu>
        <l-icon
            icon="arrow-up"
            :style="arrowDeg"
            class="l-todo__menu-toggle"
            @click="toggleFold"
        />
    </div>
</template>

<script>
import { useRoute, getRouterByKey } from 'l-182-ui/src/utils/implicit-router'
import { routes } from '@/routes'

useRoute({
    key: 'menu',
    routes
})

export default {
    name: 'LTodoHeader',

    data() {
        return {
            isFold: false,
            routes
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
        },

        changePage(path) {
            const router = getRouterByKey('menu')
            router.push(path)
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

    .l-todo__menu
        position absolute
        right 60px
        font-weight 600
        transition .3s ease top

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
