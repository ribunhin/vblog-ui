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
            <el-row :gutter="25">
                <el-col :span="8">
                    <el-input placeholder="标题"></el-input>
                </el-col>
                <el-col :span="6">
                    <div style="display: inline-flex">
                        <el-select v-model="value" placeholder="分类">
                            <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                        <el-button type="info">清除</el-button>
                    </div>
                </el-col>
                <el-col :span="3">
                    <el-checkbox v-model="checked" label="推荐" border></el-checkbox>
                </el-col>
                <el-col :span="3">
                    <el-button icon="el-icon-search" @click="searchBlogList">搜索</el-button>
                </el-col>
            </el-row>
        </el-card>
        <el-card class="m-margin-top-large">
            <el-table
                    :data="tableData"
                    border
                    style="width: 100%">
                <el-table-column type="index" :index="indexMethod" width="53">
                </el-table-column>
                <el-table-column label="标题" width="371">
                </el-table-column>
                <el-table-column label="类型" width="160">
                </el-table-column>
                <el-table-column label="推荐" width="64">
                </el-table-column>
                <el-table-column label="发布" width="64">
                </el-table-column>
                <el-table-column label="状态" width="64">
                </el-table-column>
                <el-table-column label="更新时间" width="160">
                </el-table-column>
                <!--
                <el-table-column
                        label="日期"
                        width="180">
                    <template slot-scope="scope">
                        <i class="el-icon-time"></i>
                        <span style="margin-left: 10px">{{ scope.row.date }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                        label="姓名"
                        width="180">
                    <template slot-scope="scope">
                        <el-popover trigger="hover" placement="top">
                            <p>姓名: {{ scope.row.name }}</p>
                            <p>住址: {{ scope.row.address }}</p>
                            <div slot="reference" class="name-wrapper">
                                <el-tag size="medium">{{ scope.row.name }}</el-tag>
                            </div>
                        </el-popover>
                    </template>
                </el-table-column>
                 -->
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button
                                size="mini"
                                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button
                                size="mini"
                                type="danger"
                                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                    class="m-margin-top"
                    background
                    :hide-on-single-page="hasData"
                    :total="19"
                    layout="prev, pager, next">
            </el-pagination>
        </el-card>

    </div>
</template>

<script>

    export default {
        name: "blogs",
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }],
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                value: '',
                checked: true,
                hasData: true,
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
            }
        }
    }
</script>

<style lang="less" scoped>

</style>