<template>

    <body class="bg-light">

        <div class="container-fluid">
            <div class="row">

                <AdminSidebarComponent />

                <div class="col-9 col-md-10 p-4">
                    <AdminHeaderComponent />
                    <hr>

                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <h3 class="fw-bold">Tổng quan Dashboard</h3>
                    </div>
                    <p class="text-muted">Thống kê và giám sát hệ thống</p>

                    <div class="row g-3 mt-1">
                        <div class="col-md-3">
                            <div class="p-3 bg-white shadow-sm rounded">
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <p class="text-muted mb-1">Tổng người dùng</p>
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
                                        <p class="text-muted mb-1">Người dùng online</p>
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
                                        <p class="text-muted mb-1">Tổng bài đăng</p>
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
                        <div class="col-md-6">
                            <div class="p-4 bg-white shadow-sm rounded">
                                <h6 class="fw-bold mb-3">Tăng trưởng người dùng</h6>
                                <p class="text-muted">Biểu đồ placeholder</p>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="p-4 bg-white shadow-sm rounded">
                                <h6 class="fw-bold mb-3">Thống kê bài đăng</h6>
                                <p class="text-muted">Biểu đồ placeholder</p>
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