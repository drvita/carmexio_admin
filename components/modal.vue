<template>
    <div
        class="fixed top-0 left-0 insert-0 bg-gray-600 bg-opacity-50 overflow-hidden overflow-y-auto h-full w-full z-50 flex items-center">
        <div class="w-50 mx-auto bg-white border rounded-lg p-2" :style="{ minWidth: 50 + '%' }">
            <div class="flex justify-between text-gray-600 border-b p-2">
                <span class="text-lg font-semibold">{{ title }}</span>
                <span class="text-sm cursor-pointer" @click="$emit('onClose')">X</span>
            </div>
            <div class="p-2 pt-6">
                <slot />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            default: "Modal"
        }
    },
    mounted() {
        let scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;
        let scrollLeft =
            window.pageXOffset || document.documentElement.scrollLeft;

        window.onscroll = function () {
            window.scrollTo(scrollLeft, scrollTop);
        };
    },
    unmounted() {
        window.onscroll = function () { };
    }
}
</script>