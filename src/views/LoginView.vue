<script setup>
import GoogleLoginComponent from '@/components/GoogleLoginComponent.vue'
import { apiHelper } from '@/helpers/axios';
import HomeView from './HomeView.vue';
</script>

<template>
    <div class="signin-container">
        <div class="signin-card">
            <img src="@/assets/MyLogo.jpg" alt="My Logo" class="logo" />

            <h2 class="title">Đăng nhập tài khoản</h2>
            <p class="subtitle">Chào mừng trở lại! Vui lòng đăng nhập để tiếp tục.</p>

            <form class="form">
                <div class="input-group">
                    <label>Email</label>
                    <input type="email" v-model="email" placeholder="Nhập email của bạn" required />
                </div>

                <div class="input-group">
                    <label>Mật khẩu</label>
                    <input type="password" v-model="password" placeholder="Nhập mật khẩu" required />
                </div>

                <button v-on:click="login()" type="submit" class="btn-primary" :disabled="loading">
                    <span v-if="loading">Đang đăng nhập...</span>
                    <span v-else>Đăng nhập</span>
                </button>
            </form>

            <div class="divider">
                <span>Hoặc</span>
            </div>

            <GoogleLoginComponent :title="'Đăng nhập'" />

            <p class="footer-text">
                Chưa có tài khoản?
                <button @click="navigateToSignup">Đăng ký ngay</button>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loading: false,
            email: '',
            password: '',
        }
    },
    methods: {
        navigateToSignup() {
            this.$router.push('/signup')
        },

        login() {
            try {
                this.loading = true;
                const formData = new FormData();
                formData.append('email', this.email);
                formData.append('password', this.password);
                apiHelper.post('/login', formData).then((res) => {
                    // console.log(res);
                    if (res.status == 200) {
                        sessionStorage.setItem('token', res.data.data.token);
                        this.$router.push('/home');
                    }
                }).catch((error) => {
                    console.log(error);
                    this.loading = false;
                });
            } catch (error) {
                console.log(error);
            }
        }
    },
}
</script>

<style scoped>
.signin-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: #ffffff;
    font-family: 'Segoe UI', sans-serif;
}

.signin-card {
    background: #ffffff;
    width: 600px;
    max-height: 90vh;
    border-radius: 16px;
    padding: 60px 60px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.logo {
    width: 50px;
    margin: 0 auto 5px;
    display: block;
}

.title {
    font-size: 24px;
    font-weight: bold;
    color: #222;
    margin-bottom: 8px;
}

.subtitle {
    font-size: 15px;
    color: #666;
    margin-bottom: 35px;
}

.form {
    text-align: left;
    flex-grow: 1;
}

.input-group {
    margin-bottom: 22px;
}

.input-group label {
    display: block;
    font-size: 14px;
    color: #444;
    margin-bottom: 6px;
}

.input-group input {
    width: 100%;
    padding: 12px 14px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 14px;
    transition: border-color 0.2s ease;
    background-color: #fff;
}

.input-group input:focus {
    border-color: #4e4376;
    outline: none;
}

.btn-primary {
    width: 100%;
    padding: 13px;
    background-color: #435776;
    color: #fff;
    font-size: 15px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.2s;
}

.btn-primary:hover {
    background-color: #2b5876;
}

.btn-primary:disabled {
    background-color: #aaa;
    cursor: not-allowed;
}

.divider {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 28px 0;
    color: #888;
    font-size: 13px;
    position: relative;
}

.divider::before,
.divider::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #ccc;
    margin: 0 10px;
}

.footer-text {
    margin-top: 25px;
    font-size: 13px;
    color: #666;
}

.footer-text button {
    background: transparent;
    border: none;
    cursor: pointer;
}

.footer-text button:hover {
    text-decoration: underline;
}
</style>
