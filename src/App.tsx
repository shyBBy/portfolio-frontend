import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {useAuth} from "./hooks/useAuth";
import { AuthenticatedApp } from './views/AuthenticatedApp';
import { UnAuthenticatedApp } from './views/UnAuthenticatedApp';

export const App = () => {
  const { user, notification } = useAuth();
  // {user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
  return (
    <>
      {notification}
      {user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}

    </>
  )
}


