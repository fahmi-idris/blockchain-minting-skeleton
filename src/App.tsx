import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import { ScreenLoading } from 'components/loading';

const HomePage = React.lazy(() => import(/* webpackChunkName: 'homepage' */ 'modules/homepage'));
const NotFound = React.lazy(() => import(/* webpackChunkName: '404' */ 'modules/notfound'));

const App: React.FC = () => (
  <React.Suspense fallback={<ScreenLoading />}>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </React.Suspense>
);

export default App;
