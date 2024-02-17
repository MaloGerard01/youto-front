import { defineStore } from 'pinia';
import { SHA256 } from 'crypto-js';


interface UserPayloadInterface {
    username: string;
    password: string;
}

export const useAuthStore = defineStore('auth', {
    state: () => ({
        error: false,
        authenticated: false,
        loading: false,
        userInfo: null,
    }),
    actions: {
        async authenticateUser({ username, password }: UserPayloadInterface) {
            // useFetch from nuxt 3

            const hashedPassword = SHA256(password).toString();
            
            console.log({
                username,
                password: hashedPassword,
            })

            const { data, pending, error }: any = await useFetch('http://localhost:3032/login', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: username,
                    password: hashedPassword,
                }),
            });

            this.loading = pending;

            if(error.value.statusCode == 401)
            {
                console.log("error " + error.value.statusCode)
                this.error = true
            }

            if (data.value && error.value.statusCode !== 401) {
                this.error = false
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