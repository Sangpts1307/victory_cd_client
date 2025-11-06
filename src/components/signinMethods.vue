<template>
    <div class="signin-methods">
        <button @click="loginWithGoogle">Google</button>
        <button @click="loginWithFacebook">Facebook</button>
    </div>
</template>

<script setup>
function loginWithGoogle() {
    console.log('Đăng nhập bằng Google')
}

function loginWithFacebook() {
    console.log('Đăng nhập bằng Facebook')
}
</script>

<style scoped>
.signin-methods {
    display: flex;
    justify-content: center;
    gap: 10px;
}
</style>