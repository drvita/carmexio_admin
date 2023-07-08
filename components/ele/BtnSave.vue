<template>
    <button @click="$emit('onClick')" :disabled="disabled"
        class=" w-full text-white bg-primary-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-base px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 disabled:bg-gray-300">
        <Icon name="material-symbols:save" />
        <span class="ml-2">{{ $t(label) }}</span>
    </button>
</template>
<script>
export default {
    props: {
        label: {
            type: String,
            default: "Save"
        },
        disabled: {
            type: Boolean,
        }
    }
}
</script>