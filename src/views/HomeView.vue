<template>
    <div id="header">
        <div class="header-top">
            Nhanh tay! Giảm giá đến 60% – Số lượng có hạn! <a href="#"> Mua ngay</a>
        </div>

        <div class="main-header">
            <div class="container-custom d-flex align-items-center justify-content-between">
                <a href="#" class="navbar-brand text-decoration-none text-dark">
                    Motta <small>Best For Shopping</small>
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
                            <a href="#">
                                Đăng xuất
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
                        <li class="nav-item has-dropdown">
                            <a class="nav-link" href="#">CD nhạc Việt</a>
                            <ul class="dropdown-menu">
                                <li><a href="#">CD Nhạc Trẻ</a></li>
                                <li><a href="#">CD Trữ Tình</a></li>
                                <li><a href="#">CD Cổ Điển</a></li>
                            </ul>
                        </li>
                        <li class="nav-item has-dropdown">
                            <a class="nav-link" href="#">CD nhạc Quốc tế</a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Rock</a></li>
                                <li><a href="#">Jazz</a></li>
                                <li><a href="#">Pop</a></li>
                            </ul>
                        </li>
                        <li class="nav-item has-dropdown">
                            <a class="nav-link" href="#">CD Hải ngoại</a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Bolero</a></li>
                                <li><a href="#">Trữ tình xưa</a></li>
                            </ul>
                        </li>
                        <li class="nav-item"><a class="nav-link" href="#">Đĩa than</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">Cassettes</a></li>
                    </ul>
                </nav>
            </div>
        </div>
        <!-- Banner -->
        <div class="banner-section container">
            <ImageSliderComponent :images="bannerImages" />
        </div>

    </div>
    <div class="body">
        <!-- Sản phẩm bán chạy -->
        <div class="best-seller container mt-5">
            <div class="section-header d-flex justify-content-between align-items-center mb-4">
                <h4 class="fw-bold">Sản phẩm bán chạy</h4>
                <a href="#" class="text-muted">Tất cả sản phẩm</a>
            </div>

            <div class="row g-4">
                <div class="col-md-3 col-sm-6">
                    <div class="best-seller-item" style="background-color:#d8f3dc;">
                        <div>
                            <h5>Small Appliances</h5>
                            <p>Up to 40% off Kitchen Products.</p>
                            <a href="#">Shop Now</a>
                        </div>
                        <img src="../assets/headphone.png" alt="Small Appliances">
                    </div>
                </div>

                <div class="col-md-3 col-sm-6">
                    <div class="best-seller-item" style="background-color:#ffe0ef;">
                        <div>
                            <h5>Premium Beauty</h5>
                            <p>Up to 25% off Hair Care Products.</p>
                            <a href="#">Shop Now</a>
                        </div>
                        <img src="../assets/cd2.png" alt="Premium Beauty">
                    </div>
                </div>

                <div class="col-md-3 col-sm-6">
                    <div class="best-seller-item" style="background-color:#dce9f5;">
                        <div>
                            <h5>Indoor Furniture</h5>
                            <p>Save 30% Today, Even on Furniture.</p>
                            <a href="#">Shop Now</a>
                        </div>
                        <img src="../assets/cd3.png" alt="Indoor Furniture">
                    </div>
                </div>

                <div class="col-md-3 col-sm-6">
                    <div class="best-seller-item" style="background-color:#f8e7db;">
                        <div>
                            <h5>Cell Phones & Smartphones</h5>
                            <p>Up to 15% off Cell Phones Products.</p>
                            <a href="#">Shop Now</a>
                        </div>
                        <img src="../assets/cd4.png" alt="Smartphones">
                    </div>
                </div>
            </div>
        </div>


        <!-- Sản phẩm -->
        <div class="product-section container mt-5">
            <div class="section-header d-flex justify-content-between align-items-center mb-4">
                <h4 class="fw-bold">Sản phẩm</h4>
                <a href="#" class="text-muted">Tất cả sản phẩm</a>
            </div>

            <div class="row g-4">
                <!-- Lặp 5 sản phẩm -->
                <div class="col-md-2_4 col-sm-6">
                    <div class="product-card text-center p-3 rounded-3 position-relative">
                        <span class="badge bg-warning text-dark position-absolute top-0 start-0 m-2">Hot</span>
                        <img src="../assets/cd1.png" alt="NFL Ball" class="img-fluid mb-3">
                        <h6 class="fw-semibold product-name">NFL _The Duke_ Replica Football</h6>
                        <p class="text-dark fw-bold mb-2">29.00₫</p>

                        <!-- Hover buttons -->
                        <div class="product-actions">
                            <button class="btn btn-primary w-100 mb-2">Thêm vào giỏ</button>
                            <button class="btn btn-outline-dark w-100">Mua ngay</button>
                        </div>
                    </div>
                </div>

                <div class="col-md-2_4 col-sm-6">
                    <div class="product-card text-center p-3 rounded-3 position-relative">
                        <span class="badge bg-warning text-dark position-absolute top-0 start-0 m-2">Hot</span>
                        <img src="../assets/cd2.png" alt="Soft Spot Lamp" class="img-fluid mb-3">
                        <h6 class="fw-semibold product-name">Soft Spot Solar Lamp 24.5cm</h6>
                        <p class="text-dark fw-bold mb-2">100.00₫</p>
                        <div class="product-actions">
                            <button class="btn btn-primary w-100 mb-2">Thêm vào giỏ</button>
                            <button class="btn btn-outline-dark w-100">Mua ngay</button>
                        </div>
                    </div>
                </div>

                <div class="col-md-2_4 col-sm-6">
                    <div class="product-card text-center p-3 rounded-3 position-relative">
                        <span class="badge bg-warning text-dark position-absolute top-0 start-0 m-2">Hot</span>
                        <img src="../assets/cd3.png" alt="Kettlebell" class="img-fluid mb-3">
                        <h6 class="fw-semibold product-name">Kettlebell Connect 2.0</h6>
                        <p class="text-dark fw-bold mb-2">115.00₫</p>
                        <div class="product-actions">
                            <button class="btn btn-primary w-100 mb-2">Thêm vào giỏ</button>
                            <button class="btn btn-outline-dark w-100">Mua ngay</button>
                        </div>
                    </div>
                </div>

                <div class="col-md-2_4 col-sm-6">
                    <div class="product-card text-center p-3 rounded-3 position-relative">
                        <span class="badge bg-warning text-dark position-absolute top-0 start-0 m-2">Hot</span>
                        <img src="../assets/cd4.png" alt="Lamp" class="img-fluid mb-3">
                        <h6 class="fw-semibold product-name">Lex Black Dome USB Desk Lamp</h6>
                        <p class="text-dark fw-bold mb-2">24.35₫</p>
                        <div class="product-actions">
                            <button class="btn btn-primary w-100 mb-2">Thêm vào giỏ</button>
                            <button class="btn btn-outline-dark w-100">Mua ngay</button>
                        </div>
                    </div>
                </div>

                <div class="col-md-2_4 col-sm-6">
                    <div class="product-card text-center p-3 rounded-3 position-relative">
                        <span class="badge bg-warning text-dark position-absolute top-0 start-0 m-2">Hot</span>
                        <img src="../assets/cd5.png" alt="Carrie Lamp" class="img-fluid mb-3">
                        <h6 class="fw-semibold product-name">Carrie Table Lamp</h6>
                        <p class="text-dark fw-bold mb-2">200.00₫</p>
                        <div class="product-actions">
                            <button class="btn btn-primary w-100 mb-2">Thêm vào giỏ</button>
                            <button class="btn btn-outline-dark w-100">Mua ngay</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-2_4 col-sm-6">
                    <div class="product-card text-center p-3 rounded-3 position-relative">
                        <span class="badge bg-warning text-dark position-absolute top-0 start-0 m-2">Hot</span>
                        <img src="../assets/cd1.png" alt="NFL Ball" class="img-fluid mb-3">
                        <h6 class="fw-semibold product-name">NFL _The Duke_ Replica Football</h6>
                        <p class="text-dark fw-bold mb-2">29.00₫</p>

                        <!-- Hover buttons -->
                        <div class="product-actions">
                            <button class="btn btn-primary w-100 mb-2">Thêm vào giỏ</button>
                            <button class="btn btn-outline-dark w-100">Mua ngay</button>
                        </div>
                    </div>
                </div>

                <div class="col-md-2_4 col-sm-6">
                    <div class="product-card text-center p-3 rounded-3 position-relative">
                        <span class="badge bg-warning text-dark position-absolute top-0 start-0 m-2">Hot</span>
                        <img src="../assets/cd2.png" alt="Soft Spot Lamp" class="img-fluid mb-3">
                        <h6 class="fw-semibold product-name">Soft Spot Solar Lamp 24.5cm</h6>
                        <p class="text-dark fw-bold mb-2">100.00₫</p>
                        <div class="product-actions">
                            <button class="btn btn-primary w-100 mb-2">Thêm vào giỏ</button>
                            <button class="btn btn-outline-dark w-100">Mua ngay</button>
                        </div>
                    </div>
                </div>

                <div class="col-md-2_4 col-sm-6">
                    <div class="product-card text-center p-3 rounded-3 position-relative">
                        <span class="badge bg-warning text-dark position-absolute top-0 start-0 m-2">Hot</span>
                        <img src="../assets/cd3.png" alt="Kettlebell" class="img-fluid mb-3">
                        <h6 class="fw-semibold product-name">Kettlebell Connect 2.0</h6>
                        <p class="text-dark fw-bold mb-2">115.00₫</p>
                        <div class="product-actions">
                            <button class="btn btn-primary w-100 mb-2">Thêm vào giỏ</button>
                            <button class="btn btn-outline-dark w-100">Mua ngay</button>
                        </div>
                    </div>
                </div>

                <div class="col-md-2_4 col-sm-6">
                    <div class="product-card text-center p-3 rounded-3 position-relative">
                        <span class="badge bg-warning text-dark position-absolute top-0 start-0 m-2">Hot</span>
                        <img src="../assets/cd4.png" alt="Lamp" class="img-fluid mb-3">
                        <h6 class="fw-semibold product-name">Lex Black Dome USB Desk Lamp</h6>
                        <p class="text-dark fw-bold mb-2">24.35₫</p>
                        <div class="product-actions">
                            <button class="btn btn-primary w-100 mb-2">Thêm vào giỏ</button>
                            <button class="btn btn-outline-dark w-100">Mua ngay</button>
                        </div>
                    </div>
                </div>

                <div class="col-md-2_4 col-sm-6">
                    <div class="product-card text-center p-3 rounded-3 position-relative">
                        <span class="badge bg-warning text-dark position-absolute top-0 start-0 m-2">Hot</span>
                        <img src="../assets/cd5.png" alt="Carrie Lamp" class="img-fluid mb-3">
                        <h6 class="fw-semibold product-name">Carrie Table Lamp</h6>
                        <p class="text-dark fw-bold mb-2">200.00₫</p>
                        <div class="product-actions">
                            <button class="btn btn-primary w-100 mb-2">Thêm vào giỏ</button>
                            <button class="btn btn-outline-dark w-100">Mua ngay</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <!-- Categories -->
        <div class="categories container mt-5 mb-5">
            <h4 class="fw-bold mb-4">Categories</h4>
            <div class="row text-center g-4 justify-content-center">
                <div class="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div class="category-item">
                        <img src="../assets/cassete.png" alt="Furniture" class="rounded-circle img-fluid mb-2">
                        <p style="font-weight: bold;">Furniture</p>
                    </div>
                </div>
                <div class="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div class="category-item">
                        <img src="../assets/banner2.jpg" alt="Shoes" class="rounded-circle img-fluid mb-2">
                        <p style="font-weight: bold;">Furniture</p>
                    </div>
                </div>
                <div class="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div class="category-item">
                        <img src="../assets/headphone.png" alt="Smartphones" class="rounded-circle img-fluid mb-2">
                        <p style="font-weight: bold;">Furniture</p>
                    </div>
                </div>
                <div class="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div class="category-item">
                        <img src="../assets/cd5.png" alt="Air Purifiers" class="rounded-circle img-fluid mb-2">
                        <p style="font-weight: bold;">Furniture</p>
                    </div>
                </div>
                <div class="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div class="category-item">
                        <img src="../assets/banner3.jpg" alt="Toys" class="rounded-circle img-fluid mb-2">
                        <p style="font-weight: bold;">Furniture</p>
                    </div>
                </div>
                <div class="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div class="category-item">
                        <img src="../assets/chamcham.png" alt="Headphones" class="rounded-circle img-fluid mb-2">
                        <p style="font-weight: bold;">More</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <div class="footer">
        <div class="footer-top container">
            <div class="footer-col">
                <h4>📞 Call</h4>
                <p>Call us from 8am to 12am ET.<br><strong>1-866-237-8289</strong></p>
            </div>

            <div class="footer-col">
                <h4>✉️ Email</h4>
                <p>Our response time is 1 to 3 business days.<br>
                    <a href="#">Send a Message</a>
                </p>
            </div>

            <div class="footer-col subscribe">
                <h3>Let’s keep in touch</h3>
                <p>Get recommendations, tips, updates, promotions and more.</p>
            </div>
        </div>

        <div class="footer-middle container">
            <div class="footer-brand">
                <h2 class="footer-logo">Victory CDs<span>.</span></h2>
                <p class="slogan">Best For Shopping</p>
                <p class="desc">Sed do eiusmod tempor incididunt ut labore dolore magna.</p>
                <div class="socials">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-youtube"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-whatsapp"></i></a>
                </div>
            </div>

            <div class="footer-links">
                <div class="footer-list">
                    <h4>Get to Know Us</h4>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">News & Blog</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Investors</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>

                <div class="footer-list">
                    <h4>Customer Service</h4>
                    <ul>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">FAQ’s</a></li>
                        <li><a href="#">Accessibility</a></li>
                        <li><a href="#">Feedback</a></li>
                        <li><a href="#">Size Guide</a></li>
                        <li><a href="#">Payment Method</a></li>
                    </ul>
                </div>

                <div class="footer-list">
                    <h4>Orders & Return</h4>
                    <ul>
                        <li><a href="#">Track Order</a></li>
                        <li><a href="#">Shipping & Delivery</a></li>
                        <li><a href="#">Return & Exchange</a></li>
                        <li><a href="#">Price Match Guarantee</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="footer-bottom container">
            <ul class="footer-policy">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Legal</a></li>
                <li><a href="#">Site Map</a></li>
            </ul>
            <div class="footer-payments">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Mastercard-logo.png" alt="Mastercard">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/PayPal.svg" alt="PayPal">
            </div>
        </div>

        <p class="footer-copy">© 2025 Victory, All rights reserved.</p>
    </div>

</template>

<!-- Script for sliders -->
<script setup>
import ImageSliderComponent from '@/components/ImageSliderComponent.vue'

const bannerImages = [
    new URL('../assets/banner1.jpg', import.meta.url).href,
    new URL('../assets/banner2.jpg', import.meta.url).href,
    new URL('../assets/banner3.jpg', import.meta.url).href
]
</script>

<script>

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


/* Body */
/* sản phẩm bán chạy */
.best-seller-item {
    position: relative;
    overflow: hidden;
    text-align: left;
    padding: 35px 28px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.best-seller-item h5 {
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 12px;
}

.best-seller-item p {
    font-size: 16px;
    margin-bottom: 10px;
    line-height: 1.5;
}

.best-seller-item a {
    font-weight: 600;
    text-decoration: underline;
    font-size: 16px;
}

/* Màu chữ theo từng nền */
.best-seller-item[style*="#d8f3dc"] {
    background-color: #b7e4c7 !important;
    /* xanh đậm hơn tí */
}

.best-seller-item[style*="#d8f3dc"] h5,
.best-seller-item[style*="#d8f3dc"] p,
.best-seller-item[style*="#d8f3dc"] a {
    color: #1b4332;
}

.best-seller-item[style*="#ffe0ef"] {
    background-color: #ffb6d5 !important;
    /* hồng đậm hơn */
}

.best-seller-item[style*="#ffe0ef"] h5,
.best-seller-item[style*="#ffe0ef"] p,
.best-seller-item[style*="#ffe0ef"] a {
    color: #6d214f;
}

.best-seller-item[style*="#dce9f5"] {
    background-color: #a8cbe8 !important;
    /* xanh dương đậm hơn */
}

.best-seller-item[style*="#dce9f5"] h5,
.best-seller-item[style*="#dce9f5"] p,
.best-seller-item[style*="#dce9f5"] a {
    color: #103f6e;
}

.best-seller-item[style*="#f8e7db"] h5,
.best-seller-item[style*="#f8e7db"] p,
.best-seller-item[style*="#f8e7db"] a {
    color: #7a4a1a;
}

/* Ảnh và hiệu ứng hover */
.best-seller-item img {
    width: 100%;
    max-height: 200px;
    /* ảnh to hơn */
    object-fit: contain;
    margin-top: 15px;
    transition: transform 0.4s ease;
}

.best-seller-item:hover img {
    transform: scale(1.1);
    /* phóng to hơn chút cho hiệu ứng rõ */
}




/* sản phẩm + cate */
/* ==== PRODUCT CARD (expand overlay) ==== */
.col-md-2_4 {
    flex: 0 0 20%;
    max-width: 20%;
    position: relative;
}

.product-section {
    position: relative;
    z-index: 1;
    overflow: visible;
}

.product-card {
    position: relative;
    background: #fff;
    border: 1px solid #eee;
    border-radius: 8px;
    overflow: visible;
    transition: all 0.3s ease;
    z-index: 1;
    padding: 15px;
    text-align: center;
}

/* hình ảnh */
.product-card img {
    width: 100%;
    height: 160px;
    object-fit: contain;
    transition: all 0.3s ease;
}

/* tên sản phẩm */
.product-card .product-name {
    font-size: 15px;
    font-weight: 500;
    height: 40px;
    overflow: hidden;
    margin: 10px 0 6px;
}

/* giá */
.product-card .product-price {
    color: #333;
    font-weight: 700;
    margin-bottom: 12px;
}

/* phần chứa nút */
.product-card .product-actions {
    position: absolute;
    bottom: -110px;
    /* ↓ thấp hơn 1 chút để không che giá */
    left: 0;
    width: 100%;
    background: #fff;
    padding: 16px 15px 18px;
    box-shadow: 0 18px 35px rgba(0, 0, 0, 0.15);
    border-radius: 0 0 8px 8px;

    opacity: 0;
    visibility: hidden;
    transform: translateY(10px);
    transition: all 0.3s ease;
}

/* nút */
.product-card .product-actions .btn {
    display: block;
    width: 100%;
    margin-bottom: 10px;
    border-radius: 4px;
    font-size: 14px;
    padding: 10px;
}

/* hover */
.product-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 14px 30px rgba(0, 0, 0, 0.25);
    z-index: 5;
}

.product-card:hover .product-actions {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

/* responsive */
@media (max-width: 991px) {
    .col-md-2_4 {
        flex: 0 0 33.3333%;
        max-width: 33.3333%;
    }
}


/* ==== CATEGORIES ==== */
.category-item {
    transition: all 0.3s ease;
    cursor: pointer;
}

.category-item img {
    width: 170px;
    /* tăng từ 140px lên 170px */
    height: 170px;
    object-fit: cover;
    border: 3px solid #f2f2f2;
    /* nhẹ nhàng cho viền sáng */
    transition: filter 0.3s ease;
}

.category-item:hover img {
    filter: brightness(1.05);
    /* chỉ làm sáng nhẹ khi hover */
}

.category-item p {
    font-weight: 500;
    margin-top: 6px;
    color: #333;
    font-size: 15px;
}


/* Footer */
.footer {
    background: #fff;
    color: #222;
    font-family: "Inter", sans-serif;
    border-top: 1px solid #eaeaea;
}

.container {
    max-width: 1200px;
    margin: auto;
    padding: 20px 20px 0 20px;
}

/* === TOP === */
.footer-top {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
    padding-top: 30px;
    margin-bottom: 40px;
}

.footer-col {
    flex: 1;
    min-width: 240px;
    margin-bottom: 20px;
}

.footer-col h4,
.footer-col h3 {
    font-weight: 600;
    margin-bottom: 8px;
}

.footer-col p,
.footer-col a {
    color: #555;
    font-size: 14px;
    line-height: 1.6;
}

/* === MIDDLE === */
.footer-middle {
    display: grid;
    grid-template-columns: 1.3fr 2fr;
    gap: 40px;
    align-items: flex-start;
    padding-bottom: 10px;
}

.footer-logo {
    font-weight: 700;
    font-size: 26px;
    margin-bottom: 6px;
}

.footer-logo span {
    color: #ff4d00;
}

.footer-brand .socials a {
    margin-right: 12px;
    font-size: 18px;
    color: #333;
    transition: color 0.3s;
}

.footer-brand .socials a:hover {
    color: #007bff;
}

.footer-links {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
}

.footer-list h4 {
    margin-bottom: 10px;
    font-size: 15px;
    font-weight: 600;
}

.footer-list ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.footer-list li {
    margin-bottom: 6px;
}

.footer-list a {
    color: #555;
    text-decoration: none;
    font-size: 14px;
    transition: color 0.3s;
}

.footer-list a:hover {
    color: #007bff;
}

/* === BOTTOM === */
.footer-bottom {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    border-top: 1px solid #eee;
    padding-top: 20px;
    align-items: center;
}

.footer-policy {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 0;
    margin: 0;
}

.footer-policy a {
    color: #666;
    font-size: 14px;
    text-decoration: none;
}

.footer-payments img {
    height: 22px;
    margin-left: 12px;
    vertical-align: middle;
}

.footer-copy {
    text-align: center;
    font-size: 13px;
    color: #888;
    margin-top: 20px;
    padding-bottom: 20px;
}

/* === Responsive === */
@media (max-width: 991px) {
    .footer-middle {
        grid-template-columns: 1fr;
    }

    .footer-links {
        grid-template-columns: repeat(2, 1fr);
    }

    .footer-bottom {
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;
    }
}

@media (max-width: 576px) {
    .footer-links {
        grid-template-columns: 1fr;
    }

    .footer-top {
        flex-direction: column;
    }

    .footer-copy {
        font-size: 12px;
    }
}
</style>
