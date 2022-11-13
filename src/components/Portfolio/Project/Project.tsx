import React from 'react'
import {Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, Typography} from "@mui/material";
import img from '../../../assets/img/bg4.jpg'

export const Project = (props: any) => {
    return(
        <>
            <Card sx={{maxWidth: 375, margin: '1rem'}}>
                <CardActionArea>
                    <CardMedia component='img' image={img}/>
                    <CardContent>
                        <Typography variant='h5' component="div">
                            {props.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {props.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>

                <CardActions sx={{display: 'flex', flexDirection: 'column'}}>
                    <Box sx={{width: '100%', display: 'flex', justifyContent: 'space-around', mx: 'auto', mb: 3}}>
                        <Button size="small" style={{backgroundColor: "red"}} variant="contained">
                            {props.source}
                        </Button>

                        <Button size="small" style={{backgroundColor: "red"}} variant="contained">
                            {props.liveVersion}
                        </Button>
                    </Box>

                    <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: "1rem", mb: 2}}>
                        {
                            props.tags.map((tag: string) => (
                                <Chip label={tag} key={tag}/>
                            ))
                        }
                    </Box>

                </CardActions>
            </Card>
        </>
    )
}