import React from "react";
import { Copyright } from "@mui/icons-material";
import {
    AppBar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    Grid,
    Stack,
    Toolbar,
    Typography
} from "@mui/material";
import { createTheme, ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import CameraIcon from '@mui/icons-material/PhotoCamera'
import {Header} from "../components/Header/Header";
import {AboutMe} from "../components/AboutMe/AboutMe";
import {Footer} from "../components/Footer/Footer";
import {MyExperienceSection} from "../components/MyExperienceSection/MyExperienceSection";


export const MainPage = () => {
    return (
        <>
            <main>
                <Header/>
                <AboutMe/>
            </main>
            <MyExperienceSection/>
            <Footer/>
        </>
    )
};