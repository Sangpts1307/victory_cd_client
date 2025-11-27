<template>
    <HeaderComponent />

    <div class="body container py-5">
        <div class="container">
            <h1 class="cart-title">Giỏ hàng</h1>

            <div class="row">
                <div class="col-md-8">
                    <div class="row product-row align-items-center" v-for="(item, index) in products" :key="item.id">
                        <div class="col-auto d-flex align-items-center">
                            <input type="checkbox" v-model="item.selected" class="product-checkbox" />
                        </div>

                        <div class="col-3 col-md-2">
                            <img :src="item.thumbnail_url || defaultThumbnail" class="product-img" />
                        </div>

                        <div class="col-6 col-md-5">
                            <div class="product-name">{{ item.name }}</div>
                            <div class="product-price">{{ formatPrice(item.price) }}</div>

                            <div class="d-flex align-items-center mt-2">
                                <button class="qty-btn" @click="decrease(index)">-</button>
                                <div class="qty-number">{{ item.quantity }}</div>
                                <button class="qty-btn" @click="increase(index)">+</button>
                            </div>
                        </div>

                        <div class="col-md-2 text-md-right">
                            <strong class="product-total">
                                {{ formatPrice(item.price * item.quantity) }}
                            </strong>
                        </div>

                        <div class="col-auto text-right">
                            <span class="trash-icon" @click="removeItem(index)">&#128465;</span>
                        </div>
                    </div>
                </div>

                <div class="col-md-4 mt-4 mt-md-2">
                    <div class="cart-box">
                        <h5 class="cart-box-title text-dark mb-3 text-center">
                            Tổng số giỏ hàng
                        </h5>

                        <div class="d-flex justify-content-between">
                            <span class="text-dark">Thêm mã giảm giá</span>
                            <span class="text-dark">⌄</span>
                        </div>

                        <hr />

                        <div class="d-flex justify-content-between">
                            <strong class="text-dark">Tổng ước tính</strong>
                            <strong class="text-dark">{{ formatPrice(totalPrice) }}</strong>
                        </div>

                        <button class="checkout-btn" @click="goToCheckout">
                            Tiến hành thanh toán
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <FooterComponent />
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import { useCartStore } from "@/stores/cart";
import defaultThumbnail from "../assets/default_thumbnail.jpg";

const router = useRouter();
const cartStore = useCartStore();
const products = ref([]);

onMounted(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    if (storedCart.length) {
        products.value = storedCart.map((item) => ({
            ...item,
            quantity: item.quantity || 1,
            selected: false
        }));
        cartStore.items = [...products.value];
    } else if (cartStore.items.length) {
        products.value = cartStore.items.map((item) => ({
            ...item,
            quantity: item.quantity || 1,
            selected: false
        }));
        localStorage.setItem("cart", JSON.stringify(products.value));
    }
});

const increase = (index) => {
    products.value[index].quantity++;
    cartStore.items[index].quantity = products.value[index].quantity;
    localStorage.setItem("cart", JSON.stringify(cartStore.items));
};

const decrease = (index) => {
    if (products.value[index].quantity > 1) {
        products.value[index].quantity--;
        cartStore.items[index].quantity = products.value[index].quantity;
        localStorage.setItem("cart", JSON.stringify(cartStore.items));
    }
};

const removeItem = (index) => {
    products.value.splice(index, 1);
    cartStore.items.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cartStore.items));
};

const totalPrice = computed(() =>
    products.value
        .filter((item) => item.selected)
        .reduce((sum, item) => sum + item.price * item.quantity, 0)
);

const formatPrice = (value) => {
    if (!value) return "0 ₫";
    return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND"
    }).format(value);
};

const goToCheckout = () => {
    const token = sessionStorage.getItem("token");
    if (!token) {
        alert("Bạn cần đăng nhập để mua hàng, đăng nhập ngay");
        router.push("/login");
    }
    const selectedProducts = products.value.filter(item => item.selected);

    if (selectedProducts.length === 0) {
        alert("Bạn vui lòng chọn mặt hàng");
        return;
    }

    router.push("/checkout");
};
</script>

<style scoped>
body {
    font-family: "Outfit", Arial, sans-serif;
    background: #fff;
    color: #111;
}

.cart-title {
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 40px;
    text-align: center;
    color: #111;
}

.product-row {
    padding: 25px 0;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
}

.product-checkbox {
    width: 26px;
    height: 26px;
    margin-right: 10px;
    cursor: pointer;
}

.product-img {
    width: 80px;
    height: 80px;
    object-fit: contain;
}

.product-name,
.product-price,
.product-total,
.text-dark {
    color: #111;
}

.qty-btn {
    width: 32px;
    height: 32px;
    border: 1px solid #ccc;
    background: #fff;
    color: #111;
    cursor: pointer;
}

.qty-number {
    margin: 0 10px;
    font-weight: 600;
    color: #111;
}

.trash-icon {
    font-size: 26px;
    cursor: pointer;
    color: #e63946;
    transition: 0.2s ease;
}

.trash-icon:hover {
    color: #b81c2a;
    transform: scale(1.15);
}

.cart-box {
    background: #f8f8f8;
    padding: 25px;
    border-radius: 6px;
    border: 1px solid #eee;
}

.checkout-btn {
    background: #2d41d9;
    color: #fff !important;
    width: 100%;
    padding: 16px 0;
    font-size: 18px;
    border: none;
    border-radius: 1px;
    margin-top: 25px;
    cursor: pointer;
}
</style>