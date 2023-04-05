import React from 'react'
import { Header } from './'
import { Footer } from './'
import {Navbar} from './'

const Layout = ({children}) => {
    return (
      <>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet"/>
        
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