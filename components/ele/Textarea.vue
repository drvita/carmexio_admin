<template>
    <textarea :rows="rows" :name="name" :id="id" :value="defaultText" @change="handleChange"
        class="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6 outline-none" />
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            default: "",
        },
        rows: {
            type: Number,
            default: 4,
        },
        name: {
            type: String,
            default: "",
        },
        defaultText: {
            type: String,
            default: "",
        },
    },
    methods: {
        handleChange(e) {
            const id = this.name ? this.name : this.id;
            this.$emit('onChange', e, id);
        }
    },
}
</script>