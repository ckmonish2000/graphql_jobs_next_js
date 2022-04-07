import React,{useState} from 'react'
import InputWrapper from '@components/wrappers/InputWrapper'
import DateWrapper from "@components/wrappers/DateWrapper"
import { Button,Checkbox, Select } from '@mantine/core'
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

    <br/>

    {/* first budget part */}
    <div className={styles.Add_clients_ip_container_2_1}>
    <InputWrapper
    width="80%"
    className=''
    text='Budget'
    placeholder=''
    styles={{width:"100%"}}
    onChange={()=>{}}
    />

    <InputWrapper
    width="80%"
    className=''
    text='Project'
    placeholder=''
    styles={{width:"80%"}}
    onChange={()=>{}}
    />


    <div className={styles.checkBox_container}>
    <Checkbox
      label="One Time Project"
      color="dark"
      style={{marginBottom:"10px"}}
    />
    <Checkbox
      label="Retainer"
      color="dark"
    />
    </div>

    <DateWrapper
     width="80%"
     className=''
     text='Signup Date'
     placeholder=''
     styles={{width:"90%"}}
     onChange={()=>{}}
    />

    <DateWrapper
     width="80%"
     className=''
     text='Close Date'
     placeholder=''
     styles={{width:"94%"}}
     onChange={()=>{}}
    />
    </div>

    
    <hr className={styles.hr_divider}/>

    {/* second budget part */}
    <div className={styles.Add_clients_ip_container_2_2} style={{marginTop:"20px"}}>
    <InputWrapper
    width="80%"
    className=''
    text='Budget'
    placeholder=''
    styles={{width:"102%"}}
    onChange={()=>{}}
    />


    <div className={styles.checkBox_container}>
    <Checkbox
      label="One Time Project"
      color="dark"
      style={{marginBottom:"10px"}}
    />
    <Checkbox
      label="Retainer"
      color="dark"
    />
    </div>

    <DateWrapper
     width="80%"
     className=''
     text='Signup Date'
     placeholder=''
     styles={{width:"90%"}}
     onChange={()=>{}}
    />

    <DateWrapper
     width="80%"
     className=''
     text='Close Date'
     placeholder=''
     styles={{width:"97.5%"}}
     onChange={()=>{}}
    />
    </div>

    </React.Fragment>
  )
}
