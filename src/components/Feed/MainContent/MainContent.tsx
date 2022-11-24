import React from "react";
import {Box, Divider, Grid, Paper, Typography} from "@mui/material";
import {Boxes} from "./Boxes/Boxes";
import {TechStack} from "./TechStack/TechStack";
import { LatestAndWIPProjectSection } from "./LatestAndWIPProjectSection/LatestAndWIPProjectSection";

export const MainContent = () => {

    return(
        <>
                <TechStack/>
                <Divider/>
                <LatestAndWIPProjectSection/>
        </>
    )
}