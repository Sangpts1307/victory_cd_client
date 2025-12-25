<template>
    <body class="bg-light">
        <div class="container-fluid">
            <div class="row">
                <AdminSidebarComponent />

                <div class="col-9 col-md-10 p-4">
                    <AdminHeaderComponent />
                    <hr />

                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <h3 class="fw-bold">Danh sách sản phẩm</h3>
                    </div>
                    <p class="text-muted mb-4">Quản lý danh sách sản phẩm có trong cửa hàng</p>

                    <div class="row g-3 mb-4 border rounded p-2">
                        <div class="col-3">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="🔍 Tìm kiếm sản phẩm"
                                v-model="searchKey"
                            />
                        </div>
                        <div class="col-2">
                            <button
                                class="btn btn-primary w-50"
                                data-bs-toggle="modal"
                                data-bs-target="#addProductModal"
                            >
                                <i class="bi bi-plus-lg"></i> Thêm
                            </button>
                        </div>
                    </div>

                    <div class="table-responsive row g-3 mb-4 border rounded p-3">
                        <table
                            class="table table-bordered table-hover align-middle bg-white rounded shadow-sm"
                        >
                            <thead class="text-center">
                                <tr>
                                    <th>Danh mục</th>
                                    <th>Tên sản phẩm</th>
                                    <th>Giá</th>
                                    <th>Ảnh</th>
                                    <th>Số lượng</th>
                                    <th>Đã bán</th>
                                    <th>Mô tả</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>

                            <tbody class="text-center">
                                <tr v-for="product in productsStore.list" :key="product.id">
                                    <td>{{ getCategoryTitle(product.category_id) }}</td>
                                    <td>{{ product.name }}</td>
                                    <td>{{ formatPrice(product.price) }}</td>
                                    <td>
                                        <img
                                            v-if="product.thumbnail_url"
                                            :src="product.thumbnail_url"
                                            width="50"
                                            class="rounded"
                                        />
                                        <span v-else class="text-muted">null</span>
                                    </td>
                                    <td>{{ product.quantity }}</td>
                                    <td>{{ product.total_sold }}</td>
                                    <td class="text-start">
                                        {{
                                            product.description
                                                ? product.description.length > 50
                                                    ? product.description.slice(0, 50) + '...'
                                                    : product.description
                                                : ''
                                        }}
                                    </td>
                                    <td>
                                        <button class="btn btn-success btn-sm me-1">
                                            <i class="bi bi-save"></i>
                                        </button>
                                        <button
                                            class="btn btn-danger btn-sm"
                                            @click="deleteProduct(product.id)"
                                        >
                                            <i class="bi bi-trash"></i>
                                        </button>
                                    </td>
                                </tr>

                                <tr v-if="!productsStore.list.length">
                                    <td colspan="9" class="text-muted py-4">
                                        Không có sản phẩm nào
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="addProductModal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Thêm sản phẩm</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                        <div class="mb-3">
                            <label class="form-label">Tên sản phẩm</label>
                            <input type="text" class="form-control" v-model="form.name" />
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Danh mục</label>
                            <select class="form-select" v-model="form.category_id">
                                <option disabled value="">-- Chọn danh mục --</option>
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
                            <label class="form-label">Giá</label>
                            <input type="number" class="form-control" v-model="form.price" />
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Số lượng</label>
                            <input type="number" class="form-control" v-model="form.quantity" />
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Mô tả</label>
                            <textarea
                                class="form-control"
                                rows="3"
                                v-model="form.description"
                            ></textarea>
                        </div>
                    </div>

                    <div class="modal-footer">
                        <button class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                        <button class="btn btn-primary" @click="addProduct">Lưu</button>
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
import { useProductStore } from '@/stores/products'
import { useCategoriesStore } from '@/stores/categories'
import { apiHelper } from '@/helpers/axios'

export default {
    name: 'AdminProductView',

    data() {
        return {
            searchKey: '',
            form: {
                name: '',
                category_id: '',
                price: '',
                rating: '',
                quantity: '',
                description: '',
            },
        }
    },

    computed: {
        ...mapStores(useProductStore, useCategoriesStore),

        parentCategories() {
            return this.categoriesStore.listCategory.filter((c) => c.parent_id === 0)
        },

        flatCategories() {
            const result = []
            this.categoriesStore.listCategory.forEach((p) => {
                result.push(p)
                if (Array.isArray(p.children)) {
                    p.children.forEach((c) => result.push(c))
                }
            })
            return result
        },
    },

    watch: {
        searchKey(val) {
            this.productsStore.setSearchKey(val || null)
        },
    },

    created() {
        this.categoriesStore.fetchListCategory()
        this.productsStore.fetchProducts(true)
    },

    methods: {
        getCategoryTitle(id) {
            const c = this.flatCategories.find((i) => Number(i.id) === Number(id))
            return c ? c.title : '---'
        },

        formatPrice(v) {
            return Number(v || 0).toLocaleString('vi-VN') + ' ₫'
        },

        deleteProduct(id) {
            this.productsStore.list = this.productsStore.list.filter((p) => p.id !== id)
        },

        addProduct() {
            this.productsStore.list.unshift({
                id: Date.now(),
                name: this.form.name,
                category_id: this.form.category_id,
                price: this.form.price,
                rating: this.form.rating,
                quantity: this.form.quantity,
                sold: 0,
                description: this.form.description,
            })
            let data = new FormData()
            data.append('name', this.form.name)
            data.append('category_id', this.form.category_id)
            data.append('description', this.form.description)
            data.append('price', this.form.price)
            data.append('quantity', this.form.price)

            apiHelper
                .post('/update-or-create-product', data, {
                    headers: {
                        Authorization: 'Bearer ' + sessionStorage.getItem('token'),
                    },
                })
                .then((res) => {
                    if (res.status == 200) {
                        console.log(res.data.data)
                    }
                })
                .catch((err) => {
                    console.log(err)
                })

            this.form = {
                name: '',
                category_id: '',
                price: '',
                rating: '',
                quantity: '',
                description: '',
            }
        },
    },
}
</script>
