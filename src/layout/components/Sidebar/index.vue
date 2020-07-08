<template>
    <div>
        <el-aside class="m-sidebar-main">
            <div class="m-sidebar-main__inner m-sidebar-inverted">
                <h3>欢迎来到webbleen的博客</h3>
                <div class="block">
                    <el-avatar :size="50" :src="user.avatar"></el-avatar>
                    <div>{{user.username}}</div>
                    <div class="m-action">
                        <el-divider direction="vertical"></el-divider>
                        <span><el-link :underline="false" href="/">主页</el-link></span>
                        <el-divider direction="vertical"></el-divider>
                        <span><el-link :underline="false" href="/types">分类</el-link></span>
                        <el-divider direction="vertical"></el-divider>
                        <span><el-link :underline="false" href="/tags">标签</el-link></span>
                        <el-divider direction="vertical"></el-divider>
                        <span><el-link :underline="false" href="/archives">归档</el-link></span>
                        <el-divider direction="vertical"></el-divider>
                        <span><el-link :underline="false" href="/about">关于我</el-link></span>
                        <el-divider direction="vertical"></el-divider>
                    </div>
                    <div v-if="hasLogin">
                        <div style="margin: 24px auto;"></div>
                        <el-divider direction="vertical"></el-divider>
                        <span><el-link type="primary" :underline="false" href="/admin/blogs">博客</el-link></span>
                        <el-divider direction="vertical"></el-divider>
                        <span><el-link type="success" :underline="false" href="/admin/types">分类</el-link></span>
                        <el-divider direction="vertical"></el-divider>
                        <span><el-link type="warning" :underline="false" href="/admin/tags">标签</el-link></span>
                        <el-divider direction="vertical"></el-divider>
                    </div>
                    <div style="margin: 24px auto;"></div>
                    <div>
                        <el-divider direction="vertical"></el-divider>
                        <span v-show="!hasLogin"><el-link type="primary" :underline="false"
                                                          href="/login">登录</el-link></span>
                        <span v-show="hasLogin"><el-link type="danger" :underline="false"
                                                         @click="logout">退出</el-link></span>
                        <el-divider direction="vertical"></el-divider>
                    </div>
                </div>
            </div>
            <div class="m-sidebar-main-cover__overlay cover-red"></div>
        </el-aside>
    </div>
</template>

<script>
    export default {
        name: "Sidebar",
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
            if (this.$store.getters.getUser != null) {
                this.user.username = this.$store.getters.getUser.username
                this.user.avatar = this.$store.getters.getUser.avatar
                this.hasLogin = true
            }
        }
    }
</script>

<style scoped>

    .m-sidebar-main {
        display: table;
        width: 100%;
        height: 100%;
    }

    .m-sidebar-main__inner {
        display: table-cell;
        vertical-align: middle;
        position: relative;
        z-index: 800;
        /*padding: 0 50px;*/
    }

    .m-sidebar-inverted {
        font-weight: 100;
        text-align: center;
        color: #FFF;
        text-shadow: 0 1px 1px rgba(0, 0, 0, 0.4);
    }

    .panel-inverted a {
        color: #FFF;
    }

    .m-sidebar-main-cover__overlay {
        position: absolute;
        z-index: 0;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(68, 68, 68, 0.6);
        background-image: -webkit-linear-gradient(-410deg, rgba(68, 68, 68, 0.6) 20%, rgba(0, 0, 0, 0.9));
        background-image: linear-gradient(140deg, rgba(68, 68, 68, 0.6) 20%, rgba(0, 0, 0, 0.9));
    }

    .cover-red {
        background-color: rgba(119, 31, 18, 0.6);
        background-image: -webkit-linear-gradient(-410deg, rgba(119, 31, 18, 0.6) 20%, rgba(30, 8, 5, 0.8));
        background-image: linear-gradient(140deg, rgba(119, 31, 18, 0.6) 20%, rgba(30, 8, 5, 0.8));
    }

    .m-action {
        margin: 10px 0;
    }

</style>