<template>
    <Modal :title="title" @onClose="handleClose">
        <EleGroup>
            <div class="grid grid-cols-2 gap-4">
                <div>
                    <EleLabel label="Name" to="name" />
                    <EleInput :defaultText="form.name" id="name" placeholder="Adolfo Perez" @onChange="handleFormChange" />
                </div>
                <div>
                    <EleLabel label="Gender" to="gender" />
                    <EleSelect :data="dataGender" id="gender" @onChange="handleFormChange" />
                </div>
            </div>
        </EleGroup>

        <EleGroup>
            <EleLabel label="Email" to="email" />
            <EleInput :disabled="form.id" :defaultText="form.email" id="email" type="email"
                placeholder="myemail@example.org" @onChange="handleFormChange" />
        </EleGroup>


        <hr class="my-4" />
        <div class="grid grid-cols-2 gap-2 ">
            <EleBtnCancel large @onClick="handleClose" />
            <EleBtnSave @onClick="handleBtnSave" />
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
            if (!this.formValidation()) {
                console.error("[Admins] Form inValid");
                return;
            }

            const admin = new adminsHlp();
            const data = this.getModelData();
            const { toast_error, toast_success } = useToast();

            if (this.form.id) {
                admin.update(this.form.id, data).then(({ data }) => {
                    if (data) {
                        console.log("[Admin] Admin updated:", data.id);
                        toast_success(this.$t('Admin updated'));
                        this.$emit("saved", data.id);
                        this.handleClose();
                    }
                }).catch(err => {
                    console.error("[Admin] error put:", err?.message ?? err);
                    toast_error(this.$t('Sorry, we have error in server, try again later'));
                });
                return;
            }

            admin.set(data).then(({ data }) => {
                if (data) {
                    console.log("[Admin] Admin saved:", data.id);
                    toast_success(this.$t('Admin saved'));
                    this.$emit("saved", data.id);
                    this.handleClose();
                }
            }).catch(err => {
                console.error("[Admin] error post:", err?.message ?? err);
                toast_error(this.$t('Sorry, we have error in server, try again later'));
            });
        },
        getModelData() {
            return {
                name: this.form.name,
                gender: this.form.gender,
                email: this.form.email,
            }
        },
        formValidation() {
            const { toast_error } = useToast();
            const data = { ...this.form };
            const rgEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

            if (data.name.length < 6) {
                toast_error(this.$t('Please, type name with least 6 characters'));
                return false;
            }
            if (!data.gender) {
                toast_error(this.$t('Please, select a gender'));
                return false;
            }
            if (!rgEmail.test(data.email)) {
                toast_error(this.$t('Please, type a email valid'));
                return false;
            }

            return true;
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
    },
    mounted() {
        this.setData()
    }
}
</script>