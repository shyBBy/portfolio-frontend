import React, { FC } from 'react';
import { SideAndRightBarContainer } from '../components/SideAndRightBarContainer';

interface Props {
    children: JSX.Element;
}

export const MainLayout: FC<Props> = ({ children }) => (
    
    <div>
        <SideAndRightBarContainer/>
        {children}
    </div>
);