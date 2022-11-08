import React from 'react'
import {Box, Grid, Typography} from "@mui/material";
import me2 from '../../../assets/img/me2.png'

export const Hero = () => {

    return(
        <>
            <Box sx={{ flexGrow: 1 }} >
                <Grid p={2}>
                    <Grid container item spacing={1} justifyContent="space-between">
                        <Grid item xs={6} p={2}>
                            <Typography variant={`h3`}>
                                Cześć, jestem Dawid
                            </Typography>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row',
                            }}>
                                <Typography variant={`h3`}>
                                    Full-Stack
                                </Typography>
                                <Typography sx={{marginLeft: '4px'}} variant={`h3`}>
                                    Developer
                                </Typography>
                            </Box>
                            <Typography variant={`body1`} sx={{color: 'rgb(158, 158, 158)'}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <img src={me2}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}