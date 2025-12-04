// TODO: Import necessary dependencies
// Hint: You'll need pinia, axios, and error helper

export const useDashboardStore = defineStore("dashboard", {
    state: () => ({
        // TODO: Define your state properties
        // Hint: You'll need statistic, loading, error, and success states
    }),

    actions: {
        async fetchStatistics() {
            // TODO: Implement fetchStatistics action
            // Steps:
            // 1. Set loading state
            // 2. Make API call to statistics endpoint
            // 3. Update statistic state
            // 4. Handle error
            // 5. Reset loading state
        }
    }
})