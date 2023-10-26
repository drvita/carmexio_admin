<template>
    <table class="min-w-full divide-y divide-gray-300">
        <thead>
            <tr class="bg-gray-100">
                <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                    {{ $t('Brand') }}
                </th>
                <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">
                    {{ $t('Model') }}
                </th>
                <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">
                    {{ $t('Transmition') }}
                </th>
                <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">
                    {{ $t('Status') }}
                </th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    {{ $t('Price') }}
                </th>
                <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span class="sr-only">{{ $t('Select') }}</span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-if="loading">
                <td colspan="6" class="bg-green-500">
                    <h4 class="text-center text-base text-white">{{ $t('Loading') }}...</h4>
                </td>
            </tr>
            <tr v-for="d in data" :key="d.id">
                <td :class="clasStatus(d.status)" class="border-t border-gray-200 py-2 pl-2 uppercase">
                    {{ d.brand.name }}
                </td>
                <td class="hidden lg:table-cell border-t border-gray-200 lowercase">
                    {{ d.model }} / <span class="text-gray-500 text-sm">{{ d.year }}</span>
                </td>
                <td class="hidden lg:table-cell border-t border-gray-200 text-sm lowercase">
                    {{ $t(d.transmition) }}
                </td>
                <td :class="clasStatus(d.status)" class="hidden lg:table-cell border-t border-gray-200 text-sm capitalize">
                    {{ $t(d.status) }}
                </td>
                <td class="border-t border-gray-200">
                    $ {{ new Intl.NumberFormat().format(d.price_base) }} {{ d.currency }}
                </td>
                <td class="border-t border-gray-200 space-x-2">
                    <EleBtnEdit :id="d.id" @onClick="hanleEdit" />
                    <EleBtnDelete :id="d.id" @onClick="hanleDelete" />
                    <EleBtnPdf :id="d.uuid" @onClick="downloadPdf" />
                </td>
            </tr>
        </tbody>
    </table>
    <PaginateBar :meta="paginate" @clickPage="handleClickPage" @changePage="handleClickPage" />
</template>
  
<script>
export default {
    props: {
        saved: {
            type: Boolean,
        }
    },
    data() {
        return {
            data: [],
            paginate: {},
            loading: false,
            page: 1,
        }
    },
    methods: {
        downloadPdf(uuid) {
            console.log("[Car] Download PDF:", uuid);

            const car = new carsHlp();
            this.loading = true;
            car.pdf(uuid).then((data) => {
                const file = window.URL.createObjectURL(data);

                window.open(file, '_blank');
                this.loading = false;
            }).catch(err => {
                console.error("[Car] error:", err?.message);
                toast_error(this.$t('Sorry, we have error in server, try again later'));
                this.loading = false;
            });


        },
        handleClickPage(page) {
            console.log("[DEBUG] Cars navigate:", page);
            switch (page) {
                case "next":
                    this.page++;
                    break;

                case "prev":
                    this.page--;
                    break;

                default:
                    this.page = page;
            }
        },
        hanleEdit(id) {
            navigateTo("/dashboard/cars/" + id);
        },
        hanleDelete(id) {
            const { toast_success, toast_error, toast_question } = useToast();
            toast_question(this.$t('Are you sure do this action?'), this.$t('Yes'))
                .then((result) => {
                    if (result.isConfirmed) {
                        const car = new carsHlp();
                        this.loading = true;
                        car.delete(id).then(() => {
                            console.log("[Car] car deleted:", id);
                            toast_success(this.$t('Car deleted'));
                            this.getCars();
                        }).catch(err => {
                            console.error("[Car] error:", err?.message);
                            toast_error(this.$t('Sorry, we have error in server, try again later'));
                            this.loading = false;
                        });


                    }
                });

        },
        async getCars() {
            const cars = new carsHlp();
            const { getUser, hasRole } = useStorage();
            const user = getUser();
            const params = { page: this.page };
            if (!hasRole('root')) {
                params.admin_id = user.id;
            }
            const { data, meta, links } = await cars.get(0, params);
            this.data = data ?? [];
            this.paginate = { ...meta ?? {}, links: { ...links ?? {} } };
            this.loading = false;
            // console.log("[DEBUG] Handle delete:", this.data);
        },
        clasStatus(status) {
            switch (status) {
                case "for sale":
                    return {
                        "text-green-800": true,
                    };

                case "saled":
                    return {
                        "text-red-800": true,
                    };

                default:
                    return {
                        "text-gray-800": true,
                    };
            }
        }
    },
    watch: {
        page() {
            this.getCars();
        },
        saved() {
            if (this.saved) {
                this.getCars();
            }
        },
    },
    mounted() {
        this.loading = true;
        this.getCars();
    }
}
</script>