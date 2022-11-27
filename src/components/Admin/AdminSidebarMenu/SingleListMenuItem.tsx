import React from 'react';
import ListItemText from '@mui/material/ListItemText';
import ContentCut from '@mui/icons-material/ContentCut';
import Typography from '@mui/material/Typography';

export const SingleListMenuItem = () => {

    return(
        <>
            <ContentCut fontSize="small" />
            <ListItemText>Cut</ListItemText>
        </>
    )
}