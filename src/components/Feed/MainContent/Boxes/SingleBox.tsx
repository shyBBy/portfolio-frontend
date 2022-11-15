import React  from "react";
import {Box, Paper, Typography, useTheme} from "@mui/material";

export const SingleBox = (props: any) => {

    const theme = useTheme();
    const {title} = props;

    return(
        <>
            <Box>
                <Box component={'div'} bgcolor={'#ffc107'} p={'5px'} display={'inline-block'}>
                    <Typography variant={'h1'} fontSize={'50px'}>
                        {title}
                    </Typography>
                </Box>
            </Box>
        </>
    )
}