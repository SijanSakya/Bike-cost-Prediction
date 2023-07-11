import React from 'react'
import Navbar from './navbar'
import Footer from './footer'

const MasterLayout = ({ children }) => {
  return (
    <div className='h-full w-full'>
       <Navbar />
       {children}
       <Footer />
    </div>
  )
}

export default MasterLayout