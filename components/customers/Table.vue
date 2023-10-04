<template>
    <table class="min-w-full divide-y divide-gray-300">
        <thead>
            <tr class="bg-gray-100">
                <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                    {{ $t('Id') }}
                </th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">
                    {{ $t('Name') }}
                </th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">
                    {{ $t('Email') }}
                </th>
                <th scope="col" class="hidden md:table-cell px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">
                    {{ $t('Interesting') }}
                </th>
                <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span class="sr-only">{{ $t('Select') }}</span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-if="loading">
                <td colspan="5" class="bg-green-500">
                    <h4 class="text-center text-base text-white">{{ $t('Loading') }}...</h4>
                </td>
            </tr>
            <tr v-for="d in data" :key="d.id" :class="loading ? 'opacity-10' : ''" class="text-sm">
                <td class="border-t border-gray-200 py-4 text-center">
                    #{{ d.id }}
                </td>
                <td class="border-t border-gray-200">
                    <Icon name="wpf:name" />

                    {{ d.name ? d.name : "--" }}
                </td>
                <td class="border-t border-gray-200 text-sm text-gray-600">
                    <Icon name="wpf:message-outline" />

                    {{ d.email }}
                </td>
                <td class="hidden md:table-cell border-t border-gray-200">
                    {{ d.interesting?.title }}
                </td>
                <!-- <td class="hidden lg:table-cell border-t border-gray-200">
                    <Icon v-if="d.gender" :name="`mdi:gender-${d.gender}`" size="1.2rem" />

                    {{ $t(d.gender) }}
                </td> -->
                <td class="border-t border-gray-200 space-x-2">
                    <EleBtnEdit v-if="hasRoot" :id="d.id" @onClick="hanleEdit" />
                    <EleBtnDelete v-if="hasRoot" :id="d.id" @onClick="hanleDelete" />
                </td>
            </tr>
        </tbody>
    </table>

    <PaginateBar :meta="paginate" @clickPage="handleClickPage" @changePage="handleClickPage" />
</template>
  
<script>
export default {
    props:{
        hasRoot: {
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
        handleClickPage(page) {
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
            console.log("[DEBUG] Handle edit:", id);
        },
        hanleDelete(id) {
            const { toast_success, toast_question } = useToast();
            toast_question(this.$t('Are you sure do this action?'), this.$t('Yes'))
                .then((result) => {
                    if (result.isConfirmed) {
                        console.log("[DEBUG] Handle delete:", id);
                        toast_success(this.$t('Administrador eliminado: ' + id));
                        this.loading = true;
                        this.getUsers();
                    }
                });

        },
        async getUsers() {
            const users = new usersHlp();
            const { data, meta, links } = await users.get(null, { page: this.page }).catch(e => ({}));
            this.data = data ?? [];
            this.paginate = { ...meta ?? {}, links: { ...links ?? {} } };
            this.loading = false;
        }
    },
    watch: {
        page() {
            this.getUsers();
        }
    },
    mounted() {
        this.loading = true;
        this.getUsers();
    }
}
</script>