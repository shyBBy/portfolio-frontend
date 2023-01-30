import React from 'react'
import {Container} from "@mui/material";
import {MainLayout} from "../layouts/MainLayout";
import {AboutMe} from "../components/AboutMe/AboutMe";

export const AboutMePage = () => {
    return(

          <Container sx={{
              marginTop: {xs: '15%', sm: '10%', md: '10%', lg: '5%'},
              marginLeft: {xs: '10%', sm: '10%', md: '10%', lg: '10%', xl: '5'}
          }}>
              <AboutMe/>
          </Container>

    )
}