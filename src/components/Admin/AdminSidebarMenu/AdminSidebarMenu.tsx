import { Stack } from '@mui/system';
import React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';
import { SingleListMenuItem } from './SingleListMenuItem';
import { navigationItems } from '../../../config/navigation';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './style.css'

export const AdminSidebarMenu = () => {

    const location = useLocation()
    const navigation = useNavigate()
    return(
        <>
                <MenuList>
                        {
                            navigationItems.adminMenu.map((item) => (
                                <MenuItem>
                                    <Link
                                    key={item.text}
                                    to={item.to}
                                    className={
                                        location.pathname.includes(item.to) ? "menu_active" : "menu_inactive"
                                     }>
                                    <SingleListMenuItem faIcon={item.icon} text={item.text}/>
                                     </Link>
                                </MenuItem>
                            ))
                        }
                </MenuList>
        </>
    )
}