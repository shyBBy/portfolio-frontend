import { Box, Grid, Paper, styled, Typography } from '@mui/material'
import React from 'react'

export const StackInfo = () => {



    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Box bgcolor="lightcoral">
                        <Typography variant="body2" component="p">
                            WIEK:
                        </Typography>
                    </Box>
                    <Box bgcolor="lightcoral">
                        <Typography variant="body2" component="p">
                            LOKALIZACJA:
                        </Typography>
                    </Box>
                    <Box bgcolor="lightcoral">
                        <Typography variant="body2" component="p">
                            STATUS:
                        </Typography>
                    </Box>
                    <Box bgcolor="lightcoral">
                        <Typography variant="body2" component="p">
                            WIEK:
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="body2" component="p" >
                        Full-Stack
                    </Typography>
                    <Typography variant="body2" component="p" >
                        Full-Stack
                    </Typography>
                    <Typography variant="body2" component="p" >
                        Full-Stack
                    </Typography>
                    <Typography variant="body2" component="p" >
                        Full-Stack
                    </Typography>

                </Grid>
            </Grid>
        </>
        )
}