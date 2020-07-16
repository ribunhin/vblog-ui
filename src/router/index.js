import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '../layout/index'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Layout,
        redirect: '/index',
        children: [
            {
                path: 'index',
                name: 'index',
                component: () => import('@/views/index')
            }
        ]
    },
    {
        path: '/blogs/:blogId',
        component: Layout,
        children: [
            {
                path: '',
                name: 'blogId',
                component: () => import('@/views/blog')
            }
        ]
    },
    {
        path: '/types',
        component: Layout,
        children: [
            {
                path: '',
                name: 'types',
                component: () => import('@/views/types')
            },
            {
                path: ':typeId',
                name: 'typeId',
                component: () => import('@/views/types')
            }
        ]
    },
    {
        path: '/tags',
        component: Layout,
        children: [
            {
                path: '',
                name: 'tags',
                component: () => import('@/views/tags')
            },
            {
                path: ':tagId',
                name: 'tagId',
                component: () => import('@/views/tags')
            }
        ]
    },
    {
        path: '/archives',
        component: Layout,
        children: [
            {
                path: '',
                name: 'archives',
                component: () => import('@/views/archives')
            }
        ]
    },
    {
        path: '/about',
        component: Layout,
        children: [
            {
                path: '',
                name: 'about',
                component: () => import('@/views/about')
            }
        ]
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
