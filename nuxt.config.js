const env = require('./env.js')

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  ssr: true,
  env,
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    { src: '~/plugins/axios.js' },
    { src: '~/plugins/vuex-persist.js', ssr: false },
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    ['nuxt-fontawesome', {
      component: 'fa', //customize component name
      imports: [
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['faLightbulb']
        },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['faGithub']
          },
          {
            set: '@fortawesome/free-regular-svg-icons',
            icons: ['faLightbulb']
          }
      ]
    }]
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/bulma',
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/toast'
  ],
  // Axios
  axios: {
    baseURL: env.baseURL
  },
  // Auth
  auth: {
    vuex: {
      namespace: 'nuxtauth'
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            url: '/auth/login',
            method: 'post',
            propertyName: 'data.access_token'
          },
          user: {
            url: '/me',
            method: 'get',
            propertyName: 'data'
          },
          logout: {
            url: '/auth/logout',
            method: 'get'
          }
        }
      },
      custom: {
        endpoints: {
          login: {
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            url: '/auth/social-login',
            method: 'post',
            propertyName: 'data.access_token'
          },
          user: {
            url: '/me',
            method: 'get',
            propertyName: 'data'
          },
          logout: {
            url: '/auth/logout',
            method: 'get'
          }
        }
      }
    },
    redirect: {
      login: '/login',
      logout: '/login',
      home: '/'
    }
  },
  // Toast
  toast: {
    position: 'top-right',
    duration: 3000,
    keepOnHover: true,
    theme: 'bubble'
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    transpile: ['@nuxtjs/auth']
  }
}
