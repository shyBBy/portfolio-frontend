import React from "react";
import {Project} from "../Project/Project";
import {Data} from '../data'
import {Stack} from "@mui/material";
import { Box } from "@mui/system";

export const ProgrammingList = () => {
    return(
        <>
            <Box sx={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
                {Data.project.map((single) => (
                    <Project project={single} tags={single.tags}/>
                ))}
            </Box>
        </>
    )
}