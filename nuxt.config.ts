// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: '2025-03-13',
    devtools: {enabled: false},
    modules: [
        '@nuxt/image',
        '@nuxt/scripts'
    ],
    css: ['~/assets/styles/index.css'],
    vite: {
        plugins: [
            tailwindcss(),
        ],
    },
    image: {
        cloudinary: {
            baseURL: ''
        }
    }
})