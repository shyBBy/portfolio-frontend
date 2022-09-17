import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../components/LoginPage/LoginPage';
import { MainPage } from '../components/MainPage/MainPage';

export const UnAuthenticatedApp = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />

        </Routes>
    );
};