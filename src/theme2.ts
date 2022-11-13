import { ThemeOptions } from "@mui/system/createTheme";



export const themeOptions: ThemeOptions = {
    palette: {
        type: 'light',
        primary: {
            main: '#ffc107',
        },
        secondary: {
            main: '#9c9c9c',
        },
        background: {
            default: '#191923',
            paper: '#20202a',
        },
        text: {
            primary: '#ffffff',
            secondary: '#ffc107',
            disabled: 'rgba(86,86,86,0.55)',
        },
        divider: '#484747',
    },
    typography: {
        fontFamily: 'Asap',
        h1: {
            fontFamily: 'Bebas Neue',
        },
    },
};
