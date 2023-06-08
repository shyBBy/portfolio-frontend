import React from "react";
import {Button, Grid, Typography, useTheme} from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import reactNative from '../../../../assets/img/reactNative.png'
import woocommerce from '../../../../assets/img/woocoomerce.png'

export const WhatIActuallyDoSection = () => {
    const theme = useTheme();
    return (
        <>
            <Grid item xs={12} sm={6} md={12} lg={3} style={{textAlign: 'center'}}>
                <Typography variant={'h1'} color="text.secondary">Co aktualnie robię?</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={12} lg={3} style={{textAlign: 'center'}}>
                <Typography variant={'body1'}>
                    Jestem ambitnym i zmotywowanym programistą, stale rozwijającym swoje umiejętności poprzez tworzenie
                    projektów, oglądanie filmów instruktażowych i ciągłe uczenie się. Jestem skupiony na osiągnięciu
                    celów i dostarczaniu jak najlepszych rozwiązań dla moich klientów.

                    Pracuję z różnymi technologiami i jestem zawsze gotów wypróbować nowe narzędzia, aby poprawić jakość
                    moich projektów. Jestem zdeterminowany, aby rozpocząć pracę w tym zawodzie - stać się prawdziwym
                    developerem dlatego też zawsze szukam nowych wyzwań, które pozwolą mi rozwijać się jako programista.
                </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={6} lg={3}>
                <Card>
                    <CardMedia
                        sx={{height: 140, backgroundColor: '#520404'}}
                        image={reactNative}
                        title="React-Native"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" color="text.secondary">
                            React Native
                        </Typography>
                        <Typography variant="body2">
                            Aktualnie oddaję się zgłębianiu tajników programowania w React Native - frameworku, który umożliwia tworzenie aplikacji mobilnych. Z ogromną pasją i zaangażowaniem uczę się korzystać z tego narzędzia, wykorzystując przy tym platformę Expo, która usprawnia proces tworzenia, testowania i wdrażania aplikacji.

                            Chociaż jestem na początkowym etapie tej podróży, to nieustannie rozwijam swoje umiejętności, tworząc aplikacje do zarządzania zamówieniami. Moje projekty wykorzystują kilka niezależnych modułów zewnętrznych, które integrują się za pomocą REST API. Dążę do tworzenia aplikacji, które nie tylko są estetyczne i intuicyjne dla użytkowników, ale także zapewniają optymalne zarządzanie zamówieniami.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button href='https://github.com/shyBBy/fe_shop_manager' size="small">Repozytorium frontend</Button>
                        <Button href='https://github.com/shyBBy/be_shop_manager' size="small">Repozytorium backend</Button>
                    </CardActions>
                </Card>
            </Grid>


            <Grid item xs={12} sm={6} md={6} lg={3}>
                <Card>
                    <CardMedia
                        sx={{height: 140}}
                        image={woocommerce}
                        title="WooCommerce"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" color="text.secondary">
                            WooCommerce
                        </Typography>
                        <Typography variant="body2">
                            W ostatnim czasie poświęciłem czas na zgłębianie wiedzy z zakresu WordPressa oraz jednego z najpopularniejszych modułów sklepowych - WooCommerce. W ramach tego procesu, skonfigurowałem cały serwer VPS, zajmując się domeną, hostingiem, certyfikatem SSL oraz konfiguracją całego sklepu.

                            Moje doświadczenie obejmuje także integrację różnych systemów płatności i zewnętrznych aplikacji, tworząc kompleksowe rozwiązania dla klientów. Dzięki temu, jestem w stanie stworzyć zoptymalizowany interfejs oraz zapewnić płynne zarządzanie zamówieniami.

                            Nieustannie poszerzam swoje umiejętności, a obecnie również zgłębiam możliwości tworzenia aplikacji mobilnych przy użyciu frameworka React Native. To połączenie wiedzy z zakresu WooCommerce i umiejętności tworzenia aplikacji mobilnych pozwala mi na tworzenie rozbudowanych rozwiązań do zarządzania zamówieniami.

                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button href='https://bigsewciu.shop' size="small">Live Demo</Button>
                    </CardActions>
                </Card>
            </Grid>
        </>
    )
}
