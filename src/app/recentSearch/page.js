'use client'


import supabase from '@/config/supabaseClient'
import ResentData from '@/components/recentdata/resentdata'
import MasterLayout from '@/components/masterLayout/masterLayout'

const Dash = () => {
   console.log(supabase)
  return (
    <div>
      <MasterLayout>
        <div className='py-5 px-44'>
        <ResentData />
        </div>
      </MasterLayout>
        
    </div>
  )
}

export default Dash