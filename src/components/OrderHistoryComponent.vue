<template>
    <div class="content-box">

        <!-- ORDER NAV TABS -->
        <ul class="order-tabs d-flex mb-4">
            <li :class="{ active: orderTab === 'preparing' }" @click="orderTab = 'preparing'">Chuẩn bị hàng</li>

            <li :class="{ active: orderTab === 'shipping' }" @click="orderTab = 'shipping'">Đang giao hàng</li>

            <li :class="{ active: orderTab === 'completed' }" @click="orderTab = 'completed'">Đã hoàn thành</li>
        </ul>

        <!-- TAB 1 -->
        <div v-if="orderTab === 'preparing'">
            <div v-for="(item, index) in orderPreparing" :key="index" class="order-wrapper p-3 border rounded mb-3">

                <!-- HEADER -->
                <div class="d-flex justify-content-between align-items-center mb-3">

                    <!-- LEFT CATEGORY -->
                    <div class="d-flex align-items-center">
                        <img :src="item.category_thumbnail" class="category-thumb me-2" />

                        <div class="me-3">
                            <h5 class="mb-0">{{ item.category_title }}</h5>
                        </div>

                        <button class="btn btn-outline-primary btn-sm">Xem danh mục</button>
                    </div>

                    <!-- RIGHT STATUS -->
                    <span class="order-status" :class="item.bill_status === 3 ? 'status-direct' : 'paid'">
                        {{ item.bill_status === 3 ? 'THANH TOÁN TRỰC TIẾP' : 'ĐÃ THANH TOÁN' }}
                    </span>
                </div>

                <!-- PRODUCT ITEM -->
                <div class="order-item d-flex p-3 border rounded">
                    <img :src="item.product_thumbnail" class="image-rounded me-3" />

                    <div class="flex-grow-1">
                        <h6>{{ item.product_name }}</h6>
                        <p class="text-muted">Danh mục: {{ item.category_title }}</p>
                        <p>x{{ item.detail_quantity }}</p>
                    </div>

                    <div class="text-end">
                        <p class="text-danger fw-bold">
                            {{ (item.product_price * item.detail_quantity).toLocaleString() }}đ
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- TAB 2 -->
        <div v-if="orderTab === 'shipping'">
            <div v-for="(item, index) in orderShipping" :key="index" class="order-wrapper p-3 border rounded mb-3">

                <!-- HEADER -->
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <div class="d-flex align-items-center">
                        <img :src="item.category_thumbnail" class="category-thumb me-2" />
                        <div class="me-3">
                            <h5 class="mb-0">{{ item.category_title }}</h5>
                        </div>
                        <button class="btn btn-outline-primary btn-sm">Xem danh mục</button>
                    </div>

                    <span class="order-status status-shipping">ĐANG GIAO</span>
                </div>

                <!-- PRODUCT ITEM -->
                <div class="order-item d-flex p-3 border rounded">
                    <img :src="item.product_thumbnail" class="image-rounded me-3" />

                    <div class="flex-grow-1">
                        <h6>{{ item.product_name }}</h6>
                        <p class="text-muted">Danh mục: {{ item.category_title }}</p>
                        <p>x{{ item.detail_quantity }}</p>
                    </div>

                    <div class="text-end">
                        <p class="text-danger fw-bold">
                            {{ (item.product_price * item.detail_quantity).toLocaleString() }}đ
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- TAB 3 -->
        <div v-if="orderTab === 'completed'">
            <div v-for="(item, index) in orderCompleted" :key="index" class="order-wrapper p-3 border rounded mb-3">

                <!-- HEADER -->
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <div class="d-flex align-items-center">
                        <img :src="item.category_thumbnail" class="category-thumb me-2" />
                        <div class="me-3">
                            <h5 class="mb-0">{{ item.category_title }}</h5>
                        </div>
                        <button class="btn btn-outline-primary btn-sm">Xem danh mục</button>
                    </div>

                    <span class="order-status paid">HOÀN THÀNH</span>
                </div>

                <!-- PRODUCT ITEM -->
                <div class="order-item d-flex p-3 border rounded">
                    <img :src="item.product_thumbnail" class="image-rounded me-3" />

                    <div class="flex-grow-1">
                        <h6>{{ item.product_name }}</h6>
                        <p class="text-muted">Danh mục: {{ item.category_title }}</p>
                        <p>x{{ item.detail_quantity }}</p>
                    </div>

                    <div class="text-end">
                        <p class="text-danger fw-bold">
                            {{ (item.product_price * item.detail_quantity).toLocaleString() }}đ
                        </p>
                        <div class="d-flex gap-2 justify-content-end">
                            <button class="btn btn-outline-secondary btn-sm">Đánh giá</button>
                            <button class="btn btn-outline-primary btn-sm">Mua lại</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { apiHelper } from '@/helpers/axios'

const orderTab = ref("completed")
</script>
<script>
export default {
    props: {
        product: Object,
    },

    data() {
        return {
            orderPreparing: [],
            orderShipping: [],
            orderCompleted: [],
        }
    },
    created() {
        this.orderHistory()
    },
    mounted() {
        this.orderHistory()
    },
    watch: {},
    computed: {
    },
    methods: {
        async orderHistory() {
            try {
                const token = sessionStorage.getItem('token');
                if (!token) return; // nếu chưa đăng nhập

                const res = await apiHelper.get('/order-history', {
                    headers: { Authorization: `Bearer ${token}` }
                });

                if (res.status === 200 && res.data?.data) {
                    this.orderPreparing = res.data.data.orderPreparing || [];
                    this.orderShipping = res.data.data.orderShipping || [];
                    this.orderCompleted = res.data.data.orderCompleted || [];
                }
            } catch (error) {
                console.error('Lấy lịch sử đơn hàng thất bại:', error);
            }
        },
    }

}
</script>

<style scoped>
/* TOP RIGHT STATUS */
.order-status {
    font-weight: 600;
    font-size: 14px;
    padding: 6px 12px;
    border-radius: 6px;
}

/* Static - Paid */
.order-status.paid {
    background: #e0f3e0;
    color: #1b8e1b;
}

/* TABS */
.order-tabs {
    list-style: none;
    padding: 0;
    border-bottom: 1px solid #ddd;
}

.order-tabs li {
    padding: 10px 18px;
    cursor: pointer;
    margin-right: 12px;
    color: #777;
    border-bottom: 3px solid transparent;
    transition: .2s;
}

.order-tabs li:hover {
    color: #111;
}

.order-tabs li.active {
    color: #3449ca;
    font-weight: 600;
    border-bottom: 3px solid #3449ca;
}

/* THANH TOÁN TRỰC TIẾP */
.order-status.status-direct {
    background: #ffe8cc;
    color: #c76a00;
}

/* ĐANG GIAO */
.order-status.status-shipping {
    background: #e0ecff;
    color: #1f57c3;
}

/* HOÀN THÀNH */
.order-status.status-completed {
    background: #dcfbe6;
    color: #128a41;
}

/* Giãn cách nút đánh giá */
.gap-2 {
    gap: 8px;
}

.category-thumb {
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 6px;
    border: 1px solid #ddd;
}

/* IMAGE */
.image-rounded {
    width: 90px;
    height: 90px;
    object-fit: cover;
    border-radius: 6px;
}
</style>
