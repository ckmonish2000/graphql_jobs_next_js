import React,{useState} from 'react'
import InputWrapper, { DateWrapper } from '@components/InputWrapper'
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

    <div className={styles.Add_clients_ip_container_2}>
    <InputWrapper
    width="80%"
    className=''
    text='Budget'
    placeholder=''
    styles={{width:"75%"}}
    onChange={()=>{}}
    />

    <InputWrapper
    width="80%"
    className=''
    text='Project'
    placeholder=''
    styles={{width:"75%"}}
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
    {/* <Select
    style={{width:"100%"}}
      placeholder="Pick one"
      radius="md"
      size="lg"
      data={[
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular' },
        { value: 'svelte', label: 'Svelte' },
        { value: 'vue', label: 'Vue' },
      ]}
    /> */}

    </div>

    </React.Fragment>
  )
}
