import React from 'react';
import {useAuth} from "./hooks/useAuth";
import { AuthenticatedApp } from './pages/AuthenticatedApp';
import { UnAuthenticatedApp } from './pages/UnAuthenticatedApp';

export const App = () => {
  const { user } = useAuth();
  return (
      <>
          {user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
      </>
  )
}


