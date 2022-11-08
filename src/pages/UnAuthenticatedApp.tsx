import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from './LoginPage';
import { HomePage } from './HomePage';
import {PortfolioPage} from "./PortfolioPage";

export const UnAuthenticatedApp = () => {
    return (
        <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/login" element={<LoginPage />} />
        </Routes>
    );
};