import * as React from 'react';

import { Theme } from '../../../Theme';

const UIProvider: React.FC = ({ children }) => {
  return <Theme>{children}</Theme>;
};

UIProvider.displayName = 'UIProvider';

export default UIProvider;
