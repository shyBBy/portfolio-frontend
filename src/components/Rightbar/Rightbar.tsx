import React from 'react'
import {
    AppBar,
    Box,
    Button,
    Card,
    Divider,
    List,
    ListItem,
    ListItemButton, ListItemIcon, ListItemText,
    Paper,
    Stack,
    Tab,
    Tabs,
    Toolbar,
    Tooltip, useTheme
} from '@mui/material'
import './style.css'
import {Link, useLocation, useNavigate} from "react-router-dom";
import {navigationItems} from "../../config/navigation";

export const Rightbar = () => {

    const theme = useTheme();

    return (
                    <Stack spacing={2} p={3} sx={{paddingTop: '35vh'}}>
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
                        
                      <a href='mailto: kontakt@dev-olczak.pl'>
                                              <Box p={2} textAlign={'center'}> 
                        <Tooltip title={'Napisz do mnie'} placement={"top"}>
                                            <i className={'fa-solid fa-message fa-2xl rightbar_inactive'}></i>
                                        </Tooltip>
                      
                      </Box>  
                      
                      </a>
                    </Stack>
    )
}