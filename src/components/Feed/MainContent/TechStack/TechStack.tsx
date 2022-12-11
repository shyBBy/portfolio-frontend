import React from "react";
import {Illustration} from "./Ilustration/Illustration";
import { Stack } from "./Stack/Stack";
import {Box, Card, Grid, Typography, useTheme} from "@mui/material";

export const TechStack = () => {
    const theme = useTheme();

    return(
        <>
            <Box sx={{ flexGrow: 1, marginTop: {xs: '5px', sm: '6px'} }}>
                    <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 2, sm: 2, md: 12 }}>
                        <Grid item xs={2} sm={2} md={6}>
                            <Stack/>
                        </Grid>
                        <Grid item xs={2} sm={2} md={6}>
                            <Illustration/>
                        </Grid>
                    </Grid>
                </Box>
        </>
    )
}