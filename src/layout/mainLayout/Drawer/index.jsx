import { ChevronLeft, Inbox, Mail } from "@mui/icons-material";
import {
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { removeToken } from "../../../redux/slices/authSlice";

const drawerWidth = 240;

const DrawerTool = ({ open, setOpen }) => {
  const dispatch=useDispatch()

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));
  const handleLogout=()=>{
    dispatch(removeToken())
  }
  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,

          '& .MuiDrawer-paper': {
            ...(open&&{
              width: drawerWidth,
              boxSizing: 'border-box',
            }),
            ...(!open&&{
              width: "60px",
              visibility: "visible!important",
              transform:"none!important",
              overflow:"hidden"
              // boxSizing: 'border-box',
            })
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          {/* h1 */}
        </DrawerHeader>
        <Divider />
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <Inbox /> : <Mail />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <Inbox /> : <Mail />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Button onClick={handleLogout} variant="contained"> LogOut</Button>
      </Drawer>
    </>
  );
};

export default DrawerTool;
