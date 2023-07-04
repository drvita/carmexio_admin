<template>
    <div class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
        <div class="flex flex-1 justify-between sm:hidden">
            <a href="#"
                class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">{{
                    $t('Previous') }}</a>
            <a href="#"
                class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">{{
                    $t('Next') }}</a>
        </div>
        <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
                <PaginateCounter :data="counter" />
            </div>
            <div v-if="meta.last_page > 1">
                <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                    <PaginateBtnPrevious @onClick="handleChangePage" :disabled="!meta.links.prev" />

                    <template v-for="n in meta.last_page">
                        <PaginateBtnPage v-if="handleShow(n)" :disabled="handleDisabled(n)" :num="n"
                            @onClick="handlePageClick" />
                    </template>

                    <PaginateBtnNext @onClick="handleChangePage" :disabled="!meta.links.next" />
                </nav>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        meta: {
            type: Object,
            default: {},
        }
    },
    methods: {
        handlePageClick(page) {
            this.$emit("clickPage", page);
        },
        handleChangePage(type) {
            this.$emit("changePage", type);
        },
        handleDisabled(n) {
            if (n === this.meta.current_page) {
                return true;
            }

            return false;
        },
        handleShow(n) {
            const space = 5;
            const min = this.meta.current_page - space;
            const max = this.meta.current_page + space;

            if (n >= min && n <= max) {
                return true;
            }
            return false;
        }
    },
    computed: {
        counter() {
            return {
                from: this.meta?.from,
                to: this.meta?.to,
                total: this.meta?.total,
            }
        },
    },
}
</script>