// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: '2025-03-13',
    devtools: {enabled: true},
    css: ['~/assets/scss/main.scss'],
    vite: {
        plugins: [tailwindcss()],
    },
    modules: [
        '@nuxt/eslint',
        '@nuxt/image',
        '@nuxt/scripts',
        '@nuxt/ui',
        '@nuxt/fonts'
    ]
})