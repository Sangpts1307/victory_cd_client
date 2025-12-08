<template>

    <body class="bg-light">

        <div class="container-fluid">
            <div class="row">

                <AdminSidebarComponent />

                <div class="col-9 col-md-10 p-4">
                    <AdminHeaderComponent />
                    <hr>

                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <h3 class="fw-bold">Thống kê & Giám sát</h3>
                    </div>
                    <p class="text-muted">Thống kê và giám sát hệ thống</p>

                    <div class="row g-3 mt-1">
                        <div class="col-md-3">
                            <div class="p-3 bg-white shadow-sm rounded">
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <p class="text-muted mb-1">Tổng khách hàng</p>
                                        <h4 class="fw-bold mt-1">1,234</h4>
                                    </div>

                                    <div
                                        class="bg-primary px-3 py-2 rounded me-3 d-flex align-items-center justify-content-center">
                                        <i class="bi bi-people-fill text-white fs-3"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3">
                            <div class="p-3 bg-white shadow-sm rounded">
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <p class="text-muted mb-1">Tổng số sản phẩm</p>
                                        <h3 class="fw-bold">456</h3>
                                    </div>

                                    <div
                                        class="bg-success px-3 py-2 rounded me-3 d-flex align-items-center justify-content-center">
                                        <i class="bi bi-activity text-white fs-3"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3">
                            <div class="p-3 bg-white shadow-sm rounded">
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <p class="text-muted mb-1">Số đơn trong tháng</p>
                                        <h3 class="fw-bold">5,678</h3>
                                    </div>

                                    <div
                                        class="bg-secondary px-3 py-2 rounded me-3 d-flex align-items-center justify-content-center">
                                        <i class="bi bi-file-post text-white fs-3"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3">
                            <div class="p-3 bg-white shadow-sm rounded">
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <p class="text-muted mb-1">Vi phạm chưa xử lý</p>
                                        <h3 class="fw-bold">12</h3>
                                    </div>

                                    <div
                                        class="bg-danger px-3 py-2 rounded me-3 d-flex align-items-center justify-content-center">
                                        <i class="bi bi-exclamation-triangle text-white fs-3"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row g-3 mt-4">
                        <div class="col-md-8">
                            <div class="p-4 bg-white shadow-sm rounded">
                                <h6 class="fw-bold mb-3">Doanh thu</h6>
                                <p class="text-muted">Biểu đồ thống kê doanh thu (biểu đồ cột)</p>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="p-4 bg-white shadow-sm rounded">
                                <h6 class="fw-bold mb-3">Tỉ lệ đặt đơn</h6>
                                <p class="text-muted">Tỉ lệ đặt đơn của từng danh mục (biểu đồ tròn)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </body>
</template>

<script setup>
import axios from 'axios'
import AdminSidebarComponent from '@/components/AdminSidebarComponent.vue'
import AdminHeaderComponent from '@/components/AdminHeaderComponent.vue'
</script>

<script>
</script>