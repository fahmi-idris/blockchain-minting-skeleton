import * as React from 'react';

import { Box, Text } from 'components/ui-provider';

const NotFound: React.FC = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      flex="1 auto"
      width="100%"
      height="calc(100% - 80px)"
      justifyContent="center"
    >
      <Text scale={500} fontWeight="bold">
        404 Not Found
      </Text>
    </Box>
  );
};

export default NotFound;
