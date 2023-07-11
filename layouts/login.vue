<template>
    <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
            <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img class="h-8 mr-2 w-8 rounded-full" src="../assets/img/logo.png" alt="logo">
                {{ company_name }}
            </a>
            <slot />
        </div>
    </section>
</template>

<script>

export default {
    beforeCreate: function () {
        const html = document.getElementsByTagName('html');
        html[0].classList.add('min-h-screen');
        html[0].classList.add('dark');
        document.body.className = 'h-screen';
    },
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