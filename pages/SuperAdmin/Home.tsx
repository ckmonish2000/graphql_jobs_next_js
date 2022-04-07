import React,{useState} from 'react'
import styles from "@styles/AddClients.module.scss"
import Clients from '@components/Add/clients'
import GeneralLayout from '@layouts/GeneralLayout'


// add clients imports

export default function AddClients() {
  const [selected_switch, setselected_switch] = useState("clients")

  return (
    <GeneralLayout
    children={
     <React.Fragment>
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

       {selected_switch === "clients" && <Clients selected_switch={selected_switch} setselected_switch={setselected_switch}/>}
     </React.Fragment>
    }
    />
  )
}
