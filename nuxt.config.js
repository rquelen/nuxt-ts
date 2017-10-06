module.exports = {
  env: {
    /*
    ** This url differs from common usage, as baseUrl serves the front code (nuxt) and rolandGarrosSiteApiUrl serves the site content
    */
    rolandGarrosSiteApiUrl: process.env.API_URL || 'http://localhost:8080',
  },
  head: {
    title: 'nuxt-typescript-starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['axios', 'gsap', 'vuex-class', 'nuxt-class-component']
  },
  modules: ['~modules/typescript.ts']
}
