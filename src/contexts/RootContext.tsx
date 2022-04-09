import {createContext, ReactChild,useState} from "react"

interface RootContextProviderProps{
  children:ReactChild
}

const RootContext = createContext({});

const RootContextProvider = ({children}:RootContextProviderProps)=>{
  const [ActiveRoute, setActiveRoute] = useState("/home")
  const values ={ActiveRoute, setActiveRoute}
  
  return (
  <RootContext.Provider value={values}>
     {children}
  </RootContext.Provider>
  )
}

export default RootContextProvider;
export {RootContext}