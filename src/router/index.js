import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '../layout/index'
import LayoutAdmin from  '../layout/admin'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        component: Layout,
        children: [
            {
                path: '',
                name: 'login',
                component: () => import('@/views/login')
            }
        ]
    },
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
    {
        path: '/admin',
        component: LayoutAdmin,
        redirect: '/admin/index',
        children: [
            {
                path: 'index',
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
