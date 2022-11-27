import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout'
import {Box, CssBaseline} from "@mui/material";
import { AppBarMobileView } from '../components/AppBarMobileView/AppBarMobileView';
import { DrawerMobileView } from '../components/DrawerMobileView/DrawerMobileView';
import { AdminMainPage } from './Admin/AdminMainPage';
import { AdminProjectsPage } from './Admin/AdminProjectsPage';
import { AdminEducationPage } from './Admin/AdminEducationPage';
import { AdminAboutPage } from './Admin/AdminAboutPage';

const drawerSideBarWidth = 240;

export const AuthenticatedApp = () => {

    const [mobileOpenSideBar, setMobileOpenSideBar] = React.useState(false);

    const handleDrawerToggleSideBar = () => {
        setMobileOpenSideBar(!mobileOpenSideBar);
    };
    return (
        <MainLayout>
            <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBarMobileView
                    drawerSideBarWidth={drawerSideBarWidth}
                    handleDrawerToggleSideBar={handleDrawerToggleSideBar}
                />
                <DrawerMobileView
                    drawerSideBarWidth={drawerSideBarWidth}
                    mobileOpenSideBar={mobileOpenSideBar}
                    handleDrawerToggleSideBar={handleDrawerToggleSideBar}
                />
            </Box>
            <Routes>
                <Route path="/admin/main" element={<AdminMainPage/>} />
                <Route path="/admin/projects" element={<AdminProjectsPage/>} />
                <Route path="/admin/education" element={<AdminEducationPage/>} />
                <Route path="/admin/about" element={<AdminAboutPage/>} />
                <Route
                    path="/"
                    element={<Navigate to="/admin/main" replace />}
                />
            </Routes>
            </>
        </MainLayout>
    );
};