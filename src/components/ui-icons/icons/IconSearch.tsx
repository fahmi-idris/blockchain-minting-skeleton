/* eslint-disable max-len */
import React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconSearch: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" transform="rotate(360)" {...props}>
    <path
      d="M10 18a7.952 7.952 0 004.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0018 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"
      fill={fill}
    />
  </svg>
);

IconSearch.defaultProps = {
  ...iconDefaultProps,
};

export default IconSearch;
