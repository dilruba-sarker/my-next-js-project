import React from 'react'



export async function generateMetadata({ params, searchParams }, parent) {
  const id = (await params).id
 
 
 
  return {
    title: `title ${id}`,
    description: `this is the blog of ${id}`,
  }
}
 
export default function DynamicBlogg({params}) {
    const {id}=params
  return (
    <div>dynamic Blogg {id}</div>
  )
}
