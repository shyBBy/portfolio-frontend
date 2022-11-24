import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import { AppProviders } from "./providers/AppProviders";
import theme from './theme';
import {CssBaseline} from "@mui/material";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <AppProviders>
                <App />
            </AppProviders>
        </ThemeProvider>
        
    </BrowserRouter>
);

reportWebVitals();
