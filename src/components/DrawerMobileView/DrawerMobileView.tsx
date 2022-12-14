import React from 'react'
import {Box, Drawer} from "@mui/material";
import {Sidebar} from "../Sidebar/Sidebar";
import {Rightbar} from "../Rightbar/Rightbar";
import {useAuth} from "../../hooks/useAuth";
import {AuthenticatedApp} from "../../pages/AuthenticatedApp";
import {UnAuthenticatedApp} from "../../pages/UnAuthenticatedApp";
import {AdminSidebarMenu} from "../Admin/AdminSidebarMenu/AdminSidebarMenu";

export const DrawerMobileView = (props: any) => {

    const { user } = useAuth();

    const {drawerSideBarWidth, mobileOpenSideBar, handleDrawerToggleSideBar, drawerRightBarWidth, mobileOpenRightBar, handleDrawerToggleRightBar} = props;

    return(
        <>
            <Box component="div"
                 sx={{ width: { sm: drawerSideBarWidth }, flexShrink: { sm: 0 } }}
                 aria-label="mailbox folders"
            >
                <Drawer
                    variant="temporary"
                    open={mobileOpenSideBar}
                    onClose={handleDrawerToggleSideBar}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'block', md: 'block'},
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerSideBarWidth },
                    }}
                >
                    {user ? <AdminSidebarMenu/> : <Sidebar/> }
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'none'},
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerSideBarWidth },
                    }}
                    open
                >
                    {user ? <AdminSidebarMenu/> : <Sidebar/> }
                </Drawer>
            </Box>
                <Drawer
                    variant="temporary"
                    anchor="right"
                    open={mobileOpenRightBar}
                    onClose={handleDrawerToggleRightBar}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none'},
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerRightBarWidth },
                    }}
                >
                    {user ? <AdminSidebarMenu/> : <Rightbar/> }
                </Drawer>
                <Drawer
                    variant="permanent"
                    anchor="right"
                    sx={{
                        display: { xs: 'none', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerRightBarWidth },
                    }}
                    open
                >
                    {user ? <AdminSidebarMenu/> : <Rightbar/> }
                </Drawer>
        </>
    )
}