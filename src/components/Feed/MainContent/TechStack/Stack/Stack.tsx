import React from "react";
import {Box} from "@mui/material";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

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
            <Box>
                <ImageList sx={{ width: 500, height: 650 }} cols={3} rowHeight={100} style={{ overflow: `hidden` }}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <LightTooltip title={item.languageName}>
                                <img
                                    src={`${item.img}?w=100&h=100&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=100&h=100&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.languageName}
                                    loading="lazy"
                                    style={{width: '120px', height: '120px'}}
                                />
                            </LightTooltip>
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </>
    )
}


const itemData = [
    {
        languageName: 'javascript',
        img: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg`,
    },
    {
        languageName: 'typescript',
        img: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg`,
    },
    {
        languageName: 'nodejs',
        img: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg`,
    },
    {
        languageName: 'nestjs',
        img: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg`,
    },
    {
        languageName: 'express',
        img: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg`,
    },
    {
        languageName: 'handlebars',
        img: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original.svg`,
    },
    {
        languageName: 'react',
        img: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg`,
    },
    {
        languageName: 'mysql',
        img: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg`,
    },
    {
        languageName: 'html',
        img: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg`,
    },
    {
        languageName: 'materialUi',
        img: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg`,
    },
]