import { createTheme} from '@mui/material/styles';
import { red } from '@mui/material/colors';


export const theme = createTheme({
    palette: {
        primary: {
            main: '#ffffff',
            light: '#b1b1b1',
            dark: '#b9b9b9',
            contrastText: 'rgba(35,35,35,0.87)',
        },
        secondary: {
            main: '#e65358',
        },
        info: {
            main: '#f9f900',
        },
        text: {
            primary: 'rgba(191,191,191,0.87)',
            // @ts-ignore
            hint: 'rgba(226,226,226,0.38)',
            secondary: 'rgba(185,185,185,0.54)',
            disabled: 'rgba(94,94,94,0.38)',
        },
        background: {
            default: '#232323',
            paper: '#252525',
        },
        divider: 'rgba(80,80,80,0.12)',
        error: {
            main: '#bf3b32',
            light: '#e8352a',
            dark: '#7f1008',
        },
    },
    typography: {
        fontFamily: '"Roboto Condensed", "Helvetica", "Arial", sans-serif',
    },
});

