<template>
    <HeaderComponent />

    <div class="body container py-5">
        <h1 class="my-account">Thông tin tài khoản</h1>

        <div class="row mt-4">
            <!-- LEFT NAV TABS -->
            <div class="col-md-3">
                <div class="sidebar">
                    <div class="user-info d-flex align-items-center px-3 py-3">
                        <img :src="user.avatar || defaultAvatar" class="avatar-img" alt="Avatar" />
                        <div class="ms-3">
                            <div class="hello-text">Hello!</div>
                            <p class="username">{{ user.name }}</p>
                        </div>
                    </div>

                    <ul class="menu-list">

                        <!-- TAB PROFILE -->
                        <li :class="{ active: activeMainTab === 'profile' }" @click="setMainTab('profile')">
                            Thông tin cá nhân
                        </li>

                        <!-- TAB ORDERS -->
                        <li :class="{ active: activeMainTab === 'orders' }" @click="setMainTab('orders')">
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
                    <UserInfoComponent :user="user" />
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
import HeaderComponent from '../components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import OrderHistoryComponent from '@/components/OrderHistoryComponent.vue'
import UserInfoComponent from '@/components/UserInfoComponent.vue'

import { ref, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const defaultAvatar = '../assets/MyLogo.jpg' // Nếu user chưa có avatar
const user = ref({})

// Tab chính
const activeMainTab = ref("profile")

// Hàm đổi tab + cập nhật URL
const setMainTab = (tab) => {
    activeMainTab.value = tab
    router.replace({ query: { tab } })  // replace để không spam history
}

// Khi load trang → đọc URL để set tab mặc định
onMounted(() => {
    if (route.query.tab === 'orders' || route.query.tab === 'profile') {
        activeMainTab.value = route.query.tab
    }

    // Lấy thông tin user
    const storedUser = localStorage.getItem('auth') || sessionStorage.getItem('auth')
    if (storedUser) {
        user.value = JSON.parse(storedUser)
    }
})

// WATCH: Khi URL đổi → tab đổi theo (QUAN TRỌNG)
watch(
    () => route.query.tab,
    (newTab) => {
        if (newTab && ['profile', 'orders'].includes(newTab)) {
            activeMainTab.value = newTab
        }
    }
)
</script>
<script>
export default {
    props: {
        product: Object,
    },
    methods: {
        logout() {
            try {
                apiHelper
                    .get('/logout', {
                        headers: {
                            Authorization: 'Bearer ' + this.token,
                        },
                    })
                    .then((res) => {
                        if (res.status == 200) {
                            sessionStorage.removeItem('token')
                            this.$router.push('/login')
                        }
                    })
            } catch (error) {
                console.log(error)
            }
        },
    }
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
    background: #f8f8f8;
}

.menu-list li:hover::before {
    width: 4px;
}

/* Active */
.menu-list li.active {
    background: #3449ca;
    color: #fff;
    font-weight: 600;
}

.menu-list li.active:hover {
    background: #3449ca;
}
</style>
