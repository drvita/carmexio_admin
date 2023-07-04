<template>
    <div class="inline-grid gap-2 grid-cols-3" v-if="files.length">
        <div v-for="file in files" :key="file.name" class="">
            <img class="object-contain max-h-48 max-w-96 border" :src="src(file)" />
            <!-- <EleBtnCancel /> -->
        </div>
    </div>
</template>

<script>
export default {
    props: {
        files: {
            type: Array,
            default: [],
        }
    },
    methods: {
        src(file) {
            if (file.url) {
                return file.url;
            }

            return URL.createObjectURL(file);
        }
    },
    // mounted() {
    //     console.log("[DEBUG] Mounted images:", this.files);
    // }
}
</script>