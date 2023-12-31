import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-custom-nav/50 fixed top-0 z-10 w-full bg-opacity-80 '>
        <div className='flex justify-between px-7 py-3'>
            <div>
              <Link href='/'>
              <p>Cost Prediction</p>
              </Link>
             
            </div>
            <div>
              <Link href='/login'>
              <button>Logout</button></Link>
                 
            </div>

        </div>
    </div>
  )
}

export default Navbar