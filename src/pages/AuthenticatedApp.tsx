import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout'

interface LocationState {
    background: string;
}

export const AuthenticatedApp = () => {
    const location = useLocation();
    const state = location.state as LocationState;
    const background = state && state.background;
    return (
        <MainLayout>
            <>
                
            </>
        </MainLayout>
    );
};