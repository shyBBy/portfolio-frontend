import React from 'react'
import {Box, Button, Grid, Paper, Typography, useTheme} from "@mui/material";
import art from '../../../assets/img/undraw_hello_re_3evm.svg'
import './Hero.css'
import {Link} from "react-router-dom";

export const Hero = () => {

    const theme = useTheme();

    return(
        <>
            <Grid item xs={12} sm={6} md={6} lg={3} >
                <Typography variant={'h1'}>Cześć, jestem Dawid!</Typography>
                <Typography variant={'body1'}>Uczący się Full-Stack Developer, jeśli chcesz dowiedzieć się czegoś więcej o mojej historii w programowaniu oraz życiu nie związanym z branża to kliknij w poniższy przycisk lub skorzystaj z bocznego menu :)</Typography>
                <Link to={'/portfolio'} style={{textDecoration: 'none'}}><Button variant="outlined">Więcej o mnie...</Button></Link>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3} sx={{display: {xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block'}}}>
                <img className={'artImage'} src={art}/>
            </Grid>

            </>
    )
}
