<template>
    <el-container class="llll-container">

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
                <sidebar2 ref="sidebar2" />
            </el-aside>
            <el-main>
                <app-main />
            </el-main>
        </el-container>

    </el-container>
</template>

<script>
    import RightPanel from '../components/RightPanel'
    import {AppMain, Sidebar2} from './components'

    export default {
        name: 'lllll',
        components: {
            AppMain,
            RightPanel,
            Sidebar2,
        },
        data() {
            return {
                isCollapse: false,
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
                this.isCollapse = !this.isCollapse
                this.$refs.sidebar2.collapse(this.isCollapse)
            },
        }
    }
</script>

<style lang="less" scoped>

    .llll-container {
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