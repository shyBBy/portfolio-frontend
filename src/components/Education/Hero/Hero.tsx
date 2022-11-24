import React from 'react'
import {Box} from "@mui/system";
import art from '../../../assets/img/undraw_graduation_re_gthn.svg'
import { Grid } from '@mui/material';

export const Hero = () => {
    return(
        <>
            <Box  sx={{width: '100%', height: '30vh'}}>

                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Box>
                        <img  src={art}/>
                    </Box>
                </Grid>
            </Box>
        </>
    )
}