import React from 'react';
import ListItemText from '@mui/material/ListItemText';
import ContentCut from '@mui/icons-material/ContentCut';
import Typography from '@mui/material/Typography';

export const SingleListMenuItem = (props: any) => {

    const {faIcon, text} = props;

    return(
        <>
            <ContentCut fontSize="small" />
            <ListItemText>{text}</ListItemText>
        </>
    )
}