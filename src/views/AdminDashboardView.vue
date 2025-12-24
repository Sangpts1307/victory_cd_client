<template>

    <body class="bg-light">
        <div class="container-fluid">
            <div class="row">

                <AdminSidebarComponent />

                <div class="col-9 col-md-10 p-4">
                    <AdminHeaderComponent />
                    <hr>

                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <h3 class="fw-bold">Thống kê & Giám sát</h3>
                    </div>
                    <p class="text-muted">Thống kê và giám sát hệ thống</p>

                    <div class="row g-3 mt-1">
                        <div class="col-md-3">
                            <div class="p-3 bg-white shadow-sm rounded">
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <p class="text-muted mb-1">Tổng khách hàng</p>
                                        <h4 class="fw-bold mt-1">
                                            {{ statistics.count_customers }}
                                        </h4>
                                    </div>
                                    <div class="bg-primary px-3 py-2 rounded d-flex align-items-center">
                                        <i class="bi bi-people-fill text-white fs-3"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3">
                            <div class="p-3 bg-white shadow-sm rounded">
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <p class="text-muted mb-1">Tổng số sản phẩm</p>
                                        <h4 class="fw-bold">
                                            {{ statistics.count_products }}
                                        </h4>
                                    </div>
                                    <div class="bg-success px-3 py-2 rounded d-flex align-items-center">
                                        <i class="bi bi-box-seam text-white fs-3"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3">
                            <div class="p-3 bg-white shadow-sm rounded">
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <p class="text-muted mb-1">Số đơn trong tháng</p>
                                        <h4 class="fw-bold">
                                            {{ statistics.count_orders }}
                                        </h4>
                                    </div>
                                    <div class="bg-secondary px-3 py-2 rounded d-flex align-items-center">
                                        <i class="bi bi-file-post text-white fs-3"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3">
                            <div class="p-3 bg-white shadow-sm rounded">
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <p class="text-muted mb-1">Vi phạm chưa xử lý</p>
                                        <h4 class="fw-bold">0</h4>
                                    </div>
                                    <div class="bg-danger px-3 py-2 rounded d-flex align-items-center">
                                        <i class="bi bi-exclamation-triangle text-white fs-3"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row g-3 mt-4">
                        <div class="col-md-8">
                            <div class="p-4 bg-white shadow-sm rounded">
                                <h6 class="fw-bold mb-3">Biểu đồ doanh thu 12 tháng gần nhất</h6>
                                <div style="height: 300px;">
                                    <canvas id="revenueChart"></canvas>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="p-4 bg-white shadow-sm rounded">
                                <h6 class="fw-bold mb-3">Tỉ lệ đặt đơn</h6>
                                <p class="text-muted">Chưa triển khai</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </body>
</template>

<script>
import axios from 'axios'
import AdminSidebarComponent from '@/components/AdminSidebarComponent.vue'
import AdminHeaderComponent from '@/components/AdminHeaderComponent.vue'
import { apiHelper } from "@/helpers/axios";
import Chart from 'chart.js/auto'; // chạy lệnh npm install chart.js trước khi sử dụng

export default {
    name: 'AdminDashboardView',

    components: {
        AdminSidebarComponent,
        AdminHeaderComponent,
    },

    data() {
        return {
            statistics: {
                count_customers: 0,
                count_products: 0,
                count_orders: 0,
            },
            revenueByYear: [],
            chartInstance: null,
        }
    },

    created() {
        this.fetchStatistics()
        this.fetchRevenueByYear()
        this.fetchMonthlyRevenue();
    },

    methods: {
        async fetchStatistics() {
            try {
                const res = await apiHelper.get(
                    '/get-statistics',
                    {
                        headers: {
                            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
                        },
                    }
                )

                if (res.status === 200 && res.data.success) {
                    this.statistics = res.data.data
                }
            } catch (err) {
                console.error('fetchStatistics error:', err)
            }
        },

        async fetchRevenueByYear() {
            try {
                const res = await apiHelper.get(
                    '/get-revenue-by-year',
                    {
                        headers: {
                            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
                        },
                    }
                )

                if (res.status === 200 && res.data.success) {
                    this.revenueByYear = res.data.data
                }
            } catch (err) {
                console.error('fetchRevenueByYear error:', err)
            }
        },

        async fetchMonthlyRevenue() {
            try {
                const res = await apiHelper.get('/get-monthly-revenue', {
                    headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` }
                });

                if (res.status === 200 && res.data.success) {
                    const data = res.data.data;
                    this.renderChart(data);
                }
            } catch (err) {
                console.error('Lỗi lấy doanh thu tháng:', err);
            }
        },

        renderChart(data) {
            const ctx = document.getElementById('revenueChart').getContext('2d');

            // Nếu đã có biểu đồ trước đó thì hủy để vẽ mới
            if (this.chartInstance) {
                this.chartInstance.destroy();
            }

            this.chartInstance = new Chart(ctx, {
                type: 'bar', // Biểu đồ cột
                data: {
                    labels: data.map(item => item.label), // Trục X: Tháng/Năm
                    datasets: [{
                        label: 'Doanh thu (VND)',
                        data: data.map(item => item.total), // Trục Y: Tiền
                        backgroundColor: '#0d6efd',
                        borderColor: '#0d6efd',
                        borderWidth: 1,
                        borderRadius: 5
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                callback: (value) => this.formatMoney(value)
                            }
                        }
                    },
                    plugins: {
                        legend: { display: false }
                    }
                }
            });
        },

        formatMoney(value) {
            return Number(value || 0).toLocaleString('vi-VN') + ' ₫'
        },
    },
}
</script>