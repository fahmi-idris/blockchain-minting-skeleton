import React from 'react';
import { Box } from 'components/ui-provider';

import Circle from './Circle';

const ScreenLoading: React.FC = () => (
  <Box display="flex" alignItems="center" flex="1 auto" width="100%" height="100%" justifyContent="center">
    <Circle />
  </Box>
);

export default ScreenLoading;
