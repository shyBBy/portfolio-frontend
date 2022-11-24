import React, { FC } from 'react';


interface Props {
    children: JSX.Element;
}

export const MainLayout: FC<Props> = ({ children }) => (
    <div>
        {children}
    </div>
);