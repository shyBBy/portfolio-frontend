import React from "react";
import {Box, Divider, Grid, Paper, Typography} from "@mui/material";
import {Boxes} from "./Boxes/Boxes";
import {TechStack} from "./TechStack/TechStack";
import { WhatIDoSection } from "./WhatIDoSection/WhatIDoSection";

export const MainContent = () => {

    return(
        <>
                <TechStack/>
                <Divider/>
                <WhatIDoSection/>
        </>
    )
}