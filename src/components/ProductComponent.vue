<template>
    <div class="product-section">
        <div class="section-header d-flex justify-content-between align-items-center mb-4">
            <h4 v-if="showTitle" class="fw-bold">Khám phá sản phẩm</h4>

            <div v-if="showSortType" class="sort-container">
                <label for="sort" class="me-2 fw-semibold">Sắp xếp theo:</label>

                <select id="sort" v-model="localSelectedSort" class="form-select form-select-sm d-inline-block w-auto">
                    <option value="default">Mặc định</option>
                    <option value="newest">Mới nhất</option>
                    <option value="featured">Nổi bật nhất</option>
                    <option value="price_asc">Giá thấp đến cao</option>
                    <option value="price_desc">Giá cao đến thấp</option>
                </select>
            </div>
        </div>

        <div class="row g-4">
            <template v-if="list_products && list_products.length > 0">
                <div v-for="product in list_products" :key="product.id" class="col-md-2_4 col-sm-6">
                    <div v-on:click="goToDetail(product.id)"
                        class="product-card text-center p-3 rounded-3 position-relative">
                        <span class="badge bg-warning text-dark position-absolute top-0 start-0 m-2">Hot</span>

                        <img v-if="product.thumbnail_url" :src="product.thumbnail_url"
                            @error="product.thumbnail_url = null" :alt="product.name" class="img-fluid" />
                        <img v-else src="@/assets/default_thumbnail.jpg" alt="Default Image" class="img-fluid" />

                        <h6 class="fw-semibold product-name">{{ product.name }}</h6>

                        <p class="text-warning">
                            <span>{{ "★".repeat(product.score) }}{{ "☆".repeat(5 - product.score) }}</span>
                        </p>

                        <p class="text-dark fw-bold mb-2">
                            {{
                                new Intl.NumberFormat("vi-VN", {
                                    style: "currency",
                                    currency: "VND",
                                }).format(product.price)
                            }}
                        </p>
                        <h6 class="fw-light product-name fst-italic text-muted">{{ product.total_sold }} lượt mua</h6>

                        <div class="product-actions">
                            <button v-on:click.stop="addToCart(product.id)" class="btn btn-add-cart w-100 mb-2">Thêm vào
                                giỏ</button>
                            <button class="btn btn-buy-now w-100">Mua ngay</button>
                        </div>
                    </div>
                </div>
            </template>
            <template v-else>
                <div class="col-12 text-center text-muted py-5">
                    <h5 style="opacity: 0.6; font-style: italic;">
                        Hiện chưa có sản phẩm nào trong danh mục. Hãy quay lại sau.
                    </h5>
                </div>
            </template>
        </div>

        <div v-if="showSeeMore && canLoadMore" class="seemore-container">
            <p @click="loadMore" class="btn-seemore">Xem thêm</p>
        </div>
    </div>
</template>

<script>
import { useProductStore } from "@/stores/products";
import { mapState } from "pinia";

export default {
    props: {
        product: Object,
        showSeeMore: {
            type: Boolean,
            default: true,
        },
        showSortType: {
            type: Boolean,
            default: true,
        },
        showTitle: {
            type: Boolean,
            default: true,
        },
    },

    computed: {
        ...mapState(useProductStore, ["list", "selectedSort", "selectedCategory", "loading", "lastFetchCount"]),

        list_products() {
            return this.list;
        },

        localSelectedSort: {
            get() {
                const store = useProductStore();
                return store.selectedSort;
            },
            set(val) {
                const store = useProductStore();
                store.setSort(val);
            },
        },

        canLoadMore() {
            return this.lastFetchCount > 0;
        },
    },

    methods: {
        goToDetail(id) {
            this.$router.push("/product-detail/" + id);
        },

        loadMore() {
            const store = useProductStore();
            store.loadMore();
        },

        addToCart(id) {
            // TODO add to session storage
        }
    },

    mounted() {
        const store = useProductStore();
        store.fetchProducts(true);
        if (this.$route.path !== "/product") {
            const store = useProductStore();
            if (!store.list.length) {
                store.fetchProducts(true);
            }
        }
    },

    watch: {
        "$route.query.category"(newCategory) {
            if (this.$route.path === "/product") {
                const store = useProductStore();
                store.setCategory(newCategory || null);
            }
        },
        "$route.query.category"(newCategory) {
            const store = useProductStore();
            store.setCategory(newCategory || null);
        },
        "$route.query.search_key"(newKey) {
            const store = useProductStore();
            store.setSearchKey(newKey || null);
        }
    },
};
</script>

<style scoped>
.product-section {
    position: relative;
    z-index: 1;
    overflow: visible;
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

.menu-row {
    border-bottom: 1px solid #eaeaea;
    background: #fff;
}

.col-md-2_4 {
    flex: 0 0 20%;
    max-width: 20%;
    position: relative;
}

@media (max-width: 991px) {
    .col-md-2_4 {
        flex: 0 0 33.3333%;
        max-width: 33.3333%;
    }
}

.product-card {
    position: relative;
    background: #fff;
    border: 1px solid #eee;
    border-radius: 8px;
    overflow: visible;
    transition: all 0.3s ease;
    z-index: 1;
    padding: 15px;
    text-align: center;
}

.product-card img {
    width: 100%;
    height: 160px;
    object-fit: contain;
    transition: all 0.3s ease;
}

.product-card .product-name {
    font-size: 15px;
    font-weight: 500;
    height: 35px;
    overflow: hidden;
    margin: 10px 0 6px;
}

.product-card .product-price {
    color: #333;
    font-weight: 700;
    margin-bottom: 12px;
}

.product-card .product-actions {
    position: absolute;
    bottom: -110px;
    /* ↓ thấp hơn 1 chút để không che giá */
    left: 0;
    width: 100%;
    background: #fff;
    padding: 16px 15px 18px;
    box-shadow: 0 18px 35px rgba(0, 0, 0, 0.15);
    border-radius: 0 0 8px 8px;

    opacity: 0;
    visibility: hidden;
    transform: translateY(10px);
    transition: all 0.3s ease;
}

/* nút */
.product-card .product-actions .btn {
    display: block;
    width: 100%;
    margin-bottom: 10px;
    border-radius: 4px;
    font-size: 14px;
    padding: 10px;
}

/* hover */
.product-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 14px 30px rgba(0, 0, 0, 0.25);
    z-index: 5;
}

.product-card:hover .product-actions {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

@media (prefers-color-scheme: dark) {

    html,
    body,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    span,
    a,
    li,
    label,
    input,
    select,
    button,
    small,
    .fw-bold,
    .fw-semibold,
    .text-dark,
    .text-muted,
    .nav-link,
    .dropdown-item,
    .footer a,
    .footer p {
        color: #111 !important;
    }

    .text-muted {
        color: #555 !important;
    }

    svg path {
        fill: #111 !important;
        stroke: #111 !important;
    }

    .btn-outline-dark {
        color: #111 !important;
        border-color: #111 !important;
    }

    .btn-outline-dark:hover {
        background-color: #111 !important;
        color: #fff !important;
    }

    .btn-primary {
        color: #fff !important;
    }

    .badge.bg-warning {
        color: #000 !important;
    }
}

.seemore-container {
    text-align: center;
    margin-top: 100px;
}

.btn-seemore {
    display: inline-block;
    color: var(--primary);
    border: 1px solid var(--primary);
    border-radius: 20px;
    padding: 6px 16px;
    font-size: 14px;
    transition: all 0.2s ease;
    cursor: pointer;
}

.btn-seemore:hover {
    font-weight: bolder;
}

.sort-container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.sort-container label {
    font-size: 14px;
    color: #555;
}

.sort-container select {
    border-radius: 6px;
    border: 1px solid #ddd;
    padding: 4px 8px;
    font-size: 14px;
    cursor: pointer;
}

.sort-container select:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 3px var(--primary);
}

/* Nút thêm vào giỏ */
.product-actions .btn-add-cart,
.btn-add-cart {
    background-color: #3449ca !important;
    color: #fff !important;
    border: none !important;
}

.product-actions .btn-add-cart i,
.btn-add-cart i {
    color: #fff !important;
}

/* Nút mua ngay */
.product-actions .btn-buy-now,
.btn-buy-now {
    border: 2px solid #3449ca !important;
    color: #3449ca !important;
    background: #fff !important;
}

/* Hover của nút mua ngay */
.product-actions .btn-buy-now:hover,
.btn-buy-now:hover {
    background-color: #e7e9fd !important;
    /* xanh nhạt */
    color: #3449ca !important;
}
</style>