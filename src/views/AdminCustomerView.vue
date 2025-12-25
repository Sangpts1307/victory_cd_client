<template>
    <body class="bg-light">
        <div class="container-fluid">
            <div class="row">
                <AdminSidebarComponent />

                <div class="col-9 col-md-10 p-4">
                    <AdminHeaderComponent />
                    <hr />

                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <h3 class="fw-bold">Quản lý khách hàng</h3>
                    </div>
                    <p class="text-muted mb-4">Quản lý tài khoản và quyền hạn</p>

                    <div class="row g-3 mb-4 border rounded p-2">
                        <div class="col-md-4">
                            <p class="fw-semibold mb-1">Tìm kiếm</p>
                            <input
                                type="text"
                                class="form-control"
                                placeholder="🔍 Tên, email..."
                            />
                        </div>
                    </div>

                    <div class="table-responsive row g-3 mb-4 border rounded p-3">
                        <table
                            class="table table-bordered table-hover border align-middle bg-white rounded shadow-sm"
                        >
                            <thead class="table-light text-center align-middle">
                                <tr>
                                    <th>Người dùng</th>
                                    <th>Email</th>
                                    <th>Số điện thoại</th>
                                    <th>Địa chỉ</th>
                                </tr>
                            </thead>
                            <tbody class="text-center align-middle">
                                <tr v-for="item in listCustomer">
                                    <td>{{ item.name }} <br /></td>
                                    <td>{{ item.email }}</td>
                                    <td>{{ item.phone }}</td>
                                    <td>{{ item.address }}</td>
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
import { apiHelper } from '@/helpers/axios'
</script>

<script>
export default {
    data() {
        return {
            listCustomer: [],
        }
    },
    mounted() {
        this.fetchCustomers()
    },
    methods: {
        fetchCustomers() {
            apiHelper
                .get('/list-customer')
                .then((res) => {
                    if (res.status == 200) {
                        this.listCustomer = res.data.data
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        },
    },
}
</script>
