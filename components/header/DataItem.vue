<template>
    <div class="flex flex-col text-white m-1 md:m-2">
        <span class="font-semibold capitalize">{{ name }}:</span>
        <span class="ml-2 text-gray-300 text-sm">{{ value }}</span>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            default: ""
        },
        value: {
            type: String,
            default: ""
        },
    },
}
</script>