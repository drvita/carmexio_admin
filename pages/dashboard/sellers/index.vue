<template>
    <NuxtLayout>
        <div class="px-4 sm:px-6 lg:px-8">
            <div class="sm:flex sm:items-center">
                <div class="sm:flex-auto flex text-blue-900">
                    <Icon name="wpf:collaborator" size="1.5rem" />
                    <h2 class="text-2xl font-semibold leading-6 ml-2">
                        {{ $t('Sellers') }}
                    </h2>
                </div>
                <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                    <EleBtnAdd large @onClick="handleAdd" />
                </div>
            </div>
            <div class="-mx-4 mt-10 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg">
                <SellersTable />
            </div>
        </div>
    </NuxtLayout>
</template>

<script>
definePageMeta({
    middleware: ["auth"],
});

export default {
    methods: {
        handleAdd() {
            console.log("[DEBUG] handle Add");
        }
    },
}
</script>