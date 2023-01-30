import React from 'react'
import {Container} from "@mui/material";
import {Education} from "../components/Education/Education";
import {Hero} from "../components/Education/Hero/Hero";

export const EducationPage = () => {
    return(
        <>
            <Container maxWidth="lg" sx={{
                marginTop: {xs: '13%'}
            }}>
                <Education/>
            </Container>
        </>
    )
}