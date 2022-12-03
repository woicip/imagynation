import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ImagyContextProvider, value } from '../components/Context/Context';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ImagyContextProvider value={value}>
      <Component {...pageProps} />
    </ImagyContextProvider>
  )
}
