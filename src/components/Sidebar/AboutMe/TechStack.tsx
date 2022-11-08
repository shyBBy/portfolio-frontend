import React from 'react'
import { ImageList, ImageListItem } from '@mui/material'
import './TechStack.css'
import javascript from '../../../assets/icons/javascript.svg'
import typescript from '../../../assets/icons/typescript-icon.svg'
import nodejs from '../../../assets/icons/nodejs-icon.svg'
import nestjs from '../../../assets/icons/nestjs.svg'
import express from '../../../assets/icons/express.svg'
import handlebars from '../../../assets/icons/handlebars.svg'
import react from '../../../assets/icons/react.svg'
import mysql from '../../../assets/icons/mysql.svg'
import html from '../../../assets/icons/html-5.svg'
import mui from '../../../assets/icons/material-ui.svg'

export const TechStack = () => {

    const itemData = [
        {
            languageName: 'javascript',
            img: javascript,
        },
        {
            languageName: 'typescript',
            img: typescript,
        },
        {
            languageName: 'nodejs',
            img: nodejs,
        },
        {
            languageName: 'nestjs',
            img: nestjs,
        },
        {
            languageName: 'express',
            img: express,
        },
        {
            languageName: 'handlebars',
            img: handlebars,
        },
        {
            languageName: 'react',
            img: react,
        },
        {
            languageName: 'mysql',
            img: mysql,
        },
        {
            languageName: 'html',
            img: html,
        },
        {
            languageName: 'materialUi',
            img: mui,
        },
    ]

    return (
        <>
            
        </>
        )
}