import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login'
import Blog from '@/components/Blog'
import Blogs from '@/components/Blogs'
import BlogEdit from '@/components/BlogEdit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Blogs
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
      name: 'BlogEdit',
      component: BlogEdit
    },
    {
      path: '/blog/:blogId',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/blog/:blogId/edit',
      name: 'BlogEdit',
      component: BlogEdit
    }
  ]
})
