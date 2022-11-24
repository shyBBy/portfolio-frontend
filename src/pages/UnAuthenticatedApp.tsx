import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import { LoginPage } from './LoginPage';
import { HomePage } from './HomePage';
import {PortfolioPage} from "./PortfolioPage";
import {AboutMePage} from "./AboutMePage";
import {EducationPage} from "./EducationPage";

export const UnAuthenticatedApp = () => {
    return (
        <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/about-me" element={<AboutMePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
                path="/"
                element={<Navigate to="/home" replace />}
            />
        </Routes>
    );
};