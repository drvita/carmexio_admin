<template>
    <input :type="type" :id="id" :name="name" :value="defaultText" @change="handleChange"
        class="pl-2 block w-full border-0 p-0 text-gray-900 placeholder:text-gray-300 focus:ring-0 sm:text-sm sm:leading-6"
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
    },
    methods: {
        handleChange(e) {
            const id = this.name ? this.name : this.id;
            this.$emit('onChange', e, id);
        }
    },
}
</script>