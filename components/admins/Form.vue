<template>
    <Modal :title="title" @onClose="handleClose">
        <div :class="loading ? 'opacity-50' : ''">
            <EleGroup>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <EleLabel label="Name" to="name" :required="!form.name" />
                        <EleInput :defaultText="form.name" id="name" placeholder="Adolfo Perez"
                            @onChange="handleFormChange" />
                    </div>
                    <div>
                        <EleLabel label="Gender" to="gender" :required="!form.gender" />
                        <EleSelect :data="dataGender" id="gender" @onChange="handleFormChange" />
                    </div>
                </div>
            </EleGroup>

            <EleGroup>
                <EleLabel label="Email" to="email" :required="!form.email" />
                <EleInput :disabled="form.id" :defaultText="form.email" id="email" type="email"
                    placeholder="myemail@example.org" @onChange="handleFormChange" />
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
    props: {
        data: {
            type: Object,
        },
    },
    data() {
        return {
            form: {
                id: 0,
                name: "",
                gender: "",
                email: "",
            },
            loading: false,
        };
    },
    methods: {
        handleFormChange({ target }, key) {
            this.form[key] = target.value;
        },
        handleBtnSave() {
            const form = this.validate;
            const { toast_error, toast_success } = useToast();

            if (!form.status) {
                console.error("[Admins] Form inValid");
                toast_error(form.message);
                return;
            }

            const admin = new adminsHlp();
            const data = this.getModelData();

            this.loading = true;
            if (this.form.id) {
                admin.update(this.form.id, data).then(({ data }) => {
                    if (data) {
                        console.log("[Admin] Admin updated:", data.id);
                        toast_success(this.$t('Admin updated'));
                        this.$emit("saved", data.id);
                        this.handleClose();
                    }
                    this.loading = false;
                }).catch(err => {
                    console.error("[Admin] error put:", err?.message ?? err);
                    toast_error(this.$t('Sorry, we have error in server, try again later'));
                    this.loading = true;
                });
                return;
            }

            admin.set(data).then(({ data }) => {
                if (data) {
                    console.log("[Admin] Admin saved:", data.id);
                    toast_success(this.$t('Admin saved') + ". \n " + this.$t('The password is') + ": Password.01#");
                    this.$emit("saved", data.id);
                    this.handleClose();
                }
                this.loading = false;
            }).catch(err => {
                console.error("[Admin] error post:", err?.message ?? err);
                toast_error(this.$t('Sorry, we have error in server, try again later'));
                this.loading = false;
            });
        },
        getModelData() {
            return {
                name: this.form.name,
                gender: this.form.gender,
                email: this.form.email,
            }
        },
        handleClose() {
            this.$emit("onClose");
        },
        setData() {
            if (!this.data) return;

            this.form = {
                id: this.data.id,
                name: this.data.name,
                gender: this.data.gender,
                email: this.data.email,
            }
        },
    },
    computed: {
        dataGender() {
            const data = [
                { id: "female", name: this.$t('female') },
                { id: "male", name: this.$t('male') },
            ];
            data.map((d, i) => {
                if (d.id === this.form.gender) {
                    data[i].selected = true;
                    return;
                }
                data[i].selected = false;
            });
            return data;
        },
        title() {
            return this.form.id ? this.$t('Edit admin') : this.$t('New admin');
        },
        validate() {
            const data = { ...this.form };
            const rgEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            const response = {
                status: false,
                message: "",
            };

            if (data.name?.length < 6) {
                response.message = this.$t('Please, type name with least 6 characters');
                return response;
            }
            if (!data.gender) {
                response.message = this.$t('Please, select a gender');
                return response;
            }
            if (!rgEmail.test(data.email)) {
                response.message = this.$t('Please, type a email valid');
                return response;
            }

            response.status = true;
            return response;
        },
        btnDisabled() {
            return this.loading || !this.validate.status;
        },
    },
    mounted() {
        this.setData()
    }
}
</script>