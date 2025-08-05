import React from 'react'

export default function DynamicBlogg({params}) {
    const {id}=params
  return (
    <div>dynamic Blogg {id}</div>
  )
}
