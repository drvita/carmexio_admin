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
      description: "Aplicacion para buscar automovil seminuevo o usado en la region",
      icons: [
        {
          src: "statics/icons/Icon-32.png",
          sizes: "55x55",
          type: "image/png"
        },
        {
          src: "statics/icons/Icon-55.png",
          sizes: "55x55",
          type: "image/png"
        },
        {
          src: "statics/icons/Icon-80.png",
          sizes: "80x80",
          type: "image/png"
        },
        {
          src: "statics/icons/Icon-114.png",
          sizes: "114x114",
          type: "image/png"
        },
        {
          src: "statics/icons/Icon-144.png",
          sizes: "144x144",
          type: "image/png"
        },
        {
          src: "statics/icons/Icon-256.png",
          sizes: "256x256",
          type: "image/png"
        },
      ],
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
      API_URL: process.env.NUXT_API ?? "http://localhost:8010", // "https://api.buscoauto.com.mx",
      NAME_CORP: process.env.NUXT_APP_NAME ?? "buscoauto",
    },
  },
  // app: {
  //   baseURL: process.env.NUXT_ENV === "production" ? "/carmexio_admin/" : "",
  // }
});
