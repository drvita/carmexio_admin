<template>
    <button type="button" @click="handleClick" :disabled="disabled" :title="$t(label)" :alt="$t(label)"
        class="inline-flex items-center rounded-md px-2.5 py-1.5 text-sm text-blue-950 font-semibold bg-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:bg-gray-300">
        <Icon name="material-symbols:add" />
        <span v-if="large" class="ml-1">{{ $t(label) }}</span>
    </button>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            default: "Add",
        },
        id: {
            type: Number,
        },
        disabled: {
            type: Boolean,
        },
        large: {
            type: Boolean,
        }
    },
    methods: {
        handleClick() {
            this.$emit("onClick", this.id);
        }
    },
}
</script>