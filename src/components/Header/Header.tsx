import React from "react";
import {Box, Button, Container, Stack, Typography, useTheme} from "@mui/material";
import {TopPanelIcons} from "../TopPanel/TopPanelIcons";
import './Header.css'
import bg from '../../utils/bg4.jpg'
import me from "../../utils/me2.png";

export const Header = () => {
    const theme = useTheme();
    return (
        <>
            <Box
                sx={{
                    // color: theme.palette.background.default,
                    // @ts-ignore
                    backgroundImage: theme.palette.background.image,
                    backgroundPosition: 'center',
                    pt: 18,
                    pb: 18,
                }}
            >
                {/*<img src={bg}></img>*/}
                <Container maxWidth="sm">
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="white"
                        gutterBottom
                    >
                        Dawid Olczak
                    </Typography>
                    <Typography variant="h5" align="center" color="white" paragraph>
                        backend developer - jakiś tam opis tu będzie krótki
                    </Typography>
                </Container>
            </Box>
        </>
    )
}