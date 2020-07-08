<template>
    <div>
        <Layout>
            <div slot="main-content">
                admin
            </div>
        </Layout>
    </div>
</template>

<script>
    import Layout from '@/layout'

    export default {
        name: "admin",
        components: {Layout},
        created() {
            console.log(this.$store.getters.getUser)
            this.$message({
                message: 'Hi,' + this.$store.getters.getUser.nickname + '欢迎登录',
                type: 'success'
            })
        }
    }
</script>

<style scoped>

</style>