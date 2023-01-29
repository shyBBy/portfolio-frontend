import React, { FC } from 'react';
import {Grid, Box, CssBaseline, Container} from '@mui/material';
import { SidebarWrapper } from '../components/Sidebar/SidebarWrapper';
import { RightbarWrapper } from '../components/Rightbar/RightbarWrapper';
import { AppBarMobileView } from '../components/AppBarMobileView/AppBarMobileView';


interface Props {
    children: JSX.Element;
}

export const MainLayout: FC<Props> = ({ children }) => (

    <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBarMobileView/>
        <Box
            component="main"
            sx={{
                // backgroundColor: (theme) =>
                //     theme.palette.mode === 'light'
                //         ? theme.palette.grey[900]
                //         : theme.palette.grey[900],
                flexGrow: 1,
                height: '100vh',
                overflow: 'auto',
            }}
        >
            <Container maxWidth="xl" sx={{mt: 4, mb: 4,}}>

                <Grid item xs={2} sm={2} md={2} lg={2} xl={1}>
                    <SidebarWrapper/>
                </Grid>
                <Grid container spacing={3} sx={{marginLeft: {xs: '-15%'}}}>
                    {children}
                </Grid>
                <Grid item xs={2} sm={2} md={2} lg={2} xl={1}>
                    <RightbarWrapper/>
                </Grid>
            </Container>
        </Box>
    </Box>
);