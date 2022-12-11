import React from 'react'
import {Box, Container, Divider, Stack}, Button from '@mui/material'
import { AboutMe } from './AboutMe/AboutMe'
import {SocialMediaIcons } from './SocialMediaIcons/SocialMediaIcons'
import { Avatar } from './Avatar/Avatar'


export const Sidebar = () => {

    return (
        <div>
                <Stack spacing={1}>
                    <Avatar />
                    <SocialMediaIcons />
                    <Divider />
                    <AboutMe />
                    <Divider/>
                    <Button variant="outlined">
                    <a href = "mailto: kontakt@dev-olczak.pl">Wyślij e-mail</a>
                    </Button>
                </Stack>
        </div>
        )
}