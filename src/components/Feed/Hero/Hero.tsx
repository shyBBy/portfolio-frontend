import React from 'react'
import {Box, Button, Grid, Paper, Typography, useTheme} from "@mui/material";
import art from '../../../assets/img/undraw_hello_re_3evm.svg'
import './Hero.css'
import {Link} from "react-router-dom";

import bg from '../../../assets/img/bg4.jpg'

export const Hero = () => {

    const theme = useTheme();

    return(
        <>
            <Box sx={{
            backgroundImage: `linear-gradient(rgba(32, 32, 32, 0.8), rgba(32, 32, 32, 0.8)), url(${bg})`, 
              height: '50%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              padding: 0,
              margin: 0,
             
            }}>
              
                <Grid container spacing={{ xs: 2, md: 3, xl: 2 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12, xl: 25 }}>
                <Grid item xs={2} sm={2} md={2} lg={2} xl={1}>
                  <Typography variant={'h1'}>Cześć, jestem Dawid!</Typography>
                </Grid>
                <Grid item xs={2} sm={2} md={2} lg={2} xl={1}>
                  <img 
                  src={art}
                  sizes="(maxWidth: 300px) 100px, (maxWidth: 768px) 768px, 1280px" />
                </Grid>
                <Grid item xs={2} sm={2} md={2} lg={2} xl={1}>
                   <Typography variant={'body1'}>Uczący się Full-Stack Developer, jeśli chcesz dowiedzieć się czegoś więcej o mojej historii w programowaniu oraz życiu nie związanym z branża to kliknij w poniższy przycisk lub skorzystaj z bocznego menu :)
                        </Typography>
                        
                        <Box sx={{marginTop: '5px'}}>
                          <Link to={'/portfolio'} style={{textDecoration: 'none'}}><Button variant="outlined">Więcej o mnie...</Button></Link>
                        </Box>
                </Grid>
              </Grid>
             
            </Box>
        </>
    )
}
