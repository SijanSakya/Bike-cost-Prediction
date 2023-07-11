import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-custom-nav/50 fixed top-0 z-10 w-full bg-opacity-80 '>
        <div className='flex justify-between px-7 py-3'>
            <div>
               <p>Cost Prediction</p>
            </div>
            <div>
              <Link href='/login'>
              <button>Login</button></Link>
                 
            </div>

        </div>
    </div>
  )
}

export default Navbar