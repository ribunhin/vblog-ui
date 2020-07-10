<template>
    <el-menu
            :default-active="activePath"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            :collapse="isCollapse"
            :collapse-transition="false"
            :router="true"
            unique-opened>
        <el-submenu :index="item.id+''" v-for="item in menuList" :key="item.id">
            <template slot="title">
                <i :class="iconsObject[item.id]"></i>
                <span>{{item.title}}</span>
            </template>
            <el-menu-item :index="item.path+it.path" v-for="it in item.slist" :key="it.id"
                          @click="clickMenu(item.path+it.path)">
                <template slot="title">
                    <i :class="iconsObject[item.id]"></i>
                    <span>{{it.title}}</span>
                </template>
            </el-menu-item>
        </el-submenu>
    </el-menu>
</template>

<script>
    export default {
        name: "Sidebar2",
        data() {
            return {
                menuList: [],
                iconsObject: {
                    '100': 'el-icon-s-home',
                    '102': 'el-icon-s-home',
                    '200': 'el-icon-document',
                    '201': 'el-icon-document',
                    '300': 'el-icon-s-comment',
                    '302': 'el-icon-s-comment',
                    '400': 'el-icon-collection',
                    '402': 'el-icon-collection',
                    '500': 'el-icon-collection-tag',
                    '502': 'el-icon-collection-tag',
                    '600': 'el-icon-files',
                    '602': 'el-icon-files',
                    '700': 'el-icon-setting',
                    '702': 'el-icon-setting',
                },
                isCollapse: false,
                activePath: '/admin/index'
            }
        },
        methods: {
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
                            {"id": 101, "path": "/index", "title": "管理首页"}
                        ],
                        "title": "管理首页"
                    },
                    {
                        "id": '200',
                        "path": "/admin",
                        "slist": [
                            {"id": 201, "path": "/blogs", "title": "文章管理"}
                        ],
                        "title": "文章管理"
                    },
                    {
                        "id": '300',
                        "path": "/admin",
                        "slist": [
                            {"id": 301, "path": "/comments", "title": "评论管理"}
                        ],
                        "title": "评论管理"
                    },
                    {
                        "id": '400',
                        "path": "/admin",
                        "slist": [
                            {"id": 401, "path": "/types", "title": "分类管理"}
                        ],
                        "title": "分类管理"
                    },
                    {
                        "id": '500',
                        "path": "/admin",
                        "slist": [
                            {"id": 501, "path": "/tags", "title": "标签管理"}
                        ],
                        "title": "标签管理"
                    },
                    {
                        "id": '600',
                        "path": "/admin",
                        "slist": [
                            {"id": 601, "path": "/pages", "title": "页面管理"}
                        ],
                        "title": "页面管理"
                    },
                    {
                        "id": '700',
                        "path": "/admin",
                        "slist": [
                            {"id": 701, "path": "/setting", "title": "博客设置"}
                        ],
                        "title": "博客设置"
                    }
                ]

                this.menuList = menuList
            },
            clickMenu(path) {
                console.log(path)
                this.activePath = path
            },
            collapse(isCollapse) {
                this.isCollapse = isCollapse
            },
        },
        created() {
            this.getMenuList();
        }
    }
</script>

<style lang="less" scoped>

</style>