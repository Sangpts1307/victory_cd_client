<template>
    <div class="col-3 col-md-2 bg-white border-end min-vh-100 p-3 d-flex flex-column">
        <h4 class="fw-bold mb-4 text-center">4ViewsSocial</h4>

        <div class="nav flex-column">
            <router-link
                to="/admin/dashboard"
                class="nav-link rounded mb-1"
                active-class="bg-dark text-white"
            >
                <i class="bi bi-house-door me-2"></i> Thống kê
            </router-link>

            <router-link
                to="/admin/customers"
                class="nav-link text-dark mb-1"
                active-class="bg-dark text-white"
            >
                <i class="bi bi-people me-2"></i> Khách hàng
            </router-link>

            <router-link
                to="/admin/categories"
                class="nav-link text-dark mb-1"
                active-class="bg-dark text-white"
            >
                <i class="bi bi-file-earmark-text me-2"></i> Danh mục
            </router-link>

            <router-link
                to="/admin/products"
                class="nav-link text-dark mb-1"
                active-class="bg-dark text-white"
            >
                <i class="bi bi-exclamation-triangle me-2"></i> Sản phẩm
            </router-link>

            <router-link
                to="/admin/orders"
                class="nav-link text-dark mb-1"
                active-class="bg-dark text-white"
            >
                <i class="bi bi-camera me-2"></i> Đơn hàng
            </router-link>
        </div>

        <div class="mt-auto">
            <button class="btn btn-danger mt-5 w-100" @click="logout">
                Đăng xuất
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AdminSidebar',
    methods: {
        logout() {
            this.$router.push('/login')
        },
    },
}
</script>