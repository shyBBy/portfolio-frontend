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
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
const drawerWidth = 240;

export const Rightbar = () => {

    const theme = useTheme();

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const location = useLocation()
    const navigation = useNavigate()

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );


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
                    </Stack>
    )
}