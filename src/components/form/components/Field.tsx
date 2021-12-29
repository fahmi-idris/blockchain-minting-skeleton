import React, { FC } from 'react';
import styled from 'styled-components';

import { colors, radii } from 'components/ui-provider';
import renderIcon from 'components/ui-provider/utils/renderIcon';

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  withIcon?: boolean;
  errors?: boolean;
  ref?: React.RefObject<HTMLInputElement>;
}

const Field: FC<Props> = ({ value, type = 'text', icon, onChange, disabled, errors, ...field }) => (
  <InputContainer>
    {renderIcon(icon)}
    <Input
      value={value}
      type={type}
      onChange={onChange}
      disabled={disabled}
      withIcon={icon !== undefined}
      errors={errors}
      {...field}
    />
  </InputContainer>
);

const InputContainer = styled('div')`
  position: relative;
  svg {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translate(0, -50%);
    width: 20px;
  }
`;

const Input = styled('input')<Props>`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid ${colors.lightGrey};
  min-height: 45px;
  padding: 12px 16px;
  width: 100%;
  border-radius: ${radii.lg}px;
  color: ${colors.input};

  ${(props) => props.withIcon && 'padding-left: 45px;'}
  ${(props) => props.errors && `border: 1px solid ${colors.red};`}
  ${(props) => props.errors && 'outline: none;'}

  &:disabled {
    background: ${colors.gray3};
  }

  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${colors.input};
  }
  :-ms-input-placeholder {
    color: ${colors.input};
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 1px ${colors.primary}, 0px 0px 2px ${colors.primary}, 0px 0px 3px ${colors.primary};
  }
`;

export default Field;
