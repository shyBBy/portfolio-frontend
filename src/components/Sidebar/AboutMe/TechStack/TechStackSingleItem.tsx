import React from 'react'
import {Icon} from "@mui/material";
import test from '../../../../assets/icons/pm2.svg'


export const TechStackSingleItem = (props: any) => {

    const {item} = props;

    return(
        <>
            <img src={item.img}/>

        </>
    )
}