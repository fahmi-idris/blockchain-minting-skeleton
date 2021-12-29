/* eslint-disable react/no-array-index-key */
import * as React from 'react';

import { Box, Text } from 'components/ui-provider';
import { Button } from 'components/button';

import { useMintingProvider } from 'context';

import { addressFormatter } from 'utils/formatter';

const HomePage: React.FC = () => {
  const { account, isLoading, comments, connectWallet, mintNFT } = useMintingProvider();
  return (
    <Box display="flex" alignItems="center" justifyContent="center" height="100%">
      <>
        <Text>{addressFormatter(account)}</Text>
        {account ? (
          <Button onClick={account && !isLoading ? mintNFT : undefined} isLoading={isLoading}>
            {isLoading ? 'Minting' : 'Mint Basic NFT'}
          </Button>
        ) : (
          <Button onClick={() => connectWallet()}>Connect Wallet</Button>
        )}
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
      </>
    </Box>
  );
};

export default HomePage;
