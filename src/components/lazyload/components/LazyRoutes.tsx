import * as React from 'react';

import { ScreenLoading } from 'components/loading';

const LazyRoutes: React.FC = ({ children }) => <React.Suspense fallback={<ScreenLoading />}>{children}</React.Suspense>;

export default LazyRoutes;
