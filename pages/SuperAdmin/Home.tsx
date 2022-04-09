import React,{useState,useContext} from 'react'
import styles from "@styles/AddClients.module.scss"
import Clients from '@components/Add/clients'
import GeneralLayout from '@layouts/GeneralLayout'
import Teams from '@components/Add/Teams'
import { RootContext } from '@contexts/RootContext'


// add clients imports

export default function AddClients() {
  const RootCtx = useContext(RootContext);
  const [selected_switch, setselected_switch] = useState("clients")

  console.log(RootCtx)
  return (
    <GeneralLayout
    children={
     <React.Fragment>
    
    <h1 className={styles.Add_clients_Heading}>Add {selected_switch==="clients"?"Clients":"Teams"}</h1>

    {/* selecters */}
    <div className={styles.root_selector_container}>
    
    <div 
    onClick={()=>{setselected_switch("clients")}}
    className={selected_switch==="clients" ?styles.switch_btns_active:styles.switch_btns_deactive}>
    Clients
    </div>

    <div 
    onClick={()=>{setselected_switch("teams")}}
    className={selected_switch==="teams" ?styles.switch_btns_active:styles.switch_btns_deactive}>
    Teams
    </div>
    </div>

       {selected_switch === "clients" && <Clients/>}
       {selected_switch === "teams" && <Teams/>}

     </React.Fragment>
    }
    />
  )
}
