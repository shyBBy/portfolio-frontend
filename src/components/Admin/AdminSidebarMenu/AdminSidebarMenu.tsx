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

export const AdminSidebarMenu = () => {
    return(
        <>
            <Stack>
                <MenuList>
                    <MenuItem>
                        <SingleListMenuItem/>
                    </MenuItem>
                </MenuList>
            </Stack>
        </>
    )
}