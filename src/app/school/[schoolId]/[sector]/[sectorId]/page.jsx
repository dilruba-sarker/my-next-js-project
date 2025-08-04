import React from 'react'

export default async function SectorDetails({params}) {
    const {sectorId}=await params

  return (
    <div>Sector Details: {sectorId} </div>
  )
}
