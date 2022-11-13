
import React from "react";
import { Box, Container, Grid, Stack, useTheme } from "@mui/material";
import { Rightbar } from "../components/Rightbar/Rightbar";
import { Feed } from "../components/Feed/Feed";
import { Sidebar } from "../components/Sidebar/Sidebar";
import bg4 from '../assets/img/bg4.jpg'
import './style.css'


export const HomePage = () => {



    return (
        <>
            <Box className='bgimage' sx={{width: '100%', height: '40vh'}}>
                <Box className='mask' sx={{width: '100%', height: '40vh'}}>
                    <Container>
                        <Feed/>
                    </Container>
                </Box>
            </Box>
        </>
    )
};