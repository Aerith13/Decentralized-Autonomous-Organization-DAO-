import { createContext, useContext, useState } from 'react';

const Web3Context = createContext();

export function Web3Provider({ children }) {
  const [walletAddress, setWalletAddress] = useState(null);

  return (
    <Web3Context.Provider value={{ walletAddress, setWalletAddress }}>
      {children}
    </Web3Context.Provider>
  );
}

export function useWeb3() {
  return useContext(Web3Context);
}