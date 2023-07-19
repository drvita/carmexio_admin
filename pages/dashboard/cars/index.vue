<template>
    <NuxtLayout>
        <div class="px-4 sm:px-6 md:px-8">
            <div class="flex flex-col md:flex-row items-start">
                <div class="flex-auto flex w-full text-indigo-900">
                    <Icon name="wpf:car-rental" size="1.5rem" />
                    <h2 class="text-2xl font-semibold leading-6 ml-2">
                        {{ $t('Cars') }}
                    </h2>
                </div>
                <div class="flex space-x-2 justify-end w-full pt-2 md:pt-0">
                    <EleBtnBack large @onClick="handleBack" class="block md:hidden" />
                    <EleBtnAdd large @onClick="handleAdd" />
                </div>
            </div>
            <div class="md:-mx-4 mt-4 md:mt-10 ring-1 ring-gray-300 rounded-lg">
                <CarTable :saved="saveCar" />
            </div>
        </div>
    </NuxtLayout>
    <CarForm v-if="showForm" @onClose="this.showForm = false" @saved="navigateTo('cars/' + $event)" />
</template>

<script>
definePageMeta({
    middleware: ["auth"],
});
export default {
    data() {
        return {
            showForm: false,
            saved: false,
        }
    },
    methods: {
        handleBack(){
            navigateTo('/dashboard');
        },
        handleAdd() {
            this.showForm = true;
        }
    },
    computed: {
        saveCar() {
            return !this.showForm && this.saved;
        }
    },
    watch: {
        showForm() {
            if (this.showForm) {
                this.saved = false;
            }
        }
    },
}
</script>