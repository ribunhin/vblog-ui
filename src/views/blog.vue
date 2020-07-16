<template>
    <div class="block">
        <div class="m-blog" slot="main">
            <h2>
                {{blog.title}}
            </h2>
            <el-divider></el-divider>
            <div class="content markdown-body" v-html="blog.content"></div>
        </div>
    </div>
</template>

<script>
    import Layout from '@/layout'
    import 'github-markdown-css/github-markdown.css'

    export default {
        name: 'blogId',
        components: {Layout},
        data() {
            return {
                blog: {
                    userId: null,
                    id: '',
                    title: '',
                    description: '',
                    content: '',
                    createTime: ''
                },
            }
        },
        methods: {
            getBlog() {
                const blogId = this.$route.params.blogId
                const _this = this
                this.$axios.get('/blog/' + blogId).then(res => {
                    // console.log(res.data.data)
                    _this.blog = res.data.data
                    const markdownIt = require('markdown-it');
                    const md = new markdownIt();
                    _this.blog.content = md.render(_this.blog.content)
                })
            }
        },
        created() {
            this.getBlog()
        }
    }
</script>

<style lang="less" scoped>

</style>
