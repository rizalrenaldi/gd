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
      'heading': 'neue-haas-grotesk-display, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      'sans': 'neue-haas-grotesk-text, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      'serif': 'freight-big-pro, serif',
    },
    extend: {
      letterSpacing: {
        serif: '-0.015em'
      },
      colors: {
        brand: "#016AFF",
        white: "#ffffff",
        black: "#000000",
        emerald:colors.emerald,
        gray: colors.blueGray,
        neutral: {
          50: '#f3f5f9',
          100: '#dee2e8',
          200: '#d3d6de',
          300: '#c9ced8',
          400: '#bac0ce',
          500: '#a7aebd',
          600: '#99a1b2',
          700: '#5e6a83',
          800: '#13203d',
          900: '#0e182e',
        },
        'neutral-dark': {
          50: '#f0f6fc',
          100: '#c9d1d9',
          200: '#b1bac4',
          300: '#8b949e',
          400: '#6e7681',
          500: '#484f58',
          600: '#30363d',
          700: 'hsl(215, 13%, 15%)',
          800: 'hsl(215, 13%, 9%)',
          900: 'hsl(216, 18%, 7%)',
        }
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
