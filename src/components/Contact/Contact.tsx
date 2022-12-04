import React from 'react'
import {Box} from "@mui/system";
import {Hero} from "./Hero/Hero";
import { FormContainer } from './Form/FormContainer';

export const Contact = () => {
    return(
        <>
            <Box>
                <Hero/>
                <FormContainer/>
            </Box>
        </>
    )
}