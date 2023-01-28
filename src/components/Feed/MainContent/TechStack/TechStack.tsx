import React from "react";
import {Illustration} from "./Ilustration/Illustration";
import { Stack } from "./Stack/Stack";
import {Box, Card, Grid, Typography, useTheme} from "@mui/material";

export const TechStack = () => {
    const theme = useTheme();

    return(
        <>
            <Grid item xs={12} sm={6} md={12} lg={3} style={{ textAlign: 'center' }}>
                <Typography variant={'h1'} color="text.secondary">Techstack</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={12} lg={3} style={{ textAlign: 'center' }}>
                <Typography variant={'body1'}>
                    Tutaj znajdziesz informacje o językach programowania, frameworkach, narzędziach do zarządzania projektem i wiele innych. Ta sekcja jest przeznaczona dla wszystkich, którzy chcą zobaczyć, jakie narzędzia i technologie stosuje w swoich projektach, oraz dla tych, którzy chcą dowiedzieć się więcej o moich preferencjach i metodach pracy.
                </Typography>
            </Grid>
            <Stack/>
        </>
    )
}