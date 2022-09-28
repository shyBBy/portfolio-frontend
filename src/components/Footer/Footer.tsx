import React from "react";
import {Box, Typography} from "@mui/material";
import {Copyright} from "@mui/icons-material";

export const Footer = () => {

    return(
        <>
            <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                    shyBBy.
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    Stworzone przez Dawid Olczak
                </Typography>
                <Copyright />
            </Box>
        </>
    )
}