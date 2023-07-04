<template>
    <NuxtLayout name="login">
        {{ $t('Loading') }}
    </NuxtLayout>
</template>


<script>
definePageMeta({
    middleware: ["auth"],
})
export default {
    mounted() {
        setTimeout(() => {
            return navigateTo("/login");
        }, 3500)
    }
}
</script>