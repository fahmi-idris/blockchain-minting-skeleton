import * as React from 'react';

import { colors } from 'components/ui-provider';

export interface BaseIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

/* eslint-disable import/prefer-default-export */
export const iconDefaultProps: BaseIconProps = {
  size: 24,
  fill: colors.muted,
};
