import { ConnectWallet, useAddress } from "@thirdweb-dev/react";

export default function WalletButton() {
  const address = useAddress();

  return (
    <div>
      <ConnectWallet 
        theme="dark"
        btnTitle="Connect Wallet"
        modalTitle="Choose your wallet"
        style={{
          padding: "10px 20px",
          backgroundColor: "#0070f3",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      />
      {address && (
        <p>Connected wallet: {address.substring(0, 6)}...{address.substring(38)}</p>
      )}
    </div>
  );
}