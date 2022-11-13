import React from 'react'
import {Box, Container, Grid} from "@mui/material";
import {Portfolio} from "../components/Portfolio/Portfolio";


export const PortfolioPage = () => {
    return(
        <>
            <Container maxWidth="lg">
                <Portfolio/>
            </Container>
        </>
    )
}