import Vue from 'vue'
import VueRouter from 'vue-router'

import blog from '../views/show/blog.vue'
import blogs from '../views/show/blogs.vue'
import types from '../views/show/types.vue'
import tags from '../views/show/tags.vue'
import about from '../views/show/about.vue'
import archives from '../views/show/archives.vue'
import bloginput from '../views/admin/blog-input.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        component: () => import('@/views/login/index'),
        hidden: true
    },
    {
        path: '/',
        name: 'index',
        component: () => import('@/views/show/index')
    },
    {
        path: '/blogs',
        name: 'blogs',
        component: blogs
    },
    {
        path: '/blog/:blogId',
        name: 'blog',
        component: blog
    },
    {
        path: '/types',
        name: 'types',
        component: types
    },
    {
        path: '/tags',
        name: 'tags',
        component: tags
    },
    {
        path: '/archives',
        name: 'archives',
        component: archives
    },
    {
        path: '/about',
        name: 'about',
        component: about
    },
    // admin start
    {
        path: '/admin',
        component: () => import('@/views/admin/index'),
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/blog/:blogId/edit',
        name: 'bloginput',
        component: bloginput,
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/blog/input',
        name: 'blog-input',
        component: bloginput,
        meta: {
            requireAuth: true
        }
    },
    //admin end
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
