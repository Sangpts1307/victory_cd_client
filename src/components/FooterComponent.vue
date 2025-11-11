<template>
    <footer class="footer">
        <div class="footer-top container">
            <div class="footer-col">
                <h4>📞 Liên hệ</h4>
                <p>Liên hệ cho chúng tôi từ 8:00 AM to 6:00 PM<br><strong>01 234 567</strong></p>
            </div>

            <div class="footer-col">
                <h4>✉️ Email</h4>
                <p>Chúng tôi sẽ phản hồi sau 1-3 ngày làm việc</p>
                <p>nguyengoc0315@gmail.com</p>
            </div>

            <div class="footer-col subscribe">
                <h3>Hãy bắt đầu tìm hiểu</h3>
                <p>Hãy nhận xét, tips, cập nhật, thúc đẩy và nhiều hơn nữa.</p>
            </div>
        </div>

        <div class="footer-middle container">
            <div class="footer-brand">
                <h2 class="footer-logo">Victory Store<span>.</span></h2>
                <p class="slogan">Lựa chọn mua đĩa nhạc tốt nhất</p>
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
                    <h4>Tìm hiểu về chúng tôi</h4>
                    <ul>
                        <li><a href="#">Giới thiệu</a></li>
                        <li><a href="#">Tin tức và bài viết</a></li>
                        <li><a href="#">Sự nghiệp</a></li>
                        <li><a href="#">Đầu tư</a></li>
                        <li><a href="#">Liên hệ</a></li>
                    </ul>
                </div>

                <div class="footer-list">
                    <h4>Chăm sóc khách hàng</h4>
                    <ul>
                        <li><a href="#">Trung tâm hỗ trợ</a></li>
                        <li><a href="#">FAQ’s</a></li>
                        <li><a href="#">Linh hoạt</a></li>
                        <li><a href="#">Đánh giá</a></li>
                        <li><a href="#">Phương thức thanh toán</a></li>
                    </ul>
                </div>

                <div class="footer-list">
                    <h4>Đơn hàng & Thanh toán</h4>
                    <ul>
                        <li><a href="#">Đặt hàng nhanh</a></li>
                        <li><a href="#">Giao hàng và vận chuyển</a></li>
                        <li><a href="#">Trả hàng và thay đổi</a></li>
                        <li><a href="#">Giá cả phù hợp</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="footer-bottom container">
            <ul class="footer-policy">
                <li><a href="#">Chính sách</a></li>
                <li><a href="#">Điều khoản</a></li>
                <li><a href="#">Pháp lý</a></li>
                <li><a href="#">Sơ đồ website</a></li>
            </ul>
            <div class="footer-payments">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Mastercard-logo.png" alt="Mastercard">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/PayPal.svg" alt="PayPal">
            </div>
        </div>

        <p class="footer-copy">© 2025 Victory, All rights reserved.</p>
    </footer>
</template>

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