<template>
    <div class="app-wrapper">
        <Sidebar class="sidebar-container m-mobile-hide"/>
        <div class="main-container">
            <AppMain>
                <div slot="main-header">
                    <slot name="main-header"></slot>
                </div>
                <div slot="main-content">
                    <slot name="main-content"></slot>
                </div>
                <div slot="main-footer">
                    <slot name="main-footer"></slot>
                </div>
            </AppMain>
        </div>
    </div>
</template>

<script>
    import RightPanel from '../components/RightPanel'
    import {AppMain, Sidebar} from './components'

    export default {
        name: 'Layout',
        components: {
            AppMain,
            RightPanel,
            Sidebar,
        }
    }
</script>

<style scoped>

    .app-wrapper {
        position: relative;
        height: 100%;
        width: 100%;
    }

    .sidebar-container {
        display: block;
        position: fixed;
        z-index: 900;
        width: 300px;
        height: 100%;
        max-width: none;
        overflow: hidden;
        text-align: center;
        background: url(../assets/images/background-cover.jpg) top left no-repeat #666666;
        background-size: cover;
    }

    .main-container {
        min-height: 100%;
        transition: margin-left .28s;
        margin-left: 300px;
        position: relative;
    }
</style>
