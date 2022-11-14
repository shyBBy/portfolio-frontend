import {
    Box,
    Container, Divider,
    Grid,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    useTheme
} from '@mui/material'
import React from 'react'
import DoneIcon from '@mui/icons-material/Done';



export const AboutMeBasicInfo = () => {

    const theme = useTheme();

    return(
        <>
            <Box p='10px'>
                <Grid container >
                    <Grid xs={4}>
                        <Typography variant={'body1'}>Lokalizacja:</Typography>
                        <Typography variant={'body1'}>Wiek:</Typography>
                        <Typography variant={'body1'}>Status:</Typography>
                    </Grid>
                    <Grid xs={8} textAlign='right'>
                        <Typography variant={'body1'} color={theme.palette.secondary.main}>Polska, Łódź</Typography>
                        <Typography variant={'body1'} color={theme.palette.secondary.main}>27</Typography>
                        <Typography variant={'body1'} color={theme.palette.secondary.main}>Wolny</Typography>
                    </Grid>
                </Grid>
            </Box>
            <Divider />
            <Box p='10px'>
                <Typography variant={'h6'}>Języki programowania</Typography>
                <Box marginTop={'10px'}>
                    <Typography variant={'body1'} color={theme.palette.secondary.main}>
                        <DoneIcon fontSize="small" color={'primary'}/> Javascript
                    </Typography>
                    <Typography variant={'body1'} color={theme.palette.secondary.main}>
                        <DoneIcon fontSize="small" color={'primary'}/> GIT
                    </Typography>
                    <Typography variant={'body1'} color={theme.palette.secondary.main}>
                        <DoneIcon fontSize="small" color={'primary'}/>
                    </Typography>
                </Box>
            </Box>
        </>
    )
}