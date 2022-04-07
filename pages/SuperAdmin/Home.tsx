import GeneralLayout from '@layouts/GeneralLayout'

// add clients imports
import styles from "@styles/AddClients.module.scss"
import React,{useState} from 'react'

export default function AddClients() {
  const [selected_switch, setselected_switch] = useState("clients")

  return (
    <GeneralLayout
    children={
      <React.Fragment>
      <h1 className={styles.Add_clients_Heading}>AddClients</h1>

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

      </React.Fragment>
    }
    />
  )
}
