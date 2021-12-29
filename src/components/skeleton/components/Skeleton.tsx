import React from 'react';
import classNames from 'classnames';
import styled, { keyframes } from 'styled-components';

import { colors, space } from 'components/ui-provider';

const progress = keyframes`
  0% {
    transform: translate3d(-100%, 0, 0);
  }
  100% {
    transform: translate3d(100%, 0, 0);
  }
`;

const Wrapper = styled('div')`
  display: block;
  position: relative;
  overflow: hidden;
  height: 20px;
  width: 100%;
  background: ${colors.gray3};
  border-radius: 4px;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, ${colors.gray3}, rgb(246, 247, 248), ${colors.gray3});
    animation: ${progress} 1s ease-in-out infinite;
  }

  &.is-small {
    height: 16px !important;
  }
`;

const Multiline = styled('div')`
  ${Wrapper} {
    margin-bottom: ${space.xs}px;

    &:last-child {
      width: 65%;
    }
  }
`;

export interface SkeletonProps {
  className?: string;
  style?: React.CSSProperties;
  numberOfLines?: number;
  small?: boolean;
}

const Skeleton: React.FC<SkeletonProps> = ({ className, numberOfLines, small }) => {
  if (numberOfLines && numberOfLines > 1) {
    return (
      <Multiline>
        {[...Array(numberOfLines)].map((_, i) => (
          <Wrapper key={i.toString()} className={classNames(className, small && 'is-small')} />
        ))}
      </Multiline>
    );
  }

  return <Wrapper className={classNames(className, small && 'is-small')} />;
};

Skeleton.displayName = 'Skeleton';

export default Skeleton;
