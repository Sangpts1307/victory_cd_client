<template>
    <HeaderComponent />

    <div class="body container py-5">
        <div class="container">
            <h1 class="cart-title">Giỏ hàng</h1>

            <div class="row">
                <!-- LEFT: Cart Items -->
                <div class="col-md-8">

                    <!-- Product 1 -->
                    <div class="row product-row align-items-center">
                        <div class="col-3 col-md-2">
                            <img src='../assets/headphone.png' class="product-img">
                        </div>

                        <div class="col-9 col-md-5">
                            <div class="product-name">Tai nghe Bluetooth Sony</div>
                            <div>100.00₫</div>

                            <div class="d-flex align-items-center mt-2">
                                <button class="qty-btn">-</button>
                                <div class="qty-number">1</div>
                                <button class="qty-btn">+</button>
                            </div>
                        </div>

                        <div class="col-md-3 text-md-right mt-3 mt-md-1">
                            <strong>100.00₫</strong>
                        </div>

                        <div class="col-md-2 text-md-right">
                            <span class="trash-icon">&#128465;</span>
                        </div>
                    </div>

                    <!-- Product 2 -->
                    <div class="row product-row align-items-center">
                        <div class="col-3 col-md-2">
                            <img src='../assets/headphone.png' class="product-img">
                        </div>

                        <div class="col-9 col-md-5">
                            <div class="product-name">Tai nghe Bluetooth Sony</div>
                            <div>24.35₫</div>

                            <div class="d-flex align-items-center mt-2">
                                <button class="qty-btn">-</button>
                                <div class="qty-number">1</div>
                                <button class="qty-btn">+</button>
                            </div>
                        </div>

                        <div class="col-md-3 text-md-right mt-3 mt-md-1">
                            <strong>24.35₫</strong>
                        </div>

                        <div class="col-md-2 text-md-right">
                            <span class="trash-icon">&#128465;</span>
                        </div>
                    </div>

                </div>

                <!-- RIGHT: Cart Summary -->
                <div class="col-md-4 mt-4 mt-md-2">
                    <div class="cart-box">
                        <h5 class="mb-3 text-center">Tổng số giỏ hàng</h5>

                        <div class="d-flex justify-content-between">
                            <span>Thêm mã giảm giá</span>
                            <span>⌄</span>
                        </div>

                        <hr>

                        <div class="d-flex justify-content-between">
                            <strong>Tổng ước tính</strong>
                            <strong>124.35₫</strong>
                        </div>

                        <button class="checkout-btn">Proceed to Checkout</button>
                    </div>
                </div>

            </div>
        </div>
    </div>


    <FooterComponent />
</template>

<script setup>
import axios from 'axios'
import HeaderComponent from '../components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import { apiHelper } from '@/helpers/axios'
import { mapStores } from 'pinia'
import { useCategoriesStore } from '@/stores/categories'
import { ref } from 'vue'

const quantity = ref(1)

const plus = () => quantity.value++
const minus = () => {
    if (quantity.value > 1) quantity.value--
}
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
            similar_products: [],
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
            if (!value) return '0 đ'
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ' đ'
        },
        getDetail(id) {
            if (id == null) {
                id = this.$route.params.id
            }
            try {
                apiHelper
                    .get('/product-detail', {
                        params: {
                            product_id: id,
                        },
                    })
                    .then((res) => {
                        if (res.status == 200) {
                            console.log(res.data.data)
                            this.product_detail = res.data.data.product
                            this.product_feedbacks = res.data.data.product_feedbacks
                            this.feedback_count = res.data.data.feedback_count
                            this.similar_products = res.data.data.similar_products

                            window.scrollTo(0, 0)
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

.cart-title {
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 40px;
    text-align: center;
}

.product-row {
    padding: 25px 0;
    border-bottom: 1px solid #eee;
}

.product-img {
    width: 80px;
}

.product-name {
    font-weight: 600;
    font-size: 16px;
}

.qty-btn {
    width: 32px;
    height: 32px;
    border: 1px solid #ccc;
    background: #fff;
}

.qty-number {
    margin: 0 10px;
    font-weight: 600;
}

.trash-icon {
    font-size: 20px;
    cursor: pointer;
    color: #777;
}

.trash-icon:hover {
    color: #333;
}

/* Right side */
.cart-box {
    background: #f8f8f8;
    padding: 25px;
    border-radius: 6px;
    border: 1px solid #eee;
}

.checkout-btn {
    background: #2d41d9;
    color: #fff;
    width: 100%;
    padding: 16px 0;
    font-size: 18px;
    border: none;
    border-radius: 1px;
    margin-top: 25px;
}
</style>