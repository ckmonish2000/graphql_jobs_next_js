import {AppProps} from "next/app"
import { useEffect } from "react"
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import RootContextProvider from "@contexts/RootContext"
import "@styles/global.css"


export default function Application({Component,pageProps}:AppProps) {
  
  useEffect(() => {
  const body = document.querySelector("body")  
  if(body){
    body["style"]["margin"] = "0px"
    body["style"]["padding"] = "0px"
    body["style"]["boxSizing"] = "border-box"
  }
  }, [])

  const client = new ApolloClient({
    uri: 'https://api.graphql.jobs/',
    cache: new InMemoryCache()
  });
  
  return (
  <ApolloProvider client={client}>
  {/* user contexts */}
  <RootContextProvider>
  {/* component logic */}
  <Component {...pageProps}/>
  </RootContextProvider>
  </ApolloProvider>
  )
}
