const { ThemeBuilder, Theme } = require('tailwindcss-theming');

const mainTheme = new Theme()
  .default()
  .colors({
    'alpha': '#FFFFFF',
    'bravo': '#F5F8FA',
    'charlie': '#E6ECF0',
    'delta': '#657786',
    'echo': '#14171A',

    'green': '#17BF63',
    'yellow': '#FFAD1F',
    'orange': '#FF6810',
    'red': '#E0245E',

    'black': '#121212',
    'white': '#FFFFFF',
  })
;

const darkTheme = new Theme()
  .colors({
    'alpha': '#000000',
    'bravo': '#15181C',
    'charlie': '#2F3336',
    'delta': '#6E767D',
    'echo': '#FFFFFF',
  })
;

module.exports = new ThemeBuilder()
  .asDataThemeAttribute()
  .default(mainTheme)
  .dark(darkTheme);
