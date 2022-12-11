import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import { LoginPage } from './LoginPage';
import { HomePage } from './HomePage';
import {PortfolioPage} from "./PortfolioPage";
import {AboutMePage} from "./AboutMePage";
import {EducationPage} from "./EducationPage";
import {ContactPage} from "./ContactPage";
import { useAuth } from '../hooks/useAuth';
import { MainLayout } from '../layouts/MainLayout';


export const UnAuthenticatedApp = () => {

    const { user } = useAuth();


    return (
        <>
            <MainLayout>
                <Routes>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/portfolio" element={<PortfolioPage />} />
                    <Route path="/education" element={<EducationPage />} />
                    <Route path="/about-me" element={<AboutMePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route
                        path="/"
                        element={user? <Navigate to="/admin/main" replace /> : <Navigate to="/home" replace />}
                    />
                </Routes>
            </MainLayout>
        </>
    );
};