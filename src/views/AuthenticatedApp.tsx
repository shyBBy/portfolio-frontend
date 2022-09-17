import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { MainTemplate } from '../components/templates/MainTemplate';

interface LocationState {
    background: string;
}

export const AuthenticatedApp = () => {
    const location = useLocation();
    const state = location.state as LocationState;
    const background = state && state.background;
    return (
        <MainTemplate>
            <span>TEST DLA ADMINA PO ZALOGOWANIU</span>
        </MainTemplate>
    );
};