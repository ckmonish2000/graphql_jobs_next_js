import React from 'react'
import { Input } from '@mantine/core';
import style from "@styles/login.module.scss"

interface InputWrapperType{
  text:string,
  placeholder:string,
  className:string,
  styles:React.CSSProperties,
  onChange:(val:React.ChangeEvent) => void,
  width:string
}

export default function InputWrapper({width="100%",text="",placeholder="",className="",styles={},onChange=()=>{}}:InputWrapperType) {
  return (
    <div style={{width: width}}>

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

      <Input
          style={{height:"55px",margin:"0px",...styles}}
          placeholder={placeholder}
          radius="md"
          size="lg"
          className={style.ip_root_style}
          onChange={onChange}
        />
    </div>
  )
}
