import React,{useState} from 'react'
import InputWrapper from '@components/InputWrapper'
import SelectWrapper from "@components/SelectWrapper"
import styles from "@styles/AddClients.module.scss"


export default function Teams() {
  const [contactDetails, setcontactDetails] = useState([{}])

  const AddNewField =()=>{
    const val = [...contactDetails]
    val.push({})
    console.log(val)
    setcontactDetails(val)
  }

  return (
    <React.Fragment>

    {/* level 1 */}
    <div className={styles.Add_clients_ip_container}>
    <SelectWrapper
    width="80%"
    className=''
    text='Add Client Name'
    placeholder='Company name'
    styles={{width:"95%"}}
    onChange={()=>{}}
    />

    <InputWrapper
    width="80%"
    className=''
    text='Add Project Name'
    placeholder='Company name'
    styles={{width:"97%"}}
    onChange={()=>{}}
    />
    </div>

    <div className={styles.Add_clients_ip_container} style={{marginTop:"50px"}}>
    <SelectWrapper
    width="80%"
    className=''
    text='Add Department'
    placeholder='Company name'
    styles={{width:"95%"}}
    onChange={()=>{}}
    />

    <InputWrapper
    width="80%"
    className=''
    text='Assigned to'
    placeholder='Anway'
    styles={{width:"97%"}}
    onChange={()=>{}}
    />
    </div>

    </React.Fragment>
  )
}
