import React,{useState} from 'react'
import InputWrapper from '@components/InputWrapper'
import { Button } from '@mantine/core'
import styles from "@styles/AddClients.module.scss"
import AddDetailsCompo from './AddDetailsCompo'

interface clientsProps{
  selected_switch: string,
  setselected_switch:(val:string) => void
}

export default function Clients() {
  const [contactDetails, setcontactDetails] = useState([{}])

  const AddNewField =()=>{
    const val = [...contactDetails]
    val.push({})
    console.log(val)
    setcontactDetails(val)
  }

  console.log(contactDetails)
  return (
    <React.Fragment>

    {/* input section */}
    <div className={styles.Add_clients_ip_container}>
    <InputWrapper
    width="80%"
    className=''
    text='Client Name'
    placeholder='Company name'
    styles={{width:"85.5%"}}
    onChange={()=>{}}
    />

    <Button className={styles.upload_btn}>Upload Logo</Button>
    </div>

    {contactDetails?.map(v=><AddDetailsCompo key={Math.random()}/>)}
    
    <Button 
    style={{width:"99%",top:"5px",marginLeft:"18.5px"}}
    onClick={AddNewField}
    className={styles.upload_btn}>
    Add more contacts
    </Button>

    </React.Fragment>
  )
}
