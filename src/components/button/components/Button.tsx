import * as React from 'react';
import styled from 'styled-components';
import { typography, TypographyProps } from 'styled-system';

import { colors } from 'components/ui-provider';
import { Circle } from 'components/loading';

import { ButtonBaseProps, ButtonSizes } from '../types/types';
import { ButtonStyles } from './styles';

export interface ButtonProps extends ButtonBaseProps, TypographyProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Additional CSS classes to give to the component */
  className?: string;
  /** Additional CSS styles to give to the component */
  style?: React.CSSProperties;
  /** The size of the button. */
  size?: ButtonSizes;
  /** True if the button is disabled due to loading */
  isLoading?: boolean;
}

const Root = styled('button')<ButtonProps>`
  ${ButtonStyles}
  ${typography}
`;

const InvisibleText = styled('span')`
  visibility: hidden;
`;

const loadingIconPadding = (size?: ButtonSizes) => {
  switch (size) {
    case 'default':
      return 20;
    case 'small':
      return 16;
    default:
      return 16;
  }
};

const iconPadding = (size?: ButtonSizes) => {
  switch (size) {
    case 'default':
      return 16;
    case 'small':
      return 16;
    default:
      return 16;
  }
};

const loadingIconSizes = (size?: ButtonSizes) => {
  switch (size) {
    case 'default':
      return 30;
    case 'small':
      return 22;
    default:
      return 22;
  }
};

const LoaderCircle = styled(Circle)<{ loadersize?: ButtonSizes }>`
  position: absolute;
  left: ${(props) => `calc(50% - ${loadingIconPadding(props.loadersize)}px)`};
  top: ${(props) => `calc(50% - ${loadingIconPadding(props.loadersize)}px)`};
`;

const Icon = styled('span')<Pick<ButtonProps, 'size' | 'iconPosition' | 'variant'>>`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  ${(props) =>
    props.iconPosition === 'right' ? `right: ${iconPadding(props.size)}px;` : `left: ${iconPadding(props.size)}px;`}
  & i {
    display: flex;
    align-items: center;
    vertical-align: middle;
  }
`;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, className, style, size, icon, iconPosition, isLoading, disabled, variant, block, width, ...rest },
    ref,
  ) => {
    const renderIcon = () => {
      if (typeof icon === 'string') {
        return (
          <Icon iconPosition={iconPosition} size={size} style={isLoading ? { visibility: 'hidden' } : undefined}>
            <i className={`icon-${icon}`} />
          </Icon>
        );
      }

      return icon ? (
        <Icon iconPosition={iconPosition} size={size} style={isLoading ? { visibility: 'hidden' } : undefined}>
          {React.createElement(icon, { fill: 'currentColor', size: 20 })}
        </Icon>
      ) : null;
    };

    return (
      <Root
        className={className}
        style={style}
        buttonSize={size}
        icon={icon}
        iconPosition={iconPosition}
        disabled={disabled || isLoading}
        isLoading={isLoading}
        variant={variant}
        ref={ref}
        display={block ? 'block' : 'inline-block'}
        width={block ? '100%' : width}
        position="relative"
        {...rest}
      >
        {icon && renderIcon()}
        {isLoading ? (
          <>
            <LoaderCircle
              size={loadingIconSizes(size)}
              loadersize={size}
              color={variant === 'outline' ? colors.gray1 : colors.white}
            />
            <InvisibleText>{children}</InvisibleText>
          </>
        ) : (
          children
        )}
      </Root>
    );
  },
);

Button.defaultProps = {
  className: undefined,
  style: undefined,
  block: false,
  icon: undefined,
  iconPosition: 'left',
  variant: 'default',
  size: 'default',
};

Button.displayName = 'Button';

export default Button;
