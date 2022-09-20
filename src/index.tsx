import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import 'primereact/resources/themes/mdc-dark-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {AppProviders} from "./providers/AppProviders";
import CssBaseline from '@mui/material/CssBaseline';
import {ThemeProvider} from "@mui/material";
import { theme } from './theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            {/*<CssBaseline />*/}
            <AppProviders>
                <App />
            </AppProviders>
        </ThemeProvider>
    </BrowserRouter>
);

reportWebVitals();
