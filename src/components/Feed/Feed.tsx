import {Box, Container, Grid} from '@mui/material'
import React from 'react'
import Stack from '@mui/material/Stack';
import {Hero} from "./Hero/Hero";
import {MainContent} from "./MainContent/MainContent";
import './styles.css'


export const Feed = () => {

    return (
        <>
            <Box className='bgimage' sx={{width: {xs: '99.6vw',lg: '81.3vw'}, height: '50vh', position: 'relative',
                left: {xs:'-2.6%' ,sm:'-9vw', md: '-19vw' ,xl: '1.1%',lg: '-13.3%'},
                top: {sm: '6.7vh'}
            }}>
                <Box className='mask' sx={{width: {lg: '81.3vw'}, height: '50vh', position: 'relative'}}>
                    <Hero/>
                </Box>
            </Box>
            <Box>
                <MainContent/>
            </Box>
        </>
    )
}
