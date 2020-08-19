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
        }
    }
</script>

<style lang="less" scoped>

</style>
