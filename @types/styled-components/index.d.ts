/* eslint-disable @typescript-eslint/no-empty-interface */
import { themeProps } from '../../src/components/ui-provider/Theme';
import 'styled-components';

type ThemeInterface = typeof themeProps;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeInterface {}
}
