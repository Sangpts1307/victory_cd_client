<template>
    <HeaderComponent />

    <div class="body container py-5">
        <div class="row g-5">
            <!-- Cột trái: ảnh sản phẩm -->
            <div class="col-md-6 text-center">
                <img :src="product_detail.thumbnail_url" class="img-fluid rounded" :alt="product_detail.name"
                    style="max-height: 500px; object-fit: contain;" />
            </div>

            <!-- Cột phải: thông tin sản phẩm -->
            <div class="col-md-6">
                <span class="badge bg-warning text-dark mb-2">Hot</span>
                <h3 class="fw-bold">{{ product_detail.name }}</h3>
                <p class="text-muted mb-1">trong {{ product_detail.category_title }}</p>

                <div class="mb-3">
                    <span style="font-size: 20px; font-weight: bold; color: #ffc107;">
                        {{ Number(product_detail.score).toFixed(2) }}
                    </span>
                    <span class="text-warning" style="color: #ffc107; margin: 0 5px;">
                        ★★★★★
                    </span>
                    <span style="font-size: 16px; color: #6c757d; font-weight: semi-bold; margin-left: 5px;">
                        | Đã bán {{ product_detail.total_sold }} sản phẩm
                    </span>
                </div>


                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="fw-bold text-dark m-0">
                        {{ formatPrice(product_detail.price) }}
                    </h4>
                    <p class="text-success fw-semibold m-0">
                        Còn {{ product_detail.quantity }} sản phẩm
                    </p>
                </div>

                <!-- Nút hành động -->
                <div class="d-flex align-items-center mb-4">
                    <div class="input-group" style="width: 120px;">
                        <button class="btn btn-outline-secondary">-</button>
                        <input type="number" class="form-control text-center" value="1" />
                        <button class="btn btn-outline-secondary">+</button>
                    </div>
                </div>

                <div class="d-flex gap-3 mb-3 flex-wrap">
                    <button class="btn px-4 py-3 flex-fill btn-add-cart">
                        <i class="bi bi-cart-plus me-2"></i> Thêm vào giỏ
                    </button>

                    <button class="btn px-4 py-3 flex-fill btn-buy-now">
                        Mua ngay
                    </button>
                </div>

                <!-- Thông tin thêm -->
                <ul class="list-unstyled small text-muted mt-4">
                    <li>🚚 Miễn phí giao hàng & hoàn hàng </li>
                    <li>📦 Vận chuyển đến tay trong 3-5 ngày làm việc</li>
                </ul>
            </div>
        </div>

        <!-- Mô tả sản phẩm -->
        <div class="product-description mt-5">
            <ul class="nav nav-tabs" id="productTabs" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="desc-tab" data-bs-toggle="tab" data-bs-target="#desc"
                        type="button" role="tab">
                        Mô tả
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="review-tab" data-bs-toggle="tab" data-bs-target="#review" type="button"
                        role="tab">
                        Đánh giá
                    </button>
                </li>
            </ul>

            <div class="tab-content p-4 border border-top-0 rounded-bottom" id="productTabsContent">
                <div class="tab-pane fade show active" id="desc" role="tabpanel">
                    <h5 class="fw-bold mb-3">{{ product_detail.name }}</h5>
                    <p>{{ product_detail.description }}</p>
                </div>
                <!-- Tab Reviews -->
                <div class="tab-pane fade show" id="review" role="tabpanel">
                    <div class="row g-4">
                        <!-- Ratings tổng hợp -->
                        <div class="col-md-4">
                            <div class="border p-4 rounded-3">
                                <h5 class="fw-bold mb-3">Đánh giá</h5>

                                <div class="text-center mb-3">
                                    <h1 class="fw-bold mb-0">{{ product_detail.score }}
                                        <span class="text-warning mb-0">★</span>
                                    </h1>

                                    <p class="text-muted small">1 lượt đánh giá</p>
                                </div>
                                <hr />
                                <div class="mt-3">
                                    <h6 class="fw-semibold">Đánh giá về sản phẩm</h6>
                                    <p class="text-muted small mb-3">
                                        Chia sẻ cảm nghĩ của bạn cho khách hàng khác
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Customer reviews -->
                        <div class="col-md-8">
                            <h5 class="fw-bold mb-3">Khách hàng đánh giá (1)</h5>
                            <div class="border-top pt-3">
                                <div class="d-flex justify-content-between align-items-start">
                                    <div class="d-flex align-items-center">
                                        <img src="https://ui-avatars.com/api/?name=U+X" alt="Avatar"
                                            class="rounded-circle me-3" width="48" height="48" />
                                        <div>
                                            <h6 class="mb-0 fw-semibold">uixstore</h6>
                                            <small class="text-muted">Tháng 9, 2022</small>
                                        </div>
                                    </div>
                                    <div class="text-warning">★★★★★</div>
                                </div>

                                <p class="mt-3 mb-0">
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde
                                    omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                                    rem aperiam.
                                </p>
                            </div>
                            <div class="border-top pt-3">
                                <div class="d-flex justify-content-between align-items-start">
                                    <div class="d-flex align-items-center">
                                        <img src="https://ui-avatars.com/api/?name=U+X" alt="Avatar"
                                            class="rounded-circle me-3" width="48" height="48" />
                                        <div>
                                            <h6 class="mb-0 fw-semibold">uixstore</h6>
                                            <small class="text-muted">Tháng 9, 2022</small>
                                        </div>
                                    </div>
                                    <div class="text-warning">★★★★★</div>
                                </div>

                                <p class="mt-3 mb-0">
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde
                                    omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                                    rem aperiam.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <!-- Sản phẩm -->
    <div class="product-section mt-5">
        <div class="section-header d-flex justify-content-between align-items-center mb-4">
            <h4 class="fw-bold">Sản phẩm liên quan</h4>
            <router-link to="/product" class="text-muted">
                Tất cả sản phẩm
            </router-link>
        </div>
    </div>
    <ProductComponent :showSeeMore="false" :showSortType="false" :showTitle="false" />

    <FooterComponent />
</template>

<style scoped>
body {
    font-family: 'Outfit', Arial, sans-serif;
    background: #fff;
}

.container {
    max-width: 1200px;
    margin: auto;
    padding: 20px 20px 0 20px;
}

.product-description {
    max-width: 1200px;
    margin: auto;
}

.product-section {
    max-width: 1200px;
    margin: auto;
    padding: 0 20px 0 20px;
}

/* Toàn bộ text chuyển về màu tối */
* {
    color: #212529 !important;
}

/* Giữ màu vàng của sao */
.text-warning,
.text-warning * {
    color: #ffc107 !important;
}

/* Giữ màu nút Thêm vào giỏ và icon bên trong */
.btn-primary,
.btn-primary * {
    color: #fff !important;
    /* chữ và icon đều trắng */
}

/* Giữ màu nút Mua ngay */
.btn-outline-dark {
    color: #212529 !important;
}

/* Giữ màu xanh cho text-success */
.text-success {
    color: #198754 !important;
}

/* Giữ màu xanh dương cho text-primary */
.text-primary {
    color: #0d6efd !important;
}

/* Giữ màu xám cho text-muted */
.text-muted {
    color: #6c757d !important;
}

/* Giữ màu badge Hot */
.bg-warning {
    color: #212529 !important;
}

/* Nút thêm vào giỏ */
.btn-add-cart {
    background-color: #3449ca !important;
    color: #fff !important;
}

.btn-add-cart i {
    color: #fff !important;
}

/* Nút mua ngay */
.btn-buy-now {
    border: 2px solid #3449ca !important;
    color: #3449ca !important;
}

/* Hover nền xanh nhạt */
.btn-buy-now:hover {
    background-color: #e7e9fd !important;
    /* xanh siêu nhạt */
    color: #3449ca !important;
}
</style>

<script setup>
import axios from 'axios'
import HeaderComponent from '../components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import BannerComponent from '@/components/BannerComponent.vue'
import ProductComponent from '@/components/ProductComponent.vue'
import { apiHelper } from '@/helpers/axios'
import { mapStores } from 'pinia'
import { useCategoriesStore } from '@/stores/categories'
</script>

<script>
export default {
    props: {
        product: Object,
    },

    data() {
        return {
            product_detail: '',
            product_feedback: '',
            list_products: [],
            best_products: [],
            bgColors: ['#d8f3dc', '#ffe0ef', '#dce9f5', '#f8e7db'], // 4 màu nền xoay vòng,
            // categories: [],
        }
    },
    created() { },
    mounted() {
        this.getDetail()
        this.listProduct()
        this.bestProducts()
        this.categoriesStore.fetchListCategory()
    },
    watch: {},
    computed: {
        ...mapStores(useCategoriesStore),
    },
    methods: {
        formatPrice(value) {
            if (!value) return '0 đ';
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " đ";
        },
        getDetail() {
            let id = this.$route.params.id;
            try {
                apiHelper
                    .get('/product-detail', {
                        params: {
                            'product_id': id,
                        },
                    })
                    .then((res) => {
                        if (res.status == 200) {
                            console.log(res.data.data);
                            this.product_detail = res.data.data.product;
                            this.product_feedback = res.data.data.product_feedback;
                        }
                    })
            } catch (error) {
                console.log(error)
            }
        },
        /*************  ✨ Windsurf Command 🌟  *************/
        /**
         * List all categories
         * @return {Promise<void>}
         */
        listProduct() {
            try {
                /**
                 * Make a GET request to the API to list all products
                 * @return {Promise<AxiosResponse>}
                 */
                apiHelper
                    .get('/list-product')
                    .then((res) => {
                        // console.log(res);
                        if (res.status == 200) {
                            /**
                             * Set the products data to the component's data
                             * @param {Object[]} products - The products data
                             */
                            this.list_products = res.data.data.list_products
                            // console.log(this.list_products);
                        }
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            } catch (error) {
                console.log(error)
            }
        },
        bestProducts() {
            try {
                /**
                 * Make a GET request to the API to list 4 best products
                 * @return {Promise<AxiosResponse>}
                 */
                apiHelper
                    .get('/best-products')
                    .then((res) => {
                        // console.log(res);
                        if (res.status == 200) {
                            /**
                             * Set the products data to the component's data
                             * @param {Object[]} products - The best 4 products data
                             */
                            this.best_products = res.data.data.best_products
                            // console.log(this.best_products);
                        }
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            } catch (error) {
                console.log(error)
            }
        },
    },
}
</script>
