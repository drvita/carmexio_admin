<template>
  <VitePwaManifest />
  <suspense>
    <template #default>
      <NuxtPage />
    </template>
    <template #fallback>
      <div class="absolute top-0 left-0 w-full h-screen z-50 bg-gray-900 flex items-center justify-center">
        <span class="text-2xl mr-4 font-semibold text-white">{{ $t("Loading") }} ...</span>
      </div>
    </template>
  </suspense>
</template>

<script setup lang="ts">
const nuxtApp = useNuxtApp();
const loading = ref(false);
nuxtApp.hook("page:start", () => {
  console.log("[APP] Page start");
  loading.value = true;
});
nuxtApp.hook("page:finish", () => {
  console.log("[APP] Page finish");
  loading.value = false;
});
</script>
