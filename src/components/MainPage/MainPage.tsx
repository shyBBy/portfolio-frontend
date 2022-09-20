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
import {AboutMe} from "./AboutMe/AboutMe";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const MainPage = () => {
    return (
        <>
            <main>
                <AboutMe/>
                <Container sx={{ py: 8 }} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            // 16:9
                                            pt: '56.25%',
                                        }}
                                        image="https://source.unsplash.com/random"
                                        alt="random"
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Heading
                                        </Typography>
                                        <Typography>
                                            This is a media card. You can use this section to describe the
                                            content.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">View</Button>
                                        <Button size="small">Edit</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
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