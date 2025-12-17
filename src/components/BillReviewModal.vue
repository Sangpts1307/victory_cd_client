<template>
    <div v-if="isVisible" class="modal-backdrop fade show"></div>

    <div v-if="isVisible" class="modal fade show d-block" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content border-0 shadow-lg" style="border-radius: 0;">
                <div class="modal-header border-0 pb-0">
                    <h5 class="modal-title fw-bold">Đánh giá đơn hàng</h5>
                    <button type="button" class="btn-close" @click="closeModal"></button>
                </div>
                <div class="modal-body pt-2">
                    <p class="text-muted small mb-4">
                        Vui lòng chia sẻ trải nghiệm của bạn về đơn hàng này.
                    </p>

                    <div class="mb-3">
                        <label class="form-label fw-bold small">Mức độ hài lòng <span
                                class="text-danger">*</span></label>
                        <div class="star-rating d-flex align-items-center">
                            <i v-for="star in 5" :key="star" class="bi"
                                :class="star <= form.score ? 'bi-star-fill text-warning' : 'bi-star text-secondary'"
                                @click="form.score = star"
                                style="font-size: 1.5rem; cursor: pointer; margin-right: 8px;"></i>
                            <span class="ms-2 fw-bold text-muted small">{{ ratingText }}</span>
                        </div>
                    </div>

                    <div class="mb-3">
                        <textarea v-model="form.comment" class="form-control" rows="4"
                            placeholder="Chất lượng sản phẩm..."></textarea>
                    </div>

                    <button @click="submitReview" class="btn w-100 py-2 text-white fw-bold"
                        style="background-color: #1a1a1a;" :disabled="isSubmitting">
                        {{ isSubmitting ? 'Đang gửi...' : 'Gửi Đánh Giá' }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { apiHelper } from '@/helpers/axios';

export default {
    name: 'BillReviewModal',
    // --- THÊM DÒNG NÀY ĐỂ SỬA LỖI WARNING ---
    emits: ['close'],
    // ----------------------------------------
    props: {
        isVisible: { type: Boolean, default: false },
        billId: { type: [Number, String], default: null }
    },
    data() {
        return {
            form: { score: 5, comment: '', name: '', email: '' },
            isSubmitting: false
        }
    },
    computed: {
        ratingText() {
            const levels = ['Rất tệ', 'Tệ', 'Bình thường', 'Hài lòng', 'Tuyệt vời'];
            return this.form.score > 0 ? levels[this.form.score - 1] : '';
        }
    },
    watch: {
        isVisible(val) {
            if (val) {
                this.form.score = 5;
                this.form.comment = '';
            }
        }
    },
    methods: {
        closeModal() {
            this.$emit('close');
        },
        async submitReview() {
            if (!this.form.comment) { alert('Vui lòng nhập nội dung!'); return; }
            this.isSubmitting = true;
            try {
                const token = sessionStorage.getItem('token');
                const res = await apiHelper.post('/send-feedback', {
                    bill_id: this.billId,
                    score: this.form.score,
                    comment: this.form.comment,
                }, { headers: { Authorization: `Bearer ${token}` } });

                if (res.status === 200) {
                    alert('Gửi đánh giá thành công!');
                    this.closeModal();
                }
            } catch (error) {
                console.error(error);
                alert('Lỗi khi gửi đánh giá.');
            } finally {
                this.isSubmitting = false;
            }
        }
    }
}
</script>

<style scoped>
.modal-backdrop {
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1040;
}

.modal {
    z-index: 1050;
}
</style>