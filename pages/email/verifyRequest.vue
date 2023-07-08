<template>
    <NuxtLayout name="login">
        <div
            class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8 text-white flex flex-col">
                <span>{{ $t('Request email verification') }}</span>
                <button @click="handleClick"
                    class="w-full text-white bg-primary-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                    {{ $t('Send request') }}
                </button>

            </div>

        </div>
    </NuxtLayout>
</template>

<script>
export default {
    methods: {
        handleClick() {
            const { query } = useRoute();
            const { toast_error, toast_success } = useToast();

            if (!query || !query.email) {
                toast_error(this.$t('Server error'));
                return
            }

            const admin = new adminsHlp();
            admin.verifyRequest(query.email)
                .then((res) => {
                    console.log("[Verify] Status: request email verify successfully", res);
                    toast_success(this.$t('Email verified'));
                    // setTimeout(() => navigateTo("/"), 2000);
                })
                .catch(e => {
                    console.error("[Verify] Request email verify error:", e.message);
                    toast_error(this.$t(e.message));
                });
        }
    }
}
</script>