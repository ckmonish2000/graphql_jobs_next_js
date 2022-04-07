import React,{useState} from 'react'
import InputWrapper from '@components/wrappers/InputWrapper'
import SelectWrapper from "@components/wrappers/SelectWrapper"
import styles from "@styles/AddClients.module.scss"
import TeamsWrapper from '@components/wrappers/TeamsWrapper'
import {Button} from "@mantine/core"



export default function Teams() {

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

    

    <TeamsWrapper
    width="20%"
    text='Assigned to'
    placeholder='Anway'
    className={styles.team_wrapper}
    styles={{marginTop:"20px"}}
    onChange={()=>{}}
    list={["","","","",""]}
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


   <Button 
    style={{width:"99%",top:"5px",marginLeft:"18.5px",marginTop:"30px"}}
    // onClick={AddNewField}
    className={styles.upload_btn}>
    Add more team mates
    </Button>

    <div className={styles.flex}>
    <Button 
    style={{width:"99%",top:"5px",marginLeft:"18.5px",marginTop:"25px",height:"55px",background:"#001DFF"}}
    className={styles.upload_btn}>
    Edit
    </Button>

    <Button 
    style={{width:"99%",top:"5px",marginLeft:"18.5px",marginTop:"25px",height:"55px"}}
    className={styles.upload_btn}>
    Save
    </Button>

    </div>

    </React.Fragment>
  )
}
