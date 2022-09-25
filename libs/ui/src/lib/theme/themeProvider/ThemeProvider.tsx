import { ReactNode } from "react";
import {
  Global,
  css,
  ThemeProvider as EmotionThemeProvider,
} from '@emotion/react';
import 'normalize.css';
import { ThemeType, DarkLightPaletteType } from '../types/types';
import { getTheme } from '../utils/getTheme';

export type ThemeProviderProps = {
  useDarkMode?: boolean;
  children?: ReactNode | ReactNode[];
  brand: ThemeType;
  colorPalette: DarkLightPaletteType;
};

export const ThemeProvider = ({
  children,
  brand,
  colorPalette,
  useDarkMode = false,
}: ThemeProviderProps) => (
  <>
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');
        html,
        body,
        #root {
          font-family: Inter, sans-serif;
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 16px;
          overflow-x: hidden;
        }
      `}
    />
    <EmotionThemeProvider
      theme={{ ...getTheme(useDarkMode, colorPalette), ...brand }}
    >
      {children}
    </EmotionThemeProvider>
  </>
);
