import { css, FlattenSimpleInterpolation } from 'styled-components';

import { colors, componentStyles } from 'components/ui-provider';
import { ButtonBaseProps } from '../types/types';

export const ButtonDisabled = css`
  border-color: ${colors.gray3};
  background-color: ${colors.gray3};
  color: ${colors.gray1};
`;

export const ButtonDefault = css`
  color: #3b4856;
  background-color: #e7eaee;
  &:not(:disabled):not(.disabled) {
    &:hover,
    &.hover,
    &:focus,
    &.focus {
      color: rgba(59, 72, 86, 0.8);
      background-color: rgba(231, 234, 238, 0.8);
    }
    &:focus,
    &.focus,
    &:active,
    &.active {
      color: #3b4856;
      background-color: #e7eaee;
    }
  }
  &:disabled,
  &.disabled {
    ${ButtonDisabled}
  }
`;

export const ButtonPrimary = css`
  background-color: ${colors.primary};
  color: ${colors.white};
  &:not(:disabled):not(.disabled) {
    &:hover,
    &.hover,
    &:focus,
    &.focus {
      background-color: rgba(74, 103, 237, 0.8);
      color: ${colors.white};
    }
    &:focus,
    &.focus,
    &:active,
    &.active {
      background-color: ${colors.primary};
      border-color: ${colors.primary};
      box-shadow: 0px 5px 15px rgba(159, 173, 189, 0.15);
    }
  }
  &:disabled,
  &.disabled {
    ${ButtonDisabled}
  }
`;

export const ButtonSecondary = css`
  background-color: ${colors.green};
  color: ${colors.white};
  &:not(:disabled):not(.disabled) {
    &:hover,
    &.hover,
    &:focus,
    &.focus {
      background-color: rgba(0, 211, 183, 0.8);
      color: ${colors.white};
    }
    &:focus,
    &.focus,
    &:active,
    &.active {
      background-color: ${colors.green};
      border-color: ${colors.green};
    }
  }
  &:disabled,
  &.disabled {
    ${ButtonDisabled}
  }
`;

export const ButtonOutline = css`
  background-color: ${colors.white};
  color: ${colors.primary};
  border: 1px solid ${colors.primary};
  &:not(:disabled):not(.disabled) {
    &:hover,
    &.hover,
    &:focus,
    &.focus {
      background-color: ${colors.primary};
      color: ${colors.white};
    }
    &:focus,
    &.focus,
    &:active,
    &.active {
      background-color: ${colors.primary};
      border-color: ${colors.primary};
      box-shadow: 0px 5px 15px rgba(159, 173, 189, 0.15);
    }
  }
  &:disabled,
  &.disabled {
    border-color: ${colors.gray3};
    background-color: ${colors.gray3};
    color: ${colors.gray1};
  }
`;

export const ButtonLink = css`
  background-color: ${colors.white};
  color: ${colors.muted};
  &:not(:disabled):not(.disabled) {
    &:hover,
    &.hover,
    &:focus,
    &.focus {
      color: ${colors.primary};
    }
  }
  &:disabled,
  &.disabled {
    ${ButtonDisabled}
  }
`;

export const ButtonGhost = css`
  background-color: ${colors.white};
  color: ${colors.muted};
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.06);
  &:not(:disabled):not(.disabled) {
    &:hover,
    &.hover,
    &:focus,
    &.focus {
      color: ${colors.primary};
    }
  }
  &:disabled,
  &.disabled {
    ${ButtonDisabled}
  }
`;

export const ButtonSmallSize = (props: ButtonBaseProps): FlattenSimpleInterpolation => css`
  height: 40px;
  padding: 0 16px;
  font-size: ${componentStyles.text[200].fontSize};
  line-height: ${componentStyles.text[200].lineHeight};
  ${props.icon && props.iconPosition === 'left' && 'padding-left: 40px;'}
  ${props.icon && props.iconPosition === 'right' && 'padding-right: 40px;'}
`;

export const ButtonDefaultSize = (props: ButtonBaseProps): FlattenSimpleInterpolation => css`
  height: 60px;
  padding: 0 22px;
  font-size: ${componentStyles.text[300].fontSize};
  line-height: ${componentStyles.text[300].lineHeight};
  ${props.icon && props.iconPosition === 'left' && 'padding-left: 44px;'}
  ${props.icon && props.iconPosition === 'right' && 'padding-right: 44px;'}
`;
