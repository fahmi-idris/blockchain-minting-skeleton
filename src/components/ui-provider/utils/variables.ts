/* eslint-disable max-len */
export const colors = {
  white: '#ffffff',
  black: '#000000',

  muted: '#9FADBD',
  gray1: '#A6ABBD',
  gray3: '#EBEDF0',

  input: '#818181',
  dark: '#131626',
  primary: '#4A67ED',
  darkenBlue: '#405BD6',
  lightBlue: '#E5E9FE',
  lighterGrey: '#EDEEF2',
  lightGrey: '#CED0D9',
  grey: '#9598A6',
  darkGrey: '#565B73',
  lighterGreen: '#D9F8F4',
  green: '#00D3B7',
  ligtherOrange: '#FFF6DF',
  orange: '#FFC226',
  lighterRed: '#FFE4DF',
  red: '#FF4D26',
};

export const systemFonts =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'";

export const fonts = {
  system: systemFonts,
  sansSerif: `'Museo Sans Rounded', ${systemFonts}`,
  monospace: "'SF Mono', Inconsolata, Menlo, Monaco, Consolas, 'Courier New', Courier, monospace;",
  nunito: 'Nunito',
};

/**
 * Legacy spacer units (in px units).
 */
export const spaceLegacy = {
  /** Equivalent to 8px */
  space1: 8,
  /** Equivalent to 16px */
  space2: 16,
  /** Equivalent to 24px */
  space3: 24,
  /** Equivalent to 32px */
  space4: 32,
  /** Equivalent to 40px */
  space5: 40,
  /** Equivalent to 48px */
  space6: 48,
  /** Equivalent to 56px */
  space7: 56,
  /** Equivalent to 64px */
  space8: 64,
  /** Equivalent to 72px */
  space9: 72,
  /** Equivalent to 80px */
  space10: 80,
  /** Equivalent to 88px */
  space11: 88,
  /** Equivalent to 96px */
  space12: 96,
  /** Equivalent to 104px */
  space13: 104,
  /** Equivalent to 112px */
  space14: 112,
};

/** Space values (in px) mapped by size designators */

export const space = {
  ...spaceLegacy,
  /** Equivalent to 2px */
  xxxs: 2,
  /** Equivalent to 4px */
  xxs: 4,
  /** Equivalent to 8px */
  xs: 8,
  /** Equivalent to 12px */
  sm: 12,
  /** Equivalent to 16px */
  md: 16,
  /** Equivalent to 24px */
  lg: 24,
  /** Equivalent to 32px */
  xl: 32,
  /** Equivalent to 48px */
  xxl: 48,
};

export const breakpoints = ['1024px', '1280px', '1440px', '1600px'];

export const mediaQueries = {
  sm: `@media screen and (min-width: ${breakpoints[0]})`,
  md: `@media screen and (min-width: ${breakpoints[1]})`,
  lg: `@media screen and (min-width: ${breakpoints[2]})`,
  xl: `@media screen and (min-width: ${breakpoints[3]})`,
};

/** Border radiuses */
export const radii = {
  xs: 2,
  sm: 4,
  md: 6,
  lg: 8,
};

/** Legacy box-shadow values. */
export const shadowsLegacy = {
  layer100: '0px 8px 16px rgba(66, 70, 86, 0.06)',
  layer200: '0px 16px 24px rgba(66, 70, 86, 0.08)',
  layer300: '0px 24px 38px rgba(66, 70, 86, 0.16)',
};

/** Default box/text shadow separated by layers */
export const shadows = {
  ...shadowsLegacy,
};

/** Legacy elevation values. */
export const elevationLegacy = {
  layer100: {
    boxShadow: 'layer100',
  },
  layer200: {
    boxShadow: 'layer200',
  },
  layer300: {
    boxShadow: 'layer300',
  },
};

/** Custom elevation variant for the Card component. */
export const elevation = {
  ...elevationLegacy,
  level1: {
    boxShadow: 'none',
  },
  level2: {
    boxShadow: `0px 4px 15px rgba(0, 0, 0, 0.06);`,
  },
  level3: {
    boxShadow: `0px 4px 15px rgba(0, 0, 0, 0.15);`,
  },
};

/** Typography scale values (in pixels) mapped by style tokens. */
export const typeScale = {
  heading1: {
    fontSize: 72,
    lineHeight: 88,
  },
  heading2: {
    fontSize: 64,
    lineHeight: 78,
  },
  heading3: {
    fontSize: 48,
    lineHeight: 59,
  },
  heading4: {
    fontSize: 36,
    lineHeight: 44,
  },
  large: {
    fontSize: 24,
    lineHeight: 29,
  },
  normal: {
    fontSize: 14,
    lineHeight: 17,
  },
  small: {
    fontSize: 12,
    lineHeight: 15,
  },
  caption: {
    fontSize: 18,
    lineHeight: 22,
  },
  body: {
    fontSize: 14,
    lineHeight: 17,
  },
};
