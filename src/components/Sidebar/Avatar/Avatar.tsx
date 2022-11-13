import React from 'react'
import './Avatar.css'
import me3 from '../../../assets/img/me3.png'
import {Box, Container } from '@mui/material'

export const Avatar = () => {

    const me = "https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"

    return (
        <>
            <Box className="avatar" p={1}>
                <img src={me3} />
            </Box>
        </>
        )
}