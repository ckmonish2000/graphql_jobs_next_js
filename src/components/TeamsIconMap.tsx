import {Avatar} from "@mantine/core"
import React from 'react'

interface propType{
  list: string[]
}

export default function TeamsIconMap({list}:propType) {
  return (
    <div style={{display: 'flex'}}>
      {list?.map((v,idx)=>{
        return <Avatar radius="xl" style={{position:"relative",left:`-${idx*15}px`}}/>
      })}
    </div>
  )
}
