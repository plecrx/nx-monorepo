import { useDarkMode } from 'storybook-dark-mode';
import { ThemeProvider } from '../src/lib/theme/themeProvider';
import * as brand from '../src/lib/theme/brand';
import * as palettes from '../src/lib/theme/palettes';

export const globalTypes = {
  theme: {
    name: 'App Icon',
    description: 'Global theme for components',
    defaultValue: 'database-admin',
    toolbar: {
      icon: 'photo',
      items: Object.keys(brand),
      showName: true,
    },
  },
  colorScheme: {
    name: 'Color Scheme',
    description: 'Choose the color Scheme',
    defaultValue: 'plecrx',
    toolbar: {
      icon: 'paintbrush',
      items: Object.keys(palettes),
      showName: true,
    },
  },
};

export const decorators = [
  (Story, context) => (
    <ThemeProvider
      brand={brand[context.globals.theme]}
      useDarkMode={useDarkMode()}
      colorPalette={palettes[context.globals.colorScheme]}
    >
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  layout: 'fullscreen',
};
