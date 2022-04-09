import RootContextProvider from "@contexts/RootContext"
import {AppProps} from "next/app"

export default function Application({Component,pageProps}:AppProps) {
  return (
  <RootContextProvider>
  <Component {...pageProps}/>
  </RootContextProvider>
  )
}
