import '@emotion/react';
import { EmotionThemeType } from './lib/theme/types/types';

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends EmotionThemeType {}
}
