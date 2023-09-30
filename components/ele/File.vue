<template>
    <EleImages :files="filesImg" :carid="carid" @onDelete="$emit('onUpload')" />

    <div v-if="!loading" class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10" draggable
        @dragover="dragover" @dragleave="dragleave" @drop="drop">
        <div class="text-center text-gray-600">
            <Icon name="wpf:image-file" size="4rem" />
            <div class="mt-4 flex text-sm leading-6 justify-center">
                <label for="file-upload"
                    class="relative cursor-pointer rounded-md bg-white font-semibold text-primary-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-primary-600 focus-within:ring-offset-2 hover:text-primary-500 ">
                    <span class="text-center w-full block">{{ $t('Upload a file') }}</span>
                    <input id="file-upload" multiple accept="image/*" type="file" ref="file" @change="onChange"
                        class="sr-only" />
                </label>
                <p class="hidden md:block pl-1">{{ $t('or drag and drop') }}</p>
            </div>
            <p class="text-xs leading-5">PNG, JPG, GIF {{ $t('up to') }} 10MB</p>
        </div>
    </div>
    <div v-else class="text-center font-semibold text-lg text-blue-800 py-4">
        {{  $t('loading') }}
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
        },
        url: {
            type: String,
        },
        carid: {
            type: Number
        },
    },
    data() {
        return {
            isDragging: false,
            files: [],
            base64: [],
            loading: false,
        };
    },
    methods: {
        handleSaveMedia() {
            if (!this.base64.length || !this.url) return;

            const media = new mediaHlp();
            this.loading = true;
            media.set(this.url, this.base64).then(res => {
                console.log("[API] Car media success upload");
                this.base64 = [];
                this.files = [];
                this.$emit("onUpload");
                this.loading = false;
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
            this.isDragging = true;
        },
        dragleave() {
            this.isDragging = false;
        },
        drop(e) {
            e.preventDefault();
            this.$refs.file.files = e.dataTransfer.files;
            this.onChange({ target: this.$refs.file });
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