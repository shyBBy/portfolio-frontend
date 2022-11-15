import React from "react";
import {Illustration} from "./Ilustration/Illustration";
import { Stack } from "./Stack/Stack";
import {Box, Card, Grid, Typography, useTheme} from "@mui/material";

export const TechStack = () => {
    const theme = useTheme();

    return(
        <>
            <Box p='20px'>
                <Grid container >
                    <Grid xs={8}>
                        <Stack/>
                    </Grid>
                    <Grid xs={4} >
                        <Illustration/>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}