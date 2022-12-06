import React from 'react'
import {Box, Button, Grid, Paper, Typography, useTheme} from "@mui/material";
import art from '../../../assets/img/undraw_hello_re_3evm.svg'
import './Hero.css'
import {Link} from "react-router-dom";

export const Hero = () => {

    const theme = useTheme();

    return(
        <>
            <Box>
              <Grid container spacing={{ xs: 2, md: 3, xl: 2 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12, xl: 25 }}>
                <Grid item xs={2} sm={2} md={2} lg={2} xl={1}>
                  <p>jestem dawid</p>
                </Grid>
                <Grid item xs={2} sm={2} md={2} lg={2} xl={1}>
                  obrazek
                </Grid>
                <Grid item xs={2} sm={2} md={2} lg={2} xl={1}>
                  tu krótki opis
                </Grid>
              </Grid>
            </Box>
        </>
    )
}
