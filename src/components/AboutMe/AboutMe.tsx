import {Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography} from "@mui/material";
import React from "react";
import {AboutMePhoto} from "./AboutMePhoto";
import {AboutMeDescription} from "./AboutMeDescription";

export const AboutMe = () => {
    return (
        <>
            <Container sx={{ py: 8 }} maxWidth="lg">
                <Grid container spacing={10}>
                    <AboutMePhoto/>
                    <AboutMeDescription/>
                </Grid>
            </Container>
        </>
    )
}