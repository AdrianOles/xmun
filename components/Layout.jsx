import React from 'react'
import { Header } from './'
import { Footer } from './'
import {Navbar} from './'

const Layout = ({children}) => {
    return (
      <>
        <div className='flex flex-col p-0 m-0'>
          {/* <Header /> */}
          <Navbar />
          {children}
          <Footer /> 
        </div>
    </>
  )
}

export default Layout