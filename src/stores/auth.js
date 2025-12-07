// TODO: Import necessary dependencies
// Hint: You'll need pinia, axios, router, and cookies
import { axiosInstance } from "@/plugins/axios"
import router from "@/router"
import { defineStore } from "pinia"
import { handleError } from "@/helpers/errorHelper"
import Cookies from "js-cookie"

export const useAuthStore = defineStore("auth", {
    state: () => ({
        user: null,
        loading: null,
        error: null,
        success: null,
    }),

    getters: {
        // TODO: Implement token getter
        // Hint: Get token from cookies
        token: () => Cookies.get('token'),
        isAuthenticated: (state) => !!state.user,

        // TODO: Implement isAuthenticated getter
        // Hint: Check if user exists
    },

    actions: {
        async login(credentials) {
            // TODO: Implement login action
            // Steps:
            // 1. Set loading state 
            this.loading = true
            this.error = null
            // 2. Make API call to login endpoint
            try {
                const response = await axiosInstance.post('/login', credentials)
                const token = response.data.data.token

                Cookies.set('token', token)

                this.success = response.data.message
                if (response.data.data.user.role == "admin") {
                    router.push({ name: 'admin.dashboard' })
                } else {
                    router.push({ name: 'app.dashboard' })
                }
            } catch (error) {
                this.error = error.response?.data?.message
            } finally {
                this.loading = false
            }
            // 3. Store token in cookies
            // 4. Handle success/error
            // 5. Redirect user
        },

        async register(credentials) {
            // TODO: Implement register action
            // Steps:
            // 1. Set loading state
            this.loading = true
            // 2. Make API call to register endpoint
            try {
                const response = await axiosInstance.post('register',credentials)
                this.success = response.data.message
                const token = response.data.data.token

                Cookies.set('token',token)

                router.push({name : 'app.dashboard'})
            } catch (error) {
                this.error = handleError(error)
                
            } finally {
                this.loading = false
            }
            // 3. Store token in cookies
            // 4. Handle success/error
            // 5. Redirect user
        },

        async logout() {
            // TODO: Implement logout action
            // Steps:
            // 1. Set loading state
            this.loading = true
            // 2. Make API call to logout endpoint
            try {
                const response = await axiosInstance.post('/logout')
                Cookies.remove('token')
                this.user = null
                this.error = null
                router.push({name : 'login'})
            } catch (error) {
                this.error = handleError(error)
            } finally {
                this.loading = false
            }
            // 3. Remove token from cookies
            // 4. Clear user state
            // 5. Redirect to login
        },

        async checkAuth() {
            // TODO: Implement checkAuth action
            // Steps:
            // 1. Set loading state
            // 2. Make API call to get user data
            // 3. Update user state
            // 4. Handle unauthorized error
        }
    },
}) 