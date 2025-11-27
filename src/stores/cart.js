import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: JSON.parse(localStorage.getItem('cart') || '[]'),
    }),
    actions: {
        addToCart(product) {
            const existing = this.items.find((item) => item.id === product.id)
            if (existing) {
                existing.quantity += 1
            } else {
                this.items.push({
                    ...product,
                    quantity: 1,
                })
            }
            localStorage.setItem('cart', JSON.stringify(this.items))
        },
        removeFromCart(productId) {
            this.items = this.items.filter((item) => item.id !== productId)
            localStorage.setItem('cart', JSON.stringify(this.items))
        },
        clearCart() {
            this.items = []
            localStorage.removeItem('cart')
        },
    },
    getters: {
        totalItems: (state) => state.items.reduce((acc, item) => acc + item.quantity, 0),
        totalPrice: (state) =>
            state.items.reduce((acc, item) => acc + item.price * item.quantity, 0),
    },
})
