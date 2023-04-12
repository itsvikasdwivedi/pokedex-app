import { GlobalProvider } from '@component/Context/global'
import '@component/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <>
  <GlobalProvider>
  <Component {...pageProps} />
  </GlobalProvider>
  </>
}
