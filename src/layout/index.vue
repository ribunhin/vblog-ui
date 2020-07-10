<template>
    <el-container class="index-container">

        <el-aside>
            <div class="m-sidebar-main cover-red">
                <sidebar ref="sidebar"/>
            </div>
        </el-aside>

        <el-main>
            <app-main ref="app-main"/>
        </el-main>
    </el-container>
</template>

<script>
    import {AppMain, Sidebar} from './components'

    export default {
        name: 'Layout',
        components: {
            AppMain,
            Sidebar,
        }
    }
</script>

<style lang="less" scoped>

    .index-container {
        position: relative;
        height: 100%;
        width: 100%;
    }

    .el-aside {
        background: url(../assets/images/background-cover.jpg) top left no-repeat #666666;
        background-size: cover;
    }

    .m-sidebar-main {
        display: table;
        width: 100%;
        height: 100%;
    }

    .cover-red {
        background-color: rgba(119, 31, 18, 0.6);
        background-image: -webkit-linear-gradient(-410deg, rgba(119, 31, 18, 0.6) 20%, rgba(30, 8, 5, 0.8));
        background-image: linear-gradient(140deg, rgba(119, 31, 18, 0.6) 20%, rgba(30, 8, 5, 0.8));
    }

</style>
