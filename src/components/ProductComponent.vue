<template>
    <div class="product-section container mt-5">
        <div class="row g-4">
            <div v-for="product in list_products" :key="product.id" class="col-md-2_4 col-sm-6">
                <div class="product-card text-center p-3 rounded-3 position-relative">
                    <span class="badge bg-warning text-dark position-absolute top-0 start-0 m-2">Hot</span>
                    <img v-if="product.thumbnail_url" :src="product.thumbnail_url" @error="product.thumbnail_url = null"
                        :alt="product.title || 'Small Appliances'" class="img-fluid" />
                    <img v-else src="@/assets/default_thumbnail.jpg" alt="Default Image" class="img-fluid" />
                    <h6 class="fw-semibold product-name">{{ product.name }}</h6>
                    <p class="text-warning">
                        <span v-for="i in product.score" :key="i">★</span>
                    </p>

                    <p class="text-dark fw-bold mb-2">
                        {{
                            new Intl.NumberFormat('vi-VN', {
                                style: 'currency',
                                currency: 'VND',
                            }).format(product.price)
                        }}
                    </p>
                    <h6 class="fw-light product-name fst-italic text-muted">{{ product.total_sold }} lượt mua</h6>

                    <!-- Hover buttons -->
                    <div class="product-actions">
                        <button class="btn btn-primary w-100 mb-2">Thêm vào giỏ</button>
                        <button class="btn btn-outline-dark w-100">Mua ngay</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios'
import { apiHelper } from '@/helpers/axios'
import { mapStores } from 'pinia'
</script>

<script>
export default {
    props: {
        product: Object,
    },

    data() {
        return {
            list_products: [],
            bgColors: ['#d8f3dc', '#ffe0ef', '#dce9f5', '#f8e7db'], // 4 màu nền xoay vòng,
            // categories: [],
        }
    },
    created() { },
    mounted() {
        this.listProduct()
    },
    computed: {
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
    },
}
</script>

<style scoped>
.product-section {
    position: relative;
    z-index: 1;
    overflow: visible;
}

.container {
    max-width: 1200px;
    margin: auto;
    padding: 20px 20px 0 20px;
}

.container-custom {
    max-width: 1250px;
    margin: 0 auto;
    padding: 0 50px;
}

.menu-row {
    border-bottom: 1px solid #eaeaea;
    background: #fff;
}

.col-md-2_4 {
    flex: 0 0 20%;
    max-width: 20%;
    position: relative;
}

@media (max-width: 991px) {
    .col-md-2_4 {
        flex: 0 0 33.3333%;
        max-width: 33.3333%;
    }
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

.product-card img {
    width: 100%;
    height: 160px;
    object-fit: contain;
    transition: all 0.3s ease;
}

.product-card .product-name {
    font-size: 15px;
    font-weight: 500;
    height: 35px;
    overflow: hidden;
    margin: 10px 0 6px;
}

.product-card .product-price {
    color: #333;
    font-weight: 700;
    margin-bottom: 12px;
}

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

@media (prefers-color-scheme: dark) {

    html,
    body,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    span,
    a,
    li,
    label,
    input,
    select,
    button,
    small,
    .fw-bold,
    .fw-semibold,
    .text-dark,
    .text-muted,
    .nav-link,
    .dropdown-item,
    .footer a,
    .footer p {
        color: #111 !important;
    }

    .text-muted {
        color: #555 !important;
    }

    svg path {
        fill: #111 !important;
        stroke: #111 !important;
    }

    .btn-outline-dark {
        color: #111 !important;
        border-color: #111 !important;
    }

    .btn-outline-dark:hover {
        background-color: #111 !important;
        color: #fff !important;
    }

    .btn-primary {
        color: #fff !important;
    }

    .badge.bg-warning {
        color: #000 !important;
    }
}
</style>