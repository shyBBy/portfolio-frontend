import React from 'react'
import {AppBar, Box, Grid, Stack, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from "@mui/material/IconButton";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

const drawerSideBarWidth = 240;
const drawerRightBarWidth = 130;


export const AppBarMobileView = () => {

    const [mobileOpenSideBar, setMobileOpenSideBar] = React.useState(false);
    const [mobileOpenRightBar, setMobileOpenRightBar] = React.useState(false);

    const handleDrawerToggleSideBar = () => {
        setMobileOpenSideBar(!mobileOpenSideBar);
    };

    const handleDrawerToggleRightBar = () => {
        setMobileOpenRightBar(!mobileOpenRightBar);
    };



    return(
        <>
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerSideBarWidth}px)`, md: `calc(100% - ${drawerSideBarWidth}px)` },
                    ml: { sm: `${drawerSideBarWidth}px`, md: `${drawerSideBarWidth}px`  },
                    display: { lg: 'none', xl:'none'}
                }}
            >
                <Toolbar>
                    <Grid container>
                        <Grid xs={4}>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggleSideBar}
                                sx={{ mr: 2, display: { sm: 'none' } }}
                            >
                                <FormatListBulletedIcon />
                            </IconButton>
                        </Grid>
                        <Grid xs={8} textAlign={'right'}>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggleRightBar}
                                sx={{ mr: 2, display: { sm: 'none' } }}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    )
}