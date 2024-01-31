// https://nuxt.com/docs/api/configuration/nuxt-config
import { apiPlugin } from '@storyblok/vue'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@unocss/nuxt',
    ['@storyblok/nuxt', { accessToken: process.env.STORYBLOK_API_TOKEN, use: [apiPlugin] }],
    '@nuxtjs/fontaine',
    // '@nuxtjs/critters',
    // '@nuxt/image-edge',
  ],
})

