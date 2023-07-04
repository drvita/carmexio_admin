<template>
    <p class="text-sm text-gray-700">
        {{ $t('Showing') }}
        {{ ' ' }}
        <span class="font-medium">{{ data.from ?? 0 }}</span>
        {{ ' ' }}
        {{ $t('to') }}
        {{ ' ' }}
        <span class="font-medium">{{ data.to ?? 0 }}</span>
        {{ ' ' }}
        {{ $t('of') }}
        {{ ' ' }}
        <span class="font-medium">{{ data.total ?? 0 }}</span>
        {{ ' ' }}
        {{ $t('results') }}

    </p>
</template>
<script>
export default {
    props: {
        data: {
            type: Object,
            default: {},
        },
    },
}
</script>