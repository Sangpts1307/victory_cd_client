<template>

    <body class="bg-light">

        <div class="container-fluid">
            <div class="row">

                <AdminSidebarComponent />

                <div class="col-9 col-md-10 p-4">
                    <AdminHeaderComponent />
                    <hr>

                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <h3 class="fw-bold">Quản lý Đơn hàng</h3>
                    </div>
                    <p class="text-muted mb-4">Kiểm duyệt cập nhật đơn hàng</p>

                    <div class="row g-3 mb-4 border rounded p-2">
                        <div class="col-md-4">
                            <p class="fw-semibold mb-1">Tìm kiếm</p>
                            <input type="text" class="form-control" placeholder="🔍 Mã đơn hàng">
                        </div>
                        <div class="col-md-4">
                            <p class="fw-semibold mb-1">Trạng thái</p>
                            <select class="form-select">
                                <option selected>Tất cả trạng thái</option>
                                <option>Chờ xác nhận</option>
                                <option>Đang giao</option>
                                <option>Đã hoàn thành</option>
                            </select>
                        </div>
                    </div>

                    <div class="table-responsive row g-3 mb-4 border rounded p-3">
                        <table class="table table-bordered table-hover border align-middle bg-white rounded shadow-sm">
                            <thead class="text-center">
                                <tr>
                                    <th>Mã đơn</th>
                                    <th>Ngày đặt</th>
                                    <th>Tên sản phẩm</th>
                                    <th>Người đặt</th>
                                    <th>Trạng thái</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody class="text-center">
                                <tr>
                                    <td>#IP11...</td>
                                    <td>25/11/2025</td>
                                    <td>Iphone 12 promax</td>
                                    <td>Lê Bống</td>
                                    <td>
                                        <select class="form-select text-center">
                                            <option>Chờ xác nhận</option>
                                            <option>Đang giao</option>
                                            <option>Đã hoàn thành</option>
                                        </select>
                                    </td>
                                    <td>
                                        <button class="btn btn-success">
                                            <i class="bi bi-save"></i> Lưu
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
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