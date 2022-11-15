import {Box, Typography, useTheme} from "@mui/material";
import React from "react";

import img from '../../../../../assets/img/undraw_chore_list_re_2lq8.svg'

export const Illustration = () => {
    const theme = useTheme();
    return(
        <>
            <img src={img} style={{
                width: '400px',
                height: '400px'
            }}/>
            <Typography variant={'body1'} color={theme.palette.secondary.main}>Obok przedstawiona jest lista wszystkich języków programowania, framework'ów oraz bibliotek, z których korzystałem podczas nauki bądź realizowania własnych projektów. </Typography>
            <Typography variant={'body1'} color={theme.palette.secondary.main}> Mam nadzieję, że wraz z moim postępem w nauce, będzie się ona systematycznie powiększać.</Typography>
        </>
    )
}