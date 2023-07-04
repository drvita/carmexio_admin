<template>
  <div v-if="loading" class="absolute top-0 left-0 w-full h-screen z-50 bg-gray-700 flex items-center justify-center"
    :style="{ opacity: .50 }">
    <span class="text-2xl mr-4 text-white font-semibold">{{ $t("Loading") }} ...</span>
  </div>
  <NuxtPage />
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
