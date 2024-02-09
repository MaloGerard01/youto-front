import { defineStore } from 'pinia';
import { SHA256 } from 'crypto-js';


interface UserPayloadInterface {
    username: string;
    password: string;
}

export const useAuthStore = defineStore('auth', {
    state: () => ({
        authenticated: false,
        loading: false,
        userInfo: null,
    }),
    actions: {
        async authenticateUser({ username, password }: UserPayloadInterface) {
            // useFetch from nuxt 3

            const hashedPassword = SHA256(password).toString();

            const { data, pending }: any = await useFetch('http://localhost:3032/login', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: {
                    username,
                    password: hashedPassword,
                },
            });
            this.loading = pending;

            if (data.value) {
                console.log(data.value)
                this.userInfo = data.value;
                const token = useCookie('token'); // useCookie new hook in nuxt 3
                token.value = data?.value?.token; // set token to cookie
                this.authenticated = true; // set authenticated  state value to true
            }
        },
        logUserOut() {
            const token = useCookie('token'); // useCookie new hook in nuxt 3
            this.userInfo = null;
            this.authenticated = false; // set authenticated  state value to false
            token.value = null; // clear the token cookie
        },
    },
});