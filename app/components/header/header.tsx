import React from 'react'
import Link from 'next/link'


const Header = () => {
  return (
    <div className='Header bg-slate-600 text-white p-3 m-1 border-solid border-2 border-black text-center '>
<ul>
    <li><Link href="./about">About</Link></li>
    <li><Link href="/">Home</Link></li>
</ul>
    </div>
  )
}

export default Header
