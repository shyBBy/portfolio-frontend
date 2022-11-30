import { Box} from '@mui/system'
import React from 'react'
import {Button, Container, Divider, Grid, Stack, Typography, useTheme} from "@mui/material";
import {LatestAndWIPProjectSection} from "../Feed/MainContent/LatestAndWIPProjectSection/LatestAndWIPProjectSection";
import img from "../../assets/img/undraw_coding_re_iv62.svg";
import graphicImg from "../../assets/img/undraw_image_viewer_re_7ejc.svg";
import codingImg from "../../assets/img/undraw_code_review_re_woeb.svg";
import maleAvatar from '../../assets/img/undraw_male_avatar_re_y880.svg';
import certificateImg from '../../assets/img/undraw_certificate_re_yadi.svg';
import websiteHtmlCss from '../../assets/img/undraw_static_website_re_x70h.svg';
import gamingImg from '../../assets/img/undraw_video_game_night_8h8m.svg';
import webDeveloperImg from '../../assets/img/undraw_web_developer_re_h7ie.svg';
import teamWork from '../../assets/img/undraw_team_collaboration_re_ow29.svg';
import learnImg from '../../assets/img/undraw_learning_re_32qv.svg';
import learnImg2 from '../../assets/img/undraw_online_learning_re_qw08.svg';
import megaKlogo from '../../assets/img/megaKlogo.png'
import CssBaseline from '@mui/material/CssBaseline';

export const Content = () => {

    const theme = useTheme();

    return(
        <>
        <CssBaseline />
            <Container fixed>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                >
                    <Box>
                        <Typography variant="h1" fontSize={'20px'} component="span" color={theme.palette.primary.main}>[Kilka słów o mnie - tak na początek]</Typography>
                        <Typography
                            variant={'body1'}
                            color={theme.palette.secondary.main}
                        >
                            Jestem Dawid i mam 27 lat. Aktualnie pracuje jako kierowca zawodowy w prywatnej, całkiem sporej firmie handlowo-transportowej. Skoro tutaj jesteś to znaczy, że moja strona jest gotowa i zapewne na bieżąco aktualizowana. Przygotowałem kilka sekcji na tej podstronie. Postarałem się opisać swoją historię, wszystkie etapy w moim życiu, które doprowadziły mnie tu gdzie jestem i przyszłe, które zaprowadzą mnie tam gdzie chce.
                        </Typography>
                    </Box>
                    <Box>
                        <img
                            src={maleAvatar}
                            style={{
                                width: '300px',
                                height: '300px'
                            }}/>
                    </Box>
                </Stack>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                >
                    <Box>
                        <img
                            src={gamingImg}
                            style={{
                                width: '300px',
                                height: '300px'
                            }}/>
                    </Box>
                    <Box>
                        <Typography variant="h1" fontSize={'20px'} component="span" color={theme.palette.primary.main}>[Zainteresowanie komputerami]</Typography>
                        <Typography
                            variant={'body1'}
                            color={theme.palette.secondary.main}
                        >
                            Odkąd tylko pamiętam zawsze interesowałem się sprzętem komputerowym, elektroniką oraz wszystkimi innymi rzeczami, które miały z tym coś wspólnego. Gdy w drugiej klasie podstawówki otrzymałem od mamy swój pierwszy PC - uśmiech na mojej twarzy był ogromny. Jak to bywa u większości dzieci w pierwszej kolejności poczułem chęć grania w różnego rodzaju gry, a ten "zapał" i zainteresowanie elektroniką momentalnie zanikł (jak się okazało kilka lat później on tylko lekko przygasł.)
                        </Typography>
                        <Typography
                            variant={'body1'}
                            color={theme.palette.secondary.main}
                        >
                            W okresie gimnazjum zaczeliśmy grać, na tamten okres czasu w bardzo popularną, sieciową strzelankę. Organizowaliśmy turnieje w szkole, ale też i jeździliśmy na większe imprezy lanowe gdzie braliśmy udział w pojedynkę lub całym teamem w zawodach e-sportowych. Wtedy właśnie postanowiliśmy stworzyć swoją pierwszą drużynę. Zawsze lubiłem, aby wszystko było profesjonalne, poukładane i aby niczego nie brakowało. Nazwę, logo oraz stronę drużyny sam wymyśliłem i wykonałem. To właśnie wtedy mój zapał i zainteresowanie znów się pojawiło.
                        </Typography>
                    </Box>
                </Stack>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                >
                    <Box>
                        <Typography variant="h1" fontSize={'20px'} component="span" color={theme.palette.primary.main}>[Pierwsze strony i projekty graficzne]</Typography>
                        <Typography
                            variant={'body1'}
                            color={theme.palette.secondary.main}
                        >
                            Oczywiście wszystkie te pierwsze strony były bardzo amatorskie i napisane jedynie w HTML oraz CSS, a często też ograniczały się do gotowego szablonu na silniku CMS Webspell. Zaprojektowanie strony to jedno, ale wypuszczenie jej na świat to inna kwestia. Wtedy też zacząłem się zastanawiać jak to wszystko wygląda, co trzeba zrobić, aby mieć stronę dostępną dla wszystkich. Z dnia na dzień zdobywałem coraz to nowszą wiedzę oraz umiejętności - podszedłem wtedy do tego bardzo poważnie i skrupulatnie. Zrozumiałem czym jest domena internetowa, hosting www, adres ip, port itp.
                        </Typography>
                        <Typography
                            variant={'body1'}
                            color={theme.palette.secondary.main}
                        >
                            Nie znałem wtedy jeszcze serwerów dedykowanych i VPS'ów i korzystałem jedynie z hostingów www, bez własnej domeny. Tak samo, jak strony internetowe swój początek miały również projekty graficzne. W tamtym okresie wykonywałem bardzo dużo bannerów, avatarów drużynowych oraz logotypów dla drużyn e-sportowych.
                        </Typography>
                    </Box>
                    <Box>
                        <img
                            src={webDeveloperImg}
                            style={{
                                width: '300px',
                                height: '300px'
                            }}/>
                    </Box>
                </Stack>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                >
                    <Box>
                        <img
                            src={teamWork}
                            style={{
                                width: '300px',
                                height: '300px'
                            }}/>
                    </Box>
                    <Box>
                        <Typography variant="h1" fontSize={'20px'} component="span" color={theme.palette.primary.main}>[Projekty serwerów dla graczy]</Typography>
                        <Typography
                            variant={'body1'}
                            color={theme.palette.secondary.main}
                        >
                            Kilka lat później podczas grania w San Andreas MultiPlayer, na jednym z polskich serwerów RolePlay wraz, ze znajomymi postanowiliśmy stworzyć swój własny projekt - i tak też się stało. Ja wtedy niestety nie potrafiłem programować i nie byłem w stanie napisać kodu gry (w języku PAWN) ani zaprojektować panelu gracza (w języku PHP) - był od tego Łukasz, a ja znalazłem dla siebie inną pracę. Zajmowałem się konfiguracją serwera vps (linux-debian), instalacją serwera www (apache/nginx), dodaniem domeny, zainstalowaniem forum (silnik ipb) oraz zarządzaniem całym projektem i jego ekipą. Dzięki temu nauczyłem się wszystkiego od strony technicznej i w kolejnych etapach mogłem tę wiedzę śmiało wykorzystywać.
                        </Typography>
                    </Box>
                </Stack>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                >
                    <Box>
                        <Typography variant="h1" fontSize={'20px'} component="span" color={theme.palette.primary.main}>[Początki w świecie programowania - kursy i cerftyfikaty]</Typography>
                        <Typography
                            variant={'body1'}
                            color={theme.palette.secondary.main}
                        >
                            Nadszedł ten moment, czas na zrobienie większego i poważniejszego kroku na drodze ku zostania programistą. Tak jak sobie pomyślałem tak też zrobiłem. Wykupiłem wtedy swój pierwszy kurs na udemy - były to podstawy HTML i css (tak dla odświeżenia mojej wiedzy z wcześniejszych lat). Kurs ten oczywiście pomyślnie ukończyłem wraz z certyfikatem. Następnym krokiem w internetowej edukacji było wykupienie kolejnego kursu również na udemy. Tym razem był to kurs poważniejszy, w pełni poświęcony wszelakim zagadnieniom z programowaniem w javascript. Jego ukończenie zajęło mi znacznie więcej czasu niż ten poprzedni, lecz jednocześnie dał mi on większą wiedzę.
                        </Typography>
                        <Stack direction={'row'} spacing={'10px'} justifyContent={'center'}>
                            <Button variant={'outlined'}><a href={'https://www.udemy.com/certificate/UC-55e23909-7675-4c99-9920-17e838a6653a/'} style={{textDecoration: 'none', color: '#FFC107'}}> Certyfikat z kursu: Web developer od podstaw</a></Button>
                            <Button variant={'outlined'}><a href={'https://www.udemy.com/certificate/UC-ab7d4270-3170-4440-90b1-0155dfeba4f3/'} style={{textDecoration: 'none', color: '#FFC107'}}> Certyfikat z kursu: Programowanie w JavaScript</a></Button>

                        </Stack>
                    </Box>
                    <Box>
                        <img
                            src={certificateImg}
                            style={{
                                width: '300px',
                                height: '300px'
                            }}/>
                    </Box>
                </Stack>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                >
                    <Box>
                        <img
                            src={megaKlogo}
                            style={{
                                width: '300px',
                                height: '300px'
                            }}/>
                    </Box>
                    <Box>
                        <Typography variant="h1" fontSize={'20px'} component="span" color={theme.palette.primary.main}>[Profesjonalny, roczny kurs programowania - MegaK]</Typography>
                        <Typography
                            variant={'body1'}
                            color={theme.palette.secondary.main}
                        >
                            Ostatnim dotychczas, najdłuższym i najlepszym kursem, jaki wybrałem oraz ukończyłem z wynikiem pozytywnym, był kurs na platformie MegaK. Składał się on aż z 8 etapów podstawowych oraz jednego, ostatniego etapu bonusowego dla osób, które zaliczyły wszystkie egzaminy oraz wykonały projekt końcowy. Poznałem tutaj bardzo dużo nowych technologi, frameworków i innych tego typu rzeczy. Podczas uczestnictwa w tym kursie stwierdziłem, że bardziej komfortowo czuje się jako Back-End developer z lekkim wykorzystaniem frontu (react + biblioteka css). Poniżej wstawię fragment tekstu z oficjalnej strony tego kursu, który opisuje jego ostatni etap.
                        </Typography>
                        <Typography
                            variant={'body2'}
                            color={theme.palette.secondary.main}
                            sx={{border: 'solid 1px #FFC107'}}
                            p={'3px'}
                        >
                            "9. etap to cztery tygodnie praktyki. Chcemy, by była to dla uczestników symulacja realnej pracy programisty w grupie, przy realnym projekcie. Będziemy pracować w oparciu o Gita i Scruma. Czekają na Was różne zadania (podział pracy), ocena kodu (code review) oraz udział gości z software house’ów, którzy będą służyć radami, jak również będą obserwować Waszą pracę."
                        </Typography>
                    </Box>
                </Stack>
            </Container>
        </>
    )
}