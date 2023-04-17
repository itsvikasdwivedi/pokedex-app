import '@component/styles/globals.css'
import { ApolloProvider,InMemoryCache, ApolloClient } from '@apollo/client'
import '../styles/Home.module.css'

const client = new ApolloClient({
  uri: 'https://graphql-pokemon2.vercel.app/',
  cache: new InMemoryCache()
})

export default function App({ Component, pageProps }) {
  return  (
  <ApolloProvider client={client}>
  <Component {...pageProps} />
  </ApolloProvider>
)}
