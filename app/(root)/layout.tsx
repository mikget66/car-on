import React from 'react'

import Navbar from '../components/Navbar'

export default function Layout({children}:{children: React.ReactNode}) {
  return (
    <div className='relative w-full'>
      <Navbar/>
      {children}
      {/* <Footer/> */}
    </div>
  )
}
