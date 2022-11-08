import React from 'react';
import {useAuth} from "./hooks/useAuth";
import { AuthenticatedApp } from './pages/AuthenticatedApp';
import { UnAuthenticatedApp } from './pages/UnAuthenticatedApp';
import {Rightbar} from "./components/Rightbar/Rightbar";
import {Box, Container, Grid} from "@mui/material";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {HomePage} from "./pages/HomePage";

export const App = () => {
  const { user } = useAuth();
  // {user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
  return (
    <>
      <Sidebar />
      <Rightbar />
      {user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
    </>
  )
}


