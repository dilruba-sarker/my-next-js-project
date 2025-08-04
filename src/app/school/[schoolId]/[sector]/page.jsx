import React from 'react'

export default async function Sector({params}) {

    const {sector}=await params
  return (
    <div>Sector:{sector}</div>
  )
}
