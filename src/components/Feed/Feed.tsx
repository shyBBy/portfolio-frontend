import {Box, Grid} from '@mui/material'
import React from 'react'
import {Hero} from "./Hero/Hero";
import './styles.css'
import {WhatIActuallyDoSection} from "./MainContent/WhatIActuallyDo/WhatIActuallyDoSection";
import {TechStack} from "./MainContent/TechStack/TechStack";


export const Feed = () => {

    return (
        <>
            {/* row 1 */}
            <Grid container sx={{pl: 15, pt: {xs: '9%', sm: '12%', md: '7%', xl: 0, lg: 0}}} spacing={{ xs: 2, md: 2 }} columns={{ xs: 2, sm: 2, md: 12 }} >

                {/* Hero Section start */}
                <Hero/>
                {/* Hero Section end */}

                {/* DIVIDER */}
                <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />
                {/* DIVIDER */}

                {/* What i Do Section start */}

                <WhatIActuallyDoSection/>

                {/* What i Do Section end */}

                {/* DIVIDER */}
                <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />
                {/* DIVIDER */}

                {/* Techstack Section start */}
                    <TechStack/>
                {/* Techstack Section end */}
            </Grid>

        </>
    )
}
