<template>
    <div>
        <!--
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/admin' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>文章列表</el-breadcrumb-item>
            <el-breadcrumb-item>文章详情</el-breadcrumb-item>
        </el-breadcrumb>
        -->
        <el-card shadow="never">
            <el-form :inline="true" :model="queryObj" :rules="searchRules" ref="searchForm">
                <el-form-item prop="title">
                    <el-input placeholder="标题" v-model="queryObj.title" style="width: 300px"></el-input>
                </el-form-item>
                <el-form-item prop="typeId">
                    <el-select v-model="queryObj.typeId" clearable placeholder="分类">
                        <el-option
                                v-for="item in typeList"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="recommend">
                    <el-checkbox v-model="queryObj.recommend" label="推荐" border></el-checkbox>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" icon="el-icon-search" @click="submitForm('searchForm')">搜索</el-button>
                </el-form-item>
            </el-form>
        </el-card>
        <el-card class="m-margin-top-small">
            <el-table
                    :data="blogList"
                    border
                    style="width: 100%">
                <el-table-column
                        type="index"
                        :index="indexMethod"
                        width="54">
                </el-table-column>
                <el-table-column
                        prop="title"
                        label="标题"
                        min-width="390">
                </el-table-column>
                <el-table-column
                        label="类型"
                        min-width="160">
                    <template slot-scope="scope">
                        {{getTypeName(scope.row.typeId)}}
                    </template>
                </el-table-column>

                <el-table-column
                        :formatter="dataFormat"
                        prop="recommend"
                        label="推荐"
                        min-width="64">
                </el-table-column>
                <el-table-column
                        :formatter="dataFormat"
                        prop="published"
                        label="发布"
                        min-width="64">
                </el-table-column>
                <el-table-column
                        prop="flag"
                        label="状态"
                        min-width="64">
                </el-table-column>
                <el-table-column
                        prop="updateTime"
                        label="更新时间"
                        min-width="140">
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
            <el-pagination class="m-margin-top-small"
                           background
                           :hide-on-single-page="true"
                           layout="prev, pager, next"
                           :current-page="currentPage"
                           :page-size="pageSize"
                           :total="total"
                           @current-change=page
            >
            </el-pagination>
        </el-card>

    </div>
</template>

<script>

    export default {
        name: "blogs",
        data() {
            return {
                queryObj: {
                    title: '',
                    typeId: '',
                    recommend: false,
                    page: 1,
                },
                searchRules: {

                },
                blogList: [],
                currentPage: 1,
                total: 0,
                pageSize: 10,
                typeList: [],
            }
        },
        methods: {
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            },
            indexMethod(index) {
                return index + 1;
            },
            types() {
                const _this = this
                this.$axios.get('/type/all').then(res => {
                    if (res.data.code != 200) {
                        console.log(res.data.msg)
                        return
                    }
                    _this.typeList = res.data.data
                })
            },
            page(currentPage) {
                const _this = this
                this.queryObj.page = currentPage
                this.$axios.post('/blog/search', this.queryObj).then(res => {
                    if (res.data.code != 200) {
                        console.log(res.data.msg)
                        return
                    }
                    _this.blogList = res.data.data.records
                    _this.currentPage = res.data.data.current
                    _this.total = res.data.data.total
                    _this.pageSize = res.data.data.size
                    _this.pages = res.data.data.pages
                })
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.page(1)
                    } else {
                        // console.log('error submit!!');
                        return false
                    }
                })
            },
            dataFormat(row, column) {
                if (column.property == 'recommend') {
                    return row.recommend ? '是' : '否'
                } else if (column.property == 'published') {
                    return row.published ? '是' : '否'
                }
            },
            getTypeName(typeId) {
                const elem = this.typeList.find(function (value) {
                    return value.id == typeId
                })
                return elem ? elem.name:''
            }
        },
        created() {
            this.types()
            this.page(1)
        }
    }
</script>

<style lang="less" scoped>

    .el-form-item {
        margin-bottom: 0;
    }
</style>