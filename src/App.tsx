import React from 'react';
import {useAuth} from "./hooks/useAuth";
import { AuthenticatedApp } from './pages/AuthenticatedApp';
import { UnAuthenticatedApp } from './pages/UnAuthenticatedApp';
import {Rightbar} from "./components/Rightbar/Rightbar";
import {AppBar, Box, Container, CssBaseline, Drawer, Grid, Stack, Toolbar, Typography} from "@mui/material";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {HomePage} from "./pages/HomePage";
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from "@mui/material/IconButton";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import {AppBarMobileView} from "./components/AppBarMobileView/AppBarMobileView";
import {DrawerMobileView} from "./components/DrawerMobileView/DrawerMobileView";


const drawerSideBarWidth = 240;
const drawerRightBarWidth = 130;

export const App = () => {
    const [mobileOpenSideBar, setMobileOpenSideBar] = React.useState(false);
    const [mobileOpenRightBar, setMobileOpenRightBar] = React.useState(false);

    const handleDrawerToggleSideBar = () => {
        setMobileOpenSideBar(!mobileOpenSideBar);
    };

    const handleDrawerToggleRightBar = () => {
        setMobileOpenRightBar(!mobileOpenRightBar);
    };

  const { user } = useAuth();
  // {user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
  return (
      <>
          <Box sx={{ display: 'flex' }}>
              <CssBaseline />
              <AppBarMobileView
                  drawerSideBarWidth={drawerSideBarWidth}
                  handleDrawerToggleSideBar={handleDrawerToggleSideBar}
                  handleDrawerToggleRightBar={handleDrawerToggleRightBar}
              />
              <DrawerMobileView
                  drawerSideBarWidth={drawerSideBarWidth}
                  mobileOpenSideBar={mobileOpenSideBar}
                  handleDrawerToggleSideBar={handleDrawerToggleSideBar}
                  drawerRightBarWidth={drawerRightBarWidth}
                  mobileOpenRightBar={mobileOpenRightBar}
                  handleDrawerToggleRightBar={handleDrawerToggleRightBar}
              />
          </Box>
          {user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
      </>
  )
}


