import { ChevronLeft, Inbox, Mail } from "@mui/icons-material";
import {
  Button,
  Divider,

  List,

  Stack,
  styled,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { removeToken } from "../../../redux/slices/authSlice";
import MuiDrawer from '@mui/material/Drawer';
import ItemList from "../ListItems/listItem";
const drawerWidth = 240;

const DrawerTool = ({ open, setOpen }) => {
  const dispatch = useDispatch()

  const drawerWidth = 240;

  const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  });

  const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
  const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
    }),
  );

  const handleLogout = () => {
    dispatch(removeToken())
  }
  return (
    <>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>

        </DrawerHeader>
        <Divider />

        <List sx={{height:"100%"}}>
          <ItemList {...{open,setOpen}} />

        </List>
        {/* <Button onClick={handleLogout} variant="contained"> LogOut</Button> */}
      </Drawer>
    </>
  );
};

export default DrawerTool;
