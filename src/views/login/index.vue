<template>
    <div>
        <Layout>
            <div slot="main-header">
                <el-header>
                    <img class="mlogo" src="https://www.markerhub.com/dist/images/logo/markerhub-logo.png" alt="">
                </el-header>
            </div>
            <div slot="main-content">
                <el-container class="m-login-container">
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="m-login-form">
                        <div class="m-login-title-container">
                            <h3 class="m-title"> 用户登录 </h3>
                        </div>
                        <el-form-item prop="username">
                            <el-input prefix-icon="el-icon-user" v-model="ruleForm.username"></el-input>
                        </el-form-item>
                        <el-form-item prop="password">
                            <el-input prefix-icon="el-icon-lock" type="password" v-model="ruleForm.password"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                            <el-button @click="resetForm('ruleForm')">重置</el-button>
                        </el-form-item>
                    </el-form>
                </el-container>
            </div>
        </Layout>
    </div>
</template>

<script>
    import Layout from '@/layout'

    export default {
        name: 'Login',
        components: {Layout},
        data() {
            return {
                ruleForm: {
                    username: 'webbleen',
                    password: '111111'
                },
                rules: {
                    username: [
                        {required: true, message: '请输入用户名', trigger: 'blur'},
                        {min: 3, max: 15, message: '长度在3到15个字符', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'change'}
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        const _this = this
                        this.$axios.post('/login', this.ruleForm).then(res => {
                            // console.log(res.headers)
                            // console.log(res)
                            const jwt = res.headers['authorization']
                            const userInfo = res.data.data

                            // share date to Storage
                            _this.$store.commit('SET_TOKEN', jwt)
                            _this.$store.commit('SET_USERINFO', userInfo)

                            // get data from Storage
                            // console.log(_this.$store.getters.getUser)

                            _this.$router.push('/admin')
                        });
                    } else {
                        // console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped>

    .mlogo {
        height: 60%;
        margin-top: 10px;
    }

    .m-login-container {
        min-height: 100%;
        width: 100%;
        /*background-color: #333333;*/
        overflow: hidden;
    }

    .m-login-form {
        max-width: 500px;
        margin: 0 auto;
    }

    .m-login-title-container {

    }

    .m-title {
        text-align: center;
    }


</style>
