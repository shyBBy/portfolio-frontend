
import React from "react";
import { Box, Container, Grid, Stack, useTheme } from "@mui/material";
import { Rightbar } from "../components/Rightbar/Rightbar";
import { Feed } from "../components/Feed/Feed";
import { Sidebar } from "../components/Sidebar/Sidebar";
import bg4 from '../assets/img/bg4.jpg'
import './style.css'
import {Hero} from "../components/Feed/Hero/Hero";


export const HomePage = () => {



    return (
        <>
            <Box className='bgimage' sx={{width: '100%', height: '50vh'}} position={'relative'}>
                <Box className='mask' sx={{width: '100%', height: '50vh'}}>
                    <Container>
                        <Hero/>
                    </Container>
                </Box>
            </Box>
            <Container>
                <Feed/>
            </Container>
        </>
    )
};