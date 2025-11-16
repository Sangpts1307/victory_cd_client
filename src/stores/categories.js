import { apiHelper } from '@/helpers/axios'
import { defineStore } from 'pinia'

export const useCategoriesStore = defineStore('categories', {
    state: () => ({
        listCategory: '',
    }),
    actions: {
        fetchListCategory() {
            apiHelper
                .get('/list-category')
                .then((res) => {
                    if (res.status == 200) {
                        this.listCategory = res.data.data.categories
                    }

                    console.log('Called')
                })
                .catch((err) => {
                    console.log(err)
                })
        },
    },
    persist: true,
})
