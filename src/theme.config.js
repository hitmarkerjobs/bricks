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
    'white': '#FFFFFF',
    'green': '#17BF63',
    'yellow': '#FFAD1F',
    'red': '#E0245E',

    'transparent': 'transparent',
  })
;

const darkTheme = new Theme()
  .colors({
    'alpha': '#000000',
    'bravo': '#2B2B2B',
    'charlie': '#484848',
    'delta': '#606060',
    'echo': '#8C8C8C',
    'foxtrot': '#FFFFFF',
  })
;

module.exports = new ThemeBuilder()
  .asDataThemeAttribute()
  .default(mainTheme)
  .dark(darkTheme);
