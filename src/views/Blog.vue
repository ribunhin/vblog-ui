<template>
    <div class="m-container">
        <Header></Header>
        <div class="m-blog">
            <h2>
                {{blog.title}}
            </h2>
            <el-link icon="el-icon-edit" v-if="ownBlog">
                <router-link :to="{name: 'BlogEdit', params: {blogId: blog.id}}">编辑</router-link>
            </el-link>
            <el-divider></el-divider>
            <div class="content markdown-body" v-html="blog.content"></div>
        </div>
    </div>
</template>

<script>
    import Header from "../components/Header";
    import 'github-markdown-css/github-markdown.css'
    export default {
        name: 'Blog',
        components: {Header},
        data() {
            return {
                blog: {
                    userId: null,
                    id: '',
                    title: '',
                    description: '',
                    content: '',
                    created: ''
                },
                ownBlog: false
            }
        },
        methods: {
            getBlog() {
                const blogId = this.$route.params.blogId
                const _this = this
                this.$axios.get('/blog/' + blogId).then(res => {
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

<style scoped>

</style>
