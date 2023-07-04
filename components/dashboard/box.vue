<template>
    <div class="border drop-shadow-md rounded-lg p-2">
        <div class="h-16 px-2 py-3 flex">
            <div class="flex flex-col w-4/6">
                <span class="">{{ title }}</span>
                <span class="text-lg">{{ number }}</span>
            </div>
            <div v-if="icon" class="w-2/6">
                <span class="rounded-full border drop-shadow-md px-3 py-2 text-2xl" :class="classIcon">
                    <Icon :name="icon" />
                </span>
            </div>
        </div>
        <div v-if="footer" class="text-xs text-gray-400 py-2 px-3">{{ footer }}</div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: "title",
        },
        icon: {
            type: String,
            default: "wpf:coins"
        },
        number: {
            type: Number,
            default: 1,
        },
        iconBg: {
            type: String,
            default: "gray-800",
        },
        iconColor: {
            type: String,
            default: "white",
        },
        footer: {
            type: String,
        },
    },
    computed: {
        classIcon() {
            return {
                [`bg-${this.iconBg}`]: true,
                [`text-${this.iconColor}`]: this.iconBg !== "gray-800" ? false : true,
            };
        }
    }
}
</script>