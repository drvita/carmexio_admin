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
                <AdminsTable :saved="saveAdmin" @onEdit="handleEdit" />
            </div>
        </div>
    </NuxtLayout>
    <AdminsForm v-if="showForm" :data="dataUser" @onClose="this.showForm = false" @saved="saved = $event" />
</template>

<script>
definePageMeta({
    middleware: ["auth","role-root"],
});

export default {
    data() {
        return {
            showForm: false,
            saved: false,
            dataUser: {},
        }
    },
    methods: {
        handleEdit(user) {
            this.dataUser = user;
            this.showForm = true;
        },
        handleAdd() {
            this.showForm = true;
        }
    },
    computed: {
        saveAdmin() {
            return !this.showForm && this.saved;
        }
    },
}
</script>