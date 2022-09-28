import React from "react";
import {Box, Container, Grid, Typography} from "@mui/material";
import {AboutMePhoto} from "../AboutMe/AboutMePhoto";
import {AboutMeDescription} from "../AboutMe/AboutMeDescription";
import {MyExperience} from "./MyExperience";
import {MyTechStack} from "./MyTechStack";

export const MyExperienceSection = () => {
    return(
        <>
            <Box sx={{ bgcolor: 'background.paper', p: 33 }} component="footer">
                <Container sx={{ py: 8 }} maxWidth="lg">
                    <Grid container spacing={9}>
                        <MyExperience/>
                        <MyTechStack/>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}