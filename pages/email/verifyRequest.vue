<template>
    <NuxtLayout name="login">
        <div
            class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8 text-white flex flex-col">
                <span>{{ $t('Request email verification') }}</span>
                <button @click="handleClick" :disabled="loading"
                    class="w-full text-white bg-primary-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 disabled:opacity-30 disabled:bg-primary-900">
                    {{ loading ? $t('Sending') + '...' : $t('Send request') }}
                </button>
                <p v-if="loading" class="text-white text-sm text-right pr-2">{{ $t('Loading') }}...</p>
            </div>
        </div>
    </NuxtLayout>
</template>

<script>
export default {
    data() {
        return {
            loading: false,
        };
    },
    methods: {
        handleClick() {
            const { query } = useRoute();
            const { toast_error, toast_success } = useToast();

            if (!query || !query.email) {
                toast_error(this.$t('Server error'));
                return
            }

            const admin = new adminsHlp();
            this.loading = true;
            admin.verifyRequest(query.email)
                .then((res) => {
                    console.log("[Verify] Status: request email verify successfully", res);
                    toast_success(this.$t('Email verified'));
                    setTimeout(() => navigateTo("/"), 3500);
                })
                .catch(e => {
                    this.loading = false;
                    console.error("[Verify] Request email verify error:", e.message);
                    toast_error(this.$t(e.message));
                });
        }
    }
}
</script>