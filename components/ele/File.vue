<template>
    <CarImages :files="filesImg" />

    <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10" @dragover="dragover"
        @dragleave="dragleave" @drop="drop">
        <div class="text-center text-gray-600">
            <Icon name="wpf:image-file" size="4rem" />
            <div class="mt-4 flex text-sm leading-6">
                <label for="file-upload"
                    class="relative cursor-pointer rounded-md bg-white font-semibold text-primary-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-primary-600 focus-within:ring-offset-2 hover:text-primary-500">
                    <span>{{ $t('Upload a file') }}</span>
                    <input id="file-upload" multiple accept="image/*" type="file" @change="onChange" class="sr-only" />
                </label>
                <p class="pl-1">{{ $t('or drag and drop') }}</p>
            </div>
            <p class="text-xs leading-5">PNG, JPG, GIF {{ $t('up to') }} 10MB</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: Number,
            default: 0
        },
        defaultFiles: {
            type: Array,
            default: [],
        }
    },
    data() {
        return {
            isDragging: false,
            files: [],
            base64: [],
        };
    },
    methods: {
        handleSaveMedia() {
            if (!this.base64.length) return;

            const media = new mediaHlp();
            media.set(`cars/${this.id}/media`, this.base64).then(res => {
                console.log("[API] Car media exit upload");
                this.base64 = [];
                this.files = [];
                this.$emit("onUpload");
            });
        },
        processFile(file, data) {
            const base64 = [...this.base64];
            base64.push(data);
            this.base64 = base64;
            console.log("[IMG] Process to base64:", file.name);

        },
        onChange({ target }) {
            const media = new mediaHlp();
            for (let i = 0; i < target.files.length; i++) {
                media.convertImageToBase64(target.files[i], this.processFile);
            }

            this.files = [...this.files, ...target.files];
        },
        dragover(e) {
            e.preventDefault();
            console.log("[DEBUG] dragover");
            this.isDragging = true;
        },
        dragleave() {
            console.log("[DEBUG] dragleave");
            this.isDragging = false;
        },
        drop(e) {
            console.log("[DEBUG] drop");
            e.preventDefault();
            this.$refs.file.files = e.dataTransfer.files;
            this.onChange();
            this.isDragging = false;
        },
    },
    computed: {
        filesImg() {
            return [...this.defaultFiles, ...this.files];
        }
    },
    watch: {
        'base64.length': function () {
            if (this.base64.length === this.files.length) {
                this.handleSaveMedia();
            }
        },
    },
}
</script>