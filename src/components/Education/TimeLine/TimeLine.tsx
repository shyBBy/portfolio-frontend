import React from 'react'
import Timeline from '@mui/lab/Timeline';
import {SingleItem} from "./SingleItem/SingleItem";
import { Data } from '../data';

export const TimeLine = () => {
    return(
        <>
            <Timeline position="alternate">
                {
                 Data.course.map((item) => (
                     <SingleItem item={item}/>
                 ))
                }
            </Timeline>
        </>
    )
}