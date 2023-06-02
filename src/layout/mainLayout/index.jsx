import React from 'react'
import Appbar from './Appbar'
import Drawer from './Drawer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
      <Appbar/>
      <Drawer/>
      <Outlet/>
    </>
  )
}

export default MainLayout
