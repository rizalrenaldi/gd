export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Gerard Daniels',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      // Twitter
      // Test on: https://cards-dev.twitter.com/validator
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@' },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://www.gerard-daniels.com/'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Gerard Daniels'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'The Blog of Rizal Renaldi'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: '/gd.png'
      },

      // Open Graph
      // Test on: https://developers.facebook.com/tools/debug/
      { hid: 'og:site_name', property: 'og:site_name', content: 'website' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://www.gerard-daniels.com/'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Gerard Daniels'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Gerard Daniels'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/gd.png'
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: '/gd.png'
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'Gerard Daniels'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        hid: 'canonical',
        rel: 'canonical',
        href: `https://www.gerard-daniels.com/`
      }
    ],
    script: [
      // {
      //   type: 'text/javascript',
      //   src: 'js/chatra.js',
      //   body: true
      // }
    ]
  },

  

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-tiny-slider.js', mode: 'client' },
    // { src: '~/plugins/aos.js', mode: 'client' },
    // { src: '~/plugins/gtag'},
    // { src: '~/plugins/v-tooltip.js', mode: 'client' },
    // { src: '~~/node_modules/vue-rellax/lib/nuxt-plugin', ssr: false },
    // { src: '~/plugins/vue-rellax.js', ssr: false },
    // { src: '~/plugins/scrollama.client.js', mode: 'client' },
    // { src: '~/plugins/vue-plyr', mode: 'client' },
    // { src: '~/plugins/vue-image-compare', mode: 'client', ssr: false },
    // { src: '~/plugins/v-dropdown', ssr: false },
    // { src: '~/plugins/vue-select', ssr: false },
    // { src: '~/plugins/directives', mode: 'client' },
    // { src: "~/plugins/vue-infinite-loading", mode: "client" },
  ],
  // { src: '~/plugins/vee-validate', ssr: false },

  // purgeCSS: {
  //   whitelist: () => whitelister([
  //     './node_modules/sal.js/dist/sal.css'   
  //   ])
  // },
 
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@aceforth/nuxt-optimized-images',
    // '@nuxtjs/composition-api/module',
    // '@nuxtjs/color-mode',
    // '@/modules/generator'
    // '@nuxtjs/google-analytics',
  ],

 

  colorMode: {
    preference: 'light', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode'
  },
  

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/content',
    'nuxt-webfontloader',
    '@nuxtjs/sitemap'
    // 'nuxt-lazy-load',
    // 'nuxt-history-state'
    // ['nuxt-vue-select', {
    //     OpenIndicator: {
    //       render: createElement => createElement('span', '🔽'),
    //     },

    // }]
  ],

  colorMode: {
    classSuffix: ''
  },

  sitemap: {
    hostname: 'https://www.gerard-daniels.com/',
    gzip: true,
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date(),
    },
  },


  // content: {
  //   markdown: {
  //     remarkPlugins: ['remark-emoji'],
  //     rehypePlugins: ["~/plugins/rehype-content-image.js"],
  //     prism: {
  //       theme: false
  //     }
  //   },
  //   highlighter(rawCode, lang) {
  //     const highlightedCode = highlightjs.highlight(lang, rawCode).value

  //     // We need to create a wrapper, because
  //     // the returned code from highlight.js
  //     // is only the highlighted code.
  //     return `<pre><code class="hljs ${lang}">${highlightedCode}</code></pre>`
  //   }
  //   // nestedProperties: ['tags.slug'],
    
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel:{
      plugins: [
        ['@babel/plugin-proposal-private-methods', { loose: true }]
      ]
    },
  },
  // googleAnalytics: {
  //   id: 'G-ZNG9V754J3' // UA-11340695-11
  // },
  webfontloader: {
    // add Google Fonts as "custom" | workaround required
    // custom: {
    //     families: [
    //         'Inter:n4,n6,n7,n8',
    //         'Playfair Display:n4',
    //         'Neue Haas Grotesk Display:n6,n7',
    //         'Neue Haas Grotesk Text:n4,n5,n7'
    //     ],
    //     urls: [
    //         // for each Google Fonts add url + options you want
    //         // here add font-display option
    //         'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap',
    //         'https://fonts.googleapis.com/css?family=Playfair+Display&display=swap',
    //         'https://use.typekit.net/eok3igd.css'
    //     ]
    // }
  // google: {
  //   families: ['Inter:400,600,700,800'] //Loads Lato font with weights 400 and 700
  // }
},
}
