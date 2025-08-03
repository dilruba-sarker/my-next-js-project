import React from 'react'

export default async function Category({params}) {
  const {category}=await params
  return (
    <div>
     <h1> Category Page:{category} </h1>
     <ul>
      <li>Book</li>
      <li>Pen</li>
      <li>Phone</li>
      <li>Electronics</li>
     </ul>

    </div>
  )
}
