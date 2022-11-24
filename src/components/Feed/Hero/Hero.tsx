import React from 'react'
import {Box, Button, Grid, Paper, Typography, useTheme} from "@mui/material";
import art from '../../../assets/img/undraw_hello_re_3evm.svg'
import './Hero.css'
import {Link} from "react-router-dom";

export const Hero = () => {

    const theme = useTheme();

    return(
        <>
            <Box position={"absolute"}
                 sx=
                     {{
                     top: {xs: '18%', lg: '5%', md: '5%', sm: '5%'},
                     left: {xs: '3%', lg: '17%', md: '24%', sm: '2%'}
                    }}
            >
                <Typography variant={'h1'}>Cześć, jestem Dawid!</Typography>
                <Box width={'41%'}>
                    <Typography variant={'body1'}>Uczący się Full-Stack Developer, jeśli chcesz dowiedzieć się czegoś więcej o mojej historii w programowaniu oraz życiu nie związanym z branża to kliknij w poniższy przycisk lub skorzystaj z bocznego menu :)</Typography>
                    <Link to={'/portfolio'} style={{textDecoration: 'none'}}><Button variant="outlined">Więcej o mnie...</Button></Link>
                </Box>
                <Box
                    width={'41%'}
                    position={'absolute'}
                     sx=
                    {{
                        top: {xs: '11%', lg: '65%', md: '70%', sm: '2%'},
                        left: {xs: '40%', lg: '17%', md: '2%', sm: '2%'}
                    }}
                >
                    <img className={'artImage'} src={art}/>
                </Box>


            </Box>
        </>
    )
}