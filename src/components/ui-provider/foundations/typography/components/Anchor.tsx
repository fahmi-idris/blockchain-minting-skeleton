import * as React from 'react';

import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { themeProps } from '../../../Theme';
import Text, { TextProps } from './Text';

export interface AnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>, TextProps {}

const AnchorRoot = Text.withComponent('a');

/**
 * Link component provided as a styled component primitive.
 */
const Anchor = styled(AnchorRoot)<AnchorProps>`
  color: ${themeGet('colors.link', themeProps.colors.orange)};

  &:hover,
  &:focus {
    color: ${themeGet('colors.link-hover', themeProps.colors.black)};
    text-decoration: underline;
  }
`;

Anchor.displayName = 'Link';

export default Anchor;
