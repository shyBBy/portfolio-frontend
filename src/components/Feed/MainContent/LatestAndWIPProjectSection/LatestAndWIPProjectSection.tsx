import React from "react";
import {Box, Grid, Typography, useTheme, Stack, List, ListItem, Divider} from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';


export const LatestAndWIPProjectSection = ()=> {
    const theme = useTheme();
    return(
        <>
          <CssBaseline/>
          <Container fixed>
            Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                >
                    <Box>
                        <Typography variant="h1" fontSize={'20px'} component="span" color={theme.palette.primary.main}>[Projekt, nad którym aktualnie pracuje]</Typography>
                    </Box>
                    <Box>
                         <Typography variant="h1" fontSize={'20px'} component="span" color={theme.palette.primary.main}>[Ostatni, zakończony projekt]</Typography>
                    </Box>
                </Stack>
          </Container>
        </>
    )
}
