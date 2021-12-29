/* eslint-disable no-console */
import * as React from 'react';
import { ethers } from 'ethers';

import { MintingContextObject } from 'interfaces/minting';

const initialValue: MintingContextObject = {
  account: '',
  isLoading: false,
  comments: [],
  connectWallet: () => {},
  mintNFT: () => {},
};

const MintingProviderContext = React.createContext<MintingContextObject>(initialValue);

const CONTRACT_ADDRESS = '';
const ABI = '';

const MintingProvider: React.FC = ({ children }) => {
  /**
   * account state is a string value which is used to check if
   * MetaMask wallet is connected or not. We can only work with our contract
   * with a connected wallet.
   */
  const [account, setAccount] = React.useState<string>('');

  /**
   * isLoading state is used to show a loading state and disable minting button
   */
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  /**
   * comments state is used to show metamask and minting state
   */
  const [comments, setComments] = React.useState<string[]>(['Initialized']);

  /**
   * An abstracted function to set comments state from metamask and minting state
   *
   * @returns {string[]}
   */
  const handleAddComment = React.useCallback((comment: string, ...args: unknown[]) => {
    console.log(comment, args);
    setComments((prevState) => [...prevState, comment]);
  }, []);

  /**
   * An abstracted function to get ethereum object from global
   * variables or throw an error if object is null.
   *
   * @returns {Ethereum Object | undefined}
   */
  const getEthereum = React.useCallback(() => {
    /**
     * MetaMask injects as window.ethereum into each page
     *
     * Check: https://docs.metamask.io/guide/#account-management
     */
    const { ethereum } = window;
    if (ethereum) {
      return ethereum;
    }
    handleAddComment("Ethereum object doesn't exist!");
    throw new Error("Ethereum object doesn't exist!");
  }, []);

  /**
   * An abstracted function to connect to the contract by converting
   * ethereum object into Web3Provider.
   */
  const connectContract = React.useCallback(() => {
    const ethereum = getEthereum();
    handleAddComment('Connecting to contract...');
    /**
     * MetaMask injects a Web3 Provider as "web3.currentProvider", so
     * we can wrap it up in the ethers.js Web3Provider, which wraps a
     * Web3 Provider and exposes the ethers.js Provider API.
     *
     * Check: https://docs.ethers.io/v5/api/providers/other/#Web3Provider
     */
    const provider = new ethers.providers.Web3Provider(ethereum);
    /**
     * There is only ever up to one account in MetaMask exposed
     */
    const signer = provider.getSigner();
    /**
     * Instantiating a contract object to return the functin caller.
     * Contract constructor takes in (address , ABI, signerOrProvider).
     * Once instantiated, we can call our MintingContract public functions
     *
     * Check: https://docs.ethers.io/v5/single-page/#/v5/api/contract/contract/
     */
    return new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
  }, []);

  /**
   * getTokenCount function will make a request to our smart contract to return current
   * NFT count. We will use this to show users how many NFTs have been generated using
   * out DAPP. Also, we will use this function to create opensea link.
   *
   * @returns {Promise<number>}
   */
  const getTokenCount = React.useCallback(async () => {
    try {
      const connectedContract = connectContract();
      handleAddComment(`Getting NFT count...`);

      /**
       * tokenCount is our contract's public state variable
       * We have to call it as a function to access it's value.
       */
      const count = await connectedContract.tokenCount();
      handleAddComment(`Minted NFTs total: ${count.toNumber()}`);

      /**
       * uint256 will be returned to us as a BigNumber, we can
       * convert it to a number by using util toNumber()
       *
       * Check: https://docs.ethers.io/v5/api/utils/bignumber/#BigNumber--BigNumber--methods--conversion
       */
      return count.toNumber();
    } catch (error) {
      handleAddComment(`Failed to get token count`, error);
      return 0;
    }
  }, []);

  /**
   * mintNFT function will make a request to our smart contract to mint an NFT
   *
   * @returns {Promise<void>}
   */
  const mintNFT = async () => {
    setIsLoading(true);
    try {
      handleAddComment('Connecting to contract...');
      const connectedContract = connectContract();

      handleAddComment('Going to pop wallet now to pay gas...');
      /**
       * Calling our MintingContract mintNFT public function
       */
      const nftTxn = await connectedContract.mintNFT();

      handleAddComment('Mining...please wait.');
      /**
       * Waiting for transaction to be mined
       */
      await nftTxn.wait();

      /**
       * nftTxn.hash is transaction id that we can use to create etherscan link
       */
      handleAddComment(`Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`);
      /**
       * Getting token count from our smart contract to generate OpenSea link
       */
      const count = await getTokenCount();
      handleAddComment(`OpenSea link: https://testnets.opensea.io/assets/${CONTRACT_ADDRESS}/${count}`);
    } catch (error) {
      console.log(error);
      handleAddComment(`Failed to mint`, error);
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * connectWallet function will be called on mount to trigger MetaMask wallet
   * pop up to connect to our DAPP.
   *
   * @returns {Promise<void>}
   */
  const connectWallet = React.useCallback(async () => {
    handleAddComment(`Connecting to Metamask...`);
    try {
      const ethereum = getEthereum();

      /**
       * Requesting MetaMask to connect the wallet to our DAPP. ethereum.request
       * function is injected into each page by MetaMask.
       *
       * Check: https://docs.metamask.io/guide/rpc-api.html#permissions
       */
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });

      handleAddComment(`Connected to ${accounts[0]}`);
      /**
       * Setting current account state
       */
      setAccount(accounts[0]);
      /**
       * Getting token count from our smart contract
       */
      getTokenCount();
    } catch (error) {
      handleAddComment(`Failed to connect to Metamask`, error);
    }
  }, []);

  return (
    <MintingProviderContext.Provider
      value={{
        account,
        isLoading,
        comments,
        connectWallet,
        mintNFT,
      }}
    >
      {children}
    </MintingProviderContext.Provider>
  );
};

export default MintingProvider;

/**
 * minting hook provider will be called when some component use this hooke
 *
 * @returns {MintingContextObject}
 */
export const useMintingProvider = (): MintingContextObject => React.useContext(MintingProviderContext);
