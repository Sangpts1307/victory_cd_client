// src/stores/products.js
import { defineStore } from 'pinia'
import { apiHelper } from '@/helpers/axios'

export const useProductStore = defineStore('products', {
    state: () => ({
        list: [],
        offset: 0,
        selectedSort: 'default',
        selectedCategory: null,
        loading: false,
        lastFetchCount: 0,
    }),

    actions: {
        async fetchProducts(reset = false) {
            if (this.loading) return
            try {
                this.loading = true

                if (reset) {
                    this.offset = 0
                    this.list = []
                }

                const params = {
                    offset: this.offset,
                    sort_type: this.selectedSort,
                    category_id: this.selectedCategory,
                }

                const res = await apiHelper.get('/list-product', { params })

                if (res.status === 200) {
                    const data = res.data.data.list_products || []
                    this.lastFetchCount = data.length
                    this.list.push(...data)
                    this.offset += data.length
                }
            } catch (err) {
                console.error('[store] fetchProducts error:', err)
            } finally {
                this.loading = false
            }
        },

        async setSort(sortValue) {
            if (this.selectedSort === sortValue) return
            this.selectedSort = sortValue
            await this.fetchProducts(true)
        },

        async setCategory(categoryId) {
            const cat = categoryId === undefined ? null : categoryId
            if (String(this.selectedCategory) === String(cat)) {
            }
            this.selectedCategory = cat
            await this.fetchProducts(true)
        },

        async loadMore() {
            await this.fetchProducts(false)
        },

        resetAll() {
            this.list = []
            this.offset = 0
            this.selectedSort = 'default'
            this.selectedCategory = null
            this.loading = false
            this.lastFetchCount = 0
        },
    },
})
