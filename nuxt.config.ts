// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  runtimeConfig: {
    public: {
      SUPABASE_KEY: process.env.NUXT_SUPABASE_SECRET,
    },
  },
});
