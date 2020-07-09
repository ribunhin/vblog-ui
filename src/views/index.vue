<template>
    <div>
        <Layout>
            <div class="block" slot="main-content">
                <el-timeline>
                    <el-timeline-item :timestamp="blog.createTime" placement="top" :key="blog.id" v-for="blog in blogs">
                        <el-card>
                            <h4>
                                <router-link :to="{name: 'blogId', params: {blogId: blog.id}}">
                                    {{blog.title}}
                                </router-link>
                            </h4>
                            <p>{{blog.description}}</p>
                        </el-card>
                    </el-timeline-item>
                </el-timeline>

                <el-pagination class="m-page"
                               background
                               layout="prev, pager, next"
                               :current-page="currentPage"
                               :page-size="pageSize"
                               :total="total"
                               @current-change=page
                >
                </el-pagination>
            </div>
        </Layout>
    </div>
</template>

<script>
    import Layout from '@/layout'

    export default {
        name: 'index',
        components: {Layout},
        data() {
            return {
                blogs: {},
                currentPage: 1,
                total: 0,
                pageSize: 10
            }
        },
        methods: {
            page(currentPage) {
                const _this = this
                _this.$axios.get('/blogs?currentPage=' + currentPage).then(res => {
                    // console.log(res)
                    _this.blogs = res.data.data.records
                    _this.currentPage = res.data.data.current
                    _this.total = res.data.data.total
                    _this.pageSize = res.data.data.size
                })
            }
        },
        created() {
            this.page(1)
        }
    }
</script>

<style scoped>
    .m-page {
        margin: 0 auto;
        text-align: center;
    }
</style>
