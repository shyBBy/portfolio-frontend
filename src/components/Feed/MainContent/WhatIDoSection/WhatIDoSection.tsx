import React from "react";
import {Box, Grid, Typography, useTheme, Stack, List, ListItem} from "@mui/material";

import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import img from "../../../../assets/img/undraw_coding_re_iv62.svg";
import graphicImg from '../../../../assets/img/undraw_image_viewer_re_7ejc.svg'
import codingImg from '../../../../assets/img/undraw_code_review_re_woeb.svg'
import DoneIcon from "@mui/icons-material/Done";



export const WhatIDoSection = ()=> {
    const theme = useTheme();
    return(
        <>
            <Typography
                variant={'h1'}
                color={theme.palette.primary.main}
                fontSize={'55px'}
            >
                Czym się zajmuje
            </Typography>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
            >
                <Box>
                    <Typography
                        variant={'body1'}
                        color={theme.palette.secondary.main}
                    >
                        Wszystko zaczęło się od tworzenia prostych stron internetowych, do których potrzebowałem różnych grafik, a ponieważ zawsze lubiłem wszystko samemu zrobić to postanowiłem nauczyć się grafiki. Lubię tworzyć i realizować własne pomysły dlatego też zachaczyłem również o 3D i nawet przyjąłem kilka zleceń na modele 3D. Oczywiście grafika jest na drugim planie. Programowanie najważniejsze :)
                    </Typography>
                </Box>
                <Box>
                    <img
                        src={graphicImg}
                        style={{
                            width: '300px',
                            height: '300px'
                    }}/>
                </Box>
            </Stack>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
            >
                <Box>
                    <img
                        src={codingImg}
                        style={{
                            width: '300px',
                            height: '300px'
                        }}/>
                </Box>
                <Box>
                    <Typography
                        variant={'body1'}
                        color={theme.palette.secondary.main}
                    >
                        Przede wszystkim rozwojem samego siebie i zagłębianiu się w tematyce programowania.
                    </Typography>
                </Box>
            </Stack>
        </>
    )
}