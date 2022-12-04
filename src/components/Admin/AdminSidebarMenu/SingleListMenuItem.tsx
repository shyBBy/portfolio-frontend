import React from 'react';
import ListItemText from '@mui/material/ListItemText';
import ContentCut from '@mui/icons-material/ContentCut';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';

export const SingleListMenuItem = (props: any) => {

    const {faIcon, text} = props;

    return(
        <>
            
            <i className={faIcon}></i>
            <ListItemText>{text}</ListItemText>

        </>
    )
}