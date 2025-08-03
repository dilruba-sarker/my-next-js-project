import React from 'react'

export default  async function DetailBlog({  params}) {
    const {id}=await params
  return (
    <div>Detail Blog : {id}</div>
  )
}
