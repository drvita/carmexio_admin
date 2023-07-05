<template>
    <div class="relative flex items-start pt-4">
        <div class="flex h-6 items-center">
            <input :id="id" :name="name" type="checkbox" :checked="defaultValue" @change="handleChange"
                class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
        </div>
        <label :for="id" class="ml-2 text-sm text-gray-600">
            {{ $t(text) }}
        </label>
    </div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: "",
        },
        id: {
            type: String,
            default: "",
        },
        name: {
            type: String,
            default: "",
        },
        defaultValue: {
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