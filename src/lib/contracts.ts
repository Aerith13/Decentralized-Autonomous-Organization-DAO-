import { useContract } from "@thirdweb-dev/react";

// Replace with your actual contract addresses
const GOVERNANCE_CONTRACT = "0xEDFfb6b95b2b201827a1e91b2b1d752f93cB1df0";
const TOKEN_CONTRACT = "0x0e09AaB9BFcAEE8c565c34Aa56d12599d586B11f";


export const useContracts = () => {
  const { contract: governanceContract } = useContract(GOVERNANCE_CONTRACT);
  const { contract: tokenContract } = useContract(TOKEN_CONTRACT);
  

  return {
    governanceContract,
    tokenContract,
  };
};