<template>
    <div :class="classCurrent" class="p-2 content-around md:p-0 md:border-0 md:content-end cursor-pointer text-base" @click="handleClick">
        <Icon :name="name" />
        <span v-if="!textHidden" class="ml-4 truncate">{{ text }}</span>
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
        },
        textHidden: {
            type:Boolean,
        }
    },
    computed: {
        classCurrent() {
            return this.current ? "text-blue-700 underline text-lg border-b-4" : "text-blue-950 border-b-2";
        }
    },
    methods: {
        handleClick() {
            this.$emit("onClick", this.id ?? this.name);
        }
    }
}
</script>