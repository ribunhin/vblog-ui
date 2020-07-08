<template>
    <Layout></Layout>
</template>

<script>
    import Layout from '@/layout'

    export default {
        name: "index",
        components: {Layout},
        created() {
            this.$router.push('/blogs')
        }
    }
</script>

<style scoped>

</style>