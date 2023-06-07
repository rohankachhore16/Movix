import React from 'react'
import Appbar from './Appbar'
import Drawer from './Drawer'
import { Outlet } from 'react-router-dom'
import { Box, CssBaseline } from '@mui/material'

const MainLayout = () => {
  return (
    <>

    <Box sx={{display:"flex" }}>
<CssBaseline/>
    <Appbar/>
      <Drawer/>
      <Outlet/>

    </Box>

    </>
  )
}

export default MainLayout
