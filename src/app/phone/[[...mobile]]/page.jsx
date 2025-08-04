import React from 'react'

export  default async function Phones({params}) {
    const {mobile}=await params
    console.log("momile server",mobile)

    if(mobile.length===2){
        return<p>View the category :{mobile[0]} and mobile is {mobile[1]} </p>
    }else if(mobile.length===1){
        return <p>See and get Mobile: {mobile[0]}</p>
    }
  return (
    <div>Phones : {mobile}</div>
  )
}
