import {Box, Container} from '@mui/material'
import React from 'react'
import Stack from '@mui/material/Stack';
import {Hero} from "./Hero/Hero";
import {MainContent} from "./MainContent/MainContent";
import './styles.css'


export const Feed = () => {

    return (
        <>
            <Stack spacing={2}>
                <Box className='bgimage' sx={{width: '100vw', height: '50vh'}}>
                    <Box className='mask' sx={{width: '100vw', height: '53vh'}}>
                        <Hero/>
                    </Box>
                </Box>
                <Box>
                    <MainContent/>
                </Box>
            </Stack>
        </>
    )
}