import React from 'react';
import {useAuth} from "./hooks/useAuth";
import { AuthenticatedApp } from './views/AuthenticatedApp';
import { UnAuthenticatedApp } from './views/UnAuthenticatedApp';
import {TopPanel} from "./components/TopPanel/TopPanel";

export const App = () => {
  const { user, notification } = useAuth();
  // {user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
  return (
    <>
      {notification}
      <TopPanel />
      {user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}

    </>
  )
}


