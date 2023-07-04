<template>
    <div class="h-screen w-full flex">
        <div class="w-full md:w-3/4 lg:w-8/12 drop-shadow-md p-0">
            <HeaderNavbar />
            <HeaderDataUser />

            <div class="py-6 bg-white min-h-screen">
                <slot />
            </div>

            <footer
                class="flex justify-center items-end text-gray-400 w-full bg-gray-900 h-10 md:h-18 statics bottom-0 pb-1 md:pb-2">
                <span class="">{{ $t('All right reserved') }}</span>
                <span class="ml-2">{{ company }}</span>
                <span class="">@{{ year }}</span>
            </footer>
        </div>
        <div class="hidden md:block fixed right-0 w-1/4 p-0 pl-4 h-full">
            <MenuMain />
        </div>
    </div>
</template>

<script>
export default {
    beforeCreate: function () {
        const html = document.getElementsByTagName('html');
        html[0].classList.add('min-h-screen');
        // html[0].classList.add('dark'); bg-gray-200
        document.body.className = 'h-screen bg-gray-200';
    },
    computed: {
        year() {
            return "2023";
        },
        company() {
            return "IQISS Mexico";
        }
    },
}
</script>