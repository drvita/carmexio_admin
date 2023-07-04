<template>
    <div class="text-white content-end m-1 md:m-2">
        <span class="font-semibold capitalize">{{ name }}:</span>
        <span class="ml-2 text-gray-300">{{ value }}</span>
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