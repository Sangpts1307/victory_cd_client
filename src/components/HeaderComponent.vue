<template>
    <div id="header">
        <div class="header-top">
            Nhanh tay! Giảm giá đến 60% – Số lượng có hạn! <a href="#"> Mua ngay</a>
        </div>

        <div class="main-header">
            <div class="container-custom d-flex align-items-center justify-content-between">
                <a href="#" class="navbar-brand text-decoration-none text-dark">
                    Victory Store <small>technology</small>
                </a>

                <div class="search-wrap">
                    <div class="search-box">
                        <input type="text" placeholder="Tìm kiếm..." />
                    </div>
                    <button class="btn-search">
                        <i class="bi bi-search"></i>
                    </button>
                </div>

                <div class="header-actions">
                    <div class="account-dropdown">
                        <input type="checkbox" id="toggle-account">
                        <label for="toggle-account"
                            class="account-toggle d-flex align-items-center text-decoration-none">
                            <i class="bi bi-person"></i> Tài khoản
                        </label>

                        <div class="dropdown-menu-account">
                            <a href="#">Thông tin cá nhân</a>
                            <a href="#">Lịch sử mua hàng</a>
                            <a v-if="token !== null" href="#" @click="logout()">
                                Đăng xuất
                                <svg width="20" height="20" aria-hidden="true" role="img" focusable="false"
                                    viewBox="0 0 32 32">
                                    <path d="M16 25.6h-9.6v-19.2h9.6v3.2h3.2v-6.4h-16v25.6h16v-6.4h-3.2z"></path>
                                    <path d="M28.8 16l-6.4-5.6v4h-11.2v3.2h11.2v4z"></path>
                                </svg>
                            </a>
                            <a v-else href="#" @click="redirectLogin()">
                                Đăng nhập
                                <svg width="20" height="20" aria-hidden="true" role="img" focusable="false"
                                    viewBox="0 0 32 32">
                                    <path d="M16 25.6h-9.6v-19.2h9.6v3.2h3.2v-6.4h-16v25.6h16v-6.4h-3.2z"></path>
                                    <path d="M28.8 16l-6.4-5.6v4h-11.2v3.2h11.2v4z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div class="cart-badge">
                        <a href="#" class="d-flex align-items-center text-decoration-none">
                            <i class="bi bi-cart"></i> Giỏ hàng
                        </a>
                        <span class="badge">4</span>
                    </div>
                </div>


            </div>
        </div>

        <!-- Shop-category -->
        <div class="menu-row">
            <div class="container-custom">
                <a href="#" class="shop-category">
                    <i class="bi bi-grid-3x3-gap-fill"></i>
                    <div class="title">Giới thiệu</div>
                    <i class="bi bi-chevron-down ms-auto text-muted"></i>
                </a>

                <nav class="menu-nav">
                    <ul class="nav">
                        <li v-for="category in categories" :key="category.id" class="nav-item has-dropdown">

                            <a v-if="category.parent_id === 0" class="nav-link" href="#">{{ category.title }}</a>
                            <ul class="dropdown-menu">
                                <li v-for="child in category.children" :key="category.id">
                                    <a href="#">{{ child.title }}</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    data() {
        return {
            token: sessionStorage.getItem('token'),
            categories: [],
        }
    },
    created() {

    },
    mounted() {
        this.listCategory();
    },
    watch: {

    },
    computed: {

    },
    methods: {
        /*************  ✨ Windsurf Command 🌟  *************/
        /**
         * List all categories
         * @return {Promise<void>}
         */
        listCategory() {
            try {
                /**
                 * Make a GET request to the API to list all categories
                 * @return {Promise<AxiosResponse>}
                 */
                apiHelper.get('/list-category').then((res) => {
                    // console.log(res);
                    if (res.status == 200) {
                        /**
                         * Set the categories data to the component's data
                         * @param {Object[]} categories - The categories data
                         */
                        this.categories = res.data.data.categories;
                    }
                }).catch((error) => {
                    console.log(error);
                });
            } catch (error) {
                console.log(error);
            }
        },

        logout() {
            try {
                apiHelper.get('/logout', {
                    headers: {
                        Authorization: 'Bearer ' + this.token,
                    }
                }).then((res) => {
                    if (res.status == 200) {
                        sessionStorage.removeItem('token');
                        this.$router.push('/login');
                    }
                });
            } catch (error) {
                console.log(error);

            }
        },

        redirectLogin() {
            this.$router.push('login');
        }

    },
    /*******  36081e40-73b1-470e-a66b-e43fa183e34a  *******/
}
</script>

<style scoped>
:root {
    --primary: #3449ca;
}

body {
    font-family: "Outfit", Arial, sans-serif;
    background: #fff;
}

.header-top {
    background-image: url('../assets/campain-bar-1.jpg');
    ;
    text-align: center;
    padding: 13px 0;
    font-size: 13px;
    font-weight: 600;
}

.header-top a {
    text-decoration: underline;
    color: #222;
    font-weight: 700;
}

.main-header {
    background: #fff;
    padding: 20px 0;
}

.container-custom {
    max-width: 1250px;
    margin: 0 auto;
    padding: 0 50px;

}

.navbar-brand {
    font-weight: 800;
    font-size: 28px;
    display: flex;
    align-items: center;
    gap: 8px;
}

.navbar-brand small {
    font-size: 12px;
    font-weight: 500;
    color: #666;
}

.search-wrap {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 58%;
}

.search-box {
    flex: 1;
    display: flex;
    align-items: center;
    background: #fff;
    border-radius: 6px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
    border: 1px solid #eee;
}

.search-box input {
    height: 60px;
    border: 1px solid #eaeaea;
    outline: none;
    flex: 1;
    padding: 10px 14px;
    font-size: 15px;
    border-radius: 6px;
    background-color: #fff;
    box-shadow:
        0 2px 5px rgba(0, 0, 0, 0.05),
        0 4px 8px rgba(0, 0, 0, 0.04),
        2px 0 4px rgba(0, 0, 0, 0.025),
        -2px 0 4px rgba(0, 0, 0, 0.025);
    transition: all 0.2s ease;
}

.search-box input:focus {
    border-color: #007bff;
    box-shadow:
        0 4px 10px rgba(0, 123, 255, 0.15),
        0 6px 15px rgba(0, 123, 255, 0.1),
        2px 0 6px rgba(0, 123, 255, 0.08),
        -2px 0 6px rgba(0, 123, 255, 0.08);
}

.btn-search {
    width: 60px;
    height: 60px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--primary);
    color: #fff;
    border: none;
    transition: 0.2s;
}

.btn-search:hover {
    opacity: 0.9;
}

/* shop-category */
.menu-row {
    border-bottom: 1px solid #eaeaea;
    background: #fff;
}

.menu-row .container-custom {
    display: flex;
    align-items: center;
    gap: 24px;
    position: relative;
    padding: 0 20px;
}

/* Shop Category (Giới thiệu) */
.shop-category {
    height: 60px;
    width: 220px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 16px;
    border-radius: 6px;
    background: #fff;
    border: 1px solid #eaeaea;
    transition: all 0.3s ease;
    color: #111;
    text-decoration: none;
    position: relative;
    margin-left: 30px;
}

/* Giữ hover nhẹ, không gạch chân, không đổi màu */
.shop-category:hover {
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
    color: black;
}

/* Bỏ hoàn toàn hiệu ứng gạch chân */
.shop-category::after {
    display: none;
}

/* MENU CHÍNH */
.menu-nav {
    flex: 1;
    position: relative;
}

.menu-nav .nav {
    display: flex;
    align-items: center;
    gap: 25px;
    list-style: none;
    margin: 0 0 0 20px;
    padding: 0;
}

.menu-nav .nav-item {
    position: relative;
}

/* Menu cha – chữ đậm hơn, không đổi màu khi hover */
.menu-nav .nav-link {
    position: relative;
    color: #111;
    font-weight: 600;
    /* Đậm hơn */
    text-decoration: none;
    padding: 10px 0;
    display: inline-block;
    transition: color 0.3s ease;
}

/* Giữ hiệu ứng gạch chân động cho menu cha */
.menu-nav .nav-link::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 0;
    background-color: black;
    transition: width 0.3s ease;
}

/* Hover menu cha: chỉ hiện gạch chân, không đổi màu chữ */
.menu-nav .nav-link:hover::after {
    width: 100%;
}

/* Dropdown menu */
.dropdown-menu {
    display: none;
    position: absolute;
    top: 120%;
    left: 0;
    min-width: 220px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
    border-radius: 6px;
    padding: 10px 0;
    z-index: 50;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
}

/* Hiện dropdown khi hover */
.nav-item.has-dropdown:hover>.dropdown-menu {
    display: block;
    opacity: 1;
    visibility: visible;
    top: 100%;
}

.dropdown-menu li {
    list-style: none;
}

/* Danh mục con – không đổi màu khi hover, chỉ gạch chân chữ */
.dropdown-menu li a {
    display: inline-block;
    padding: 10px 16px;
    color: #111;
    font-weight: 500;
    text-decoration: none;
    position: relative;
    transition: all 0.3s ease;
}

.dropdown-menu li a::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 4px;
    height: 2px;
    width: 0;
    background-color: black;
    transition: width 0.3s ease;
}

.dropdown-menu li a:hover::after {
    width: 100%;
}


/* Tài khoản + Giỏ hàng */
.header-actions {
    display: flex;
    align-items: center;
    gap: 22px;
    position: relative;
}

.header-actions a,
.header-actions label {
    color: #111;
    font-weight: 700;
    cursor: pointer;
    text-decoration: none;
}

.header-actions i {
    font-size: 20px;
    margin-right: 6px;
    font-weight: 700;
}

/* --- Giỏ hàng --- */
.cart-badge {
    position: relative;
    display: inline-block;
}

.cart-badge .badge {
    position: absolute;
    top: -6px;
    right: -10px;
    background: #ff4d4d;
    color: #fff;
    font-size: 12px;
    padding: 4px 7px;
    border-radius: 50%;
}

.account-dropdown {
    position: relative;
}

#toggle-account {
    display: none;
}

.dropdown-menu-account {
    display: none;
    position: absolute;
    top: 130%;
    left: 0;
    background: #fff;
    border: 1px solid #eaeaea;
    border-radius: 6px;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
    padding: 10px 0;
    min-width: 180px;
    z-index: 50;
}

.dropdown-menu-account a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* đẩy icon sang phải */
    padding: 10px 16px;
    color: #111;
    font-weight: 500;
    text-decoration: none;
    transition: background 0.2s ease;
}

.dropdown-menu-account a svg {
    width: 18px;
    height: 18px;
    fill: #555;
    flex-shrink: 0;
    margin-left: 8px;
}

.dropdown-menu-account a:hover svg {
    fill: #000;
}

.dropdown-menu-account a:hover {
    background: #f9f9f9;
}


#toggle-account:checked~.dropdown-menu-account {
    display: block;
}

.dropdown-menu-account::before {
    content: "";
    position: absolute;
    top: -8px;
    left: 25px;
    border-width: 0 8px 8px 8px;
    border-style: solid;
    border-color: transparent transparent #fff transparent;
}


/* Banner */
.banner-section {
    width: 100%;
    margin: 0 auto;
    padding: 0;
}

.slider {
    position: relative;
    width: 100%;
    height: 480px;
    overflow: hidden;
    border-radius: 0;
    box-shadow: none;
    background-color: #f5f5f5;
}

.slides {
    display: flex;
    width: 100%;
    transition: transform 0.6s ease-in-out;
}

.slides img {
    width: 100%;
    height: 480px;
    object-fit: cover;
}

.slider-dots {
    position: absolute;
    bottom: 30px;
    left: 40px;
    display: flex;
    gap: 10px;
    z-index: 10;
}

.slider-dots span {
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.6);
    transition: all 0.3s;
    cursor: pointer;
}

.slider-dots span.active {
    background-color: #fff;
    transform: scale(1.2);
}

.slider-controls {
    position: absolute;
    bottom: 25px;
    right: 40px;
    display: flex;
    gap: 12px;
    z-index: 10;
}

.slider-controls button {
    background: rgba(255, 255, 255, 0.8);
    border: none;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    cursor: pointer;
    transition: all 0.3s;
}

.slider-controls button:hover {
    background: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
}

.container {
    max-width: 1200px;
    margin: auto;
    padding: 20px 20px 0 20px;
}
</style>