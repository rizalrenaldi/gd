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
      sans: ['geograph'],
      serif: ['"signifier-regular"'],
      'serif-light': ['signifier-light, serif'],
    },
    extend: {
      letterSpacing: {
        serif: '-0.015em'
      },
      boxShadow: {
        'gd': '1px 1px 4px 0 rgba(0, 0, 0, 0.19)'
      },
      colors: {
        brand: "hsl(42, 85%, 49%)",
        'brand-dark': "hsl(42, 85%, 40%)",
        white: "#ffffff",
        black: "#000000",
        gray: colors.trueGray,
        'gd-yellow': '#E7A613',
        'gd-yellow-light': '#FAF8F4',
        'gd-yellow-dark': '#d69a10',
        'gd-neutral-light': '#a5a5a5',
        'gd-neutral-medium': '#E8E3D9',
        'gd-neutral-dark': '#3A3228',
        'gd-neutral-darker': '#313131',

      },
      spacing: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
        '1/15': '5%',
        '1/16': '4%'
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
