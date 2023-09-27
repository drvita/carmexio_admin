<template>
    <NuxtLayout>
        <div class="px-4 sm:px-6 lg:px-8">
            <div class="sm:flex sm:items-center">
                <div class="sm:flex-auto flex text-blue-950">
                    <Icon name="wpf:settings" size="1.5rem" />
                    <h2 class="text-2xl font-semibold leading-6 ml-2">
                        {{ $t('settings') }}
                    </h2>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 py-2 md:py-4">
                <SettingsProfile />
            </div>
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
        }
    },
}
</script>