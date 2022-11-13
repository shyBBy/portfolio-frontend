import React from 'react'
import {Container, Divider, Stack} from '@mui/material'
import { AboutMe } from './AboutMe/AboutMe'
import {SocialMediaIcons } from './SocialMediaIcons/SocialMediaIcons'
import { Avatar } from './Avatar/Avatar'


export const Sidebar = () => {

    return (
        <div>
            <Container>
                <Stack spacing={1}>
                    <Avatar />
                    <SocialMediaIcons />
                    <Divider />
                    <AboutMe />
                </Stack>
            </Container>
        </div>
        )
}