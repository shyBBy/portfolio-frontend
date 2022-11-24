import React from 'react'
import {Hero} from "./Hero/Hero";
import {Content} from "./Content";
import { Box } from '@mui/system';

export const AboutMe = () => {
    return(
        <>
            <Box>
                <Hero/>
                <Content/>
            </Box>
        </>
    )
}