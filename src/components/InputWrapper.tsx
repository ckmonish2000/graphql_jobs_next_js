import React from 'react'
import { Input } from '@mantine/core';

interface InputWrapperType{
  text:string,
  placeholder:string,
  className:string,
  styles:React.CSSProperties,
  onChange:(val:React.ChangeEvent) => void
}

export default function InputWrapper({text="",placeholder,className,styles,onChange}:InputWrapperType) {
  return (
    <div>
      {text!=="" && text}

      <Input
        style={styles}
          placeholder={placeholder}
          radius="md"
          size="lg"
          className={className}
          onChange={onChange}
        />
    </div>
  )
}
