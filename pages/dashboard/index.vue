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
            <div class="py-10 px-2 grid grid-cols-4 gap-4">
                <DashboardBox v-for="d in data" :icon="d.icon" :title="d.title" :number="d.number" :icon-bg="d.iconBg" />
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
            data: [
                { icon: "wpf:name", title: "Clientes", number: Math.floor(Math.random() * 100) },
                { icon: "wpf:collaborator", title: "Vendedores", number: Math.floor(Math.random() * 100) },
                { icon: "wpf:car-rental", title: "Autos", iconBg: "gray-200", number: Math.floor(Math.random() * 100) },
                { icon: "wpf:coins", title: "Ventas", iconBg: "gray-200", number: Math.floor(Math.random() * 1000000) },
                { icon: "wpf:connected", title: "Loggeados", number: Math.floor(Math.random() * 50) },
            ]
        };
    }
}
</script>