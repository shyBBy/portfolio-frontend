import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout'
import {Box, CssBaseline} from "@mui/material";
import { AdminMainPage } from './Admin/AdminMainPage';
import { AdminProjectsPage } from './Admin/AdminProjectsPage';
import { AdminEducationPage } from './Admin/AdminEducationPage';
import { AdminAboutPage } from './Admin/AdminAboutPage';


export const AuthenticatedApp = () => {

    return (
            <MainLayout>
                <>
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