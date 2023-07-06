<template>
    <select :id="id" @change="handleSelect" :name="name"
        class="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-gray-600 sm:text-sm sm:leading-6 capitalize outline-none bg-white">
        <option value="">-- {{ $t('Select one') }} --</option>
        <option v-for="b in data" :selected="b.selected" :value="b.id ?? b.name">{{ b.name }}</option>
    </select>
</template>
<script>
export default {
    props: {
        data: {
            type: Array,
            default: [],
        },
        id: {
            type: String,
            default: "",
        },
        name: {
            type: String,
            default: "",
        },
    },
    methods: {
        handleSelect(e) {
            const id = this.name ? this.name : this.id;
            this.$emit('onChange', e, id);
        }
    },
}
</script>