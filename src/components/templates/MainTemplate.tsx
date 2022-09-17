import React, { FC } from 'react';

interface Props {
    children: JSX.Element;
}

export const MainTemplate: FC<Props> = ({ children }) => (
    <div>
        {children}
    </div>
);