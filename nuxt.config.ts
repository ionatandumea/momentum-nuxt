// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from "@primevue/themes/aura";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  srcDir: "src/",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@primevue/nuxt-module",
    "@vueuse/nuxt",
    "@nuxt/eslint",
  ],
  primevue: {
    options: {
      theme: {
        preset: Aura,
      },
      ripple: true,
    },
    autoImport: true,
  },
  postcss: {
    plugins: {
      "postcss-import": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});