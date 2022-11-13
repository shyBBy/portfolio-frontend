import React from 'react'
import {AppBar, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from "@mui/material/IconButton";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

export const AppBarMobileView = (props: any) => {

    const {drawerSideBarWidth, handleDrawerToggleSideBar,handleDrawerToggleRightBar } = props;

    return(
        <>
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerSideBarWidth}px)` },
                    ml: { sm: `${drawerSideBarWidth}px` },
                    display: { xl: "none", lg: 'none', sm: 'none'}
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggleSideBar}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <FormatListBulletedIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">

                    </Typography>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggleRightBar}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>

                </Toolbar>
            </AppBar>
        </>
    )
}