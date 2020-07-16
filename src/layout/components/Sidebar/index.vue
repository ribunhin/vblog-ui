<template>
    <div class="m-sidebar-main__inner m-sidebar-inverted">
        <h3>欢迎来到webbleen的博客</h3>
        <div class="block">
            <el-avatar :size="100" :src="user.avatar" :class="'m-avatar m-margin-tb'"></el-avatar>
            <div class="m-margin-tb">{{user.username}}</div>
            <div class="m-margin-tb-large">
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
        </div>
    </div>
</template>

<script>
    export default {
        name: "Sidebar",
        data() {
            return {
                user: {
                    username: 'webbleen',
                    avatar: 'https://webbleen.com/assets/images/avatar.png'
                },
            }
        },
        methods: {

        },
        created() {

        }
    }
</script>

<style lang="less" scoped>

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

    .m-avatar {
        border: white 2px solid;
    }


</style>