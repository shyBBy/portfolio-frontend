import React from 'react'
import {Box, ImageList, ImageListItem } from '@mui/material'
import './TechStack.css'
import mysql from '../../../../assets/icons/mysql.svg'
import html from '../../../../assets/icons/html-5.svg'
import mui from '../../../../assets/icons/material-ui.svg'
import {TechStackSingleItem} from "./TechStackSingleItem";

export const TechStackList = () => {

    const itemData = [
        {
            languageName: 'javascript',
            img: '../../../../assets/icons/javascript.svg',
        },
        {
            languageName: 'typescript',
            img: '../../../../assets/icons/typescript-icon.svg',
        },
        {
            languageName: 'nodejs',
            img: '../../../../assets/icons/nodejs-icon.svg',
        },
        {
            languageName: 'nestjs',
            img: '../../../../assets/icons/nestjs.svg',
        },
        {
            languageName: 'express',
            img: '../../../../assets/icons/express.svg',
        },
        {
            languageName: 'handlebars',
            img: '../../../../assets/icons/handlebars.svg',
        },
        {
            languageName: 'react',
            img: '../../../../assets/icons/react.svg',
        },
        {
            languageName: 'mysql',
            img: '../../../../assets/icons/mysql.svg',
        },
        {
            languageName: 'html',
            img: '../../../../assets/icons/html-5.svg',
        },
        {
            languageName: 'materialUi',
            img: '../../../../assets/icons/material-ui.svg',
        },
    ]

    return (
        <>
            <Box>
                {
                    itemData.map((item) => (
                        <TechStackSingleItem item={item}/>
                    ))
                }
            </Box>
        </>
        )
}