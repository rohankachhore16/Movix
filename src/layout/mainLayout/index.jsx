import React, { useState } from "react";
import AppbarTool from "./Appbar";
import DrawerTool from "./Drawer";
import { Outlet } from "react-router-dom";
import { Box, CssBaseline, styled } from "@mui/material";

const MainLayout = () => {
  const [open, setOpen] = useState(false);
  const drawerWidth = 240;

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));

  const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `-${drawerWidth}px`,
      ...(open && {

        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
  
        marginLeft: 0,
      }),

      ...(!open &&{
        marginLeft:"-186px",
      })
    })
  );

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppbarTool open={open} setOpen={setOpen} />
        <DrawerTool open={open} setOpen={setOpen} />
        <Main open={open}>
          <DrawerHeader />

          <Outlet />
        </Main>
      </Box>
    </>
  );
};

export default MainLayout;
