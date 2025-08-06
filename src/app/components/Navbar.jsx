import Link from 'next/link'
import React from 'react'

const Navbar = () => {

const navItems=[
    {name:"Home",href:"/"},
    {name:"About",href:"/about"},
    {name:"Contract",href:"/contract"},
    {name:"Blog",href:"/blogg"},
]

  return (
 <header className='flex justify-between max-w-5xl mx-auto items-center border-b'>
       <div >
        <Link href="/">bike sharing</Link>
      
</div>
       <ul className='flex gap-4'>
      {navItems.map(item=><li key={item.name}> <Link href={item.href}>{item.name}</Link> </li>)}
       </ul> 
 </header>
  )
}

export default Navbar