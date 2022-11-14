import React from 'react'
import {Box, Grid, Typography} from "@mui/material";
import me2 from '../../../assets/img/me2.png'

export const Hero = () => {

    return(
        <>
            <Box sx={{width: '100%'}} >
                <Grid p={2}>
                    <Grid container item spacing={1} justifyContent="space-between">
                        <Grid item xs={4}>
                            <Typography variant={'subtitle1'}>
                                Hi, I'm David, I am 25 years old. Currently, I work in a transport company as a professional driver however in my spare time I develop my programming skills. I've always been interested in everything about the computer. In the beginning, I made simple pages, graphic designs (logos, banners, avatars, layouts, etc.) and I created many private game servers (CS, metin2, GTA:SA). I had many failures, from which I have learned all the lessons, but also the successes, which have motivated me even more to continue my work. I have completed two Udemy Courses in Programming. On 1st of July, I have started a one-year course focused on teaching me basics of JS, React, Node.js, Express. I wish I had started the adventure with programming much earlier however frankly speaking because of that I am more motivated to continue of my programming path and growing skills. I do my best!
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <img src={me2}/>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant={'subtitle1'}>
                                Now i work alone or with my two friends. Together we create a full-stack developers team - devguys.pl My main professional goal is to find a job that will allow me to deepen and improve previously acquired programming skills, engage in interesting and creative projects and raise my Front-End development qualifications.I want to focus on learning JavaScript but in the future I would like to gain some experience with back-end, like node.js, express and databases (mysql, mongoDB). Also, I put a lot of work to write a clear and semantically correct code.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}