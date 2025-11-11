<template>
    <!-- Banner -->
    <div class="banner-section container">
        <ImageSliderComponent :images="bannerImages" />
    </div>
</template>
<!-- Script for sliders -->
<script setup>
import ImageSliderComponent from '@/components/ImageSliderComponent.vue'

const bannerImages = [
    new URL('../assets/banner1.jpg', import.meta.url).href,
    new URL('../assets/banner2.jpg', import.meta.url).href,
    new URL('../assets/banner3.jpg', import.meta.url).href
]
</script>

<style scoped>
/* Banner */
.banner-section {
    width: 100%;
    margin: 0 auto;
    padding: 0;
}

.slider {
    position: relative;
    width: 100%;
    height: 480px;
    overflow: hidden;
    border-radius: 0;
    box-shadow: none;
    background-color: #f5f5f5;
}

.slides {
    display: flex;
    width: 100%;
    transition: transform 0.6s ease-in-out;
}

.slides img {
    width: 100%;
    height: 480px;
    object-fit: cover;
}

.slider-dots {
    position: absolute;
    bottom: 30px;
    left: 40px;
    display: flex;
    gap: 10px;
    z-index: 10;
}

.slider-dots span {
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.6);
    transition: all 0.3s;
    cursor: pointer;
}

.slider-dots span.active {
    background-color: #fff;
    transform: scale(1.2);
}

.slider-controls {
    position: absolute;
    bottom: 25px;
    right: 40px;
    display: flex;
    gap: 12px;
    z-index: 10;
}

.slider-controls button {
    background: rgba(255, 255, 255, 0.8);
    border: none;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    cursor: pointer;
    transition: all 0.3s;
}

.slider-controls button:hover {
    background: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
}

.container {
    max-width: 1200px;
    margin: auto;
    padding: 20px 20px 0 20px;
}
</style>