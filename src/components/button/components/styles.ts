import { css, FlattenInterpolation, ThemeProps } from 'styled-components';
import { layout, position, flexbox, grid, space, border } from 'styled-system';

import { fonts } from 'components/ui-provider';
import {
  ButtonDefault,
  ButtonPrimary,
  ButtonOutline,
  ButtonSecondary,
  ButtonLink,
  ButtonGhost,
  ButtonSmallSize,
  ButtonDefaultSize,
} from './formatter';
import { ButtonBaseProps } from '../types/types';

/* eslint-disable @typescript-eslint/no-explicit-any */
export const ButtonBase = css`
  margin: 0;
  padding: 0;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  background: none;
  text-decoration: none;
  line-height: 1;
  letter-spacing: 0.2px;
  border-radius: 6px;
  border: 1px solid transparent;
  font-family: ${fonts.nunito};
  &:not(:disabled):not(.disabled) {
    cursor: pointer;
  }
  &:hover,
  &:focus {
    text-decoration: none;
  }
  &:focus {
    outline: 0px;
  }
`;

export const ButtonStyles = (props: ButtonBaseProps): FlattenInterpolation<ThemeProps<any>> => css`
  ${ButtonBase}
  ${props.variant === 'default' && ButtonDefault}
  ${props.variant === 'primary' && ButtonPrimary}
  ${props.variant === 'secondary' && ButtonSecondary}
  ${props.variant === 'outline' && ButtonOutline}
  ${props.variant === 'link' && ButtonLink}
  ${props.variant === 'ghost' && ButtonGhost}

  ${props.buttonSize === 'small' && ButtonSmallSize(props)}
  ${props.buttonSize === 'default' && ButtonDefaultSize(props)}

  ${layout}
  ${position}
  ${flexbox}
  ${grid}
  ${space}
  ${border}
`;
