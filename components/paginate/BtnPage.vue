<template>
    <button @click="handleClick" :disabled="disabled"
        class="relative z-10 inline-flex items-center border border-gray-400 bg-gray-700 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-gray-200 disabled:text-gray-400 disabled:border-gray-200">
        {{ num }}
    </button>
</template>
<script>
export default {
    props: {
        num: {
            type: Number,
            default: 1,
        },
        disabled: {
            type: Boolean,
        }
    },
    methods: {
        handleClick() {
            return this.$emit("onClick", this.num);
        }
    },
}
</script>