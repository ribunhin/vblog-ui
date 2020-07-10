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
                ownBlog: false
            }
        },
        methods: {
            getBlog() {
                const blogId = this.$route.params.blogId
                const _this = this
                this.$axios.get('/blogs/' + blogId).then(res => {
                    // console.log(res.data.data)
                    _this.blog = res.data.data
                    var markdownIt = require('markdown-it')
                    var md = new markdownIt()
                    _this.blog.content = md.render(_this.blog.content)

                    if (_this.$store.getters.getUser) {
                        _this.ownBlog = (_this.blog.userId === _this.$store.getters.getUser.id)
                    } else {
                        _this.ownBlog = false
                    }
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
