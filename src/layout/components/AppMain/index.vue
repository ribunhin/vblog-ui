<template>
    <div class="m-app-main">
        <router-view :key="key" />
    </div>
</template>

<script>
    export default {
        name: "AppMain",
        computed: {
            key() {
                //console.log('route.path:' + this.$route.path)
                return this.$route.path
            }
        }
    }
</script>

<style lang="less" scoped>
    .m-app-main {
        width: 100%;
        height: 100%;
    }
</style>