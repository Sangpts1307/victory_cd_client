<template>
    <body class="bg-light">
        <div class="container-fluid">
            <div class="row">
                <AdminSidebarComponent />

                <div class="col-9 col-md-10 p-4">
                    <AdminHeaderComponent />
                    <hr />

                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <h3 class="fw-bold">Quản lý danh mục</h3>
                    </div>
                    <p class="text-muted mb-4">Quản lý danh mục chứa sản phẩm</p>

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

                    <div class="table-responsive row g-3 mb-4 border rounded p-3">
                        <table class="table table-bordered table-hover align-middle bg-white rounded shadow-sm">
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
                                <template
                                    v-for="parent in categoriesStore.listCategory"
                                    :key="parent.id"
                                >
                                    <tr>
                                        <td>#{{ parent.id }}</td>
                                        <td class="fw-bold">{{ parent.title }}</td>
                                        <td class="text-muted">---</td>
                                        <td>
                                            <img
                                                v-if="parent.thumbnail_url"
                                                :src="parent.thumbnail_url"
                                                width="50"
                                                class="rounded"
                                            />
                                            <span v-else class="text-muted">null</span>
                                        </td>
                                        <td>
                                            <button
                                                class="btn btn-danger btn-sm"
                                                @click="deleteCategory(parent.id)"
                                            >
                                                <i class="bi bi-trash"></i>
                                            </button>
                                        </td>
                                    </tr>

                                    <tr
                                        v-for="child in parent.children"
                                        :key="child.id"
                                    >
                                        <td>#{{ child.id }}</td>
                                        <td class="ps-4">
                                            └ {{ child.title }}
                                        </td>
                                        <td>{{ parent.title }}</td>
                                        <td>
                                            <img
                                                v-if="child.thumbnail_url"
                                                :src="child.thumbnail_url"
                                                width="50"
                                                class="rounded"
                                            />
                                            <span v-else class="text-muted">null</span>
                                        </td>
                                        <td>
                                            <button
                                                class="btn btn-danger btn-sm"
                                                @click="deleteCategory(child.id)"
                                            >
                                                <i class="bi bi-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                </template>

                                <tr v-if="!categoriesStore.listCategory.length">
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

        <div class="modal fade" id="addCategoryModal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Thêm Danh Mục</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                        <div class="mb-3">
                            <label class="form-label">Tên danh mục</label>
                            <input
                                type="text"
                                class="form-control"
                                v-model="form.title"
                            />
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Danh mục cha</label>
                            <select class="form-select" v-model="form.parent_id">
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
                    </div>

                    <div class="modal-footer">
                        <button class="btn btn-secondary" data-bs-dismiss="modal">
                            Hủy
                        </button>
                        <button class="btn btn-primary" @click="addCategory">
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
import { mapStores } from 'pinia'
import { useCategoriesStore } from '@/stores/categories'

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

        parentCategories() {
            return this.categoriesStore.listCategory.filter(
                (c) => Number(c.parent_id) === 0
            )
        },

        mappedCategories() {
            const map = {}

            this.categoriesStore.listCategory.forEach(c => {
                map[c.id] = c.title
            })

            let list = this.categoriesStore.listCategory.map(c => ({
                ...c,
                parent_title: map[c.parent_id] || null,
            }))

            if (!this.searchKey) return list

            return list.filter(c =>
                c.title.toLowerCase().includes(this.searchKey.toLowerCase())
            )
        },
    },

    created() {
        this.categoriesStore.fetchListCategory()
    },

    methods: {
        deleteCategory(id) {
            if (!confirm('Bạn có chắc muốn xóa danh mục này?')) return

            this.categoriesStore.listCategory =
                this.categoriesStore.listCategory.filter(c => c.id !== id)
        },

        addCategory() {
            if (!this.form.title) return

            this.categoriesStore.listCategory.push({
                id: Date.now(),
                title: this.form.title,
                parent_id: this.form.parent_id || 0,
                cover: null,
            })

            this.form.title = ''
            this.form.parent_id = ''
            document.querySelector('#addCategoryModal .btn-close').click()
        },
    },
}
</script>