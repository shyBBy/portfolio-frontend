import React from "react";
import {Box, Divider, Grid, Paper, Typography} from "@mui/material";
import {Boxes} from "./Boxes/Boxes";
import {TechStack} from "./TechStack/TechStack";
import { LatestAndWIPProjectSection } from "./LatestAndWIPProjectSection/LatestAndWIPProjectSection";

export const MainContent = () => {

    return(
        <>
            <Box sx={{ flexGrow: 1 }}>
                <TechStack/>
            </Box>
        </>
    )
}
