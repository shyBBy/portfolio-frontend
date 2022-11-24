import React from 'react'
import DoneIcon from "@mui/icons-material/Done";
import {Typography, useTheme} from "@mui/material";


export const SingleListItem = (props: any) => {

    const theme = useTheme();
    const {text} = props;

    return(
        <>
            <li>
                <DoneIcon fontSize="small" color={'primary'}/> <Typography variant={'subtitle2'} color={theme.palette.secondary.main} display={'inline-block'}>
                {text}
            </Typography>
            </li>
        </>
    )
}