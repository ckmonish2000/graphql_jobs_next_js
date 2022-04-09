import React from 'react'
import propType from "./interfaces"

interface PROP{
  val:propType
}

const Card = (prop:PROP)=> {
  const item = prop?.val
  return (
    <div className="m-10 border-4 border-black-900 border-solid rounded-lg p-10">
      {/* organisation Name */}
      <span className="font-bold whitespace-nowrap block my-5">Organisation: {item?.company?.name}</span>

      {/* cities Name */}
      <span className="font-bold whitespace-nowrap block my-5">Cities: {
      (item?.cities && item?.cities?.length > 0) ?
      item?.cities?.map(v=>v?.name)
      :"N/A"}</span>

      {/* countries */}
      <span className="font-bold whitespace-nowrap block my-5">Cities: {
      (item?.cities && item?.cities?.length > 0) ?
      item?.cities?.map(v=>v?.country?.name)
      :"N/A"}</span>

      {/* type */}
      <span className="font-bold whitespace-nowrap block my-5">Cities: {
      (item?.remotes && item?.remotes?.length > 0) ?
      item?.remotes?.map(v=>v?.type)
      :"N/A"}</span>
    </div>
  )
}


export default Card