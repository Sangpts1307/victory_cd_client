<template>

    <body class="bg-light">

        <div class="container-fluid">
            <div class="row">

                <AdminSidebarComponent />

                <div class="col-9 col-md-10 p-4">
                    <AdminHeaderComponent />
                    <hr>

                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <h3 class="fw-bold">Danh sách sản phẩm</h3>
                    </div>
                    <p class="text-muted mb-4">Quản lý danh sách sản phẩm có trong cửa hàng</p>

                    <div class="row g-3 mb-4 border rounded p-2">
                        <div class="col-3">
                            <input type="text" class="form-control" placeholder="🔍 Tìm kiếm sản phẩm">
                        </div>
                        <div class="col-2">
                            <button class="btn btn-primary w-50" data-bs-toggle="modal"
                                data-bs-target="#addCategoryModal">
                                <i class="bi bi-plus-lg"></i> Thêm
                            </button>
                        </div>
                    </div>

                    <div class="table-responsive row g-3 mb-4 border rounded p-3">
                        <table class="table table-bordered table-hover border align-middle bg-white rounded shadow-sm">
                            <thead class="text-center">
                                <tr>
                                    <th>Danh mục</th>
                                    <th>Tên sản phẩm</th>
                                    <th>Giá sản phẩm</th>
                                    <th>Ảnh sản phẩm</th>
                                    <th>Đánh giá</th>
                                    <th>Số lượng</th>
                                    <th>Đã bán</th>
                                    <th>Mô tả</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody class="text-center">
                                <tr>
                                    <td>Điện thoại</td>
                                    <td>Iphone 11</td>
                                    <td>10.000.000</td>
                                    <td>null</td>
                                    <td>5⭐</td>
                                    <td>10</td>
                                    <td>15</td>
                                    <td>Tình trạng new 99% </td>
                                    <td>
                                        <button class="btn btn-success">
                                            <i class="bi bi-save"></i> Lưu
                                        </button>

                                        <button class="btn btn-danger">
                                            <i class="bi bi-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal Thêm Sản Phẩm -->
        <div class="modal fade" id="addCategoryModal" tabindex="-1" aria-labelledby="addCategoryModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="addCategoryModalLabel">Thêm sản phẩm</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div class="modal-body">
                        <form id="addProductForm">

                            <!-- TÊN SẢN PHẨM -->
                            <div class="mb-3">
                                <label class="form-label">Tên sản phẩm</label>
                                <input type="text" class="form-control" placeholder="Nhập tên sản phẩm">
                            </div>

                            <!-- DANH MỤC -->
                            <div class="mb-3">
                                <label class="form-label">Danh mục</label>
                                <select class="form-select">
                                    <option selected disabled>-- Chọn danh mục --</option>
                                    <option value="1">Điện thoại</option>
                                    <option value="2">Máy tính</option>
                                    <option value="3">Phụ kiện</option>
                                </select>
                            </div>

                            <!-- GIÁ SẢN PHẨM -->
                            <div class="mb-3">
                                <label class="form-label">Giá sản phẩm</label>
                                <input type="number" class="form-control" placeholder="Nhập giá sản phẩm">
                            </div>

                            <!-- ẢNH SẢN PHẨM -->
                            <div class="mb-3">
                                <label class="form-label">Ảnh sản phẩm</label>
                                <div class="input-group">
                                    <input type="file" class="form-control" accept="image/*">
                                    <label class="input-group-text">
                                        <i class="bi bi-plus-lg"></i>
                                    </label>
                                </div>
                            </div>

                            <!-- ĐÁNH GIÁ -->
                            <div class="mb-3">
                                <label class="form-label">Đánh giá</label>
                                <select class="form-select">
                                    <option selected disabled>-- Chọn đánh giá --</option>
                                    <option value="1">1 ⭐</option>
                                    <option value="2">2 ⭐</option>
                                    <option value="3">3 ⭐</option>
                                    <option value="4">4 ⭐</option>
                                    <option value="5">5 ⭐</option>
                                </select>
                            </div>

                            <!-- SỐ LƯỢNG -->
                            <div class="mb-3">
                                <label class="form-label">Số lượng</label>
                                <input type="number" class="form-control" placeholder="Nhập số lượng">
                            </div>

                            <!-- MÔ TẢ -->
                            <div class="mb-3">
                                <label class="form-label">Mô tả</label>
                                <textarea class="form-control" rows="3" placeholder="Nhập mô tả sản phẩm"></textarea>
                            </div>

                        </form>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                        <button type="button" class="btn btn-primary">Lưu</button>
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