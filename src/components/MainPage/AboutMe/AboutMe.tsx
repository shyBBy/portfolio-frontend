import React from "react";
import {Box, Button, Container, Stack, Typography, useTheme} from "@mui/material";
import {TopPanelIcons} from "../../TopPanel/TopPanelIcons";

export const AboutMe = () => {
    const theme = useTheme();
    return (
        <>
            <Box
                sx={{
                    // color: theme.palette.background.default,
                    // @ts-ignore
                    backgroundImage: theme.palette.background.image,
                    backgroundPosition: 'center',
                    pt: 8,
                    pb: 6,
                }}
            >
                <Container maxWidth="sm">
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >
                        Dawid Olczak
                    </Typography>
                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                        backend developer - jakiś tam opis tu będzie krótki
                    </Typography>
                </Container>
            </Box>
        </>
    )
}