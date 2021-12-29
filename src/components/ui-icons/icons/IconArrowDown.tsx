import React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconArrowDown: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" transform="rotate(360)" {...props}>
    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" fill={fill} />
  </svg>
);

IconArrowDown.defaultProps = {
  ...iconDefaultProps,
};

export default IconArrowDown;
