import React from 'react'
import style from "@styles/AddClients.module.scss"
import { DatePicker } from '@mantine/dates'
import TeamsIconMap from '@components/TeamsIconMap'
import {IoAddOutline} from "react-icons/io5"

interface DateWrapperType{
  text:string,
  placeholder:string,
  className:string,
  styles:React.CSSProperties,
  onChange:any,
  width:string,
  list: string[]
}

export default function TeamsWrapper({list=[""],width="100%",text="",placeholder="",className="",styles={},onChange=()=>{}}:DateWrapperType) {
  return (
    <div style={{width: width,marginLeft: 20,marginRight:20}}>

      {text!=="" && <div 
      style={{
        textAlign:"left",
        font:"normal normal bold 15px/22px Montserrat",
        letterSpacing:"0px",
        color:"#383838",
        opacity: 1,
        margin:"10px 5px",
      }}
      >{text}</div>}

      <div 
      className={className}
      style={{
        ...styles
      }}>
       
       <TeamsIconMap list={list}/>

      <span className={style.add_icon_box}>
      <IoAddOutline/>
      </span>

       </div>
    </div>
  )
}