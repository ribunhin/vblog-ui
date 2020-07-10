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

            <el-image class="welcome-img m-margin-top-large" src="https://picsum.photos/id/1003/800/450" fit="fill" />
        </div>
    </div>
</template>

<script>

    export default {
        name: "welcome",
        created() {

        }
    }
</script>

<style lang="less" scoped>
    .welcome-img {
        width: 800px;
        height: 450px;
        margin: 0 auto;
    }
</style>