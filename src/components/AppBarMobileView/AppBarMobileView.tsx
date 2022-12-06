import React, { createContext, useContext } from 'react'
import {AppBar, Box, Grid, Stack, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from "@mui/material/IconButton";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { MobileViewContext } from '../../context/MobileViewContext';


export const AppBarMobileView = () => {

    const context = useContext(MobileViewContext);

    if(!context) return null;

    const {drawerSideBarWidth, handleDrawerToggleSideBar, handleDrawerToggleRightBar} = context;

    return(
        <>
            <AppBar
                position="fixed"
                sx={{
                    width: { md: `calc(100% - ${drawerSideBarWidth}px)` },
                    ml: { md: `${drawerSideBarWidth}px`  },
                    display: { sm: 'none', md: 'none' ,lg: 'none', xl:'none'},
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
                                sx={{ mr: 2, display: { md: 'none' } }}
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
                                sx={{ mr: 2, display: { md: 'none' } }}
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
