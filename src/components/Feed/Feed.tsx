import {Box, Container} from '@mui/material'
import React from 'react'
import Stack from '@mui/material/Stack';
import {Hero} from "./Hero/Hero";
import {MainContent} from "./MainContent/MainContent";
import './styles.css'


export const Feed = () => {

    return (
        <>  
        <Box 
        sx={{ flexGrow: 1, marginTop: {xs: '5px', sm: 0, md: 0, lg: 0, xl: 0} }} >
            <Grid container spacing={{ xs: 2, md: 3, xl: 2 }} columns={{ xs: 1, sm: 8, md: 12, lg: 12, xl: 25 }}>
                <Grid item xs={1} sm={2} md={2} lg={2} xl={1}>
                    <Hero/>
                </Grid>
                <Grid item xs={1} sm={8} md={9} lg={9} xl={20}>
                    <MainContent/>
                </Grid>
            </Grid>
        </Box>
        </>
    )
}
