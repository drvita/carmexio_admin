<template>
    <button type="button" @click="$emit('onClick')"
        class="w-full text-gray-950 bg-gray-200 hover:bg-gray-200 ring-1 ring-inset ring-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-base px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
        <Icon name="material-symbols:cancel-outline" />
        <span v-if="large" class="ml-2">{{ $t(label) }}</span>
    </button>
</template>
<script>
export default {
    props: {
        label: {
            type: String,
            default: "Cancel"
        },
        large: {
            type: Boolean,
        }
    }
}
</script>