export type ThemeType = {
  logo: string;
  loginIllustration: string;
};

export type EmotionThemeType = ThemeType & {
  colors: PaletteColorsType;
};

export type DarkLightPaletteType = {
  light: PaletteType;
  dark: PaletteType;
};

export type PaletteType = {
  colors: PaletteColorsType;
};

export type PaletteColorsType = {
  brand: BrandColorsType;
  base: BaseColorsType;
  border: BorderColorsType;
  hover: HoverColorsType;
  action: ActionColorsType;
};

export type ColorsType = {
  [key: string]: string;
};

export type ActionColorsType =
  | ColorsType
  | {
  success: string;
  warning: string;
  error: string;
  onSuccess: string;
  onWarning: string;
  onError: string;
  successHover: string;
  warningHover: string;
  errorHover: string;
  onSucessHover: string;
  onErrorHover: string;
  onWarningHover: string;
  successPressed: string;
  warningPressed: string;
  errorPressed: string;
  onSuccessPressed: string;
  onWarningPressed: string;
  onErrorPressed: string;
};

export type BrandColorsType =
  | ColorsType
  | {
  primary: string;
  secondary: string;
  tertiary: string;
  gradient: string;

  onPrimary: string;
  onSecondary: string;
  onTertiary: string;
  onGradient: string;
};

export type BaseColorsType =
  | ColorsType
  | {
  backgroundPrimary: string;
  backgroundSecondary: string;
  surface: string;
  info: string;
  disabled: string;
  onBasePrimary: string;
  onBaseSecondary: string;
  onBaseTertiary: string;
  onBaseQuaternary: string;
};

export type BorderColorsType =
  | ColorsType
  | {
  borderPrimary: string;
  borderSecondary: string;
  borderTertiary: string;
  shadowPrimary: string;
};

export type HoverColorsType =
  | ColorsType
  | {
  hoverSurfacePrimary: string;
  hoverSurfaceSecondary: string;
  hoverSurfaceTertiary: string;
  hoverBorder: string;
};
