import React from 'react'
import InputWrapper from '@components/InputWrapper'
import { Button } from '@mantine/core'
import styles from "@styles/AddClients.module.scss"

interface clientsProps{
  selected_switch: string,
  setselected_switch:(val:string) => void
}

export default function Clients() {
  return (
    <React.Fragment>
    <h1 className={styles.Add_clients_Heading}>AddClients</h1>

    

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

    <div className={styles.Add_clients_ip_container_2}>
    <InputWrapper
    width="80%"
    className=''
    text='Contact Number'
    placeholder=''
    styles={{width:"75%"}}
    onChange={()=>{}}
    />

    <InputWrapper
    width="80%"
    className=''
    text='Contact Person'
    placeholder='Contact person name'
    styles={{width:"75%"}}
    onChange={()=>{}}
    />

    <InputWrapper
    width="96.2%"
    className=''
    text='Email'
    placeholder='name@companydomain.com'
    styles={{width:"95.2%"}}
    onChange={()=>{}}
    />
    </div>
    </React.Fragment>
  )
}
