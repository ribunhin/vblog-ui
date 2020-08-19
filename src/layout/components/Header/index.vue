<template>
    <!-- Header -->
    <header id="header">
        <div class="inner">
            <b-img thumbnail fluid src="https://webbleen.com/assets/images/avatar.png" rounded="circle" alt=""></b-img>
            <h1>
                <strong>I am Strata</strong>, a super simple<br />
                responsive site template freebie<br />
                crafted by <a href="http://html5up.net">HTML5 UP</a>.
            </h1>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                user: {
                    username: 'webbleen',
                    avatar: 'https://webbleen.com/assets/images/avatar.png'
                },
            }
        },
        methods: {

        },
        created() {

        }
    }
</script>

<style lang="less" scoped>

</style>