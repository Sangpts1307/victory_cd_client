<template>
    <HeaderComponent />

    <div class="body container py-5">
        <div class="container">
            <h1 class="cart-title">Giỏ hàng</h1>

            <div class="row">
                <!-- LEFT: Cart Items -->
                <div class="col-md-8">

                    <div class="row product-row align-items-center" v-for="(item, index) in products" :key="index">

                        <div class="col-3 col-md-2">
                            <img src="../assets/headphone.png" class="product-img">
                        </div>

                        <div class="col-9 col-md-5">
                            <div class="product-name">{{ item.name }}</div>
                            <div>{{ item.price }}₫</div>

                            <div class="d-flex align-items-center mt-2">
                                <button class="qty-btn" @click="decrease(index)">-</button>
                                <div class="qty-number">{{ item.quantity }}</div>
                                <button class="qty-btn" @click="increase(index)">+</button>
                            </div>
                        </div>

                        <div class="col-md-3 text-md-right mt-3 mt-md-1">
                            <strong>{{ (item.price * item.quantity).toFixed(2) }}₫</strong>
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

                        <button class="checkout-btn">Tiến hành thanh toán</button>
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
import { ref } from 'vue'

const products = ref([
    { name: "Tai nghe Bluetooth Sony", price: 24.35, quantity: 1 },
    { name: "Tai nghe Bluetooth Sony", price: 24.35, quantity: 1 },
])

const increase = (index) => {
    products.value[index].quantity++
}

const decrease = (index) => {
    if (products.value[index].quantity > 1) {
        products.value[index].quantity--
    }
}
</script>

<script>
export default {
    props: {
        product: Object,
    },

    data() {
        return {

        }
    },
    created() { },
    mounted() {
    },
    watch: {},
    computed: {

    },
    methods: {
        formatPrice(value) {
            if (!value) return '0 đ'
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ' đ'
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
    padding: 0 20px 0 20px;
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
    font-size: 26px;
    cursor: pointer;
    color: #e63946;
    /* đỏ đậm */
    transition: 0.2s ease;
}

.trash-icon:hover {
    color: #b81c2a;
    /* đỏ đậm hơn khi hover */
    transform: scale(1.15);
    /* hơi lớn hơn khi hover */
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