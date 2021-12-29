import * as React from 'react';

import { Skeleton } from 'components/skeleton';
import { Box, colors, radii } from 'components/ui-provider';

const LazyComponent: React.FC = ({ children }) => (
  <React.Suspense
    fallback={
      <Box background={colors.white} borderRadius={radii.lg} padding="24px" height="100%">
        <Skeleton numberOfLines={5} />
      </Box>
    }
  >
    {children}
  </React.Suspense>
);

export default LazyComponent;
