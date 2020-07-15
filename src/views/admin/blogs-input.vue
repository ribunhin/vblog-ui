<template>
    <el-form @submit.native.prevent :model="ruleForm" :rules="rules" ref="ruleForm">
        <el-form-item required prop="title">
            <el-input v-model="ruleForm.title" class="input-with-select">
                <el-form-item>
                    <el-select v-model="ruleForm.flag" slot="prepend">
                        <el-option v-for="item in flags" :key="item" :label="item" :value="item"></el-option>
                    </el-select>
                </el-form-item>
            </el-input>
        </el-form-item>
        <el-form-item required prop="content">
            <mavon-editor v-model="ruleForm.content" style="height: 640px"></mavon-editor>
        </el-form-item>
        <el-form-item required>
            <el-col :span="12">
                <el-form-item prop="typeId">
                    <el-select style="width: 100%;" v-model="ruleForm.typeId" placeholder="分类">
                        <el-option v-for="item in typeList" :key="item.id" :label="item.name" :value="item.id"></el-option>
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item prop="tagIds">
                    <el-select style="width: 100%;" multiple v-model="ruleForm.tagIds" placeholder="标签">
                        <el-option v-for="item in tagList" :key="item.id" :label="item.name" :value="item.id"></el-option>
                    </el-select>
                </el-form-item>
            </el-col>
        </el-form-item>
        <el-form-item required prop="firstPicture">
            <el-input v-model="ruleForm.firstPicture" placeholder="首图引用地址"></el-input>
        </el-form-item>
        <el-form-item required prop="description">
            <el-input
                    type="textarea"
                    :rows="10"
                    v-model="ruleForm.description"
                    placeholder="博客描述">
            </el-input>
        </el-form-item>
        <el-form-item>
            <el-checkbox v-model="ruleForm.recommend" label="推荐"></el-checkbox>
            <el-checkbox v-model="ruleForm.shareStatement" label="转载声明"></el-checkbox>
            <el-checkbox v-model="ruleForm.appreciation" label="赞赏"></el-checkbox>
            <el-checkbox v-model="ruleForm.commentable" label="评论"></el-checkbox>
        </el-form-item>
        <el-form-item class="m-align-right">
            <el-button size="small" type="info" @click="goBack()">返回</el-button>
            <el-button size="small" type="primary" @click="saveBlog('ruleForm')">保存</el-button>
            <el-button size="small" type="success" @click="postBlog('ruleForm')">发布</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: 'blog-input',
        data() {
            return {
                flags: ['原创','转载','翻译'],
                ruleForm: {
                    id: '',
                    flag: '原创',
                    title: '',
                    typeId: '',
                    tagIds: [],
                    firstPicture: '',
                    description: '',
                    content: '',
                    recommend: false,
                    shareStatement: false,
                    appreciation: false,
                    commentable: false,
                    published: false,
                },
                rules: {
                    title: [
                        { required: true, message: '请输入标题', trigger: 'blur' },
                        { min: 3, max: 25, message: '长度在3到25个字符', trigger: 'blur' }
                    ],
                    description: [
                        { required: true, message: '请输入摘要', trigger: 'blur' }
                    ],
                    content: [
                        { required: true, message: '请输入内容', trigger: 'blur' }
                    ],
                    typeId: [
                        { required: true, message: '请选择分类', trigger: 'change' }
                    ],
                    tagIds: [
                        { required: true, message: '请选择标签', trigger: 'change' }
                    ],
                    firstPicture: [
                        { required: true, message: '请输入首图地址', trigger: 'blur' }
                    ],

                },
                typeList: [],
                tagList: [],
            }
        },
        methods: {
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
            tags() {
                const _this = this
                this.$axios.get('/tag/all').then(res => {
                    if (res.data.code != 200) {
                        console.log(res.data.msg)
                        return
                    }
                    _this.tagList = res.data.data
                })
            },
            goBack() {
                window.history.go(-1)
            },
            saveBlog(formName) {
                this.ruleForm.published = false
                this.submitForm(formName)
            },

            postBlog(formName) {
                this.ruleForm.published = true
                this.submitForm(formName)
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        const _this = this
                        this.$axios.post('/blog/input', this.ruleForm, {
                            headers: {
                                'Authorization': localStorage.getItem('token')
                            }
                        }).then(res => {
                            if (res.data.code != 200) {
                                console.log(res.data.msg)
                                return
                            }
                            // console.log(res)
                            _this.$alert('操作成功', '提示', {
                                confirmButtonText: '确定',
                                callback: action => {
                                    _this.$router.push('/admin/blogs')
                                }
                            });
                        })
                    } else {
                        // console.log('error submit!!');
                        return false;
                    }
                });
            },
        },
        created() {
            this.types()
            this.tags()
            const blogId = this.$route.params.blogId
            // console.log(blogId)
            if (blogId) {
                const _this = this
                this.$axios.get('/blog/' + blogId).then(res => {
                    if (res.data.code != 200) {
                        console.log(res.data.msg)
                        return
                    }
                    const blog = res.data.data
                    _this.ruleForm.id = blog.id
                    _this.ruleForm.flag = blog.flag
                    _this.ruleForm.title = blog.title
                    _this.ruleForm.typeId = blog.typeId
                    _this.ruleForm.tagIds = blog.tagIds
                    _this.ruleForm.firstPicture = blog.firstPicture
                    _this.ruleForm.description = blog.description
                    _this.ruleForm.content = blog.content
                    _this.ruleForm.recommend = blog.recommend
                    _this.ruleForm.shareStatement = blog.shareStatement
                    _this.ruleForm.appreciation = blog.appreciation
                    _this.ruleForm.commentable = blog.commentable
                    _this.ruleForm.published = blog.published
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .m-content {
        margin: 0 auto;
        text-align: center;
    }

    .el-input .el-select {
        width: 80px;
    }

    .input-with-select .el-input-group__prepend {
        background-color: #fff;
    }
</style>
