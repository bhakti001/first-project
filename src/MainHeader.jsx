import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

function MainHeader() {
  return (
    <>
    {/* <Header/> */}
    <Navbar/>
        <Outlet/>
    </>
  )
}


export default MainHeader