<template>
    <div :class="classCurrent" class="content-end cursor-pointer text-base" @click="handleClick">
        <Icon :name="name" />
        <span class="ml-4 truncate">{{ text }}</span>
    </div>
</template>
<script>
export default {
    props: {
        id: {
            type: Number,
        },
        name: {
            type: String,
            default: "subway:admin",
        },
        text: {
            type: String,
            default: "Users",
        },
        current: {
            type: Boolean,
        }
    },
    computed: {
        classCurrent() {
            return this.current ? "text-blue-700 underline text-lg" : "text-blue-950";
        }
    },
    methods: {
        handleClick() {
            this.$emit("onClick", this.id ?? this.name);
        }
    }
}
</script>