<template>
    <button @click="handleClick" :disabled="disabled"
        class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-700 ring-1 ring-inset ring-gray-700 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:bg-gray-200 disabled:text-gray-400 disabled:ring-gray-200">
        <span class="sr-only">{{ $t('Next') }}</span>
        <Icon name="wpf:fast-forward" />
    </button>
</template>
<script>
export default {
    props: {
        disabled: {
            type: Boolean,
        }
    },
    methods: {
        handleClick() {
            return this.$emit("onClick", "next");
        }
    }
}
</script>