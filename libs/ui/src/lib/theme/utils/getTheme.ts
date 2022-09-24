import { DarkLightPaletteType } from '../types/types';

export const getTheme = (
  useDarkMode: boolean,
  theme: DarkLightPaletteType
) => (useDarkMode ? theme.dark : theme.light);
