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
import {Header} from "./Header/Header";
import {AboutMe} from "../AboutMe/AboutMe";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const MainPage = () => {
    return (
        <>
            <main>
                <Header/>
                <AboutMe/>
            </main>
            <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    Something here to give the footer a purpose!
                </Typography>
                <Copyright />
            </Box>
        </>
    )
}