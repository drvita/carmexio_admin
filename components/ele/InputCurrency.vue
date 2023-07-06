<template>
    <div class="relative mt-2">
        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span class="text-gray-500 sm:text-sm">$</span>
        </div>
        <input type="number" :id="id" :name="name" :value="defaultValue" @change="handleChange"
            class="block w-full rounded-md border-0 py-1.5 pl-7 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6 outline-none"
            :placeholder="placeholder" />
        <div class="absolute inset-y-0 right-0 flex items-center pr-3">
            <select class="bg-white text-gray-500" :value="defaultCurrency"
                @change="e => $emit('onChangeCurrency', e, 'currency')">
                <option>USD</option>
                <option>MXN</option>
            </select>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        placeholder: {
            type: String,
            default: "100000",
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
        defaultCurrency: {
            type: String,
            default: "USD",
        },
    },
    methods: {
        handleChange(e) {
            const id = this.name ? this.name : this.id;
            this.$emit('onChange', e, id);
        },
    },
}
</script>