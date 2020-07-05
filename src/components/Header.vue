<template>
    <div class="m-header">
        <h3>欢迎来到webbleen的博客</h3>
        <div class="block">
            <el-avatar :size="50" :src="user.avatar"></el-avatar>
            <div>{{user.username}}</div>
            <div class="m-action">
                <span><el-link :underline="false" href="/blogs">主页</el-link></span>
                <el-divider direction="vertical"></el-divider>
                <span><el-link type="success" :underline="false" href="/blog/input">发表博客</el-link></span>
                <el-divider direction="vertical"></el-divider>
                <span v-show="!hasLogin"><el-link type="primary" :underline="false" href="/login">登录</el-link></span>
                <span v-show="hasLogin"><el-link type="danger" :underline="false" @click="logout">退出</el-link></span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                user: {
                    username: '请先登录',
                    avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
                },
                hasLogin: false
            }
        },
        methods: {
            logout() {
                const _this = this
                _this.$axios.get('/logout', {
                    headers: {
                        'Authorization': localStorage.getItem('token')
                    }
                }).then(res => {
                    _this.$store.commit('REMOVE_INFO')
                    _this.$router.push('/login')
                })
            }
        },
        created() {
            if (this.$store.getters.getUser) {
                this.user.username = this.$store.getters.getUser.username
                this.user.avatar = this.$store.getters.getUser.avatar

                this.hasLogin = true
            }
        }
    }
</script>

<style scoped>
    .m-header {
        max-width: 960px;
        margin: 0 auto;
        text-align: center;
    }
    .m-action {
        margin: 10px 0;
    }
</style>