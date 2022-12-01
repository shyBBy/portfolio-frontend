import React from "react";
import { useAuth } from "../../hooks/useAuth";
import {Box, Drawer} from "@mui/material";
import { Rightbar } from "./Rightbar";
import {CssBaseline} from "@mui/material";

const drawerRightBarWidth = 130;

export const RightbarWrapper = () => {

    const { user } = useAuth();

    const [mobileOpenRightBar, setMobileOpenRightBar] = React.useState(false);
    
    const handleDrawerToggleRightBar = () => {
        setMobileOpenRightBar(!mobileOpenRightBar);
    };

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
                        display: { xs: 'block', sm: 'block', md: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerRightBarWidth },
                    }}
                >
                    {user ? 'admin' : <Rightbar/> }
                </Drawer>
                <Drawer
                    variant="permanent"
                    anchor="right"
                    sx={{
                        display: { xs: 'none', sm: 'none', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerRightBarWidth },
                    }}
                    open
                >
                    {user ? 'admin' : <Rightbar/> }
                </Drawer>
        </>
    )
}