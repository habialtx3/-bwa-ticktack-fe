// TODO: Import necessary dependencies

import { handleError } from "@/helpers/errorHelper"
import { axiosInstance } from "@/plugins/axios"
import router from "@/router"
import { defineStore } from "pinia"


// Hint: You'll need pinia, axios instance, error helper, and router


export const useTicketStore = defineStore("ticket", {
    state: () => ({
        // TODO: Define your state properties
        // Hint: You'll need tickets array, loading, error, and success states
        tickets: [],
        array: null,
        loading: false,
        error: null,
        success: null,
    }),

    actions: {
        async fetchTickets(params) {
            // TODO: Implement fetchTickets action
            // Steps:
            // 1. Set loading state
            this.loading = true

            // 2. Make API call to tickets endpoint with params
            try {
                const response = await axiosInstance.get('ticket', { params })
                this.tickets = response.data.data
            } catch (error) {
                this.error = handleError(error)
            } finally {
                this.loading = false
            }
            // 3. Update tickets state
            // 4. Handle error
            // 5. Reset loading state
        },

        async fetchTicket(code) {
            // TODO: Implement fetchTicket action
            // Steps:
            // 1. Set loading state
            this.loading = true
            // 2. Make API call to get ticket details
            try {
                const response = await axiosInstance.get(`ticket/${code}`)
                return response.data.data
            } catch (error) {
                this.error = handleError(error)
            } finally {
                this.loading = false
            }
            // 3. Return ticket data
            // 4. Handle error
            // 5. Reset loading state
        },

        async createTicket(payload) {
            // TODO: Implement createTicket action
            // Steps:
            // 1. Set loading state
            this.loading = true
            // 2. Make API call to create ticket
            try {
                const response = await axiosInstance.post('ticket', payload)

                const ticket = response.data.data
                router.push({ name: 'app.dashboard' })

            } catch (error) {
                this.error = handleError(error)
            } finally {
                this.loading = false
            }
            // 3. Set success message
            // 4. Redirect to dashboard
            // 5. Handle error
            // 6. Reset loading state
        },

        async createTicketReply(code, payload) {
            // TODO: Implement createTicketReply action
            // Steps:
            // 1. Set loading state
            this.loading = true
            // 2. Make API call to create reply
            try {
                const response = await axiosInstance.post(`ticket-reply/${code}`, payload)
                this.success = response.data.message

            } catch (error) {
                this.error = handleError(error)
            } finally {
                this.loading = false
            }
            // 3. Set success message
            // 4. Return reply data
            // 5. Handle error
            // 6. Reset loading state
        },
    }
})