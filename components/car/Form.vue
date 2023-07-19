<template>
    <Modal :title="title" @onClose="handleClose">
        <div :class="loading ? 'opacity-50' : ''">
            <EleGroup>
                <EleLabel label="Brand" to="brand" />
                <EleSelect :data="dataBrand" id="brand" @onChange="handleFormChange" />
            </EleGroup>

            <EleGroup>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <EleLabel label="Model" to="model" />
                        <EleInput id="model" :placeholder="placeholdModel" @onChange="handleFormChange" />
                    </div>
                    <div>
                        <EleLabel label="Year" to="year" />
                        <EleInput id="year" placeholder="2017" @onChange="handleFormChange" />
                    </div>
                </div>
            </EleGroup>

            <EleGroup>
                <EleLabel label="Transmition" to="transmition" />
                <EleSelect :data="dataTransmition" id="transmition" @onChange="handleFormChange" />
            </EleGroup>

            <EleGroup>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <EleLabel label="Status" to="status" />
                        <EleSelect :data="dataStatus" id="status" @onChange="handleFormChange" />
                    </div>
                    <div>
                        <EleLabel label="Color" to="color" optional />
                        <EleInput id="color" :placeholder="placeholdColor" @onChange="handleFormChange" />
                    </div>
                </div>
            </EleGroup>

            <EleGroup>
                <EleLabel label="Price" to="price" />
                <EleInputCurrency id="price" @onChange="handleFormChange" @onChangeCurrency="handleFormChange" />
            </EleGroup>

            <EleGroup>
                <EleLabel label="Specifications" to="specifications" optional />
                <EleTextarea id="specifications" @onChange="handleFormChange" />
            </EleGroup>

            <hr class="my-4" />
            <EleDivLoading v-if="loading" />
            <div class="grid grid-cols-2 gap-2 ">
                <EleBtnCancel large @onClick="handleClose" />
                <EleBtnSave :disabled="btnDisabled" @onClick="handleBtnSave" />
            </div>
        </div>
    </Modal>
</template>

<script>
export default {
    data() {
        return {
            form: {
                id: 0,
                brand: "",
                model: "",
                year: "",
                transmition: "",
                status: "for sale",
                color: "",
                price: "",
                currency: "MXN",
                specifications: "",
            },
            data: [],
            loading: false,
        };
    },
    methods: {
        handleFormChange({ target }, key) {
            this.form[key] = target.value;
        },
        handleBtnSave() {
            const { toast_error, toast_success } = useToast();
            const form = this.validate;

            if (!form.status) {
                console.error("[Cars] Form inValid");
                toast_error(form.message);
                return;
            }

            const car = new carsHlp();
            const data = this.getModelData();

            this.loading = true;
            car.set(data).then(({ data }) => {
                if (data) {
                    console.log("[Car] Car saved:", data.id);
                    toast_success(this.$t('Car saved'));
                    this.$emit("saved", data.id);
                    this.handleClose();
                }
                this.loading = false;
            }).catch(err => {
                console.error("[Car] error:", err?.message);
                toast_error(this.$t('Sorry, we have error in server, try again later'));
                this.loading = false;
            });
        },
        getModelData() {
            const { getUser } = useStorage();
            return {
                brand_id: this.form.brand,
                model: this.form.model,
                year: this.form.year,
                transmition: this.form.transmition,
                status: this.form.status,
                color: this.form.color ?? "",
                price_base: this.form.price,
                currency: this.form.currency,
                specifications: this.form.specifications ?? "--",
                admin_id: getUser().id,
            }
        },
        handleClose() {
            this.$emit("onClose");
        },
        async getBrands() {
            const brands = new brandsHlp();
            const { data } = await brands.get(0, { perpage: 200 });
            this.data = data ?? [];
            // this.loading = false;
            // console.log("[DEBUG] get brands:", this.data);
        },
    },
    computed: {
        dataBrand() {
            const data = [...this.data];
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
        title() {
            return this.form.id ? this.$t("Edit car") : this.$t("New car");
        },
        placeholdColor() {
            return this.$t('white');
        },
        placeholdModel() {
            return this.$t('classic jetta');
        },
        validate() {
            const data = { ...this.form };
            const response = {
                status: false,
                message: "",
            };

            if (!data.brand) {
                response.message = this.$t('Please, select a brand');
                return response;
            }
            if (!data.model) {
                response.message = this.$t('Please, type model');
                return response;
            }
            if (!data.year) {
                response.message = this.$t('Please, type year');
                return response;
            }
            if (!data.transmition) {
                response.message = this.$t('Please, select a transmition');
                return response;
            }
            if (!data.status) {
                response.message = this.$t('Please, select a status');
                return response;
            }
            if (!data.price) {
                response.message = this.$t('Please, type price');
                return response;
            }

            response.status = true;
            return response;
        },
        btnDisabled() {
            return this.loading || !this.validate.status;
        }
    },
    mounted() {
        this.getBrands();
    }
}
</script>