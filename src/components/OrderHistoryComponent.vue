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
            <!-- Item 1 -->
            <div class="order-wrapper p-3 border rounded mb-3">

                <!-- HEADER -->
                <div class="d-flex justify-content-between align-items-center mb-3">

                    <!-- LEFT: CATEGORY IMAGE + TITLE + BTN -->
                    <div class="d-flex align-items-center">
                        <img src="../assets/cassete.png" class="category-thumb me-2" />
                        <div class="me-3">
                            <h5 class="mb-0">Điện thoại</h5>
                        </div>
                        <button class="btn btn-outline-primary btn-sm">Xem danh mục</button>
                    </div>

                    <!-- RIGHT: ORDER STATUS -->
                    <span class="order-status status-direct">THANH TOÁN TRỰC TIẾP</span>
                </div>

                <!-- ITEM -->
                <div class="order-item d-flex p-3 border rounded">
                    <img src="../assets/avt_sangpt.jpg" class="image-rounded me-3" />

                    <div class="flex-grow-1">
                        <h6>Iphone 14 Pro Max</h6>
                        <p class="text-muted">Phân loại hàng: 43</p>
                        <p>x2</p>
                    </div>

                    <div class="text-end">
                        <p class="text-danger fw-bold">340.400đ</p>
                        <button class="btn btn-outline-primary btn-sm">Hủy đơn (Nếu là thanh toán trực tiếp)</button>
                    </div>
                </div>

            </div>
            <!-- Item 2 -->
            <div class="order-wrapper p-3 border rounded mb-3">

                <!-- HEADER -->
                <div class="d-flex justify-content-between align-items-center mb-3">

                    <!-- LEFT: CATEGORY IMAGE + TITLE + BTN -->
                    <div class="d-flex align-items-center">
                        <img src="../assets/cassete.png" class="category-thumb me-2" />
                        <div class="me-3">
                            <h5 class="mb-0">Tai nghe</h5>
                        </div>
                        <button class="btn btn-outline-primary btn-sm">Xem danh mục</button>
                    </div>

                    <!-- RIGHT: ORDER STATUS -->
                    <span class="order-status status-direct">ĐÃ THANH TOÁN</span>
                </div>

                <!-- ITEM -->
                <div class="order-item d-flex p-3 border rounded">
                    <img src="../assets/avt_sangpt.jpg" class="image-rounded me-3" />

                    <div class="flex-grow-1">
                        <h6>Airpod 5 pro</h6>
                        <p class="text-muted">Phân loại hàng: 43</p>
                        <p>x1</p>
                    </div>

                    <div class="text-end">
                        <p class="text-danger fw-bold">340.400đ</p>
                        <button class="btn btn-outline-primary btn-sm"></button>
                    </div>
                </div>

            </div>
        </div>

        <!-- TAB 2 -->
        <div v-if="orderTab === 'shipping'">
            <!-- Item 1 -->
            <div class="order-wrapper p-3 border rounded mb-3">

                <!-- HEADER -->
                <div class="d-flex justify-content-between align-items-center mb-3">

                    <!-- LEFT: CATEGORY IMAGE + TITLE + BTN -->
                    <div class="d-flex align-items-center">
                        <img src="../assets/cassete.png" class="category-thumb me-2" />
                        <div class="me-3">
                            <h5 class="mb-0">Phụ kiện</h5>
                        </div>
                        <button class="btn btn-outline-primary btn-sm">Xem danh mục</button>
                    </div>

                    <!-- RIGHT: ORDER STATUS -->
                    <span class="order-status status-shipping">ĐANG GIAO</span>
                </div>

                <!-- ITEM -->
                <div class="order-item d-flex p-3 border rounded">
                    <img src="../assets/avt_sangpt.jpg" class="image-rounded me-3" />

                    <div class="flex-grow-1">
                        <h6>Robot hút bụi Panasonic</h6>
                        <p class="text-muted">Phân loại hàng: 43</p>
                        <p>x1</p>
                    </div>

                    <div class="text-end">
                        <p class="text-danger fw-bold">340.400đ</p>
                        <button class="btn btn-outline-primary btn-sm"></button>
                    </div>
                </div>

            </div>
        </div>

        <!-- TAB 3 -->
        <div v-if="orderTab === 'completed'">

            <!-- Item 1 -->
            <div class="order-wrapper p-3 border rounded mb-3">

                <!-- HEADER -->
                <div class="d-flex justify-content-between align-items-center mb-3">

                    <!-- LEFT: CATEGORY IMAGE + TITLE + BTN -->
                    <div class="d-flex align-items-center">
                        <img src="../assets/cassete.png" class="category-thumb me-2" />
                        <div class="me-3">
                            <h5 class="mb-0">Đồng hồ thông minh</h5>
                        </div>
                        <button class="btn btn-outline-primary btn-sm">Xem danh mục</button>
                    </div>

                    <!-- RIGHT: ORDER STATUS -->
                    <span class="order-status paid">HOÀN THÀNH</span>
                </div>

                <!-- ITEM -->
                <div class="order-item d-flex p-3 border rounded">
                    <img src="../assets/avt_sangpt.jpg" class="image-rounded me-3" />

                    <div class="flex-grow-1">
                        <h6>Giày sneaker Handball Spezial Light Blue</h6>
                        <p class="text-muted">Phân loại hàng: 43</p>
                        <p>x1</p>
                    </div>

                    <div class="text-end">
                        <p class="text-danger fw-bold">340.400đ</p>

                        <div class="d-flex gap-2 justify-content-end">
                            <button class="btn btn-outline-secondary btn-sm">Đánh giá</button>
                            <button class="btn btn-outline-primary btn-sm">Mua Lại</button>
                        </div>
                    </div>

                </div>

            </div>
            <!-- Item 2 -->
            <div class="order-wrapper p-3 border rounded mb-3">

                <!-- HEADER -->
                <div class="d-flex justify-content-between align-items-center mb-3">

                    <!-- LEFT: CATEGORY IMAGE + TITLE + BTN -->
                    <div class="d-flex align-items-center">
                        <img src="../assets/cassete.png" class="category-thumb me-2" />
                        <div class="me-3">
                            <h5 class="mb-0">Đồng hồ thông minh</h5>
                        </div>
                        <button class="btn btn-outline-primary btn-sm">Xem danh mục</button>
                    </div>

                    <!-- RIGHT: ORDER STATUS -->
                    <span class="order-status paid">HOÀN THÀNH</span>
                </div>

                <!-- ITEM -->
                <div class="order-item d-flex p-3 border rounded">
                    <img src="../assets/avt_sangpt.jpg" class="image-rounded me-3" />

                    <div class="flex-grow-1">
                        <h6>Giày sneaker Handball Spezial Light Blue</h6>
                        <p class="text-muted">Phân loại hàng: 43</p>
                        <p>x1</p>
                    </div>

                    <div class="text-end">
                        <p class="text-danger fw-bold">340.400đ</p>

                        <div class="d-flex gap-2 justify-content-end">
                            <button class="btn btn-outline-secondary btn-sm">Đánh giá</button>
                            <button class="btn btn-outline-primary btn-sm">Mua Lại</button>
                        </div>
                    </div>

                </div>

            </div>
            <!-- Item 3 -->
            <div class="order-wrapper p-3 border rounded mb-3">

                <!-- HEADER -->
                <div class="d-flex justify-content-between align-items-center mb-3">

                    <!-- LEFT: CATEGORY IMAGE + TITLE + BTN -->
                    <div class="d-flex align-items-center">
                        <img src="../assets/cassete.png" class="category-thumb me-2" />
                        <div class="me-3">
                            <h5 class="mb-0">Đồng hồ thông minh</h5>
                        </div>
                        <button class="btn btn-outline-primary btn-sm">Xem danh mục</button>
                    </div>

                    <!-- RIGHT: ORDER STATUS -->
                    <span class="order-status paid">HOÀN THÀNH</span>
                </div>

                <!-- ITEM -->
                <div class="order-item d-flex p-3 border rounded">
                    <img src="../assets/avt_sangpt.jpg" class="image-rounded me-3" />

                    <div class="flex-grow-1">
                        <h6>Giày sneaker Handball Spezial Light Blue</h6>
                        <p class="text-muted">Phân loại hàng: 43</p>
                        <p>x1</p>
                    </div>

                    <div class="text-end">
                        <p class="text-danger fw-bold">340.400đ</p>

                        <div class="d-flex gap-2 justify-content-end">
                            <button class="btn btn-outline-secondary btn-sm">Đánh giá</button>
                            <button class="btn btn-outline-primary btn-sm">Mua Lại</button>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue'

const orderTab = ref("preparing")
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
