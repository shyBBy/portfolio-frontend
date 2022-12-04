import React from 'react';
import {Container} from "@mui/material";
import { Contact } from '../components/Contact/Contact';

export const ContactPage = () => {
    return(
        <>
            <Container maxWidth="lg">
                <Contact/>
            </Container>
        </>
    )
}