<template>
    <div class="relative bg-gray-800 pb-16 pt-16">
        <div class="flex flex-col flex-nowrap justify-center md:flex-row md:flex-wrap">
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