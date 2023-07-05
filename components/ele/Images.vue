<template>
    <div class="inline-grid gap-2 grid-cols-3" v-if="files.length">
        <div v-for="file in files" :key="file.name" class="">
            <img class="object-contain max-h-48 max-w-96 border" :src="src(file)" @click="handleWatch(file)" />
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
        },
        carid: {
            type: Number,
        }
    },
    methods: {
        handleWatch(file) {
            console.log("[DEBUG] Request modal:", file);
            if (!file?.url) return;
            const { image } = useToast();

            image(file.url, this.$t('Close')).then(({ isDismissed }) => {
                if (isDismissed) {
                    const media = new mediaHlp();
                    media.delete(`cars/${this.carid}/media/${file.id}`).then(() => {
                        console.log("[API] Car media success delete");
                        this.$emit("onDelete", file.id);
                    }).catch(e => console.error("[IMG] Delete image:", e.message));
                }
            });
        },
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