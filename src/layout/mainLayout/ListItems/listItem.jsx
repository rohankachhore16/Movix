import React from "react";
import { ROUTE_DEFINATION } from "../../../utils/constant/routeConstant";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import {
  AccountBox,
  ContactPage,
  Dashboard,
  East,
  Inbox,
  Info,
  Logout,
  Mail,
  MiscellaneousServices,
} from "@mui/icons-material";
import {  useNavigate } from "react-router-dom";
import { removeToken } from "../../../redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";

const ItemList = ({open}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const CustomerList = [
    {
      id: "1",
      icon: <Dashboard />,
      value: "Dashboard",
      path: ROUTE_DEFINATION.BASE,
    },

    {
      id: "2",

      icon: <Info />,
      value: "About",
      path: ROUTE_DEFINATION.ABOUT,
    },
    {
      id: "3",

      icon: <ContactPage />,
      value: "Contact",
      path: ROUTE_DEFINATION.CONTACT,
    },

    {
      id: "4",
      icon: <MiscellaneousServices />,
      value: "Service",
      path: ROUTE_DEFINATION.SERVICES,
    },
  ];

  const AdminList = [
    {
      id: "1",
      icon: <Dashboard />,
      value: "Dashboard",
      path: ROUTE_DEFINATION.BASE,
    },

    {
      id: "2",

      icon: <Info />,
      value: "Cateogries request",
      path: ROUTE_DEFINATION.CATEOGRIES_REQUEST,
    },
    {
      id: "3",

      icon: <ContactPage />,
      value: "Cateogries Total",
      path: ROUTE_DEFINATION.CATEOGRIES_TOTAL,
    },

   
  ];


  const handleLogout = () => {
    dispatch(removeToken())
  } 

  const user = useSelector((state)=> state?.profile?.data)
  const roleLogin= user?.role?.toUpperCase();  
const sidebarItems= roleLogin ==="ADMIN" ? AdminList: CustomerList
const mainListItems=[...sidebarItems]
  return (
    <>
      <Stack display="flex" justifyContent="space-between" height="100%">
        <Box>
          {mainListItems.map((item, index) => {
            const { id, icon, value, path } = item;
            return (
              <ListItem key={index} disablePadding>
                <ListItemButton onClick={() => navigate(path)}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={value} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </Box>
        <Box >
          <Divider />

          <List>
            <ListItem k sx={{ display: 'block',paddingLeft:"0px" }} onClick={()=> navigate(ROUTE_DEFINATION.PROFILE)}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  // px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,  
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
     <AccountBox/>
                </ListItemIcon>
                <ListItemText primary="Profile" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            <ListItem k sx={{ display: 'block',paddingLeft:"0px" }} onClick={handleLogout} >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  // px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
     <East/>
                </ListItemIcon>
                <ListItemText primary="Log out" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
        </List>
          {/* {["Profile", "Logout"].map((item, index) => {
            return (

              <ListItem key={index} sx={{ paddingLeft: "0px" }}>
                <ListItemButton
                  onClick={() => {

                    if (index  !== 1) {
                      console.log(index,"_________index")
                      navigate(ROUTE_DEFINATION.PROFILE)
                    }
                    else {
                      dispatch(removeToken())


                    }


                  }
                  }
                >
                  <ListItemIcon>
                    {index % 1 === 0 ? <AccountBox /> : <East />}
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            )
          }
          )} */}
        </Box>
      </Stack>
    </>
  );
};

export default ItemList;
