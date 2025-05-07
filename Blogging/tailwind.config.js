/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
            color: 'inherit',
            a: {
              color: '#0077B6',
              '&:hover': {
                color: '#005a8c',
              },
            },
            h1: {
              color: 'inherit',
            },
            h2: {
              color: 'inherit',
            },
            h3: {
              color: 'inherit',
            },
            h4: {
              color: 'inherit',
            },
            code: {
              color: 'inherit',
              backgroundColor: '#f0f0f0',
              padding: '0.2em 0.4em',
              borderRadius: '3px',
              fontWeight: '400',
            },
            pre: {
              backgroundColor: '#f5f5f5',
              color: 'inherit',
              borderRadius: '0.375rem',
            },
          },
        },
        invert: {
          css: {
            a: {
              color: '#4dabf5',
              '&:hover': {
                color: '#6ebcff',
              },
            },
            code: {
              backgroundColor: '#1a1a1a',
            },
            pre: {
              backgroundColor: '#1a1a1a',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};