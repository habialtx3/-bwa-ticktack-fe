<script setup>
// TODO: Import necessary dependencies
// Hint: You'll need to import from vue, pinia, and your auth store

// TODO: Initialize auth store and get necessary refs
// Hint: Use useAuthStore() and storeToRefs()

// TODO: Create form ref with registration fields
// Hint: You'll need name, email, password
const form = ref({
    // Your form fields here
})

// TODO: Implement handleSubmit function
// Hint: This should call the register function from auth store
// and handle any errors
const handleSubmit = async () => {
    // Your code here
}

// TODO: Implement togglePassword function
// Hint: This should toggle password visibility
const togglePassword = () => {
    // Your code here
}

// TODO: Implement toggleConfirmPassword function
// Hint: This should toggle confirm password visibility
const toggleConfirmPassword = () => {
    // Your code here
}
</script>

<template>
    <form class="space-y-6" @submit.prevent="handleSubmit">
        <!-- Name -->
        <div>
            <label for="name" class="block text-sm font-medium text-gray-700">Nama Lengkap</label>
            <div class="mt-1 relative">
                <!-- TODO: Add v-model binding for name -->
                <input type="text" id="name" name="name" required
                    class="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="John Doe">
                <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <i data-feather="user" class="w-4 h-4 text-gray-400"></i>
                </div>
            </div>
        </div>

        <!-- Email -->
        <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <div class="mt-1 relative">
                <!-- TODO: Add v-model binding for email -->
                <input type="email" id="email" name="email" required
                    class="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="nama@perusahaan.com">
                <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <i data-feather="mail" class="w-4 h-4 text-gray-400"></i>
                </div>
            </div>
        </div>

        <!-- Password -->
        <div>
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <div class="mt-1 relative">
                <!-- TODO: Add v-model binding for password -->
                <input type="password" id="password" name="password" required
                    class="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="••••••••">
                <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <!-- TODO: Add click handler for password toggle -->
                    <button type="button" class="text-gray-400 hover:text-gray-600 focus:outline-none">
                        <i data-feather="eye" class="w-4 h-4" id="password-toggle"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- Submit Button -->
        <div>
            <!-- TODO: Add loading state to button -->
            <button type="submit"
                class="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Daftar
            </button>
        </div>
    </form>

    <!-- Divider -->
    <div class="mt-6">
        <div class="relative">
            <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-200"></div>
            </div>
            <div class="relative flex justify-center text-sm">
                <span class="px-2 bg-white text-gray-500">Atau</span>
            </div>
        </div>
    </div>

    <!-- Login Link -->
    <div class="mt-6 text-center">
        <p class="text-sm text-gray-600">
            Sudah punya akun?
            <RouterLink :to="{ name: 'login' }" class="font-medium text-blue-600 hover:text-blue-800">Masuk
                sekarang</RouterLink>
        </p>
    </div>
</template>