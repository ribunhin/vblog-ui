<template>
    <div class="panel-cover">

    </div>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                user: {
                    username: '请先登录',
                    avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
                },
                hasLogin: false,
            }
        },
        methods: {
            logout() {
                const _this = this
                _this.$axios.get('/logout', {
                    headers: {
                        'Authorization': localStorage.getItem('token')
                    }
                }).then(res => {
                    _this.$store.commit('REMOVE_INFO')
                    _this.$router.push('/login')
                })
            }
        },
        created() {
            if (this.$store.getters.getUser) {
                this.user.username = this.$store.getters.getUser.username
                this.user.avatar = this.$store.getters.getUser.avatar

                this.hasLogin = true
            }
        }
    }
</script>

<style scoped>

    .panel-cover {
        display: block;
        position: fixed;
        z-index: 900;
        width: 100%;
        max-width: none;
        height: 100%;
        background: url(../assets/images/background-cover.jpg) top left no-repeat #666666;
        background-size: cover;
    }

</style>