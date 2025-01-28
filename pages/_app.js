import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains"; // Import Sepolia chain
import '../src/styles/globals.css'; // Global styles

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      activeChain={Sepolia} // Set active chain to Sepolia
      clientId="0837a3b87509199141bce2020f9d9d53" // Replace with your thirdweb client ID
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;