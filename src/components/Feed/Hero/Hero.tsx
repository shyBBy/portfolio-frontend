import React from 'react'
import {Box, Grid, Typography, useTheme} from "@mui/material";
import me2 from '../../../assets/img/me2.png'
import art from '../../../assets/img/undraw_coding_re_iv62.svg'
import art2 from '../../../assets/img/undraw_dev_productivity_re_fylf.svg'
import './Hero.css'

export const Hero = () => {

    const theme = useTheme();

    return(
        <>
            {/*<Box position={"absolute"} top={'1%'} left={'14%'}>*/}
            {/*    <img  className='artImage' src={art2}/>*/}
            {/*</Box>*/}
            {/*<Box position={"absolute"} top={'31%'} left={'29%'}>*/}
            {/*   <Typography variant={"h4"} color={'primary'}>Cześć</Typography>*/}
            {/*</Box>*/}
            {/*<Box position={"absolute"} top={'19%'} left={'34%'}>*/}
            {/*    <Typography variant={"h4"}>Jestem Dawid</Typography>*/}
            {/*</Box>*/}
            {/*<Box position={"absolute"} top={'52%'} left={'36%'}>*/}
            {/*    <Typography variant={"body2"}>Jakiś tam krótki opisik</Typography>*/}
            {/*</Box>*/}
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