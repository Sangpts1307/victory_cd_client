<template>
    <div class="social-login">
        <button class="btn-social">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" />
            <span>{{ title }} bằng Google</span>
        </button>
    </div>
</template>

<script>
export default {
    props: ['title'],
}
</script>

<style scoped>
.social-login {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.btn-social {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 6px;
    background: #fafafa;
    cursor: pointer;
    font-size: 14px;
    transition:
        background 0.2s,
        transform 0.1s;
}

.btn-social img {
    width: 20px;
    height: 20px;
}

.btn-social:hover {
    background: #f0f0f0;
}
</style>
