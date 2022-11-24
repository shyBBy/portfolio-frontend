import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import { StackInfo } from './StackInfo'
import { TechStackList } from './TechStack/TechStackList'
import './style.css'
import {AboutMeBasicInfo} from "./AboutMeBasicInfo";
import {Courses} from "./Courses/Courses";

export const AboutMe = () => {

    return (
        <>
            <Box>
                <Typography variant="subtitle2" component="p" style={{ textAlign: 'center' }}>
                    Dawid Olczak
                </Typography>
                <Typography variant="caption" component="p" style={{ textAlign: 'center', color: '#9e9e9e' }}>
                    Full-Stack developer
                </Typography>
            </Box>
            <Divider />
            <div style={{ overflow: `hidden` }}>
                <Box className="scrollBar" >
                    <AboutMeBasicInfo/>
                </Box>
                <Divider/>
                <Courses/>
            </div>
        </>
        )
}