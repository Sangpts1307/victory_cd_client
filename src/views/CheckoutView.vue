<template>
    <div>
        <HeaderComponent />

        <div class="checkout-container container py-5">
            <h1 class="checkout-title text-center mb-5">Thanh toán</h1>

            <div class="row">

                <!-- LEFT -->
                <div class="col-md-7">
                    <div class="checkout-box mb-4">
                        <h5 class="section-title">Thông tin giao hàng</h5>

                        <label class="label-input">Email</label>
                        <input v-model="customer.email" type="email" class="form-control mb-2" placeholder="Email" />

                        <label class="label-input">Số điện thoại</label>
                        <input v-model="customer.phone" type="tel" class="form-control mb-2"
                            placeholder="Nhập số điện thoại" />

                        <label class="label-input">Địa chỉ</label>
                        <input v-model="customer.address" type="text" class="form-control mb-2"
                            placeholder="Địa chỉ nhận hàng" />
                    </div>

                    <div class="checkout-box mb-4">
                        <h5 class="section-title">Phương thức thanh toán</h5>

                        <div class="form-group mt-3">
                            <div class="form-check mb-2">
                                <input class="form-check-input" type="radio" name="payment" value="online"
                                    v-model="paymentMethod">
                                <label class="form-check-label">Thanh toán Online</label>
                            </div>

                            <div class="form-check mb-2">
                                <input class="form-check-input" type="radio" name="payment" value="offline"
                                    v-model="paymentMethod">
                                <label class="form-check-label">Thanh toán Khi nhận hàng (COD)</label>
                            </div>
                        </div>

                        <div v-if="!paymentMethod" class="alert alert-danger py-2 mt-3">
                            Vui lòng chọn phương thức thanh toán để tiếp tục.
                        </div>

                        <p class="mt-3 small">
                            Bằng việc tiếp tục đặt hàng, bạn đồng ý với
                            <a href="#" class="fw-semibold text-decoration-underline">Điều khoản và Điều kiện</a>
                            và
                            <a href="#" class="fw-semibold text-decoration-underline">Chính sách bảo mật</a>.
                        </p>
                    </div>

                    <div class="d-flex justify-content-between align-items-center mt-4 gap-3">
                        <a href="/cart" class="btn-back-cart text-dark w-50 text-start">
                            🔙 Trở về giỏ hàng
                        </a>

                        <button class="place-order-btn btn btn-primary w-50 py-3" @click="placeOrder()">
                            Đặt hàng
                        </button>
                    </div>
                </div>

                <!-- RIGHT -->
                <div class="col-md-5 mt-4 mt-md-0">
                    <div class="summary-box">
                        <h5 class="mb-4">Tóm tắt đơn hàng</h5>

                        <div v-for="item in checkoutItems" :key="item.id"
                            class="d-flex align-items-center mb-3 position-relative product-summary-item">

                            <div class="product-img-wrapper">
                                <img :src="item.thumbnail_url || defaultThumbnail" class="summary-img" />
                                <span class="qty-badge">{{ item.quantity }}</span>
                            </div>

                            <div class="flex-grow-1 ms-4">
                                <strong>{{ item.name }}</strong>
                                <div class="price-text">{{ formatPrice(item.price) }}</div>
                            </div>

                            <div class="product-total text-end">
                                <strong>{{ formatPrice(item.price * item.quantity) }}</strong>
                            </div>
                        </div>

                        <hr />

                        <div class="d-flex justify-content-between mb-3">
                            <strong style="font-size: 24px;">Tổng giá trị</strong>
                            <strong style="font-size: 24px;">{{ formatPrice(totalValue) }}</strong>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <FooterComponent />
    </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue"
import FooterComponent from "../components/FooterComponent.vue"
import defaultThumbnail from "../assets/default_thumbnail.jpg"
import { apiHelper } from "@/helpers/axios";

export default {
    name: "CheckoutView",
    components: { HeaderComponent, FooterComponent },

    data() {
        const savedUser = JSON.parse(localStorage.getItem("auth") || "{}")

        return {
            defaultThumbnail,
            checkoutItems: [],
            paymentMethod: null,
            customer: {
                email: savedUser.email || "",
                phone: "",
                address: "",
            }
        }
    },

    created() {
        const stored = JSON.parse(localStorage.getItem("checkout_items") || "[]")
        this.checkoutItems = stored
    },

    computed: {
        totalValue() {
            return this.checkoutItems.reduce(
                (s, i) => s + (Number(i.price) || 0) * (Number(i.quantity) || 0),
                0
            )
        }
    },

    methods: {
        formatPrice(value) {
            if (!value) return "0 ₫"
            return new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND"
            }).format(value)
        },

        placeOrder() {
            if (!this.customer.email || !this.customer.phone || !this.customer.address) {
                alert("Vui lòng điền đầy đủ thông tin giao hàng")
                return
            }
            if (!this.paymentMethod) {
                alert("Vui lòng chọn phương thức thanh toán")
                return
            }

            const orderItems = this.checkoutItems.map(item => ({
                id: item.id,
                name: item.name,
                price: Number(item.price),
                quantity: Number(item.quantity),
                total_price: Number(item.price) * Number(item.quantity),
                thumbnail_url: item.thumbnail_url
            }))

            apiHelper.post('/create-bill',
                {
                    email: this.customer.email,
                    phone: this.customer.phone,
                    address: this.customer.address,
                    payment_method: this.paymentMethod,
                    items: orderItems,
                    total_price: this.totalValue
                },
                {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem('token')}`
                    }
                }
            )
                .then((res) => {
                    if (res.status === 200 && this.paymentMethod == 'online') {
                        console.log(res.data.data);
                        window.location.href = res.data.data.checkout_url;
                    }
                    if (res.status === 200 && this.paymentMethod == 'offline') {
                        alert('Đặt hàng thành công! cảm ơn bạn đã mua hàng');
                        this.$router.push('/home');
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }
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
    object-fit: cover;
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