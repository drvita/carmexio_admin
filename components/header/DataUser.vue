<template>
    <div class="relative bg-gray-800 pb-8 pt-20">
        <div class="grid grid-cols-2 grid-rows-2 p-2 md:p-0 md:flex md:flex-row md:space-x-4 md:justify-center">
            <HeaderDataItem v-for="d in data" :name="d.key" :value="d.value" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: [],
        }
    },
    mounted() {
        const storage = useStorage();
        const user = storage.getUser();
        this.data = [
            { key: this.$t('Id'), value: user.id },
            { key: this.$t('Name'), value: user.name },
            { key: this.$t('Email'), value: user.email },
            { key: this.$t('Gender'), value: user.gender }
        ];
    }
}
</script>