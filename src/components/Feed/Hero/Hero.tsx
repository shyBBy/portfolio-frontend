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
        <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 2, sm: 2, md: 12 }}>
                            <Grid item xs={2} sm={2} md={5} >
                                <Typography variant={'h1'}>Cześć, jestem Dawid!</Typography>
                                <Typography variant={'body1'}>Uczący się Full-Stack Developer, jeśli chcesz dowiedzieć się czegoś więcej o mojej historii w programowaniu oraz życiu nie związanym z branża to kliknij w poniższy przycisk lub skorzystaj z bocznego menu :)</Typography>
                                <Link to={'/portfolio'} style={{textDecoration: 'none'}}><Button variant="outlined">Więcej o mnie...</Button></Link>
                            </Grid>
                            <Grid item xs={2} sm={2} md={7} sx={{display: {xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block'}}}>
                                <img className={'artImage'} src={art}/>
                            </Grid>
                        </Grid>
                    </Box>
        </>
    )
}
