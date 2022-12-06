import {Box, Container, Grid} from '@mui/material'
import React from 'react'
import Stack from '@mui/material/Stack';
import {Hero} from "./Hero/Hero";
import {MainContent} from "./MainContent/MainContent";
import './styles.css'


export const Feed = () => {

    return (
        <> 
          <Box>
            <Hero/>
            <MainContent/>
          </Box>
        </>
    )
}
