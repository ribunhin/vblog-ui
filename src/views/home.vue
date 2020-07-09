<template>
    <el-container class="home-container">

        <el-header>
            <div>
                <img src="../assets/logo.png" alt="" class="logo_img">
                <span>XXX管理后台</span>
            </div>
            <el-button type="danger" @click="logout">退出</el-button>
        </el-header>

        <el-container>
            <el-aside>
                <div class="toggle-button" @click="toggleCollapase">|||</div>
                <el-menu
                        default-active="2"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        @close="handleClose"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>Navigator One</span>
                        </template>
                        <el-menu-item-group title="Group One">
                            <el-menu-item index="1-1">item one</el-menu-item>
                            <el-menu-item index="1-2">item one</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="Group Two">
                            <el-menu-item index="1-3">item three</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="1-4">
                            <template slot="title">item four</template>
                            <el-menu-item index="1-4-1">item one</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span>Navigator Two</span>
                    </el-menu-item>
                    <el-menu-item index="3" disabled>
                        <i class="el-icon-document"></i>
                        <span>Navigator Three</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-setting"></i>
                        <span>Navigator Four</span>
                    </el-menu-item>
                </el-menu>
                <!--
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

                -->
<!--                <div class="m-sidebar-main-cover__overlay cover-red"></div>-->
            </el-aside>
        </el-container>

    </el-container>
</template>

<script>
    export default {
        name: "home",
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
            },
            toggleCollapase() {

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

<style lang="less" scoped>

    .el-header {
        background-color: #373d41;
        display: flex;
        padding-left: 0%;
        justify-content: space-between; //左右贴边
        align-items: center;
        color: #ffffff;
        font-size: 20px;
        > div {
            display: flex;
            align-items: center;
            span {
                margin-left: 15px;
            }
        }
    }

    .el-aside {
        background-color: #333744;
    }

    .toggle-button {
        background-color:#4A5064;
        font-size: 10px;
        line-height: 24px;
        color: #ffffff;
        text-align: center;
        letter-spacing: .2em;
        cursor: pointer;
    }

    .home-container {
        height: 100%;
    }

    .logo_img {
        height: 100%;
        width: 20%;
    }

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