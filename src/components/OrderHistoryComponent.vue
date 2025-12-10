<template>
    <div class="content-box">
        <ul class="order-tabs d-flex mb-4">
            <li :class="{ active: orderTab === 'preparing' }" @click="orderTab = 'preparing'">
                Chuẩn bị hàng
            </li>

            <li :class="{ active: orderTab === 'shipping' }" @click="orderTab = 'shipping'">
                Đang giao hàng
            </li>

            <li :class="{ active: orderTab === 'completed' }" @click="orderTab = 'completed'">
                Đã hoàn thành
            </li>
        </ul>

        <div v-if="orderTab === 'preparing'">
            <div
                v-for="(item, index) in orderPreparing"
                :key="index"
                class="order-wrapper p-3 border rounded mb-3"
            >
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <div class="d-flex align-items-center">
                        <img :src="item.category_thumbnail" class="category-thumb me-2" />
                        <div class="me-3">
                            <h5 class="mb-0">{{ item.category_title }}</h5>
                        </div>
                        <button class="btn btn-outline-primary btn-sm">Xem danh mục</button>
                    </div>

                    <span
                        class="order-status"
                        :class="item.bill_status === 3 ? 'paid' : 'status-direct'"
                    >
                        {{ item.bill_status === 3 ? 'ĐÃ THANH TOÁN' : 'THANH TOÁN TRỰC TIẾP' }}
                    </span>
                </div>

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

        <div v-if="orderTab === 'shipping'">
            <div
                v-for="(item, index) in orderShipping"
                :key="index"
                class="order-wrapper p-3 border rounded mb-3"
            >
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

        <div v-if="orderTab === 'completed'">
            <div
                v-for="(item, index) in orderCompleted"
                :key="index"
                class="order-wrapper p-3 border rounded mb-3"
            >
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

<script>
import { apiHelper } from '@/helpers/axios'

export default {
    data() {
        return {
            orderTab: 'completed',
            orderPreparing: [],
            orderShipping: [],
            orderCompleted: [],
        }
    },

    async created() {
        const params = new URLSearchParams(window.location.search)
        const orderCode = params.get('orderCode')
        const tab = params.get('tab')

        if (tab) this.orderTab = tab

        if (orderCode) {
            try {
                const token = sessionStorage.getItem('token')
                await apiHelper.get(`/check-payment-status?orderCode=${orderCode}`, {
                    headers: { Authorization: `Bearer ${token}` },
                })
                window.location.replace(window.location.pathname + '?tab=completed')
            } catch (e) {
                console.error(e)
            }
        }

        this.orderHistory()
    },

    methods: {
        async orderHistory() {
            try {
                const token = sessionStorage.getItem('token')
                if (!token) return

                const res = await apiHelper.get('/order-history', {
                    headers: { Authorization: `Bearer ${token}` },
                })

                if (res.status === 200 && res.data?.data) {
                    this.orderPreparing = res.data.data.orderPreparing || []
                    this.orderShipping = res.data.data.orderShipping || []
                    this.orderCompleted = res.data.data.orderCompleted || []
                }
            } catch (error) {
                console.error(error)
            }
        },
    },
}
</script>

<style scoped>
.order-status {
    font-weight: 600;
    font-size: 14px;
    padding: 6px 12px;
    border-radius: 6px;
}
.order-status.paid {
    background: #e0f3e0;
    color: #1b8e1b;
}

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
    transition: 0.2s;
}
.order-tabs li:hover {
    color: #111;
}
.order-tabs li.active {
    color: #3449ca;
    font-weight: 600;
    border-bottom: 3px solid #3449ca;
}

.order-status.status-direct {
    background: #ffe8cc;
    color: #c76a00;
}
.order-status.status-shipping {
    background: #e0ecff;
    color: #1f57c3;
}
.order-status.status-completed {
    background: #dcfbe6;
    color: #128a41;
}

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
.image-rounded {
    width: 90px;
    height: 90px;
    object-fit: cover;
    border-radius: 6px;
}
</style>
