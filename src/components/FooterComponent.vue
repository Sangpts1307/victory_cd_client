<template>
    <footer class="footer">
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