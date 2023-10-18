<template>
    <NuxtLayout>
        <div class="px-4 sm:px-6 lg:px-8">
            <div class="sm:flex sm:items-center">
                <div class="sm:flex-auto flex text-blue-800">
                    <Icon name="wpf:statistics" size="1.5rem" />
                    <h2 class="text-2xl font-semibold leading-6 ml-2">
                        {{ $t('Dashboard') }}
                    </h2>
                </div>
            </div>
            <div :class="classBox" class="py-10 px-2 grid grid-cols-1 gap-1 md:gap-4">
                <DashboardBox v-for="d in box" :icon="d.icon" :title="d.title" :number="d.number" :icon-bg="d.iconBg"
                    @Click="handleClick(d)" />
            </div>
        </div>

    </NuxtLayout>
</template>

<script>
definePageMeta({
    middleware: ["auth"],
});
export default {
    data() {
        return {
            data: [],
        };
    },
    methods: {
        handleClick(d) {
            if (!d.url) return;
            navigateTo(d.url);
        },
        getData() {
            const dashboard = new dashboardHlp();
            const storage = useStorage();
            const hasRoot = storage.hasRole('root');

            dashboard.analytics().then((data) => {
                const boxs = [
                    { icon: "wpf:administrator", title: this.$t('Administrators'), number: data.admins_count, url: "/dashboard/admins", show: hasRoot },
                    { icon: "wpf:collaborator", title: this.$t('Sellers'), number: data.sellers_count, url: "/dashboard/sellers", show: true },
                    { icon: "wpf:name", title: this.$t('Customers'), number: data.customers_count, url: "/dashboard/customers", show: true },
                    { icon: "wpf:car-rental", title: this.$t('Cars'), iconBg: "gray-200", number: data.cars_count, url: "/dashboard/cars", show: true },
                    // { icon: "wpf:coins", title: "Ventas", iconBg: "gray-200", number: 0 },
                    // { icon: "wpf:connected", title: "Loggeados", number: 0 },
                ];
                this.data = boxs;
            });

        },
    },
    computed: {
        classBox() {
            let classBox;
            if (this.data?.length > 2) {
                classBox = {
                    'md:grid-cols-3': true,
                }
            } else {
                classBox = {
                    'md:grid-cols-2': true,
                }
            }

            return classBox;
        },
        box(){
            return this.data.filter(d => d.show);
        },
    },
    mounted() {
        this.getData();
    }
}
</script>