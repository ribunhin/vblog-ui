<template>
    <el-form :rules="rules" :model="ruleForm" ref="ruleForm">
        <el-form-item required prop="name">
            <el-input v-model="ruleForm.name" placeholder="标签名称">
                <template slot="prepend">标签</template>
            </el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="info" @click="goBack()">返回</el-button>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        </el-form-item>
    </el-form>
</template>

<script>

    export default {
        name: "tags-input",
        data() {
            return {
                ruleForm: {
                    id: '',
                    name: ''
                },
                rules: {
                    name: [
                        { required: true, message: '请输入标签名称', trigger: 'blur' },
                    ]
                },
            }
        },
        methods: {
            goBack() {
                window.history.go(-1)
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        const _this = this
                        this.$axios.post('/tag/input', this.ruleForm, {
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
                                    _this.$router.push('/admin/tags')
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

            const tagId = this.$route.params.tagId
            if (tagId) {
                const _this = this
                this.$axios.get('/tag/' + tagId).then(res => {
                    if (res.data.code != 200) {
                        console.log(res.data.msg)
                        return
                    }
                    const tag = res.data.data
                    _this.ruleForm.id = tag.id
                    _this.ruleForm.name = tag.name
                })
            }
        }
    }
</script>

<style lang="less" scoped>

</style>