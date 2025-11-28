<template>
    <HeaderComponent />

    <div class="body container py-5">
        <h1 class="my-account">Thông tin tài khoản</h1>

        <div class="row mt-4">
            <!-- LEFT NAV TABS -->
            <div class="col-md-3">
                <div class="sidebar">
                    <div class="user-info d-flex align-items-center px-3 py-3">
                        <img class="avatar-img" src="../assets/avt_sangpt.jpg" alt="Avatar">
                        <div class="ms-3">
                            <div class="hello-text">Hello!</div>
                            <p class="username">phamsangit137</p>
                        </div>
                    </div>

                    <ul class="menu-list">
                        <li :class="{ active: activeMainTab === 'profile' }" @click="activeMainTab = 'profile'">
                            Thông tin cá nhân
                        </li>

                        <li :class="{ active: activeMainTab === 'orders' }" @click="activeMainTab = 'orders'">
                            Đơn hàng
                        </li>

                        <li>
                            Đăng xuất
                        </li>
                    </ul>
                </div>
            </div>

            <!-- RIGHT CONTENT -->
            <div class="col-md-9">

                <!-- TAB: THÔNG TIN CÁ NHÂN -->
                <div v-if="activeMainTab === 'profile'" class="content-box">
                    <UserInfoComponent />
                </div>

                <!-- TAB: ĐƠN HÀNG -->
                <div v-if="activeMainTab === 'orders'" class="content-box">
                    <OrderHistoryComponent />
                </div>

            </div>
        </div>
    </div>

    <FooterComponent />
</template>



<script setup>
import axios from 'axios'
import HeaderComponent from '../components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import { apiHelper } from '@/helpers/axios'
import { ref } from 'vue'
import OrderHistoryComponent from '@/components/OrderHistoryComponent.vue'
import UserInfoComponent from '@/components/UserInfoComponent.vue'

const activeMainTab = ref("profile");   // tab chính
const orderTab = ref("preparing");      // tab con của Đơn hàng

const products = ref([
    { name: "Tai nghe Bluetooth Sony", price: 24.35, quantity: 1 },
    { name: "Tai nghe Bluetooth Sony", price: 24.35, quantity: 1 },
])

const increase = (index) => {
    products.value[index].quantity++
}

const decrease = (index) => {
    if (products.value[index].quantity > 1) {
        products.value[index].quantity--
    }
}
</script>

<script>
export default {
    props: {
        product: Object,
    },

    data() {
        return {

        }
    },
    created() { },
    mounted() {
    },
    watch: {},
    computed: {

    },
    methods: {
        formatPrice(value) {
            if (!value) return '0 đ'
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ' đ'
        },

    },
}
</script>

<style scoped>
body {
    font-family: 'Outfit', Arial, sans-serif;
    background: #fff;
}

.container {
    max-width: 1050px;
    margin: auto;
    padding: 0 20px 0 20px;
}

.my-account {
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 40px;
    text-align: center;
}

/* Sidebar */
.sidebar {
    border: 1px solid #eee;
    border-radius: 8px;
    background: #ffffff;
    padding-bottom: 10px;
}

/* User Info */
.user-info {
    border-bottom: 1px solid #eee;
}

.avatar-img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
}

/* Text Hello + Username */
.hello-text {
    font-size: 22px;
    font-weight: 700;
    line-height: 1.1;
    margin: 0;
}

.username {
    font-size: 14px;
    color: #666;
    margin: 4px 0 0;
}

/* Menu */
.menu-list {
    list-style: none;
    margin: 0;
    padding: 0;
}

.menu-list li {
    padding: 14px 20px;
    border-top: 1px solid #eee;
    cursor: pointer;
    font-size: 15px;
    color: #777;
    /* Nhạt ban đầu */
    position: relative;
    font-weight: 400;
    transition: all .25s ease;
}

/* Effect highlight trái */
.menu-list li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 0;
    background: #3449ca;
    transition: width .25s ease;
}

/* Hover effect */
.menu-list li:hover {
    color: #111;
    font-weight: 600;
    /* Chữ đậm khi hover */
    background: #f8f8f8;
}

.menu-list li:hover::before {
    width: 4px;
}

/* Active mặc định đen trắng */
.menu-list li.active {
    background: #3449ca;
    color: #fff;
    font-weight: 600;
}

.menu-list li.active:hover {
    background: #3449ca;
}
</style>