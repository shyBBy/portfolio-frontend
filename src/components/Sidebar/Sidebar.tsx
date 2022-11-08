import { Box, Button, Card, Container, Divider } from '@mui/material'
import React from 'react'
import { AboutMe } from './AboutMe/AboutMe'
import { Avatar } from './Avatar/Avatar'
import { SocialMediaIcons } from './SocialMediaIcons/SocialMediaIcons'
import './style.css'

export const Sidebar = () => {

    return (

        <>
            <Box style={{ width: `300px`, height: '90vh' }} position="fixed" right={'81%'}>
                <Card sx={{height: '100vh'}}>
                    <Container>
                        <Avatar />
                        <SocialMediaIcons />
                        <Divider />
                        <AboutMe />
                        <Button variant="contained">Contained</Button>
                        <Button variant="contained">Contained</Button>
                        <Button variant="contained">Contained</Button>
                        <Button variant="contained">Contained</Button>
                        
                       
                     </Container>
                 </Card>
                </Box>
        </>
        )
}