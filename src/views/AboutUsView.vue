<template>
    <HeaderComponent />

    <div class="main-content-container">
        <section class="section-top-banner">
            <div class="container">
                <h2 class="text-center section-title-large">
                    Chúng tôi tin rằng sản phẩm tuyệt vời <br> nên dành cho mọi người
                </h2>
                <img class="banner-image-wrapper mt-4" src=" ../assets/about_us.png" alt="">
            </div>
        </section>

        <section class="section-our-story py-5" style="background-color: #FFFDDB;">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-3">
                        <h3 class="section-title-medium">
                            Câu chuyện của <br> chúng tôi
                        </h3>
                        <h2 class="story-highlight mt-5">
                            Tốt cho con người, tốt cho hành tinh
                        </h2>
                    </div>
                    <div class="col-md-4 story-text">
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                            anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="section-how-we-work py-5">
            <div class="container">
                <h3 class="text-center section-title-medium">Đối tác của chúng tôi</h3>
                <h2 class="text-center section-title-large mt-2">
                    Chúng tôi làm việc <br>với các đối tác tốt nhất
                </h2>
                <div class="row justify-content-center mt-5">
                    <div class="col-6 col-sm-4 col-md-1 brand-logo-col text-center" v-for="n in 8"
                        :key="'partner-' + n">
                        <div class="brand-logo-placeholder">Logo Thương hiệu</div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section-partners py-4">
            <div class="container">
                <h3 class="text-center section-title-medium">Cách chúng tôi làm việc</h3>
                <h2 class="text-center section-title-large mt-2">
                    Chúng tôi trao cho bạn quyền <br>tạo ra không gian hoàn hảo <br> cho riêng mình
                </h2>
                <div class="row text-center mt-5">
                    <div class="col-md-4 how-we-work-item">
                        <div class="icon-box">
                            <i class="bi bi-palette"></i>
                        </div>
                        <h4 class="item-title mt-3">Chọn một Giao diện</h4>
                        <p class="item-description">Tùy chỉnh thiết kế cửa hàng của bạn từ hơn 100 giao diện chuyên
                            nghiệp. Không cần kinh nghiệm thiết kế hoặc kỹ năng lập trình.</p>
                    </div>
                    <div class="col-md-4 how-we-work-item">
                        <div class="icon-box">
                            <i class="bi bi-box-seam"></i>
                        </div>
                        <h4 class="item-title mt-3">Thêm sản phẩm</h4>
                        <p class="item-description">Thêm sản phẩm của bạn vào cửa hàng. Liệt kê các sản phẩm hấp dẫn với
                            hình ảnh chi tiết, giá cả và mô tả.</p>
                    </div>
                    <div class="col-md-4 how-we-work-item">
                        <div class="icon-box">
                            <i class="bi bi-cart"></i>
                        </div>
                        <h4 class="item-title mt-3">Bắt đầu bán hàng</h4>
                        <p class="item-description">Thiết lập thanh toán và vận chuyển, sau đó bắt đầu bán hàng.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="section-timeline py-3">
            <div class="containerr">
                <div class="row justify-content-center" style="background-color: #E3FFF4;">
                    <div class="row justify-content-center history" style="padding-top: 50px;">
                        <div class="col-md-3">
                            <h3 class="section-title-medium" style="margin-top: 3rem;">Victory store</h3>
                            <h1 class="section-title-large" style="margin-top: 3rem;">
                                Dòng thời gian Lịch sử Công ty
                            </h1>
                        </div>
                        <div class="col-md-6">
                            <ul class="timeline">
                                <li class="timeline-item completed">
                                    <div class="timeline-dot"></div>
                                    <div>
                                        <h4 class="timeline-year">Thành lập vào năm 2018</h4>
                                        <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
                                            laboriosam, nisi ut aliquid ex ea commodi consequatur.</p>
                                    </div>
                                </li>
                                <li class="timeline-item completed">
                                    <div class="timeline-dot"></div>
                                    <div>
                                        <h4 class="timeline-year">World Wide Web được tạo ra (2018)</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor
                                            incididunt ut labore.</p>
                                    </div>
                                </li>
                                <li class="timeline-item completed">
                                    <div class="timeline-dot"></div>
                                    <div>
                                        <h4 class="timeline-year">Đơn hàng đầu tiên (2019)</h4>
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                            eu
                                            fugiat nulla pariatur.</p>
                                    </div>
                                </li>
                                <li class="timeline-item completed">
                                    <div class="timeline-dot"></div>
                                    <div>
                                        <h4 class="timeline-year">Ra mắt cửa hàng trực tuyến & 5inx (2020)</h4>
                                        <p>Tùy chỉnh thiết kế cửa hàng của bạn từ hơn 100 giao diện chuyên nghiệp. Không
                                            cần
                                            kinh nghiệm thiết kế hoặc kỹ năng lập trình.</p>
                                    </div>
                                </li>
                                <li class="timeline-item pending">
                                    <div class="timeline-dot-pending"></div>
                                    <div>
                                        <h4 class="timeline-year">Tổng doanh thu mua sắm trực tuyến hơn 100 triệu</h4>
                                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                            deserunt mollit anim id est laborum.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section-team py-5 text-center">
            <div class="container">
                <h3 class="section-title-medium">Ban Lãnh đạo Điều hành</h3>
                <h2 class="section-title-large mt-2">
                    Đây là đội ngũ chèo lái <br>con thuyền
                </h2>
                <div class="row justify-content-center mt-5">
                    <div class="col-6 col-sm-3 col-md-3 team-member" v-for="member in executiveTeam" :key="member.name">
                        <div class="avatar-placeholder"></div>
                        <h4 class="member-name mt-3">{{ member.name }}</h4>
                        <p class="member-role">{{ member.role }}</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="section-investors py-4 text-center">
            <div class="container">
                <h3 class="section-title-medium">Thành viên Hội đồng Quản trị</h3>
                <h2 class="section-title-large mt-2">
                    Chúng tôi may mắn được hỗ trợ bởi một số <br>nhà đầu tư tốt nhất trên thế giới
                </h2>
                <div class="row justify-content-center mt-5">
                    <div class="col-4 col-sm-3 col-md-2 investor-member" v-for="member in investors" :key="member.name">
                        <div class="avatar-placeholder-sm"></div>
                        <h4 class="investor-name mt-3">{{ member.name }}</h4>
                        <p class="investor-role">{{ member.role }}</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="section-purchase py-5 text-center" style="background-color: #f4f8fb;">
            <div class="container py-5">
                <h3 class="section-title-medium">Mua Giao diện</h3>
                <h2 class="section-title-large mt-2">
                    Mua Giao diện Victory ngay để mọi việc dễ dàng hơn
                </h2>
                <button class="btn-purchase mt-4">Mua Giao diện</button>
            </div>
        </section>

        <section class="section-contact-footer py-5">
            <div class="container">
                <div class="row text-center">
                    <div class="col-md-4 contact-item">
                        <div class="contact-icon">
                            <i class="bi bi-at"></i>
                        </div>
                        <h4 class="contact-title mt-3">Không tìm thấy thứ bạn cần?</h4>
                        <a href="#" class="contact-link">Liên hệ với chúng tôi</a>
                    </div>
                    <div class="col-md-4 contact-item">
                        <div class="contact-icon">
                            <i class="bi bi-headset"></i>
                        </div>
                        <h4 class="contact-title mt-3">Chúng tôi có thể giúp gì cho bạn hôm nay?</h4>
                        <a href="#" class="contact-link">Trung tâm Trợ giúp</a>
                    </div>
                    <div class="col-md-4 contact-item">
                        <div class="contact-icon">
                            <i class="bi bi-chat-text"></i>
                        </div>
                        <h4 class="contact-title mt-3">Chúng tôi muốn nghe ý kiến của bạn!</h4>
                        <a href="#" class="contact-link">Gửi phản hồi</a>
                    </div>
                </div>
            </div>
        </section>

    </div>
    <FooterComponent />
</template>


<script setup>
import HeaderComponent from '../components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import { ref } from 'vue'
import { apiHelper } from '@/helpers/axios'

const executiveTeam = ref([
    { name: 'SangPT', role: 'Đồng Sáng lập' },
    { name: 'NgocNMT', role: 'Đồng Sáng lập & Giám đốc Điều hành' },
    { name: 'HieuPNT', role: 'Quản lý Phát triển' },
    { name: 'MaiPTT', role: 'Quản lý Dịch vụ Khách hàng' },
]);

const investors = ref([
    { name: 'Julian Wan', role: 'Trưởng bộ phận UX @ Google' },
    { name: 'Austin Dietel', role: 'Cựu Phó Chủ tịch Thiết kế @ Spotify' },
    { name: 'Harpa Joseph', role: 'Cựu Trưởng bộ phận Tăng trưởng @ Spotify' },
    { name: 'Kenzie Kraft', role: 'Trưởng bộ phận Tăng trưởng @ Stripe' },
    { name: 'Fred Moon', role: 'Cựu CTO @ Grafik' },
    { name: 'Karen Smith', role: 'Cựu CEO @ CBOX' },
    { name: 'Alimta Lavnen', role: 'Cựu CPO @ Adone' },
    { name: 'Ben Parker', role: 'Cựu CTO @ Dropboxa' },
    { name: 'Brooke Cagle', role: 'Cựu CPO @ Adobe' },
]);
</script>

<script>
export default {
    methods: {

    },
}
</script>

<style scoped>
/* Giữ nguyên phần style đã tối ưu để đảm bảo giao diện đẹp và responsive */
.main-content-container {
    font-family: 'Outfit', Arial, sans-serif;
    color: #333;
}

.container {
    max-width: 1000px;
}

.containerr {
    max-width: 1200px;
    margin: 0 auto;
}

/* --- Typography and General Styles --- */
.section-title-large {
    font-size: 2.2rem;
    font-weight: 700;
    line-height: 1.2;
    color: #1a1a1a;
}

.section-title-medium {
    font-size: 0.9rem;
    font-weight: 500;
    text-transform: uppercase;
    color: #6c757d;
    letter-spacing: 1px;
}

/* --- Section Top Banner (Great Design) --- */
.section-top-banner {
    padding-top: 4rem;
    padding-bottom: 2rem;
}

.banner-image-wrapper {
    height: 430px;
    background-color: #f0f0f0;
    border-radius: 8px;
    overflow: hidden;
}

/* --- Section Our Story --- */
.story-highlight {
    font-size: 2.5rem;
    line-height: 1.1;
    font-weight: 700;
}

.story-text p {
    margin-bottom: 1rem;
    line-height: 1.6;
    color: #555;
}

/* --- Section How We Work --- */
.how-we-work-item {
    padding: 0 15px;
}

.icon-box {
    font-size: 2.5rem;
    color: #00d084;
}

.item-title {
    font-size: 1.2rem;
    font-weight: 600;
}

.item-description {
    color: #555;
}

/* --- Section Partners --- */
.brand-logo-col {
    padding: 10px 5px;
}

.brand-logo-placeholder {
    font-size: 0.8rem;
    color: #aaa;
    border: 1px solid #ddd;
    padding: 10px 5px;
    margin: 5px;
    border-radius: 4px;
}

/* --- Section Timeline (Company History) --- */
.timeline {
    list-style: none;
    padding-left: 0;
    position: relative;
}

.timeline::before {
    content: '';
    position: absolute;
    top: 0;
    left: 20px;
    height: 100%;
    width: 2px;
    background-color: #e0e0e0;
}

.timeline-item {
    margin-bottom: 2rem;
    position: relative;
    padding-left: 50px;
}

.timeline-dot {
    position: absolute;
    left: 10px;
    top: 5px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #00d084;
}

.timeline-dot::after {
    content: '✓';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 0.8rem;
}

.timeline-dot-pending {
    position: absolute;
    left: 10px;
    top: 5px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #e0e0e0;
}

.timeline-year {
    font-weight: 600;
    font-size: 1.1rem;
    margin-bottom: 0.2rem;
}

.timeline-item p {
    color: #555;
    font-size: 0.95rem;
}

/* --- Section Team/Investors --- */
.avatar-placeholder {
    width: 100px;
    height: 100px;
    margin: 0 auto;
    background-color: #f0f0f0;
    border-radius: 50%;
}

.avatar-placeholder-sm {
    width: 70px;
    height: 70px;
    margin: 0 auto;
    background-color: #f0f0f0;
    border-radius: 50%;
}

.member-name,
.investor-name {
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: 0;
}

.member-role,
.investor-role {
    font-size: 0.85rem;
    color: #6c757d;
}

.investor-member {
    margin-bottom: 1.5rem;
}

/* --- Section Purchase Theme --- */
.section-purchase {
    margin-top: 3rem;
}

.btn-purchase {
    background-color: #343a40;
    color: white;
    padding: 12px 30px;
    border: none;
    border-radius: 4px;
    font-weight: 600;
    transition: background-color 0.3s;
}

.btn-purchase:hover {
    background-color: #1a1a1a;
}

/* --- Footer Contact Section --- */
.contact-item {
    padding: 0 15px;
}

.contact-icon {
    font-size: 2rem;
    color: #00d084;
}

.contact-title {
    font-size: 0.9rem;
    font-weight: 500;
    color: #555;
}

.contact-link {
    font-weight: 600;
    color: #1a1a1a;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: border-bottom 0.2s;
}

.contact-link:hover {
    border-bottom: 1px solid #1a1a1a;
}

/* Responsive adjustments (optional, but good practice) */
@media (max-width: 768px) {
    .section-title-large {
        font-size: 1.8rem;
    }

    .story-highlight {
        font-size: 2rem;
        margin-bottom: 2rem;
    }

    .timeline::before {
        left: 15px;
    }

    .timeline-item {
        padding-left: 40px;
    }

    .timeline-dot,
    .timeline-dot-pending {
        left: 5px;
    }

    .contact-item {
        margin-bottom: 2rem;
    }

    .team-member,
    .investor-member {
        margin-bottom: 2rem;
    }
}
</style>