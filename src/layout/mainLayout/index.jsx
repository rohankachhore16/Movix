import React from 'react'
import AppbarTool from './Appbar'
import { Outlet } from 'react-router-dom'
import { Box, CssBaseline } from '@mui/material'
import DrawerTool from './Drawer'

const MainLayout = () => {

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
  return (
    <>

    <Box sx={{display:"flex" }}>
<CssBaseline/>
    <AppbarTool/>
      <DrawerTool/>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />

      <Outlet/>
      </Box>

    </Box>

    </>
  )
}

export default MainLayout
