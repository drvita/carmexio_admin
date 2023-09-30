<template>
    <nav class="absolute top-0 left-0 w-full z-10 bg-transparent opacity-80 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="/" class="flex items-center">
                <img src="../../assets/img/logo_w.png" class="h-8 mr-3 w-8 rounded-full" alt="Carmexio Logo" />
                <span class="self-center text-lg font-semibold whitespace-nowrap text-white">{{ company_name }}</span>
            </a>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            company_name: "",
        };
    },
    mounted() {
        const config = useRuntimeConfig();
        this.company_name = config.public.NAME_CORP;
    }
}
</script>