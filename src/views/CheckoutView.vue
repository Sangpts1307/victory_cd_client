<template>
    <HeaderComponent />

    <div class="checkout-container container py-5">
        <h1 class="checkout-title text-center mb-5">Thanh toán</h1>

        <div class="row">

            <!-- LEFT: Checkout Form -->
            <div class="col-md-7">
                <!-- Contact -->
                <div class="checkout-box mb-4">
                    <h5 class="section-title">Thông tin giao hàng</h5>

                    <label class="label-input">Email</label>
                    <input type="email" class="form-control mb-2" placeholder="Email" />
                    <label class="label-input">Số điện thoại</label>
                    <input type="phone_number" class="form-control mb-2" placeholder="Nhập số điện thoại" />
                    <label class="label-input">Địa chỉ</label>
                    <input type="address" class="form-control mb-2" placeholder="Địa chỉ nhận hàng" />

                </div>

                <!-- Payment -->
                <div class="checkout-box mb-4">
                    <h5 class="section-title">Phương thức thanh toán</h5>

                    <div class="form-group mt-3">
                        <div class="form-check mb-2">
                            <input class="form-check-input" type="radio" name="payment" id="paymentOnline"
                                value="online" v-model="paymentMethod">
                            <label class="form-check-label" for="paymentOnline">
                                Thanh toán Online (Chuyển khoản, ví điện tử...)
                            </label>
                        </div>

                        <div class="form-check mb-2">
                            <input class="form-check-input" type="radio" name="payment" id="paymentOffline"
                                value="offline" v-model="paymentMethod">
                            <label class="form-check-label" for="paymentOffline">
                                Thanh toán Khi nhận hàng (COD)
                            </label>
                        </div>
                    </div>

                    <div v-if="!paymentMethod" class="alert alert-danger py-2 mt-3">
                        Vui lòng chọn phương thức thanh toán để tiếp tục.
                    </div>

                    <!-- Điều khoản -->
                    <p class="mt-3 text-muted small">
                        Bằng việc tiếp tục đặt hàng, bạn đồng ý với
                        <a href="#" class="fw-semibold text-decoration-underline">Điều khoản và Điều kiện</a>
                        và
                        <a href="#" class="fw-semibold text-decoration-underline">Chính sách bảo mật</a>
                        của chúng tôi.
                    </p>
                </div>

                <!-- Nút điều hướng -->
                <div class="d-flex justify-content-between align-items-center mt-4 gap-3">

                    <a href="#" class="btn-back-cart text-dark w-50 text-start">
                        🔙 Trở về giỏ hàng
                    </a>

                    <button class="place-order-btn btn btn-primary w-50 py-3">
                        Đặt hàng
                    </button>

                </div>


            </div>

            <!-- RIGHT: Summary -->
            <div class="col-md-5 mt-4 mt-md-0">
                <div class="summary-box">
                    <h5 class="mb-4">Tóm tắt đơn hàng</h5>

                    <div class="d-flex align-items-center mb-3 position-relative product-summary-item">
                        <!-- Product image + quantity badge -->
                        <div class="product-img-wrapper">
                            <img src="../assets/headphone.png" class="summary-img">
                            <span class="qty-badge">1</span>
                        </div>

                        <!-- Product details -->
                        <div class="flex-grow-1 ms-4">
                            <strong>NFL Ball Replica</strong>
                            <div class="price-text">29.00₫</div>
                        </div>

                        <!-- Total price of product -->
                        <div class="product-total text-end">
                            <strong>29.00₫</strong>
                        </div>
                    </div>
                    <div class="d-flex align-items-center mb-3 position-relative product-summary-item">
                        <!-- Product image + quantity badge -->
                        <div class="product-img-wrapper">
                            <img src="../assets/headphone.png" class="summary-img">
                            <span class="qty-badge">1</span>
                        </div>

                        <!-- Product details -->
                        <div class="flex-grow-1 ms-4">
                            <strong>NFL Ball Replica</strong>
                            <div class="price-text">29.00₫</div>
                        </div>

                        <!-- Total price of product -->
                        <div class="product-total text-end">
                            <strong>29.00₫</strong>
                        </div>
                    </div>
                    <div class="d-flex align-items-center mb-3 position-relative product-summary-item">
                        <!-- Product image + quantity badge -->
                        <div class="product-img-wrapper">
                            <img src="../assets/headphone.png" class="summary-img">
                            <span class="qty-badge">1</span>
                        </div>

                        <!-- Product details -->
                        <div class="flex-grow-1 ms-4">
                            <strong>NFL Ball Replica</strong>
                            <div class="price-text">29.00₫</div>
                        </div>

                        <!-- Total price of product -->
                        <div class="product-total text-end">
                            <strong>29.00₫</strong>
                        </div>
                    </div>
                    <div class="d-flex align-items-center mb-3 position-relative product-summary-item">
                        <!-- Product image + quantity badge -->
                        <div class="product-img-wrapper">
                            <img src="../assets/headphone.png" class="summary-img">
                            <span class="qty-badge">1</span>
                        </div>

                        <!-- Product details -->
                        <div class="flex-grow-1 ms-4">
                            <strong>NFL Ball Replica</strong>
                            <div class="price-text">29.00₫</div>
                        </div>

                        <!-- Total price of product -->
                        <div class="product-total text-end">
                            <strong>29.00₫</strong>
                        </div>
                    </div>

                    <hr>

                    <div class="d-flex justify-content-between mb-3">
                        <strong style="font-size: 24px;">Tổng giá trị</strong>
                        <strong style="font-size: 24px;">29.00₫</strong>
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
        }
    },
    created() { },
    mounted() {
    },
    watch: {

    },
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
.checkout-title {
    font-size: 40px;
    font-weight: 700;
    color: #111;
}

.checkout-box {
    background: #fff;
    padding: 20px 25px;
    border: 1px solid #e2e2e2;
    border-radius: 6px;
    color: #111;
}

.section-title {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 15px;
    color: #111;
}

.label-input {
    font-size: 13px;
    font-weight: 600;
    color: #111;
}

.form-control,
.form-select {
    border-radius: 4px !important;
    padding: 12px;
    font-size: 14px;
    color: #111;
}

.form-control::placeholder,
.form-select::placeholder {
    color: #7b7a7a;
}

.summary-box {
    background: #fafafa;
    padding: 20px;
    border: 1px solid #eee;
    border-radius: 6px;
    color: #111;
}

.summary-img {
    width: 60px;
    border: 1px solid #ddd;
}

.btn-back-cart {
    text-decoration: none;
    font-weight: bold;
    font-size: 17px;
    color: #111 !important;
}

.place-order-btn {
    width: 100%;
    background: #2d41d9;
    padding: 14px;
    border: none;
    border-radius: 3px;
    color: #fff !important;
    font-size: 15px;
    font-weight: 600;
}

.place-order-btn:hover {
    opacity: 0.9;
    cursor: pointer;
}

.product-img-wrapper {
    position: relative;
    width: fit-content;
}

.qty-badge {
    position: absolute;
    top: -6px;
    right: -6px;
    background: #2d41d9;
    color: white;
    font-size: 12px;
    font-weight: bold;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.product-total {
    min-width: 70px;
    color: #111;
}

.price-text {
    font-size: 14px;
    color: #111;
}

/* radio + label */
.form-check-label {
    color: #111;
}

.alert-danger {
    color: #111;
}

p,
a,
strong,
span,
div {
    color: #111;
}
</style>