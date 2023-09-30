<template>
    <div class="h-screen w-full flex">
        <div class="w-full md:w-3/4 lg:w-8/12 drop-shadow-md p-0">
            <HeaderNavbar />
            <HeaderDataUser />

            <div class="pb-3 md:py-6 bg-white min-h-screen">
                <div class="md:hidden w-full h-12 p-2 mb-4 bg-gray-100 border-b-2 border-gray-800 flex space-x-2">
                    <MenuItem v-for="m in menus" :name="m.iconName" :text="m.text" :current="m.current" text-hidden @onClick="hanleClickMenu" />
                    <MenuBtnLogout text-hidden />
                </div>
                <slot />

            </div>

            <footer
                class="flex justify-center items-end space-x-2 text-xs md:text-sm text-gray-400 w-full bg-gray-900 h-14 md:h-18 statics bottom-0 pb-2 px-2">
                <span class="">{{ $t('All right reserved') }}</span>
                <span class="ml-2">{{ company }}</span>
                <span class="">@{{ year }}</span>
            </footer>
        </div>
        <div class="hidden md:block fixed right-0 w-1/4 p-0 pl-4 h-full">
            <MenuMain :menus="menus" />
        </div>
    </div>
</template>

<script>
export default {
    beforeCreate: function () {
        const html = document.getElementsByTagName('html');
        // html[0].classList.add('min-h-screen');
        html[0].classList.remove('dark');
        document.body.className = 'h-screen bg-gray-200';
    },
    data() {
        return {
            menus: []
        }
    },
    methods: {
        hanleClickMenu(id) {
            const item = this.menus.find(i => i.iconName === id);
            return navigateTo(item.page);
        }
    },
    computed: {
        year() {
            return "2023";
        },
        company() {
            return "IQISS Mexico";
        },
    },
    mounted() {
        const menu = useMenu();
        this.menus = menu.getMenu(this.$t);
    }
}
</script>