import LoginView from '@/views/LoginView.vue'
import SignupView from '@/views/SignupView.vue'
import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import ProductView from '@/views/ProductView.vue'
import ProductDetailView from '@/views/ProductDetailView.vue'      

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/home',
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
        {
            path: '/home',
            name: 'Home',
            component: HomeView,
        },
        {
            path: '/product',
            name: 'Product',
            component: ProductView,
        },
        {
            path: '/product-detail',
            name: 'ProductDetail',
            component: ProductDetailView
        }
    ],
})

export default router
