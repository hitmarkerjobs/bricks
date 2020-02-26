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
    boxShadow: {
      xs: '0 0 0 1px rgba(var(--color-foxtrot), 0.05)',
      sm: '0 1px 2px 0 rgba(var(--color-foxtrot), 0.05)',
      default: '0 1px 3px 0 rgba(var(--color-foxtrot), 0.1), 0 1px 2px 0 rgba(var(--color-foxtrot), 0.06)',
      md: '0 4px 6px -1px rgba(var(--color-foxtrot), 0.1), 0 2px 4px -1px rgba(var(--color-foxtrot), 0.06)',
      lg: '0 10px 15px -3px rgba(var(--color-foxtrot), 0.1), 0 4px 6px -2px rgba(var(--color-foxtrot), 0.05)',
      xl: '0 20px 25px -5px rgba(var(--color-foxtrot), 0.1), 0 10px 10px -5px rgba(var(--color-foxtrot), 0.04)',
      '2xl': '0 25px 50px -12px rgba(var(--color-foxtrot), 0.25)',
      inner: 'inset 0 2px 4px 0 rgba(var(--color-foxtrot), 0.06)',
      outline: '0 0 0 1px rgb(var(--color-brand))',
      none: 'none',
    },
    zIndex: {
      auto: 'auto',
      '0': '0',
      '1': '1',
      '2': '2',
      '3': '3',
      '4': '4',
      '5': '5',
      '6': '6',
      '7': '7',
      '8': '8',
      '9': '9',
      '10': '10',
    },
    customForms: theme => ({
      default: {
        'input, textarea, select': {
          backgroundColor: 'rgb(var(--color-alpha))',
          color: 'rgb(var(--color-foxtrot))',
          fontSize: theme('fontSize.sm'),
          borderColor: 'rgb(var(--color-charlie))',
          lineHeight: '1.2',
          '&:focus': {
            boxShadow: '0 0 0 1px rgb(var(--color-brand));',
            borderColor: 'rgb(var(--color-brand))',
          },
        },
        'input, textarea': {
          padding: theme('spacing.3'),
        },
        select: {
          iconColor: '#A0A0A0',
          paddingTop: theme('spacing.3'),
          paddingRight: theme('spacing.8'),
          paddingBottom: theme('spacing.3'),
          paddingLeft: theme('spacing.3'),
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
