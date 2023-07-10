import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

function MainHeader() {
  return (
    <>
    <Header/>
        <Outlet/>
    </>
  )
}

export default MainHeader