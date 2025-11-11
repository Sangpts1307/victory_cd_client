<template>
    <HeaderComponent />

    <div class="body container py-5">
        <div class="row g-5">
            <!-- Cột trái: ảnh sản phẩm -->
            <div class="col-md-6 text-center">
                <img src="../assets/headphone.png" class="img-fluid rounded" alt="Gaming Console 5 Digital Edition"
                    style="max-height: 500px; object-fit: contain;" />
            </div>

            <!-- Cột phải: thông tin sản phẩm -->
            <div class="col-md-6">
                <span class="badge bg-warning text-dark mb-2">Hot</span>
                <h3 class="fw-bold">Gaming Console 5 Digital Edition</h3>
                <p class="text-muted mb-1">in Uncategorized</p>

                <div class="mb-3">
                    <span class="text-warning">★★★★★</span>
                    <span class="text-muted">(1 Review)</span>
                </div>

                <h4 class="fw-bold text-primary mb-3">399.00₩</h4>

                <p class="text-success fw-semibold mb-3">Available in stock</p>

                <!-- Nút hành động -->
                <div class="d-flex align-items-center mb-4">
                    <div class="input-group" style="width: 120px;">
                        <button class="btn btn-outline-secondary">-</button>
                        <input type="number" class="form-control text-center" value="1" />
                        <button class="btn btn-outline-secondary">+</button>
                    </div>
                </div>

                <div class="d-flex gap-3 mb-3 flex-wrap">
                    <button class="btn btn-primary px-4 flex-fill">
                        <i class="bi bi-cart-plus me-2"></i> Add to cart
                    </button>
                    <button class="btn btn-outline-dark px-4 flex-fill">Buy Now</button>
                </div>

                <!-- Thông tin thêm -->
                <ul class="list-unstyled small text-muted mt-4">
                    <li>🚚 Free Shipping & Returns on this item</li>
                    <li>📦 Delivery within 3–5 working days</li>
                </ul>
            </div>
        </div>

        <!-- Mô tả sản phẩm -->
        <div class="product-description mt-5">
            <ul class="nav nav-tabs" id="productTabs" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="desc-tab" data-bs-toggle="tab" data-bs-target="#desc"
                        type="button" role="tab">
                        Description
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="review-tab" data-bs-toggle="tab" data-bs-target="#review" type="button"
                        role="tab">
                        Reviews (1)
                    </button>
                </li>
            </ul>

            <div class="tab-content p-4 border border-top-0 rounded-bottom" id="productTabsContent">
                <div class="tab-pane fade show active" id="desc" role="tabpanel">
                    <h5 class="fw-bold mb-3">iPad Pro</h5>
                    <p>
                        The iPad Pro is a magical piece of glass. It has pro cameras that can transform reality. It’s
                        faster than most PC laptops. And with Apple Pencil, Magic Keyboard, and iPadOS, it’s the world’s
                        most advanced mobile device.
                    </p>
                </div>
                <div class="tab-pane fade" id="review" role="tabpanel">
                    <p>⭐⭐⭐⭐⭐ - Excellent product!</p>
                </div>
            </div>
        </div>
    </div>

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
    padding: 20px 0 0 0;
}
</style>

<script setup>
import axios from 'axios'
import HeaderComponent from '../components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import BannerComponent from '@/components/BannerComponent.vue'
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
            list_products: [],
            best_products: [],
            bgColors: ['#d8f3dc', '#ffe0ef', '#dce9f5', '#f8e7db'], // 4 màu nền xoay vòng,
            // categories: [],
        }
    },
    created() { },
    mounted() {
        this.listProduct()
        this.bestProducts()
        this.categoriesStore.fetchListCategory()
    },
    watch: {},
    computed: {
        ...mapStores(useCategoriesStore),
    },
    methods: {
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
