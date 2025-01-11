import type { AppProps } from 'next/app'
import { ThemeProvider } from '../ThemeContext'
import '../styles/globals.css'
import { ThirdwebProvider } from "thirdweb/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider>
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
    </ThirdwebProvider>
  )
}

export default MyApp 