import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login'),
        hidden: true
    },
    {
        path: '/',
        name: 'index',
        component: () => import('@/views/index')
    },
    {
        path: '/blogs/:blogId',
        name: 'blogId',
        component: () => import('@/views/blog')
    },
    {
        path: '/types',
        name: 'types',
        component: () => import('@/views/types')
    },
    {
        path: '/types/:typeId',
        name: 'typeId',
        component: () => import('@/views/types')
    },
    {
        path: '/tags',
        name: 'tags',
        component: () => import('@/views/tags')
    },
    {
        path: '/tags/:tagId',
        name: 'tagId',
        component: () => import('@/views/tags')
    },
    {
        path: '/archives',
        name: 'archives',
        component: () => import('@/views/archives')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/views/about')
    },
    {
        path: '/admin',
        component: () => import('@/views/home'),
        children: [
            {
                path: '',
                name: 'welcome',
                component: () => import('@/views/admin/welcome')
            },
            {
                path: 'blogs',
                name: 'admin-blogs',
                component: () => import('@/views/admin/blogs')
            },
            {
                path: 'blogs/input',
                name: 'admin-blogs-input',
                component: () => import('@/views/admin/blogs-input')
            },
            {
                path: 'blogs/:blogId/input',
                name: 'admin-blogs-edit',
                component: () => import('@/views/admin/blogs-input')
            },
            {
                path: 'types',
                name: 'admin-types',
                component: () => import('@/views/admin/types')
            },
            {
                path: 'types/input',
                name: 'admin-types-input',
                component: () => import('@/views/admin/types-input')
            },
            {
                path: 'types/:typeId/input',
                name: 'admin-types-edit',
                component: () => import('@/views/admin/types-input')
            },
            {
                path: 'tags',
                name: 'admin-tags',
                component: () => import('@/views/admin/tags')
            },
            {
                path: 'tags/input',
                name: 'admin-tags-input',
                component: () => import('@/views/admin/tags-input')
            },
            {
                path: 'tags/:tagId/input',
                name: 'admin-tags-edit',
                component: () => import('@/views/admin/tags-input')
            }
        ],
        meta: {
            requireAuth: true
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
