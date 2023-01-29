import React from 'react'
import {Container} from "@mui/material";
import {MainLayout} from "../layouts/MainLayout";
import {AboutMe} from "../components/AboutMe/AboutMe";

export const AboutMePage = () => {
    return(
      <MainLayout>
        <>
          <AboutMe/>
        </>
        </MainLayout>
    )
}