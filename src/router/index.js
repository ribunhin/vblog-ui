import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/index'),
        hidden: true
    },
    {
        path: '/',
        name: 'index',
        component: () => import('@/views/show/index')
    },
    {
        path: '/blogs/:blogId',
        name: 'blog',
        component: () => import('@/views/show/blog')
    },
    {
        path: '/types',
        name: 'types',
        component: () => import('@/views/show/types')
    },
    {
        path: '/types/:typeId',
        name: 'types',
        component: () => import('@/views/show/types')
    },
    {
        path: '/tags',
        name: 'tags',
        component: () => import('@/views/show/tags')
    },
    {
        path: '/tags/:tagId',
        name: 'tags',
        component: () => import('@/views/show/tags')
    },
    {
        path: '/archives',
        name: 'archives',
        component: () => import('@/views/show/archives')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/views/show/about')
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
        path: '/admin/blogs',
        name: 'admin-blogs',
        component: () => import('@/views/admin/blogs'),
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/admin/blogs/input',
        name: 'admin-blogs-input',
        component: () => import('@/views/admin/blogs-input'),
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/admin/blogs/:blogId/input',
        name: 'admin-blogs-edit',
        component: () => import('@/views/admin/blogs-input'),
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/admin/types',
        name: 'admin-types',
        component: () => import('@/views/admin/types'),
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/admin/types/input',
        name: 'admin-types-input',
        component: () => import('@/views/admin/types-input'),
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/admin/types/:typeId/input',
        name: 'admin-types-edit',
        component: () => import('@/views/admin/types-input'),
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/admin/tags',
        name: 'admin-tags',
        component: () => import('@/views/admin/tags'),
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/admin/tags/input',
        name: 'admin-tags-input',
        component: () => import('@/views/admin/tags-input'),
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/admin/tags/:tagId/input',
        name: 'admin-tags-edit',
        component: () => import('@/views/admin/tags-input'),
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
