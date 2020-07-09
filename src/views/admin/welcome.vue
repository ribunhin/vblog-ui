<template>
    <div>
        <div slot="main-content" class="m-container m-padded-tb-big">
            <el-alert
                    title="Hi"
                    type="success"
                    :closable="false"
                    description="欢迎回来"
                    show-icon>
            </el-alert>
            <div class="m-welcome">
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "welcome",
        created() {
            this.$message({
                message: 'Hi,' + this.$store.getters.getUser.nickname + '欢迎登录',
                type: 'success'
            })
        }
    }
</script>

<style scoped>

    .m-welcome {
        display: table;
        border-radius: .3125em;
        border: 1px solid rgba(0, 0, 0, .1);
        margin: 30px auto;
        width: 800px;
        height: 450px;
        background: url(https://picsum.photos/id/1003/800/450) top left no-repeat #666666;
    }
</style>