import React from 'react'
import {Grid} from "@mui/material";
import {Box} from "@mui/system";
import art from "../../../assets/img/undraw_envelope_re_f5j4.svg";

export const Hero = () => {
    return(
        <>
            <Box  sx={{width: '100%', height: '30vh', paddingTop: {xs: '18%', lg: '1%', md: '2%', sm: '5%'} }}>

                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Box>
                        <img  src={art} style={{width: '30vh'}}/>
                    </Box>
                </Grid>
            </Box>
        </>
    )
}