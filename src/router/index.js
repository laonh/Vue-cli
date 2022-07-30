import {createRouter, createWebHistory} from 'vue-router'
import Layout from '../layout/Layout.vue'


const routes = [
    {
        path: '/',
        name: 'Layout',
        component: Layout,
        redirect: "/homeview", //访问/时自动跳转到/homeview
        children: [
            {
                path: 'homeview',
                name: 'HomeView',
                component: () => import("@/views/HomeView")
            },

        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import("../views/Login.vue")
    },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
