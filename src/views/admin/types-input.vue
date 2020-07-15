<template>
    <el-form @submit.native.prevent :rules="rules" :model="ruleForm" ref="ruleForm">
        <el-form-item required prop="name">
            <el-input v-model="ruleForm.name" placeholder="分类名称">
                <template slot="prepend">分类</template>
            </el-input>
        </el-form-item>
        <el-form-item class="m-align-right">
            <el-button size="small" type="info"　@click="goBack()">返回</el-button>
            <el-button size="small" type="primary"　@click="submitForm('ruleForm')">提交</el-button>
        </el-form-item>
    </el-form>
</template>

<script>

    export default {
        name: "types-input",
        data() {
            return {
                ruleForm: {
                    id: '',
                    name: ''
                },
                rules: {
                    name: [
                        { required: true, message: '请输入分类名称', trigger: 'blur' },
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
                        this.$axios.post('/type/input', this.ruleForm, {
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
                                    _this.$router.push('/admin/types')
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
            const typeId = this.$route.params.typeId
            if (typeId) {
                const _this = this
                this.$axios.get('/type/' + typeId).then(res => {
                    if (res.data.code != 200) {
                        console.log(res.data.msg)
                        return
                    }
                    const type = res.data.data
                    _this.ruleForm.id = type.id
                    _this.ruleForm.name = type.name
                })
            }
        }
    }
</script>

<style lang="less" scoped>

</style>