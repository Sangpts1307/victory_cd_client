<template>
    <body class="bg-light">
        <div class="container-fluid">
            <div class="row">

                <!-- Sidebar -->
                <AdminSidebarComponent />

                <!-- Content -->
                <div class="col-9 col-md-10 p-4">
                    <AdminHeaderComponent />
                    <hr />

                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <h3 class="fw-bold">Quản lý danh mục</h3>
                    </div>
                    <p class="text-muted mb-4">Quản lý danh mục chứa sản phẩm</p>

                    <!-- Search + Add -->
                    <div class="row g-3 mb-4 border rounded p-2">
                        <div class="col-3">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="🔍 Tìm danh mục"
                                v-model="searchKey"
                            />
                        </div>
                        <div class="col-2">
                            <button
                                class="btn btn-primary w-50"
                                data-bs-toggle="modal"
                                data-bs-target="#addCategoryModal"
                            >
                                <i class="bi bi-plus-lg"></i> Thêm
                            </button>
                        </div>
                    </div>

                    <!-- Table -->
                    <div class="table-responsive row g-3 mb-4 border rounded p-3">
                        <table
                            class="table table-bordered table-hover align-middle bg-white rounded shadow-sm"
                        >
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
                                <tr
                                    v-for="category in filteredCategories"
                                    :key="category.id"
                                >
                                    <td>#{{ category.id }}</td>
                                    <td>{{ category.title }}</td>
                                    <td>
                                        <span v-if="category.parent">
                                            {{ category.parent.title }}
                                        </span>
                                        <span v-else class="text-muted">---</span>
                                    </td>
                                    <td>
                                        <img
                                            v-if="category.cover"
                                            :src="category.cover"
                                            width="50"
                                            class="rounded"
                                        />
                                        <span v-else class="text-muted">null</span>
                                    </td>
                                    <td>
                                        <button
                                            class="btn btn-danger btn-sm"
                                            @click="deleteCategory(category.id)"
                                        >
                                            <i class="bi bi-trash"></i>
                                        </button>
                                    </td>
                                </tr>

                                <tr v-if="!filteredCategories.length">
                                    <td colspan="5" class="text-muted py-4">
                                        Không có danh mục nào
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal Thêm Danh Mục -->
        <div
            class="modal fade"
            id="addCategoryModal"
            tabindex="-1"
            aria-hidden="true"
        >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Thêm Danh Mục</h5>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                        ></button>
                    </div>

                    <div class="modal-body">
                        <div class="mb-3">
                            <label class="form-label">Tên danh mục</label>
                            <input
                                type="text"
                                class="form-control"
                                v-model="form.title"
                                placeholder="Nhập tên danh mục"
                            />
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Danh mục cha</label>
                            <select
                                class="form-select"
                                v-model="form.parent_id"
                            >
                                <option value="">-- Chọn danh mục cha --</option>
                                <option
                                    v-for="cat in parentCategories"
                                    :key="cat.id"
                                    :value="cat.id"
                                >
                                    {{ cat.title }}
                                </option>
                            </select>
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Ảnh bìa</label>
                            <input type="file" class="form-control" />
                        </div>
                    </div>

                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Hủy
                        </button>
                        <button
                            type="button"
                            class="btn btn-primary"
                            @click="addCategory"
                        >
                            Lưu
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </body>
</template>

<script setup>
import AdminSidebarComponent from '@/components/AdminSidebarComponent.vue'
import AdminHeaderComponent from '@/components/AdminHeaderComponent.vue'
</script>

<script>
import { useCategoriesStore } from '@/stores/categories'
import { mapStores } from 'pinia'

export default {
    name: 'AdminCategoryView',

    data() {
        return {
            searchKey: '',
            form: {
                title: '',
                parent_id: '',
            },
        }
    },

    computed: {
        ...mapStores(useCategoriesStore),

        filteredCategories() {
            if (!this.searchKey) return this.categoriesStore.listCategory

            return this.categoriesStore.listCategory.filter((item) =>
                item.title
                    .toLowerCase()
                    .includes(this.searchKey.toLowerCase())
            )
        },

        parentCategories() {
            return this.categoriesStore.listCategory.filter(
                (item) => item.parent_id === 0
            )
        },
    },

    created() {
        this.categoriesStore.fetchListCategory()
    },

    methods: {
        deleteCategory(id) {
            if (!confirm('Bạn có chắc muốn xóa danh mục này?')) return

            // demo UI (sau này nối API)
            this.categoriesStore.listCategory =
                this.categoriesStore.listCategory.filter(
                    (item) => item.id !== id
                )
        },

        addCategory() {
            if (!this.form.title) {
                alert('Vui lòng nhập tên danh mục')
                return
            }

            // demo thêm UI
            this.categoriesStore.listCategory.push({
                id: Date.now(),
                title: this.form.title,
                parent_id: this.form.parent_id || 0,
                parent: this.parentCategories.find(
                    (p) => p.id === this.form.parent_id
                ) || null,
                cover: null,
            })

            this.form.title = ''
            this.form.parent_id = ''
            document.querySelector('#addCategoryModal .btn-close').click()
        },
    },
}
</script>