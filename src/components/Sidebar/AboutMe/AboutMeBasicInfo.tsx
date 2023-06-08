import {Box, Divider, Grid, Typography, useTheme} from '@mui/material'
import React from 'react'
import {SingleListItem} from "./SingleListItem";


export const AboutMeBasicInfo = () => {

    const theme = useTheme();

    return (
        <>
            <Box p='10px'>
                <Grid container>
                    <Grid xs={4}>
                        <Typography variant={'body1'}>Lokalizacja:</Typography>
                        <Typography variant={'body1'}>Wiek:</Typography>
                        <Typography variant={'body1'}>Status:</Typography>
                        <Typography variant={'body1'}>E-mail:</Typography>
                    </Grid>
                    <Grid xs={8} textAlign='right'>
                        <Typography variant={'body1'} color={theme.palette.secondary.main}>Polska, Łódź</Typography>
                        <Typography variant={'body1'} color={theme.palette.secondary.main}>26</Typography>
                        <Typography variant={'body1'} color={theme.palette.secondary.main}>Szukam pracy</Typography>
                        <Typography variant={'body1'}
                                    color={theme.palette.secondary.main}>kontakt@dev-olczak.pl</Typography>
                    </Grid>
                </Grid>
            </Box>
            <Divider/>
            <Box p={'10px'}>
                <Typography variant={'h6'}>Czym się zajmuję</Typography>
            </Box>
            <Box p={'10px'} style={{listStyleType: 'none'}}>
                <SingleListItem text={'Tworzenie aplikacji webowych'}/>
                <SingleListItem text={'Projektowanie stron graficznych'}/>
                <SingleListItem text={'Projekty graficzne 2D'}/>
                <SingleListItem text={'Loga, banery, ulotki'}/>
                <SingleListItem text={'Tworzeniem sklepu internetowego'}/>
            </Box>
            <Box p={'10px'}>
                <Typography variant={'h6'}>Dodatkowe umiejętności</Typography>
            </Box>
            <Box p={'10px'} style={{listStyleType: 'none'}}>
                <SingleListItem text={'Obsługa linuxa'}/>
                <SingleListItem text={'Hosting www, domeny, vps'}/>
                <SingleListItem text={'Konfiguracja serwera www (apache)'}/>
                <SingleListItem text={'Domeny internetowe'}/>
                <SingleListItem text={'WooCommerce'}/>
            </Box>
        </>
    )
}
