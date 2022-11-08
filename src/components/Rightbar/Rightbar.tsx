import React from 'react'
import { AppBar, Box, Button, Card, Paper, Stack, Tooltip } from '@mui/material'
import './style.css'
import {Link, useLocation, useNavigate} from "react-router-dom";
import {navigationItems} from "../../config/navigation";

export const Rightbar = () => {

    const location = useLocation()
    const navigation = useNavigate()



    return (
        <>
            <Box style={{ width: `130px`, height: '90vh' }} position="fixed" right={'8%'}>
                <Card sx={{height: '100vh', paddingTop: '35vh'}}>
                    <Stack spacing={2} p={3}>
                        {
                            navigationItems.rightbar.map((item) => (
                                <Link
                                    key={item.text}
                                    to={item.to}
                                    className={
                                    location.pathname.includes(item.to) ? "rightbar_active" : "rightbar_inactive"
                                    }>
                                    <Box p={2} textAlign={'center'}>
                                        <Tooltip title={item.name} placement={"top"}>
                                            <i className={item.icon}></i>
                                        </Tooltip>
                                    </Box>
                                </Link>
                            ))
                        }
                    </Stack>
                </Card>
            </Box>
        </>
    )
}