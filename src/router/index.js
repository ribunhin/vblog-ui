import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from "../views/Index"
import Blogs from '../views/Blogs.vue'
import Blog from '../views/Blog.vue'
import BlogEdit from '../views/BlogEdit.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/blogs',
        name: 'Blogs',
        component: Blogs
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/blog/input',
        name: 'BlogInput',
        component: BlogEdit,
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/blog/:blogId',
        name: 'Blog',
        component: Blog
    },
    {
        path: '/blog/:blogId/edit',
        name: 'BlogEdit',
        component: BlogEdit,
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
