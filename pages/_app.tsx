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


export default function Application({Component,pageProps}:AppProps) {
  
  useEffect(() => {
  const body = document.querySelector("body")  
  if(body){
    body["style"]["margin"] = "0px"
    body["style"]["padding"] = "0px"
    body["style"]["boxSizing"] = "border-box"
  }
  }, [])
  
  return (
  <RootContextProvider>
  <Component {...pageProps}/>
  </RootContextProvider>
  )
}
