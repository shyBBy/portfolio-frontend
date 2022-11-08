import { createTheme } from "@mui/material/styles";
import { red } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: '#FFB400',
            contrastText: '#1a1a1a',
        },
        secondary: {
            main: '#f50057',
        },
        background: {
            default: '#F0F0F6',
            paper: '#FFFFFF',
        },
        error: {
            main: red.A400,
        },
    },
});

export default theme;