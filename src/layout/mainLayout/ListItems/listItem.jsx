import React from "react";
import { ROUTE_DEFINATION } from "../../../utils/constant/routeConstant";
import {
  Box,
  Divider,
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
import { useNavigate } from "react-router-dom";
import { removeToken } from "../../../redux/slices/authSlice";
import { useDispatch } from "react-redux";

const ItemList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const mainListItems = [
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

  const handleLogout = () => {
    dispatch(removeToken())
  }
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
          {["Profile", "Logout"].map((item, index) => {
            return (

              <ListItem key={index} sx={{ paddingLeft: "0px" }}>
                <ListItemButton
                  onClick={() => {

                    if (index === 0) {
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
          )}
        </Box>
      </Stack>
    </>
  );
};

export default ItemList;
