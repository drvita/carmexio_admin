<template>
    <NuxtLayout>
        <div class="px-4 sm:px-6 md:px-8">
            <div class="flex flex-col md:flex-row items-start">
                <div class="flex-auto flex w-full text-indigo-900">
                    <Icon name="wpf:car-rental" size="1.5rem" />
                    <h2 class="text-2xl font-semibold leading-6 ml-2">
                        {{ brand.name }} - {{ form.model }}
                    </h2>
                </div>
                <div class="flex space-x-2 justify-end w-full pt-2 md:pt-0">
                    <EleBtnBack large @onClick="handleClose" />
                </div>
            </div>
            <form class="md:-mx-4 mt-4 md:mt-10" @submit="handleSave">
                <div class="md:space-y-12">
                    <div class="grid grid-cols-1 gap-x-8 border-b border-gray-900/10 gap-y-10 pb-12 md:grid-cols-3">
                        <div>
                            <h2 class="text-base font-semibold leading-7 text-gray-900">{{ $t('Basic') }}</h2>
                        </div>

                        <div class="grid md:max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
                            <div class="sm:col-span-4">
                                <EleLabel label="Brand" to="brand" />
                                <EleSelect :data="dataBrand" id="brand" @onChange="handleFormChange" />
                                {{ load_brand ? $t('Loading') : null }}
                            </div>

                            <div class="sm:col-span-3">
                                <EleLabel label="Model" to="model" />
                                <EleInput id="model" :defaultText="form.model" :placeholder="placeholdModel"
                                    @onChange="handleFormChange" />
                            </div>
                            <div class="sm:col-span-3">
                                <EleLabel label="Year" to="year" />
                                <EleInput id="year" :defaultText="form.year" placeholder="2017"
                                    @onChange="handleFormChange" />
                            </div>

                            <div class="sm:col-span-3">
                                <EleLabel label="Version" to="version" optional />
                                <EleInput id="version" :defaultText="form.version" :placeholder="placeholdVersion"
                                    @onChange="handleFormChange" />
                            </div>
                            <div class="sm:col-span-3">
                                <EleLabel label="Price" to="price" />
                                <EleInputCurrency id="price" :defaultValue="form.price" :defaultCurrency="form.currency"
                                    @onChange="handleFormChange" @onChangeCurrency="handleFormChange" />
                            </div>

                            <div class="sm:col-span-3">
                                <EleLabel label="Status" to="status" />
                                <EleSelect :data="dataStatus" id="status" @onChange="handleFormChange" />
                            </div>
                            <div class="sm:col-span-3">
                                <EleCheckbox id="national" text="National" :defaultValue="form.national"
                                    @onChange="handleFormChange" />
                            </div>

                            <div class="sm:col-span-4">
                                <EleLabel label="Seller" to="seller_id" />
                                <EleSelect :data="dataSellers" id="seller_id" @onChange="handleFormChange" />
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
                        <div>
                            <h2 class="text-base font-semibold leading-7 text-gray-900">{{ $t('Engine') }}</h2>
                        </div>

                        <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
                            <div class="sm:col-span-3">
                                <EleLabel label="Transmition" to="transmition" />
                                <EleSelect :data="dataTransmition" id="transmition" @onChange="handleFormChange" />
                            </div>
                            <div class="sm:col-span-3">
                                <EleLabel label="Cylinders" to="cylinders" />
                                <EleInput id="cylinders" :defaultText="form.cylinders" placeholder="V4"
                                    @onChange="handleFormChange" />
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
                        <div>
                            <h2 class="text-base font-semibold leading-7 text-gray-900">{{ $t('Details') }}</h2>
                        </div>

                        <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
                            <div class="sm:col-span-3">
                                <EleLabel label="Color" to="color" optional />
                                <EleInput id="color" :defaultText="form.color" :placeholder="placeholdColor"
                                    @onChange="handleFormChange" />
                            </div>
                            <div class="sm:col-span-3">
                                <EleLabel label="Type" to="type" optional />
                                <EleInput id="type" :defaultText="form.type" :placeholder="placeholdType"
                                    @onChange="handleFormChange" />
                            </div>

                            <div class="sm:col-span-full">
                                <EleLabel label="Specifications" to="specifications" optional />
                                <EleTextarea id="specifications" :defaultText="form.specifications"
                                    @onChange="handleFormChange" />
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
                        <div>
                            <h2 class="text-base font-semibold leading-7 text-gray-900">{{ $t('Images') }}</h2>
                        </div>

                        <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
                            <div class="col-span-full">
                                <EleLabel label="Upload images" to="file-upload" optional />
                                <EleFile :url="`cars/${form.id}/media`" :defaultFiles="files" :carid="form.id"
                                    @onUpload="getCar()" />
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
                        <div>
                            <h2 class="text-base font-semibold leading-7 text-gray-900">{{ $t('Videos') }}</h2>
                        </div>

                        <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-6 md:content-start md:grid-cols-6 col-span-2">
                            <div class="md:col-span-5">
                                <div v-for="(v, i) in inputVideos" class="my-3 flex space-x-4">
                                    <div class="hidden md:block pt-6 text-gray-700 cursor-pointer" v-if="v.url"
                                        @click="handleRemoveVideo(v.id)">
                                        <Icon name="material-symbols:delete-sweep-outline" size="1.5rem" />
                                    </div>
                                    <div class="w-full">
                                        <EleLabel label="Url" :to="v.id" :optional="!i" />
                                        <EleInput :id="v.id" :defaultText="v.url"
                                            placeholder="https://www.youtube.com/watch?v=XXXXXXX"
                                            @onChange="handleFormChange" />
                                    </div>
                                </div>
                            </div>
                            <div class="hidden md:block md:col-span-1 flex justify-end pr-2 text-blue-700">
                                <Icon name="material-symbols:add-box" size="2rem" @click="handleAddVideo()" />
                            </div>
                        </div>

                    </div>
                </div>

                <div class="mt-6 px-2 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
                    <div class="hidden md:block md:col-span-2"></div>
                    <EleBtnCancel large label="Cerrar" @onClick="handleClose" />
                    <EleBtnSave />
                </div>
            </form>
        </div>

    </NuxtLayout>
</template>

<script>
definePageMeta({
    middleware: ["auth"],
});

export default {
    data() {
        return {
            form: {
                id: 0,
                brand: "",
                model: "",
                year: "",
                transmition: "",
                status: "",
                color: "",
                price: "",
                currency: "",
                specifications: "",
                version: "",
                cylinders: "",
                type: "",
                national: false,
                seller_id: 0,
            },
            sellers: [],
            inputVideos: [],
            brands: [],
            brand: {},
            files: [],
            createdBy: {},
            load_brand: false,
        }
    },
    methods: {
        handleRemoveVideo(id) {
            let videos = [...this.inputVideos];
            videos = videos.filter(v => v.id !== id);
            this.inputVideos = videos;
            if (!videos.length) {
                this.handleAddVideo();
            }
        },
        getDataVideo(url, id) {
            return {
                id: id ?? "video_" + Date.now(),
                url: url ?? "",
            };
        },
        handleAddVideo(url, id) {
            let videos = [...this.inputVideos];
            if (id) {
                videos = videos.filter(v => v.id !== id);
                videos.push(this.getDataVideo(url, id));
            } else {
                videos.push(this.getDataVideo(url));
            }

            this.inputVideos = videos;
        },
        handleSave(e) {
            e.preventDefault();
            if (!this.formValidation()) {
                console.error("[Cars] Form inValid");
                return;
            }

            const data = this.getModelData();
            const car = new carsHlp();
            const { toast_error, toast_success } = useToast();

            let videos = this.inputVideos.map(v => v.url);
            videos = videos.filter(v => v);
            const media = new mediaHlp();
            media.setVideo(`cars/${this.form.id}/videos`, videos).then(res => {
                console.log("[API] Car videos success upload");
            });

            car.update(this.form.id, data).then(({ data }) => {
                if (data) {
                    console.log("[Car] Car updated:", data.id);
                    toast_success(this.$t('Car updated'));
                    // this.$emit("saved", data.id);
                    this.handleClose();
                }
            }).catch(err => {
                console.error("[Car] error:", err?.message);
                toast_error(this.$t('Sorry, we have error in server, try again later'));
            });
        },
        getModelData() {
            const seller = parseInt(this.form.seller_id);
            return {
                brand_id: this.form.brand,
                model: this.form.model,
                year: this.form.year,
                transmition: this.form.transmition,
                status: this.form.status,
                color: this.form.color,
                price_base: this.form.price,
                currency: this.form.currency,
                specifications: this.form.specifications,
                version: this.form.version,
                cylinders: this.form.cylinders,
                type: this.form.type,
                national: this.form.national,
                seller_id: Number.isInteger(seller) && seller ? seller : null,
            }
        },
        formValidation() {
            const { toast_error } = useToast();
            const data = { ...this.form };

            if (!data.brand) {
                toast_error(this.$t('Please, select a brand'));
                return false;
            }
            if (!data.model) {
                toast_error(this.$t('Please, type model'));
                return false;
            }
            if (!data.year) {
                toast_error(this.$t('Please, type year'));
                return false;
            }
            if (!data.transmition) {
                toast_error(this.$t('Please, select a transmition'));
                return false;
            }
            if (!data.status) {
                toast_error(this.$t('Please, select a status'));
                return false;
            }
            if (!data.price) {
                toast_error(this.$t('Please, type price'));
                return false
            }

            return true;
        },
        handleFormChange({ target }, key) {
            if (key === "national") {
                this.form.national = target.checked;
                return;
            } else if (/^video_.*/i.test(key)) {
                this.handleAddVideo(target.value, key);
                return;
            }

            this.form[key] = target.value;
        },
        handleClose() {
            return navigateTo('/dashboard/cars');
        },
        getCar() {
            if (!this.form.id) {
                return;
            }

            const cars = new carsHlp();
            const { toast_error } = useToast();

            cars.get(this.form.id).then(({ data }) => {
                this.setDataModel(data);
                this.brand = data?.brand ?? {};
                this.createdBy = data?.admin ?? {};
                this.files = data.media;
            }).catch(err => {
                console.error("[Car] error:", err);
                toast_error(this.$t('Sorry, we have error in server, try again later'));
            });
        },
        setDataModel(model) {
            if (!model) return;
            const data = {
                ...this.form,
                id: model.id,
                brand: model.brand?.id ?? 0,
                model: model.model,
                year: model.year,
                transmition: model.transmition,
                status: model.status,
                price: model.price_base,
                currency: model.currency,
                specifications: model.specifications,
                color: model.color,
                version: model.version,
                cylinders: model.cylinders,
                type: model.type,
                national: Boolean(model.national),
                seller_id: model.seller?.id ?? 0,
            };
            this.form = data;

            if (model.videos && model.videos.length) {
                model.videos.forEach(v => {
                    this.handleAddVideo(v.url, `saved_${v.id}`);
                });
            } else {
                if (this.inputVideos.length) return;
                this.handleAddVideo();
            }
        },
        async getBrands() {
            const brands = new brandsHlp();
            const { data } = await brands.get(0, { perpage: 200 });
            this.brands = data ?? [];
            this.load_brand = false;
        },
        async getSellers(){
            const seller = new sellersHlp();
            const sellers = await seller.get(null, {perpage: 50});
            this.sellers = sellers?.data ?? [];
        },
    },
    computed: {
        placeholdType() {
            return this.$t('hatchback');
        },
        placeholdColor() {
            return this.$t('Color');
        },
        placeholdModel() {
            return this.$t('classic jetta');
        },
        placeholdVersion() {
            return this.$t('Version');
        },
        dataBrand() {
            const data = [...this.brands];
            data.map(d => {
                if (d.id === this.form.brand) {
                    d.selected = true;
                    return;
                }
                d.selected = false;
            });
            return data;
        },
        dataStatus() {
            const data = [
                { id: "for sale", name: this.$t('for sale') },
                { id: "apart", name: this.$t('apart') },
                { id: "saled", name: this.$t('saled') }
            ];
            data.map((d, i) => {
                if (d.id === this.form.status) {
                    data[i].selected = true;
                    return;
                }
                data[i].selected = false;
            });
            return data;
        },
        dataSellers() {
            const data = [...this.sellers];
            data.map(d => {
                if (d.id === this.form.seller_id) {
                    d.selected = true;
                    return;
                }
                d.selected = false;
            });
            return data;
        },
        dataTransmition() {
            const data = [
                { id: "automatic", name: this.$t('automatic') },
                { id: "standard", name: this.$t('standard') }
            ];
            data.map(d => {
                if (d.id === this.form.transmition) {
                    d.selected = true;
                    return;
                }
                d.selected = false;
            });
            return data;
        },
    },
    watch: {
        'form.id': function () {
            this.getCar();
        }
    },
    mounted() {
        const route = useRoute();
        this.form.id = route.params.id;
        this.load_brand = true;
        this.getBrands();
        this.getSellers();
    }
}
</script>