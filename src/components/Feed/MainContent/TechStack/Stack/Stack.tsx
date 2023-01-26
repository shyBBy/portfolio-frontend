import React from "react";
import {Box, Card, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import {MainCard} from "../../../../MainCard";
import theme from "../../../../../theme";
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import IconButton from '@mui/material/IconButton';
import it from "node:test";

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontSize: 11,
    },
}));

export const Stack = () => {
    return(
        <>
            {itemData.map((item) => (
                <Grid item xs={12} sm={6} md={3} lg={3}>
                    <Card sx={{ display: 'flex' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h5">
                                    {item.languageName}
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    {item.type}
                                </Typography>
                            </CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                {item.description}
                            </Box>
                        </Box>
                        <CardMedia
                            component="img"
                            sx={{ width: 120 }}
                            image={item.img}
                            alt="Live from space album cover"
                        />
                    </Card>
                </Grid>
            ))}
        </>
    )
}


const itemData = [
    {
        languageName: 'javascript',
        img: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg`,
        type: 'język programowania',
        description: 'Głównie stosowany do tworzenia interaktywnych aplikacji internetowych.',
    },
    {
        languageName: 'typescript',
        img: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg`,
        type: 'język programowania',
        description: ' Jest rozszerzeniem javascriptu i oferuje typowanie zmiennych.',
    },
    {
        languageName: 'nodejs',
        img: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg`,
        type: 'framework',
        description: 'Platforma, która pozwala na uruchamianie javascriptu po stronie serwera.',
    },
    {
        languageName: 'nestjs',
        img: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg`,
        type: 'framework',
        description: 'Umożliwia tworzenie aplikacji opartych na architekturze opartej na kontrolerach i modułach.',
    },
    {
        languageName: 'express',
        img: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg`,
        type: 'framework',
        description: 'Umożliwia budowanie aplikacji sieciowych.',
    },
    {
        languageName: 'handlebars',
        img: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original.svg`,
        type: 'biblioteka szablonów',
        description: 'Pozwala na łatwe generowanie dynamicznego HTML.',
    },
    {
        languageName: 'react',
        img: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg`,
        type: 'biblioteka JavaScript',
        description: 'Tworzenie interaktywnych i responsywnych interfejsów użytkownika.',
    },
    {
        languageName: 'mysql',
        img: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg`,
        type: 'baza danych',
        description: 'System zarządzania bazami danych oparty na języku SQL',
    },
    {
        languageName: 'html',
        img: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg`,
        type: 'język znaczników',
        description: 'Jest podstawowym językiem tworzenia stron internetowych.',
    },
    {
        languageName: 'materialUi',
        img: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg`,
        type: 'biblioteka css',
        description: 'Biblioteka komponentów interfejsu użytkownika.',
    },
]