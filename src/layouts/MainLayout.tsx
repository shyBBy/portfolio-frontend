import React, { FC } from 'react';
import { Grid, Box } from '@mui/material';
import { SidebarWrapper } from '../components/Sidebar/SidebarWrapper';
import { RightbarWrapper } from '../components/Rightbar/RightbarWrapper';
import { AppBarMobileView } from '../components/AppBarMobileView/AppBarMobileView';


const drawerSideBarWidth = 240;
const drawerRightBarWidth = 130;

interface Props {
    children: JSX.Element;
}

export const MainLayout: FC<Props> = ({ children }) => (
    
    <div>
        <AppBarMobileView/>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={2} sm={4} md={4}>
                    <SidebarWrapper/>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <main>{children}</main>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <RightbarWrapper/>
                </Grid>
            </Grid>
        </Box>
    </div>
);