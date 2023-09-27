<template>
    <div class="ring-1 ring-gray-300 p-2 rounded-lg ">
        <h2 class="font-semibold text-lg">{{ $t('profile') }}</h2>

        <div class="mt-4">
            <div class="grid grid-cols-1 gap-4">
                <div>
                    <EleLabel label="Name" to="name" :required="!form.name" />
                    <EleInput :defaultText="form.name" id="name" placeholder="Adolfo Perez" @onChange="handleFormChange" />
                </div>
                <div>
                    <EleLabel label="Gender" to="gender" :required="!form.gender" />
                    <EleSelect :data="dataGender" id="gender" @onChange="handleFormChange" />
                </div>
                <div>
                    <EleLabel label="Email" to="email" :required="!form.email" />
                    <EleInput :disabled="form.id" :defaultText="form.email" id="email" type="email"
                        placeholder="myemail@example.org" @onChange="handleFormChange" />
                </div>
                <div>
                    <EleLabel label="Whatsapp Phone" to="phone" :required="!form.phone" />
                    <EleInput :defaultText="form.phone" id="phone" @onChange="handleFormChange" />
                </div>
            </div>
        </div>

        <hr class="my-4" />
        <EleDivLoading v-if="loading" />
        <div class="grid grid-cols-2 gap-2 ">
            <EleBtnSave :disabled="btnDisabled" @onClick="handleBtnSave" />
        </div>
    </div>
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
                name: "",
                gender: "",
                email: "",
                phone: "",
                roles: [],
            },
            loading: false,
        }
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
            const dataSend = this.getModelData();

            this.loading = true;
            if (!this.form.id) {
                toast_error(this.$t('Sorry, we have error, try again later'));
                return;
            }

            admin.update(this.form.id, dataSend).then(({ data }) => {
                if (data) {
                    console.log("[Admin] Admin updated:", data.id);
                    toast_success(this.$t('Admin updated'));
                    this.$emit("saved", data.id);
                    
                    const storage = useStorage();
                    storage.updateDataSession(dataSend);
                }
                this.loading = false;
            }).catch(err => {
                console.error("[Admin] error put:", err?.message ?? err);
                toast_error(this.$t('Sorry, we have error in server, try again later'));
                this.handleClose();
            });
        },
        getModelData() {
            return {
                name: this.form.name,
                gender: this.form.gender,
                email: this.form.email,
                phones: [
                    { "number": this.form.phone, "type": "whatsapp" }
                ],
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
            if (data.phone.length != 10) {
                response.message = this.$t('Please, type phone number of 10 digist');
                return response;
            }

            response.status = true;
            return response;
        },
    },
    mounted() {
        const storage = useStorage();
        const user = storage.getUser();
        const phone = user.phones.find(p => p.type === "whatsapp");

        // const admin = new adminsHlp();
        console.log("[DEBUG] Profile:", user);
        this.form = {
            id: user.id,
            name: user.name,
            gender: user.gender,
            email: user.email,
            phone: phone.number,
            roles: user.roles
        }
    }
}
</script>