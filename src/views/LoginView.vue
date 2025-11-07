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
                    <input
                        type="password"
                        v-model="password"
                        placeholder="Nhập mật khẩu"
                        required
                    />
                </div>

                <button type="submit" class="btn-primary" :disabled="loading">
                    <span v-if="loading">Đang đăng nhập...</span>
                    <span v-else>Đăng nhập</span>
                </button>
            </form>

            <div class="divider">
                <span>Hoặc</span>
            </div>

            <div class="social-login">
                <button class="btn-social">
                    <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" />
                    <span>Đăng nhập bằng Google</span>
                </button>
            </div>

            <p class="footer-text">
                Chưa có tài khoản?
                <a href="#">Đăng ký ngay</a>
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

.social-login {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.btn-social {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 6px;
    background: #fafafa;
    cursor: pointer;
    font-size: 14px;
    transition:
        background 0.2s,
        transform 0.1s;
}

.btn-social img {
    width: 20px;
    height: 20px;
}

.btn-social:hover {
    background: #f0f0f0;
    transform: scale(1.02);
}

.footer-text {
    margin-top: 25px;
    font-size: 13px;
    color: #666;
}

.footer-text a {
    color: #4e4376;
    font-weight: 600;
    text-decoration: none;
}

.footer-text a:hover {
    text-decoration: underline;
}
</style>
