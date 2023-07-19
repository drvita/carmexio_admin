// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ssr: false,
  modules: ["@nuxtjs/i18n", "nuxt-icon","@vite-pwa/nuxt"],
  pwa: {
    manifest:{
      name: "Buscoauto.com.mx",
      short_name: "buscoauto",
      description: "Aplicacion para buscar automovil seminuevo o usado en la region"
    },
    workbox:{
      navigateFallback: "/",
    },
    devOptions: {
      enabled: true,
      type: "module",
    }
  },
  i18n: {
    lazy: true,
    langDir: "locales",
    strategy: "prefix_except_default",
    locales: [
      {
        code: "es-MX",
        iso: "es-MX",
        name: "Español",
        file: "es-MX.json",
      },
    ],
    defaultLocale: "es-MX",
  },
  runtimeConfig: {
    public: {
      API_URL:
        process.env.NUXT_ENV === "production"
          ? process.env.NUXT_API_PRODUCTION
          : process.env.NUXT_API_BASE,
      NAME_CORP: process.env.NUXT_APP_NAME ?? "buscoauto",
    },
  },
  app: {
    baseURL: process.env.NUXT_ENV === "production" ? "/carmexio_admin/" : "",
  }
});
