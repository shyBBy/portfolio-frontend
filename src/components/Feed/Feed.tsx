import {Box, Container} from '@mui/material'
import React from 'react'
import {Hero} from "./Hero/Hero";
import {MainContent} from "./MainContent/MainContent";


interface Props {
    children: React.ReactNode;
}

export const Feed = () => {

    return (
        <>
            <MainContent/>
        </>
    )
}