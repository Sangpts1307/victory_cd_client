import LoginView from '@/views/LoginView.vue'
import SignupView from '@/views/SignupView.vue'
import HomeView from '@/views/HomeView.vue'
import CartView from '@/views/CartView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import ProductView from '@/views/ProductView.vue'
import ProductDetailView from '@/views/ProductDetailView.vue'
import CheckoutView from '@/views/CheckoutView.vue'
import ProfileView from '@/views/ProfileView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior(to, from, savedPosition) {
        return {
            top: 0,
        }
    },
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
            path: '/product-detail/:id',
            name: 'ProductDetail',
            component: ProductDetailView,
        },
        {
            path: '/cart',
            name: 'Cart',
            component: CartView,
        },
        {
            path: '/checkout',
            name: 'Checkout',
            component: CheckoutView,
        },
        {
            path: '/profile',
            name: 'Profile',
            component: ProfileView,
        },
    ],
})

export default router
