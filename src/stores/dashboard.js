// TODO: Import necessary dependencies

import { handleError } from "@/helpers/errorHelper"
import { axiosInstance } from "@/plugins/axios"
import { defineStore } from "pinia"

// Hint: You'll need pinia, axios, and error helper


export const useDashboardStore = defineStore("dashboard", {
    state: () => ({
        statistic: null,
        loading: false,
        error: null,
        success: null,
        // TODO: Define your state properties
        // Hint: You'll need statistic, loading, error, and success states
    }),

    actions: {
        async fetchStatistics() {
            // TODO: Implement fetchStatistics action
            // Steps:
            // 1. Set loading state
            this.loading = true;

            // 2. Make API call to statistics endpoint
            try {
                const response = await axiosInstance.get('dashboard/statistics')
                this.statistic = response.data.data
            } catch (error) {
                this.error = handleError(error)
            } finally {
                this.loading = false
            }
            // 3. Update statistic state
            // 4. Handle error
            // 5. Reset loading state
        }
    }
})