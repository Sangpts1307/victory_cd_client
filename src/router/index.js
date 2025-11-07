import LoginView from '@/views/LoginView.vue'
import SignupView from '@/views/SignupView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/login',
        },
        {
            path: '/login',
            name: 'Login',
            component: LoginView,
        },
        {
            path: '/signup',
            name: 'SignUp',
            component: SignupView,
        },
    ],
})

export default router
