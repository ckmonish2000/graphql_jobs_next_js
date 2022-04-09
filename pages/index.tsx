import { useQuery } from '@apollo/client'
import React from 'react'
import { All_Jobs } from '@Api/queries'
import Card from "@components/Card"
import propType from '@components/interfaces'


export default function test() {
  const {data,loading,error} = useQuery(All_Jobs)
  console.log(data,loading,error)

  if(loading) return <h1>Loading...</h1>
  
  return (
    <div className="grid grid-cols-4">{data?.jobs?.map((v:propType)=>{
      return <Card val={v}/>
    })}</div>
  )
}
