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
            <el-aside :width="isCollapse ? '64px':'200px'">
                <div class="toggle-button" @click="toggleCollapase">|||</div>
                <el-menu
                        :default-active="activeId"
                        @open="handleOpen"
                        @close="handleClose"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b"
                        :collapse="isCollapse"
                        :collapse-transition="false"
                        :router="true">
                    <el-submenu :index="item.path" v-for="item in menuList" :key="item.id">
                        <template slot="title">
                            <i :class="iconsObject[item.id]"></i>
                            <span>{{item.title}}</span>
                        </template>
                        <el-menu-item :index="it.path" v-for="it in item.slist" :key="it.id"
                                      @click="clickMenu(it.path)">
                            <template slot="title">
                                <i :class="iconsObject[item.id]"></i>
                                <span>{{it.title}}</span>
                            </template>
                        </el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-main>
                <router-view />
            </el-main>
        </el-container>

    </el-container>
</template>

<script>
    export default {
        name: "home",
        data() {
            return {
                menuList: [],
                iconsObject: {
                    '100': 'el-icon-s-tools',
                    '200': 'el-icon-s-tools',
                    '101': 'el-icon-s-tools',
                    '102': 'el-icon-s-tools',
                    '103': 'el-icon-s-tools',
                    '104': 'el-icon-s-tools',
                    '201': 'el-icon-s-tools',
                    '202': 'el-icon-s-tools',
                    '203': 'el-icon-s-tools',
                    '204': 'el-icon-s-tools',
                },
                activeId: '101'
            }
        },
        methods: {
            toggleCollapase() {
                this.isCollapse = !this.isCollapse
            },
            handleOpen(key, keyPath) {
                console.log(key)
                console.log(keyPath)
            },
            handleClose(key, keyPath) {
                console.log(key)
                console.log(keyPath)
            },
            async getMenuList() {
                const menuList = [
                    {
                        "id": '100',
                        "path": "/admin",
                        "slist": [
                            {"id": 101, "path": "/user", "title": "用户列表"},
                            {"id": 102, "path": "/rights", "title": "修改权限"},
                            {"id": 103, "path": "/sport", "title": "运动模块"},
                            {"id": 104, "path": "/goods", "title": "商品模块"}
                        ],
                        "title": "权限管理"
                    },
                    {
                        "id": '200',
                        "path": "/use",
                        "slist": [
                            {"id": 201, "path": "/Introduction", "title": "运动科普"},
                            {"id": 202, "path": "/calories", "title": "卡路里"},
                            {"id": 203, "path": "/food", "title": "营养配餐"}
                        ],
                        "title": "运动平台"
                    }
                ]

                this.menuList = menuList
            },
            clickMenu(id) {
                this.activeId = id
            },
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
            this.getMenuList();
        }
    }
</script>

<style lang="less" scoped>

    .home-container {
        height: 100%;
    }

    .logo_img {
        height: 100%;
        width: 20%;
    }

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
        .el-menu {
            border-right: 0;
        }
    }

    .toggle-button {
        background-color: #4A5064;
        font-size: 10px;
        line-height: 24px;
        color: #ffffff;
        text-align: center;
        letter-spacing: .2em;
        cursor: pointer;
    }

</style>