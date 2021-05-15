const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: {
    mode: "layers",
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      // TypeScript
      'plugins/**/*.ts',
      'nuxt.config.ts'
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': '"geograph", sans-serif',
      'serif': '"signifier", serif',
      'serif-light': '"signifier-light", serif',
    },
    extend: {
      letterSpacing: {
        serif: '-0.015em'
      },
      colors: {
        brand: "hsl(42, 85%, 49%)",
        'brand-dark': "hsl(42, 85%, 40%)",
        white: "#ffffff",
        black: "#000000",
        gray: colors.trueGray,
        'gd-yellow': '#E7A613',
        'gd-yellow-light': '#FAF8F4',
        'gd-neutral-dark': '#3A3228',
        'gd-neutral-darker': '#313131',

      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.neutral.800'),
            p: theme('colors.neutral.800'),
            a: {
              color: theme('colors.brand'),
              '&:hover': {
                color: theme('color.neutral.600')
              }
            }
          }
        }
      })
    },
  },
  variants: {
    extend: {
      translate: ['group-hover']
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
