<template>
    <input :type="type" :id="id" :name="name" :value="defaultText" :disabled="disabled" @change="handleChange"
        class="pl-2 block w-full border-0 p-0 text-gray-900 placeholder:text-gray-300 sm:text-sm sm:leading-6 outline-none ring-0 focus:border-b-2 focus:border-gray-600 disabled:bg-white disabled:text-gray-500"
        :placeholder="placeholder" />
</template>

<script>
export default {
    props: {
        placeholder: {
            type: String,
            default: "",
        },
        type: {
            type: String,
            default: "text",
        },
        id: {
            type: String,
            default: "",
        },
        name: {
            type: String,
            default: "",
        },
        defaultText: {
            type: String,
            default: "",
        },
        disabled: {
            type: Boolean,
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