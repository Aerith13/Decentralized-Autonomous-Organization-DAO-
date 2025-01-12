import type { AppProps } from 'next/app'
import { ThemeProvider } from '../ThemeContext'
import '../styles/globals.css'
import { ThirdwebProvider } from "thirdweb/react"
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  const isHome = Component.name === 'Home'

  return (
    <ThirdwebProvider>
      <ThemeProvider>
        {isHome ? (
          <Component {...pageProps} />
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </ThemeProvider>
    </ThirdwebProvider>
  )
}

export default MyApp 