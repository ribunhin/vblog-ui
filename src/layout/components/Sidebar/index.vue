<template>
    <div>
        <el-aside class="m-sidebar-main">
            <div class="m-sidebar-main__inner m-sidebar-inverted">
                <h3>欢迎来到webbleen的博客</h3>
                <div style="margin: 24px auto;"></div>
                <div class="block">
                    <div style="margin: 24px auto;"></div>
                    <el-avatar :size="100" :src="user.avatar" :class="'m-avatar'"></el-avatar>
                    <div style="margin: 24px auto;"></div>
                    <div>{{user.username}}</div>
                    <div style="margin: 24px auto;"></div>
                    <div class="m-action">
                        <el-divider direction="vertical"></el-divider>
                        <el-link>
                            <router-link :to="{name: 'index'}" tag="p">主页</router-link>
                        </el-link>
                        <el-divider direction="vertical"></el-divider>
                        <el-link>
                            <router-link :to="{name: 'types'}" tag="p">分类</router-link>
                        </el-link>
                        <el-divider direction="vertical"></el-divider>
                        <el-link>
                            <router-link :to="{name: 'tags'}" tag="p">标签</router-link>
                        </el-link>
                        <el-divider direction="vertical"></el-divider>
                        <el-link>
                            <router-link :to="{name: 'archives'}" tag="p">归档</router-link>
                        </el-link>
                        <el-divider direction="vertical"></el-divider>
                        <el-link>
                            <router-link :to="{name: 'about'}" tag="p">关于我</router-link>
                        </el-link>
                        <el-divider direction="vertical"></el-divider>
                    </div>
                    <div v-if="hasLogin">
                        <div style="margin: 24px auto;"></div>
                        <el-divider direction="vertical"></el-divider>
                        <el-link type="primary">
                            <router-link :to="{name: 'admin-blogs'}" tag="p">博客</router-link>
                        </el-link>
                        <el-divider direction="vertical"></el-divider>
                        <el-link type="success">
                            <router-link :to="{name: 'admin-types'}" tag="p">分类</router-link>
                        </el-link>
                        <el-divider direction="vertical"></el-divider>
                        <el-link type="warning">
                            <router-link :to="{name: 'admin-tags'}" tag="p">标签</router-link>
                        </el-link>
                        <el-divider direction="vertical"></el-divider>
                    </div>
                    <div style="margin: 24px auto;"></div>
                    <div>
                        <el-divider direction="vertical"></el-divider>
                        <el-link type="primary" v-show="!hasLogin">
                            <router-link :to="{name: 'login'}" tag="p">登录</router-link>
                        </el-link>
                        <span v-show="hasLogin"><el-link type="danger"
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

    .m-avatar {
        border: white 2px solid;
    }

    .m-action {
        margin: 10px 0;
    }

</style>