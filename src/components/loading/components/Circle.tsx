import React from 'react';
import styled from 'styled-components';

import { colors } from 'components/ui-provider';

interface LoadingCircleProps {
  className?: string;
  color?: string;
  size?: number;
  width?: number;
  height?: number;
}

const Root = styled('div')<LoadingCircleProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  & svg path,
  & svg rect {
    fill: ${(props) => props.color};
  }
`;

const Cicle: React.FC<LoadingCircleProps> = ({ className, size = 40, color = colors.orange, ...props }) => {
  return (
    <Root className={className} color={color}>
      <svg width={size} height={size} viewBox="0 0 100 100" {...props}>
        <path
          fill={color}
          d="M73 50c0-12.7-10.3-23-23-23S27 37.3 27 50m3.9 0c0-10.5 8.5-19.1 19.1-19.1S69.1 39.5 69.1 50"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            dur="1s"
            from="0 50 50"
            to="360 50 50"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </Root>
  );
};

Cicle.defaultProps = {
  className: undefined,
  width: 40,
  height: 40,
  size: 40,
  color: colors.primary,
};

export default Cicle;
