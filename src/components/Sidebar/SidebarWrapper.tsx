import React from 'react'
import {Box, Drawer} from "@mui/material";
import { useAuth } from '../../hooks/useAuth';
import { Sidebar } from './Sidebar';
import { AdminSidebarMenu } from '../Admin/AdminSidebarMenu/AdminSidebarMenu';
import {CssBaseline} from "@mui/material";

const drawerSideBarWidth = 240;


export const SidebarWrapper = () => {

    const { user } = useAuth();

    const [mobileOpenSideBar, setMobileOpenSideBar] = React.useState(false);
    const handleDrawerToggleSideBar = () => {
        setMobileOpenSideBar(!mobileOpenSideBar);
    };

    return(
        <>
            <CssBaseline />
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
                        display: { xs: 'block', sm: 'block'},
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerSideBarWidth },
                    }}
                >
                    {user ? <AdminSidebarMenu/> : <Sidebar/> }
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block'},
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerSideBarWidth },
                    }}
                    open
                >
                    {user ? <AdminSidebarMenu/> : <Sidebar/> }
                </Drawer>
            </Box>   
        </>
    )
}