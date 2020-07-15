<template>
    <el-card>
        <el-table
                :data="typeList"
                border
                style="width: 100%">
            <el-table-column
                    type="index"
                    :index="indexMethod"
                    width="54">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="名称"
                    min-width="219">
            </el-table-column>
            <el-table-column
                    min-width="146"
                    label="操作">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            type="primary"
                            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>

        </el-table>
        <div class=".m-margin-top-small" style="display: flex; justify-content: space-between">
            <el-pagination background
                           layout="prev, next"
                           :current-page="currentPage"
                           :page-size="pageSize"
                           :total="total"
                           @current-change=page
                           prev-text="上一页"
                           next-text="下一页">
            </el-pagination>
            <el-button type="primary" size="small" @click="typeInput()">新增</el-button>
        </div>
    </el-card>
</template>

<script>

    export default {
        name: "types",
        data() {
            return {
                typeList: [],
                currentPage: 1,
                total: 0,
                pageSize: 10,
                pages: 0,
            }
        },
        methods: {
            handleEdit(index, row) {
                this.typeInput(row.id)
            },
            handleDelete(index, row) {
                this.typeDelete(row.id)
            },
            indexMethod(index) {
                return index + 1;
            },
            typeInput(typeId) {
                if (typeId) {
                    this.$router.push('/admin/types/' + typeId + '/input')
                } else {
                    this.$router.push('/admin/types/input')
                }
            },
            typeDelete(typeId) {

            },
            page(currentPage) {
                const _this = this
                this.$axios.get('/type/index?currentPage=' + currentPage).then(res => {
                    if (res.data.code != 200) {
                        console.log(res.data.msg)
                        return
                    }
                    _this.typeList = res.data.data.records
                    _this.currentPage = res.data.data.current
                    _this.total = res.data.data.total
                    _this.pageSize = res.data.data.size
                    _this.pages = res.data.data.pages
                })
            },
        },
        created() {
            this.page(1)
        }
    }
</script>

<style lang="less" scoped>

</style>