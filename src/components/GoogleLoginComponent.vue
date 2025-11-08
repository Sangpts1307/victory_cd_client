<template>
    <div class="social-login">
        <button class="btn-social" v-on:click="loginWithGoogle()">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" />
            <span>{{ title }} bằng Google</span>
        </button>
    </div>
</template>

<script>
import { apiHelper } from '@/helpers/axios';

export default {
    mounted() {
        const queryString = window.location.href.split('?')[1];
        const token = new URLSearchParams(queryString).get('code');
        if (token) {
            sessionStorage.setItem('token', token);
            this.$router.push('/home');
        }
    },

    props: ['title'],
    data() {
        return {
            user: "",
            clientState: "",
        }
    },

    methods: {
        generateClientState() {
            const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
            const size = 8;
            let randomString = "";

            for (let i = 0; i < size; i++) {
                const x = Math.floor(Math.random() * chars.length);
                randomString += chars[x];
            }
            this.clientState = randomString;
            sessionStorage.setItem('state', this.clientState);
        },

        loginWithGoogle() {
            this.generateClientState();
            apiHelper.get('/auth/google/redirect', {
                params: {
                    from: 'web',
                    state: this.clientState,
                }
            }).then((res) => {
                window.location.href = res.data.data;
            }).catch((error) => {
                console.log(error);
            });
        },
    }
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
