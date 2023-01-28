import React from "react";
import {Box, Grid, Typography, useTheme, Stack, List, ListItem, Divider, Container, Button} from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";


export const WhatIActuallyDoSection = ()=> {
    const theme = useTheme();
    return(
        <>
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
        </>
    )
}
