<template>
    <div class="flex justify-between">
        <label :for="to" class="block text-xs font-medium text-gray-600">{{ labelText }}</label>
        <span v-if="optional" class="text-sm leading-6 text-gray-500" id="email-optional">{{ $t('Optional') }}</span>
        <span v-if="required" class="text-xs leading-6 text-red-400" id="email-optional">{{ $t('Required') }}</span>
    </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            default: "",
        },
        optional: {
            type: Boolean,
        },
        to: {
            type: String,
            default: "",
        },
        required: {
            type: Boolean,
        }
    },
    computed: {
        labelText() {
            return this.$t(this.label);
        }
    }
}
</script>