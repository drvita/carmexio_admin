<template>
    <div class="drop-shadow-md rounded-lg">
        <div class="bg-gray-100 pt-6">
            <h4 class="text-center text-2xl font-semibold">
                <Icon name="wpf:statistics" color="blue" size="1.5rem" />

                {{ $t('Dashboard') }}
            </h4>
            <p class="text-center text-lg w-full">Administrador</p>
        </div>
        <div class="bg-gray-50 border-t pb-12 pt-4">
            <div class="flex flex-col space-y-4 pl-5">
                <MenuItem v-for="m in menuAvailables" :name="m.iconName" :text="m.text" :current="m.current"
                    @onClick="hanleClickMenu" />
            </div>

            <div class="mt-12 text-center px-6">
                <MenuBtnLogout />
            </div>
        </div>
    </div>
</template>

<script>
export default {
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
        menuAvailables(){
            return this.menus.filter(m => m.show);
        },
    },
    mounted() {
        const route = useRoute();
        const storage = useStorage();
        const hasRoot = storage.hasRole('root');
        const menus = [
            { iconName: "wpf:statistics", text: this.$t('Dashboard'), page: "/dashboard", current: false, show: true },
            { iconName: "wpf:administrator", text: this.$t('Admins'), page: "/dashboard/admins", current: false, show: hasRoot },
            { iconName: "wpf:collaborator", text: this.$t('Sellers'), page: "/dashboard/sellers", current: false, show: hasRoot },
            // { iconName: "wpf:name", text: this.$t('Customers'), page: "/dashboard/customers", current: false, show: true },
            { iconName: "wpf:car-rental", text: this.$t('Cars'), page: "/dashboard/cars", current: false, show: true },
        ];

        for (let i = 0; i < menus.length; i++) {
            if (menus[i].page === route.path) {
                menus[i].current = true;
            }
        }

        this.menus = menus;
    }
}
</script>