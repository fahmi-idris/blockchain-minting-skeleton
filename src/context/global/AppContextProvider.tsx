import * as React from 'react';

import MintingProvider from 'context/minting/Minting.Context';

import combineProviders from './CombineProviders';

const GlobalProviders = combineProviders([MintingProvider]);

/**
 * GlobalContextProvider is component like CombineReducer but for Context Provider;
 * @param
 */
const GlobalContextProvider: React.FC = ({ children }) => {
  return <GlobalProviders>{children}</GlobalProviders>;
};

export default GlobalContextProvider;
