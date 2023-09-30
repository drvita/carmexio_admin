<template>
    <div class="drop-shadow-md rounded-lg">
        <div class="bg-gray-100 pt-6">
            <h4 class="text-center text-2xl font-semibold">
                <Icon name="wpf:statistics" color="blue" size="1.5rem" />

                {{ $t('Dashboard') }}
            </h4>
            <p class="text-center text-lg w-full">Administrador</p>
        </div>
        <div class="bg-gray-50 border-t pb-12 pt-4">
            <div class="flex flex-col space-y-4 pl-5">
                <MenuItem v-for="m in menus" :name="m.iconName" :text="m.text" :current="m.current"
                    @onClick="hanleClickMenu" />
            </div>

            <div class="mt-12 text-center px-6">
                <MenuBtnLogout />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        menus: {
            type: Object,
            required: true,
        },
    },
    methods: {
        hanleClickMenu(id) {
            const item = this.menus.find(i => i.iconName === id);
            return navigateTo(item.page);
        }
    },
}
</script>