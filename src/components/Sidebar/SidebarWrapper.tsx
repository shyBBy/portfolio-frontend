import React, { useContext } from 'react'
import {Box, Drawer} from "@mui/material";
import { useAuth } from '../../hooks/useAuth';
import { Sidebar } from './Sidebar';
import { AdminSidebarMenu } from '../Admin/AdminSidebarMenu/AdminSidebarMenu';
import {CssBaseline} from "@mui/material";
import { MobileViewContext } from '../../context/MobileViewContext';


export const SidebarWrapper = () => {
    const context = useContext(MobileViewContext);

    if(!context) return null;

    const {drawerSideBarWidth, mobileOpenSideBar, handleDrawerToggleSideBar} = context;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { user } = useAuth();

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
                        display: { xs: 'block', sm: 'none'},
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerSideBarWidth },
                    }}
                >
                    {user ? <AdminSidebarMenu/> : <Sidebar/> }
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block'},
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