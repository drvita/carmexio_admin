<template>
    <NuxtLayout>
        <div class="px-4 sm:px-6 lg:px-8">
            <div class="sm:flex sm:items-center">
                <div class="sm:flex-auto flex text-indigo-950">
                    <Icon name="wpf:collaborator" size="1.5rem" />
                    <h2 class="text-2xl font-semibold leading-6 ml-2">
                        {{ $t('Customers') }}
                    </h2>
                </div>
                <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                    <EleBtnAdd v-if="hasRoot" large @onClick="handleAdd" />
                </div>
            </div>
            <div class="md:-mx-4 mt-4 md:mt-10 ring-1 ring-gray-300 rounded-lg">
                <CustomersTable :hasRoot="hasRoot" />
            </div>
        </div>
    </NuxtLayout>
</template>

<script>
definePageMeta({
    middleware: ["auth"],
});

export default {
    data(){
        return {
            hasRoot: false,
        };
    },
    methods: {
        handleAdd() {
            console.log("[DEBUG] handle Add");
        }
    },
    mounted(){
        const storage = useStorage();
        this.hasRoot = storage.hasRole('root');
    }
}
</script>