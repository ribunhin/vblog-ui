<template>
    <div>
        <Header ref="header"/>
        <AppMain ref="app-main"/>
        <Footer ref="footer"/>
    </div>
</template>

<script>
    import {Header, AppMain, Footer} from './components'

    export default {
        name: 'Layout',
        components: {
            Header,
            AppMain,
            Footer,
        },
        created() {},
        mounted() {
            this.$nextTick(this.onLoad)
        },
        methods: {
            onLoad() {
                // $footer.insertAfter($main)  //980px
                // $footer.appendTo($header)
            }
        }
    }
</script>

<style lang="less" scoped>

</style>
