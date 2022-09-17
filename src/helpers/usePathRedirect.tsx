import React from 'react';
import { useNavigate, useLocation } from 'react-router';
import { LoggedUserRes, Role } from '../hooks/useAuth';


export const usePathRedirect = (
    setUser: React.Dispatch<React.SetStateAction<LoggedUserRes | null>>,
    signOut: () => void,
) => {
    const navigate = useNavigate();
    const location = useLocation();

    return (userData: LoggedUserRes) => {
        if (location.pathname.includes('activate')) {
            signOut();
            navigate(location.pathname);
            return;
        }
        switch (userData.role) {
            case Role.USER:
                navigate('/user');
                break;
            case Role.ADMIN:
                navigate('/admin');
                break;
            default:
                setUser(null);
                navigate('/');
                break;
        }
    };
};