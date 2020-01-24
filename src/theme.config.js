const { ThemeBuilder, Theme } = require('tailwindcss-theming');

const mainTheme = new Theme()
  .default()
  .assignable()
  .colors({
    'alpha': '#FFFFFF',
    'bravo': '#F5F8FA',
    'charlie': '#E1E8ED',
    'delta': '#AAB8C2',
    'echo': '#657786',
    'foxtrot': '#14171A',

    'brand': '#FF5800',
    'black': '#14171A',
    'slate': '#657786',
    'gray': '#AAB8C2',
    'silver': '#E1E8ED',
    'ghost': '#F5F8FA',
    'white': '#FFFFFF',

    'green': '#17BF63',
    'yellow': '#FFAD1F',
    'red': '#E0245E',

    'transparent': 'transparent',
  })
;

const darkTheme = new Theme()
  .colors({
    'alpha': '#14171A',
    'bravo': '#1f2227',
    'charlie': '#2e3236',
    'delta': '#6E767D',
    'echo': '#B9B9B9',
    'foxtrot': '#FFFFFF',
  })
;

module.exports = new ThemeBuilder()
  .asDataThemeAttribute()
  .default(mainTheme)
  .dark(darkTheme);
