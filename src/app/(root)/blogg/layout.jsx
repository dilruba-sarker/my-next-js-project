import React from 'react'

const BloggLayout = ({children}) => {
  return (
    <div className='flex justify-between items-start'>
<div>{children}</div>
<div className='text-xl w-56'>Sidebar</div>


    </div>
  )
}

export default BloggLayout