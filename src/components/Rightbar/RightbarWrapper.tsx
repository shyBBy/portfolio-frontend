import React, { useContext } from "react";
import { useAuth } from "../../hooks/useAuth";
import {Box, Drawer} from "@mui/material";
import { Rightbar } from "./Rightbar";
import {CssBaseline} from "@mui/material";
import { MobileViewContext } from "../../context/MobileViewContext";


export const RightbarWrapper = () => {

    const context = useContext(MobileViewContext);

    if(!context) return null;

    const {mobileOpenRightBar, handleDrawerToggleRightBar, drawerRightBarWidth} = context;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { user } = useAuth();


    return(
            <>
            <CssBaseline />
            {/* <Box component="div"
                 sx={{ width: { sm: drawerSideBarWidth }, flexShrink: { sm: 0 } }}
                 aria-label="mailbox folders"
            >
                
            </Box> */}
                <Drawer
                    variant="temporary"
                    anchor="right"
                    open={mobileOpenRightBar}
                    onClose={handleDrawerToggleRightBar}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerRightBarWidth },
                    }}
                >
                    {user ? 'admin' : <Rightbar/> }
                </Drawer>
                <Drawer
                    variant="permanent"
                    anchor="right"
                    sx={{
                        display: { xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block'},
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerRightBarWidth },
                    }}
                    open
                >
                    {user ? 'admin' : <Rightbar/> }
                </Drawer>
        </>
    )
}