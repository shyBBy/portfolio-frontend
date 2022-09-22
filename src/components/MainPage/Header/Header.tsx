import React from "react";
import {Box, Button, Container, Stack, Typography} from "@mui/material";
import {TopPanelIcons} from "../../TopPanel/TopPanelIcons";

export const Header = () => {
    return (
        <>
            <Box
                sx={{
                    bgcolor: 'background.paper',
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
                        Cześć, jestem Dawid
                    </Typography>
                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                        Jakiś tam opis o mnie, coś na szybko i krótkiego.
                    </Typography>
                    <Stack
                        sx={{ pt: 4 }}
                        direction="row"
                        spacing={2}
                        justifyContent="center"
                    >
                    </Stack>
                </Container>
            </Box>
        </>
    )
}