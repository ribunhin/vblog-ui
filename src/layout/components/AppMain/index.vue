<template>
    <div>
        <el-container>
            <el-header>
                <slot name="main-header"></slot>
            </el-header>
            <el-main>
                <slot name="main-content"></slot>
            </el-main>
            <el-footer>
                <slot name="main-footer"></slot>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "AppMain"
    }
</script>

<style scoped>
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }
</style>