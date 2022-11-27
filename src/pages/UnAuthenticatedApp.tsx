import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import { LoginPage } from './LoginPage';
import { HomePage } from './HomePage';
import {PortfolioPage} from "./PortfolioPage";
import {AboutMePage} from "./AboutMePage";
import {EducationPage} from "./EducationPage";
import {ContactPage} from "./ContactPage";
import {Box, CssBaseline} from "@mui/material";
import {AppBarMobileView} from "../components/AppBarMobileView/AppBarMobileView";
import {DrawerMobileView} from "../components/DrawerMobileView/DrawerMobileView";
import { useAuth } from '../hooks/useAuth';

const drawerSideBarWidth = 240;
const drawerRightBarWidth = 130;

export const UnAuthenticatedApp = () => {

    const { user } = useAuth();

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
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBarMobileView
                    drawerSideBarWidth={drawerSideBarWidth}
                    handleDrawerToggleSideBar={handleDrawerToggleSideBar}
                    handleDrawerToggleRightBar={handleDrawerToggleRightBar}
                />
                <DrawerMobileView
                    drawerSideBarWidth={drawerSideBarWidth}
                    mobileOpenSideBar={mobileOpenSideBar}
                    handleDrawerToggleSideBar={handleDrawerToggleSideBar}
                    drawerRightBarWidth={drawerRightBarWidth}
                    mobileOpenRightBar={mobileOpenRightBar}
                    handleDrawerToggleRightBar={handleDrawerToggleRightBar}
                />
            </Box>
            <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/education" element={<EducationPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/about-me" element={<AboutMePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route
                    path="/"
                    element={user? <Navigate to="/admin/main" replace /> : <Navigate to="/home" replace />}
                />
            </Routes>
        </>
    );
};