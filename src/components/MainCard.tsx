import React from "react";
import {CardMedia, Paper, CardContent, Stack, Grid, Typography, Chip, Box } from '@mui/material';
import CarCrashIcon from '@mui/icons-material/CarCrash';
import {MainCardPropInterface} from "../Interfaces/components.interfaces";

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export const MainCard = (props: MainCardPropInterface) => {


    const {title, count, direction, spacing, variant, description, chipColor, icon} = props;

    return(
        <>
            <Paper sx={{ minWidth: 275 }}>
                <CardContent>
                    <Stack spacing={0.5}>
                        <Typography variant="subtitle2" color="textSecondary">
                            {title}
                        </Typography>
                        <Grid container alignItems="center">
                            <Grid item>
                                <Typography variant="h4" color="inherit">
                                    {count}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Box color={'white'}>
                                    <Chip
                                        variant="filled"
                                        icon={icon}
                                        sx={{ ml: 1.25, pl: 1, backgroundColor: `${chipColor}`, borderRadius: '4px', }}
                                        size="small"
                                    />
                                </Box>
                                {/* <Chip variant="combined"
                                color='blue'
                                label='d'
                                sx={{ ml: 1.25, pl: 1 }}
                                size="small"
                                /> */}
                            </Grid>
                        </Grid>
                    </Stack>
                    <Box width='auto'>
                        <Typography variant="subtitle2" color="textSecondary">
                            {description}
                        </Typography>
                    </Box>
                </CardContent>
            </Paper>
        </>
    )
}