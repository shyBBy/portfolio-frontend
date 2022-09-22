import React from "react";
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import aboutMePhoto from '../../utils/me2.png'

export const AboutMePhoto = () => {
    return(
        <>
            <Grid item key='photo' xs={12} sm={6} md={6}>
                <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                    <CardMedia
                        component="img"
                        // sx={{
                        //     // 16:9
                        //     pt: '56.25%',
                        // }}
                        image={aboutMePhoto}
                        alt="random"
                    />
                    {/*<CardContent sx={{ flexGrow: 1 }}>*/}
                    {/*    <Typography gutterBottom variant="h5" component="h2">*/}
                    {/*        Heading*/}
                    {/*    </Typography>*/}
                    {/*    <Typography>*/}
                    {/*        This is a media card. You can use this section to describe the*/}
                    {/*        content.*/}
                    {/*    </Typography>*/}
                    {/*</CardContent>*/}
                </Card>
            </Grid>
        </>
    )
}