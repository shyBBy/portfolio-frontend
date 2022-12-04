import React from 'react'
import {Grid} from "@mui/material";
import {Box} from "@mui/system";


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
                        <img  src='' style={{width: '30vh'}}/>
                    </Box>
                </Grid>
            </Box>
        </>
    )
}