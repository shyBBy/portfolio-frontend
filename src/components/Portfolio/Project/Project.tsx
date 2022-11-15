import React from 'react'
import {
    Box,
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Chip,
    Stack,
    Typography
} from "@mui/material";
import img from '../../../assets/img/app3.png'

export const Project = (props: any) => {
    return(
        <>
            <Stack direction={"row"}>
                <Card sx={{maxWidth: 375, margin: '1rem'}}>
                    <CardActionArea>
                        <CardMedia component='img' image={img}/>
                        <CardContent>
                            <Typography variant='h5' component="div">
                                Tytuł projektu
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Krótki opis danego projektu, o co w nim chodziło po co itp.
                            </Typography>
                        </CardContent>
                    </CardActionArea>

                    <CardActions sx={{display: 'flex', flexDirection: 'column'}}>
                        <Box sx={{width: '100%', display: 'flex', justifyContent: 'space-around', mx: 'auto', mb: 3}}>
                            <Button size="small" style={{backgroundColor: "#ffc107"}} variant="contained">
                                Repozytorium
                            </Button>

                            <Button size="small" style={{backgroundColor: "#ffc107"}} variant="contained">
                                Wersja demo
                            </Button>
                        </Box>

                        <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: "1rem", mb: 2}}>
                            <Chip label='javascript' key='javascript'/>
                            <Chip label='nodejs' key='javascript'/>
                            <Chip label='mysql' key='javascript'/>
                            <Chip label='handlebars' key='javascript'/>
                        </Box>

                    </CardActions>
                </Card>
                <Card sx={{maxWidth: 375, margin: '1rem'}}>
                    <CardActionArea>
                        <CardMedia component='img' image={img}/>
                        <CardContent>
                            <Typography variant='h5' component="div">
                                Tytuł projektu
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Krótki opis danego projektu, o co w nim chodziło po co itp.
                            </Typography>
                        </CardContent>
                    </CardActionArea>

                    <CardActions sx={{display: 'flex', flexDirection: 'column'}}>
                        <Box sx={{width: '100%', display: 'flex', justifyContent: 'space-around', mx: 'auto', mb: 3}}>
                            <Button size="small" style={{backgroundColor: "#ffc107"}} variant="contained">
                                Repozytorium
                            </Button>

                            <Button size="small" style={{backgroundColor: "#ffc107"}} variant="contained">
                                Wersja demo
                            </Button>
                        </Box>

                        <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: "1rem", mb: 2}}>
                            <Chip label='javascript' key='javascript'/>
                            <Chip label='nodejs' key='javascript'/>
                            <Chip label='mysql' key='javascript'/>
                            <Chip label='handlebars' key='javascript'/>
                        </Box>

                    </CardActions>
                </Card>
                <Card sx={{maxWidth: 375, margin: '1rem'}}>
                    <CardActionArea>
                        <CardMedia component='img' image={img}/>
                        <CardContent>
                            <Typography variant='h5' component="div">
                                Tytuł projektu
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Krótki opis danego projektu, o co w nim chodziło po co itp.
                            </Typography>
                        </CardContent>
                    </CardActionArea>

                    <CardActions sx={{display: 'flex', flexDirection: 'column'}}>
                        <Box sx={{width: '100%', display: 'flex', justifyContent: 'space-around', mx: 'auto', mb: 3}}>
                            <Button size="small" style={{backgroundColor: "#ffc107"}} variant="contained">
                                Repozytorium
                            </Button>

                            <Button size="small" style={{backgroundColor: "#ffc107"}} variant="contained">
                                Wersja demo
                            </Button>
                        </Box>

                        <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: "1rem", mb: 2}}>
                            <Chip label='javascript' key='javascript'/>
                            <Chip label='nodejs' key='javascript'/>
                            <Chip label='mysql' key='javascript'/>
                            <Chip label='handlebars' key='javascript'/>
                        </Box>

                    </CardActions>
                </Card>
            </Stack>

            <Stack direction={"row"}>
                <Card sx={{maxWidth: 375, margin: '1rem'}}>
                    <CardActionArea>
                        <CardMedia component='img' image={img}/>
                        <CardContent>
                            <Typography variant='h5' component="div">
                                Tytuł projektu
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Krótki opis danego projektu, o co w nim chodziło po co itp.
                            </Typography>
                        </CardContent>
                    </CardActionArea>

                    <CardActions sx={{display: 'flex', flexDirection: 'column'}}>
                        <Box sx={{width: '100%', display: 'flex', justifyContent: 'space-around', mx: 'auto', mb: 3}}>
                            <Button size="small" style={{backgroundColor: "#ffc107"}} variant="contained">
                                Repozytorium
                            </Button>

                            <Button size="small" style={{backgroundColor: "#ffc107"}} variant="contained">
                                Wersja demo
                            </Button>
                        </Box>

                        <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: "1rem", mb: 2}}>
                            <Chip label='javascript' key='javascript'/>
                            <Chip label='nodejs' key='javascript'/>
                            <Chip label='mysql' key='javascript'/>
                            <Chip label='handlebars' key='javascript'/>
                        </Box>

                    </CardActions>
                </Card>
                <Card sx={{maxWidth: 375, margin: '1rem'}}>
                    <CardActionArea>
                        <CardMedia component='img' image={img}/>
                        <CardContent>
                            <Typography variant='h5' component="div">
                                Tytuł projektu
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Krótki opis danego projektu, o co w nim chodziło po co itp.
                            </Typography>
                        </CardContent>
                    </CardActionArea>

                    <CardActions sx={{display: 'flex', flexDirection: 'column'}}>
                        <Box sx={{width: '100%', display: 'flex', justifyContent: 'space-around', mx: 'auto', mb: 3}}>
                            <Button size="small" style={{backgroundColor: "#ffc107"}} variant="contained">
                                Repozytorium
                            </Button>

                            <Button size="small" style={{backgroundColor: "#ffc107"}} variant="contained">
                                Wersja demo
                            </Button>
                        </Box>

                        <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: "1rem", mb: 2}}>
                            <Chip label='javascript' key='javascript'/>
                            <Chip label='nodejs' key='javascript'/>
                            <Chip label='mysql' key='javascript'/>
                            <Chip label='handlebars' key='javascript'/>
                        </Box>

                    </CardActions>
                </Card>
                <Card sx={{maxWidth: 375, margin: '1rem'}}>
                    <CardActionArea>
                        <CardMedia component='img' image={img}/>
                        <CardContent>
                            <Typography variant='h5' component="div">
                                Tytuł projektu
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Krótki opis danego projektu, o co w nim chodziło po co itp.
                            </Typography>
                        </CardContent>
                    </CardActionArea>

                    <CardActions sx={{display: 'flex', flexDirection: 'column'}}>
                        <Box sx={{width: '100%', display: 'flex', justifyContent: 'space-around', mx: 'auto', mb: 3}}>
                            <Button size="small" style={{backgroundColor: "#ffc107"}} variant="contained">
                                Repozytorium
                            </Button>

                            <Button size="small" style={{backgroundColor: "#ffc107"}} variant="contained">
                                Wersja demo
                            </Button>
                        </Box>

                        <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: "1rem", mb: 2}}>
                            <Chip label='javascript' key='javascript'/>
                            <Chip label='nodejs' key='javascript'/>
                            <Chip label='mysql' key='javascript'/>
                            <Chip label='handlebars' key='javascript'/>
                        </Box>

                    </CardActions>
                </Card>
            </Stack>
            <Stack direction={"row"}>
                <Card sx={{maxWidth: 375, margin: '1rem'}}>
                    <CardActionArea>
                        <CardMedia component='img' image={img}/>
                        <CardContent>
                            <Typography variant='h5' component="div">
                                Tytuł projektu
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Krótki opis danego projektu, o co w nim chodziło po co itp.
                            </Typography>
                        </CardContent>
                    </CardActionArea>

                    <CardActions sx={{display: 'flex', flexDirection: 'column'}}>
                        <Box sx={{width: '100%', display: 'flex', justifyContent: 'space-around', mx: 'auto', mb: 3}}>
                            <Button size="small" style={{backgroundColor: "#ffc107"}} variant="contained">
                                Repozytorium
                            </Button>

                            <Button size="small" style={{backgroundColor: "#ffc107"}} variant="contained">
                                Wersja demo
                            </Button>
                        </Box>

                        <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: "1rem", mb: 2}}>
                            <Chip label='javascript' key='javascript'/>
                            <Chip label='nodejs' key='javascript'/>
                            <Chip label='mysql' key='javascript'/>
                            <Chip label='handlebars' key='javascript'/>
                        </Box>

                    </CardActions>
                </Card>
                <Card sx={{maxWidth: 375, margin: '1rem'}}>
                    <CardActionArea>
                        <CardMedia component='img' image={img}/>
                        <CardContent>
                            <Typography variant='h5' component="div">
                                Tytuł projektu
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Krótki opis danego projektu, o co w nim chodziło po co itp.
                            </Typography>
                        </CardContent>
                    </CardActionArea>

                    <CardActions sx={{display: 'flex', flexDirection: 'column'}}>
                        <Box sx={{width: '100%', display: 'flex', justifyContent: 'space-around', mx: 'auto', mb: 3}}>
                            <Button size="small" style={{backgroundColor: "#ffc107"}} variant="contained">
                                Repozytorium
                            </Button>

                            <Button size="small" style={{backgroundColor: "#ffc107"}} variant="contained">
                                Wersja demo
                            </Button>
                        </Box>

                        <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: "1rem", mb: 2}}>
                            <Chip label='javascript' key='javascript'/>
                            <Chip label='nodejs' key='javascript'/>
                            <Chip label='mysql' key='javascript'/>
                            <Chip label='handlebars' key='javascript'/>
                        </Box>

                    </CardActions>
                </Card>
                <Card sx={{maxWidth: 375, margin: '1rem'}}>
                    <CardActionArea>
                        <CardMedia component='img' image={img}/>
                        <CardContent>
                            <Typography variant='h5' component="div">
                                Tytuł projektu
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Krótki opis danego projektu, o co w nim chodziło po co itp.
                            </Typography>
                        </CardContent>
                    </CardActionArea>

                    <CardActions sx={{display: 'flex', flexDirection: 'column'}}>
                        <Box sx={{width: '100%', display: 'flex', justifyContent: 'space-around', mx: 'auto', mb: 3}}>
                            <Button size="small" style={{backgroundColor: "#ffc107"}} variant="contained">
                                Repozytorium
                            </Button>

                            <Button size="small" style={{backgroundColor: "#ffc107"}} variant="contained">
                                Wersja demo
                            </Button>
                        </Box>

                        <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: "1rem", mb: 2}}>
                            <Chip label='javascript' key='javascript'/>
                            <Chip label='nodejs' key='javascript'/>
                            <Chip label='mysql' key='javascript'/>
                            <Chip label='handlebars' key='javascript'/>
                        </Box>

                    </CardActions>
                </Card>
            </Stack>
        </>
    )
}