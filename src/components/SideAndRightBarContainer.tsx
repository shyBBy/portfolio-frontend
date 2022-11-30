import React from 'react';
import { AppBarMobileView } from './AppBarMobileView/AppBarMobileView';
import { DrawerMobileView } from './DrawerMobileView/DrawerMobileView';
import {CssBaseline} from "@mui/material";

const drawerSideBarWidth = 240;
const drawerRightBarWidth = 130;


export const SideAndRightBarContainer = () =>{

    const [mobileOpenSideBar, setMobileOpenSideBar] = React.useState(false);
    const [mobileOpenRightBar, setMobileOpenRightBar] = React.useState(false);

    const handleDrawerToggleSideBar = () => {
        setMobileOpenSideBar(!mobileOpenSideBar);
    };

    const handleDrawerToggleRightBar = () => {
        setMobileOpenRightBar(!mobileOpenRightBar);
    };


    return (
        <>
            <AppBarMobileView
                    drawerSideBarWidth={drawerSideBarWidth}
                    handleDrawerToggleSideBar={handleDrawerToggleSideBar}
                    handleDrawerToggleRightBar={handleDrawerToggleRightBar}
                />
                <CssBaseline />
                <DrawerMobileView
                    drawerSideBarWidth={drawerSideBarWidth}
                    mobileOpenSideBar={mobileOpenSideBar}
                    handleDrawerToggleSideBar={handleDrawerToggleSideBar}
                    drawerRightBarWidth={drawerRightBarWidth}
                    mobileOpenRightBar={mobileOpenRightBar}
                    handleDrawerToggleRightBar={handleDrawerToggleRightBar}
                />

        </>
    )
}