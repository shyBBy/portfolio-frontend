import { createTheme} from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#141414',
        },
        secondary: {
            main: '#af0704',
        },
        info: {
            main: '#f9f900',
        },
        error: {
            main: red.A400,
        },
    },
});

