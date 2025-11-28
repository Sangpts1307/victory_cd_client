<template>
    <div class="content-box">

        <h5 class="mb-3">Thông tin cá nhân</h5>

        <form>
            <div class="mb-3">
                <label>Họ tên</label>
                <input type="text" class="form-control" />
            </div>

            <div class="mb-3">
                <label>Địa chỉ Email</label>
                <input type="text" class="form-control" />
            </div>

            <div class="mb-4">
                <label>Số điện thoại</label>
                <input type="text" class="form-control" />
            </div>

            <div class="mb-4">
                <label>Địa chỉ</label>
                <input type="text" class="form-control" />
            </div>

            <h5 class="mb-3">Thay đổi mật khẩu</h5>

            <div class="mb-3">
                <label>Mật khẩu hiện tại</label>
                <input type="password" class="form-control" />
            </div>

            <div class="mb-3">
                <label>Mật khẩu mới</label>
                <input type="password" class="form-control" />
            </div>

            <div class="mb-4">
                <label>Xác nhận mật khẩu mới</label>
                <input type="password" class="form-control" />
            </div>

            <button class="btn-save w-100">Lưu thay đổi</button>
        </form>

    </div>
</template>

<script setup>
</script>

<style scoped>
.content-box {
    border: 1px solid #eee;
    border-radius: 8px;
    padding: 25px;
    background: #fff;
}

.btn-save {
    background: #3449ca;
    color: #fff;
    padding: 12px;
    border: none;
    transition: .25s ease;
}

.btn-save:hover {
    opacity: .8;
}
</style>
