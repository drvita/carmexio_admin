<template>
    <button @click="handleClick"
        class="w-full text-white bg-primary-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
        <Icon name="wpf:shutdown" color="white" size="1rem" />
        <span class="ml-2">{{ $t('Logout') }}</span>
    </button>
</template>

<script>
export default {
    methods: {
        handleClick() {
            const { toast_error, toast_question } = useToast();
            toast_question(this.$t('Are you sure do this action?'), this.$t('Yes')).then((result) => {
                if (result.isConfirmed) {
                    console.log("[Logout] Session cerrada");
                    const cx = new loginHlp();


                    cx.logout()
                        .then((res) => {
                            console.log("[Logout] logout complete:");
                            return navigateTo("/");
                        })
                        .catch((err) => {
                            console.error("[Logout] logout failer:", err);
                            toast_error(this.$t(err?.message ?? 'Server error'));
                            this.email = "";
                            this.password = "";
                        });
                }
            });
        },
    },
}
</script>