<template>
    <NuxtLayout>
        <div class="px-4 sm:px-6 lg:px-8">
            <div class="sm:flex sm:items-center">
                <div class="sm:flex-auto flex text-blue-950">
                    <Icon name="wpf:administrator" size="1.5rem" />
                    <h2 class="text-2xl font-semibold leading-6 ml-2">
                        {{ $t('Admins') }}
                    </h2>
                </div>
                <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                    <EleBtnAdd large @onClick="handleAdd" />
                </div>
            </div>
            <div class="-mx-4 mt-10 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg">
                <AdminsTable />
            </div>
            <!-- <p v-for="n in 20" class="my-12">Paginas</p> -->
        </div>
    </NuxtLayout>
</template>

<script>
definePageMeta({
    middleware: ["auth"],
});

export default {
    methods: {
        handleAdd(id) {
            console.log("[DEBUG] handle Add", id);
        }
    },
}
</script>