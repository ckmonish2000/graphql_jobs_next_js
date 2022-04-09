import { useQuery } from '@apollo/client'
import React from 'react'
import { All_Jobs } from 'src/Apis/queries'

export default function test() {
  const {data,loading,error} = useQuery(All_Jobs)
  console.log(data,loading,error)

  if(loading) return <h1>Loading...</h1>
  
  return (
    <div>test</div>
  )
}
