<template>
    <form class="l-todo__add-form">
        <label class="l-todo__form-label">
            简介标题：
            <l-input v-model="form.title" class="l-todo__form-input" />
        </label>
        <label class="l-todo__form-label">
            具体描述：
            <l-input
                type="textarea"
                :auto-size="{ minRow: 3 }"
                v-model="form.desc"
                class="l-todo__form-input"
            />
        </label>
    </form>
</template>

<script>
export default {
    name: 'LTodoAddForm',
    data() {
        return {
            form: {
                title: '',
                desc: '',
                cT: Date.now(),
                uT: Date.now()
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
.l-todo__add-form
    padding 16px

    .l-todo__form-label
        display flex
        align-items center

        ^[1..1] + ^[1..1]
            margin-top 8px

        .l-todo__form-input
            flex 1
</style>
