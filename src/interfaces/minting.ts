export interface MintingContextObject {
  account: string;
  isLoading: boolean;
  comments: string[];
  connectWallet: () => void;
  mintNFT: () => void;
}
