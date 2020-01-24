const tailwind = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    fontFamily: {
      sans: ["'Inter'", 'sans-serif'],
    },
    fontWeight: {
      normal: 400,
      bold: 700,
    },
    customForms: theme => ({
      default: {
        'input, textarea, select': {
          backgroundColor: 'rgb(var(--color-alpha))',
          color: 'rgb(var(--color-foxtrot))',
          fontSize: theme('fontSize.sm'),
          borderWidth: '2px',
          borderColor: 'rgb(var(--color-charlie))',
          borderRadius: theme('borderRadius.base'),
          lineHeight: '1.2',
          padding: theme('spacing.3'),
          '&:focus': {
            boxShadow: undefined,
            borderColor: 'rgb(var(--color-brand))',
          },
        },
        select: {
          iconColor: '#A0A0A0',
        },
        checkbox: {
          borderRadius: '0',
        },
        'radio, checkbox': {
          color: 'rgb(var(--color-brand))',
          backgroundColor: 'rgb(var(--color-alpha))',
          borderWidth: '2px',
          borderColor: 'rgb(var(--color-charlie))',
          '&:focus': {
            boxShadow: undefined,
            borderColor: 'rgb(var(--color-brand))',
          },
        },
      },
    }),
  },
  plugins: [
    require('./theme.config.js'),
    require('@tailwindcss/custom-forms')
  ],
};
