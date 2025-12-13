import React from 'react'

function Nav() {
  return (
    <div className='w-full h-16 bg-green-500 flex fixed items-center'>
        <div className='pl-8 w-[70%]'>
            <h1 className='font-bold '>NAMEXYZ</h1>
        </div>
        <div className=''>
            <ul className='flex gap-6 p-6'>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
        </div>
      
    </div>
  )
}

export default Nav
