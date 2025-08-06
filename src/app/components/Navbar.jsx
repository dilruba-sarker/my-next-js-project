"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {
const pathname=usePathname()
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
      {navItems.map(item=>{

        const isActive=pathname===item.href
        return(
          <li key={item.name}> <Link className={`px-3 bg-amber-600 ${isActive?"bg-blue-600":""}`} href={item.href}>{item.name}</Link> </li>
        )
      })}
       </ul> 
 </header>
  )
}

export default Navbar