<template>
    <HeaderComponent />
    <div class="best-seller container mt-5">
        <div class="section-header d-flex justify-content-between align-items-center mb-4">
        </div>

        <ProductComponent :showSeeMore="true" />
    </div>
    <div style="height: 100px;"></div>
    <FooterComponent />
</template>

<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import ProductComponent from "@/components/ProductComponent.vue";
import { useProductStore } from "@/stores/products";
import { onMounted, watch } from "vue";
import { useRoute } from "vue-router";

const store = useProductStore();
const route = useRoute();

onMounted(() => {
    const cat = route.query.category || null;
    store.setCategory(cat);
});

watch(
    () => route.query.category,
    (newVal) => {
        store.setCategory(newVal || null);
    }
);
</script>

<style scoped>
.best-seller-item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 8px;
    overflow: hidden;
    text-align: left;
    padding: 16px;
    background: #fff;
    height: 100%;
}

.best-seller-item img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 6px;
    margin-bottom: 8px;
}

.best-seller-item h5 {
    font-size: 16px;
    font-weight: 700;
    margin: 0 0 4px 0;
    line-height: 1.25;
    height: calc(1.25em * 2);
    /* giữ max 2 dòng nếu tên dài */
    overflow: hidden;
}

.best-seller-item .small-desc {
    font-size: 14px;
    line-height: 1.25;
    height: calc(1.25em * 2);
    /* chính xác 2 dòng */
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    /* Safari/Chrome */
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    word-break: break-word;
    margin: 0 0 8px 0;
}

.best-seller-item a {
    display: block;
    text-align: center;
    font-weight: 600;
    font-size: 14px;
    background-color: rgba(0, 0, 0, 0.05);
    padding: 6px 0;
    border-radius: 4px;
    text-decoration: none;
}

.container {
    max-width: 1200px;
    margin: auto;
    padding: 20px 20px 0 20px;
}

.container-custom {
    max-width: 1250px;
    margin: 0 auto;
    padding: 0 50px;
}
</style>