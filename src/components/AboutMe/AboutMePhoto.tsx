import React from "react";
import {Box, Grid, Typography} from "@mui/material";
import me from '../../utils/me2.png'
import './AboutMe.css'

export const AboutMePhoto = () => {
    return(
        <>
            <Grid item key='aboutMePhoto' xs={12} sm={6} md={4} lg={6}>
                <img src={me}></img>
            </Grid>
        </>
    )
}