import {Box, Tab, Tabs } from '@mui/material';
import React from 'react'
import {Projects} from '../../../config/projects'
import {Project} from "../Project/Project";



export const Hero = () => {
    const [value, setValue] = React.useState('one');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    return(
        <>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
            >
                <Tab value="one" label="Item One" />
                <Tab value="two" label="Item Two" />
                <Tab value="three" label="Item Three" />
            </Tabs>

            <Box sx={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                
            </Box>
        </>
    )
}