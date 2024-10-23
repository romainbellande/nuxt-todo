// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  prisma: {
    autoSetupPrisma: true
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    "@prisma/nuxt",
    'nuxt-lucide-icons',
    '@sidebase/nuxt-auth',
    '@vee-validate/nuxt'
  ],
  auth: {
    baseURL: '/api/auth',
    globalAppMiddleware: true,
    sessionRefresh: {
      enablePeriodically: true,
      enableOnWindowFocus: true,
    },
    provider: {
      type: 'local',
      session: {
        dataType: {
          id: 'string',
          firstName: 'string',
          lastName: 'string',
        },
      },
      endpoints: {
        signIn: { path: '/login', method: 'post' },
        signOut: { path: '/logout', method: 'post' },
        getSession: { path: '/session', method: 'get' },
      }
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
})