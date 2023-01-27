import {Box, Button, Container, Grid, makeStyles, Typography} from '@mui/material'
import React from 'react'
import {Hero} from "./Hero/Hero";
import {MainContent} from "./MainContent/MainContent";
import CarCrashIcon from '@mui/icons-material/CarCrash';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ApartmentIcon from '@mui/icons-material/Apartment';
import DepartureBoardIcon from '@mui/icons-material/DepartureBoard';
import './styles.css'
import {MainCard} from "../MainCard";
import {Link} from "react-router-dom";
import art from "../../assets/img/undraw_hello_re_3evm.svg";
import './Hero/Hero.css'
import { Stack } from './MainContent/TechStack/Stack/Stack';
import {Illustration} from "./MainContent/TechStack/Ilustration/Illustration";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


export const Feed = () => {

    return (
        <>
            {/* row 1 */}
            <Grid container sx={{pl: 15}} spacing={{ xs: 2, md: 2 }} columns={{ xs: 2, sm: 2, md: 12 }}>
                <Grid item xs={12} sm={6} md={6} lg={3} >
                    <Typography variant={'h1'}>Cześć, jestem Dawid!</Typography>
                    <Typography variant={'body1'}>Uczący się Full-Stack Developer, jeśli chcesz dowiedzieć się czegoś więcej o mojej historii w programowaniu oraz życiu nie związanym z branża to kliknij w poniższy przycisk lub skorzystaj z bocznego menu :)</Typography>
                    <Link to={'/portfolio'} style={{textDecoration: 'none'}}><Button variant="outlined">Więcej o mnie...</Button></Link>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={3}>
                    <img className={'artImage'} src={art}/>
                </Grid>
                {/*<Grid item xs={12} sm={6} md={4} lg={3}>*/}
                {/*    <MainCard title={'Pojazdy'} count={78} description={'Zbliżający się termin badania technicznego.'} chipColor={`rgb(250, 173, 20)`} icon={<DepartureBoardIcon style={{color: 'white'}}/>}/>*/}
                {/*</Grid>*/}

                <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />
                <Grid item xs={12} sm={6} md={12} lg={3} style={{ textAlign: 'center' }}>
                    <Typography variant={'h1'} color="text.secondary">Co aktualnie robię?</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={12} lg={3} style={{ textAlign: 'center' }}>
                    <Typography variant={'body1'}>
                        Jestem ambitnym i zmotywowanym programistą, stale rozwijającym swoje umiejętności poprzez tworzenie projektów, oglądanie filmów instruktażowych i ciągłe uczenie się. Jestem skupiony na osiągnięciu celów i dostarczaniu jak najlepszych rozwiązań dla moich klientów.

                        Pracuję z różnymi technologiami i jestem zawsze gotów wypróbować nowe narzędzia, aby poprawić jakość moich projektów. Jestem zdeterminowany, aby rozpocząć pracę w tym zawodzie - stać się prawdziwym developerem dlatego też zawsze szukam nowych wyzwań, które pozwolą mi rozwijać się jako programista.
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={6} md={6} lg={3}>
                    <Card >
                        <CardMedia
                            sx={{ height: 140, backgroundColor: '#520404' }}
                            
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" color="text.secondary">
                                Veritas
                            </Typography>
                            <Typography variant="body2">
                                Projekt dotyczy serwera RolePlay na platformie GothicRP. Projekt składa się z wielu aspektów i ma, że tak powiem w sobie developerów od różnych zadań. Skrypt gry, modele 2D oraz 3D, grafika itp. Posiada członków ekipy takich jak GameMaster, Supporter czy Moderator Forum. Wraz z zespołem zajmujemy się webdeveloperka i naszym zadaniem jest stworzenie panelu gracza (swego rodzaju dashboard admina), w którym gracz będzie mógł stworzyć postać w grze, zarządzać nią, swoim ekwipunkiem, grupami postaci oraz wszystkim
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                
                
                <Grid item xs={12} sm={6} md={6} lg={3}>
                    <Card >
                        <CardMedia
                            sx={{ height: 140 }}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" color="text.secondary">
                                FleetPRO
                            </Typography>
                            <Typography variant="body2">
                                Aplikacja do zarządzania flotą pojazdów to narzędzie, które pozwala na łatwe i skuteczne zarządzanie zasobami transportowymi w firmie. Dostęp do aplikacji jest możliwy tylko po poprawnym zalogowaniu, a dostępne role to administrator i użytkownik z uwzględnieniem nazwy stanowiska w firmie.  

                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />
                <Grid item xs={12} sm={6} md={12} lg={3} style={{ textAlign: 'center' }}>
                    <Typography variant={'h1'} color="text.secondary">Techstack</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={12} lg={3} style={{ textAlign: 'center' }}>
                    <Typography variant={'body1'}>
                        Tutaj znajdziesz informacje o językach programowania, frameworkach, narzędziach do zarządzania projektem i wiele innych. Ta sekcja jest przeznaczona dla wszystkich, którzy chcą zobaczyć, jakie narzędzia i technologie stosuje w swoich projektach, oraz dla tych, którzy chcą dowiedzieć się więcej o moich preferencjach i metodach pracy.
                    </Typography>
                </Grid>
                    <Stack/>
            </Grid>

        </>
    )
}


<Box sx={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>

</Box>