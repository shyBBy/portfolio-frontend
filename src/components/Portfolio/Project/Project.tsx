import React from 'react'
import {
    Box,
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Chip, Stack,
    Typography,
    useTheme
} from "@mui/material";
import img from '../../../assets/img/bg4.jpg'

export const Project = (props: any) => {
    const theme = useTheme();

    const {project, tags} = props;

    return(
        <>
                <Card sx={{maxWidth: 375, margin: '1rem'}}>
                    <CardActionArea>
                        <CardMedia component='img' image={img}/>
                        <CardContent>
                            <Typography variant='h5' component="div">
                                {project.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {project.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>

                    <CardActions sx={{display: 'flex', flexDirection: 'column'}}>
                        <Box sx={{width: '100%', display: 'flex', justifyContent: 'space-around', mx: 'auto', mb: 3}}>
                            <a href={project.source} style={{textDecoration: 'none'}}>
                                <Button size="small" style={{backgroundColor: "#ffc107"}} variant="contained">
                                    <Typography variant={'subtitle2'}  display={'inline-block'}>
                                        REPOZYTORIUM 
                                    </Typography>
                                </Button>
                            </a>

                            <a href={project.liveVersion} style={{textDecoration: 'none'}}>
                                <Button size="small" style={{backgroundColor: "#ffc107"}} variant="contained">
                                    <Typography variant={'subtitle2'}  display={'inline-block'}>
                                        DEMO
                                    </Typography>
                                </Button>
                            </a>
                        </Box>

                        <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: "1rem", mb: 2}}>

                            {
                                tags.map((tag: string) => (
                                    <Chip label={tag} key={tag}/>
                                ))
                            }
                        </Box>

                    </CardActions>
                </Card>
        </>
    )
}
