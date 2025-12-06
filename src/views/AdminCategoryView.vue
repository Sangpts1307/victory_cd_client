<template>

    <body class="bg-light">

        <div class="container-fluid">
            <div class="row">

                <AdminSidebarComponent />

                <div class="col-9 col-md-10 p-4">
                    <AdminHeaderComponent />
                    <hr>

                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <h3 class="fw-bold">Quản lý danh mục</h3>
                    </div>
                    <p class="text-muted mb-4">Quản lý danh mục chứa sản phẩm</p>

                    <div class="row g-3 mb-4 border rounded p-2">
                        <div class="col-3">
                            <input type="text" class="form-control" placeholder="🔍 Tìm danh mục">
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
                                    <th>ID</th>
                                    <th>Tên danh mục</th>
                                    <th>Danh mục cha</th>
                                    <th>Ảnh bìa</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody class="text-center">
                                <tr>
                                    <td>#1</td>
                                    <td>Điện thoại Iphone</td>
                                    <td>Điện thoại</td>
                                    <td>null</td>
                                    <td>
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

        <!-- Modal Thêm Danh Mục -->
        <div class="modal fade" id="addCategoryModal" tabindex="-1" aria-labelledby="addCategoryModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="addCategoryModalLabel">Thêm Danh Mục</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <label for="categoryName" class="form-label">Tên danh mục</label>
                                <input type="text" class="form-control" id="categoryName"
                                    placeholder="Nhập tên danh mục">
                            </div>

                            <div class="mb-3">
                                <label for="parentCategory" class="form-label">Danh mục cha</label>
                                <select class="form-select" id="parentCategory">
                                    <option selected>-- Chọn danh mục cha --</option>
                                    <option value="1">Điện thoại</option>
                                    <option value="2">Máy tính</option>
                                    <option value="3">Phụ kiện</option>
                                </select>
                            </div>

                            <div class="mb-3">
                                <label for="coverImage" class="form-label">Ảnh bìa</label>
                                <div class="input-group">
                                    <input type="file" class="form-control" id="coverImage" accept="image/*">
                                    <label class="input-group-text" for="coverImage">
                                        <i class="bi bi-plus-lg"></i>
                                    </label>
                                </div>
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